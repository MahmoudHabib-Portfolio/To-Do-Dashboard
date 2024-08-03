import Styles from "./styles.module.scss";
import {RegisterBack} from "../../assets";
import { Checkbox, FormControlLabel, InputAdornment, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import {FirstnameIcon} from "../../assets/icons";
import {LastnameIcon} from "../../assets/icons";
import {UsernameIcon} from "../../assets/icons";
import {EmailIcon} from "../../assets/icons";
import {PasswordIcon} from "../../assets/icons";
import {ConfirmPassIcon} from "../../assets/icons";
import { forwardRef, Fragment, useEffect, useRef, useState } from "react";
import { BiMessageError } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import MuiAlert from '@mui/material/Alert';
import {RegBack} from "../../functions";
import { useNavigate } from "react-router-dom";


/* First Name Field */
const FirstName = styled(TextField)({
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
    '&.Mui-focused fieldset': {
      borderWidth: '0.13rem'
    }
  },
});

/* LastName */
const LastName = styled(TextField)({
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

/* Email Address */
const EmailAddress = styled(TextField)({
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

/* Confirm Password */
const ConfirmPass = styled(TextField)({
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

const Register = ({onToggle}) => {

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cPass, setCpass] = useState("");
  const [check, setCheck] = useState(false);
  const [textMessage, setTxtMssg] = useState('');
  const [open, setOpen] = useState(false);
  const [inputError, setInputError] = useState(false);

/* useNavigate */
const navigate = useNavigate();

/* Setting Animate */
const obj = useRef(null);

useEffect(() => {
  RegBack(obj.current);
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

/* Email Vadility */
let Nsplit = email.split(" ").join("");
let Vemail = /\S+@\S+\.\S+/;

  const Submit = (e) => {
    e.preventDefault();

    if(!firstName){
      setInputError(true);
      setOpen(true);
      setTxtMssg("Missed To Fill First Name Field");
      return
    }

    if(!lastName){
      setInputError(true);
      setOpen(true);
      setTxtMssg("Missed To Fill Last Name Field");
      return
    }

    if(!userName){
      setInputError(true);
      setOpen(true);
      setTxtMssg("Missed To Fill User Name Field");
      return
    }

    if(!email){
      setInputError(true);
      setOpen(true);
      setTxtMssg("Missed To Fill Email Address Field");
      return
    }
    
    if((email.valueOf().match(Nsplit)) && (email.valueOf().match(Vemail))){
    }else{
      setInputError(true);
      setOpen(true);
      setTxtMssg("Invalid Email Address");
      return false;
    }

    if(!password){
      setInputError(true);
      setOpen(true);
      setTxtMssg("Missed To Fill Password Field");
      return
    }

    if(!cPass){
      setInputError(true);
      setOpen(true);
      setTxtMssg("Confirm Password");
      return
    }

    if(password !== cPass){
      setInputError(true);
      setOpen(true);
      setTxtMssg("Password Does Not Match");
      return
    }

    if(!check){
      setOpen(true);
      setTxtMssg("Confirm Agreements");
      return
    }

    if({firstName, lastName, userName, email, password, cPass, check}){
        navigate('/', {replace: true});
    }

    }

  return (
    <>
      <div className={Styles.subC}>
        <div className={Styles.subC1} ref={obj}>
          <img src={RegisterBack} width={325} alt="Register" />
        </div>
        <div className={Styles.subC2}>
            <span className={Styles.subC2__RegHead}>Sign Up</span>
            <div className={Styles.subC2__regForm}>
                <form onSubmit={Submit}>
                  <div className={Styles.RegHeadf}>
                      <div>
                        <FirstName 
                        fullWidth
                        value={firstName}
                        sx={{
                          "& .MuiOutlinedInput-root":{
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderWidth: "0.13rem",
                              borderStyle: "solid",
                              borderColor: firstName ? '#05A301' : inputError ? '#F21E1E' : "#565454",
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
                            <FirstnameIcon />
                          </InputAdornment>
                          }}
                          placeholder="Enter First Name"
                          onChange={(e) => setFirstname(e.target.value)}
                        />
                      </div>
                      <div>
                      <LastName 
                        fullWidth
                        value={lastName}
                        sx={{
                          "& .MuiOutlinedInput-root":{
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderWidth: "0.13rem",
                              borderStyle: "solid",
                              borderColor: lastName ? '#05A301' : inputError ? '#F21E1E' : "#565454",
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
                            <LastnameIcon />
                          </InputAdornment>
                          }}
                          placeholder="Enter Last Name"
                          onChange={(e) => setLastname(e.target.value)}
                        />
                      </div>
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
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div>
                      <EmailAddress 
                        fullWidth
                        value={email}
                        sx={{
                          "& .MuiOutlinedInput-root":{
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderWidth: "0.13rem",
                              borderStyle: "solid",
                              borderColor: email ? '#05A301' : inputError ? '#F21E1E' : '#565454'
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
                            <EmailIcon />
                          </InputAdornment>
                          }}
                          placeholder="Enter Email Address"
                          onChange={(e) => setEmail(e.target.value)}
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
                              borderColor: (password !== cPass) ? '#F21E1E' : inputError ? '#05A301' : "#565454",
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
                      <ConfirmPass
                        fullWidth
                        type="password"
                        value={cPass}
                        sx={{
                          "& .MuiOutlinedInput-root":{
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderWidth: "0.13rem",
                              borderStyle: "solid",
                              borderColor: (password !== cPass) ? '#F21E1E' : inputError ? '#05A301' : "#565454",
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
                            <ConfirmPassIcon />
                          </InputAdornment>
                          }}
                          placeholder="Confirm Password"
                          onChange={(e) => setCpass(e.target.value)}
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
                            label="I agree to all terms"
                            labelPlacement="end"
                          />
                      </div>
                      <div>
                        <button 
                        type="submit" 
                        className={Styles.submitBtn}>Register</button>
                      </div>
                      <div className={Styles.signIn}>
                      Already have an account? <button onClick={onToggle}>Sign In</button>
                      </div>
                  </div>
                </form>
            </div>
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

export default Register;