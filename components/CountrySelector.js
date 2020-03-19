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
  height: 3rem;
  width: 4em;
  font-size: 2rem;
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CountriesOptions = styled.option``;
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
          {Object.entries(countries.countries).map(([country, countryCode]) => {
            return (
              <CountriesOptions
                key={countryCode}
                value={countries.iso3[countryCode]}
                selected={selectedCountry === countries.iso3[countryCode]}
              >
                {country}
              </CountriesOptions>
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
