import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import Adminmain from "./components/Adminmain";
function App() {
	const user = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");
	return (
		<Routes>
			
            {user ? (
                userType === "Admin" ? (
                    <Route path="/" element={<Adminmain />} />
                ) : (
                    <Route path="/" element={<Main />} />
                )
            ) : (
                <Route path="/" element={<Navigate replace to="/login" />} />
            )}
			<Route path="/signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/password-reset/:id/:token" element={<PasswordReset />} />
		</Routes>
	);
}

export default App;