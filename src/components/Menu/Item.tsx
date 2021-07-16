import { Box, Link, InputProps as ChakraInputProps  } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string;
} 

export function MenuItem({ name }: InputProps) {
    return (
        <Box>
            <Link> { name } </Link>
        </Box>
    )
}