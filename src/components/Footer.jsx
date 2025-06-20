import React from 'react';
import ProfastLog from './ProfastLog';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className=" p-4 text-center bg-black py-20 px-40 m-5 rounded-4xl space-y-4">
            <div className=" justify-items-center">
                <ProfastLog />
                <p>
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to <br /> business shipments — we deliver on time, every time.
                </p>
            </div>

            <div className="divider divider-accent"></div>

            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Coverage</a>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Pricing</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Contact</a>
            </nav>

            <div className="divider divider-accent"></div>

            <div className='flex gap-2 justify-center'>
                <FaFacebook size={30} />
                <FaGithub  size={30}/>
            </div>
        </footer>
    );
};

export default Footer;
