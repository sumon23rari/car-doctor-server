import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from 'axios';
//import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([]);
    //const axiosSecure=useAxiosSecure()
    const url=`http://localhost:8000/bookings?email=${user?.email}`;
    useEffect(()=>{
  axios.get(url, {withCredentials: true})
  .then(res => {
      setBookings(res.data);
  })
       },[url])
    const handleDelete=id=>{
      const proceed=confirm('Are you sure you want to be delete Item')
      if(proceed){
        fetch(`http://localhost:8000/bookings/${id}`,{
          method:"DELETE",
        })
        .then((res)=>res.json())
        .then((data)=>{
          if (data.deletedCount > 0) {
            alert('deleted successfully')
            const remaining=bookings.filter(book=>book._id!==id)
            setBookings(remaining)
          }
        })
      }
    }
    const handleBookingConfirm=id=>{
      const proceed=confirm('are you sure you want to be update')
      if(proceed){
      fetch(`http://localhost:8000/bookings/${id}`,{
        method:"PATCH",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({status:'confirm'})
      })
      .then((res)=>res.json())
      .then(data=>{
        console.log(data)
        if (data.modifiedCount>0) {
          const remaining=bookings.filter(booking=>booking._id !==id)
          const updated=bookings.find(book=>book._id===id)
          updated.status="confirm";
          const newBookings=[updated,...remaining]
          setBookings(newBookings)
        }
      })
      }
    }
    return (
        <div>
            <h3>Your bookings:{bookings.length}</h3>
            <div className="overflow-x-auto">
           
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
          checkbox
          </label>
        </th>
        <th>img</th>
        <th>serviceName</th>
        <th>price</th>
        <th>date</th>
        <th>details</th>
      </tr>
    </thead>
    <tbody>
{
    bookings.map(booking=><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>)
}
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default Bookings;