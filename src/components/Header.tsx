import Nav from "./Nav";
import * as React from 'react';
import bg from '../assets/bg.jpg';
import Search from './Search';

const headerStyles = {
  backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  width: '100%',
  height: '538px',
  textAlign: 'center' as any
}

const primaryHeaderTextStyle = {
  color: '#fff',
  fontSize: '36px',
  margin: '141px 0 16px 0'
}

const secondaryHeaderTextStyle = {
  color: '#fff',
  fontSize: '18px',
  margin: '0'
}

const highlighted = {
  color: 'rgba(92, 190, 254, .8)',
  fontWeight: 700
}

interface HeaderProps{ jobCount: string, searchFunc: Function }

const Header = (props: HeaderProps) => {
  return (
    <div style={headerStyles}>
      <Nav></Nav>
      
      <h1 style={primaryHeaderTextStyle}>
        We have {props.jobCount !== '' ? <span style={highlighted}>{props.jobCount}</span> : <span></span> } jobs available!
      </h1>
      <h5 style={secondaryHeaderTextStyle}>
        Find the job for you in a minute
      </h5>

      <Search searchFunc={props.searchFunc}></Search>
    </div>
  );
}

export default Header;