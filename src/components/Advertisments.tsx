import * as React from 'react';
import bg from '../assets/bg.jpg';

const advertismentsContainerStyles = {
  height: '365px',
  backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',

}

const Advertisments = (props: any) => {
  return (
    <div style={advertismentsContainerStyles}>
      test
    </div>
  );
}

export default Advertisments;