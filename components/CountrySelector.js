import useStats from "../utils/useStats";
import Stats from "./Stats";
import { useState } from "react";
import styled from "styled-components";
const url = `https://covid19.mathdro.id/api/countries`;

const SelectorContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 1em 0px 1em 0px;
  grid-auto-flow: row;
  width: auto;
  color: white;
`;
const Title = styled.h2`
  text-decoration: underline;
  font-size: 1.5em;
`;
const CountriesSelect = styled.select`
  height: 2rem;
  width: 10em;
  font-size: 1rem;
`;
export default () => {
  const { stats: countries, error, loading } = useStats(url);
  const [selectedCountry, setSelectedCountry] = useState("USA");
  if (loading) return <p>Loading Countries...</p>;
  if (error) return <p>Error please refresh</p>;

  return (
    <container>
      <SelectorContainer>
        <Title>Currently showing: {selectedCountry}</Title>
        <CountriesSelect
          onChange={e => {
            setSelectedCountry(e.target.value);
          }}
        >
          {countries.countries.map(({ name, iso2 }) => {
            return (
              <option
                key={iso2}
                value={iso2}
                selected={selectedCountry === iso2}
              >
                {name}
              </option>
            );
          })}
        </CountriesSelect>
      </SelectorContainer>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </container>
  );
};
