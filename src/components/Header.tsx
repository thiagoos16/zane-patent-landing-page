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
                    <MenuItem name="Orientações Gerais"/>

                    <MenuItem name="Orientações de Requisitos"/>

                    <MenuItem name="Cartilhas"/>

                    <MenuItem name="Fale Conosco"/>
                </HStack>
            </Flex>
        </Flex>
    )
}