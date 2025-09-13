import "./Contact.css"

export default function Contact() {
  return (
    <section className="contact-wrapper">
      <div className="hobbies">
        <h1>Riina Kikkas</h1>
        <h3>My Hobbies</h3>
        <ul>
          <li>Gardening</li>
          <li>Architecture and history</li>
          <li>Playing the flute and the recorder</li>
          <li>Walking</li>
        </ul>

        <form className="contact-form">
          <label htmlFor="email">E-mail</label>
          <input placeholder="Your E-mail address*" />

          <label htmlFor="message">Message</label>
          <textarea placeholder="Your message*"></textarea>

          <button
            type="button"
            className="cta"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
