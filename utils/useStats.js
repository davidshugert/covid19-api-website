import { useState, useEffect } from "react";

export default url => {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError();
      const data = await fetch(url)
        .then(res => res.json())
        .catch(e => {
          setError(e);
        });
      setStats(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return { stats, loading, error };
};
