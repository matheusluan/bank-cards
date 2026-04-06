import { CardBrand } from "./card-brand";

export type BankCardType = {
    id: string;
    name: string;
    cvc: string;
    number: string;
    expires: string;
    brand: CardBrand;
};
