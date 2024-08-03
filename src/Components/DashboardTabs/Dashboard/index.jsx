import Styles from "./styles.module.scss";
import Modal from 'react-bootstrap/Modal';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { TextareaAutosize, TextField } from "@mui/material";
import {InviteIcon, WavingIcon, ToDoIcon, PlusVector, StaggerIcon,RedCircle, BlueCircle, StatusIcon, CompleTaskIcon, SuccessCircleIcon, UploadIcon} from "../../../assets/icons";
import { SearchIcon1, SearchIcon2, SearchIcon3, SearchIcon4, TaskThumb1, TaskThumb2, TaskThumb3, Member2, Member3, Member4 } from "../../../assets";
import {Success, Progress, Notstarted} from "../../../Charts";
import Button from '@mui/material/Button';
import { DatePicker } from 'antd';
import { Select } from "antd";
import Tooltip from '@mui/material/Tooltip';
import { Checkbox } from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceHolderImg from "../../../assets/imgs/avatar.jpg";
import { useEffect, useRef, useState } from "react";
import { StrepperOne } from "../../../functions";
import 'react-lazy-load-image-component/src/effects/blur.css';


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

/* Project Address */
const ProjectAddress = styled(TextField)({
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
      borderRadius: "8px"
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

/* Title_Text */
const TitleText = styled(TextField)({
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
      borderRadius: "8px"
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

/* TextArea */
const Textarea = styled(TextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: #000;
  background: none;
  border: 2px solid #A1A3AB;

  &:hover {
    border-color: #A1A3AB;
  }

  &:focus {
    border-color: #A1A3AB;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const { Option } = Select;

/* Upload Comp */
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Dashboard = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const[show, setShow] = useState(false);
  const[showTask, setShowTask] = useState(false);
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [Dattum, setDatte] = useState("");
  const [checkOne, setCheckone] = useState(false);
  const [checkTwo, setChecktwo] = useState(false);
  const [checkThree, setCheckthree] = useState(false);
  const [projkt, setProjkt] = useState("https://sharelinkhereandthere.com/34565yy29");
  const [open, setOpen] = useState(false);
  const [eventOccurred, setEventOccurred] = useState(0);
  const [clickCount, setClickcount] = useState(0);

  const block1 = useRef(null);
  const block2 = useRef(null);
  
  useEffect(() => {
    if(eventOccurred){
      StrepperOne(block1.current);
    }

    if(clickCount){
      StrepperOne(block2.current);
    }
  }, [eventOccurred, clickCount]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    navigator.clipboard.writeText(projkt);
    setOpen(true);
  };

  const Open = Boolean(anchorEl);
  const id = Open ? 'simple-popover' : undefined;
  
  const closeTask = () => setShowTask(false);
  const showTaskM = () => setShowTask(!showTask);

  const closeModel = () => setShow(false);
  const showModel = () => setShow(!show);

  const Togg = () => {
    setClickcount(clickCount + 1);
    closeModel();
    showModel();
  }

  const ToggTask = () => {
    setEventOccurred(eventOccurred + 1);
    closeTask();
    showTaskM();
  }

  /* sendInvite */
  const sendInvite = (e) => {
    e.preventDefault();

  }

  const copyProjkt = (e) => {
    e.preventDefault();

  }

  const newTaskS = (e) => {
    e.preventDefault();
    
  }

  return (
    <>
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
        <Modal.Header style={{backgroundColor: "#F9F9F9"}}>
            <div className={Styles.modalHead}>
              <div className={Styles.modalTitle}>
                <div>Add New Task</div>
                <div className={Styles.subLine} ref={block1}></div>
              </div>
              <div>
                <button onClick={closeTask} className={Styles.closModel}>Go Back</button>
              </div>
            </div>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#F9F9F9", borderRadius:"15px"}}>
            <form onSubmit={newTaskS}>
            <div className={Styles.newTaskMod}>
                <div className={Styles.modalBod}>
                  <div className={Styles.taskForm}>
                      <div className={Styles.taskTitle}>
                        <div className={Styles.taskT}>Title</div>
                        <div className={Styles.titleText}>
                          {/* title_Text */}
                          <TitleText 
                            fullWidth
                            value={title}
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
                              onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                      </div>
                      <div className={Styles.taskDate}>
                      <div className={Styles.taskD}>Date</div>
                      <div className={Styles.dateText}>
                          {/* DateText */}
                          <DatePicker
                            getPopupContainer={(trigger) => trigger.parentNode}
                            inputReadOnly={true}
                            defaultValue={Dattum}
                            onChange={setDatte}
                            superNextIcon={false}
                            superPrevIcon={false}
                            format={"DD/MM/YYYY"}
                            style={{
                              color:"#000",
                              width:"100%",
                              background: "none"
                            }}
                            size="middle"
                          />
                        </div>
                      </div>
                      <div className={Styles.taskOptions}>
                      <div className={Styles.priorityT}>Priority</div>
                      <div className={Styles.prOptions}>
                      <div style={{display: "flex", flexDirection:"row", columnGap:"0.5rem"}}>
                      <div>
                      <div className={Styles.RedBullet}></div>
                      </div>
                      <div style={{display: "flex", flexDirection:"row", columnGap:"0.5rem"}}>
                      <div className={Styles.priority}>Extreme</div>
                      <div>
                        {/* Check */}
                        <Checkbox
                          value={checkOne} 
                          disableRipple={true} 
                          onChange={(e) => setCheckone(e.target.checked)}
                          sx={{
                            "&.MuiCheckbox-root":{
                              padding: "0px",
                              bottom: "3px",
                              border:"#A1A3AB"
                            },
                            "&.Mui-checked":{
                              color: "#FF6767"
                            }
                          }}
                          />
                      </div>
                      </div>
                      </div>
                      <div style={{display: "flex", flexDirection:"row", columnGap:"0.5rem"}}>
                      <div>
                      <div className={Styles.ModBullet}></div>
                      </div>
                      <div style={{display: "flex", flexDirection:"row", columnGap:"0.5rem"}}>
                      <div className={Styles.priority}>Moderate</div>
                      <div>
                        {/* Check */}
                        <Checkbox
                          value={checkTwo} 
                          disableRipple={true} 
                          onChange={(e) => setChecktwo(e.target.checked)}
                          sx={{
                            "&.MuiCheckbox-root":{
                              padding: "0px",
                              bottom: "3px",
                              border:"#A1A3AB"
                            },
                            "&.Mui-checked":{
                              color: "#FF6767"
                            }
                          }}
                          />
                      </div>
                      </div>
                      </div>
                      <div style={{display: "flex", flexDirection:"row", columnGap:"0.5rem"}}>
                      <div>
                      <div className={Styles.SuccessBullet}></div>
                      </div>
                      <div style={{display: "flex", flexDirection:"row", columnGap:"0.5rem"}}>
                      <div className={Styles.priority}>Low</div>
                      <div>
                        {/* Check */}
                        <Checkbox
                          value={checkThree} 
                          disableRipple={true} 
                          onChange={(e) => setCheckthree(e.target.checked)}
                          sx={{
                            "&.MuiCheckbox-root":{
                              padding: "0px",
                              bottom: "3px",
                              border:"#A1A3AB"
                            },
                            "&.Mui-checked":{
                              color: "#FF6767"
                            }
                          }}
                          />
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      <div className={Styles.taskContainer}>
                        <div className={Styles.taskDsc}>
                        <div className={Styles.priorityT}>Task Description</div>
                        <div>
                        <Textarea 
                        aria-label="minimum height" 
                        minRows={9} placeholder="Start writing here..." 
                        style={{resize: 'none'}}/>
                        </div>
                        </div>
                        <div className={Styles.upload}>
                        <div className={Styles.priorityT}>Upload Image</div>
                        <div className={Styles.uploadBlock}>
                        <div className={Styles.uploadCont}>
                        <div style={{width: "100%", textAlign: "center"}}>
                            <UploadIcon />
                          </div>
                          <div style={{paddingTop:"1.2em"}}>
                          <div className={Styles.tagg}>Upload files here..</div>
                          <div className={Styles.tagg}>or</div>
                          <div style={{display:"flex", width:"100%", justifyContent:"center", paddingTop:"0.5em"}}>
                            <div>
                            <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            sx={{
                              background: "none",
                              padding: "0.3em 1.5em",
                              fontSize:"1rem",
                              color: "#A1A3AB",
                              textTransform:"unset",
                              border: "2px solid #A1A3AB",
                              borderRadius: "8px",
                              "&:hover":{
                                background: "none"
                              }
                            }}
                          >
                            <span className={Styles.Brs}>Browse</span>
                            <VisuallyHiddenInput type="file" />
                          </Button>
                            </div>
                          </div>
                          </div>
                          </div>
                        </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div>
                <button 
                  type="submit" 
                  className={Styles.submitBtn2}>
                    Done
                  </button>
                </div>
              </div>
            </form>
        </Modal.Body>
        </div>
      </Modal>
    {/* Creating AddTask Modal From */}

    {/* Creating Invite Modal From */}
    <Modal
        show={show}
        onHide={closeModel}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
      >
        <div style={{backgroundColor: "#F9F9F9", borderRadius: "14px"}}>
        <Modal.Header style={{backgroundColor: "#F9F9F9"}}>
            <div className={Styles.modalHead}>
              <div className={Styles.modalTitle}>
                <div>Send an invite to a new member</div>
                <div className={Styles.subLine} ref={block2}></div>
              </div>
              <div>
                <button onClick={closeModel} className={Styles.closModel}>Go Back</button>
              </div>
            </div>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#F9F9F9", borderRadius:"15px"}}>
          <div className={Styles.modalBod}>
            <div className={Styles.emailH}>Email</div>
              <div>
              <form onSubmit={sendInvite}>
              <div className={Styles.inviteForm}>
              <div style={{width: "75%", padding:"8px 0px"}}>
                  <EmailAddress 
                    fullWidth
                    value={email}
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
                      placeholder="neerajgurung99@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                  <div style={{width:"25%", paddingTop:"0.5em"}}>
                  <button 
                        type="submit" 
                        className={Styles.submitBtn}>
                          Send Invite
                          </button>
                  </div>
              </div>
              </form>
              </div>
              {/* Members_Body */}
              <div className={Styles.memberLists}>
              <div className={Styles.emailH}>Members</div>
              {/* Members_Body */}
              <div className={Styles.memberBod}>
                {/* Member */}
                  <div className={Styles.memberList}>
                      <div className={Styles.member}>
                        <div 
                        className={Styles.membAvat} 
                        style={{
                          backgroundImage: `url(${Member3})`,
                          }}>
                        </div>
                        <div className={Styles.membD}>
                          <div className={Styles.membN}>Upashna Gurung</div>
                          <div className={Styles.membE}>uppaeygrg332@gmail.com</div>
                        </div>
                      </div>
                      <div>
                    
                      <Select
                        defaultValue={"Can edit"}
                        getPopupContainer={(triggerNode) => triggerNode.parentNode}
                        style={{ width: 100 }}
                        >
                        <Option value="Can edit">Can edit</Option>
                        <Option value="Can view">Can view</Option>
                      </Select>
                     
                      </div>
                  </div>
                  {/* Member */}
                  <div className={Styles.memberList}>
                      <div className={Styles.member}>
                        <div 
                        className={Styles.membAvat} 
                        style={{
                          backgroundImage: `url(${Member2})`,
                          }}>
                        </div>
                        <div className={Styles.membD}>
                          <div className={Styles.membN}>Upashna Gurung</div>
                          <div className={Styles.membE}>uppaeygrg332@gmail.com</div>
                        </div>
                      </div>
                      <div>
                    
                      <Select
                        defaultValue={"Can edit"}
                        getPopupContainer={(triggerNode) => triggerNode.parentNode}
                        style={{ width: 100 }}
                        >
                        <Option value="Can edit">Can edit</Option>
                        <Option value="Can view">Can view</Option>
                      </Select>
                     
                      </div>
                  </div>
                {/* Member */}
                <div className={Styles.memberList}>
                      <div className={Styles.member}>
                        <div 
                        className={Styles.membAvat} 
                        style={{
                          backgroundImage: `url(${Member3})`,
                          }}>
                        </div>
                        <div className={Styles.membD}>
                          <div className={Styles.membN}>Upashna Gurung</div>
                          <div className={Styles.membE}>uppaeygrg332@gmail.com</div>
                        </div>
                      </div>
                      <div>
                    
                      <Select
                        defaultValue={"Can edit"}
                        getPopupContainer={(triggerNode) => triggerNode.parentNode}
                        style={{ width: 100 }}
                        >
                        <Option value="Can edit">Can edit</Option>
                        <Option value="Can view">Can view</Option>
                      </Select>
                     
                      </div>
                  </div>
                  {/* Member */}
                  <div className={Styles.memberList}>
                      <div className={Styles.member}>
                        <div 
                        className={Styles.membAvat} 
                        style={{
                          backgroundImage: `url(${Member4})`,
                          }}>
                        </div>
                        <div className={Styles.membD}>
                          <div className={Styles.membN}>Upashna Gurung</div>
                          <div className={Styles.membE}>uppaeygrg332@gmail.com</div>
                        </div>
                      </div>
                      <div>
                    
                      <Select
                        defaultValue={"Can edit"}
                        getPopupContainer={(triggerNode) => triggerNode.parentNode}
                        style={{ width: 100 }}
                        >
                        <Option value="Can edit">Can edit</Option>
                        <Option value="Can view">Can view</Option>
                      </Select>
                     
                      </div>
                  </div>
              </div>
              {/* Project_Link */}
              <div>
              <form onSubmit={copyProjkt}>
              <div className={Styles.inviteForm}>
              <div style={{width: "75%", padding:"8px 0px"}}>
                  <ProjectAddress
                    fullWidth
                    disabled={true}
                    value={""}
                    sx={{
                      "& .MuiOutlinedInput-root":{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderWidth: "0.13rem",
                          borderStyle: "solid",
                          borderColor: '#A1A3AB',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: "#A1A3AB"
                        }
                      }
                    }}
                    inputProps={{
                      sx: {
                        color: '#333',
                        fontSize: '14px',
                        backgroundColor:'transparent',
                        padding:'10px 16px',
                        '&::placeholder': {
                          opacity: 1,
                        },
                      }
                      }}
                      placeholder="https://sharelinkhereandthere.com/34565yy29"
                      onChange={(e) => setProjkt(e.target.value)}
                    />
                    </div>
                  <div style={{width:"25%", paddingTop:"0.5em"}}>
                  <ClickAwayListener onClickAway={handleTooltipClose}>
                    <div>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        placement="top"
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Copied"
                      >
                        <button 
                                type="submit" 
                                className={Styles.submitBtn}
                                onClick={handleTooltipOpen}>
                                  Copy Link
                                  </button>
                      </Tooltip>
                    </div>
                    </ClickAwayListener>
                  </div>
              </div>
              </form>
              </div>
              </div>
          </div>
        </Modal.Body>
        </div>
      </Modal>
      {/* Creating Invite Modal From */}
      
      <div className={Styles.DashBody}>
      <div className={Styles.DashHead}>
        <div>
          <div>
          Welcome back, {"Sundar"}
          </div>
          <div>
            {/* waveIcon */}
            <WavingIcon />
          </div>
        </div>
        <div className={Styles.Invite}>
          <div>
              <div className={Styles.avatarG}>
              <LazyLoadImage 
              alt="SearchIcon1"
              placeholdersrc={PlaceHolderImg}
              effect="blur"
              wrapperProps={{
                style: {transitionDelay: "0.5s"}
              }}
              src={SearchIcon1}
              />
              </div>
              <div className={Styles.avatarG}>
              <LazyLoadImage 
              alt="SearchIcon2"
              placeholdersrc={PlaceHolderImg}
              effect="blur"
              wrapperProps={{
                style: {transitionDelay: "0.5s"}
              }}
              src={SearchIcon2}
              />
              </div>
              <div className={Styles.avatarG}>
              <LazyLoadImage 
              alt="SearchIcon3"
              placeholdersrc={PlaceHolderImg}
              effect="blur"
              wrapperProps={{
                style: {transitionDelay: "0.5s"}
              }}
              src={SearchIcon3}
              />
              </div>
              <div className={Styles.avatarG}>
              <LazyLoadImage 
              alt="SearchIcon4"
              placeholdersrc={PlaceHolderImg}
              effect="blur"
              wrapperProps={{
                style: {transitionDelay: "0.5s"}
              }}
              src={SearchIcon4}
              />
              </div>
          </div>
          <div>
          <Button 
          sx={{
            "&:hover":{
              background: "none"
            },
            textTransform: "inherit",
            color: "#FF6767",
            border: "2px solid #FF6767",
            borderRadius: "8px",
            padding: "6px 18px",
            fontWeight:"bold"
          }}
          startIcon={<InviteIcon />}
          onClick={Togg}>
            Invite
          </Button>
          </div>
        </div>
      </div>
      <div className={Styles.dashBody}>
        <div className={Styles.dbody}>
          {/* Task_Head */}
          <div className={Styles.TaskHead}>
            <div className={Styles.TaskHeady}>
            <div className={Styles.taskIcon}>
              <div>
                <ToDoIcon />
              </div>
              <div>To-Do</div>
            </div>
            <div>
            <Button 
          sx={{
            "&:hover":{
              background: "none"
            },
            textTransform: "inherit",
            color: "#A1A3AB",
            padding: "4px 8px",
            fontWeight:"normal"
          }}
          startIcon={<PlusVector />}
          onClick={ToggTask}>
            Add task
          </Button>
            </div>
            </div>
            {/* Task_Date */}
          <div className={Styles.TaskDate}>
              <div>{"20 June"}</div>
              <div style={{display: "flex", flexDirection:"row", columnGap:"0.5rem"}}>
                <div>
                <div className={Styles.Gbullet}></div>
                </div>
                <div className={Styles.Td}>Today</div>
              </div>
            </div>
            {/* Tasks To Do */}
            <div className={Styles.TasksCont}>
              <div className={Styles.taskBod}>
                <div>
                  <RedCircle />
                </div>
                <div className={Styles.taskContent}>
                  <div className={Styles.taskBodyCont}>
                      <div>
                      <h5>Attend Nischal’s Birthday Party</h5>
                      <p>
                      Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....
                      </p>
                      </div>
                      <div className={Styles.ImgCont}>
                        <div className={Styles.taskImg}>
                        <LazyLoadImage 
                          width={"100%"}
                          alt="TaskThumb1"
                          placeholdersrc={PlaceHolderImg}
                          effect="blur"
                          wrapperProps={{
                            style: {transitionDelay: "0.5s"}
                          }}
                          src={TaskThumb1}
                          />
                        </div>
                      </div>
                  </div>
                  <div className={Styles.taskFooter}>
                    <div>Priority: <span style={{color:"#42ADE2"}}>{"Moderate"}</span></div>
                    <div>Status: <span style={{color:"#F21E1E"}}>{"Not Started"}</span></div>
                    <div className={Styles.taskCap}>
                    {"Created on: 20/06/2023"}
                    </div>
                  </div>
                </div>
                <div>
                  {/* Action */}
                  <IconButton
                  aria-describedby={id}
                  onClick={handleClick}
                  size="small"
                  disableRipple={true}
                >
                  <StaggerIcon />
                </IconButton>
                <Popover
                    id={id}
                    open={Open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    >
                <div>
                  {/* Action_Rows */}
                  <div className={Styles.actionRows}>
                      <div>
                        <button onClick={handleClose}>Edit</button>
                      </div>
                      <button onClick={handleClose}>
                        Delete
                      </button>
                  </div>
                </div>
              </Popover>
                </div>
              </div>
            </div>
            {/* Task_2 */}
            <div className={Styles.TasksCont}>
              <div className={Styles.taskBod}>
                <div>
                  <BlueCircle />
                </div>
                <div className={Styles.taskContent}>
                  <div className={Styles.taskBodyCont}>
                      <div>
                      <h5>Landing Page Design for TravelDays</h5>
                      <p>
                      Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)
                      </p>
                      </div>
                      <div className={Styles.ImgCont}>
                        <div className={Styles.taskImg}>
                        <LazyLoadImage 
                          width={"100%"}
                          alt="TaskThumb2"
                          placeholdersrc={PlaceHolderImg}
                          effect="blur"
                          wrapperProps={{
                            style: {transitionDelay: "0.5s"}
                          }}
                          src={TaskThumb2}
                          />
                        </div>
                      </div>
                  </div>
                  <div className={Styles.taskFooter}>
                    <div>Priority: <span style={{color:"#42ADE2"}}>{"Moderate"}</span></div>
                    <div>Status: <span style={{color:"#0225FF"}}>{"In Progress"}</span></div>
                    <div className={Styles.taskCap}>
                    {"Created on: 20/06/2023"}
                    </div>
                  </div>
                </div>
                <div>
                  {/* Action */}
                  <IconButton
                  aria-describedby={id}
                  onClick={handleClick}
                  size="small"
                  disableRipple={true}
                >
                  <StaggerIcon />
                </IconButton>
                <Popover
                    id={id}
                    open={Open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    >
                <div>
                  {/* Action_Rows */}
                  <div className={Styles.actionRows}>
                      <div>
                        <button onClick={handleClose}>Edit</button>
                      </div>
                      <button onClick={handleClose}>
                        Delete
                      </button>
                  </div>
                </div>
              </Popover>
                </div>
              </div>
            </div>
            {/* Task_3 */}
            <div className={Styles.TasksCont}>
              <div className={Styles.taskBod}>
                <div>
                  <BlueCircle />
                </div>
                <div className={Styles.taskContent}>
                  <div className={Styles.taskBodyCont}>
                      <div>
                      <h5>Presentation on Final Product</h5>
                      <p>
                      Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for...
                      </p>
                      </div>
                      <div className={Styles.ImgCont}>
                        <div className={Styles.taskImg}>
                        <LazyLoadImage 
                          width={"100%"}
                          alt="TaskThumb3"
                          placeholdersrc={PlaceHolderImg}
                          effect="blur"
                          wrapperProps={{
                            style: {transitionDelay: "0.5s"}
                          }}
                          src={TaskThumb3}
                          />
                        </div>
                      </div>
                  </div>
                  <div className={Styles.taskFooter}>
                    <div>Priority: <span style={{color:"#42ADE2"}}>{"Moderate"}</span></div>
                    <div>Status: <span style={{color:"#0225FF"}}>{"In Progress"}</span></div>
                    <div className={Styles.taskCap}>
                    {"Created on: 20/06/2023"}
                    </div>
                  </div>
                </div>
                <div>
                  {/* Action */}
                  <IconButton
                  aria-describedby={id}
                  onClick={handleClick}
                  size="small"
                  disableRipple={true}
                >
                  <StaggerIcon />
                </IconButton>
                <Popover
                    id={id}
                    open={Open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    >
                <div>
                  {/* Action_Rows */}
                  <div className={Styles.actionRows}>
                      <div>
                        <button onClick={handleClose}>Edit</button>
                      </div>
                      <button onClick={handleClose}>
                        Delete
                      </button>
                  </div>
                </div>
              </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.dbody2}>
          <div className={Styles.taskStatus}>
                {/* taskStatus - Header */}
              <div className={Styles.taskIcon}>
              <div>
                <StatusIcon />
              </div>
              <div>Task Status</div>
            </div>
            {/* Status-Charts */}
            <div className={Styles.statusBody}>
              {/* Success */}
              <div style={{display: "flex", flexDirection:"column", rowGap:"1rem"}}>
              <div>
              <Success />
              </div>
              <div style={{display: "flex", flexDirection:"row", columnGap:"0.5rem"}}>
                <div>
                <div className={Styles.SuccessBullet}></div>
                </div>
                <div className={Styles.StatCap1}>Completed</div>
              </div>
              </div>
                    {/* Progress */}
              <div style={{display: "flex", flexDirection:"column", rowGap:"1rem"}}>
                <div>
                <Progress />
                </div>
                <div style={{display: "flex", flexDirection:"row", columnGap:"0.5rem"}}>
                  
                    <div>
                    <div className={Styles.ProgBullet}></div>
                    </div>
                    <div className={Styles.StatCap2}>In Progress</div>

                </div>
              </div>
                    {/* Not Started */}
              <div style={{display: "flex", flexDirection:"column", rowGap:"1rem"}}>
              <div>
              <Notstarted />
              </div>
              <div style={{display: "flex", flexDirection:"row", columnGap:"0.5rem"}}>
                    <div>
                    <div className={Styles.RedBullet}></div>
                    </div>
                    <div className={Styles.StatCap3}>Not Started</div>
              </div>
              </div>

            </div>
          </div>
          <div className={Styles.taskStatus}>
            {/* taskStatus - Header */}
            <div className={Styles.taskIcon}>
              <div>
                <CompleTaskIcon />
              </div>
              <div>Completed Tasks</div>
            </div>
            {/* CompletedTasks */}
            {/* Task_1 */}
            <div className={Styles.TasksCont}>
              <div className={Styles.taskBod}>
                <div>
                  <SuccessCircleIcon />
                </div>
                <div className={Styles.taskContent}>
                  <div className={Styles.taskBodyCont}>
                      <div>
                      <h5>Walk the dog</h5>
                      <p>
                      Take the dog to the park and bring treats as well.
                      </p>
                      </div>
                  </div>
                  <div className={Styles.taskFooter}>
                    <div>Status: <span style={{color:"#05A301"}}>{"Completed"}</span></div>
                    <div className={Styles.taskCap}>
                    {"Completed 2 days ago"}
                    </div>
                  </div>
                </div>
                <div>
                  {/* Action */}
                  <IconButton
                  aria-describedby={id}
                  onClick={handleClick}
                  size="small"
                  disableRipple={true}
                >
                  <StaggerIcon />
                </IconButton>
                <Popover
                    id={id}
                    open={Open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    >
                <div>
                  {/* Action_Rows */}
                  <div className={Styles.actionRows}>
                      <div>
                        <button onClick={handleClose}>Edit</button>
                      </div>
                      <button onClick={handleClose}>
                        Delete
                      </button>
                  </div>
                </div>
              </Popover>
                </div>
              </div>
            </div>
            {/* Task2 */}
            <div className={Styles.TasksCont}>
              <div className={Styles.taskBod}>
                <div>
                  <SuccessCircleIcon />
                </div>
                <div className={Styles.taskContent}>
                  <div className={Styles.taskBodyCont}>
                      <div>
                      <h5>Conduct meeting</h5>
                      <p>
                      Meet with the client and finalize requirements.
                      </p>
                      </div>
                  </div>
                  <div className={Styles.taskFooter}>
                    <div>Status: <span style={{color:"#05A301"}}>{"Completed"}</span></div>
                    <div className={Styles.taskCap}>
                    {"Completed 2 days ago"}
                    </div>
                  </div>
                </div>
                <div>
                  {/* Action */}
                  <IconButton
                  aria-describedby={id}
                  onClick={handleClick}
                  size="small"
                  disableRipple={true}
                >
                  <StaggerIcon />
                </IconButton>
                <Popover
                    id={id}
                    open={Open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    >
                <div>
                  {/* Action_Rows */}
                  <div className={Styles.actionRows}>
                      <div>
                        <button onClick={handleClose}>Edit</button>
                      </div>
                      <button onClick={handleClose}>
                        Delete
                      </button>
                  </div>
                </div>
              </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>  
  )
}

export default Dashboard;