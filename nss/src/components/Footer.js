
import React from 'react'
import csvtu from "../Images/csvtulogo.jpg";


const Footer = () => {
    return (
      <div className="footer-container">
        <footer>
          <div>
            
            <img
              id="logo-footer"
              src={csvtu}
              alt="CSVTU-LOGO"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
            <p>Chattisgarh Swami Vivekanand technical university</p>
          </div>
          
        </footer>
      </div>
    );
}

export default Footer
