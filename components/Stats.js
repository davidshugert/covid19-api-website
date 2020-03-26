import useStats from "../utils/useStats";
import styled from "styled-components";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const StatBlock = styled.div`
  background: #e4e4e4;
  font-size: 2em;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  @media (max-width: 768px) {
    padding:1em;
    font-size:1.5em;
    margin-bottom:1em;
  }
`;

export default ({ url }) => {
  const { stats, loading, error } = useStats(url);
  if (loading) return <p>Loading Countries...</p>;
  if (error) return <p>Error please refresh</p>;
  return (
    <StatGrid>
      <StatBlock>
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </StatBlock>
      <StatBlock>
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
      </StatBlock>
      <StatBlock>
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </StatBlock>
    </StatGrid>
  );
};
