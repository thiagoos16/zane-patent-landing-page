import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
           "900": "#181B23",
           "800": "#1F2029",
           "700": "#353646",
           "600": "#4B4D63",
           "500": "#616480",
           "400": "#79709A",
           "300": "#9699B0",
           "200": "#B3B5C6",
           "100": "#D1D2DC",
           "50": "#EEEEF2"
        },
        green: {
            100: "#E5FCF1",
            200: "#27EF96",
            300: "#10DE82",
            400: "#0EBE6F",
            500: "#0CA25F",
            600: "#0A864F",
            700: "#086F42",
            800: "#075C37",
            900: "#064C2E"
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.900',
            }
        }
    }
});