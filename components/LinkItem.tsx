import NextLink from "next/link";
import { useColorModeValue, Link } from "@chakra-ui/react";

type props = {
    href: string;
    path: string;
    children: any;
    w?: number;
};

export const MenuLinkItem = ({ href, path, children }: props) => {
    // const active = path === href;
    const LinkStyle: {} = {
        color: useColorModeValue("black", "#f8f0ff"),
        // bg: "pink",
        transition: "transform 0.1s ease-in-out, background 150ms ease-in-out",
        w: "full",
        px: "1.5rem",
        py: "0.8rem",
        textAlign: "center",
        fontWeight: "bold",
        mx: "2px",
        _hover: {
            textDecoration: "none",
            bg: useColorModeValue("teal.200", "purple.200"),
        },
    };
    return (
        <NextLink href={href} passHref>
            <Link {...LinkStyle}>{children}</Link>
        </NextLink>
    );
};

export const LinkItem = ({ href, path, children, w }: props) => {
    const active = path === href;
    const color = useColorModeValue("black", "#f8f0ff");
    const LinkStyle: {} = {
        w: `${w}%`,
        color: color,
        transition: "transform 0.1s ease-in-out, width 0.3s ease-in-out",
        borderRadius: "md",
        textAlign: "center",
        fontWeight: "bold",
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
