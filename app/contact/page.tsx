import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return(
    <div className="h-[calc(100vh-85px)] bg-[url('/images/herobg.jpg')] flex justify-center items-center">
      <ContactForm />
    </div>
  )
}