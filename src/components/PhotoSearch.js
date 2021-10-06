import Button from "../UI/Button";
import { useState } from "react";

const PhotoSearch = ({ onSearch }) => {
  const [userInput, setUserInput] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

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
    onSearch(userInput);
  };

  return (
    <>
      <input
        type="text"
        placeholder="What are we searching for?"
        onChange={onInputChange}
      />
      <Button type="submit" isEnabled={isButtonEnabled} onClick={searchHandler}>
        Search
      </Button>
    </>
  );
};
export default PhotoSearch;
