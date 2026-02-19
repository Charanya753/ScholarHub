export default function ScholarshipDetails({ params }: { params: { slug: string } }) {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">Scholarship Details</h1>

      <p className="text-lg">You opened scholarship ID: {params.slug}</p>

      <div className="mt-6 bg-zinc-900 p-6 rounded-xl">
        <h2 className="text-xl font-semibold text-blue-400">Sample Scholarship</h2>
        <p className="mt-3">Eligibility: BTech students in India</p>
        <p>Deadline: 30 March 2026</p>

        <button className="mt-6 bg-green-600 px-6 py-2 rounded hover:bg-green-700">
          Apply Now
        </button>
      </div>
    </main>
  );
}
