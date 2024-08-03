import Styles from "./style.module.scss";
import Modal from 'react-bootstrap/Modal';
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import {Avatar} from "../../assets";
import PlaceHolderImg from "../../assets/imgs/avatar.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

/* FirstName */
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
    borderBottomColor: '#A1A3AB',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px",
    },
    '&:hover fieldset': {
      borderColor: '#A1A3AB',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#A1A3AB',
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
    borderBottomColor: '#A1A3AB',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px",
    },
    '&:hover fieldset': {
      borderColor: '#A1A3AB',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#A1A3AB',
      borderWidth: '0.13rem'
    }
  },
});

/* Email_Address */
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
    borderBottomColor: '#A1A3AB',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px",
    },
    '&:hover fieldset': {
      borderColor: '#A1A3AB',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#A1A3AB',
      borderWidth: '0.13rem'
    }
  },
});

/* Contact Number */
const ContactAddress = styled(TextField)({
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
    borderBottomColor: '#A1A3AB',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px",
    },
    '&:hover fieldset': {
      borderColor: '#A1A3AB',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#A1A3AB',
      borderWidth: '0.13rem'
    }
  },
});

/* Position */
const Position = styled(TextField)({
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
    borderBottomColor: '#A1A3AB',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px",
    },
    '&:hover fieldset': {
      borderColor: '#A1A3AB',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#A1A3AB',
      borderWidth: '0.13rem'
    }
  },
});

/* Current Pass */
const CurrentPassword = styled(TextField)({
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
    borderBottomColor: '#A1A3AB',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px",
    },
    '&:hover fieldset': {
      borderColor: '#A1A3AB',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#A1A3AB',
      borderWidth: '0.13rem'
    }
  },
});

/* New Pass */
const NewPassword = styled(TextField)({
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
    borderBottomColor: '#A1A3AB',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px",
    },
    '&:hover fieldset': {
      borderColor: '#A1A3AB',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#A1A3AB',
      borderWidth: '0.13rem'
    }
  },
});

/* Conf Pass */
const ConfPassword = styled(TextField)({
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
    borderBottomColor: '#A1A3AB',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px",
    },
    '&:hover fieldset': {
      borderColor: '#A1A3AB',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#A1A3AB',
      borderWidth: '0.13rem'
    }
  },
});

