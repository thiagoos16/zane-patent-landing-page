import React from "react";
import { Box, Image, VStack } from "@chakra-ui/react"

interface ImageContainerProps {
    title: string;
    subtitleLink?: string;
    subtitle: string;
    imgSrc: string;
}

export function ImageContainer({ title, subtitleLink, subtitle, imgSrc }: ImageContainerProps) {
    return (
        <Box maxW="100%" mt="5" alignItems="center">
            <VStack>
                <Box
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    ml="2"
                >
                    { title }    
                </Box>
            
                <Image src={imgSrc}/>

                <Box
                    letterSpacing="wide"
                    fontSize="xs"
                    ml="2"
                >
                    Fonte:
                    { subtitleLink  
                        ? <a href={subtitleLink}> {subtitle} </a>
                        : <> {subtitle} </>
                    }    
                </Box>
            </VStack>
        </Box>
    );
}