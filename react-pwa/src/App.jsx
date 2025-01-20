import './App.css'
import NavBar from './components/HomePage/Navbar/NavBar';
import './index.css';
import HomePage from './pages/HomePage';
import AllRoutes from './routes/AllRoutes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <>
      <div className='App'>
      <ToastContainer autoClose={2000} />
      <NavBar />
        <AllRoutes/>
      </div>
    </>
  )
}

export default App
