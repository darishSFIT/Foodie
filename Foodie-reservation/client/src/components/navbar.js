import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const handleRedirectClick = () => {
        window.location.href = 'http://localhost:3000';
      };
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"flex-start", borderBottom:"1px solid #e72929"}}>
      <Navbar color="" light expand="lg" >
      <NavbarBrand
          className="nav-brand"
          onClick={handleRedirectClick}
        >
          Foodie
        </NavbarBrand>
        <NavbarBrand
          className="nav-brand"
          onClick={_ => {
            props.setPage(0);
          }}
        >
          Foodie Reservation
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

