import { api } from "@/lib/axios"
import { confirmToken, RequestConfirmationCodeForm, UserRegistrationForm } from "../types"
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

export const confirmarToken = async (formData: confirmToken) => {
    try {
        const url = "/auth/confirmarCuenta"
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export const requestNewCode = async (formData: RequestConfirmationCodeForm) => {
    try {
        const url = "/auth/request-code"
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}




