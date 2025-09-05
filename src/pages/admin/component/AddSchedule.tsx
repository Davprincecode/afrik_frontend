import React, { useState } from 'react'
import { userAuth } from '../../context/AuthContext';
import ButtonPreloader from '../../../component/ButtonPreloader';
import { toast } from 'react-toastify';

function AddSchedule() {
    const [loading, setLoading] =  useState<boolean>(false);
    const {baseUrl, token} = userAuth();

    const [title, setTitle] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');
    const [recurrence, setRecurrence] = useState<string>('none');
    const [recurrenceDayOfMonth, setRecurrenceDayOfMonth] = useState<number | ''>('');
    const [recurrenceWeekNumber, setRecurrenceWeekNumber] = useState<number | ''>('');
    const [recurrenceWeekday, setRecurrenceWeekday] = useState<string>('');

const handleProduct =  async() => {
      setLoading(true);

      const formdata = new FormData();
            
            formdata.append("title",  title);
            formdata.append("startDate",  startDate);
            formdata.append("endDate",   endDate);
            formdata.append("startTime",  startTime);
            formdata.append("endTime",  endTime);
            formdata.append("recurrence",  recurrence);
            formdata.append("recurrenceDayOfMonth",  recurrenceDayOfMonth.toString());
            formdata.append("recurrenceWeekNumber",  recurrenceWeekNumber.toString());
            formdata.append("recurrenceWeekday",  recurrenceWeekday)
            


          const myHeaders = new Headers();
          myHeaders.append("Authorization", token);
          const requestOptions: RequestInit = {
              method: "POST",
              headers: myHeaders,
              body: formdata,
              redirect: "follow"
          };
          try {
              const response = await fetch(`${baseUrl}/booking`, requestOptions);
             
              if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json();  
              
             setTitle('');
             setStartDate('');
             setEndDate('');
             setStartTime('');
             setEndTime('');
            setRecurrence('none');
            setRecurrenceDayOfMonth('');
            setRecurrenceWeekNumber('');
            setRecurrenceWeekday('');

              setLoading(false); 
            
              toast.success(result.message);       
          } catch (error) {
              setLoading(false); 
          }
        
    }

  return (
    <div className='course-container'>

         <h2 className='add-product-title'>Add Schedule</h2>

           <div className="product-form-top flex justification-between">
                    <div className="admin-prd-form">
                        <div className="admin-prod-title">Information</div>

<div className="admin-input">
  <label>Title</label>
  <input
    name="title"
    type="text"
    placeholder="Enter Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
</div>

<div className="admin-input">
  <label>Start Date</label>
  <input
    name="startDate"
    type="date"
    value={startDate}
    onChange={(e) => setStartDate(e.target.value)}
  />
</div>

<div className="admin-input">
  <label>End Date</label>
  <input
    name="endDate"
    type="date"
    value={endDate}
    onChange={(e) => setEndDate(e.target.value)}
  />
</div>

<div className="admin-input">
  <label>Start Time</label>
  <input
    name="startTime"
    type="time"
    value={startTime}
    onChange={(e) => setStartTime(e.target.value)}
  />
</div>

<div className="admin-input">
  <label>End Time</label>
  <input
    name="endTime"
    type="time"
    value={endTime}
    onChange={(e) => setEndTime(e.target.value)}
  />
</div>

<div className="admin-input">
  <label>Recurrence</label>
  <select
    name="recurrence"
    value={recurrence}
    onChange={(e) => setRecurrence(e.target.value)}
  >
    <option value="none">None</option>
    <option value="daily">Daily</option>
    <option value="weekly">Weekly</option>
    <option value="biweekly">Biweekly</option>
    <option value="monthly">Monthly</option>
    <option value="yearly">Yearly</option>
  </select>
</div>

<div className="admin-input">
  <label>Day of Month</label>
  <input
    name="recurrenceDayOfMonth"
    type="number"
    min="1"
    max="31"
    placeholder="Enter day of month"
    value={recurrenceDayOfMonth}
    onChange={(e) => setRecurrenceDayOfMonth(e.target.value === '' ? '' : parseInt(e.target.value))}
  />
</div>

<div className="admin-input">
  <label>Week Number</label>
  <input
    name="recurrenceWeekNumber"
    type="number"
    min="1"
    max="5"
    placeholder="Enter week number"
    value={recurrenceWeekNumber}
    onChange={(e) => setRecurrenceWeekNumber(e.target.value === '' ? '' : parseInt(e.target.value))}
  />
</div>

<div className="admin-input">
  <label>Weekday</label>
  <select
    name="recurrenceWeekday"
    value={recurrenceWeekday}
    onChange={(e) => setRecurrenceWeekday(e.target.value)}
  >
    <option value="">Select weekday</option>
    <option value="Monday">Monday</option>
    <option value="Tuesday">Tuesday</option>
    <option value="Wednesday">Wednesday</option>
    <option value="Thursday">Thursday</option>
    <option value="Friday">Friday</option>
    <option value="Saturday">Saturday</option>
    <option value="Sunday">Sunday</option>
  </select>
</div>

 {
            loading ? (
                <div className="admin-input">
                    <div className='inActive'><ButtonPreloader/></div>
                </div>
            ) : (
              title !== '' &&  startDate !== '' && 
            endDate !== '' && 
            startTime !== '' && 
            endTime !== '' && 
            recurrence !== '' && 
           recurrenceDayOfMonth !== '' && 
           recurrenceWeekNumber !== '' && 
            recurrenceWeekday  ? (
                            <div className="admin-input">
                              <div className="btn" onClick={handleProduct}>Submit</div>
                            </div> 
              ) : (
                      <div className="admin-input inActive">
                        <div className="btn inActive">Submit</div>
                      </div> 
              )
          
        )}

 </div>
            </div>
    </div>
  )
}

export default AddSchedule