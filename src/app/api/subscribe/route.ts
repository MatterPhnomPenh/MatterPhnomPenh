import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL!,
        pass: process.env.SMTP_PASS!,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL, // Send to yourself
      subject: "New Subscriber",
      text: `
New subscriber details:

Full Name: ${firstName} ${lastName}
Email: ${email}
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  // } catch (error: any) {
  //   console.error("Email send failed:", error);
  //   return NextResponse.json(
  //     { error: "Failed to send email" },
  //     { status: 500 }
  //   );
  // }
  } catch (error) {
  console.error("Email send failed:", error instanceof Error ? error.message : error);
  return NextResponse.json(
    { error: "Failed to send email" },
    { status: 500 }
  );
}
}
