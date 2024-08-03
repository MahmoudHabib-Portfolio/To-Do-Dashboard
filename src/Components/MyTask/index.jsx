import { useEffect, useRef, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { styled } from '@mui/material/styles';
import { TextareaAutosize, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { DatePicker } from 'antd';
import { Checkbox } from "@mui/material";
import {UploadIcon} from "../../assets/icons";
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import Styles from "./style.module.scss";
import { StrepperOne } from "../../functions";
import {StaggerIcon,RedCircle, BlueCircle, DeleteIcon, EditIcon} from "../../assets/icons";
import { DeskBook, DeskLap } from "../../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceHolderImg from "../../assets/imgs/avatar.jpg";
import 'react-lazy-load-image-component/src/effects/blur.css';

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


const MyTask = () => {

  const taskOne = {
    color1: "#F21E1E",
    color2: "#F21E1E",
    thumb: DeskBook,
    title: "Submit Documents",
    priority: "Extreme",
    status: "Not Started",
    bckg: "rgba(161, 163, 171, 0.17)"
  };

  const taskTwo = {
    color1: "#42ADE2",
    color2: "#0225FF",
    thumb: DeskLap,
    title: "Complete assignments",
    priority: "Moderate",
    status: "In Progress",
    bckg: "none" 
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const [taskData, setTaskdata] = useState(true);
  const[showTask, setShowTask] = useState(false);
  const [eventOccurred, setEventOccurred] = useState(0);

  const closeTask = () => setShowTask(false);
  const showTaskM = () => setShowTask(!showTask);

const ToggTask = () => {
  setEventOccurred(eventOccurred + 1);
  closeTask();
  showTaskM();
}

const block2 = useRef(null);

const [title, setTitle] = useState("");
const [Dattum, setDatte] = useState("");
const [checkOne, setCheckone] = useState(false);
const [checkTwo, setChecktwo] = useState(false);
const [checkThree, setCheckthree] = useState(false);

  const TaskTogg = () => {
    setTaskdata(!taskData);
  }
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Open = Boolean(anchorEl);
  const id = Open ? 'simple-popover' : undefined;

  const block1 = useRef(null);

  useEffect(() => {

    if(eventOccurred){
      StrepperOne(block2.current);
    }

    StrepperOne(block1.current);
  }, [eventOccurred]);

  const newTaskS = (e) => {
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
        <Modal.Header style={{backgroundColor: "#F9F9F9"}}>
            <div className={Styles.modalHead}>
              <div className={Styles.modalTitle}>
                <div className={Styles.priorityT}>Edit Task</div>
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
      <div className={Styles.taskTap}>
      <div className={Styles.modalTitle}>
          <div>
          <div className={Styles.tagTitle}>Vital Tasks</div>
          <div className={Styles.subLine} ref={block1}></div>
          </div>
          {/* Tasks_List */}
          <div>
          <div className={Styles.TasksCont}>
              <div className={Styles.taskBod}
               style={{background: taskData ? taskOne.bckg : taskTwo.bckg}}
               onClick={TaskTogg}>
                <div>
                  <RedCircle />
                </div>
                <div className={Styles.taskContent}>
                  <div className={Styles.taskBodyCont}>
                      <div>
                      <h5>Submit Documents</h5>
                      <p>
                      Make sure to submit all the neccessary docum..... 
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
                          src={DeskBook}
                          />
                        </div>
                      </div>
                  </div>
                  <div className={Styles.taskFooter}>
                    <div>Priority: <span style={{color:"#F21E1E"}}>{"Extreme"}</span></div>
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
              <div className={Styles.taskBod} 
              style={{background: taskData ? taskTwo.bckg : taskOne.bckg}}
              onClick={TaskTogg}>
                <div>
                  <BlueCircle />
                </div>
                <div className={Styles.taskContent}>
                  <div className={Styles.taskBodyCont}>
                      <div>
                      <h5>Complete assignments</h5>
                      <p>
                      The assignments must be completed to pass final year....
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
                          src={DeskLap}
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
      </div>
      <div className={Styles.taskView}>
        <div className={Styles.taskThumb}>
        <div 
          className={Styles.Taskimg} 
          style={{
            backgroundImage: `url(${taskData ? taskOne.thumb : taskTwo.thumb})`,
            }}>
          </div>
          <div className={Styles.taskDt}>
            <div className={Styles.thumbT}>{taskData ? taskOne.title : taskTwo.title}</div>
            <div>
            <div>Priority: <span style={{color:taskData ? taskOne.color1 : taskTwo.color1}}>{taskData ? taskOne.priority : taskTwo.priority}</span></div>
            </div>
            <div>
            <div>Status: <span style={{color:taskData ? taskOne.color2 : taskTwo.color2}}>{taskData ? taskOne.status : taskTwo.status}</span></div>
            </div>
            <div>
            <div className={Styles.taskCap} style={{paddingTop: "1em"}}>
                    {"Created on: 20/06/2023"}
            </div>
            </div>
          </div>
        </div>
        <div className={Styles.taskBody}>
          <p>
            <b>Task Title:</b>{taskData ? taskOne.title : taskTwo.title}
          </p>
          <p>
            <b>Objective:</b>To submit required documents for something important
          </p>
          <p>
            <b>Task Description:</b>Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.
          </p>
          <p>
            <b>Additional Notes:</b>
          </p>
          <p>1. Ensure that the documents are authentic and up-to-date.</p>
          <p>2. Maintain confidentiality and security of sensitive information during the submission process.</p>
          <p>3. If there are specific guidelines or deadlines for submission, adhere to them diligently.</p>
          <p>
            <b>Deadline for Submission:</b>End of Day
          </p>
        </div>
        <div className={Styles.taskAction}>
          <div className={Styles.BillBox}>
              <DeleteIcon />
            </div>
            <div className={Styles.BillBox} onClick={ToggTask}>
              <EditIcon />
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyTask;