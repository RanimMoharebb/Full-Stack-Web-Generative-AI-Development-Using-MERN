import { useEffect, useState } from "react";
import api from "../api/axios";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");

  const fetch = async () => {
    const res = await api.get("/projects");
    setProjects(res.data.projects);
  };

  useEffect(() => {
    fetch();
  }, []);

  const create = async () => {
    await api.post("/projects", { name });
    setName("");
    fetch();
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      {/* CREATE */}
      <div className="flex gap-2 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Project name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <Button onClick={create}>Create</Button>
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {projects.map((p) => (
          <Card key={p.id}>
            <h2 className="font-bold">{p.name}</h2>

            <p className="text-xs text-gray-400 break-all mt-2">
              {p.apiKey}
            </p>
          </Card>
        ))}
      </div>
    </Layout>
  );
}

export default Projects;