const Video = () => {
  return (
    <div className="w-full">
      <video src="../assests/homeVideo.mp4" width="600" height="300" controls={false}/>
      <video style={{ mixBlendMode: "multiply" }} autoPlay muted loop>
        <source  />
      </video>
    </div>
  );
};

export default Video;
