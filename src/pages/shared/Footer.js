import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <div style={{ background: `url(${footer})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='px-10 pt-16 pb-8'>
            <footer className="footer">
                <nav>
                    <header className="footer-title">Services</header>
                    <a href='/' className="link link-hover">Branding</a>
                    <a href='/' className="link link-hover">Design</a>
                    <a href='/' className="link link-hover">Marketing</a>
                    <a href='/' className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                    <a href='/' className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center mt-10">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;