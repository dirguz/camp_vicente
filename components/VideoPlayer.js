import ReactPlayer from "react-player";


const VideoPlayer = () => {
  return (
  <div className='relative'>
  <ReactPlayer
    className='absolute top-0 left-0'
    url={'/video.mp4'}
    width='100%'
    height='100%'
  />
</div>)
}

export default VideoPlayer;
