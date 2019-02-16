import Nav from "../Navi/Nav";
import * as React from 'react';
import Search from '../Search/Search';
import { HeaderProps } from 'src/Models';
import './Header.css';

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <Nav searchFunc={props.searchFunc} searchData={props.searchData}></Nav>
      
      <h1 className="primary-header-text">
        We have {props.jobCount !== '' ? <span className="highlight">{props.jobCount}</span> : <span></span> } jobs available!
      </h1>
      <h5 className="secondary-header-text">
        Find the job for you in a minute
      </h5>

      <Search searchFunc={props.searchFunc} searchData={props.searchData}></Search>
    </div>
  );
}

export default Header;