"use client"

import React from "react";
import { cn } from "@/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    children,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "w-full h-14 flex min-w-15 items-center justify-center gap-2 rounded-lg bg-primary disabled:bg-gray  text-white  font-bold hover:bg-primary-dark transition cursor-pointer",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}