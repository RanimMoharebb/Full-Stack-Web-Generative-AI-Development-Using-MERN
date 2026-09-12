import { useEffect, useState } from "react";
import api from "../api/axios";
import Layout from "../components/Layout";
import Card from "../components/Card";

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.get("/logs").then((res) => {
      setLogs(res.data.logs);
    });
  }, []);

  const badge = (level) => {
    const base =
      "px-2 py-1 rounded-full text-xs font-medium";

    if (level === "error")
      return `${base} bg-red-100 text-red-600`;

    if (level === "warning")
      return `${base} bg-yellow-100 text-yellow-700`;

    return `${base} bg-blue-100 text-blue-600`;
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Logs</h1>

      <div className="space-y-3">
        {logs.map((log) => (
          <Card key={log.id}>
            <div className="flex justify-between">
              <span className={badge(log.level)}>
                {log.level}
              </span>

              <span className="text-xs text-gray-500">
                {new Date(log.createdAt).toLocaleString()}
              </span>
            </div>

            <p className="mt-3">{log.message}</p>

            <p className="text-xs text-gray-500 mt-2">
              {log.source}
            </p>
          </Card>
        ))}
      </div>
    </Layout>
  );
}

export default Logs;