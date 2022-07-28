import { Box, Divider, Flex, Heading, VStack, Textarea, HStack, Button, FormLabel, FormControl } from "@chakra-ui/react";
import { Input } from "./Input";

export function ContactUs() {
    return (
        // <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Box maxW="1000px" borderRadius={8} bg="white" p="8">
                <Heading size="lg" fontWeight="normal" color="green.600"></Heading>

                <Divider my="6" borderColor="green.500" />

                <VStack spacing="8">
                    <VStack minChildWidth="240px" spacing="8" w="100%">
                        <Input name="Nome" label="Nome" />
                    </VStack>

                    <HStack minChildWidth="240px" spacing="8" w="100%">
                        <Input name="Email" label="Email" /> 
                        <Input name="Whatsapp" label="Whatsapp" />
                    </HStack>

                    <HStack minChildWidth="240px" spacing="8" w="100%">
                        <FormControl>
                            <FormLabel color="green.900" htmlFor="Mensagem"> Mensagem </FormLabel>
                            <Textarea 
                                name="Mensagem" 
                                variant="filled"
                                focusBorderColor="green.500"
                                bgColor="green.500"
                                _hover={{
                                    bgColor: "green.900"
                                }}
                                size="lg"
                            />
                        </FormControl>
                    </HStack>
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