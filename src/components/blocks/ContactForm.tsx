// Page connection
import { Link } from "react-router-dom";
import { SLIDE_COUNT } from "../../constants/form";
import { handleSubmit } from "../../utils/formHandlers";

function Contact() {
  return (
    <>

      <section id="contact-section" className="contact" aria-labelledby="contact-heading" aria-describedby="contact-description">
        <div className="contact__container">
          <div className="contact__inner">
            <form className="contact-form" autoComplete="on" noValidate onSubmit={handleSubmit}>
              <header className="contact-form__header">
                <hgroup className="contact-form__hgroup">
                  <h1 id="contact-heading" className="contact-form__title">Got something in mind?</h1>
                  <p id="contact-description" className="contact-form__description">Drop us a line, we read every message and reply fast. Already have an account? 
                    <Link className="contact-form__back-link" to="/" viewTransition>Head back to login</Link> instead.
                  </p>
                </hgroup>
              </header>

              <p className="contact-form__required-note visually-hidden">Fields marked with an asterisk (*) are required.</p>

              <div className="contact-form__field">
                <label htmlFor="full-name" className="contact-form__label">Full Name <span className="contact-form__required" aria-hidden="true">*</span></label>
                <input type="text" id="full-name" name="full-name" className="contact-form__input" pattern="[\p{L}\p{M}\s\.\-']+" minLength={5} maxLength={100} placeholder=" " 
                       autoComplete="name" aria-describedby="name-hint name-error name-success" aria-invalid="false" required />
                <span id="name-hint" className="contact-form__hint">e.g. Juan dela Cruz</span>
                <span id="name-error" className="contact-form__message contact-form__message--error" aria-live="polite" hidden>Letters & hyphens only.</span>
                <span id="name-success" className="contact-form__message contact-form__message--success" aria-live="polite" hidden>Full name confirmed.</span>
              </div>
              
              <div className="contact-form__field">
                <label htmlFor="email" className="contact-form__label">Email <span className="contact-form__required" aria-hidden="true">*</span></label>
                <input type="email" id="email" name="email" className="contact-form__input" placeholder=" " autoComplete="email" aria-describedby="email-hint email-error email-success" aria-invalid="false" required />
                <span id="email-hint" className="contact-form__hint">e.g. example@email.com</span>
                <span id="email-error" className="contact-form__message contact-form__message--error" role="alert" hidden>Invalid email address.</span>
                <span id="email-success" className="contact-form__message contact-form__message--success" role="status" hidden>That email works.</span>
              </div>

              <div className="contact-form__field">
                <label htmlFor="subject" className="contact-form__label">Subject</label>
                <input type="text" id="subject" name="subject" className="contact-form__input" maxLength={100} placeholder=" " autoComplete="off" aria-describedby="subject-hint" aria-invalid="false" />
                <span id="subject-hint" className="contact-form__hint">(Optional)</span>
              </div>

              <div className="contact-form__field">
                <label htmlFor="message" className="contact-form__label">Message <span className="contact-form__required" aria-hidden="true">*</span></label>
                <textarea id="message" name="message" className="contact-form__input contact-form__input--textarea" minLength={15} maxLength={2000} rows={6} placeholder=" " 
                          autoComplete="off" aria-describedby="message-hint message-error message-success" aria-invalid="false" required></textarea>
                <span id="message-hint" className="contact-form__hint">Tell us how we can help.</span>
                <span id="message-error" className="contact-form__message contact-form__message--error" aria-live="polite" hidden>Too short.</span>
                <span id="message-success" className="contact-form__message contact-form__message--success" aria-live="polite" hidden>Perfect, that&apos;s enough detail.</span>
              </div>

              <div className="contact-form__actions">
                <button type="submit" className="contact-form__submit btn btn--submit">Send your thoughts</button>
              </div>
            </form>

            <div className="contact-slider" aria-hidden="true">
              {Array.from({ length: SLIDE_COUNT }, (_, index) => (
                <div key={index} className="contact-slider__item"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
