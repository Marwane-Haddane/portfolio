import React from 'react'
import logo from '../../../public/mylogo.png';

const Footer = () => {
    const linkSections = [
        {
            title: "Quick Links",
            links: [
                { name: "Home", url: "#hero" },
                { name: "About", url: "#" },
                { name: "Projects", url: "#" },
                { name: "Contact", url: "#" },
                { name: "FAQs", url: "#" }
            ]
        },
        {
            title: "Projects",
            links: [
                { name: "Delivery Information", url: "#" },
                { name: "Return & Refund Policy", url: "#" },
                { name: "Payment Methods", url: "#" },
                { name: "Track your Order", url: "#" },
                { name: "Contact", url: "mailto:marwanhaddan2005@gmail.com" }
            ]
        },
        {
            title: "Get in Touch",
            links: [
                { name: "LinkedIn", url: "https://www.linkedin.com/in/marwane-haddane" },
                { name: "Github", url: "https://github.com/Marwane-Haddane/" },
                { name: "+212649946554", url: "https://wa.me/212649946554" },
                { name: "marwanhaddan2005@gmail.com", url: "mailto:marwanhaddan2005@gmail.com" }
            ]
        }
    ];

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-linear-to-t from-purple-950 to-black">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <a href="#hero">
                        <img className="w-34 md:w-32 hov" src={logo} alt="logo" />
                    </a>
                    <p className="max-w-[410px] mt-6">
                        Engineering student specializing in cybersecurity,
                        with strong interests in robotics, artificial intelligence,
                        and full-stack development. I build secure, interactive systems
                        ranging from AI-powered applications to game and web platforms
                    </p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <div className='hov'>
                                <h3 className="font-semibold text-base text-purple-500 md:mb-5 mb-2">{section.title}</h3>
                            </div>
                            <ul className="text-sm space-y-1">
                                {section.links.map((linkItem, i) => (
                                    <li key={i} className='hov'>
                                        <a href={linkItem.url} className=" hover:underline transition">{linkItem.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80 font-semibold">
                Copyright 2026 © <a href="https://www.linkedin.com/in/marwane-haddane">Marwane Haddane</a> All Right Reserved.
            </p>
        </div>
    );
};

export default Footer;