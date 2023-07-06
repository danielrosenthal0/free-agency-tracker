const ListItem = ({ player }) => {
    return (
      <tr>
        <td>{player.full_name}</td>
        <td>{player.position}</td>
        <td>{player.experience}</td>
        <td>{player.updated}</td>
        
      </tr>
    );
  };
  
  export default ListItem;