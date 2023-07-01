import { useState } from "react";

const DateDropdown = ({onSelectDate}) => {
    const [selectedDate, setSelectedDate] = useState("");
    const currentDate = new Date();

    const handleDateChange = (event) => {
        const date = event.target.value;
        setSelectedDate(date);
        onSelectDate(date);
    }

    const dateOptions = Array.from({length: 7}, (_,i) => {
        const date = new Date();
        date.setDate(currentDate.getDate() - i);
        return date.toISOString().split("T")[0];
    })

    return (
        <div>
            <label htmlFor="dateDropdown">Select Date:</label>
            <select id='dateDropdown' value={selectedDate} onChange={handleDateChange}>
                <option value="">-- Select a date --</option>
                {dateOptions.map((date) => (
                    <option key={date} value={date}>{date}</option>
                ))}
                {/* <option value="2023-06-30">June 30, 2023</option> */}
            </select>
        </div>
    )
}

export default DateDropdown;