const AccountIndex = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [position, setPosition] = useState("");
  const [showTask, setShowTask] = useState(false);
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confPass, setConfPass] = useState("");

  const closeTask = () => setShowTask(false);
  const showTaskM = () => setShowTask(!showTask);

  const ToggTask = () => {
    closeTask();
    showTaskM();
  }

  /* change Password */
  const changePass = (e) => {
    e.preventDefault();

    if(newPass !== confPass){
      setCurrentPass("");
      setNewPass("");
      setConfPass("");
    }
  }

  /* Submit_Form */
  const updateAccount = (e) => {
    e.preventDefault();

  }

  return (
    <div className={Styles.TaskCont}>
      {/* Creating AddTask Modal From */}
    <Modal
        show={showTask}
        onHide={closeTask}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
      >
        <div style={{backgroundColor: "#F9F9F9", borderRadius: "14px"}}>
        <Modal.Body style={{backgroundColor: "#F9F9F9", borderRadius:"15px"}}>
        <div className={Styles.formBody}>
        <form onSubmit={changePass}>
        <div className={Styles.taskForm}>
          {/* Current_Password */}
          <div className={Styles.taskTitle}>
                      <div className={Styles.taskT}>Current Password</div>
                      <div className={Styles.titleText}>
                      <CurrentPassword 
                            fullWidth
                            value={currentPass}
                            sx={{
                              "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderWidth: "0.13rem",
                                  borderStyle: "solid",
                                  borderColor: '#A1A3AB'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: "#A1A3AB"
                                },
                              }
                            }}
                            inputProps={{
                              sx: {
                                color: '#333',
                                fontSize: '14px',
                                backgroundColor:'transparent',
                                padding:'7px 16px'
                              },
                              }}
                              onChange={(e) => setCurrentPass(e.target.value)}
                              type="password"
                            />
                      </div>
                </div>
            {/* New_Password */}
          <div className={Styles.taskTitle}>
                      <div className={Styles.taskT}>New Password</div>
                      <div className={Styles.titleText}>
                      <NewPassword 
                            fullWidth
                            value={newPass}
                            sx={{
                              "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderWidth: "0.13rem",
                                  borderStyle: "solid",
                                  borderColor: '#A1A3AB'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: "#A1A3AB"
                                },
                              }
                            }}
                            inputProps={{
                              sx: {
                                color: '#333',
                                fontSize: '14px',
                                backgroundColor:'transparent',
                                padding:'7px 16px'
                              },
                              }}
                              onChange={(e) => setNewPass(e.target.value)}
                              type="password"
                            />
                      </div>
                </div>
                {/* Confirm_Pass */}
                <div className={Styles.taskTitle}>
                      <div className={Styles.taskT}>Confirm Password</div>
                      <div className={Styles.titleText}>
                      <ConfPassword 
                            fullWidth
                            value={confPass}
                            sx={{
                              "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderWidth: "0.13rem",
                                  borderStyle: "solid",
                                  borderColor: '#A1A3AB'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: "#A1A3AB"
                                },
                              }
                            }}
                            inputProps={{
                              sx: {
                                color: '#333',
                                fontSize: '14px',
                                backgroundColor:'transparent',
                                padding:'7px 16px'
                              },
                              }}
                              onChange={(e) => setConfPass(e.target.value)}
                              type="password"
                            />
                      </div>
                </div>
                {/* Action_Body */}
                <div className={Styles.actionBlock}>
                <div>
                    <button
                    type="submit"
                    className={Styles.submitBtn2}>
                      Update Password
                    </button>
                  </div>
                  <div>
                    <button
                    className={Styles.submitBtn2}
                    onClick={ToggTask}>
                      Cancel
                    </button>
                  </div>
                </div>
        </div>
        </form>
        </div>
        </Modal.Body>
        </div>
      </Modal>
    <div className={Styles.taskTap}>
    <div className={Styles.modalTitle}>
      <div>
          <div className={Styles.tagTitle}>Account Information</div>
          <div className={Styles.subLine}></div>
      </div>
      <div>
          <div className={Styles.TasksCont}>
            {/* Avatar_Block */}
            <div className={Styles.avatarBlock}>
              <div className={Styles.avatBlock}>
              <div className={Styles.avatar}>
              <LazyLoadImage
              alt="user-avatar"
              placeholdersrc={PlaceHolderImg}
              effect="blur"
              wrapperProps={{
                style: {transitionDelay: "0.5s"}
              }}
              src={Avatar}
              />
              </div>
              </div>
              {/* Avatar_Head */}
              <div className={Styles.avatrHead}>
              <div className={Styles.subHead}>
              <h5>{"Sundar Gurung"}</h5>
              <h6>{"sundargurung360@gmail.com"}</h6>
              </div>
            </div>
            </div>
            {/* Account_FormBody */}
            <div className={Styles.formBody}>
            <form onSubmit={updateAccount}>
            <div className={Styles.taskForm}>
              {/* First_Name */}
                <div className={Styles.taskTitle}>
                      <div className={Styles.taskT}>First Name</div>
                      <div className={Styles.titleText}>
                      <FirstName 
                            fullWidth
                            value={firstName}
                            sx={{
                              "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderWidth: "0.13rem",
                                  borderStyle: "solid",
                                  borderColor: '#A1A3AB'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: "#A1A3AB"
                                },
                              }
                            }}
                            inputProps={{
                              sx: {
                                color: '#333',
                                fontSize: '14px',
                                backgroundColor:'transparent',
                                padding:'7px 16px'
                              },
                              }}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                      </div>
                </div>
                {/* Last_Name */}
                <div className={Styles.taskTitle}>
                      <div className={Styles.taskT}>Last Name</div>
                      <div className={Styles.titleText}>
                      <LastName 
                            fullWidth
                            value={lastName}
                            sx={{
                              "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderWidth: "0.13rem",
                                  borderStyle: "solid",
                                  borderColor: '#A1A3AB'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: "#A1A3AB"
                                },
                              }
                            }}
                            inputProps={{
                              sx: {
                                color: '#333',
                                fontSize: '14px',
                                backgroundColor:'transparent',
                                padding:'7px 16px'
                              },
                              }}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                      </div>
                </div>
                {/* Email Address */}
                <div className={Styles.taskTitle}>
                      <div className={Styles.taskT}>Email Address</div>
                      <div className={Styles.titleText}>
                      <EmailAddress 
                            fullWidth
                            value={emailAddress}
                            sx={{
                              "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderWidth: "0.13rem",
                                  borderStyle: "solid",
                                  borderColor: '#A1A3AB'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: "#A1A3AB"
                                },
                              }
                            }}
                            inputProps={{
                              sx: {
                                color: '#333',
                                fontSize: '14px',
                                backgroundColor:'transparent',
                                padding:'7px 16px'
                              },
                              }}
                              onChange={(e) => setEmailAddress(e.target.value)}
                            />
                      </div>
                </div>
                {/* Contact_Address */}
                <div className={Styles.taskTitle}>
                      <div className={Styles.taskT}>Contact Number</div>
                      <div className={Styles.titleText}>
                      <ContactAddress 
                            fullWidth
                            value={phoneNum}
                            sx={{
                              "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderWidth: "0.13rem",
                                  borderStyle: "solid",
                                  borderColor: '#A1A3AB'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: "#A1A3AB"
                                },
                              }
                            }}
                            inputProps={{
                              sx: {
                                color: '#333',
                                fontSize: '14px',
                                backgroundColor:'transparent',
                                padding:'7px 16px'
                              },
                              }}
                              onChange={(e) => setPhoneNum(e.target.value)}
                            />
                      </div>
                </div>
                {/* Position Name */}
                <div className={Styles.taskTitle}>
                      <div className={Styles.taskT}>Position</div>
                      <div className={Styles.titleText}>
                      <Position 
                            fullWidth
                            value={position}
                            sx={{
                              "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderWidth: "0.13rem",
                                  borderStyle: "solid",
                                  borderColor: '#A1A3AB'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: "#A1A3AB"
                                },
                              }
                            }}
                            inputProps={{
                              sx: {
                                color: '#333',
                                fontSize: '14px',
                                backgroundColor:'transparent',
                                padding:'7px 16px'
                              },
                              }}
                              onChange={(e) => setPosition(e.target.value)}
                            />
                      </div>
                </div>
                {/* form_Action */}
                <div className={Styles.actionBlock}>
                  <div>
                    <button
                    type="submit"
                    className={Styles.submitBtn2}>
                      Update Info
                    </button>
                  </div>
                  <div>
                    <button
                    className={Styles.submitBtn2}
                    onClick={ToggTask}>
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
              </form>
            </div>

          </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default AccountIndex;