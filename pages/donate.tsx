export default function Donate() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Donate</h2>
      <p className="max-w-xl text-gray-700 mb-4">
        Your donation fills more than a plate. It fills a child with dignity, hope, and confidence.
      </p>
      <iframe
        src="https://secure.cardknox.com/allkidzeat"
        className="w-full max-w-xl h-[600px] border border-gray-200 rounded-md"
        frameBorder="0"
        title="AllKidzEat Donation Form"
        allowFullScreen
      ></iframe>
    </main>
  );
}