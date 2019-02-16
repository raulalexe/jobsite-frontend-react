import * as React from 'react';
import bg from '../assets/bg.jpg';

const advertismentsContainerStyles = {
  height: '365px',
  backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column' as 'column'
}

const textWrapperStyles = {
  width: '80%',
  margin: '0 auto',
  color: '#fff',
  textAlign: 'center' as 'center'
}

const Advertisments = (props: any) => {
  return (
    <div style={advertismentsContainerStyles}>
      <div style={textWrapperStyles}>
        <h2>
          Your advertisment can be here! Contact us for details.
        </h2>
      </div>
    </div>
  );
}

export default Advertisments;