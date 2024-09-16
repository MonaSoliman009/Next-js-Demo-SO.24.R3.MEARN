import React from 'react';
import SideMenu from '../_components/SideMenu';

const Layout = ({ children }) => {
    return (
        <div style={{display:"flex"}}>
            <SideMenu />
            {children}
        </div>
    );
}

export default Layout;
