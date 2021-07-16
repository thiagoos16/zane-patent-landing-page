import { Box, Flex, VStack, Center, Text, Button } from "@chakra-ui/react";

export function Intro() {
    return (
        <Center
            mt="6"
            h="72"
            w="100%"
            bgColor=""
        >
            <VStack>
                <Text fontSize="4xl">
                    Simulador de <Text as="span" color="green.400" fontWeight="bold" > Patente </Text>
                </Text>
                <Text fontSize="2xl">
                    Com o zanePatent você pode simular sua patente. 
                </Text>
                <Button as="a" size="lg" fontSize="lg" colorScheme="green">
                    Simular
                </Button>
            </VStack>
        </Center>
    )
}