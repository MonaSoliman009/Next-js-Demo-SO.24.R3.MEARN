import React from 'react';
import styles from './Header.module.css'
import Link from 'next/link';

const pages = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about-us" },
    { name: "Contact", link: "/contact-us" },
    { name: "Login", link: "/login" },
    { name: "Products", link: "/products" },
    { name: "Todos", link: "/todos" },

]
const Header = () => {
    return (
        <div className={styles.container}>
            {pages.map((page) => <div key={page.name} className={styles.link_container}>
                <Link href={page.link}>{page.name}</Link>
            </div>)}

        </div>
    );
}

export default Header;
