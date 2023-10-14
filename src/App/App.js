import '../App.css';
import Homepage from "../Components/Homepage/Homepage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CDView from "../Components/CDView/CDView";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Homepage/>}>
{/*
              Importing CDView for the route}
*/}
              <Route path="disk/:id" element={<CDView/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
