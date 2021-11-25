import { Flex, Text, Input, Icon, HStack, Box, Avatar, Link, Image } from '@chakra-ui/react';
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

import { MenuItem } from './Menu/Item';

export function Header() {
    
    return( 
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            px="6"
            align="center"
            bgColor="white"
            sx={{
                "position":"fixed", 
                "overflow":"hidden",
                "top": "0",
                "z-index": "999"
            }}
        >
            <Image
                mt="-5"
                boxSize="40"
                objectFit="contain"
                src="/assets/inovamazonpi-logo.png"
            />
        
            <Flex
                align="center"
                ml="auto"
            >
                <HStack
                    spacing="8"
                    mx="8"
                    pr="8"
                    py="1"
                    borderRightWidth={1}
                    borderColor="gray.200"
                >
                    <a href="#general_orientations">
                        <MenuItem  name="Orientações Gerais"/>
                    </a>

                    <a href="#requisites_orientations">
                        <MenuItem name="Orientações de Requisitos"/>
                    </a>

                    <a href="#castile">
                        <MenuItem name="Cartilhas"/>
                    </a>
                    
                    <a href="#talk_us">
                        <MenuItem name="Fale Conosco"/>
                    </a>
                </HStack>
            </Flex>
        </Flex>
    )
}