import { Routes, Route } from 'react-router-dom';
import UserBooking from './Pages/UserBooking';
import Main from './Pages/main';
import Hospital from './Pages/Hospital';
import MySlot from './Pages/Myslots';
import Slot from './Pages/AddSlot';
import DocProfile from './Pages/DocProfile';
import DepartmentByHospitalId from './Pages/DepartmentByHospitalId';
import DoctorByHospitalId from './Pages/DoctorByHospitalId';
import DoctorByDepartmentId from './Pages/DoctorByDepartmentId';
import Department from './Pages/Department';
import Doctor from './Pages/Doctor';
import DocLogin from './Pages/DocLogin';
import UserLogin from './Pages/UserLogin';
import DoctorHome from './Pages/DoctorHome';
import DocBooking from './Pages/DocBooking';
import PrivateRoute from './components/PrivateRoute';
import DocForgot from './Pages/DocForgot';
import DocReset from './Pages/DocReset';
import UserSignup from './Pages/UserSignup';
import DocSignup from './Pages/DocSignup';
import UserHome from './Pages/UserHome';
import ForgotPass from './Pages/ForgotPass';
import ResetPass from './Pages/ResetPass';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/department" element={<Department />} />
        <Route path="/doctor" element={<Doctor />} />

        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route
          path="/departmentbyhospitalid/:id"
          element={<DepartmentByHospitalId />}
        />
        <Route
          path="/doctorbyhospitalid/:id/department/:departmentid"
          element={<DoctorByHospitalId />}
        />
        <Route
          path="/doctorbydepartmentid/:id"
          element={<DoctorByDepartmentId />}
        />
        <Route path="/docprofile/:id" element={<DocProfile />} />
        <Route path="/user/bookings" element={<UserBooking />} />

        <Route path="/user/forgot" element={<ForgotPass />} />
        <Route path="/user/reset/:id" element={<ResetPass />} />

        <Route path="/doctor/login" element={<DocLogin />} />
        <Route path="/doctor/signup" element={<DocSignup />} />
        <Route path="/doctor/forgot" element={<DocForgot />} />
        <Route path="/doctor/reset/:id" element={<DocReset />} />

        <Route path="doctor/slot" element={<Slot />} />
        <Route path="doctor/myslot" element={<MySlot />} />
        <Route element={<PrivateRoute role="DOCTOR" />}>
          <Route path="/doctor/home" element={<DoctorHome />} />
          <Route path="/doctor/bookings" element={<DocBooking />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
