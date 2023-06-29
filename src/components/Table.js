import ListItem from "./ListItem";

const Table = ({ freeAgents }) => {
  const freeAgentsArray = Object.values(freeAgents);

  const players = freeAgentsArray[1];

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

              {/* <th>Team</th> */}
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
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
