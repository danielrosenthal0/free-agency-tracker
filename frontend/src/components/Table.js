import ListItem from "./ListItem";

const Table = ({ freeAgents , first, last}) => {

    
  const freeAgentsArray = Object.values(freeAgents);
  const players = Array.isArray(freeAgentsArray[1]) ? freeAgentsArray[1] : [];
  console.log(players);
  const sortedPlayers = [...players].sort((a, b) => {
    const dateA = new Date(a.updated);
    const dateB = new Date(b.updated);
    return dateB - dateA;
  }).filter((player) => {
    const year = new Date(player.updated).getFullYear();
    return year === 2022 || year === 2023
  });

  const playersToShow = sortedPlayers.slice(first, last);

  return (
    <>
      {players ? (
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Experience</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {playersToShow.map((player) => (
              <ListItem
                key={player.id}
                player={player}
                updated={player.updated}
                experience={player.experience}
              />
            ))}
          </tbody>
        </table>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Table;
