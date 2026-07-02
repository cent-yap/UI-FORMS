// Page connection
import "../styles/pages/create-account.css";
import CreateAccount from "../components/blocks/CreateAccountForm"
import { Helmet } from "react-helmet-async";

function CreateAccountPage() {
  return (
    <>

      <Helmet>
        <title>Create Account</title>
      </Helmet>

      <main className="main-content">
        <CreateAccount/>
      </main>
    </>
  );
}

export default CreateAccountPage;
