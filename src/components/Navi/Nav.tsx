import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';
import { HashLink as Link, HashLinkProps } from 'react-router-hash-link';
import { Tab, AppBar } from '@material-ui/core';
import { SearchProps } from 'src/Models';
import { TabProps } from '@material-ui/core/Tab';
import { LinkProps } from 'react-router-dom';
import { getTopScroll } from 'src/utils';
import { useEffect, useState } from 'react';
import './Nav.css';

const Nav = (props: SearchProps) => {
    
    const LinkTab: React.ComponentType<TabProps & LinkProps & HashLinkProps> = Tab as React.ComponentType<TabProps & LinkProps & HashLinkProps>;
    const barStylesTransparent = {
        backgroundColor: 'rgba(0,0,0,.5)',
    }
    const barStylesOpaque = {
        backgroundColor: 'rgba(0,0,0,1)',
    }
    const [barStyles, setBarStyles] = useState(barStylesTransparent);

    const doScroll = () => {
        const scrollTop = getTopScroll();
        setBarStyles(scrollTop > 98 ? barStylesOpaque : barStylesTransparent);
    }

    useEffect(() => {
        window.addEventListener('scroll', doScroll);
        return () => {
          window.removeEventListener('scroll', doScroll);
        }
    }, []);

    return (
        <div>
            <AppBar position='fixed' style={barStyles}>
            <Tabs value={false} centered={true}>
                <LinkTab label='Home' component={Link} to="/" onClick={() => { 
                        window.scroll(0,0);
                        props.searchFunc('', '', '')}
                    } className='link' / >
                <LinkTab label='Jobs' component={Link} to="/#jobs" smooth className='link'/>
                <LinkTab label='Remote Jobs' to="/remotejobs" onClick={() => {
                        window.scroll({top: 0, behavior: 'smooth'}); 
                        props.searchFunc('', 'Remote', '')}
                    } className='link hidden-small-screen' />
                <LinkTab label='About' component={Link} to="/#about" smooth className='link' />
                <LinkTab label='Contact' component={Link} to="/#contact" smooth className='link' />
            </Tabs>
            </AppBar>
        </div>
    );
}

export default Nav;