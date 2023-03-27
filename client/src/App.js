import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/index';
import LoginPage from './pages/loginPage/Index';
import ProfilePage from './pages/profilePage/index';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path='/' element= {<LoginPage/>} />
                <Route path='/home' element = {<HomePage/>}/>
                <Route path='/profile/:userId' element = {<ProfilePage/>}/>
              </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
