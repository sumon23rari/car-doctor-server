import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen py-16 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
        <div className='relative lg:w-1/2'>
        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
        <img src={parts} className="w-1/2 absolute right-[80px] rounded-lg border-8 shadow-2xl border-white -bottom-10 rounded-lg shadow-2xl" />
        </div>
         
          <div className='lg:w-1/2 space-y-5 p-4'>
            <h1 className="text-3xl font-bold text-3xl text-orange-500">About Us</h1>
          <h3 className='text 5xl font-bold'>We are qualified & of experience in this field</h3>
          <p className='py-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
          <p className='py-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      
            <button className="btn bg-[#FF3811] rounded font-bold text-white">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;