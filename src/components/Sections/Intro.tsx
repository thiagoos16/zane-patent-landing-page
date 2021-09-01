import { Box, Flex, VStack, Center, Text, Button, Image } from "@chakra-ui/react";

export function Intro() {
    return (
        <Center
            mt="20"
            h="72"
            w="100%"
            bgColor=""
        >
            <VStack>
                <Image
                    src="/assets/inovamazonpi-logo.png"
                />
                <Text fontSize="2xl">
                    Descubra todos os passos para registrar sua patente 
                </Text>
            </VStack>
        </Center>
    )
}