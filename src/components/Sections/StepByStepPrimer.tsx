import { Box, Flex, VStack, HStack, Center, Text, AspectRatio, Image, Heading, Icon, Divider, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { RiFileDownloadLine } from 'react-icons/ri';

import { SimulationStepByStep } from "../Form/SimulationStepByStep";

export function StepByStepPrimer() {
    return (
        <Center
            mt="6"
            w="100%"
            bgColor=""
        >
            <VStack spacing="10">
                {/* <Box align="center">
                    <Box>
                        <Text fontSize="4xl" color="green.600" fontWeight="bold">
                            Animação Rápida
                        </Text>
                    </Box>

                    <Box mt="6">
                        <Image src="/assets/animation-01.gif"/>    
                    </Box>
                </Box> */}

                {/* <Box align="center">
                    <Box>
                        <Text fontSize="4xl" color="green.600" fontWeight="bold">
                            Vídeo com Telas
                        </Text>
                    </Box>

                    <Box minW={1000} align="center" mt="6"> 
                        <AspectRatio maxW="1000px" ratio={2}>
                            <iframe
                                title="animation"
                                src="/assets/animation.mp4"
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Box>
                </Box> */}

                {/* <Box align="center">
                    <Box>
                        <Text fontSize="4xl" color="green.600" fontWeight="bold">
                            Cortes de Telas
                        </Text>
                    </Box>

                    <HStack spacing="10" mt="6">
                        <Box>
                            <VStack align="end">
                                <Text fontSize="1xl" color="green.600" fontWeight="bold">
                                    FRASE DE DESTAQUE
                                </Text>
                                <Heading fontSize="4xl" color="green.400">
                                    Data-driven insights
                                </Heading>
                                <Text maxW="600" align="initial" fontSize="2xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Text>
                            </VStack>
                        </Box>

                        <Box maxW="540">
                            <Image src="https://open.cruip.com/static/media/features-split-image-01.d9cb99ce.png"/>
                        </Box>
                    </HStack>
                </Box> */}
                
                {/* <Box align="center">
                    <Text fontSize="4xl" color="green.600" fontWeight="bold">
                        Formulário
                    </Text>

                    <SimulationStepByStep  />
                </Box> */}
                
                {/* <Box>
                    <VStack>
                        <Heading fontSize="3xl" color="green.600" fontWeight="bold">
                        Projetos de Sucesso
                        </Heading>
                        <Text color="green.900" textAlign="center" maxW="600">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                        </Text>
                    </VStack>

                    <HStack mt="6" mb="6" spacing="10">
                        <VStack shadow="md" borderWidth="1px" p="8" bgColor="green.100" borderRadius="5px">
                            <Box align="initial">
                                <Text mb="-14" fontSize="70" ml="-150">
                                    "
                                </Text>
                            </Box>
                            <Text maxW="300" align="initial">
                                — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                            </Text>
                            <Divider borderColor="green.800" pt="5"/>
                            
                            <Text fontWeight="bold" pt="5">
                                Poject Name / <Text as="span" color="green.600"> Projeto Link </Text>
                            </Text>
                        </VStack>

                        <VStack shadow="md" borderWidth="1px" p="8" bgColor="green.100" borderRadius="5px">
                            <Box align="initial">
                                <Text mb="-14" fontSize="70" ml="-150">
                                    "
                                </Text>
                            </Box>
                            <Text maxW="300" align="initial">
                                — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                            </Text>
                            <Divider borderColor="green.800" pt="5"/>
                            
                            <Text fontWeight="bold" pt="5">
                                Poject Name / <Text as="span" color="green.600"> Projeto Link </Text>
                            </Text>
                        </VStack>
                    </HStack>
                </Box> */}

                <Box mb="5" id="castile">
                    <VStack>
                        <Heading fontSize="3xl" color="green.600" fontWeight="bold">
                            Downloads
                        </Heading>
                        <Text color="green.900" textAlign="center" maxW="600">
                            Baixe as castilhas com mais detalhes.
                        </Text>
                        <List>
                            <ListItem>
                                <Link target="_blank" href="/assets/castilha-inpi.pdf">
                                    <ListIcon as={RiFileDownloadLine} color="green.600"/>
                                    <Text as="span" color="green.900">
                                        Cartilha do INPI
                                    </Text>
                                </Link> 
                            </ListItem>
                        </List>
                    </VStack>
                </Box>
            </VStack>
        </Center>
    )
}