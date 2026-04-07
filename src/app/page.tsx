
import ClientCards from "@/components/client-cards";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 min-w-87.5">
      <h1 className="text-primary font-extrabold text-3xl">
        Your cards
      </h1>
      <h2 className="text-gray-muted font-medium text-sm">
        Add, edit or delete your cards any time
      </h2>

      {/* Wrapper to avoid hydration*/}
      <ClientCards />

    </main>
  );
}
