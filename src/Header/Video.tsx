import homeVideo from "../assests/homeVideo.mp4";

const Video = () => {
  return (
    <video
      src={homeVideo}
      width="600"
      height="250"
      controls={false}
      autoPlay
      muted
      loop
    />
  );
};

export default Video;
