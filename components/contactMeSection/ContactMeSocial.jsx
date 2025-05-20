import SingleContactSocial from "./SingleContactSocial";
import { FiGithub } from "react-icons/fi";

const ContactMeSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://github.com/t-toshiro"
        Icon={FiGithub}
      />
    </div>
  );
};

export default ContactMeSocial;
