"use client"

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardFormData, cardSchema } from "@/schemas/card-schema";
import Modal from "./modal";
import Input from "./input";
import Button from "./button";
import { useCardStore } from "@/stores/card-store";
import { BankCardType } from "@/types/card-bank";
import BankCard from "./bank-card";

type EditCardModalProps = {
    isOpen: boolean;
    onClose: () => void;
    cardToEdit?: BankCardType & { id: string };
};

export default function EditCardModal({ isOpen, onClose, cardToEdit }: EditCardModalProps) {
    const editCard = useCardStore((state) => state.editCard);
    const removeCard = useCardStore((state) => state.removeCard);

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isValid, touchedFields },
    } = useForm<CardFormData>({
        mode: "onBlur",
        resolver: zodResolver(cardSchema),
    });


    useEffect(() => {
        reset({
            cvc: cardToEdit?.cvc,
            name: cardToEdit?.name,
            cardNumber: cardToEdit?.number,
            expiryDate: cardToEdit?.expires,
        });
    }, [cardToEdit, reset]);

    const onSubmit = (data: CardFormData) => {
        editCard({
            id: cardToEdit!.id,
            name: data.name,
            number: data.cardNumber.replace(/\s/g, ""),
            expires: data.expiryDate,
            cvc: data.cvc,
        });

        onClose();
        reset();
    };

    if (!cardToEdit) return null;

    return (
        <Modal title="Edit your card" isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="max-h-[50dvh] overflow-y-scroll pr-1.5">

                    <BankCard card={cardToEdit} className="mb-10 mx-auto" />

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
                            label="Card Number"
                            name="cardNumber"
                            register={register}
                            error={errors.cardNumber}
                            touched={!!touchedFields.cardNumber}
                            placeholder="0000 0000 0000 0000"
                            maxLength={19}
                            onChange={(e) => {
                                let value = e.target.value.replace(/\D/g, "");
                                value = value.match(/.{1,4}/g)?.join(" ") || "";
                                e.target.value = value;
                            }}
                        />
                        <Input
                            label="Expiry Date"
                            name="expiryDate"
                            register={register}
                            error={errors.expiryDate}
                            touched={!!touchedFields.expiryDate}
                            placeholder="00/00"
                            maxLength={5}
                            onChange={(e) => {
                                let value = e.target.value.replace(/\D/g, "");
                                if (value.length > 2) value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
                                e.target.value = value;
                            }}
                        />
                        <Input
                            label="CVC"
                            name="cvc"
                            register={register}
                            error={errors.cvc}
                            touched={!!touchedFields.cvc}
                            placeholder="000"
                            maxLength={3}
                        />
                    </div>
                </div>

                <Button type="submit" className="mt-4 w-full" disabled={!isValid}>
                    Confirm
                </Button>

                <Button onClick={() => removeCard(cardToEdit.id)} className="mt-4 w-full bg-transparent text-gray hover:text-white hover:bg-danger active:bg-danger" >
                    Delete Card
                </Button>
            </form>
        </Modal>
    );
}