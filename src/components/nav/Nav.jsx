import React from 'react'
import CardNav from '../../jsrepo/CardNav'
import logo from '../../../public/logo2.webp';

function Nav() {
    const items = [
        {
            label: "About me",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Who I Am", href: "#about", ariaLabel: "About me" },
                { label: "My Expertise", href: "#experience", ariaLabel: "About Careers" },
            ]
        },
        {
            label: "My work",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "Github", href: "https://github.com/Marwane-Haddane/", target: "_blank", ariaLabel: "Github" },
                { label: "Skills", href: "#skills", ariaLabel: "Skills" },
                { label: "Projects", href: "#projects", ariaLabel: "Featured Projects" }
            ]
        },
        {
            label: "Contact",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Email", href: "mailto:marwanehaddane5@gmail.com", ariaLabel: "Email us" },
                { label: "Get in Touch", href: "#contact", ariaLabel: "Get in Touch" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/marwane-haddane", target: "_blank", ariaLabel: "LinkedIn" },
                {
                    label: "WhatsApp",
                    href: "https://wa.me/212649946554",
                    target: "_blank",
                    ariaLabel: "Chat on WhatsApp"
                }
            ]
        }
    ];

    return (
        <CardNav
            logo={logo}
            logoAlt="Marwane Haddane Logo"
            items={items}
            baseColor="rgb(0, 0,0, 0.5)"
            menuColor="#ffffffff"
            buttonBgColor="rgb(0, 0, 0)"
            buttonTextColor="#ffffffff"
            ease="power3.out"
            theme="light"
        />
    );
};
export default Nav
