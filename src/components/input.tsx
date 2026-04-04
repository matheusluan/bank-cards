"use client"

import Image from "next/image"
import { InputHTMLAttributes } from "react"
import { FieldError, UseFormRegister } from "react-hook-form"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string
    name: string
    touched?: boolean
    error?: FieldError
    register: UseFormRegister<any>
}

export default function Input({
    label,
    name,
    register,
    error,
    className,
    touched = false,
    ...rest
}: InputProps) {

    const isValid = touched && !error;

    return (
        <div className="flex flex-col gap-1 mb-4 w-full">
            <label className="text-black text-sm font-bold">
                {label}
            </label>

            <div className="relative w-full">
                <input
                    {...register(name)}
                    {...rest}
                    className={`w-full outline-none border-b pb-2 pr-8 placeholder:text-gray transition-colors
                    ${error ? "border-danger text-danger" : isValid ? "border-success text-success" : "border-gray text-black"}
                    ${className || ""}
                    `}
                />

                {error ? (
                    <Image
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                        width={12}
                        height={12}
                        alt="Error"
                        src="/icons/form-error.svg"
                    />
                ) : isValid ? (
                    <Image
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                        width={12}
                        height={12}
                        alt="Success"
                        src="/icons/form-success.svg"
                    />
                ) : null}
            </div>

            {error && (
                <span className="text-red-500 text-xs">
                    {error.message}
                </span>
            )}
        </div>
    )
}