import React from "react";
import "./DRating.css"
const DRating = () => {
  return (
    <div className="rating">
      <div className="saying">
      <div>
        <p style={{color:"#3ec6f0"}}>What They Say</p>
        <h1>
          Our Customer Say <br />
          About Us
        </h1>
      </div>
      <div className="forback-btn">
            <button>◀️</button>
            <button>▶️</button>
        </div>
        </div>
      <div className="rating-element">
        <div className="rating-element-div">
          <h3>"Momorable Trip"</h3>
          <p>
            This is really memorable trip for me. <br />
            It was a very great experience with Adventour <br />g coding from
            the user. It is well-known for its eCommerce solution,{" "}
          </p>
          <div>
          <img src="https://bit.ly/sage-adebayo" width={50} height={50} />
          <h4>Dilnawaz</h4>
          <p>Creator, Chakra UI</p>
          </div>
        </div>
        <div className="rating-element-div">
          <h3>"Momorable Trip"</h3>
          <p>
            This is really memorable trip for me. <br />
            It was a very great experience with Adventour <br />g coding from
            the user. It is well-known for its eCommerce solution,{" "}
          </p>
          <div>
          <img src="https://bit.ly/sage-adebayo" width={50} height={50} />
          <h4>Dilnawaz</h4>
          <p>Creator, Chakra UI</p>
          </div>
          
        </div>
        <div className="rating-element-div">
          <h3>"Momorable Trip"</h3>
          <p>
            This is really memorable trip for me. <br />
            It was a very great experience with Adventour <br />g coding from
            the user. It is well-known for its eCommerce solution,{" "}
          </p>
          <div>
          <img src="https://bit.ly/sage-adebayo" width={50} height={50} />
          <h4>Dilnawaz</h4>
          <p>Creator, Chakra UI</p>
          </div>
        </div>
        <div className="rating-element-div">
          <h3>"Momorable Trip"</h3>
          <p>
            This is really memorable trip for me. <br />
            It was a very great experience with Adventour <br />g coding from
            the user. It is well-known for its eCommerce solution,{" "}
          </p>
          <div>
          <img src="https://bit.ly/sage-adebayo" width={50} height={50} />
          <h4>Dilnawaz</h4>
          <p>Creator, Chakra UI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRating;
