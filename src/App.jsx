import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AddDoctorPage,
  AppointmentsPage,
  ClassUpdatesPage,
  ClassBookingPage,
  SetSlotsPage,
  YoutubeVideosPage,
  UserDataPage,
  PaymentPage,
} from "./pages/Easy Imports/Admin Dashboard Imports/admin.js";
import {
  UserLogin,
  UserRegister,
} from "./pages/Easy Imports/Auth Imports/auth.js";
import {
  AboutPage,
  AppointmentPage,
  HomePage,
  TermsAndConditionPage,
  ServicesPage,
  DietPage,
  ClassPage,
} from "./pages/Easy Imports/Main Imports/main.js";
import MainLayout from "./layouts/Main Layout/MainLayout.jsx";
import Admin_Layout from "./layouts/Admin Dashboard/Admin_Layout.jsx";
import User_layout from "./layouts/User Dashboard/User_Layout.jsx";
import Doctor_Layout from "./layouts/Doctor Dashboard/Doctor_Layout.jsx";
import {
  MyAppointmentsPage,
  MyProfilePage,
  MyPaymentsPage,
  MyClassesPage,
} from "./pages/Easy Imports/User Dashboard Imports/user.js";
import ReschedulePage from "./pages/Admin Dashboard Pages/ReschedulePage.jsx";
import WhatsappTemplatePage from "./pages/Admin Dashboard Pages/whatsappTemplatePage.jsx";
import DoctorLogin from "./pages/Auth Pages/Doctor Auth/DoctorLogin.jsx";
import DoctorAppointments from "./pages/Doctor Dashboard Pages/DoctorAppointments.jsx";
import ProtectedRoute from "./routes/Protected Route/ProtectedRoute.jsx";

//EVERY ONE USE APP FOR TESTING YOUR COMPONENT
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routing for the main pages like Home, Services and etc. All this are the Public Routes*/}
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="term" element={<TermsAndConditionPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="login" element={<UserLogin />} />
          <Route path="diet" element={<DietPage />} />
          <Route path="class" element={<ClassPage />} />
          <Route path="appointment" element={<AppointmentPage />} />
        </Route>

        {/* Routing for the user dash Boards pages like Profile and payments and etc. */}
        {/* This are the protected Routes */}

        <Route
          path="/user"
          element={
            <ProtectedRoute isAuthenticated={true}>
              <User_layout />
            </ProtectedRoute>
          }
        >
          <Route path="appointment" element={<MyAppointmentsPage />} />
          <Route path="profile" element={<MyProfilePage />} />
          <Route path="payment" element={<MyPaymentsPage />} />
          <Route path="class" element={<MyClassesPage />} />
        </Route>




        {/* This are the Private Routes only the admin can access this routes and the their can be the multiple admin */}
        <Route path="/admin" element={<Admin_Layout />}>
          <Route path="addDoctor" element={<AddDoctorPage />} />
          <Route path="appointment" element={<AppointmentsPage />} />
          <Route path="appointment/reschedule" element={<ReschedulePage />} />
          <Route path="whatsapp" element={<WhatsappTemplatePage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="classbooked" element={<ClassBookingPage />} />
          <Route path="slots" element={<SetSlotsPage />} />
          <Route path="class" element={<ClassUpdatesPage />} />
          <Route path="youtube" element={<YoutubeVideosPage />} />
          <Route path="users" element={<UserDataPage />} />
        </Route>

        {/* This are the Private Routes only the admin can access this routes and the their can be the multiple admin */}
        <Route path="/doctor" element={<Doctor_Layout />}>
          <Route path="login" element={<DoctorLogin />} />
          <Route path="dashboard" element={<DoctorAppointments />} />
          <Route path="whatsapp" element={<WhatsappTemplatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
