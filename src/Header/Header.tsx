import Title from "./Title";
import Video from "./Video";

const Header = () => {
  return (
    <div className="flex flex-col-reverse w-full h-full bg-white md:flex-row">
      <Title />
      <Video />
    </div>
  );
};

export default Header;
