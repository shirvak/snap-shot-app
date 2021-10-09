import { createContext, useState } from "react";
import axios from "axios";
import _ from "lodash";
export const PhotoContext = createContext({});

const PhotoContextProvider = (props) => {
  const [photoList, setPhotoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [userInput, setUserInput] = useState();

  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

  const fetchPhoto = async (tags) => {
    console.log("*** fetching: ", userInput);
    try {
      setIsLoading(true);
      setUserInput(tags);
      const response = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`
      );

      const responseData = await _.get(response, "data.photos.photo");
      setPhotoList(responseData);
      setErrorMessage(undefined);
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong!");
      setPhotoList(undefined);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <PhotoContext.Provider
      value={{
        photoList: photoList,
        isLoading: isLoading,
        errorMessage: errorMessage,
        userInput: userInput,
        fetchPhoto: fetchPhoto,
      }}
    >
      {props.children}
    </PhotoContext.Provider>
  );
};
export default PhotoContextProvider;
