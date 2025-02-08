"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Application {
  _id: string;
  fullName: string;
  address: string;
  email: string;
  phone: string;
  occupation: string;
  expectedAmount: number;
  businessIdea: string;
}

export default function ApplicationsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/");
  }, [session, status, router]);

  useEffect(() => {
    if (!session) return;

    async function fetchApplications() {
      try {
        const response = await fetch("/api/applications");
        if (!response.ok) throw new Error("Failed to fetch applications");

        const data = await response.json();
        setApplications(data.data);
      } catch (error) {
        setError("Error fetching applications");
      } finally {
        setLoading(false);
      }
    }

    fetchApplications();
  }, [session]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Submitted Applications</h1>

      {loading && <p>Loading applications...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && applications.length === 0 && <p>No applications found.</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {applications.map((app) => (
          <div key={app._id} className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-semibold">Name: {app.fullName}</h2>
            <p><strong>Address:</strong> {app.address}</p>
            <p><strong>Email:</strong> {app.email}</p>
            <p><strong>Phone:</strong> {app.phone}</p>
            <p><strong>Occupation:</strong> {app.occupation}</p>
            <p><strong>Expected Amount:</strong> ${app.expectedAmount.toLocaleString()}</p>
            <p><strong>Business Idea:</strong> {app.businessIdea}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
