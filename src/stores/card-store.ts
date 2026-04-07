import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BankCardType } from "@/types/card-bank";
import { getCardBrand } from "@/utils/functions";

interface CardStore {
    cards: BankCardType[];
    hasHydrated: boolean;
    setHasHydrated: (state: boolean) => void;
    addCard: (card: Omit<BankCardType, "brand">) => void;
    editCard: (card: Omit<BankCardType, "brand">) => void;
    removeCard: (id: string) => void;
}

export const useCardStore = create<CardStore>()(
    persist(
        (set) => ({
            cards: [],
            hasHydrated: false,

            setHasHydrated: (state) => set({ hasHydrated: state }),

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

            editCard: (card) =>
                set((state) => ({
                    cards: state.cards.map((c) =>
                        c.id === card.id
                            ? { ...card, brand: getCardBrand(card.number) }
                            : c
                    ),
                })),

            removeCard: (id) =>
                set((state) => ({
                    cards: state.cards.filter((c) => c.id !== id),
                })),
        }),
        {
            name: "bank-cards-storage",
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
);