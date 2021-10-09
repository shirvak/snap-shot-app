import { useHistory } from "react-router-dom";
import classes from "./PhotoFilter.module.css";

const PhotoFilter = () => {
  const history = useHistory();
  const filterButtonName = [
    { routeName: "mountain", displayName: "Mountain" },
    { routeName: "food", displayName: "Foods" },
    { routeName: "beach", displayName: "Beaches" },
    { routeName: "bird", displayName: "Birds" },
  ];
  const handleFilterClick = (filter) => {
    history.push(`/${filter.routeName}`);
  };
  return (
    <div className={classes.filterButtonsWrapper}>
      {filterButtonName.map((filter, key) => (
        <button
          className={classes.filterButton}
          type="submit"
          key={key}
          onClick={() => handleFilterClick(filter)}
        >
          {filter.displayName}
        </button>
      ))}
    </div>
  );
};

export default PhotoFilter;
