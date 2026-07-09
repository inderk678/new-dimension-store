export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-black uppercase">
            New Dimension
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            Premium streetwear designed for those who define their own style.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold uppercase">Shop</h3>
          <ul className="space-y-2 text-gray-400">
            <li>T-Shirts</li>
            <li>Hoodies</li>
            <li>Bottomwear</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold uppercase">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold uppercase">Follow Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>X (Twitter)</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} New Dimension Clothing Co. All rights reserved.
      </div>
    </footer>
  );
}