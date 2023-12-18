import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Bookservices = () => {
    const service=useLoaderData();
    const {user}=useContext(AuthContext)
   const {_id,title,price,img}=service;
    const handleBookingService=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const date=form.date.value;
        const email=user?.email;
        
        const price=form.price.value;
        const order={
            customerName:name,
            email,
            date,
            img,
            price,
            serviceName:title,
            service:_id
        }
        fetch(`http://localhost:8000/bookings`,{
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(order)
        })
       .then(res => res.json())

       .then(data=>console.log(data))

    }
    return (
        
            <div className="hero min-h-screen bg-base-200 my-10">

   <h3 className="text-center text-3xl font-bold">Booking Service:{title}</h3>
    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleBookingService}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-5xl mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="Date"  name="date" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Amount</span>
          </label>
          <input type="text" placeholder="text" name="price" defaultValue={'$'+price} className="input input-bordered" required />
        
        </div>
        <div className="form-control my-10 col-span-2 md:max-w-2xl">
          <input type="submit"  className="btn btn-accent" value={"Order Confirm"}/>
        </div>
        </div>
      </form>

  </div>
</div>
       
    );
};

export default Bookservices;