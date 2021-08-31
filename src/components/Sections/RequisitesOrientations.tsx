import { Box, Icon, VStack, HStack, Center, Text, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { RiStarFill, RiCompassFill, Ri4KLine, RiFlagLine, RiCheckboxCircleFill, RiSettingsFill, RiFileSearchLine } from 'react-icons/ri';

import { RequisitesModal } from '../Modal/RequisitesModal';
import { useState } from 'react';

export function RequisitesOrientations() {
    const [isRequisitesModalOpen, setIsRequisitesModalOpen] = useState(false);

    function handleOpenRequisitesModal() {
        setIsRequisitesModalOpen(true);
    }
  
    function handleCloseNewTransactionModal() {
        setIsRequisitesModalOpen(false);
    }

    return (
        <Center
            my="6" mx="auto" px="6"
            w="100%"
            bgColor=""
        >
            <VStack spacing="10">
                <Box>
                    <Text fontSize="4xl" color="green.600" fontWeight="bold">
                        Divisão por fase
                    </Text>
                </Box> 
                
                <Box>
                    <Text fontSize="2xl" color="green.900" maxW="650" textAlign="center">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
                    </Text>
                </Box>
                
                <Box>
                    <HStack spacing="20"> 
                        <Box>
                            <VStack
                                cursor='pointer'
                                onClick={handleOpenRequisitesModal}
                            >
                                <Box bgColor="green.300" borderRadius="25" p="1">
                                    <Icon as={RiFileSearchLine} fontSize="30" color="white"/>
                                </Box>
                                <Heading fontSize="3xl">
                                    Busca
                                </Heading>
                                <Text color="green.900" textAlign="center" maxW="200">
                                    Conhecer o estado da técnica é fundamental para a concessão da patente.
                                </Text>
                            </VStack>
                        </Box>

                        <Box>
                            <VStack>
                            <Box bgColor="green.300" borderRadius="25" p="1">
                                <Icon as={RiCompassFill} fontSize="30" color="white"/>
                            </Box>
                            <Heading fontSize="3xl">
                                Fase II
                            </Heading>
                            <Text color="green.900" textAlign="center" maxW="200">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                            </Text>
                        </VStack>
                        </Box>

                        <Box>
                            <VStack>
                            <Box bgColor="green.300" borderRadius="25" p="1">
                                <Icon as={Ri4KLine} fontSize="30" color="white"/>
                            </Box>
                            <Heading fontSize="3xl">
                                Fase III
                            </Heading>
                            <Text color="green.900" textAlign="center" maxW="200">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                            </Text>
                        </VStack>
                        </Box>

                        <Box>
                            <VStack>
                            <Box bgColor="green.300" borderRadius="25" p="1">
                                <Icon as={RiFlagLine} fontSize="30" color="white"/>
                            </Box>
                            <Heading fontSize="3xl">
                                Fase IV
                            </Heading>
                            <Text color="green.900" textAlign="center" maxW="200">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                            </Text>
                            </VStack>
                        </Box>
                    </HStack>
                </Box>

                <Box>
                    <Text fontSize="4xl" color="green.600" fontWeight="bold">
                        Requisitos em cada fase
                    </Text>
                </Box> 

                <Box>
                    <Text fontSize="2xl" color="green.900" maxW="650" textAlign="center">
                        Em cada fase é importante respeitar cada um dos seus requistos.
                    </Text>
                </Box>

                <Box>
                    <HStack spacing="20">
                        <Box>
                            <VStack>
                                <Box bgColor="green.300" borderRadius="25" p="1">
                                    <Icon as={RiStarFill} fontSize="30" color="white"/>
                                </Box>
                                <Heading fontSize="3xl">
                                    Fase I
                                </Heading>
                                <List>
                                    <ListItem>
                                        <ListIcon as={RiCheckboxCircleFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Duis aute irure dolor in
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            in voluptate velit esse 
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiCheckboxCircleFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            eu fugiat nulla pariatur
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            sint occaecat cupidatat
                                        </Text> 
                                    </ListItem>
                                </List>
                            </VStack>
                        </Box>
                        <Box>
                            <VStack>
                                <Box bgColor="green.300" borderRadius="25" p="1">
                                    <Icon as={RiCompassFill} fontSize="30" color="white"/>
                                </Box>
                                <Heading fontSize="3xl">
                                    Fase II
                                </Heading>
                                <List>
                                    <ListItem>
                                        <ListIcon as={RiCheckboxCircleFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Duis aute irure dolor in reprehenderit
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            in voluptate velit esse cillum dolore
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiCheckboxCircleFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            eu fugiat nulla pariatur. Excepteur
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            sint occaecat cupidatat.
                                        </Text> 
                                    </ListItem>
                                </List>
                            </VStack>
                        </Box>
                        <Box>
                            <VStack>
                                <Box bgColor="green.300" borderRadius="25" p="1">
                                    <Icon as={Ri4KLine} fontSize="30" color="white"/>
                                </Box>
                                <Heading fontSize="3xl">
                                    Fase III
                                </Heading>
                                <List>
                                    <ListItem>
                                        <ListIcon as={RiCheckboxCircleFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Duis aute irure dolor in
                                            <ListItem>
                                        <ListIcon as={RiCheckboxCircleFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            eu fugiat nulla pariatur. Excepteur
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            sint occaecat cupidatat.
                                        </Text> 
                                    </ListItem>           </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            in voluptate velit esse 
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiCheckboxCircleFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            eu fugiat nulla pariatur
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            sint occaecat cupidatat
                                        </Text> 
                                    </ListItem>
                                </List>
                            </VStack>
                        </Box>
                        <Box>
                            <VStack>
                                <Box bgColor="green.300" borderRadius="25" p="1">
                                    <Icon as={RiFlagLine} fontSize="30" color="white"/>
                                </Box>
                                <Heading fontSize="3xl">
                                    Fase III
                                </Heading>
                                <List>
                                    <ListItem>
                                        <ListIcon as={RiCheckboxCircleFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Duis aute irure dolor in reprehenderit
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            in voluptate velit esse cillum dolore
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiCheckboxCircleFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            eu fugiat nulla pariatur. Excepteur
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            sint occaecat cupidatat.
                                        </Text> 
                                    </ListItem>
                                </List>
                            </VStack>
                        </Box>
                    </HStack>
                </Box>
            </VStack>

            <RequisitesModal isOpen={isRequisitesModalOpen} onRequestClose={handleCloseNewTransactionModal} />
        </Center>
    )
}