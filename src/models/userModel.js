
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()
const userSchema = z.object({
    id: z.number({
        required_error: "O Id  é obrigatório.",
        invalid_type_error: "O ID deve ser um número inteiro."
    }).
    positive({message: "O ID deve ser um número positivo."}),
    name: z.string({
        required_error: "O nome é obrigatório",
        invalid_type_error: "O nome deve ser uma string."
    }).
    max(100,{message: "O número máximo de caracteres é de 100"}).
    min(5, {message: "O número minímo de caracteres é 5"}),
    email: z.string({message: "O e-mail deve ser uma string."})
    .email({
        required_error: "O e-mail é obrigatório",
        invalid_type_error: "O e-mail deve ser uma string."
    })
    .max(200, {message: "O e-mail deve ter no máximo 200 caracteres"}),
    pass: z.string({
        required_error: "A senha é obrigatória",
        invalid_type_error: "A senha deve ser uma string."
    })
    .min(8, {message: "A senha deve ter no mínimo 8 caracteres"})
    .max(100, {message: "A senha deve ter no máximo 100 caracteres"})
})

// export const validateUser = (user) =>{
//     return userSchema.safeParse(user);
// }

export const validateUserToCreate = (user) =>{
    const parcialUserSchema = userSchema.partial({
        id: true
    }) 
    return parcialUserSchema.safeParse(user);
}

export const getAll = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return users
}

export const getById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
           id 
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return user
}

export const create = async (user) => {
    const result = await prisma.user.create({
        data: user, 
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return result
}

export const deleteUser = async (id) => {
    const user = await prisma.user.delete({
        where: {
           id 
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return user
}

export const update = async (user) => {
    const result = await prisma.user.update({
        where: {
            id: user.id
        }, 
        data: user,
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return result
}



