import React from 'react';

const players = [
  { name: "Rohit", score: 85 },
  { name: "Virat", score: 92 },
  { name: "Dhoni", score: 78 },
  { name: "Hardik", score: 65 },
  { name: "Jadeja", score: 69 },
  { name: "Bumrah", score: 48 },
  { name: "Pant", score: 73 },
  { name: "Gill", score: 55 },
  { name: "Rahul", score: 88 },
  { name: "Ashwin", score: 60 },
  { name: "Surya", score: 95 }
];

const ListOfPlayers = () => {
  const belowSeventy = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {belowSeventy.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
