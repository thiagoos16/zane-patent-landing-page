import {
    Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from "@chakra-ui/react";

import { ImageContainer } from "../../ImageContainer";

export function Search() {
    return (
        <Tabs>
            <TabList>
                <Tab>Intro</Tab>
                <Tab>Abrangência da busca</Tab>
                <Tab>Procedimentos para a busca nas Bases do INPI</Tab>
                <Tab>Pesquisa na base de dados do INPI</Tab>
            </TabList>

            <TabPanels sx={{"max-height": "calc(100vh - 300px)", "overflow-y":"auto"}}>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        A busca é muito importante já na fase inicial do
                        desenvolvimento de um produto e/ou processo para evitar gastos
                        desnecessários de tempo e recursos, uma vez que ao realiza-la, é
                        possível determinar o estado da técnica e averiguar se a invenção é
                        nova ou inventiva e identificar a natureza do invento.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        <b>Portanto, é fortemente recomendado que seja efetuada uma
                        busca prévia, antes do depósito de um pedido de patente, para
                        avaliar o estado da técnica relacionado à matéria a ser pleiteada, de
                        modo a averiguar se a invenção é nova ou inventiva.</b> Caso a invenção não seja nova, mas se for,
                        por exemplo, referente a uma melhoria funcional no objeto já existente, poderá ser depositado
                        um pedido de modelo de utilidade.
                    </Text>
                </TabPanel>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Como o estado da técnica (seção 2.6.1) abrange tudo aquilo
                        tornado público antes do depósito do pedido, a novidade é aferida a
                        nível mundial (seção 2.6.2). Ou seja, não basta ser novo para a
                        empresa ou para o mercado, deve ser novo considerando tudo que já
                        foi tornado público, seja por meio escrito, oral ou expositivo. Sendo
                        assim, é importante consultar diversas fontes.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Duas fontes se destacam por terem a maior probabilidade de
                        compreenderem os últimos achados em tecnologia: artigos
                        científicos (literatura não patentária) e os bancos de dados de pedidos de patente. No primeiro
                        caso, cada editora possui seu próprio banco de dados (em geral) restrito às suas publicações. Da
                        mesma forma, cada escritório de patente possui seu próprio banco de dados (em sua maioria)
                        restritos aos pedidos de patente depositados neste.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        A documentação de patentes é uma fonte de pesquisa muito importante. Estudos
                        apontam que 70% das informações tecnológicas contidas nestes documentos não estão
                        disponíveis em qualquer outro tipo de fonte de informação (Federman, S.R., 2006). De acordo
                        com a Organização Mundial da Propriedade Intelectual (OMPI), o número de pedidos de patente
                        depositados em 2017 foi de 3,17 milhões, sendo que, nesse ano, haviam 13,7 milhões de
                        patentes em vigor no mundo.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Tanto as patentes já concedidas, quanto os pedidos de patente publicados, contêm
                        informação tecnológica que pode ser útil para inventores, empresários e instituições de pesquisa.
                        Estes documentos, nacionais e estrangeiros, são disponibilizados em bases de patentes que
                        podem ser acessadas pela internet. Uma busca pode revelar que uma invenção não é nova, como
                        também a existência de outras soluções técnicas.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        A seguir são apresentadas as duas formas de executar uma busca na base de patentes do
                        INPI.
                    </Text>
                </TabPanel>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        O BuscaWeb é uma interface que está disponível no portal do INPI que permite consulta
                        a pedidos de patentes e patentes, depositados no Instituto, que já tenham sido publicados. As
                        publicações ocorrem semanalmente na Revista da Propriedade Industrial, a RPI, normalmente as
                        terças feiras, sendo o BuscaWeb atualizado entre 00:00 e 04:00.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        O BuscaWeb permite consultas em campos cadastrais do pedido ou patente como:
                        Número do Pedido; Número da GRU (nosso número); Número do Protocolo; bem como Título,
                        Resumo, Nome do Depositante, Nome do Inventor e CPF/CNPJ do Depositante.
                    </Text>
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
                    <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                        A seguir, deve ser selecionada a opção patentes.
                    </Text>
                    <ImageContainer 
                        title="Figura 2 - Página inicial do BuscaWeb (ou pePI)" 
                        imgSrc="/assets/figura-2-pagina-inicial-do-BuscaWeb.png"
                        subtitle="https://busca.inpi.gov.br/pePI/" 
                        subtitleLink="https://busca.inpi.gov.br/pePI/" 
                    />
                    <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                        Entre com login e senha ou então prossiga anonimamente apertando o botão continuar:
                    </Text>
                    <ImageContainer 
                        title="Figura 3 – tela de login do WebBusca" 
                        imgSrc="/assets/figura-3-tela-de-login-do-WebBusca.png"
                        subtitle="https://busca.inpi.gov.br/pePI/" 
                        subtitleLink="https://busca.inpi.gov.br/pePI/" 
                    />
                    <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                        Destacamos que a busca anônima não permite acesso as imagens de petições, mas os
                        campos disponíveis para as buscas são os mesmos.
                    </Text>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                        O INPI disponibiliza no BuscaWeb dois módulos para consulta: Pesquisa Básica e Pesquisa
                        Avançada. Ambos possibilitam a realização de buscas de patentes por qualquer interessado.
                    </Text>
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
                                    Após realizar o acesso no BuscaWeb, conforme apontado no item 3.2 é aberta a tela de
                                    pesquisa chamado de Pesquisa Básica.
                                </Text>
                                <ImageContainer 
                                    title="Figura 4 – Tela de pesquisa básica" 
                                    imgSrc="/assets/figura-4-Tela-de-pesquisa-basica.png"
                                    subtitle="https://busca.inpi.gov.br/pePI/" 
                                    subtitleLink="https://busca.inpi.gov.br/pePI/" 
                                />
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Na Pesquisa Básica, a busca pode ser feita pelo número
                                    do processo (pedido ou patente), pelo número de alguma GRU
                                    utilizada para o protocolo de qualquer petição apresentada ao
                                    INPI, pelo número de protocolo de qualquer petição ou ainda
                                    por palavras-chave (no título ou resumo), por nome do
                                    inventor ou depositante, ou ainda por CPF/CNPJ do
                                    depositante. Destacamos que ao passar o mouse no ícone “?”
                                    ao lado dos campos, são exibidas para o usuário informações
                                    que podem ajudá-lo a preenchê-los.
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Através do campo “Contenha”, poderão ser realizadas
                                    pesquisas ao digitar palavras e/ou números nas caixas de texto.
                                    Poderá ser escolhido se a(s) palavra(s) e/ou número(s) será(ão)
                                    recuperado(s) do Título ou Resumo, do Nome do Depositante ou
                                    CPF/CNPJ. Pode-se buscar as palavras-chave de quatro formas distintas: todas as palavras; a
                                    expressão exata; qualquer uma das palavras; a palavra aproximada.
                                </Text>
                                <ImageContainer 
                                    title="Figura 5 – Busca por palavras" 
                                    imgSrc="/assets/figure-5-busca-por-palavras.png"
                                    subtitle="https://busca.inpi.gov.br/pePI/" 
                                    subtitleLink="https://busca.inpi.gov.br/pePI/" 
                                />
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Caso selecionado “todas as palavras”, serão buscados documentos de patente que
                                    contenham todas as palavras, em qualquer ordem, mesmo que afastadas entre si. Caso alguma
                                    das palavras não esteja descrita, este documento de patente não será listado nos resultados.
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Se for selecionado “a expressão exata”, serão buscados os
                                    documentos de patente que contenham todas as palavras em
                                    sequência na ordem que foram digitadas. Esta busca é útil para
                                    identificar invenções relacionadas com palavras compostas, tais como
                                    “máquina de lavar roupas”.
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Na seleção de “qualquer uma das palavras”, serão buscados
                                    documentos de patente que contenham uma ou mais das palavras, em
                                    qualquer ordem, mesmo que afastadas entre si. Esse tipo de busca
                                    requer maior atenção, tomando o cuidado de não utilizar artigos,
                                    pronomes, ou termos muitos genéricos. Por exemplo, caso digitado na busca “máquina de lavar
                                    roupas”, aparecerão todos os documentos com a palavras “máquina”, todos os documentos com
                                    a palavra “de”, todas os documentos com a palavra “lavar” e todos os documentos com a palavra
                                    “roupas”.
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Caso selecionado “a palavra aproximada”, serão buscados
                                    documentos com pelo menos uma das palavras digitadas.
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    A busca deve tentar identificar as palavras mais significativas
                                    do documento de patente desejado. Isso garantirá o retorno de
                                    documentos mais relevantes. Termos genéricos, que se aplicam em
                                    muitos campos do conhecimento, devem ser evitados, pois retornam
                                    um número excessivo de documento, dificultando o trabalho de
                                    identificação do estado da técnica.
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Após selecionar os parâmetros desejados, é necessário clicar
                                    em “pesquisar &gt;&gt;”. Caso deseje apagar todos os termos digitados e reiniciar a busca, clique em
                                    “limpar”.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    2. Pesquisa avançada
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Para uma busca mais completa e detalhada, recomenda-se utilizar a “Pesquisa
                                    Avançada”, que permite criar consultas refinadas que ajudam a retornar resultados mais precisos.
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Acesse o BuscaWeb conforme explicado na aba anterior e clique na aba “Pesquisa Avançada”.
                                </Text>
                                <ImageContainer 
                                    title="Figura 6 – Pesquisa avançada no WebBusca" 
                                    imgSrc="/assets/figure-6-Pesquisa-avancada-no-WebBusca.png"
                                    subtitle="https://busca.inpi.gov.br/pePI/" 
                                    subtitleLink="https://busca.inpi.gov.br/pePI/" 
                                />
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    A Pesquisa Avançada no BuscaWeb está dividida em cinco blocos: Números, Datas,
                                    Classificação, Palavra chave e Depositante/Titular/Inventor. Ao clicar em "+" na frente do nome
                                    de cada bloco são abertos seus campos de busca.
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Realizar buscas utilizando a opção “Pesquisa Avançada”, resulta no retorno de
                                    documentos mais próximos do estado da técnica, para o pedido que se quer depositar, uma vez
                                    que possibilita a busca utilizando um maior número de opções que a pesquisa básica e permite
                                    a combinação dos campos de busca, que incluem a IPC, que como já mencionado anteriormente,
                                    auxilia na busca e recuperação de documentos de patente e serve de base para investigar o
                                    estado da técnica em determinados campos da tecnologia (item 2.10).
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    É recomendado que o depositante acesse a IPC antes de efetuar a busca, a fim de verificar
                                    em quais classificações podem ser encontrados documentos que se aproximem da matéria
                                    contida no pedido que se quer depositar. A utilização da IPC combinada com palavras chave no
                                    título ou no resumo, possibilita a recuperação de documentos, que provavelmente, servirão de
                                    base para a orientação do interessado em efetuar o depósito de um pedido de patente.
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Para efetuar buscas utilizando a IPC, deve ser empregada a
                                    forma mais completa possível da classificação, considerando, não
                                    apenas classes e sub-classes, mas também grupos e sub-grupos. Deve
                                    também ser considerado, que um pedido de patente pode receber
                                    mais de uma classificação (item 2.10), e que a IPC pode aparecer em
                                    qualquer posição, ou seja, não se limita a IPC principal.
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    A utilização da IPC combinada com palavra-chave, como já dito
                                    anteriormente, retorna documentos mais relevantes do estado da
                                    técnica. Como exemplo, tem-se um inventor cuja criação se refere a
                                    tratamento de resíduos com formação de adubo de matéria orgânica. Ao consultar a IPC, foi
                                    verificado que a classificação que melhor definia a invenção seria a classificação C02F 11/16. De
                                    posse dessa informação, o inventor efetuou a busca com a classificação selecionada, em
                                    combinação com a palavra chave “orgânica” no campo “Resumo”. O resultado da busca retornou
                                    4 processos que satisfaziam a pesquisa, dispostos em uma tabela, contendo o número do
                                    processo, a data de depósito, o título do processo e a classificação principal da matéria na IPC.
                                    Com o resultado da busca, o inventor tem a possibilidade de verificar se a matéria de sua criação
                                    é nova e inventiva, para depois efetuar o depósito de seu pedido de patente.
                                </Text>
                                <ImageContainer 
                                    title="Figura 7 – Resultado da busca" 
                                    imgSrc="/assets/figure-7-Resultado-da-busca.png"
                                    subtitle="https://busca.inpi.gov.br/pePI/" 
                                    subtitleLink="https://busca.inpi.gov.br/pePI/" 
                                />
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Para obter maiores informações sobre cada processo encontrado na busca, deve-se clicar
                                    no número do processo de cada documento de interesse (na lateral esquerda da tela, em verde).
                                    Ao clicar no número do processo, aparecem os dados bibliográficos do documento, como data
                                    de depósito, data de publicação, título da invenção, resumo, nome do depositante, nome do
                                    inventor, etc. Ficam também disponíveis, as petições e publicações referentes ao documento,
                                    em formato PDF, dispostos nas colunas Imagens e Img (andamento do processo no INPI). Alguns
                                    despachos publicados não contêm imagens, porém são acompanhados da descrição do
                                    despacho. Na parte inferior da página, encontram-se os documentos do processo que foram
                                    publicados pelo INPI.
                                </Text>
                                <ImageContainer 
                                    title="Figura 8 – Tela de acesso aos dados bibliográficos do pedido de patente selecionado" 
                                    imgSrc="/assets/figure-8-Tela-de-acesso-aos-dados-bibliografica.png"
                                    subtitle="https://busca.inpi.gov.br/pePI/" 
                                    subtitleLink="https://busca.inpi.gov.br/pePI/" 
                                />
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    É importante ressaltar, que a busca somente retorna os documentos que já foram
                                    publicados pelo INPI. <b> Portanto, essa busca não é exaustiva e podem haver pedidos de patente
                                    depositados que não aparecerão na busca. O número de resultados depende da data da
                                    pesquisa, devido à publicação de novos pedidos de patente, entre outros fatores.</b>
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Destacamos ainda que, a busca anônima não permite acesso as imagens de petições e
                                    publicações (item 3.2). Para ter acesso aos documentos publicados é necessário que o usuário
                                    faça acesso com seu login e senha. Para fazer o download do documento, basta clicar no
                                    documento desejado, que será visualizado na janela do navegador, no formato PDF e poderá ser
                                    impresso e/ou salvo.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    3. Pesquisa em bancos de dados de Patentes
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    A fim de orientar a realização de buscas de patentes através do BuscaWeb, assim como
                                    na internet, foi elaborado um passo a passo simplificado, com informações necessárias para
                                    descobrir detalhes sobre qualquer invento, que já pode ter sido alvo do interesse de pessoas e
                                    empresas, no Brasil e no exterior.
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Existem várias formas de fazer busca, sendo que, foi elaborado um 
                                    <a href="https://www.gov.br/inpi/pt-br/assuntos/informacao/guia-pratico-para-buscas-de-patentes">
                                        Guia Prático
                                    </a> para Buscas de Patentes. 
                                    <a href="https://www.gov.br/inpi/pt-br/assuntos/informacao/guia-pratico-para-buscas-de-
                                    patentes"> 
                                        https://www.gov.br/inpi/pt-br/assuntos/informacao/guia-pratico-para-buscas-de-
                                        patentes 
                                    </a>. O Guia Básico apresenta como fazer buscas em quatro bases de patentes, bem como
                                    guias de introdução à Classificação Internacional de Patentes (CIP ou IPC em inglês) e aos
                                    operadores utilizados em buscas de patentes.
                                </Text>
                                <ImageContainer 
                                    title="Figura 9 – Exemplo de bases de dados de patentes gratuitas" 
                                    imgSrc="/assets/figure-9-Exemplos-bases-de-dados-de-patentes-gratuitas.png"
                                    subtitle="elaboração própria" 
                                />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}