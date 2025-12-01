'use client';
import { useEffect } from 'react';

export default function ThemeDetector() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const nav = document.querySelector('header');
    if (!nav) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let hasLight = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.getAttribute('data-theme') === 'light') {
            hasLight = true;
          }
        });

        if (hasLight) {
          nav.classList.add('nav-light');
          nav.classList.remove('nav-dark');
        } else {
          nav.classList.add('nav-dark');
          nav.classList.remove('nav-light');
        }
      },
      {
        rootMargin: '-1px 0px 0px 0px', // triggers exactly when section touches top
        threshold: 0,
      }
    );

    // Observe all sections with data-theme
    document.querySelectorAll('[data-theme]').forEach((section) => {
      observer.observe(section);
    });

    // Initial check
    if (!document.querySelector('[data-theme="light"]')) {
      nav.classList.add('nav-dark');
    }

    return () => observer.disconnect();
  }, []);

  return null;
}