import React from "react";
import Typical from "react-typical";
const TypicalText = () => {
  return (
    <>
      <div className="profile-details-roles">
        <div className="primary-text">
          {" "}
          <h2>
            {""}
            <Typical
              loop={Infinity}
              steps={[
                "Enthusiastic Dev 😎",
                1000,
                "Frontend Developer💻",
                1000,
                "React Dev 🌐",
                1000,
              ]}
            />
          </h2>
        </div>
      </div>
      <span className="profile-role-tagline">
        <h5>
          Developing features to enhance the user experience and determines
          design choices.
        </h5>
      </span>
    </>
  );
};

export default TypicalText;
