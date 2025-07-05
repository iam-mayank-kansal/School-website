import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const footerSections = [
    {
        title: "Quick Links",
        links: [
            { label: "About Us", href: "/" },
            { label: "Admission", href: "/" },
            { label: "Facilities", href: "/" },
            { label: "Enquiry", href: "/" },
            { label: "Student Zones", href: "/" },
            { label: "Contact Us", href: "/" },
        ],
    },
    {
        title: "Need Help",
        links: [
            { label: "Franchise", href: "/" },
            { label: "Faqs", href: "/" },
            { label: "Terms & Conditions", href: "/" },
            { label: "Privacy Policy", href: "/" },
        ],
    },
    {
        title: "Gallery",
        links: [
            { label: "Photo Gallery", href: "/" },
            { label: "Video Gallery", href: "/" },
            { label: "Media Gallery", href: "/" },
        ],
    },
];

export const socialLinks = [
  { icon: <Instagram className="text-white" />, color: "#F02592" },
  { icon: <Facebook className="text-white" />, color: "#1877F2" },
  { icon: <Twitter className="text-white" />, color: "#1DA1F2" },
  { icon: <Youtube className="text-white" />, color: "#FF0000" },
];
