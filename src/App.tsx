import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { publiclayout as PublicLayout } from '@/layouts/PublicLayout';
import AuthenticationLayout from '@/layouts/auth-layout';
import ProtectRoutes from "@/layouts/protected-routes";
import { MainLayout } from "@/layouts/main-layout";

import HomePage from '@/routes/home';
import SignInPage from './routes/sign-in';
import { SignUpPage } from './routes/sign-up';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element = {<PublicLayout />}>
          <Route index element={<HomePage />} /> 
        </Route>
        {/*authhentication layout*/}
             <Route element = {<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} /> 
          <Route path="/signup/*" element={<SignUpPage />} /> 

        </Route>

        {/* Protected routes */}
        <Route element={<ProtectRoutes><MainLayout/></ProtectRoutes>}>
         
          {/*add all the protected routes*/}

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
