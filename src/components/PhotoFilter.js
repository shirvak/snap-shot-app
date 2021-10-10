import { NavLink } from "react-router-dom";
import classes from "./PhotoFilter.module.css";

const PhotoFilter = ({ searchParams }) => {
  const routesAndButtons = searchParams.map((item, key) => (
    <NavLink key={key} className={classes.filterButton} to={item.routeName}>
      {item.displayName}
    </NavLink>
  ));
  return <div className={classes.filterButtonsWrapper}>{routesAndButtons}</div>;
};

export default PhotoFilter;
