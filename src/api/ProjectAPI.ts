import { dashboardProyectSchema, ProjectFormData } from "@/types/index"
import { api } from "@/lib/axios"
import { isAxiosError } from "axios"


export const createProject = async (formData: ProjectFormData) => {
    try {
        const { data } = await api.post("/projects/create", formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export const getProject = async () => {

    try {
        const { data } = await api.get("/projects")
        const response = dashboardProyectSchema.safeParse(data)
        console.log(response.data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}