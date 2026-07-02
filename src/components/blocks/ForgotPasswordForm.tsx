// Page connection
import { Link } from "react-router-dom";
import { SLIDE_COUNT } from "../../constants/form";
import { handleSubmit } from "../../utils/formHandlers";

function ForgotPassword() {
  return (
    <>

      <section id="forgot-password-section" className="forgot-password" aria-labelledby="forgot-password-heading" aria-describedby="forgot-password-description">
        <div className="forgot-password__container">
          <div className="forgot-password__inner">
            <form className="forgot-password-form" autoComplete="on" noValidate onSubmit={handleSubmit}>
              <header className="forgot-password-form__header">
                <hgroup className="forgot-password-form__hgroup">
                  <h1 id="forgot-password-heading" className="forgot-password-form__title">Happens to everyone.</h1>
                  <p id="forgot-password-description" className="forgot-password-form__description">No worries, enter your email and we'll send you a reset link.</p>
                </hgroup>
              </header>

              <p className="forgot-password-form__required-note visually-hidden">Fields marked with an asterisk (*) are required.</p>

              <div className="forgot-password-form__field">
                <label className="forgot-password-form__label" htmlFor="email">
                  Email <span className="forgot-password-form__required" aria-hidden="true">*</span>
                </label>
                <input className="forgot-password-form__input" type="email" id="email" name="email" placeholder=" " 
                       autoComplete="email" aria-describedby="email-hint email-error email-success" aria-invalid="false" required/>
                <span id="email-hint" className="forgot-password-form__hint">We'll send the recovery link here.</span>
                <span id="email-error" className="forgot-password-form__message forgot-password-form__message--error" role="alert" hidden>Invalid email address.</span>
                <span id="email-success" className="forgot-password-form__message forgot-password-form__message--success" role="status" hidden>That email works.</span>
              </div>

              <div className="forgot-password-form__actions">
                <button type="submit" className="forgot-password-form__submit btn btn--submit">Reset password</button>
              </div>

              <footer className="forgot-password-form__footer">
                <p className="forgot-password-form__footer-text">Remembered it?</p>
                <Link className="forgot-password-form__footer-link" to="/" viewTransition>Head back.</Link>
              </footer>
            </form>

            <div className="forgot-password-slider" aria-hidden="true">
              {Array.from({ length: SLIDE_COUNT }, (_, index) => (
                <div key={index} className="forgot-password-slider__item"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
