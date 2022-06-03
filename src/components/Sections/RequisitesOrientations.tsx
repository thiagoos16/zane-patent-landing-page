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
                        Em cada fase é importante respeitar seus requisitos, a partir do item 5 do 
                        manual do INPI você encontrará todas as informações atinentes ao processo 
                        de depósito do pedido, de maneira completa conceitualmente e contemplando 
                        ilustrações, abaixo destacam-se as seguintes informações:
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
                                    Fase 1
                                </Heading>
                                <List>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Cadastro no sistema e-INPI  (pág 43)
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Consulta à tabela de retribuições da diretoria de patentes (pág 47) 
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Emissão da Guia de Recolhimento da União (GRU) (pág 50)
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Pagamento da retribuição (pág 55)
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Acesso e preenchimento dos formulários eletrônicos (pág 56)
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                        Submeter o formulário eletrônico (pág 69)
                                        </Text> 
                                    </ListItem>
                                </List>
                            </VStack>
                        </Box>
                        <Box>
                            <VStack>
                                <Box bgColor="green.300" borderRadius="25" p="1">
                                    <Icon as={RiSettingsFill} fontSize="30" color="white"/>
                                </Box>
                                <Heading fontSize="3xl">
                                    Fase 2
                                </Heading>
                                <List>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Acompanhamento do processo (pág 74) 
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Acompanhar as decisões do INPI (pág 74)
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Compreendendo as decisões do INPI (75)
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Principais fases do pedido de patente (pág 81)
                                        </Text> 
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Principais fases do pedido de patente (pág 94)
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
                                    Fase 3
                                </Heading>
                                <List>
                                    <ListItem>
                                        <ListIcon as={RiSettingsFill} color="green.600"/>
                                        <Text as="span" color="green.900">
                                            Solucionando problemas (pág 95)
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