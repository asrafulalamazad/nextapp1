import React from 'react';

const SiteFooter = () => {
    return (
        <footer className="container mx-auto footer p-10 bg-neutral text-neutral-content">
            <div className="w-[250px]">
                <header className="footer-title text-3xl text-white">WEB LOGO</header>
                <p className="link link-hover">Some footer text about the Agency. Just a little description to help people understand you better</p>
                <div className="flex flex-col md:flex-row gap-4">
                    <img src="svg/fb.svg"/>
                    <img src="svg/tw.svg"/>
                    <img src="svg/in.svg"/>
                    <img src="svg/instra.svg"/>
                </div>

            </div>
            <nav>
                <header className="footer-title ">Quick Links</header>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Portfolio</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contacts Us</a>
            </nav>
            <nav>
                <header className="footer-title">Address</header>
                <p className="">Design Agency Head Office, Airport Road, UAE </p>
            </nav>
        </footer>
    );
};

export default SiteFooter;