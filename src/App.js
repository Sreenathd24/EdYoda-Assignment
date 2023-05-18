import React from "react";
import logo from "./assets/LOGO.png";
// import iconClock from "./assets/Icon Clock.png";
import icon1 from "./assets/Icon-1.png";
import icon2 from "./assets/Icon-2.png";
import icon3 from "./assets/Icon-3.png";
import icon4 from "./assets/Icon-4.png";
import icon from "./assets/Icon.png";
import "./App.css";
import SubscriptionBox from "./subscription";

function App() {
  // const dropDown1 = (
  //   <select className="dropdown">
  //     <option>Course1</option>
  //     <option>Course1</option>
  //     <option>Course1</option>
  //   </select>
  // );
  // const dropDown2 = (
  //   <select className="dropdown">
  //     <option>Course1</option>
  //     <option>Course1</option>
  //     <option>Course1</option>
  //   </select>
  // );
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="Edyoda Logo" />
          </div>
          <div className="dropdown" id="dropbtn1">
            <button className="dropbtn">
              Course1<i class="fa-sharp fa-solid fa-caret-down"></i>
            </button>
          </div>
          <div className="dropdown" id="dropbtn2">
            <button className="dropbtn">
              programs<i class="fa-sharp fa-solid fa-caret-down"></i>
            </button>
          </div>
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <button className="login-btn">Log In</button>
          <button className="join-btn">Join Now</button>
        </nav>
      </header>

      <main>
        <div className="left-section">
          <div className="Head">Access curated courses worth</div>
          <div className="Head-sub">
            <span>₹</span>
            <span className="strike">18,500</span> at just<span> ₹99</span> per
            year
          </div>
          <div className="content">
            <div>
              <img className="img" src={icon} alt="Icon" />
              <span>100+</span> job relevant courses
            </div>
            <div>
              <img className="img" src={icon1} alt="Icon 1" />
              <span>20,000+</span> Hours of content
            </div>
            <div>
              <img className="img" src={icon2} alt="Icon 2" />
              <span>Exclusive</span> Webinar access
            </div>
            <div>
              <img className="img" src={icon3} alt="Icon 3" />
              <span>₹94,000</span> worth scholarship
            </div>
            <div>
              <img className="img" src={icon4} alt="Icon 4" />
              <span>Ad Free</span> learning experience
            </div>
          </div>
          {/* Additional text or content for the left section */}
        </div>
        <SubscriptionBox /> {/* Render the SubscriptionBox component here */}
      </main>
    </div>
  );
}

export default App;
