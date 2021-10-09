import { useState } from "react";
import classes from "./PhotoSearch.module.css";
import SearchIcon from "../UI/SearchIcon";
import { useHistory } from "react-router-dom";

const PhotoSearch = ({ onSearch }) => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const onInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.trim().length > 0) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
    setSearchTerm(inputValue);
  };

  const searchHandler = () => {
    history.push(`/search/${searchTerm}`);
  };

  return (
    <div className={classes.inputButtonWrapper}>
      <input
        className={classes.input}
        type="text"
        placeholder="What are we searching for?"
        onChange={onInputChange}
      />
      <button type="submit" disabled={!isButtonEnabled} onClick={searchHandler}>
        <SearchIcon />
      </button>
    </div>
  );
};
export default PhotoSearch;
