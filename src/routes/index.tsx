import { createBrowserRouter } from "react-router-dom";
import LogIn from "../pages/LogIn";
import Contact from "../pages/Contact";
import CreateAccount from "../pages/CreateAccount";
import ForgotPassword from "../pages/ForgotPassword";

export const router = createBrowserRouter([
  { path: "/", element: <LogIn/> },
  { path: "/contact", element: <Contact/> },
  { path: "/create-account", element: <CreateAccount/> },
  { path: "/forgot-password", element: <ForgotPassword/> },
]);
