import * as React from 'react';
import "./Maintenance.css";

const Maintenance = () => {
  return (
    <div className='jobs-header-wrapper maintenance'>
      <h3 className='header-text'>
        We're sorry but we're currently doing some maintenance work on the website and we are unable to display jobs at the moment. 
      </h3>
      <h3 className='header-text top-spacing'>
        Please try again later.
      </h3>
    </div>
  );
}

export default Maintenance;