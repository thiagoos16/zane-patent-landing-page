import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
} 

export function Input({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>
            { !!label && <FormLabel color="green.900" htmlFor={name}>{label}</FormLabel> }
            
            <ChakraInput 
                name={name}
                id={name}
                focusBorderColor="green.500"
                bgColor="green.500"
                variant="filled"
                _hover={{
                    bgColor: "green.900"
                }}
                size="lg"
                {...rest}
            />
        </FormControl>
    )
}