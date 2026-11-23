'use client';

import { useProducts } from
  '../hooks/use-products';

export default function ProductsList() {
  const {
    data,
    error,
    isLoading,
    isFetching,
    isError,
  } = useProducts();

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return (
      <p className="text-red-400">
        {error.message}
      </p>
    );
  }

  return (
    <div className="mt-8">

      {isFetching && (
        <p className="mb-4 text-blue-400">
          Updating...
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {data?.map((product) => (
          <article
            key={product.id}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <h2 className="font-semibold">
              {product.title}
            </h2>

            <p className="mt-3 text-blue-400">
              ${product.price}
            </p>
          </article>
        ))}

      </div>

    </div>
  );
}