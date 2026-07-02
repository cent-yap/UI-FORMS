// Page styles
import "../styles/pages/forgot-password.css";
import ForgotPassword from "../components/blocks/ForgotPasswordForm"
import { Helmet } from "react-helmet-async";

function ForgotPasswordPage() {
  return (
    <>

      <Helmet>
        <title>Forgot Password</title>
      </Helmet>

      <main className="main-content">
        <ForgotPassword/>
      </main>
    </>
  );
}

export default ForgotPasswordPage;
