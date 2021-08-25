import React from "react";
import { useState } from "react";

import { Text, TextProps as ChakraTextProps } from "@chakra-ui/react";

interface TextProps extends ChakraTextProps {
    children: React.ReactNode;
    color: string;
    fontSize: string;
    colorRD: string;
    fontSizeRD: string;
    maxW: string;
} 

const Seemore: React.FC<TextProps> = ({ children, color, fontSize, colorRD, fontSizeRD, maxW }) => {
    const text = children.toString();
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    }

    return (
        <Text fontSize={fontSize}
            color={color} 
            fontWeight="bold" 
            textAlign="center" 
            maxW={maxW}>
            { isReadMore ? text.slice(0, 100) : text }
            <Text
                as="span"
                fontSize={fontSizeRD}
                fontWeight="bold"
                color={colorRD}
                onClick={toggleReadMore}
                ml="1"
                cursor='pointer'
                >
                {isReadMore ? "...Ver mais ▼" : "Esconder ▲"}
            </Text>
        </Text>
    )
}

export default Seemore;