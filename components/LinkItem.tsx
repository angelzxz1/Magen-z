import NextLink from "next/link";
import { useColorModeValue, Link } from "@chakra-ui/react";

type props = {
    href: string;
    path: string;
    children: any;
    w?: number;
};

const LinkItem = ({ href, path, children, w }: props) => {
    const active = path === href;
    const color = useColorModeValue("black", "#f8f0ff");
    const LinkStyle: {} = {
        w: `${w}%`,
        color: color,
        transition: "transform 0.1s ease-in-out, width 0.3s ease-in-out",
        borderRadius: "md",
        textAlign: "center",
        _hover: {
            textDecoration: "none",
            transform: "scale(1.3)",
        },
    };
    return (
        <NextLink href={href} passHref>
            <Link {...LinkStyle}>{children}</Link>
        </NextLink>
    );
};

export default LinkItem;
