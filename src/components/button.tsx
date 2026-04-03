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
                "w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}