import LoaderImg from '../../assets/loader_fast.gif'
import LoaderVid from '../../assets/ureckon_loader.mp4'

const Loader = () => {
  return (
    <img
      src={LoaderImg}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 100,
      }}
    />
    // <video
    //   width="100%"
    //   height="100vh"
    //   controls
    //   autoPlay
    //   loop
    //   style={{
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     width: '100%',
    //     height: '100vh',
    //     zIndex: 100,
    //   }}
    // >
    //   <source
    //     src={
    //       'https://res.cloudinary.com/kaitomedia/video/upload/v1646895617/ureckon_loader_xom4gz.mp4'
    //     }
    //     type="video/mp4"
    //   />
    // </video>
  )
}

export default Loader
