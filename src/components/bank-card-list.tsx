"use client";

import { useState } from "react";
import BankCard from "./bank-card";
import { BankCardType } from "@/types/card-bank";
import { useCardStore } from "@/stores/card-store";
import EditCardModal from "./edit-card-modal";

export default function BankCardList() {
    const { cards } = useCardStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cardToEdit, setCardToEdit] = useState<BankCardType | undefined>(undefined);

    const openEditModal = (card: BankCardType) => {
        setCardToEdit(card);
        setIsModalOpen(true);
    };

    return (
        <>
            <section className="my-12 flex items-center flex-col lg:grid lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5 min-h-50">
                {cards.length > 0 ? (
                    cards.map((card) => (
                        <BankCard
                            key={card.id}
                            card={card}
                            onEdit={() => openEditModal(card)}
                        />
                    ))
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center min-h-[50vh] md:min-h-0">
                        <p className="text-center text-gray-dark text-lg">
                            You don&apos;t have any cards yet. <br />Add one to get started!
                        </p>
                    </div>
                )}
            </section>

            <EditCardModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                cardToEdit={cardToEdit}
            />
        </>
    );
}