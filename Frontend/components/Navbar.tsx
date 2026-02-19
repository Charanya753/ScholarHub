import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <h1 className="text-xl font-bold text-blue-500">ScholarHub</h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/scholarships">Scholarships</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
