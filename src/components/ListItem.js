const ListItem = ({ player }) => {
    return (
      <tr>
        <td>{player.full_name}</td>
        <td>{player.position}</td>
        {/* <td>{player.team}</td> */}
        
      </tr>
    );
  };
  
  export default ListItem;