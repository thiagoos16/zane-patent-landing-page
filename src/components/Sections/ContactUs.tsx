import { Box, Flex, VStack, Center, Text } from "@chakra-ui/react";

import { ContactUs } from "../Form/ContactUs";

export function ContatcUs() {
    return (
        <Center
            mt="6"
            // h="72"
            w="100%"
            bgColor=""
        >
            <Box align="center" id="talk_us">
                <Text fontSize="4xl" color="green.600" fontWeight="bold">
                    Fale conosco
                </Text>

                <ContactUs />
            </Box>
        </Center>
    )
}