import React, { useEffect, useState } from "react";
import { populationApi } from "../axios";
import LineChart from "./LineChart";

function Population() {
  const [result, setResult] = useState();
  const [error, setError] = useState(null);

  const data = {
    labels: result?.data.map((data) => data.Year),
    datasets: [
      {
        label: "US Population",
        data: result?.data.map((item) => item.Population),
        borderColor: "#2AB42A",
        backgroundColor: "#2AB42A",
      },
    ],
  };

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        const response = await populationApi.get();
        setResult(response.data);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return (
    <div className="text-white mx-4 my-8">
      <h1 className="text-3xl font-semibold">Population</h1>
      <LineChart className="mt-8" data={data} />
    </div>
  );
}

export default Population;
