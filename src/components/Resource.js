
import React from 'react';

import '../styles/Resource.css'; // Custom CSS for additional styles
import 'bootstrap-icons/font/bootstrap-icons.css';
const Resource = () => {
  return (
    <div className="container py-5">
      <div className=" mb-4">
        <h3 className="fw-bold">The best in the country <span className="text-danger">trust us</span></h3>
      </div>

      <div className="row mb-4">
        <div className="col-md-3 col-6">
          <h2 className="text-warning">30</h2>
          <p>Top Institutions</p>
        </div>
        <div className="col-md-3 col-6">
          <h2 className="text-success">13</h2>
          <p>in A/A+/A++ Tier</p>
        </div>
        <div className="col-md-3 col-6">
          <h2 className="text-warning">3000</h2>
          <p>Faculty Connect</p>
        </div>
        <div className="col-md-3 col-6">
          <h2 className="text-success">90,000</h2>
          <p>Students Benefited</p>
        </div>
      </div>
      <hr/>

      <div className="marquee-section">
        <div className="marquee"> 
        <span>
        <i class="bi bi-house-door"></i>
          | IIT Delhi
        </span>
        <span>
        <i class="bi bi-house-door"></i>
          | IIT Patna 
        </span>
        <span>
        <i class="bi bi-house-door"></i>
         | IIT Kanpur 
        </span>
        <span>
        <i class="bi bi-house-door"></i>
          | IIT Hyderabad 
        </span>
        <span>
        <i class="bi bi-house-door"></i>
          | Aims 
        </span>
        <span>
        <i class="bi bi-house-door"></i>
          | MIT
        </span>
        <span>
        <i class="bi bi-house-door"></i>
          | NIT Patna
        </span>
        </div>

        
      </div>
      <hr/>
      
    </div>
  );
};

export default Resource;
