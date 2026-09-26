import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <form className="m-5 bg-light p-5">
      <h1 className="m-4"> Contact Us for Personalize YOUR LEGACY</h1>
      <hr />
      <div className="row text-start mb-4">
        <div className="col">
          <label className="form-label">First Name: </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <label className="form-label">Last Name: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
      </div>
      <div className="row g-3 mb-3 text-start">
        <div className="col-md-6">
          <label className="form-label">
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            aria-describedby="emailHelp"
            placeholder="useremail@hotmail.com"
          />
          <div id="emailHelp" className="form-text mb-3">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">
            Phone number:{" "}
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            placeholder="(425) 123 4567"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea
            className="form-control"
            rows={6}
            placeholder="Write your message to us in here..."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  );
}
export default Contact;
