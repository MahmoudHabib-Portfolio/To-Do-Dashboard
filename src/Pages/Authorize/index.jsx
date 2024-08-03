import Styles from "./styles.module.scss";
import {Register, SignIn} from "../../Components";
import { useState } from "react";

const Auth = () => {
    const [flip, setFlip] = useState(true);
    /* Login & SignIn Interface Togg */
    const handleTogg = () => {
        setFlip(!flip)
      }
    /* Home & LogIn Interface Togg */
  return (
    <div className={Styles.mainC}>
        {flip ? (<SignIn onToggle={handleTogg} />) : (<Register onToggle={handleTogg} />)}
    </div>
  )
}

export default Auth;