import Styles from "./style.module.scss";
import {Avatar} from "../../assets";
import PlaceHolderImg from "../../assets/imgs/avatar.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from '@mui/material/Button';
import Nav from 'react-bootstrap/Nav';
import {DashboardIcon, 
        VitalIcon, 
        MytaskIcon, 
        TaskCatIcon, 
        GearIcon,
        LogOutIcon} from "../../assets/icons";
import 'react-lazy-load-image-component/src/effects/blur.css';

const DashboardMenu = ({Navigato}) => {

  return (
    <>
        <div className={Styles.mainDash}>
        {/* Profile_Avatar */}
        <div className={Styles.avatarCont}>
        <div className={Styles.avatarBlock}>
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
        </div>
        {/* Avatar_Header */}
        <div className={Styles.avatrHead}>
              <div className={Styles.subHead}>
              <h5>{"Sundar Gurung"}</h5>
              <h6>{"sundargurung360@gmail.com"}</h6>
              </div>
            </div>
            {/* Dash_Content */}
            <div className={Styles.dashCont}>
            <Nav variant="pills" className={Styles.NavPills}>
              {/* Dashboard_Tab */}
              <Nav.Item>
                <Nav.Link eventKey={0}>
                <Button
                sx={{
                  "&:hover":{
                    background: "none",
                  },
                  width: "100%",
                  textAlign:"left",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  color: "#fff",
                  textTransform: "inherit",
                  fontSize: "1rem",
                  fontWeight: "600",
                  fontStyle:"-moz-initial",
                  justifyContent: "left"
                }}
                disableRipple={true}
                startIcon={<div className="SvgIcon">
                  <DashboardIcon fill={"#fff"} />  
                </div>}
                >
                  &nbsp;
                    Dashboard
                </Button>
                </Nav.Link>
              </Nav.Item>
              {/* VitalTask_Tab */}
              <Nav.Item>
                <Nav.Link eventKey={1}>
                <Button
                sx={{
                  "&:hover":{
                    background: "none",
                  },
                  width: "100%",
                  textAlign:"left",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  color: "#fff",
                  textTransform: "inherit",
                  fontSize: "1rem",
                  fontWeight: "600",
                  fontStyle:"-moz-initial",
                  justifyContent: "left"
                }}
                disableRipple={true}
                startIcon={<div className="SvgIcon">
                <VitalIcon fill={"#fff"} />
                </div>}
                >
                  &nbsp;
                    Vital Task
                </Button>
                </Nav.Link>
              </Nav.Item>
              {/* MyTask_Tab */}
              <Nav.Item>
                <Nav.Link eventKey={2}>
                <Button
                sx={{
                  "&:hover":{
                    background: "none",
                  },
                  width: "100%",
                  textAlign:"left",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  color: "#fff",
                  textTransform: "inherit",
                  fontSize: "1rem",
                  fontWeight: "600",
                  fontStyle:"-moz-initial",
                  justifyContent: "left"
                }}
                disableRipple={true}
                startIcon={<div className="SvgIcon">
                <MytaskIcon fill={"#fff"} />
                </div>}
                >
                  &nbsp;
                    My Task
                </Button>
                </Nav.Link>
              </Nav.Item>
              {/* TaskCategories_Tab */}
              <Nav.Item>
                <Nav.Link eventKey={3}>
                <Button
                sx={{
                  "&:hover":{
                    background: "none",
                  },
                  width: "100%",
                  textAlign:"left",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  color: "#fff",
                  textTransform: "inherit",
                  fontSize: "1rem",
                  fontWeight: "600",
                  fontStyle:"-moz-initial",
                  justifyContent: "left"
                }}
                disableRipple={true}
                startIcon={<div className="SvgIcon">
                <TaskCatIcon fill={"#fff"} />
                </div>}
                >
                  &nbsp;
                    Task Categories
                </Button>
                </Nav.Link>
              </Nav.Item>
              {/* TaskCategories_Tab */}
              <Nav.Item>
                <Nav.Link eventKey={4}>
                <Button
                sx={{
                  "&:hover":{
                    background: "none",
                  },
                  width: "100%",
                  textAlign:"left",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  color: "#fff",
                  textTransform: "inherit",
                  fontSize: "1rem",
                  fontWeight: "600",
                  fontStyle:"-moz-initial",
                  justifyContent: "left"
                }}
                disableRipple={true}
                startIcon={<div className="SvgIcon">
                <GearIcon fill={"#fff"} />
                </div>}
                >
                  &nbsp;
                    Settings
                </Button>
                </Nav.Link>
              </Nav.Item>
              {/* LogOut_Tab */}
              <div style={{position: "relative", top: "2em", cursor:"pointer"}}
              onClick={Navigato}>
              <Nav.Item>
                <Nav.Link eventKey={6} style={{pointerEvents:"none"}}>
                <Button
                sx={{
                  "&:hover":{
                    background: "none",
                  },
                  width: "100%",
                  textAlign:"left",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  color: "#fff",
                  textTransform: "inherit",
                  fontSize: "1rem",
                  fontWeight: "600",
                  fontStyle:"-moz-initial",
                  justifyContent: "left"
                }}
                disableRipple={true}
                startIcon={<div className="SvgIcon">
                <LogOutIcon fill={"#fff"} />
                </div>}
                >
                  &nbsp;
                    LogOut
                </Button>
                </Nav.Link>
              </Nav.Item>
              </div>
            </Nav>
            </div>
      </div>
    </>
  )
}

export default DashboardMenu;