import { useParams } from "react-router-dom";

const PhotoTitle = () => {
  const { tags } = useParams();
  console.log("tags: ", tags);
  return <div>{tags ? `${tags} Pictures` : `Mountain Pictures`}</div>;
};
export default PhotoTitle;
