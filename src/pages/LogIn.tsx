// Page connection
import "../styles/pages/login.css";
import LogIn from "../components/blocks/LogInForm"
import { Helmet } from "react-helmet-async";

function LogInPage() {
  return (
    <>

      <Helmet>
        <title>Log In</title>
      </Helmet>

      <main className="main-content">
        <LogIn/>
      </main>
    </>
  )
}

export default LogInPage
