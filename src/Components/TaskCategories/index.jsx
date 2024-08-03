import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from "@mui/material/TableHead";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {DeleteIcon, EditIcon, PlusVector} from "../../assets/icons";
import Styles from "./style.module.scss";

const TaskCategories = () => {

  return (
    <div className={Styles.TasktagCont}>
        <div className={Styles.TasktagBod}>
          {/* Task_Cat */}
        <div className={Styles.modalTitle}>
            <div className={Styles.taskCat}>Task Categories</div>
            <div className={Styles.subLine}></div>
          </div>
          {/* Task_Cat_Body */}
          <div style={{width: "100%", paddingTop:"0.5em"}}>
          <button
          className={Styles.submitBtn2}>
            Add Category
          </button>
          </div>
          {/* Task_Status_Body */}
          <div className={Styles.taskStatus}>
            <div className={Styles.taskStatsHead}>
              <div className={Styles.modalTitle2}>
                <div className={Styles.taskTag}>Task Status</div>
                <div className={Styles.subLine2}></div>
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
                >
                Add Task Status  
              </Button>
              </div>
            </div>
            {/* Task_Status_Body */}
      <div className={Styles.tableCont}>
      <TableContainer component={Paper} sx={{backgroundColor:"transparent", borderTop:"1px solid #A1A3AB", borderBottom:"1px solid #A1A3AB", borderRadius: "12px"}}>
      <Table aria-label="collapsible table" sx={{backgroundColor:"transparent"}}>
        <TableHead>
          <TableRow sx={{ "& th": { padding: "12px 16px", borderRight:"1px solid #A1A3AB", borderLeft:"1px solid #A1A3AB"} }}>
            <TableCell align="center" sx={{fontWeight:"bold", color:"#000", fontSize:"0.85rem", letterSpacing:"1px"}}>SN</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", color:"#000", fontSize:"0.85rem", letterSpacing:"1px"}}>Task Status</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", color:"#000", fontSize:"0.85rem", letterSpacing:"1px"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {/* Table Rows */}
        <TableRow sx={{ "& td": { padding: "6px 16px", borderRight:"1px solid #A1A3AB", borderLeft:"1px solid #A1A3AB", borderBottom: "none"} }}>
        <TableCell align="center">
        <span className={Styles.Celld}>1</span>
        </TableCell>
        <TableCell align="center">
        <span className={Styles.Celld}>Completed</span>
        </TableCell>
        <TableCell align="center">
        {/* Action_Body */}
        <div className={Styles.taskAction}>
            <div>
            <Button 
                sx={{
                  "&:hover":{
                    background: "#F24E1E"
                  },
                  textTransform: "inherit",
                  background: "#F24E1E",
                  color: "#fff",
                  padding: "4px 14px",
                  fontWeight:"normal"
                }}
                startIcon={<EditIcon />}
                >
                Edit  
              </Button>
            </div>
            <div>
            <Button 
                sx={{
                  "&:hover":{
                    background: "#F24E1E"
                  },
                  textTransform: "inherit",
                  background: "#F24E1E",
                  color: "#fff",
                  padding: "4px 14px",
                  fontWeight:"normal"
                }}
                startIcon={<DeleteIcon />}
                >
                Delete
              </Button>
            </div>
        </div>
        </TableCell>
        </TableRow>
        {/* Second_Row */}
        <TableRow sx={{ "& td": { padding: "6px 16px", borderRight:"1px solid #A1A3AB", borderLeft:"1px solid #A1A3AB", borderBottom: "none"} }}>
        <TableCell align="center">
        <span className={Styles.Celld}>2</span>
        </TableCell>
        <TableCell align="center">
        <span className={Styles.Celld}>In Progress</span>
        </TableCell>
        <TableCell align="center">
        {/* Action_Body */}
        <div className={Styles.taskAction}>
            <div>
            <Button 
                sx={{
                  "&:hover":{
                    background: "#F24E1E"
                  },
                  textTransform: "inherit",
                  background: "#F24E1E",
                  color: "#fff",
                  padding: "4px 14px",
                  fontWeight:"normal"
                }}
                startIcon={<EditIcon />}
                >
                Edit  
              </Button>
            </div>
            <div>
            <Button 
                sx={{
                  "&:hover":{
                    background: "#F24E1E"
                  },
                  textTransform: "inherit",
                  background: "#F24E1E",
                  color: "#fff",
                  padding: "4px 14px",
                  fontWeight:"normal"
                }}
                startIcon={<DeleteIcon />}
                >
                Delete
              </Button>
            </div>
        </div>
        </TableCell>
        </TableRow>
        {/* Third_Row */}
        <TableRow sx={{ "& td": { padding: "6px 16px 16px 16px", borderRight:"1px solid #A1A3AB", borderLeft:"1px solid #A1A3AB", borderBottom: "none"} }}>
        <TableCell align="center">
        <span className={Styles.Celld}>3</span>
        </TableCell>
        <TableCell align="center">
        <span className={Styles.Celld}>Not Started</span>
        </TableCell>
        <TableCell align="center">
        {/* Action_Body */}
        <div className={Styles.taskAction}>
            <div>
            <Button 
                sx={{
                  "&:hover":{
                    background: "#F24E1E"
                  },
                  textTransform: "inherit",
                  background: "#F24E1E",
                  color: "#fff",
                  padding: "4px 14px",
                  fontWeight:"normal"
                }}
                startIcon={<EditIcon />}
                >
                Edit  
              </Button>
            </div>
            <div>
            <Button 
                sx={{
                  "&:hover":{
                    background: "#F24E1E"
                  },
                  textTransform: "inherit",
                  background: "#F24E1E",
                  color: "#fff",
                  padding: "4px 14px",
                  fontWeight:"normal"
                }}
                startIcon={<DeleteIcon />}
                >
                Delete
              </Button>
            </div>
        </div>
        </TableCell>
        </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
      </div>
          </div>
          {/* Task_Priority_Body */}
          <div className={Styles.taskPriority}>
            <div className={Styles.taskStatsHead}>
              <div className={Styles.modalTitle2}>
                <div className={Styles.taskTag}>Task Priority</div>
                <div className={Styles.subLine2}></div>
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
                >
                Add Task Priority  
              </Button>
              </div>
            </div>
      {/* Task_Status_Body */}
      <div className={Styles.tableCont}>
      <TableContainer component={Paper} sx={{backgroundColor:"transparent", borderTop:"1px solid #A1A3AB", borderBottom:"1px solid #A1A3AB", borderRadius: "12px"}}>
      <Table aria-label="collapsible table" sx={{backgroundColor:"transparent"}}>
        <TableHead>
          <TableRow sx={{ "& th": { padding: "12px 16px", borderRight:"1px solid #A1A3AB", borderLeft:"1px solid #A1A3AB"} }}>
            <TableCell align="center" sx={{fontWeight:"bold", color:"#000", fontSize:"0.85rem", letterSpacing:"1px"}}>SN</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", color:"#000", fontSize:"0.85rem", letterSpacing:"1px"}}>Task Priority</TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", color:"#000", fontSize:"0.85rem", letterSpacing:"1px"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {/* Table Rows */}
        <TableRow sx={{ "& td": { padding: "6px 16px", borderRight:"1px solid #A1A3AB", borderLeft:"1px solid #A1A3AB", borderBottom: "none"} }}>
        <TableCell align="center">
        <span className={Styles.Celld}>1</span>
        </TableCell>
        <TableCell align="center">
        <span className={Styles.Celld}>Extreme</span>
        </TableCell>
        <TableCell align="center">
        {/* Action_Body */}
        <div className={Styles.taskAction}>
            <div>
            <Button 
                sx={{
                  "&:hover":{
                    background: "#F24E1E"
                  },
                  textTransform: "inherit",
                  background: "#F24E1E",
                  color: "#fff",
                  padding: "4px 14px",
                  fontWeight:"normal"
                }}
                startIcon={<EditIcon />}
                >
                Edit  
              </Button>
            </div>
            <div>
            <Button 
                sx={{
                  "&:hover":{
                    background: "#F24E1E"
                  },
                  textTransform: "inherit",
                  background: "#F24E1E",
                  color: "#fff",
                  padding: "4px 14px",
                  fontWeight:"normal"
                }}
                startIcon={<DeleteIcon />}
                >
                Delete
              </Button>
            </div>
        </div>
        </TableCell>
        </TableRow>
        {/* Second_Row */}
        <TableRow sx={{ "& td": { padding: "6px 16px", borderRight:"1px solid #A1A3AB", borderLeft:"1px solid #A1A3AB", borderBottom: "none"} }}>
        <TableCell align="center">
        <span className={Styles.Celld}>2</span>
        </TableCell>
        <TableCell align="center">
        <span className={Styles.Celld}>Moderate</span>
        </TableCell>
        <TableCell align="center">
        {/* Action_Body */}
        <div className={Styles.taskAction}>
            <div>
            <Button 
                sx={{
                  "&:hover":{
                    background: "#F24E1E"
                  },
                  textTransform: "inherit",
                  background: "#F24E1E",
                  color: "#fff",
                  padding: "4px 14px",
                  fontWeight:"normal"
                }}
                startIcon={<EditIcon />}
                >
                Edit  
              </Button>
            </div>
            <div>
            <Button 
                sx={{
                  "&:hover":{
                    background: "#F24E1E"
                  },
                  textTransform: "inherit",
                  background: "#F24E1E",
                  color: "#fff",
                  padding: "4px 14px",
                  fontWeight:"normal"
                }}
                startIcon={<DeleteIcon />}
                >
                Delete
              </Button>
            </div>
        </div>
        </TableCell>
        </TableRow>
        {/* Third_Row */}
        <TableRow sx={{ "& td": { padding: "6px 16px 16px 16px", borderRight:"1px solid #A1A3AB", borderLeft:"1px solid #A1A3AB", borderBottom: "none"} }}>
        <TableCell align="center">
        <span className={Styles.Celld}>3</span>
        </TableCell>
        <TableCell align="center">
        <span className={Styles.Celld}>Low</span>
        </TableCell>
        <TableCell align="center">
        {/* Action_Body */}
        <div className={Styles.taskAction}>
            <div>
            <Button 
                sx={{
                  "&:hover":{
                    background: "#F24E1E"
                  },
                  textTransform: "inherit",
                  background: "#F24E1E",
                  color: "#fff",
                  padding: "4px 14px",
                  fontWeight:"normal"
                }}
                startIcon={<EditIcon />}
                >
                Edit  
              </Button>
            </div>
            <div>
            <Button 
                sx={{
                  "&:hover":{
                    background: "#F24E1E"
                  },
                  textTransform: "inherit",
                  background: "#F24E1E",
                  color: "#fff",
                  padding: "4px 14px",
                  fontWeight:"normal"
                }}
                startIcon={<DeleteIcon />}
                >
                Delete
              </Button>
            </div>
        </div>
        </TableCell>
        </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
      </div>
          </div>
        </div>
    </div>
  )
}

export default TaskCategories;