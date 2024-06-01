import mobile from "../assests/mobile.jpg";
import google from "../assests/google.png";
import apple from "../assests/apple.png"

const Footer = () => {
  return (
    <div className="flex flex-col gap-20 md:h-72">
      <p className="font-bold text-4xl text-secondary-text">
        Download our app now
      </p>
      <div className="flex flex-col justify-around w-full items-center rounded-md bg-white shadow-slate-300 shadow-md h-auto md:flex-row md:h-48">
        <div className="flex align-top ">
          <img alt="mobileScreen" className="w-full h-80 md:pb-16" src={mobile} />
        </div>
        <div className="flex flex-col gap-3 md:w-1/2">
          <p className="font-semibold text-xl">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <img alt="googelPlay" src={google} />
            <img alt="applestore" src={apple} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
