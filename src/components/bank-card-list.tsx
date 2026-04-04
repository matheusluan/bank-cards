"use client"

import BankCard from "./bank-card";
import { BankCardType } from "@/types/card-bank";
import { useCardStore } from "@/stores/card-store";

export default function BankCardList() {
    const cards = useCardStore((state) => state.cards);

    return (
        <section className="my-12 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5">
            {cards.map((card: BankCardType) => (
                <BankCard card={card} key={card.number} />
            ))}
        </section>
    );
}