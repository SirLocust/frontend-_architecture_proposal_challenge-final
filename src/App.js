import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPageComponent } from './pages/login/LoginPageComponent';
import { HomePageComponent } from './pages/home/HomePageComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPageComponent />}></Route>
        <Route
          path="/*"
          element={
            <LoginPageComponent>
              <HomePageComponent />
            </LoginPageComponent>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
