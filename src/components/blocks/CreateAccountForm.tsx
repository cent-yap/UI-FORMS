// Page connection
import { Link } from "react-router-dom";
import { SLIDE_COUNT } from "../../constants/form";
import { useShowPassword } from "../../hooks/useShowPassword";
import { handleSubmit } from "../../utils/formHandlers";

function CreateAccount() {
  const { showPassword, setShowPassword } = useShowPassword();

  return (
    <>

      <section id="create-account-section" className="create-account" aria-labelledby="create-account-heading" aria-describedby="create-account-description">
        <div className="create-account__container">
          <div className="create-account__inner">
            <form className="create-account-form" autoComplete="on" noValidate onSubmit={handleSubmit}>
              <header className="create-account-form__header">
                <hgroup className="create-account-form__hgroup">
                  <h1 id="create-account-heading" className="create-account-form__title">Start your journey.</h1>
                  <p id="create-account-description" className="create-account-form__description">One account. Everything you need.</p>
                </hgroup>
              </header>

              <p className="create-account-form__required-note visually-hidden">Fields marked with an asterisk (*) are required.</p>

              <div className="create-account-form__field">
                <label className="create-account-form__label" htmlFor="first-name">
                  First Name <span className="create-account-form__required" aria-hidden="true">*</span>
                </label>
                <input className="create-account-form__input" type="text" id="first-name" name="first-name" pattern="[\p{L}\p{M}\s\.\-']+" minLength={2} maxLength={100} placeholder=" " 
                 autoComplete="given-name" aria-describedby="firstname-hint firstname-error firstname-success" required/>
                <span id="firstname-hint" className="create-account-form__hint">e.g. Juan</span>
                <span id="firstname-error" className="create-account-form__message create-account-form__message--error" role="alert" hidden>Letters & hyphens only.</span>
                <span id="firstname-success" className="create-account-form__message create-account-form__message--success" role="status" hidden>First name confirmed.</span>
              </div>

              <div className="create-account-form__field">
                <label className="create-account-form__label" htmlFor="last-name">
                  Last Name <span className="create-account-form__required" aria-hidden="true">*</span>
                </label>
                <input className="create-account-form__input" type="text" id="last-name" name="last-name" pattern="[\p{L}\p{M}\s\.\-']+" minLength={2} maxLength={100} placeholder=" " 
                       autoComplete="family-name" aria-describedby="lastname-hint lastname-error lastname-success" required/>
                <span id="lastname-hint" className="create-account-form__hint">e.g. dela Cruz</span>
                <span id="lastname-error" className="create-account-form__message create-account-form__message--error" role="alert" hidden>Please check your last name.</span>
                <span id="lastname-success" className="create-account-form__message create-account-form__message--success" role="status" hidden>Last name looks good.</span>
              </div>

              <div className="create-account-form__field">
                <label className="create-account-form__label" htmlFor="email">
                  Email <span className="create-account-form__required" aria-hidden="true">*</span>
                </label>
                <input className="create-account-form__input" type="email" id="email" name="email" placeholder=" " 
                 autoComplete="email" aria-describedby="email-hint email-error email-success" aria-invalid="false" required/>
                <span id="email-hint" className="create-account-form__hint">e.g. example@email.com</span>
                <span id="email-error" className="create-account-form__message create-account-form__message--error" role="alert" hidden>Invalid email address.</span>
                <span id="email-success" className="create-account-form__message create-account-form__message--success" role="status" hidden>That email works.</span>
              </div>

              <div className="create-account-form__field">
                <label className="create-account-form__label" htmlFor="password">
                  Password <span className="create-account-form__required" aria-hidden="true">*</span>
                </label>
                <input className="create-account-form__input" type={showPassword ? "text" : "password"} id="password" name="password" minLength={8} placeholder=" " 
                       autoComplete="new-password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$" aria-describedby="password-hint password-error password-success" aria-invalid="false" required/>
                <span id="password-hint" className="create-account-form__hint">8+ chars · A-z · 0-9 · !@#$</span>
                <span id="password-error" className="create-account-form__message create-account-form__message--error" role="alert" hidden>Password doesn't meet requirements.</span>
                <span id="password-success" className="create-account-form__message create-account-form__message--success" role="status" hidden>Password accepted.</span>
              </div>

              <div className="create-account-form__controls create-account-form__controls--single">
                <label className="create-account-form__checkbox-label" htmlFor="show">
                  <input className="create-account-form__checkbox" type="checkbox" id="show" name="show" checked={showPassword} onChange={() => setShowPassword(!showPassword)} aria-controls="password"/>
                </label>
              </div>

              <div className="create-account-form__actions">
                <button type="submit" className="create-account-form__submit btn btn--submit">Get started</button>
              </div>

              <footer className="create-account-form__footer">
                <p className="create-account-form__footer-text">Been here before?</p>
                <Link className="create-account-form__footer-link" to="/" viewTransition>Welcome back.</Link>
              </footer>
            </form>

            <div className="create-account-slider" aria-hidden="true">
              {Array.from({ length: SLIDE_COUNT }, (_, index) => (
                <div key={index} className="create-account-slider__item"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateAccount;
