import { Box, Heading, VStack, HStack, Center, Text, Image } from "@chakra-ui/react";

export function GeneralOrientations() {
    return (
        <Center
            my="6" mx="auto" px="6"
            w="100%"
            bgColor=""
        >
            <VStack spacing="10">
                <Box>
                    <Text fontSize="3xl" color="green.500" fontWeight="bold" textAlign="center" maxW="900">
                        O que é: Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                    </Text>
                </Box>

                <Box>
                    <Text fontSize="2xl" color="green.900" textAlign="center" maxW="1000">
                        Para que Serve: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
                    </Text>
                </Box>

                <Box>
                    <Text fontSize="4xl" color="green.600" fontWeight="bold">
                        Tempo Médio
                    </Text>
                </Box>

                <Box>
                    <Image src="https://files.comunidades.net/rtvminas/timeline.png"/>    
                </Box>

                <Box>
                    <Text fontSize="4xl" color="green.600" fontWeight="bold">
                        Valores
                    </Text>
                </Box>

                <Box>
                    <HStack spacing="10">
                    <VStack shadow="md" borderWidth="1px" p="2" bgColor="green.100" borderRadius="5px">
                        <Heading fontSize="3xl">
                            R$ 00,00
                        </Heading>
                        <Text>
                            Descrição Respectiva
                            <br/> .
                            <br/> .
                            <br/> .
                            <br/> .
                        </Text>
                    </VStack>

                    <VStack shadow="md" borderWidth="1px" p="2" bgColor="green.100" borderRadius="5px">
                        <Heading fontSize="3xl">
                            R$ 00,00
                        </Heading>
                        <Text>
                            Descrição Respectiva
                            <br/> .
                            <br/> .
                            <br/> .
                            <br/> .
                        </Text>
                    </VStack>
                </HStack>
                </Box>
            </VStack>
        </Center>
    )
}