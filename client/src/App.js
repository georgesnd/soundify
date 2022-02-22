// import MainInterface from './components/igor-components/MainInterface';
import "./App.css";
import Fakeheader from "./components/igor-components/Fakeheader";
import Playlists from "./components/igor-components/playlists/Playlists";
import Support from "./components/HomePage/support/Support";
// import "bootstrap/dist/bootstrap/css/bootstrap.min.css"
import Login from "./Login";
import Dashboard from "./Dashboard";
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
