import ContactUsForm from "../components/contactUsForm";
import backgroundImage from "../Images/contact/contactus.jpg";

const ContactUs = () => {
  return (
    <div>
      <div
        className="page-heading text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "350px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          alignItems: "center",
          margin: "5px",
          marginTop: 0,
        }}
      >
        <div style={{ color: "white" }}>
          <h1 style={{ fontSize: "xx-large" }}>
            Let's Connect
            <hr />
          </h1>
          <p
            style={{
              fontFamily: "Lucida Sans,Lucida Sans Regular,Lucida Grande",
            }}
          >
           We would be glad to hear from you.
          </p>
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
