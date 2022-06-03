import {
    Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from "@chakra-ui/react";

import { ImageContainer } from "../../ImageContainer";

export function OrderElaboration() {
    return (
        <Tabs>
            <TabList>
                <Tab></Tab>
                <Tab></Tab>
            </TabList>

            <TabPanels sx={{"max-height": "calc(100vh - 300px)", "overflow-y":"auto"}}>
                <TabPanel>
                    
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Para realizar a busca, acesse o portal do INPI em <a href="https://www.gov.br/inpi/pt-br"> https://www.gov.br/inpi/pt-br </a> e clique
                        no ícone BuscaWeb, contido na página inicial do site.
                    </Text>
                    <ImageContainer 
                        title="Figura 1 - Página inicial do INPI" 
                        imgSrc="/assets/figura-1-pagina-inicial-do-INPI.png"
                        subtitle="https://www.gov.br/inpi/pt-br" 
                        subtitleLink="https://www.gov.br/inpi/pt-br" 
                    />
                </TabPanel>
                <TabPanel>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    1. Pesquisa Básica
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    
                                </Text>
                                
                                <ImageContainer 
                                    title="" 
                                    imgSrc=""
                                    subtitle="" 
                                    subtitleLink="" 
                                />
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Após selecionar os parâmetros desejados, é necessário clicar
                                    em “pesquisar &gt;&gt;”. Caso deseje apagar todos os termos digitados e reiniciar a busca, clique em
                                    “limpar”.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}