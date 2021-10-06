import axios from "axios";
import _ from "lodash";
import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PhotoSearch from "./components/PhotoSearch";
import PhotoList from "./components/PhotoList";
import PhotoFilter from "./components/PhotoFilter";
import PhotoTitle from "./components/Pages/PhotoTitle";
import MainHeader from "./components/MainHeader";

function App() {
  const [photoList, setPhotoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

  const fetchPhoto = async (tags) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`
      );
      console.log("response:", response);

      const responseData = await _.get(response, "data.photos.photo");
      setPhotoList(responseData);
      console.log("responseData: ", responseData);
      setErrorMessage(undefined);
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong!");
      setPhotoList(undefined);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <MainHeader />
      <main>
        <PhotoSearch onSearch={fetchPhoto} />
        <PhotoFilter onSearch={fetchPhoto} />
        <Route path="/photoTitle/:tags">
          <PhotoTitle />
        </Route>
        <PhotoList
          photoList={photoList}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      </main>
    </>
  );
}

export default App;
