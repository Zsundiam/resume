import React from 'react';
import './resume.css';
const Resume = () => {
  return (
    <div className="resume-box">
      <div className="left-section">
        <div className="profile">
          <img src="https://introduction-lime-six.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpg&w=256&q=75" className="profile-img" alt="profile" />
          <div className="blue-box"></div>
        </div>

        <p className="n-p">Computer Engineer</p>

        <div className="info">
          <p className="heading">CONTACT</p>
          <p className="p1"><span className="span1"><img src="https://www.pikpng.com/pngl/b/105-1052624_location-address-icon-grey-png-clipart.png" alt="address icon" /></span>Address<br />C-2334 St. John </p>
          <p className="p1"><span className="span1"><img src="https://www.freestock.com/450/freestock_570366313.jpg" alt="phone icon" /></span>Phone<br />+0123-444-5555</p>
          <p className="p1"><span className="span1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLoT2Y1BeEvYHa9G0GFRLYLlyKh6bjEnY5Hw&usqp=CAU" alt="email icon" /></span>Email<br />zjmsundiam.student@ua.edu.ph</p>
        </div>

        <div className="info">
          <p className="heading">INTEREST</p>
          <p className="p1">- Watching movies</p>
          <p className="p1">- Playing badminton</p>
          <p className="p1">- Playing online games</p>
        </div>
      </div>

      <div className="right-section">
        <div className="right-heading">
          <p className="p2">ZENDRICK JOHN M. SUNDIAM</p>
        </div>
        <p className="p3">As a computer engineer, I've consistently marveled at the wonders of technology. My interests include engaging in online gaming, playing badminton, and watching movies. I chose to pursue computer engineering with the goal of delving deeper into the realm of technology and expanding my knowledge. In the next few years, I envision myself employed by a company, diligently acquiring new skills to remain dedicated to my passion.</p>

        <div className="clearfix"></div>
        <br /><br />
        <div className="right-heading">
          <p className="p2">Work Experience</p>
        </div>
        <div className="clearfix"></div>
        <div className="lr-box">
          <div className="left">
            <p className="p4">2027 - 2029</p>
            <p className="p5">Microsoft</p>
          </div>

          <div className="right">
            <p className="p4">Web Designer</p>
            <p className="p5">Designing the layout of a website and coding different design elements </p>
          </div>
          <div className="clearfix"></div>
        </div>

        {/* Repeat the above structure for other work experiences */}
        
        <br />
        <div className="right-heading">
          <img src="https://media.istockphoto.com/id/1316195221/vector/graduation-cap-and-education-diploma-vector-icon.jpg?s=612x612&w=0&k=20&c=PRQ2WYdKZEY5p5R1Kkbv1_1OTNSN8GoaXhins4WxO_U=" alt="graduation cap" />
          <p className="p2">ACADEMIC BACKGROUND</p>
        </div>
        <div className="clearfix"></div>
        <div className="lr-box">
          <div className="left">
            <p className="p4">2020 - 2022</p>
            <p className="p5">University of the Assumption</p>
          </div>

          <div className="right">
            <p className="p4">Senior High School</p>
          </div>
          <div className="clearfix"></div>
        </div>

        {/* Repeat the above structure for other academic backgrounds */}
        
        <br />
        <div className="right-heading">
          <img src="https://media.istockphoto.com/id/1255361351/vector/award-certificate-gray-icon-achievement-success.jpg?s=2048x2048&w=is&k=20&c=4pwSDHg4Hre-R8gkv7lvcf40A3uabeYziejdrHvd2CA=" alt="achievement icon" />
          <p className="p2">ACHIEVEMENTS</p>
        </div>
        <div className="clearfix"></div>
        <div className="s-box">
          <p className="p6">- Implemented an automated testing framework that reduced software defects by 30% and improved overall product quality (2033)</p>
          <p className="p6">- Developed and deployed a system optimization plan that reduced server response time by 40%, enhancing the user experience (2027)</p>
        </div>
        <div className="s-box">
          <p className="p6">- Reduced software bugs by 80% through the implementation of code reviews and strict adherence to coding standards (2029)</p>
          <p className="p6">- Increased application efficiency by 20% through the optimization of SQL queries and database indexing (2031)</p>
        </div>

        <div className="clearfix"></div>
        <br /><br />
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default Resume;