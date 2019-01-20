import Tabs from '@material-ui/core/Tabs';
// import LinkTab from '@material-ui/core/Tab';
import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Tab } from '@material-ui/core';

const barStyles = {
    backgroundColor: 'rgba(0,0,0,.5)'
}
const linkStyle = {
    opacity: 0.8,
    color: '#9D9D9D'
}

const selectedLinkStyle = {
    color: '#FFF'
}

interface NavState { currentTab: number };

class Nav extends React.Component<{}, NavState>{
    constructor(props: any) {
        super(props);
        this.state = {currentTab: 0};
    }

    handleChange = (event: any, value: number) => {
        this.setState({currentTab: value});
    }
    render() {
        return (
        <div style={barStyles}>
            <Tabs value={this.state.currentTab} onChange={this.handleChange}>
                <Link to='/'>
                    <Tab label='Home' style={this.state.currentTab === 0 ? selectedLinkStyle : linkStyle} />
                </Link>
                <Link to='/jobs'>
                    <Tab label='Jobs' style={this.state.currentTab === 1 ? selectedLinkStyle : linkStyle} />
                </Link>
                <Link to='/remotejobs'>
                    <Tab label='Remote Jobs' style={this.state.currentTab === 2 ? selectedLinkStyle : linkStyle}/>
                </Link>
                <Link to='/#about' smooth>
                    <Tab label='About'  style={this.state.currentTab === 3 ? selectedLinkStyle : linkStyle}/>
                </Link>
                <Link to='/#contact' smooth>
                    <Tab label='Contact' style={this.state.currentTab === 4 ? selectedLinkStyle : linkStyle}/>
                </Link>
            </Tabs>
        </div>
        );
    }
}

export default Nav;