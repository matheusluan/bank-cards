import { z } from "zod"


export const cardSchema = z.object({

    name: z.string()
        .min(1, "Please fill in your name")
        .refine(
            val => /^[A-Za-z\s]+$/.test(val.trim()),
            "Please fill in your name"
        ),

    cardNumber: z.string()
        .transform((val) => val.replace(/\s/g, ""))
        .refine(val => /^\d{16}$/.test(val), {
            message: "Please enter a valid credit card number",
        }),

    expiryDate: z.string()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Please enter a valid expiry date"),

    cvc: z.string()
        .regex(/^\d{3,4}$/, "Please enter a valid security code"),
})

export type CardFormData = z.infer<typeof cardSchema>