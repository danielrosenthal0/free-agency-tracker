const ListItem = ({ item }) => {
    return (
      <tr>
        <td>{item.playerName}</td>
        <td>{item.position}</td>
        <td>{item.team}</td>
        {/* Render more table cells with item data */}
      </tr>
    );
  };
  
  export default ListItem;