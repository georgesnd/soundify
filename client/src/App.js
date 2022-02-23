// import MainInterface from './components/igor-components/MainInterface';
import "./App.css";

// import "bootstrap/dist/bootstrap/css/bootstrap.min.css"

import LeftMenu from "./components/HomePage/LeftMenu";
import MainContainer from "./components/HomePage/MainContainer";
import RightMenu from "./components/HomePage/RightMenu";



function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer />

      <RightMenu />


   
      {/* <Fakeheader /> */}

      {/* <MainInterface />
      <Playlists /> */}

      {/* <Support /> */}

   

      <div className="background"></div>
    </div>
  );
}

export default App;
