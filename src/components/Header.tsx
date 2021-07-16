import { Flex, Text, Input, Icon, HStack, Box, Avatar, Link } from '@chakra-ui/react';
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
            mt="4"
            px="6"
            align="center"
        >
            <Text
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
            >
                zanePatent
                <Text as="span" ml="1" color="green.600"> . </Text>
            </Text>
        
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

                    <MenuItem name="Simulação"/>

                    <MenuItem name="Fale Conosco"/>
                </HStack>
            </Flex>
        </Flex>
    )
}