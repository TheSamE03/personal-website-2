// app/contact/page.tsx
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact • Sam Erne",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Contact</h1>
      <ContactForm />
    </div>
  );
}
