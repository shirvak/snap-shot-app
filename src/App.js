import { Route, Switch, Redirect } from "react-router-dom";
import PhotoSearch from "./components/PhotoSearch";
import PhotoList from "./components/PhotoList";
import PhotoFilter from "./components/PhotoFilter";
import PhotoContextProvider from "./context/PhotoContext";
import classes from "./App.module.css";
import VimLogo from "./UI/VimLogo";

function App() {
  const searchParams = [
    { routeName: "/mountain", displayName: "Mountain" },
    { routeName: "/food", displayName: "Foods" },
    { routeName: "/beach", displayName: "Beaches" },
    { routeName: "/bird", displayName: "Birds" },
  ];
  const photos = searchParams.map((param, key) => (
    <Route
      key={key}
      path={param.routeName}
      render={() => (
        <PhotoList userInput={param.displayName} path={param.routeName} />
      )}
    />
  ));
  return (
    <PhotoContextProvider>
      <div className={classes.container}>
        <VimLogo />
        <h1 className={classes.header}>SnapShot</h1>
        <PhotoSearch />
        <PhotoFilter searchParams={searchParams} />
      </div>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/mountain" />} />
        {photos}
        <Route
          path="/:searchInput"
          render={(props) => (
            <PhotoList userInput={props.match.params.searchInput} />
          )}
        />
      </Switch>
    </PhotoContextProvider>
  );
}

export default App;
