import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Arova to commission a room, a home, a restaurant or an office floor.",
};

export default function Page() {
  return <ContactPage />;
}
