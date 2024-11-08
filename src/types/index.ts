import { z } from "zod"

/* -------------------------------- AUTH USER ------------------------------- */
export const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    password_confirmation: z.string(),
    token: z.string()
})

type Auth = z.infer<typeof authSchema>
export type UserLoginForm = Pick<Auth, "email" | "password">
export type UserRegistrationForm = Pick<Auth, "name" | "email" | "password" | "password_confirmation">
export type confirmToken = Pick<Auth, 'token'>

export type RequestConfirmationCodeForm = Pick<Auth, "email">
export type ForgotPasswordForm = Pick<Auth, "email">
export type NewPasswordForm = Pick<Auth, 'password' | 'password_confirmation'>


/* ---------------------------------- TASK ---------------------------------- */


export const TaskStatusSchema = z.enum([
    "pending",
    "onHold",
    "inProgress",
    "underReview",
    "complete"
])

export type TaskStatus = z.infer<typeof TaskStatusSchema>

export const taskSchema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    project: z.string(),
    status: TaskStatusSchema,
    createdAt: z.string(),
    updatedAt: z.string(),
})

export type Task = z.infer<typeof taskSchema>
export type TaskFormData = Pick<Task, "name" | "description">


/* --------------------------------- PROJECT -------------------------------- */
export const projectSchema = z.object({
    _id: z.string(),
    projectName: z.string(),
    clientName: z.string(),
    description: z.string()
})


export const dashboardProyectSchema = z.array(
    projectSchema.pick({
        _id: true,
        projectName: true,
        clientName: true,
        description: true
    })
)

export type Project = z.infer<typeof projectSchema>
export type ProjectFormData = Pick<Project, "clientName" | "description" | "projectName">