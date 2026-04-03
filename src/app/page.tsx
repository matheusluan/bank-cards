import BankCard from "@/components/bank-card";
import Button from "@/components/button";
import { CardBrand } from "@/types/card-brand";

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-primary font-extrabold text-3xl">
        Your cards
      </h1>
      <h2 className="text-gray-muted font-medium text-sm">
        Add, edit or delete your cards any time
      </h2>

      {/* Card list */}
      <section className="my-12 grid md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5">
        <BankCard card={{
          brand: CardBrand.MASTERCARD,
          name: "John Doe",
          number: "4111111111111111",
          cvc: "123",
          expires: "12/26",
        }} />
        <BankCard card={{
          brand: CardBrand.VISA,
          name: "John Doe",
          number: "4111111111111111",
          cvc: "123",
          expires: "12/26",
        }} />
        <BankCard card={{
          brand: CardBrand.MASTERCARD,
          name: "John Doe",
          number: "1516511111156622",
          cvc: "123",
          expires: "12/26",
        }} />
        <BankCard card={{
          brand: CardBrand.VISA,
          name: "John Doe",
          number: "1514404141414141",
          cvc: "123",
          expires: "12/26",
        }} />
      </section>

      <Button className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[80%] lg:max-w-120 z-20">
        Add new card
      </Button>

    </main>
  );
}
