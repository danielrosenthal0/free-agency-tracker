import { useEffect, useState } from "react";

const useTimeFormatter = (time) => {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const formatTime = () => {
      const now = new Date();
      const updatedTime = new Date(time);
      const timeDiff = now - updatedTime;
      const minutes = Math.floor(timeDiff / 1000 / 60);
      const hours = Math.floor(timeDiff / 1000 / 60 / 60);
      const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

      if (minutes === 1) {
        setFormattedTime(`${minutes} minute ago`);
      } else if (minutes < 60) {
        setFormattedTime(`${minutes} minutes ago`);
      } else if (hours === 1) {
        setFormattedTime(`${hours} hour ago`);
      } else if (hours < 24) {
        setFormattedTime(`${hours} hours ago`);
      } else if (days === 1) {
        setFormattedTime(`${days} day ago`);
      } else {
        setFormattedTime(`${days} days ago`);
      }
    };

    formatTime();
  }, [time]);

  return formattedTime;
};

export default useTimeFormatter;
