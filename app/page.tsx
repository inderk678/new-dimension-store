import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">

        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

          <p className="mb-4 uppercase tracking-[0.4em] text-gray-400">
            Premium Streetwear
          </p>

          <h1 className="text-6xl font-black uppercase md:text-8xl">
            NEW DIMENSION
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Designed for those who redefine fashion.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="rounded-full bg-white px-8 py-3 font-bold text-black transition hover:scale-105">
              Shop Now
            </button>

            <button className="rounded-full border border-white px-8 py-3 transition hover:bg-white hover:text-black">
              Explore
            </button>

          </div>

        </section>

      </main>
    </>
  );
}
