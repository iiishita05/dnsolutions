import React from 'react';

const T20players = ["Rohit", "Gill", "Virat"];
const RanjiTrophyPlayers = ["Pujara", "Rahane", "Shreyas"];
const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

const IndianPlayers = () => {
  const [a, b, c, d, e, f] = mergedPlayers;
  const oddPlayers = [a, c, e];
  const evenPlayers = [b, d, f];

  return (
    <div>
      <h2>Merged Indian Players</h2>
      <p>{mergedPlayers.join(", ")}</p>

      <h3>Odd Team Players</h3>
      <ul>
        {oddPlayers.map((player, i) => <li key={i}>{player}</li>)}
      </ul>

      <h3>Even Team Players</h3>
      <ul>
        {evenPlayers.map((player, i) => <li key={i}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
