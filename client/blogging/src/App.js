import './App.css';
import Header from './Header';
import Layout from './Layout';
import Post from './Post';
import IndexPage from './pages/IndexPage';
import {Routes,Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App=()=>{
   return (
    <Routes>

        <Route path="/" element={<Layout/>}>

        <Route index element ={ <IndexPage/> }/>
         
       <Route path="Login" element={ <LoginPage/> }   />
       <Route path="Register" element={ <RegisterPage/> }   />

       </Route>
       
    </Routes>  
   );
}

export default App;