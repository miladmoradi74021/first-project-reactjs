import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskContainer from "./Containers/TaskContainer";
import UserContainer from './Containers/UserContainer';
import Navbar from './Containers/Navbar';
import NoPage from './Components/NoPage';
import ProductDetail from './Components/ProductDetail';
import ProductList from './Components/ProductList';
import ProductRegistration from './Components/ProductRegistration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Navbar />}>
            <Route path="TaskContainer" element={<TaskContainer />} />
            <Route path="UserContainer" element={<UserContainer />} />
            <Route path="ProductDetail/:id" element={<ProductDetail />} />
            <Route index path="ProductList" element={<ProductList />} />
            <Route index path="ProductRegistration" element={<ProductRegistration />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
