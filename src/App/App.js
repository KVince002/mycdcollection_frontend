import '../App.css';
import Homepage from "../Components/Homepage/Homepage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Homepage/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
