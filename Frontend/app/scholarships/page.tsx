async function getScholarships() {
  const res = await fetch("http://127.0.0.1:8001/scholarships", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch scholarships");
  }

  return res.json();
}

export default async function ScholarshipsPage() {
  const scholarships = await getScholarships();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Scholarships</h1>

      {scholarships.length === 0 && (
        <p className="text-gray-400">No scholarships available</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {scholarships.map((s: any) => (
          <div key={s._id} className="bg-zinc-900 p-5 rounded-xl">
            <h2 className="text-xl font-semibold text-blue-400">
              {s.title}
            </h2>

            <p className="mt-2">Country: {s.country}</p>
            <p>Degree: {s.degree}</p>
            <p>Deadline: {s.deadline}</p>

            <a
              href={`/scholarships/${s._id}`}
              className="block mt-4 bg-blue-600 py-2 text-center rounded hover:bg-blue-700"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}