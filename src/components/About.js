import React from "react";
import User from "./User";

const About = () => {
  return (
    <div>
      <h1>Learning React Router dom</h1>
      <User />
    </div>
  );
};

export default About;

/**
 
  ****** MOUNTING CYCLE ***** 

   -- constructor called (with dummy data)
   -- render called (dummy HTML)
        <HTML dummy/>

   --  ComponentDidMount
      -- Api called 
      -- this.setState called because state variable is updated


  once the mounting cycle is finished , then setState function will be called and it triggers the reconciliation process and it update cycle
  now its update cycle is called 
  

   *****  UPDATE CYLECE BEGIN ****

    --  render (will call with api data)
      <HTML is loaded with new data></HTML>

      componentDIDUPDATE will called

      componentWillUnMount will called when we remove the component from the UI or when we are leaving the page
*/
