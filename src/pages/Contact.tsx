// Page connection
import "../styles/pages/contact.css";
import Contact from "../components/blocks/ContactForm"
import { Helmet } from "react-helmet-async";

function ContactPage() {
  return (
    <>
    
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <main className="main-content">
        <Contact/>
      </main>
    </>
  );
}

export default ContactPage;
