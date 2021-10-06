import { useHistory } from "react-router-dom";
const PhotoFilter = ({ onSearch }) => {
  const history = useHistory();
  const filterButtonName = ["Mountain", "Beaches", "Birds", "Foods"];
  const handleFilterClick = (name) => {
    history.push(`/photoTitle/${name}`);
    onSearch(name);
  };
  return (
    <div>
      {filterButtonName.map((name, key) => (
        <button type="submit" key={key} onClick={() => handleFilterClick(name)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default PhotoFilter;
