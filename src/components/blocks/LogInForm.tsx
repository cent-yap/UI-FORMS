// Page connection
import { Link } from "react-router-dom";
import { SLIDE_COUNT } from "../../constants/form";
import { useShowPassword } from "../../hooks/useShowPassword";
import { handleSubmit } from "../../utils/formHandlers";

function LogIn() {
  const { showPassword, setShowPassword } = useShowPassword();

  return (
    <>

      <section id="login-section" className="login" aria-labelledby="login-heading" aria-describedby="login-description">
        <div className="login__container">
          <div className="login__inner">
            <form className="login-form" autoComplete="on" noValidate onSubmit={handleSubmit}>
              <header className="login-form__header">
                <hgroup className="login-form__hgroup">
                  <h1 id="login-heading" className="login-form__title">Hey, you're back!</h1>
                  <p id="login-description" className="login-form__description">Login to pick up where you left off, or 
                    <Link className="login-form__contact-link" to="/contact" viewTransition>reach out to support</Link> if you're locked out.
                  </p>
                </hgroup>
              </header>

              <p className="login-form__required-note visually-hidden">Fields marked with an asterisk (*) are required.</p>

              <div className="login-form__field">
                <label className="login-form__label" htmlFor="email">
                  Email <span className="login-form__required" aria-hidden="true">*</span>
                </label>
                <input className="login-form__input" type="email" id="email" name="email" placeholder=" " autoComplete="email" aria-describedby="email-hint" aria-invalid="false" required/>
                <span id="email-hint" className="login-form__hint">Your account email</span>
                <span id="email-error" className="login-form__message login-form__message--error" role="alert" hidden>Invalid email address.</span>
                <span id="email-success" className="login-form__message login-form__message--success" role="status" hidden>That email works.</span>
              </div>

              <div className="login-form__field">
                <label className="login-form__label" htmlFor="password">
                  Password <span className="login-form__required" aria-hidden="true">*</span>
                </label>
                <Link className="login-form__forgot-link" to="/forgot-password" viewTransition>Forgot password?</Link>
                <input className="login-form__input" type={showPassword ? 'text' : 'password'} id="password" name="password" minLength={8} placeholder=" "
                        autoComplete="current-password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$" aria-describedby="password-hint" aria-invalid="false" required/>
                <span id="password-hint" className="login-form__hint">8+ chars · A-z · 0-9 · !@#$</span>
                <span id="password-error" className="login-form__message login-form__message--error" role="alert" hidden>Password doesn't meet requirements.</span>
                <span id="password-success" className="login-form__message login-form__message--success" role="status" hidden>Password accepted.</span>
              </div>

              <div className="login-form__controls">
                <label className="login-form__checkbox-label" htmlFor="remember">
                  <input className="login-form__checkbox" type="checkbox" id="remember" name="remember"/>
                  <span className="login-form__checkbox-text">Remember me</span>
                </label>
                <label className="login-form__checkbox-label" htmlFor="show">
                  <input className="login-form__checkbox" type="checkbox" id="show" name="show" checked={showPassword} onChange={() => setShowPassword(!showPassword)} aria-controls="password"/>
                </label>
              </div>

              <div className="login-form__actions">
                <button type="submit" className="login-form__submit btn btn--submit">Let's go</button>
              </div>

              <footer className="login-form__footer">
                <p className="login-form__footer-text">First time?</p>
                <Link className="login-form__footer-link" to="/create-account" viewTransition>Join us.</Link>
              </footer>
            </form>

            <div className="login-slider" aria-hidden="true">
              {Array.from({ length: SLIDE_COUNT }, (_, index) => (
                <div key={index} className="login-slider__item"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LogIn
