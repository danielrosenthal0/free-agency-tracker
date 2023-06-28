import ListItem from "./ListItem";

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Position</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
