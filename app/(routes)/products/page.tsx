import ProductsList from "@/app/features/products/components/products-list";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <p className="mt-2 text-slate-400">
          Product management
        </p>

        <ProductsList />

      </div>
    </main>
  );
}