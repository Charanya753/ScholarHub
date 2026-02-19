import ScholarshipCard from "@/components/ScholarshipCard";

export default function Scholarships() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Available Scholarships</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <ScholarshipCard
          title="Tata Scholarship"
          country="India"
          degree="BTech"
          status="open"
        />

        <ScholarshipCard
          title="Google Generation Scholarship"
          country="Global"
          degree="UG/PG"
          status="closed"
        />

        <ScholarshipCard
          title="National Merit Scholarship"
          country="India"
          degree="UG"
          status="open"
        />
      </div>
    </main>
  );
}
