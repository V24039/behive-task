import background from "../assests/background.png";

const Title = () => {
  return (
    <div
      className="hidden w-auto min-h-96 font-bold text-6xl md:block"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
        backgroundClip: "cover",
      }}
    >
      <div>
        <p className="p-36">
          Host your meeting with world-class amenities. Starting at{" "}
          <span className="text-logo">₹199/-!</span>
        </p>
      </div>
    </div>
  );
};

export default Title;
