import React from 'react'
import { userAuth } from '../../context/AuthContext';
import AddSchedule from './AddSchedule';

function Schedule() {
     const {baseUrl, token} = userAuth();
  return (
    <div>
      

      <AddSchedule/>
    </div>
  )
}

export default Schedule