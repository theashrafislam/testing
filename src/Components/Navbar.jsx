"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    console.log(pathName);
    const navlinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
    ]
    return (
        <div>
            <nav className='bg-red-500 p-5 flex justify-between item-center'>
                <h2>Logo</h2>
                <ul className='flex gap-8 justify-center items-center'>
                    {
                        navlinks?.map(link => <Link className={`${pathName == link.path && "text-white"}`} key={link.path} href={link.path}>{link.title}</Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;