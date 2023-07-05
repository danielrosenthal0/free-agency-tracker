import teamLogoMap from "./TeamLogoMap";
import classes from "./TeamCircle.module.css";

const TeamCircle = (props) => {
  const teamLogos = Object.entries(teamLogoMap);

  return (
    <div className={classes.teamCircle}>
      {teamLogos.map(([teamReference, teamLogo]) => (
        <img
          key={teamReference}
          src={teamLogo}
          alt={teamReference}
          className={classes.teamLogo}
        />
      ))}
    </div>
  );
};

export default TeamCircle;