import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout";
import DashBoardView from "@/views/DashBoardView";
import CreateProjectView from '@/views/projects/createProjectView';
import EditProjectView from '@/views/projects/editProjectView';
import DetailProjectView from "./views/projects/detailProject";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import ConfirmAccountView from "./views/auth/ConfirmAccountView";
import RequestNewCode from "./views/auth/RequestNewCode";
import ForgotPasswordView from "./views/auth/ForgotPassword";
import NewPassword from "./views/auth/NewPassword";


export const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashBoardView />} index />
                    <Route path="/projects/create" element={<CreateProjectView />} />
                    <Route path="/projects/:projectId" element={<DetailProjectView />} />
                    <Route path="/projects/:projectId/edit" element={<EditProjectView />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="/auth/login" element={<LoginView />} />
                    <Route path="/auth/register" element={<RegisterView />} />
                    <Route path="/auth/confirmar" element={<ConfirmAccountView />} />
                    <Route path="/auth/requestCode" element={<RequestNewCode />} />
                    <Route path="/auth/forgotPassword" element={<ForgotPasswordView />} />
                    <Route path="/auth/newPassword" element={<NewPassword />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
};
