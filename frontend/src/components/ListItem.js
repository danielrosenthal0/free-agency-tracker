const ListItem = ({ player }) => {
  const updated = player.updated;
  const formatTime = (updated) => {
    const now = new Date();
    const updatedTime = new Date(updated);
    const timeDiff = now - updatedTime;
    const minutes = Math.floor(timeDiff / 1000 / 60);
    const hours = Math.floor(timeDiff / 1000 / 60 / 60);
    const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

    if (minutes === 1) {
      return `${minutes} minute ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours === 1) {
      return `${hours} hour ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days === 1) {
      return `${days} day ago`;
    } else {
      return `${days} days ago`;
    }
  }

  const timeToShow = formatTime(updated);
    return (
      <tr>
        <td>{player.full_name}</td>
        <td>{player.position}</td>
        <td>{player.experience}</td>
        <td>{timeToShow}</td>
        
      </tr>
    );
  };
  
  export default ListItem;