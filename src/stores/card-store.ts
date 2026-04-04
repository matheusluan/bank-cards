import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BankCardType } from "@/types/card-bank";
import { getCardBrand } from "@/utils/functions";

interface CardStore {
    cards: BankCardType[];
    addCard: (card: Omit<BankCardType, "brand">) => void;
    removeCard: (number: string) => void;
}

export const useCardStore = create<CardStore>()(
    persist(
        (set) => ({
            cards: [],
            addCard: (card) =>
                set((state) => ({
                    cards: [
                        ...state.cards,
                        {
                            ...card,
                            brand: getCardBrand(card.number),
                        },
                    ],
                })),
            removeCard: (number) =>
                set((state) => ({
                    cards: state.cards.filter((c) => c.number !== number),
                })),
        }),
        {
            name: "bank-cards-storage",
        }
    )
);