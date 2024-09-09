import { api } from "@/lib/axios"
import { UserRegistrationForm } from "../types"
import { isAxiosError } from "axios"

export const createAccount = async (formData: UserRegistrationForm) => {
    try {
        const url = "/auth/create"
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}