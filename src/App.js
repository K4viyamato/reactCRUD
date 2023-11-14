import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import CreatePage from "./pages/createPage";
import EditPage from "./pages/editPage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const BACK_END = process.env.REACT_APP_BACK_END;

function App() {
  return (
    <div>

      <nav className="bg-slate-800">
        <div className="container ml-1 mx-auto p-4">
          <Link to='/'><h2 className="text-white text-3xl font-bold">React CRUD</h2></Link>
        </div>
      </nav>

      <div className="container mx-auto p-2 h-full">
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/create" element={<CreatePage/>}/>
          <Route path="/edit/:id" element={<EditPage/>}/>
        </Routes>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        />
      
     
    </div>
  );
}

export default App;
