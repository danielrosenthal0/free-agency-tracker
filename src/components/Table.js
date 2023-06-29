import ListItem from "./ListItem";

const Table = ({ freeAgents }) => {
  // console.log(typeof freeAgents);
  const freeAgentsArray = Object.values(freeAgents);
  console.log(freeAgentsArray);
  const players = freeAgentsArray[1];
  console.log(players);
  return (
    <>
      {/* {freeAgents ? JSON.stringify(freeAgents) : "Loading..."} */}
      {players ? <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Position</th>
            {/* <th>Team</th> */}
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <ListItem
              key={player.id}
              player={player}
            //   postion={player.postion}
            />
          ))}
        </tbody>
      </table> : 'Loading...'}
      
    </>
  );
};

export default Table;
