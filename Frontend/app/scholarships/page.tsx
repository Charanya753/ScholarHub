async function getScholarship(id: string) {
  const res = await fetch(`http://127.0.0.1:8000/scholarship/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function ScholarshipDetails({
  params,
}: {
  params: { slug: string };
}) {
  const scholarship = await getScholarship(params.slug);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">Scholarship Details</h1>

      <div className="mt-6 bg-zinc-900 p-6 rounded-xl">
        <h2 className="text-xl font-semibold text-blue-400">
          {scholarship.title}
        </h2>

        <p className="mt-3">Country: {scholarship.country}</p>
        <p>Degree: {scholarship.degree}</p>
        <p>Deadline: {scholarship.deadline}</p>

        <p className="mt-4 text-gray-300">{scholarship.description}</p>

        <button className="mt-6 bg-green-600 px-6 py-2 rounded hover:bg-green-700">
          Apply Now
        </button>
      </div>
    </main>
  );
}
