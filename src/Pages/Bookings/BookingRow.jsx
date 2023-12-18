import React from 'react';

const BookingRow = ({booking,handleBookingConfirm,handleDelete}) => {
    const {date,serviceName,price,img,_id,status,}=booking;
  
    return (
     
        <tr>
        <th>
          <label>
          <button className="btn btn-circle" onClick={()=>handleDelete(_id)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
          <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src={img} />
          </div>
          </div>
          </div>
        </td>
        <td>
     {serviceName}
        </td>
        <td>{price}</td>
        <td>{date}</td>
        <th>
         {
          status === 'confirm' ? <span className='font-bold text-xl text-green-600'>confirm</span>:
          <button className="btn btn-ghost btn-xs" onClick={()=>handleBookingConfirm(_id)}>please confirm</button>
         }
        </th>
      </tr>
     
    );
};

export default BookingRow;