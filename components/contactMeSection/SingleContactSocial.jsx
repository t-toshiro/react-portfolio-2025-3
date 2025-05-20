const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center hover:bg-grey/30 transition-all duration-500 cursor-pointer">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
