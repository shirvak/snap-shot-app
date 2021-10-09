import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import PhotoSearch from "./components/PhotoSearch";
import PhotoList from "./components/PhotoList";
import PhotoFilter from "./components/PhotoFilter";
import PhotoContextProvider from "./context/PhotoContext";
import classes from "./App.module.css";

function App() {
  return (
    <PhotoContextProvider>
      <HashRouter basename="/SnapScout">
        <div className={classes.container}>
          <h1 className={classes.header}>SnapShot</h1>
          <PhotoSearch />
          <PhotoFilter />
        </div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/mountain" />} />
          <Route
            path="/mountain"
            render={() => <PhotoList userInput="mountain" />}
          />
          <Route path="/beach" render={() => <PhotoList userInput="beach" />} />
          <Route path="/bird" render={() => <PhotoList userInput="bird" />} />
          <Route path="/food" render={() => <PhotoList userInput="food" />} />
          <Route path="/search/:searchInput" render={() => <PhotoSearch />} />
        </Switch>
      </HashRouter>
    </PhotoContextProvider>
  );
}

export default App;
