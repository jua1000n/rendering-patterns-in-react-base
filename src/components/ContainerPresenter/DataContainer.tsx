import { useEffect, useState } from "react";
import { DataItem, DataPresenter } from "./DataPresenter";

export const DataContainer = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(`Error al cargar los datos: ${error}`);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <DataPresenter data={data} />
    </div>
  );
};
