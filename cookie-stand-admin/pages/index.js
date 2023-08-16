import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  const [minCustomers, setMinCustomers] = useState("");
  const [maxCustomers, setMaxCustomers] = useState("");
  const [avgCookies, setAvgCookies] = useState("");
  const [jsonString, setJsonString] = useState("");
  const [showReportText, setShowReportText] = useState(true); 

  function submitHandler(event) {
    event.preventDefault();

    const cookieStand = {
      location,
      minCustomers,
      maxCustomers,
      avgCookies,
    };

    setJsonString(JSON.stringify(cookieStand, null, 2));
    setShowReportText(false);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <header className="bg-green-500 p-4">
        <h1 className="text-3xl font-semibold text-white">Cookie Stand Admin</h1>
      </header>
      <main className="flex-grow p-12 flex flex-col items-center space-y-8">
        <form
          className="bg-green-400 p-8 rounded-lg w-full max-w-xlg"
          onSubmit={submitHandler}
        >
          <h2 className="text-xl font-semibold text-center text-black mb-4">
            Create Cookie Stand
          </h2>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <label className="font-semibold text-black mr-2" htmlFor="location">
                Location
              </label>
              <input
                className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500 text-black"
                type="text"
                id="location"
                name="location"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex-grow">
              <div className="flex items-center mb-2">
                <label className="font-semibold text-black mr-2" htmlFor="minCustomers">
                  Minimum Customers per Hour
                </label>
                <input
                  className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500 text-black"
                  type="number"
                  id="minCustomers"
                  name="minCustomers"
                  placeholder="Enter minimum customers"
                  value={minCustomers}
                  onChange={(e) => setMinCustomers(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center mb-2">
                <label className="font-semibold text-black mr-2" htmlFor="maxCustomers">
                  Maximum Customers per Hour
                </label>
                <input
                  className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500 text-black"
                  type="number"
                  id="maxCustomers"
                  name="maxCustomers"
                  placeholder="Enter maximum customers"
                  value={maxCustomers}
                  onChange={(e) => setMaxCustomers(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center mb-2">
                <label className="font-semibold text-black mr-2" htmlFor="avgCookies">
                  Average Cookies per Sale
                </label>
                <input
                  className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500 text-black"
                  type="number"
                  id="avgCookies"
                  name="avgCookies"
                  placeholder="Enter average cookies"
                  value={avgCookies}
                  onChange={(e) => setAvgCookies(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-600 transition"
            type="submit"
          >
            Create
          </button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md shadow-md">
          {showReportText && (
            <p className="text-blue-900">Report Table Coming Soon...</p>
          )}
          <code className="block text-blue-900">{jsonString}</code>
        </div>


      </main>
      <footer className="bg-green-500 p-4">
        <p className="text-white text-center">&copy; 2023 </p>
      </footer>
    </div>
  );
}



