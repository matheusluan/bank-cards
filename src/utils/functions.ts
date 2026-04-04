import { CardBrand } from "@/types/card-brand";

export function getCardBrand(cardNumber: string): CardBrand {
    const number = cardNumber.replace(/\s/g, "");

    if (/^4\d{12}(\d{3})?$/.test(number)) return CardBrand.VISA;
    if (/^(5[1-5]\d{14}|2(2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12}))$/.test(number))
        return CardBrand.MASTERCARD;

    return CardBrand.VISA;
}