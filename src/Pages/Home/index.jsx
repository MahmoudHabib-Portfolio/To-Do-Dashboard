import Styles from "./style.module.scss";
import {AccountInfo, MyTask, Navbar, TaskCategories, VitalTask} from "../../Components";
import {DashboardMenu} from "../../Components";
import Tab from 'react-bootstrap/Tab';
import {Dashboard} from "../../Components/DashboardTabs";
import Preloader from "../../Layout/Preloader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {

  /* useNavigate */
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [sideDahs, setSideDash] = useState("0px"); 

  const OnDash = () => {
    const TogDash = sideDahs !== ("0px") ? ("0px") : ("-250px"); 
    setSideDash(TogDash);
  }

  const Navigato = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/auth', { replace: true });
    }, 3000);
}

  return (
    <>
    {loading ? (<Preloader />) : (
      <div>
        <Navbar OnDash={OnDash} />
    <div className={Styles.TabCont}>
    <Tab.Container defaultActiveKey={0}>
      <div className={Styles.dashboardM} style={{left: sideDahs}}>
      <DashboardMenu Navigato={Navigato} />
      </div>
      <div className={Styles.TabsBody}>
      <Tab.Content>
            <Tab.Pane eventKey={0}>
                <Dashboard />
              </Tab.Pane>
            <Tab.Pane eventKey={1}>
              <VitalTask />
            </Tab.Pane>
            <Tab.Pane eventKey={2}>
              <MyTask />
            </Tab.Pane>
            <Tab.Pane eventKey={3}>
              <TaskCategories />
            </Tab.Pane>
            <Tab.Pane eventKey={4}>
              <AccountInfo />
            </Tab.Pane>
          </Tab.Content>
      </div>
    </Tab.Container>
    </div>
      </div>
    )}
    </>
  )
}

export default Home;