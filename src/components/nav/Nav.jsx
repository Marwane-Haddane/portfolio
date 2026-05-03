import React from 'react'
import CardNav from '../../jsrepo/CardNav'
import logo from '../../../public/mylogo.png';

function Nav() {
    const items = [
        {
            label: "About",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Company", ariaLabel: "About Company" },
                { label: "Careers", ariaLabel: "About Careers" }
            ]
        },
        {
            label: "Projects",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "Featured", ariaLabel: "Featured Projects" },
                { label: "Case Studies", ariaLabel: "Project Case Studies" }
            ]
        },
        {
            label: "Contact",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Email", href: "mailto:marwanhaddan2005@gmail.com", ariaLabel: "Email us" },
                { label: "Github", href: "https://github.com/Marwane-Haddane/", target: "_blank", ariaLabel: "Github" },
                { label: "Owner", href: "#home", ariaLabel: "Owner" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/marwane-haddane", target: "_blank", ariaLabel: "LinkedIn" }
            ]
        }
    ];

    return (
        <CardNav
            logo={logo}
            logoAlt="Company Logo"
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




