import Link from "next/link";

// import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icons: <FaGithub />, path: "" },
    { icons: <FaLinkedin />, path: "" },
    { icons: <FaYoutube />, path: "" },
    { icons: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
}

export default Social;