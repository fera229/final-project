import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center text-black">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-8 mb-4">
          Manage Your Diabetes with Ease
        </h2>
        {/* <p className="text-lg md:text-xl lg:text-2xl max-w-xl mb-8 text-black">
          Diabuddy helps you keep track of your blood sugar levels, insulin
          intake, and meals. Get personalized meal recommendations and manage
          your diabetes efficiently.
        </p> */}

        <Image
          src="/assets/home1.jpg"
          alt="Diabetes Management"
          width={400}
          height={300}
          layout="responsive"
          className="w-full max-w-md mb-8 rounded-lg shadow-lg"
        />

        <div className="flex space-x-4">
          <Link href="/register">
            <div className="px-6 py-3 bg-customPrimary text-white text-lg font-semibold rounded-md shadow-md hover:bg-customSecondary transition-colors text-center cursor-pointer">
              Register
            </div>
          </Link>
          <Link href="/login">
            <div className="px-6 py-3 bg-customSecondary text-white text-lg font-semibold rounded-md shadow-md hover:bg-customPrimary transition-colors text-center cursor-pointer">
              Sign In
            </div>
          </Link>
        </div>
      </main>

      <footer className="w-full py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Diabuddy. All rights reserved.</p>
      </footer>
    </div>
  );
}
