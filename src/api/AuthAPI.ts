import { api } from "@/lib/axios"
import { confirmToken, NewPasswordForm, RequestConfirmationCodeForm, UserLoginForm, UserRegistrationForm } from "../types"
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


export const authLogin = async (formData: UserLoginForm) => {
    try {
        const url = "/auth/login"
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export const forgotPassword = async (formData: UserLoginForm) => {
    try {
        const url = "/auth/forgotPassword"
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export const validateToken = async (formData: confirmToken) => {
    try {
        const url = "/auth/validateToken"
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export const updatePasswordWithToken = async ({ formData, token }: { formData: NewPasswordForm, token: confirmToken["token"] }) => {
    try {
        const url = `/auth/updatePassword/${token}`
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}



