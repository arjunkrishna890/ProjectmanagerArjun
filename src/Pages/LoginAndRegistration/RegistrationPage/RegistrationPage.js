import React from "react";
import "./RegistrationPage.scss";
import RegisterUserForm from "../../../Components/RegisterUserForm/RegisterUserForm";

function RegistrationPage() {
  return (
    <div className="mainpage">
      <div className="container">
        <div className="loginpage">
          <RegisterUserForm />
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
