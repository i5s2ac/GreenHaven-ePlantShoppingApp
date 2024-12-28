import React from "react";
import "../src/AboutUs.css";
import { useNavigate } from 'react-router-dom';

function AboutUs() {

    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/products');
      };


    return (
        <div className="container-about-us">
            
            <h1 className="title-about-us">¡Welcome to Green Haven!</h1>
            <p className="description-about-us">We cultivate beauty, we create gardens.</p>
            <p className="content-about-us">Green Haven is a company specialized in the production and sale of flowers and ornamental plants. As a nursery, it is dedicated to cultivating a wide variety of floral species, offering high-quality products for both indoor decoration and outdoor gardening. Its focus is on providing fresh and healthy flowers, with a commitment to sustainability and environmental care. Green Haven also offers advice to its customers on plant care and maintenance, always aiming to meet the needs of gardeners and plant enthusiasts.</p>
            <button className="get-started-botton" onClick={handleGetStarted}>Get Started</button>

        </div>

    )

}

export default AboutUs;