import Link from "next/link";
import NavBar from "./components/NavBar";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <header className="w-full bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold text-indigo-600">Buzz</h1>
            <NavBar />
          </div>
        </header>

        <section className="w-full py-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center">
          <h2 className="text-4xl font-extrabold mb-4">Welcome to Buzz</h2>
          <p className="text-lg">
            A place to share your thoughts, connect with friends, and explore
            trending topics.
          </p>

          <Link
            href="/createProfile"
            className="mt-6 px-5 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100"
          >
            {" "}
            Get Started
          </Link>
        </section>

        <main className="container mx-auto my-8 px-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Trending Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                <p className="text-gray-600">
                  🐝 What&apos;s the Buzz Today? Hey Buzz fam! 👋 Just checking
                  in to see what everyone&apos;s up to today! 🌞 Whether
                  you&apos;re chilling, working on something cool, or just
                  catching up on some much-needed rest, let&apos;s hear it! ✨
                  Today&apos;s Question: If you could be anywhere in the world
                  right now, where would you be? 🗺️ Drop a comment and
                  let&apos;s get a convo buzzing! Don&apos;t forget to tag
                  someone who needs a little extra good vibe today! 💛🐝
                  #WhatsTheBuzz #GoodVibesOnly
                </p>
              </h4>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-2"></h4>
              <p className="text-gray-600">
                🌤 Today&apos;s Weather Update! Hey everyone! 🌞 It is a
                beautiful day out here. The temperature is hovering around 75°F
                (24°C) with a light breeze—perfect for a stroll or some time
                outdoors! 🌳 But heads up! 🌧 There is a slight chance of rain in
                the late afternoon, so keep an umbrella handy if you are
                planning to be out. And for you sunset lovers, we are in for a
                spectacular show around 6:45 PM as the sky is supposed to clear
                up just in time for some stunning evening colors! 🌅
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-gray-200 py-4 text-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} Buzz. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
