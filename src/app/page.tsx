import Image from "next/image";
export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div>
          <Image
          className="rounded-lg w-full md:w-2/3 mx-auto mb-8"
          src="https://source.unsplash.com/800x400/?marketing"
          alt="Our Story"
          width={800}
          height={400}
        />
          </div>
          <div className="rounded-full text-3xl  bg-gradient-to-r from-purple-500 to-indigo-500 p-4 inline-block">
            Marketing Agency
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
              Name
            </span>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4">Your Marketing Hub</h1>
        <h2 className="text-lg mb-8">
          Elevate your brand with innovative marketing solutions.
        </h2>
        <p className="text-gray-300 max-w-[80%] mx-auto">
          Transform your business through strategic marketing campaigns that
          resonate with your audience. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quae, pariatur!
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-full mt-4">
          Get started
        </button>
      </div>
    </main>
  );
}
