import { Box, Divider, Flex, Heading, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { Input } from "./Input";

export function SimulationStepByStep() {
    return (
        // <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Box maxW="1000px" borderRadius={8} bg="white" p="8">
                <Heading size="lg" fontWeight="normal" color="green.600">Efetuar alguma ação</Heading>

                <Divider my="6" borderColor="green.500" />

                <VStack spacing="8">
                    <HStack minChildWidth="240px" spacing="8" w="100%">
                        <Input name="campo01" label="Campo 01" />
                        <Input name="campo02" label="Campo 02" /> 
                    </HStack>

                    <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                        <Input name="campo03" label="Campo 03" />
                        <Input name="campo04" label="Campo 04" />  
                    </SimpleGrid>
                </VStack>

                <Flex mt="8" justify="center">
                    <HStack spacing="4">
                        <Button colorScheme="green"> Submeter </Button>
                    </HStack>
                </Flex>
            </Box>
        // </Flex>
    )
}