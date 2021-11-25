import { Box, Icon, VStack, HStack, Center, Text, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { RiStarFill, RiCompassFill, Ri4KLine, 
        RiFlagLine, RiCheckboxCircleFill, RiSettingsFill, 
        RiFileSearchLine, RiFileEditLine, RiMoneyDollarBoxLine,
        RiRefreshLine } from 'react-icons/ri';

import { TempRequisites } from '../TempRequisites';
import { RequisitesModal } from '../Modal/RequisitesModal';
import { useState } from 'react';

export function RequisitesOrientations() {
    const [isFrom, setIsFrom] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal(isFrom: string) {
        setIsFrom(isFrom);
        setIsModalOpen(true);
    }
  
    function handleCloseModal() {
        setIsFrom("");
        setIsModalOpen(false);
    }

    return (
        <Center
            my="6" mx="auto" px="6"
            w="100%"
            bgColor=""
        >
            <VStack spacing="10">
                {/* <TempRequisites/> */}

                <Box id="general_orientations">
                    <Text fontSize="4xl" color="green.600" fontWeight="bold">
                        Orientações gerais
                    </Text>
                </Box> 
                
                <Box>
                    <Text fontSize="2xl" color="green.900" maxW="650" textAlign="center">
                        A seguir destacam-se as fases para auxiliar os depositantes e/ou titulares 
                        de pedidos de patente
                        e patentes, com relação aos atos necessários a serem praticados no INPI, 
                        bem como apresentar os principais conceitos de questões vinculadas 
                        à Propriedade Industrial em matéria de patentes.
                    </Text>
                </Box>
                
                <Box>
                    <HStack spacing="20"> 
                        <Box>
                            <VStack
                                cursor='pointer'
                                onClick={() => handleOpenModal("Busca")}
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
                            <VStack 
                                textAlign="center"
                                cursor='pointer'
                                onClick={() => handleOpenModal("Elaboração do pedido")}
                            >
                                <Box bgColor="green.300" borderRadius="25" p="1">
                                    <Icon as={RiFileEditLine} fontSize="30" color="white"/>
                                </Box>
                                <Heading fontSize="3xl">
                                    Elaboração do pedido
                                </Heading>
                                <Text color="green.900" textAlign="center" maxW="200">
                                    Considerações iniciais para auxiliar o autor na redação do pedido de patente ao INPI.
                                </Text>
                            </VStack>
                        </Box>

                        <Box>
                            <VStack 
                                textAlign="center"
                                cursor='pointer'
                                onClick={() => handleOpenModal("Depósito eletrônico")}
                            >
                                <Box bgColor="green.300" borderRadius="25" p="1">
                                    <Icon as={RiMoneyDollarBoxLine} fontSize="30" color="white"/>
                                </Box>
                                <Heading fontSize="3xl">
                                    Depósito eletrônico
                                </Heading>
                                <Text color="green.900" textAlign="center" maxW="200">
                                    Para obter a patente, cabe ao autor requerer a proteção legal junto ao INPI.
                                </Text>
                            </VStack>
                        </Box>

                        <Box>
                            <VStack 
                                textAlign="center"
                                cursor='pointer'
                                onClick={() => handleOpenModal("Acompanhamento de processo")}
                            >
                                <Box bgColor="green.300" borderRadius="25" p="1">
                                    <Icon as={RiRefreshLine} fontSize="30" color="white"/>
                                </Box>
                                <Heading fontSize="3xl">
                                    Acompanhamento de processo
                                </Heading>
                                <Text color="green.900" textAlign="center" maxW="200">
                                    O usuário deve atentar a eventuais exigências e necessidades do rito processual.
                                </Text>
                            </VStack>
                        </Box>
                    </HStack>
                </Box>

                <Box id="requisites_orientations">
                    <Text fontSize="4xl" color="green.600" fontWeight="bold">
                        Orientações de requisitos
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

            <RequisitesModal isOpen={isModalOpen} onRequestClose={handleCloseModal} isFrom={isFrom}/>
        </Center>
    )
}