import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useStyles from "./styles";
import {
  Actors,
  MovieInformation,
  Profile,
  Movies,
  NavBar,
} from "./components";

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
