import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout";
import DashBoardView from "@/views/DashBoardView";
import CreateProjectView from '@/views/projects/createProjectView';


export const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashBoardView />} index />
                    <Route path="/projects/create" element={<CreateProjectView />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
};
