import { useEffect, useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import classes from "./PhotoList.module.css";
import Loader from "../UI/Loader";

const PhotoList = ({ userInput }) => {
  const { photoList, isLoading, errorMessage, fetchPhoto } =
    useContext(PhotoContext);
  useEffect(() => {
    fetchPhoto(userInput);
  }, [userInput]);

  return (
    <div className={classes.photoListWrapper}>
      <h2>{userInput ? userInput : "Mountain"} Pictures</h2>
      {errorMessage && <div>{errorMessage}</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.photoGallery}>
          {photoList?.map((item, key) => (
            <div className={classes.photoItem}>
              <img
                src={`https://farm66.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                key={key}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default PhotoList;
