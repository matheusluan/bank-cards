"use client";

import { HTMLAttributes } from "react";

import { BankCardType } from "@/types/card-bank";
import { CardBrand } from "@/types/card-brand";
import Image from "next/image";

type BankCardProps = {
    card: BankCardType;
} & HTMLAttributes<HTMLDivElement>;

export default function BankCard({ card, className, ...props }: BankCardProps) {
    const { brand, name, number, cvc, expires } = card;
    const formattedNumber = number.replace(/(.{4})/g, "$1 ").trim();

    return (
        <div
            className={`relative w-full h-40 rounded-sm text-white overflow-hidden ${brand === CardBrand.VISA ? "bg-card-ciano" : "bg-primary-alt"}`}
            {...props}
        >
            {/* Shape*/}
            <div
                className={`absolute top-0 right-0 h-full w-full bg-no-repeat bg-right bg-contain z-0 ${brand === CardBrand.VISA
                    ? "bg-[url('/icons/card-background-shape-visa.svg')]"
                    : "bg-[url('/icons/card-background-shape-mastercard.svg')]"
                    }`}
            />

            {/* Brand */}
            <div className="absolute top-5 left-5">
                {brand === CardBrand.VISA && (
                    <Image width={40} height={40} src="/icons/visa-logo.svg" alt="Visa" />
                )}
                {brand === CardBrand.MASTERCARD && (
                    <Image width={40} height={40} src="/icons/mastercard-logo.svg" alt="Mastercard" />
                )}
            </div>

            {/* Card Content */}
            <div className="relative z-10 h-40 py-4 px-5 flex flex-col justify-between">
                {/* Top Part */}
                <div className="flex justify-end items-center space-x-2 font-bold">
                    {/* CVV */}
                    <div className="flex flex-col items-end leading-4">
                        <span className="text-[8px] text-gray-muted">CVC</span>
                        <p className="text-[14px] tracking-wide">{cvc}</p>
                    </div>

                    {/* EXPIRES */}
                    <div className="flex flex-col items-end leading-4">
                        <span className="text-[8px] text-gray-muted">EXPIRES</span>
                        <p className="text-[14px] tracking-wide">{expires}</p>
                    </div>
                </div>

                {/* Bottom Part */}
                <div className="flex justify-between items-end">
                    <div className="">
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm tracking-widest">{formattedNumber}</p>
                    </div>

                    <Image src="/icons/edit-icon.svg" width={18} height={18} alt="Edit Icon" />
                </div>
            </div>
        </div>
    );
}