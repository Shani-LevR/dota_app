import React from "react";
import Hero from "./Hero";
import "./HerosTeam.css";

function HerosTeam({ team, title }) {
  return (
    <div className="heroesteam__container">
      <h1 className="heroesteam__title">{title}</h1>
      <div className="heroesteam__team">
        {team.map((hero, index) => (
          <Hero key={index} img={hero.image} name={hero.name} />
        ))}
      </div>
    </div>
  );
}

export default HerosTeam;
