import { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Your data has loaded ..." });
    }, 2000);

    return () => {};
  }, []);

  if (!data) {
    return <p>Loading data ....</p>;
  }

  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
};

export default DataFetcher;
