import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import BookingForm from './BookingForm';
import Hairstyle from '../Assets/Hairstyle.jpeg';
// import makeup from './makeup';
// import photography from './photography';
// import shoemaking from './shoemaking';
// import webdeveloper from './webdeveloper';

function LandingPage() {

    const [showBookingForm, setShowBookingForm] = useState(false);

    const navigate = useNavigate();

    const handleBookAppointment = () => {
        setShowBookingForm(true);
        navigate('/booking-form');
      };
    
  return (
    <div>
        <div className="landing-page">
            {showBookingForm ? (
                <BookingForm />
            ) : (
            <div>
            <h1 className="intro-message">
                Welcome to <span className='estie'>Estie</span> <span className='span'>Hub!</span>
            </h1>
            <div className="intro">
                <p>
                Our platform provides a convenient and efficient way to book various services from local businesses.
                Whether you need a salon appointment, a handyman service, or a professional photographer, our web application
                connects you with trusted service providers in your area.
                </p>
            </div>
            <button 
                onClick={handleBookAppointment} 
                type='button' 
                className='btn'>
                Book an Appointment
            </button> 
            </div>
            )}
        </div>

        <div className='what-we-do'>
            <h2>What We Do</h2>
            <p>At Estie Hub, we are dedicated to providing an exceptional booking experience for a wide range of services. Our platform connects users with trusted service providers in various industries, ensuring that you have access to quality services right at your fingertips.</p>
        </div>

        <div className='what-we-do'>
            <h2>Our Services Includes:</h2>
        </div>

        <div className="landing-page-content">
            <div className=''>
                <img src={Hairstyle} alt="Hairstyles" />
                <h2>Hair Styling</h2>
                <p>Get a fresh haircut, hair coloring, or styling from professional hairstylists. Choose from a variety of trendy hairstyles and transform your look.</p>
            </div>

            <div className=''>
                {/* <img src={photography} alt="Photography" /> */}
                <h2>Event Photography</h2>
                <p>Capture special moments and memories with professional event photography services. Skilled photographers will document your events, whether it's a wedding, birthday party, or corporate gathering, to create lasting keepsakes.</p>
            </div>

            <div className=''>
                {/* <img src={makeup} alt="Makeup" /> */}
                <h2>Makeup Artistry</h2>
                <p>Enhance your natural beauty with expert makeup artistry services. From elegant bridal makeup to glamorous evening looks, professional makeup artists will create the perfect makeup style for any occasion.</p>
            </div>

            <div className=''>
                {/* <img src={webdeveloper} alt="Web Developer" /> */}
                <h2>Web Development</h2>
                <p>Build and launch your dream website with professional web development services. Experienced web developers will work closely with you to create a custom website that showcases your brand and meets your specific needs.</p>
            </div>

            <div className=''>
                {/* <img src={shoemaking} alt="Shoe Making" /> */}
                <h2>Shoe Making</h2>
                <p>Step into customized footwear with expert shoe making services. Skilled artisans will craft bespoke shoes tailored to your style and preferences. Whether you desire elegant dress shoes, comfortable sneakers, or unique designs, experience the artistry of handmade shoes.</p>
            </div>
        </div>

        <div className='what-we-do'>
            <h2>About Our Services</h2>
            <p>We are committed to revolutionizing the way services are booked. We aim to simplify your life by providing a convenient, reliable, and efficient platform for all your service needs.</p>
        </div>

        <div className='landing-page-content'>
            <div className=''>
                <h2>Convenience and Efficiency</h2>
                <p>We understand the value of your time and strive to make the booking process as seamless as possible. With our user-friendly interface, you can easily browse through a diverse selection of services and find the perfect match for your needs. Our efficient system allows you to view available time slots, compare options, and secure bookings with just a few clicks.</p>
            </div>

            <div className=''>
                <h2>Trusted Service Providers</h2>
                <p>We have curated a network of trusted service providers who are experts in their respective fields. Each service provider goes through a thorough verification process to ensure that they meet our high standards of professionalism, reliability, and quality. You can have peace of mind knowing that you are booking services from trusted professionals who have a proven track record.</p>
            </div>

            <div className=''>
                <h2>Wide Range of Services</h2>
                <p>Our platform offers a comprehensive range of services to cater to various needs and preferences. From beauty and wellness services such as hairstyling, massage therapy, and makeup artistry, to practical services like home cleaning and handyman assistance, we have you covered. We also provide specialized services like event photography, web development, and custom shoe making. Whatever service you require, you can find it on our platform.</p>
            </div>

            <div className=''>
                <h2>Personalization and Customization</h2>
                <p>We understand that each individual has unique preferences and requirements. That's why we prioritize personalization and customization in our services. Whether it's selecting the perfect hairstyle, specifying dietary preferences for food sales, or designing a tailor-made website, our service providers will work closely with you to ensure that your needs and expectations are met.</p>
            </div>

            <div className=''>
                <h2>Quality and Satisfaction Guaranteed</h2>
                <p>Customer satisfaction is at the core of our mission. We strive to deliver services of the highest quality, ensuring that you have a positive and fulfilling experience. We encourage users to provide feedback and reviews, which helps us maintain the quality of our service providers and continuously improve our platform.</p>
            </div>
        </div>

        <div className='what-we-do'>
            <h2>For Service Providers</h2>
            <p>We offer service providers the opportunity to showcase their expertise and get booked for appointments through our platform.</p>
        </div>

        <div className='landing-page-content'>
            <div className=''>
                <h2>Showcase Your Services</h2>
                <p>As a service provider, you have the chance to showcase your skills, experience, and the services you offer. Create a detailed profile that highlights your expertise, certifications, and any unique selling points that set you apart from the competition. Use our platform to effectively market your services and reach a wider audience.</p>
            </div>

            <div className=''>
                <h2>Attract Potential Clients</h2>
                <p>By listing your services on our platform, you open the door to a larger client base. Users can easily browse through the available services and discover your offerings. Showcase your work, provide descriptions, and share any additional information that will help potential clients understand the value you can provide.</p>
            </div>

            <div className=''>
                <h2>Manage Your Schedule</h2>
                <p>Our platform allows you to have full control over your availability. Set your working hours, define the time slots you're available for appointments, and manage your schedule effortlessly. This flexibility ensures that you can efficiently manage your workload and avoid any scheduling conflicts.</p>
            </div>

            <div className=''>
                <h2>Receive Bookings and Appointments</h2>
                <p>Once your services are listed on our platform, users can book appointments directly through our booking system. You'll receive notifications and updates for new bookings, allowing you to stay organized and plan your day effectively. Our platform streamlines the booking process, making it convenient for both you and your clients.</p>
            </div>

            <div className=''>
                <h2>Build Trust and Credibility</h2>
                <p>Being a part of our platform adds credibility to your services. Our rigorous verification process ensures that only reputable service providers are featured. Clients can read reviews and ratings from other users, building trust and confidence in your expertise. By delivering high-quality services and receiving positive feedback, you can enhance your reputation and attract more clients.</p>
            </div>
        </div>
    </div>

    
  );
}

export default LandingPage;
