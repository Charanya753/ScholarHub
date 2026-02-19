import Link from "next/link";

export default function ScholarshipCard({
  title,
  country,
  degree,
  status,
}: {
  title: string;
  country: string;
  degree: string;
  status: string;
}) {
  return (
    <div className="bg-zinc-900 p-5 rounded-xl shadow hover:scale-105 transition">
      <h2 className="text-xl font-semibold text-blue-400">{title}</h2>

      <p className="text-sm mt-2">Country: {country}</p>
      <p className="text-sm">Degree: {degree}</p>

      <span
        className={`inline-block mt-3 px-3 py-1 rounded text-sm ${
          status === "open" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {status}
      </span>

      <Link href={`/scholarships/${title}`}>
        <button className="block mt-4 w-full bg-blue-600 py-2 rounded hover:bg-blue-700">
          View Details
        </button>
      </Link>
    </div>
  );
}
