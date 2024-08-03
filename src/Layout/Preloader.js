import {RingLoader} from "react-spinners";

const Preloader = () => {
    const preLoad = {
        width: '100vw',
        height: '100vh',
        background: "#F24E1E"
    };

    const preLoader = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

  return (
    <div style={preLoad}>
        <div style={preLoader}>
            <RingLoader color="#ffffff" />
        </div>
    </div>
  )
}

export default Preloader;