import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPageComponent } from './pages/login/LoginPageComponent';

import { routesApp } from './routes/routes';
import PrivateRoutes from './routes/PrivateRoutes';
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPageComponent />}></Route>
        {routesApp.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<PrivateRoutes>{route.component}</PrivateRoutes>}
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
