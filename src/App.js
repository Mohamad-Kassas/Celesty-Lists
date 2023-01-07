import React from "react";
import LandingPage from "./components/landingPage";


function App() {
  return (
    <React.Fragment>
      <LandingPage login={false} signUp={true}></LandingPage>
    </React.Fragment>
  );
}

export default App;
