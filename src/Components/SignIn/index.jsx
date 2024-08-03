import Styles from "./styles.module.scss";
import {LoginBack} from "../../assets";
import { Checkbox, FormControlLabel, InputAdornment, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import {UsernameIcon} from "../../assets/icons";
import {PasswordIcon} from "../../assets/icons";
import {FacebookIcon} from "../../assets/icons";
import {GoogleIcon} from "../../assets/icons";
import {TwitterIcon} from "../../assets/icons";
import { forwardRef, Fragment, useEffect, useRef, useState } from "react";
import { BiMessageError } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import MuiAlert from '@mui/material/Alert';
import {Loginback} from "../../functions";
import { useNavigate } from "react-router-dom";

/* UserName */
const UserName = styled(TextField)({
  '& label':{
    color: '#999999',
    fontSize: '15px',
    lineHeight: '1'
  },
  '& label.Mui-focused': {
    color: '#000',
    fontWeight:'bold',
    fontSize: '16px',
    lineHeight: '1.5'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#565454',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px"
    },
    '&:hover fieldset': {
      borderColor: '#565454',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#565454',
      borderWidth: '0.13rem'
    }
  },
});

/* Password */
const Password = styled(TextField)({
  '& label':{
    color: '#999999',
    fontSize: '15px',
    lineHeight: '1'
  },
  '& label.Mui-focused': {
    color: '#000',
    fontWeight:'bold',
    fontSize: '16px',
    lineHeight: '1.5'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#565454',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px"
    },
    '&:hover fieldset': {
      borderColor: '#565454',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#565454',
      borderWidth: '0.13rem'
    }
  },
});

const SignIn = ({onToggle}) => {

  const [userName, setUserName] = useState("");
  const [password, setPass] = useState("");
  const [check, setCheck] = useState(false);
  const [textMessage, setTxtMssg] = useState('');
  const [open, setOpen] = useState(false);
  const [inputError, setInputError] = useState(false);

/* useNavigate */
const navigate = useNavigate();

  /* Setting Animate */
const obj = useRef(null);

useEffect(() => {
  Loginback(obj.current);
}, []);

  /*======== Alert Bar ========*/
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert icon={<BiMessageError />} elevation={6} ref={ref} variant="standard" {...props} />;
});

const HandleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
};

const action = (
  <Fragment>
    <IconButton
      size="small"
      aria-label="close"
      onClick={HandleClose}
    >
      <MdClose className="text-red-500 font-bold" /> 
    </IconButton>
  </Fragment>
);

const Submit = (e) => {
  e.preventDefault();

  if(!userName){
    setInputError(true);
    setOpen(true);
    setTxtMssg("Missed To Fill User Name Field");
    return
  }

  if(!password){
    setInputError(true);
    setOpen(true);
    setTxtMssg("Missed To Fill Password Field");
    return
  }

  if({userName, password, check}){
    navigate('/', {replace: true});
  }

}

  return (
    <>
      <div className={Styles.subC}>
        <div className={Styles.subC2}>
        <span className={Styles.subC2__RegHead}>Sign In</span>
        <div className={Styles.subC2__regForm}>
        <form onSubmit={Submit}>
        <div className={Styles.RegHeadf}>
          <div>
          <UserName 
            fullWidth
            value={userName}
            sx={{
              "& .MuiOutlinedInput-root":{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderWidth: "0.13rem",
                  borderStyle: "solid",
                  borderColor: userName ? '#05A301' : inputError ? '#F21E1E' : "#565454",
                },
                '&.Mui-focused fieldset': {
                  borderColor: "#565454"
                },
              }
            }}
            inputProps={{
              sx: {
                color: '#333',
                fontSize: '14px',
                backgroundColor: '#fff',
                padding:'14px 16px'
              },
              }}
              InputProps={{
                startAdornment: <InputAdornment position="start">
                <UsernameIcon />
              </InputAdornment>
              }}
              placeholder="Enter User Name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
          <Password
            fullWidth
            type="password"
            value={password}
            sx={{
              "& .MuiOutlinedInput-root":{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderWidth: "0.13rem",
                  borderStyle: "solid",
                  borderColor: password ? '#05A301' : inputError ? '#F21E1E' : "#565454",
                },
                '&.Mui-focused fieldset': {
                  borderColor: "#565454"
                },
              }
            }}
            inputProps={{
              sx: {
                color: '#333',
                fontSize: '14px',
                backgroundColor: '#fff',
                padding:'14px 16px'
              },
              }}
              InputProps={{
                startAdornment: <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
              }}
              placeholder="Enter Email Address"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div>
            <FormControlLabel 
              value={check}
              control={<Checkbox disableRipple={true} 
              onChange={(e) => setCheck(e.target.checked)} 
              sx={{
                "&.MuiCheckbox-root":{
                  padding: "5px",
                  bottom: "3px",
                  border:"#A1A3AB"
                },
                "&.Mui-checked":{
                  color: "#FF6767"
                }
              }}
              />}
              label="Remember Me"
              labelPlacement="end"
            />
            </div>
            <div>
              <button 
              type="submit" 
              className={Styles.submitBtn}>Login</button>
            </div>
        </div>
        </form>
        </div>
        {/* Caption */}
        <div className={Styles.LoginF}>
          <div className={Styles.LoginP}>
            <div className={Styles.LogOpt}>Or, Login with</div>
            <div>
              <FacebookIcon width={25} height={25} />
            </div>
            <div>
              <GoogleIcon width={21} height={20} />
            </div>
            <div>
              <TwitterIcon />
            </div>
          </div>
          <div className={Styles.signIn}>
          Don't have an account? <button onClick={onToggle}>Create One</button>
          </div>
        </div>
          </div>
          <div className={Styles.subC1} ref={obj}>
          <img src={LoginBack} width={425} alt="Register" />
        </div>
          </div>

          {/* Error Body */}
    <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={HandleClose}
        action={action}
        anchorOrigin = {{ vertical:"top", horizontal: "right"}}
      >
        <Alert onClose={HandleClose} severity="error" sx={{ width: '100%' }}>
          <b>{textMessage}</b>
        </Alert>
      </Snackbar>
          </>
  )
}

export default SignIn;