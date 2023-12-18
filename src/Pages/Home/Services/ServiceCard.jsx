import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,title,img,price}=service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body items-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-orange-500">price:${price}</p>
          <div className="card-actions">
          <Link to={`/booking/${_id}`}>
          <button className="btn btn-primary">Book Now</button>
          </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;