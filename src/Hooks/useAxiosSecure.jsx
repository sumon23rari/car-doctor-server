import axios from "axios";

const axiosSecure=axios.create({
    baseURL:https://car-doctor-serversd.vercel.app',
    withCredentials:true
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;