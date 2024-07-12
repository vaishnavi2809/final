import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PlanTrip from './pages/Plan';
import FindMatch from './pages/FindMatch';
import UserProfile from './pages/UserProfile';
const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => (
  <BrowserRouter>
    {/* <Header />
    <Home /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="plan-trip" element={<PlanTrip/>} />
      <Route path="find-match" element={<FindMatch />} />
      <Route path="user-profile" element={<UserProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;

