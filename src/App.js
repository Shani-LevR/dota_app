import "./App.css";
import { useEffect, useState } from "react";
import { fetchHeroes } from "./api/fetchData";
import { createTeams } from "./api/util";
import HerosTeam from "./components/HerosTeam";

function App() {
  const [players, setPlayers] = useState([]);
  const [teamDire, setTeamDire] = useState([]);
  const [teamRadiant, setTeamRadiant] = useState([]);

  const getHeros = async () => {
    const heroes = await fetchHeroes();
    setPlayers(heroes);
  };

  // Fetch data from API
  useEffect(() => {
    getHeros();
  }, []);

  // Select heroes for the match
  useEffect(() => {
    if (players.length > 0) {
      console.log(players);
      const [dire, radiant] = createTeams(players);
      setTeamDire(dire);
      setTeamRadiant(radiant);
    }
  }, [players]);

  // Render "No data" while fetch is not finished, condition could be replaced by a 'isLoading' state
  return (
    <div className="App">
      <h1 className="match__title">Match</h1>
      <div className="match__teams">
        {teamDire.length && teamRadiant.length ? (
          <>
            <HerosTeam team={teamDire} title="The Dire" />
            <HerosTeam team={teamRadiant} title="The Radiant" />
          </>
        ) : (
          <p>No data...</p>
        )}
      </div>
    </div>
  );
}

export default App;
