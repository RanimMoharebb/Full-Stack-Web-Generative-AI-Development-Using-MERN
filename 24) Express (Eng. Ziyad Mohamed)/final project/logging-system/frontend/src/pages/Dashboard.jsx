import { useEffect, useState } from "react";
import api from "../api/axios";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((res) => {
      setProjects(res.data.projects);
    });
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <p className="text-gray-500">Projects</p>
          <p className="text-2xl font-bold">{projects.length}</p>
        </Card>

        <Card>
          <p className="text-gray-500">Status</p>
          <p className="text-green-600 font-bold">Active</p>
        </Card>

        <Card>
          <p className="text-gray-500">System</p>
          <p className="text-blue-600 font-bold">Healthy</p>
        </Card>
      </div>

      {/* PROJECT LIST */}
      <div className="space-y-3">
        {projects.map((p) => (
          <Card key={p.id}>
            <h2 className="text-lg font-bold">{p.name}</h2>

            <p className="text-xs text-gray-400 break-all mt-2">
              {p.apiKey}
            </p>

            <div className="mt-3">
              <Button
                onClick={() => navigator.clipboard.writeText(p.apiKey)}
              >
                Copy API Key
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}

export default Dashboard;