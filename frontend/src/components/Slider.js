import { useState } from "react";

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    // Calculate the date based on the slider value and update the selected date
    // You may need to implement your own logic here based on your available date range
    // const currentDate = new Date();
    // const selectedDate = // Calculate the selected date based on the slider value and currentDate
    // setSelectedDate(selectedDate);
  };

  return (
    <div>
      <p>Older transactions</p>
      <input
        type="range"
        min={0} // Set the minimum value of the slider
        max={100} // Set the maximum value of the slider
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Newer transactions</p>
    </div>
  );
};

export default Slider;
