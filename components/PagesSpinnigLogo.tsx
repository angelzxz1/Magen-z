import { Box, useColorModeValue, keyframes } from "@chakra-ui/react";

interface SpinnigLogoProps {
    top?: string;
    left?: string;
}
const rotation = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg);     
    }
    100% {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
`;
const zoomIn = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const SpinnigLogo = ({
    top = "50%",
    left = "50%",
}: SpinnigLogoProps): JSX.Element => {
    return (
        <Box
            position="absolute"
            w="100%"
            h="100%"
            zIndex={1}
            top={top}
            left={left}
            animation={`${zoomIn} 2s ease-in-out forwards`}
        >
            <Box
                as="svg"
                position="absolute"
                transform="translate(-50%, -50%)"
                width="500"
                height="500"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animation={`${rotation} 200s linear infinite`}
            >
                <g clip-path="url(#clip0_11_96)">
                    <rect
                        x="1.41421"
                        y="250"
                        width="351.553"
                        height="351.553"
                        transform="rotate(-45 1.41421 250)"
                        stroke={useColorModeValue("black", "white")}
                        stroke-width="2"
                    />
                    <rect
                        x="74.2234"
                        y="74.2233"
                        width="351.553"
                        height="351.553"
                        stroke={useColorModeValue("black", "white")}
                        stroke-width="2"
                    />
                    <line
                        x1="73"
                        y1="249"
                        x2="427"
                        y2="249"
                        stroke={useColorModeValue("black", "white")}
                        stroke-width="2"
                    />
                    <line
                        x1="249"
                        y1="427"
                        x2="249"
                        y2="73"
                        stroke={useColorModeValue("black", "white")}
                        stroke-width="2"
                    />
                    <line
                        x1="124.135"
                        y1="374.451"
                        x2="374.451"
                        y2="124.135"
                        stroke={useColorModeValue("black", "white")}
                        stroke-width="2"
                    />
                    <line
                        x1="374.451"
                        y1="375.865"
                        x2="124.135"
                        y2="125.549"
                        stroke={useColorModeValue("black", "white")}
                        stroke-width="2"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_11_96">
                        <rect
                            width="500"
                            height="500"
                            fill={useColorModeValue("black", "white")}
                        />
                    </clipPath>
                </defs>
            </Box>
        </Box>
    );
};

export default SpinnigLogo;
