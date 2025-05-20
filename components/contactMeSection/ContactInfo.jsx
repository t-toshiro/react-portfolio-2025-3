import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import SingleInfo from "./SingleInfo";
const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="tosshro@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="080-7429-7545" Image={FiPhone} />
      <SingleInfo text="茨城県つくば市" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
