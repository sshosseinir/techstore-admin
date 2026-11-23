import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-12">
          <p className="mb-3 text-sm text-blue-400">
            TECHSTORE ADMIN
          </p>

          <h1 className="text-4xl font-bold">
            Store Management
          </h1>

          <p className="mt-4 text-slate-400">
            Manage your products and inventory.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-xl font-semibold">
            Products
          </h2>

          <p className="mt-3 text-slate-400">
            Manage, search, filter and sort your products.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex rounded-lg
              bg-blue-600 px-5 py-3 font-medium
              transition hover:bg-blue-700"
          >
            View Products
          </Link>

        </div>

      </div>
    </main>
  );
}
