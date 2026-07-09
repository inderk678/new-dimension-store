import { products } from "@/lib/products";

export default function FeaturedCollection() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold uppercase">
          Featured Collection
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:-translate-y-2"
            >
              <div className="mb-6 flex h-64 items-center justify-center rounded-xl bg-zinc-900">
                <span className="text-gray-500">
                  Image Coming Soon
                </span>
              </div>

              <h3 className="text-xl font-semibold">
                {product.name}
              </h3>

              <p className="mt-2 text-gray-400">
                ₹{product.price}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="rounded border border-white/20 px-2 py-1 text-xs"
                  >
                    {size}
                  </span>
                ))}
              </div>

              <button className="mt-6 w-full rounded-full bg-white py-3 font-semibold text-black transition hover:scale-105">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}