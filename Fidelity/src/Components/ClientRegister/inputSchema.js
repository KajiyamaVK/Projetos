import React from 'react'
import * as yup from 'yup'

const ClientsRegisterSchema=yup.object({
    name:yup
        .string()
        .typeError("Utilize apenas letras. Sem números, sem sinais.")
        .required('O campo nome é obrigatório')
        .min(7,'O nome precisa estar completo'),
    CPF: yup
        .number()
        .typeError("Digite apenas números - sem pontos ou traços")
        .min(11, "CPF inválido - quantidade MENOR do que necessária.")
        .max(11, "CPF inválido - quantidade MAIOR do que necessária"),
    Telefone: yup
        .number("Digite apenas números. Sem traços, espaços ou símbolos.")
        .typeError("Digite apenas números - sem pontos ou traços")
        .min(10, "Telefone inválido - Digite apenas números (Sem traços ou símbolos)")
        .max(11, "Telefone inválido - Digite apenas números (Sem traços ou símbolos)")
})

export default ClientsRegisterSchema