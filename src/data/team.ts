import { ReactNode } from "react";


export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  website?: string;
}

export interface TeamMember {
  role: ReactNode;
  id: string;
  name: string;
  position: string;
  image: string;
  description?: string;
  education?: string;
  expertise?: string[];
  socialLinks?: SocialLinks;
  joinDate?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
    {
      name: "Sam Wujiale",
      role: "Founder",
      description: "Leads our vision for innovative designs, curating the Mosaic Event's unique aesthetic.",
      image: "/ORS_Sam_v60.jpg",
      id: "",
      position: ""
    },
    {
      name: "Sreng Sannyaliza",
      role: "Co-Founder",
      description: "Drives technical excellence, ensuring seamless digital experiences for Mosaic Event.",
      image: "/ORS_Liza_v60.jpg",
      id: "",
      position: ""
    },
    {
      name: "Horn Davin",
      role: "Head of Event Team",
      description: "Amplifies our message, connecting the Mosaic Event to a global audience.",
      image: "/ORS_Davin_v60.jpg",
      id: "",
      position: ""
    }
];

// Helper function to get team member by ID
export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return TEAM_MEMBERS.find(member => member.id === id);
};
