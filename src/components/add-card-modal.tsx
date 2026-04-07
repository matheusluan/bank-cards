"use client"

import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { CardFormData, cardSchema } from "@/schemas/card-schema";

import Modal from "./modal"
import Input from "./input";
import Button from "./button"
import { useCardStore } from "@/stores/card-store";


export default function AddCardModal() {
    const [isOpen, setIsOpen] = useState(false);
    const addCard = useCardStore((state) => state.addCard);

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isValid, touchedFields },
    } = useForm({
        mode: "onBlur",
        resolver: zodResolver(cardSchema)
    });

    const onSubmit = ({ cvc, name, expiryDate, cardNumber }: CardFormData) => {
        addCard({
            id: uuidv4(),
            cvc,
            name,
            expires: expiryDate,
            number: cardNumber.replace(/\s/g, ""),
        });
        setIsOpen(false);
        reset();
    };
    return (
        <>
            <Button
                type="button"
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[80%] lg:max-w-120 z-20"
            >
                Add new card
            </Button>

            <Modal title="Add your card details" isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5">
                        <Input
                            label="Name in card"
                            name="name"
                            register={register}
                            error={errors.name}
                            touched={!!touchedFields.name}
                            placeholder="John Doe"
                        />

                        <Input
                            label="Card number"
                            name="cardNumber"
                            register={register}
                            touched={!!touchedFields.cardNumber}
                            error={errors.cardNumber}
                            placeholder="0000 0000 0000 0000"
                            maxLength={19}
                            onChange={(e) => {
                                let value = e.target.value.replace(/\D/g, "");
                                value = value.match(/.{1,4}/g)?.join(" ") || "";
                                e.target.value = value;
                            }}
                        />

                        <Input
                            label="Expiry date"
                            name="expiryDate"
                            register={register}
                            touched={!!touchedFields.expiryDate}
                            error={errors.expiryDate}
                            placeholder="00/00"
                            maxLength={5}
                            onChange={(e) => {

                                let value = e.target.value.replace(/\D/g, "");

                                if (value.length > 2) {
                                    value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
                                }

                                e.target.value = value;
                            }}
                        />

                        <Input
                            label="CVC (Security code)"
                            name="cvc"
                            register={register}
                            error={errors.cvc}
                            touched={!!touchedFields.cvc}
                            placeholder="000"
                            maxLength={3}
                        />

                    </div>

                    <Button
                        type="submit"
                        className="mt-4 w-full"
                        disabled={!isValid}
                    >
                        Confirm
                    </Button>
                </form>
            </Modal>
        </>
    );
}
