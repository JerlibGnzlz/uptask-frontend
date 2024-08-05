import { dashboardProyectSchema, Project, ProjectFormData } from "@/types/index"
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
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export const getProjectById = async (id: Project["_id"]) => {

    try {
        const { data } = await api.get(`/projects/${id}`)
        console.log(data)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}