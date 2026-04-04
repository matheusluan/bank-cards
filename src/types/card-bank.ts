import { CardBrand } from "./card-brand";

export type BankCardType = {
    brand: CardBrand;
    name: string;
    number: string;
    cvc: string;
    expires: string;
};
