import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskContainer from "./Containers/TaskContainer";
import UserContainer from './Containers/UserContainer';
import Navbar from './Containers/Navbar';
import NoPage from './Components/NoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<TaskContainer />} />
            <Route path="UserContainer" element={<UserContainer />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
