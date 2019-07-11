import React from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const DateForm = (props) => {

    return(
        <div>
            <strong>Enter Date:</strong> {''}
          <form>
              <input value={props.date} onChange={props.change} type='date'/>
          </form>

        </div>
    )
}

export default DateForm;