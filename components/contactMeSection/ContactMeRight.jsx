import ContactInfo from "./ContactInfo";
import ContactMeSocial from "./ContactMeSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="../../public/images/email-image.png"
        alt="email image"
        className="max-w-[300px]"
      />
      <ContactInfo />
      <ContactMeSocial />
    </div>
  );
};

export default ContactMeRight;
