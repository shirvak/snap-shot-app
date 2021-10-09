import { NavLink } from "react-router-dom";
import classes from "./PhotoFilter.module.css";

const PhotoFilter = () => {
  return (
    <div className={classes.filterButtonsWrapper}>
      <NavLink className={classes.filterButton} to="/mountain">
        Mountain
      </NavLink>
      <NavLink className={classes.filterButton} to="/food">
        Foods
      </NavLink>
      <NavLink className={classes.filterButton} to="/beach">
        Beaches
      </NavLink>
      <NavLink className={classes.filterButton} to="/bird">
        Birds
      </NavLink>
    </div>
  );
};

export default PhotoFilter;
