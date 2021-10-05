import React from "react";
import { Route } from "react-router-dom";
// cmponenets
import Home from "./pages/Home";
import Nav from "./components/Nav";
// Styles
import GlobalStyles from "./components/GlobalStyles";


function App() {
  
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]} >
        <Home />
      </Route>
    </div>
  );
}

export default App;
