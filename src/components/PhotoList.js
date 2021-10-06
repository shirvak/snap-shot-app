const PhotoList = ({ isLoading, errorMessage, photoList }) => {
  console.log("photoList: ", photoList);

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <div>
          {photoList?.map((item, key) => (
            <img
              src={`https://farm66.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
              key={key}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default PhotoList;
