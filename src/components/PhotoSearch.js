import { useState, useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import classes from "./PhotoSearch.module.css";
import SearchIcon from "../UI/SearchIcon";

const PhotoSearch = ({ onSearch }) => {
  const [userInput, setUserInput] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const { fetchPhoto } = useContext(PhotoContext);

  const onInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.trim().length > 0) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
    setUserInput(inputValue);
  };

  const searchHandler = () => {
    fetchPhoto(userInput);
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
