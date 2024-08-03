import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import {SearchIcon} from '../../assets/icons';
import { TfiMenu } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import Styles from "./style.module.scss";
import {Logo} from "../../assets/icons";
import {BillIcon} from "../../assets/icons";
import {CalenderIcon} from "../../assets/icons";
import {NotificationIcon, NotifyIcon} from "../../assets/icons";
import dayjs from "dayjs";
import { DatePicker, Popover } from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from "react";
import { NotifyIcon1, NotifyIcon2, NotifyIcon3, NotifyIcon4 } from "../../assets";
dayjs.extend(customParseFormat);

//Creating Filter Field
const Filter = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#F5F8FF',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid #F5F8FF',
      borderRadius: '8px'
    },
    '&:hover fieldset': {
      borderColor: '#F5F8FF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F5F8FF',
      borderWidth: '1px'
    } 
  }
});

const Navbar = ({OnDash}) => {

  const [Datum, setDate] = useState(dayjs('June 20, 2023'));
  const [SearchTerm, setSearchTerm] = useState("");
  const [xrow, setXrow] = useState(true);

  const changeIcon = () => {
    setXrow(!xrow);
    OnDash();
  }

  const DatePick = (
    <div className={Styles.CalenderBox}>
                <div className={Styles.CalendHead}>
                  <div>
                    <span className={Styles.CalendTitle}>Calendar</span>
                  </div>
                  <div>
                    <NotificationIcon />
                  </div>
                </div>
                {/* Calender_Date_Input */}
                <div className={Styles.CalenderInpt}>
                <DatePicker
                  inputReadOnly={true}
                  defaultValue={Datum}
                  onChange={setDate}
                  superNextIcon={false}
                  superPrevIcon={false}
                  format={"MMMM D, YYYY"}
                  style={{
                    color:"#000",
                    width:"100%",
                    background: "none",
                  }}
                  placeholder="Select a date"
                  size="middle"
                />
                </div>
              </div>
  );

  const NotifyBlock = (
    <div className={Styles.NotifyBox}>
                <div className={Styles.NotifyHead}>
                  <div>
                    <span className={Styles.NotifyTitle}>Notification</span>
                  </div>
                  <div>
                    <NotifyIcon />
                  </div>
                </div>
                <div className={Styles.subHead}>
                      Today
                  </div>
                {/* Calender_Date_Input */}
                <div className={Styles.NotifyBody}>
                  {/* Slot1 */}
                  <div className={Styles.slot}>
                      <div>
                        <div>
                          Complete the <b>UI design</b> of Landing Page for <b>FoodVentures.</b>
                        </div>
                        <div>
                          Priority: <b style={{color:"#FF6767"}}>High</b>
                        </div>
                      </div>
                      <div>
                        <img src={NotifyIcon1} alt="Notify_Icon" />
                      </div>
                  </div>
                  {/* Slot2 */}
                  <div className={Styles.slot}>
                      <div>
                        <div>
                          Complete the <b>UI design</b> of Landing Page for <b>TravelDays</b>
                        </div>
                        <div>
                          Priority: <b style={{color:"#FF6767"}}>High</b>
                        </div>
                      </div>
                      <div>
                        <img src={NotifyIcon2} alt="Notify_Icon" />
                      </div>
                  </div>
                  {/* Slot3 */}
                  <div className={Styles.slot}>
                      <div>
                        <div>
                          Complete the <b>Mobile app design</b> for <b>Pet Warden</b>
                        </div>
                        <div>
                          Priority: <b style={{color:"#FF6767"}}>Extremely High</b>
                        </div>
                      </div>
                      <div>
                        <img src={NotifyIcon3} alt="Notify_Icon" />
                      </div>
                  </div>
                  {/* Slot4 */}
                  <div className={Styles.slot}>
                      <div>
                        <div>
                          Complete the <b>entire design</b> for <b>Juice Slider</b>
                        </div>
                        <div>
                          Priority: <b style={{color:"#FF6767"}}>High</b>
                        </div>
                      </div>
                      <div>
                        <img src={NotifyIcon4} alt="Notify_Icon" />
                      </div>
                  </div>
                </div>
              </div>
  );

  return (
    <>
      <nav className={Styles.Nav}>
        <div className={Styles.Navbar}>
          <div className={Styles.AppLogo}>
            <Link to="/" target="_parent">
              <Logo />
            </Link>
          </div>
          {/* Search */}
          <div className={Styles.Search}>
            <div style={{width: '100%', borderRadius: '8px'}}>
            <Filter
              fullWidth
              value={SearchTerm}
              inputProps={{
                sx: {
                  color: '#A1A3AB',
                  fontSize: '15px',
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                  backgroundColor: '#F5F8FF',
                  padding:'6px 3px',
                  height: '24px',
                  borderRadius: '8px',
                  paddingLeft: '16px'
                },
                }}
                placeholder="Search your task here..."
                onChange={(e) => setSearchTerm(e.target.value)}
                    />
            </div>
            <div className={Styles.SearchIcon}>
              <div>
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className={Styles.NavEnd}>
          <div className={Styles.Icons}>
            <div className={Styles.menuBar} onClick={changeIcon}>
                {xrow ? (<GrClose style={{color: "#fff", fontWeight:"bold"}} />) : (<TfiMenu style={{color: "#fff", fontWeight:"bold"}} />)}
            </div>
            <Popover placement="bottom" content={NotifyBlock} trigger="click">
            <div className={Styles.BillBox}>
              <BillIcon />
            </div>
            </Popover>
            <div>
            <Popover placement="bottom" content={DatePick} trigger="click">
            <div className={Styles.CalendBox}>
              <CalenderIcon />
              {/* Calender Block */}
              </div>
              </Popover>
              </div>
          </div>
          <div className={Styles.date}>
            <div>
              {Datum.format("dddd")}
            </div>
            <div className={Styles.showDate}>
              <span>
                {Datum.format("DD/MM/YYYY")}
              </span>
            </div>
          </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;