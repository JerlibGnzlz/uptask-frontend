import { ProjectFormData } from "@/types/index"
import { api } from "@/lib/axios"


export const createProject = async (formData: ProjectFormData) => {
    try {
        const { data } = await api.post("/projects/create", formData)
        return data
    } catch (error) {
        console.log(error)
    }
}