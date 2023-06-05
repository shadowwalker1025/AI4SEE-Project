import React from "react";
import CountUp from "react-countup";
import "./LiveStates.css";
import "bootstrap/dist/css/bootstrap.min.css";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

const LiveStates = () => {
  return (
    <div className="live-stats-container mt-5 mb-5">
      <div className="live-stats">
        <GroupsOutlinedIcon style={{ color: "gold", fontSize: 80 }} />
        <div className="counter-container">
          <CountUp
            end={10}
            duration={5}
            style={{ fontWeight: "bold", fontSize: 30, marginLeft: 15 }}
          />
          <span className="plus">+</span>
        </div>
        <p className="title">Tutors</p>
      </div>
      <div className="live-stats">
        <PsychologyOutlinedIcon style={{ color: "gold", fontSize: 80 }} />
        <div className="counter-container">
          <CountUp
            end={10000}
            duration={5}
            style={{ fontWeight: "bold", fontSize: 30, marginLeft: 15 }}
          />
          <span className="plus">+</span>
        </div>
        <p className="title">Students enrolled</p>
      </div>
      <div className="live-stats">
        <SchoolOutlinedIcon style={{ color: "gold", fontSize: 80 }} />
        <div className="counter-container">
          <CountUp
            end={100}
            duration={5}
            style={{ fontWeight: "bold", fontSize: 30, marginLeft: 15 }}
          />
          <span className="plus">+</span>
        </div>
        <p className="title">Courses</p>
      </div>
      <div className="live-stats">
        <LocalLibraryOutlinedIcon style={{ color: "gold", fontSize: 80 }} />
        <div className="counter-container">
          <CountUp
            end={1000}
            duration={5}
            style={{ fontWeight: "bold", fontSize: 30, marginLeft: 15 }}
          />
          <span className="plus">+</span>
        </div>
        <p className="title">Lectures</p>
      </div>
    </div>
  );
};

export default LiveStates;
