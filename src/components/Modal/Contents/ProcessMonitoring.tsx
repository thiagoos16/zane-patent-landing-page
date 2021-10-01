import {
    Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from "@chakra-ui/react";

import { ImageContainer } from "../../ImageContainer";

export function ProcessMonitoring() {
    return (
        <Tabs>
            <TabList>
                <Tab>Intro</Tab>
                <Tab>Acompanhar as decisões</Tab>
                <Tab>Compreendendo as decisões</Tab>
                <Tab>Principais fases do pedido de patente</Tab>
                <Tab>Exploração efetiva de patente</Tab>
                <Tab>Solucionando problemas</Tab>
            </TabList>

            <TabPanels sx={{"max-height": "calc(100vh - 300px)", "overflow-y":"auto"}}>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Após a apresentação da documentação, o usuário deve ficar atento a eventuais exigências
                        e demais necessidades do rito processual. A depender do tipo de pedido de patente (nacional ou
                        internacional), uma parte do processamento será diferente. É importante saber essa diferença,
                        pois as decisões do INPI (representadas por códigos de despacho) serão diferenciadas. Apesar
                        dessas diferenças, a forma de acompanhamento é a mesma. Sendo assim, as seções abaixo
                        apresentam as formas de acompanhamento e o fluxo de pedidos nacionais.
                    </Text>
                </TabPanel>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        <b>O acompanhamento da tramitação do Pedido de Patente é de inteira responsabilidade
                        do usuário</b>. Há mais de uma forma de acompanhamento do pedido ou da patente de invenção e
                        de modelo de utilidade ou certificado de adição de invenção e suas petições relacionadas.
                    </Text>
                    <br/>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        1. Acompanhamento por meio da Revista da Propriedade
                                        Industrial
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A <a href="http://revistas.inpi.gov.br/rpi/">Revista da Propriedade Industrial (RPI)</a> é o meio de
                                    comunicação oficial do INPI. A publicação da RPI ocorre todas as
                                    terças-feiras, exceto em feriados, quando é publicada no primeiro dia
                                    útil imediatamente subsequente.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A observância da data de publicação na RPI é importante, pois
                                    inicia a contagem dos prazos legais aplicáveis. A inobservância dos
                                    prazos (não responder no prazo) pode significar o arquivamento do
                                    pedido de patente.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O INPI disponibiliza ainda a RPI em formato TXT com a finalidade de auxiliar a leitura dos
                                    dados divulgados na revista por sistemas particulares de gestão e acompanhamento de
                                    processos. Este formato, todavia, não é o meio oficial de publicação do INPI.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Para acompanhar a RPI deverá ser acessado na Página do INPI, o ícone “Revista da
                                    Propriedade Industrial”, conforme figura abaixo.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    
                                </Text>
                                <ImageContainer 
                                    title="Figura 56 – Acesso às Revistas da Propriedade Industrial (RPI)" 
                                    imgSrc="/assets/figure-56-Acesso-as-Revistas-da-Propriedade-Industrial.png"
                                    subtitle="https://www.gov.br/inpi/pt-br" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Cada serviço prestado pelo INPI está disponível em uma seção diferente. Para acessar as
                                    decisões dos atos administrativos (também chamadas de despachos) relacionados com pedidos
                                    de patentes ou patentes, é necessário baixar o documento PDF constante na seção VI – Patentes,
                                    conforme a figura abaixo.
                                </Text>
                                <ImageContainer 
                                    title="Figura 57 – Seleção das Revistas de Propriedade Industrial" 
                                    imgSrc="/assets/figure-57-Selecao-das-Revistas-de-Propriedade-Industrial.png"
                                    subtitle="http://revistas.inpi.gov.br/rpi/" 
                                    subtitleLink="http://revistas.inpi.gov.br/rpi/" 
                                />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </TabPanel>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        As decisões do INPI são padronizadas e valem para todos os pedidos de patente. Neste
                        sentido, elas foram agrupadas sob códigos que indicam atos e decisões do INPI sob o pedido de
                        patente e/ou certificado de adição.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Uma lista atualizada dos códigos é publicada semanalmente, na RPI. Os códigos ficam em
                        uma lista separada das decisões. Para acessar os códigos, clique em “Códigos e Abreviações”,
                        conforme pode ser visualizado na figura acima.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        O arquivo de códigos e abreviações também está separado por seções – que mais ou
                        menos correspondem às etapas do pedido de patente. Cada seção apresenta os códigos de
                        despacho, o título do despacho e a descrição, como apresentado na figura abaixo.
                    </Text>
                    <ImageContainer 
                        title="Figura 58 – Exemplo de códigos de despacho de pedidos de patente" 
                        imgSrc="/assets/figure-58-Exemplo-de-codigos-de-despacho-de-pedidos-de-patente.png"
                        subtitle="http://revistas.inpi.gov.br/rpi/#" 
                        subtitleLink="http://revistas.inpi.gov.br/rpi/#" 
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Ao clicar no ícone Revista da Propriedade industrial, na página inicial do INPI, será aberta
                        uma página na qual são apresentadas as últimas 7 (sete) RPIs publicadas. Para acessar Revistas
                        anteriores, é necessário efetuar uma busca, clicando no link “Buscar Patentes”. Esta busca
                        poderá ser efetuada por número da RPI ou por data de sua publicação.
                    </Text>
                    <ImageContainer 
                        title="Figura 59 – Busca da RPI por data ou por número" 
                        imgSrc="/assets/figure-59-Busca-da-RPI-por-data-ou-por-numero.png"
                        subtitle="http://revistas.inpi.gov.br/rpi/#" 
                        subtitleLink="http://revistas.inpi.gov.br/rpi/#" 
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Inicialmente, o usuário deve escolher a RPI que deseja consultar e clicar no formato PDF
                        para abrir o documento. Para verificar se foi publicado algum despacho para o pedido de patente
                        ou patente que se quer consultar na RPI selecionada, não é necessário ler toda a Revista. Clicando
                        nas teclas “Ctrl” e “F”, ao mesmo tempo, será aberta uma pequena janela de busca, no canto
                        direito do documento. Se o pedido de patente ou patente for iniciado com as letras PI ou MU,
                        deverá ser inserido nessa janela de busca o número inteiro do processo (exemplo – PI0709510-
                        4). No caso do pedido de patente ou patente iniciar com BR, deverá ser inserido apenas os seis
                        números da ordem de depósito (exemplo: para BR20 2020 019608-7, inserir apenas 019608) e
                        clicar em próximo. O programa levará ao processo que se quer consultar. Caso não tenha sido
                        publicado nenhum despacho para o processo na RPI consultada, aparecerá a mensagem “Não foi
                        encontrada nenhuma ocorrência”.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        De acordo com o despacho publicado, o conteúdo será disponível junto ao número do
                        processo. Pode ser um despacho de exigência, de transferência de titularidade ou qualquer outro
                        serviço solicitado ao INPI. Na RPI é possível consultar apenas as descrições dos despachos, como
                        observado na figura abaixo. O conteúdo da exigência estará disponível em PDF, podendo ser
                        acessado por meio da Pesquisa na Base de Patentes (ver seção 6.2.1).
                    </Text>
                    <ImageContainer 
                        title="Figura 60 – exemplo de descrição do despacho na RPI" 
                        imgSrc="/assets/figure-60-exemplo-de-descricao-do-despacho-na-RPI.png"
                        subtitle="RPI"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Caso o despacho se refira a algum tipo de exigência, haverá um prazo determinado pela
                        LPI para cumpri-la, contados a partir do primeiro dia útil subsequente à data da referida
                        publicação. Por exemplo, para exigências formais em pedidos nacionais, o prazo é de 30 (trinta)
                        dias, sob pena do depósito ser considerado inexistente; e para pedidos internacionais as
                        exigências devem ser respondidas em até 60 (sessenta) dias, sob pena da entrada na fase
                        nacional ser considerada retirada.
                    </Text>
                    <br/>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        1. Acompanhamento por meio da pesquisa na Base de Patentes
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O acompanhamento do pedido ou da patente de
                                    invenção e de modelo de utilidade ou certificado de adição
                                    de invenção por meio da pesquisa na Base de Patentes
                                    representa um mecanismo acessório de acompanhamento e
                                    não o meio oficial, que é a Revista da Propriedade Industrial.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Somente estarão disponíveis para consulta os
                                    pedidos que já receberam a notificação de depósito (código
                                    2.10) ou a notificação de apresentação de entrada na fase
                                    nacional do PCT (código 1.1), publicados na RPI. Portanto,
                                    não há como utilizar este mecanismo de acompanhamento
                                    se o pedido ainda não teve a notificação de depósito ou a notificação de entrada em fase
                                    nacional, publicados.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Para efetuar pesquisa na Base de Patentes, o usuário deverá ter em mãos o número do
                                    pedido/patente para o qual deseja realizar a pesquisa e clicar no link “BuscaWeb”, que se
                                    encontra no portal do INPI, conforme descrito no item 3.2.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Selecionando a opção patentes, será aberta a janela para inserir o login e senha do
                                    usuário e aparecerá a tela de pesquisa básica (item 3.3). Uma vez na Base de Patentes, realizar a
                                    pesquisa com base nos parâmetros desejados:
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Uma vez inserido o número do pedido de patente, basta clicar em “Pesquisar”. Será
                                    exibida uma tela contendo informações básicas do pedido ou patente, todas as petições
                                    (solicitações) realizadas pelo depositante para este pedido ou patente e todas as publicações
                                    (atos e decisões do INPI) para este pedido ou patente.
                                </Text>
                                <ImageContainer 
                                    title="Figura 61 – Dados do pedido de patente no WebBuscas" 
                                    imgSrc="/assets/figure-61-Dados-do-pedido-de-patente-no-WebBuscas.png"
                                    subtitle="https://busca.inpi.gov.br/pePI/" 
                                    subtitleLink="https://busca.inpi.gov.br/pePI/" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O ponto importante para acompanhar o pedido ou patente está na tabela “Publicações”.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Nesta tabela é apresentada a RPI na qual ocorreu a publicação (na coluna 1); a data da
                                    publicação da RPI (coluna 2); o código do despacho (ações e decisões do INPI) (coluna 3); a
                                    imagem do parecer que ensejou o despacho, caso exista (coluna 4); o complemento do despacho,
                                    caso exista (coluna 5).
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Caso o usuário deseje saber o título do despacho e a sua descrição, basta posicionar o
                                    cursor do mouse sobre o código de despacho correspondente. Alternativamente, é possível obter
                                    este título e descrição na tabela de despachos (veja como acessar a tabela de despachos no item
                                    6.2).
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Há duas formas de o INPI detalhar suas decisões: através do complemento do Despacho
                                    e através de pareceres. Pode ser observado no exemplo acima que os despachos ou tem um
                                    parecer associado (coluna com título Img) ou tem um texto na coluna com título “Complemento
                                    do Despacho”.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Deve também ser observado, que para cada petição apresentada pelo depositante, há
                                    uma ação do INPI. Por exemplo, foi protocolada uma petição de requerimento de trâmite
                                    prioritário com a GRU 263, protocolo número 870190061273, de 01/07/19. No dia 13/08/19,
                                    este requerimento foi concedido com a publicação do código de despacho 28.30. O número do
                                    protocolo e sua data constam no complemento de despacho da decisão.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        2. Acompanhamento por meio dos “Meus pedidos” na Base de Patentes
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>   
                                    O usuário tem a opção de selecionar o processo e incluí-lo em
                                    "Meus Pedidos", sistema que avisa por e-mail quando houver
                                    movimentação do processo. Este é um serviço adicional prestado pelo
                                    INPI e também não substitui a consulta à RPI. Para a utilização dessa
                                    ferramenta, o usuário deve entrar no BuscaWeb, com seu login e sua
                                    senha, não sendo possível acessá-la entrando anonimamente.    
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Na nova tela, insira o número de processo no campo
                                    correspondente e clique em pesquisar. E seguida, clique no
                                    quadradinho à esquerda, junto ao campo número.
                                </Text>
                                <ImageContainer 
                                    title="Figura 62 – Seleção dos “Meus pedidos”" 
                                    imgSrc="/assets/figure-62-Selecao-dos-Meus-pedidos.png"
                                    subtitle="https://busca.inpi.gov.br/pePI/"
                                    subtitleLink="https://busca.inpi.gov.br/pePI/"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Aparecerá a mensagem: Atualizando a lista de Meus Pedidos. Clicando em “ok”, o pedido
                                    foi cadastrado nos “Meus pedidos” e o usuário será notificado sempre que houver alguma
                                    alteração no processo. Se o depositante possuir mais de um pedido, o procedimento deverá ser
                                    repetido para cada um deles.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Ressalta-se que, esse cadastramento não substitui a consulta a RPI, pois caso o e-mail do
                                    usuário não esteja configurado corretamente, o e-mail enviado pelo INPI poderá ser enviado para
                                    a Caixa de Spam/Lixo eletrônico.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    É de inteira responsabilidade do usuário o cumprimento de suas obrigações, decorrentes
                                    ou não dos despachos publicados na RPI. Desta forma, o usuário deve acompanhar o(s) seus(s)
                                    processos de patente semanalmente através da Revista.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        {/* <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        2. 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>       
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                </Text>
                                <ImageContainer 
                                    title="" 
                                    imgSrc="/assets/"
                                    subtitle=""
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    
                                </Text>
                            </AccordionPanel>
                        </AccordionItem> */}
                    </Accordion>
                </TabPanel>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        O processo do pedido de patente passará por diferentes etapas. Na Figura 63,
                        apresentam-se as principais fases do pedido de patente. As ações do interessado / requerente
                        estão destacadas em vermelho – perceba que elas estão atreladas a geração de uma GRU com
                        Código de Serviço (CS) determinada. As ações e decisões do INPI estão destacadas em azul –
                        perceba que elas são emitidas por Códigos de Despacho (CD). Importante destacar que este é
                        um passo-a-passo esquemático com fins didáticos - na prática poderá haver outras etapas, bem
                        como as etapas podem ocorrer em ordem diferente.           
                    </Text>
                    <ImageContainer 
                        title="Figura 63 – Principais etapas do processo do pedido de patente" 
                        imgSrc="/assets/figure-63-Principais-etapas-do-processo-do-pedido-de-patente.png"
                        subtitle="elaboração própria; Legenda: CS: código de serviço (ações do depositante em vermelho); CD: Códigos de Despacho (ações do INPI em
                            azul);"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Após a apresentação dos documentos de depósito ao INPI pelo sistema de
                        Peticionamento Eletrônico, o pedido será cadastrado na base do INPI. Ao concluir esta fase, o
                        INPI irá publicar o código de despacho 2.10 que corresponde ao “Requerimento de Pedido de
                        Patente ou Certificado de adição”.         
                    </Text>
                    <br/>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        1. Exame formal
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Neste momento o pedido é encaminhado para o Setor de Exame Formal para a verificação
                                    da documentação e das condições mínimas para recebimento do Pedido de Patente ou do
                                    Certificado de Adição (conteúdo técnico, formulário de requerimento e pagamento da
                                    retribuição relativa ao depósito).     
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Caso o pedido protocolizado não atenda formalmente ao disposto no artigo 19 da LPI
                                    e/ou às demais disposições quanto à sua forma, de acordo com a Instrução Normativa nº
                                    31/2013, será publicado o despacho de exigência (Código 2.5) na RPI para cumprimento de
                                    exigências formais, conforme estipulado no art. 21 da LPI.
                                </Text>
                                <ImageContainer 
                                    title="Figura 64 – Modelo de opinião preliminar" 
                                    imgSrc="/assets/figure-64-Modelo-de-opiniao-preliminar.png"
                                    subtitle="RPI"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O parecer poderá ser acessado via Busca-web (seção 6.2.1). Um modelo de parecer de
                                    exigência formal encontra-se abaixo:
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        2. Respondendo exigências formais
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    <a>O prazo para cumprimento da exigência formal é de 30
                                    (trinta) dias corridos contados do 1º dia útil após essa publicação
                                    (não confunda o prazo de 30 dias com 1 mês, nem com 31 dias!)</a>. A
                                    petição deve ser protocolada por meio do código de serviço 206,
                                    objeto da petição “Cumprimento de exigência decorrente de exame
                                    formal” (isento de retribuição). Para gerar a GRU é necessário estar
                                    cadastrado no sistema do INPI (item 5.1); e consultar a tabela de
                                    retribuição da diretoria de patentes (item 5.2).   
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No momento de gerar a GRU (item 5.3), seus dados já estarão preenchidos, conforme as
                                    informações apresentadas no cadastro. Caso você seja um procurador, será necessário
                                    selecionar um cliente. Clique na “Lupa” e localize seu cliente pelo nome ou pelo CPF/CNPJ.
                                </Text>
                                <ImageContainer 
                                    title="Figura 65 – Localização do cliente para responder exigência" 
                                    imgSrc="/assets/figure-65-Localizacao-do-cliente-para-responder-exigencia.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes"
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Em “Dados do Serviço”, no campo “Tipo de Serviço”, selecione “Patente de Invenção e
                                    Modelo de Utilidade”. Neste momento, a caixa “Serviço” ficará disponível para seleção. Selecione
                                    <b>“Cumprimento de exigência decorrente de exame formal (206)”</b>.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Nesse momento, aparecerão outras duas caixas de informação. Em “O objeto da petição
                                    se refere a”, selecione “Cumprimento de exigência decorrente de exame formal”. Na caixa
                                    “Processo administrativo”, informe o número do pedido de patente no seguinte formato:
                                    ZZXXXXYYYYYY-K (exemplo: 102021009290-4, conforme item 5.6.1).
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Uma janela com uma prévia do serviço solicitado e o valor aparecerá na tela. O usuário
                                    deverá conferir o serviço desejado e o valor do serviço em questão. Para finalizar, o usuário
                                    deverá clicar em "Gerar boleto". Caso tenha se enganado quanto à escolha do serviço ou ao
                                    preenchimento de quaisquer outras informações durante essa fase, acionar o botão "Cancelar
                                    Serviço".
                                </Text>
                                <ImageContainer 
                                    title="Figura 66 – seleção do serviço de cumprimento de exigência formal" 
                                    imgSrc="/assets/figure-66-selecao-do-servico-de-cumprimento-de-exigencia-formal.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes"
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Uma vez que o cumprimento de exigência formal se trata de um serviço gratuito, não será
                                    possível imprimir a GRU, nem a salvar em arquivo PDF. Ao clicar em “Gerar boleto” será
                                    informado o número da GRU (“Nosso Número”). Anote esse número e guarde, porque será
                                    necessário para o peticionamento eletrônico”.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Após gerar a GRU, é necessário acessar e preencher o formulário eletrônico. Após inserir
                                    seu login e senha e clicar em “Acessar”, o usuário deverá inserir o número da GRU, no campo
                                    “Nosso Número”, conforme descrito no item 5.5.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Ao inserir o número da GRU no campo apropriado, o usuário terá acesso ao formulário
                                    eletrônico, que reproduzirá as informações do depositante, do processo de patente e dados do
                                    procurador com base nas informações coletadas no banco de dados do INPI. <a> Exceto pela
                                    nacionalidade do depositante (que é de preenchimento obrigatório), não será aconselhável
                                    alterar essas informações. No caso de identificação de inconsistência, deve ser gerada uma
                                    nova GRU.</a>
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O interessado deve anexar os documentos a serem enviados, de acordo com as exigências
                                    formuladas (item 6.3.1). O envio dos anexos é efetuado da mesma forma que os apresentados
                                    no momento do depósito (ver item 5.5.12). O usuário deverá (a) escolher o tipo de anexo que
                                    deseja inserir, (b) clicar no botão “Adicionar” e em seguida (c) selecionar, no seu computador o
                                    arquivo em formato PDF, que deseja anexar no formulário eletrônico. Após estes três passos o
                                    anexo constará no formulário eletrônico, que também apresentará o nome selecionado para o
                                    arquivo.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Serão emitidas tantas exigências formais quanto se fizerem necessárias para o
                                    atendimento das condições formais. Caso a exigência formal não seja respondida no prazo, o
                                    pedido não será aceito e sua numeração será anulada. Essa informação será publicada através
                                    do código de despacho [15.21] - “Numeração Anulada”. A decisão de Numeração Anulada, não
                                    publica nenhum tipo de informação sobre a matéria do pedido, sendo possível que o depositante
                                    inicie um novo processo de mesmo teor, por meio da emissão de uma nova GRU 200,
                                    peticionando novo protocolo de depósito.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        3. Protocolização do depósito (pedido efetivamente depositado / aceito pelo INPI)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Quando o pedido estiver atendendo formalmente ao disposto no artigo 19 da LPI e/ou às
                                    demais disposições quanto à sua forma ou após cumprimento das exigências formais, será
                                    publicado o despacho 2.1 na RPI notificando o “Pedido de Patente protocolizado”. <b>É neste
                                    momento que você tem um pedido de patente em seu sentido pleno.</b>     
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        4. Publicação
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>  
                                    A publicação do pedido está relacionada a disponibilização da matéria depositada no INPI.
                                    Para tanto será gerado um folheto de publicação revelando a matéria reivindicada (conforme
                                    descrito no item 2.3. Via de regra, o pedido será mantido em sigilo por 18 meses a contar da sua
                                    data de depósito (ou data do depósito) ou da data de sua prioridade mais antiga, conforme Art.
                                    30 da LPI que estabelece:     
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Art. 30. O pedido de patente será mantido em sigilo durante 18 (dezoito) meses contados
                                    da data de depósito ou da prioridade mais antiga, quando houver, após o que será publicado, à
                                    exceção do caso previsto no art. 75.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    § 1º A publicação do pedido poderá ser antecipada a requerimento do depositante.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    § 2º Da publicação deverão constar dados identificadores do pedido de patente, ficando
                                    cópia do relatório descritivo, das reivindicações, do resumo e dos desenhos à disposição do
                                    público no INPI.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    § 3º No caso previsto no parágrafo único do art. 24, o material biológico tornar-se-á
                                    acessível ao público com a publicação de que trata este artigo.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Destacamos que para a publicação ocorrer, obrigatoriamente o pedido deve: a) ter sido
                                    aceito formalmente (pedido nacional e CUP) ou ter sido admitido em fase nacional (pedido via
                                    PCT); b) ter cumprido o período de sigilo ou c) ter sido solicitada a publicação antecipda.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Para pedidos Nacional ou CUP é publicado na RPI o despacho 3.1 e para pedidos PCT é o
                                    despacho 1.3. Não é necessária qualquer ação do depositante para a publicação do pedido após
                                    o período de 18 meses.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    É importante destacar, que publicação pode ocorrer em prazo inferior a 18 meses,
                                    conforme estabelecido no § 1º da Art 30, mas só ocorrerá quando solicitada pelo requerente e,
                                    nesse caso, será publicado o despacho 3.2 na RPI.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No caso de certificado de adição de invenção, o prazo de sigilo é de 18 (dezoito) meses
                                    contado da data de depósito do pedido principal. Quando houver ocorrido a publicação do
                                    pedido principal, o pedido de certificado de adição de invenção será imediatamente publicado.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        5. Pagamento de anuidades
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>  
                                    Anuidade é a retribuição anual a que estão sujeitos os
                                    pedidos de patente e de certificado de adição de invenção, bem
                                    como as patentes e certificados de adição de invenção já
                                    concedidos. Os objetivos são de assegurar o andamento do pedido
                                    de patente ou de certificado de adição de invenção enquanto estes
                                    não forem concedidos, ou seja, ao longo do período de tramitação
                                    do processo e assegurar a manutenção dos direitos conferidos após
                                    a concessão da patente ou do certificado de adição de invenção.     
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O primeiro recolhimento de anuidade é devido a partir do
                                    início do 3º ano contato da apresentação dos documentos para o
                                    depósito. Na prática, o início do terceiro ano é quando se completam 2 anos (24 meses).
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A anuidade pode ser paga no prazo ordinário ou no prazo extraordinário. O prazo
                                    ordinário corresponde aos 03 (três) meses subsequentes a data do depósito. O prazo
                                    extraordinário corresponde aos próximos 06 (seis) meses ao fim do prazo ordinário. Ou seja, a
                                    partir do aniversário da data do depósito o interessado tem um total de 9 meses para pagar a
                                    anuidade. Caso o pagamento seja efetuado no prazo extraordinário haverá acréscimo no valor
                                    da anuidade.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O exemplo abaixo ajuda a compreensão dos prazos do primeiro recolhimento de
                                    anuidade (3ª anuidade) de um pedido de patente (para patentes concedidas, os códigos de
                                    despacho são outros).
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
            
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
            
                                </Text>
                                <ImageContainer 
                                    title="Figura 67 – Esquemático dos prazos para anuidade" 
                                    imgSrc="/assets/figure-67-Esquematico-dos-prazos-para-anuidade.png"
                                    subtitle="elaboração própria."
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    As anuidades do pedido de patente têm um valor fixo, independente da data de depósito,
                                    até sua concessão. Uma vez concedida a patente, as anuidades tem um valor crescente contado
                                    da data da concessão da patente. Os valores de anuidades de patente crescem dentro das faixas
                                    do 3º ao 6º, do 7º ao 10º, do 11º ao 15º ano, etc. É importante destacar que o pagamento de
                                    anuidades para patentes, somente tem início após a patente ser concedida, com a publicação
                                    do despacho 16.1.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A ferramenta de prazos de anuidade disponível no site do INPI tem o caráter informativo
                                    e a intenção de auxiliar o usuário para saber qual o próximo prazo para a anuidade a ser
                                    recolhida, além de verificar se as demais anuidades foram aceitas ou não. Qualquer eventual
                                    débito com relação às retribuições anuais é publicado na RPI abrindo o devido prazo legal para
                                    manifestação.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Para gerar a GRU para pagamento de anuidades, é necessário estar cadastrado no sistema
                                    do INPI (seção 5.1) e consultar a tabela de retribuição da diretoria de patentes (5.2). No momento
                                    de gerar a GRU (seção 5.3), seus dados já estarão preenchidos, conforme as informações
                                    apresentadas no cadastro. Caso você seja um procurador, será necessário selecionar um cliente,
                                    clicando na lupa e localizando o cliente pelo nome ou pelo CPF/CNPJ.
                                </Text>
                                <ImageContainer 
                                    title="Figura 68 – Seleção dos serviços de pagamento de anuidade" 
                                    imgSrc="/assets/figure-68-Selecao-dos-serviços-de-pagamento-de-anuidade.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes"
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Ao gerar a GRU para pagamento de anuidades, no campo “Tipo de Serviço”, selecione
                                    “Patente de Invenção e Modelo de Utilidade”. Neste momento, a caixa “Serviço” ficará disponível
                                    para seleção. Selecione um dos casos, conforme o Figura 69.
                                </Text>
                                <ImageContainer 
                                    title="Figura 69 - Códigos de serviço (para gerar a GRU) das anuidades" 
                                    imgSrc="/assets/figure-69-Codigos-de-servico-para-gerar-a-GRU-das-anuidades.png"
                                    subtitle="elaboração própria"
                                />
                                <ImageContainer 
                                    title="Figura 70 – Observações importantes sobre os códigos de serviço" 
                                    imgSrc="/assets/figure-70-Observacoes-importantes-sobre-os-codigos-de-servico.png"
                                    subtitle="elaboração própria"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O pagamento de anuidades para patente de invenção ou de modelo de utilidade, é
                                    contado a partir da data do depósito. Assim, para um pedido de patente depositado em 2013,
                                    cuja patente foi concedida em 2020, a anuidade a ser paga é a referente aquela do 7º ao 10º
                                    ano.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    É importante ressaltar que anuidades nunca devem ser pagas antecipadamente, pois
                                    essas não são reconhecidas pelo INPI (em virtude do disposto no art. 3º, da resolução 113/2013),
                                    exceto no caso de a patente estar concedida e que o pagamento cubra todo o período restante
                                    de vigência. Se o interessado tenha feito algum pagamento de anuidade antecipado, poderá ser
                                    solicitada a restituição, através de processo de restituição de retribuição
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No caso do não pagamento da anuidade no prazo legal o pedido de patente será
                                    arquivado. A informação do arquivamento ocorrerá com a publicação do despacho de código
                                    [8.6]. A partir dessa publicação, há ainda um prazo de três meses para o requerimento de
                                    restauração que deve ocorrer junto ao pagamento da anuidade em atraso, no valor do prazo
                                    extraordinário.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    É importante ressaltar que, tanto o pagamento da anuidade no valor do prazo
                                    extraordinário quanto o pagamento da taxa de restauração devem ser efetuados dentro dos 3
                                    meses contados da publicação do 8.6 (para pedidos) ou do 21.6 (para patentes concedidas). É
                                    muito importante observar que, com os fluxos de exame prioritário, há patentes sendo
                                    concedidas antes do início da 3ª anuidade. Neste caso é importante pagar a GRU correta.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Caso não seja paga a anuidade, nem solicitada a
                                    restauração, o pedido de patente será arquivado definitivamente
                                    ou a patente será extinta definitivamente. Se for feito o
                                    pagamento da restauração e da anuidade no valor do prazo
                                    ordinário, será feita uma exigência para complementar a
                                    anuidade para o valor do prazo extraordinário. Caso seja apenas
                                    solicitada a restauração, dentro do prazo de 3 meses contados do
                                    arquivamento, sem que seja efetuado o pagamento da anuidade
                                    vencida com valor do prazo extraordinário, o serviço de
                                    restauração será dado como “petição não conhecida”, e deverá
                                    ser paga a anuidade para que a solicitação de restauração seja reconhecida.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Cabe lembrar que a restauração pode ser requerida somente pelo depositante ou o titular
                                    e por seu(s) procurador(es) devidamente habilitado(s). Devendo ser observado o contido no art.
                                    87, da LPI (referente à restauração) e o art. 216, também da LPI, a respeito da procuração.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Com a publicação da portaria 302, de 12/08/2020, fica dispensada a obrigatoriedade do
                                    peticionamento dos serviços de restauração (solicitados através do código de serviço 208), para
                                    os casos de anuidade, e desarquivamento (com código de serviço 209), para o caso de não ter
                                    sido requerido o pedido de exame. Ou seja, os pagamentos das GRUs 208 e 209 feitos a partir
                                    de 1/09/2020 não estão mais sujeitos ao peticionamento.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        6. Requerimento de exame técnico
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>       
                                    O exame do pedido de patente deverá ser requerido em até 36 meses contados da data
                                    do depósito. O requerimento de exame pode ser efetuado pelo próprio depositante ou por
                                    terceiros. Devesse atentar para o fato que, caso não seja pago o exame no prazo estipulado, o
                                    pedido de patente será arquivado (despacho 11.1 - art. 33 da LPI), podendo ser arquivado
                                    definitivamente, se não for solicitado o seu desarquivamento dentro de 60 dias da data de
                                    publicação do arquivamento inicial (despacho 11.1.1 - parágrafo único do art. 33 da LPI).
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Para solicitar o desarquivamento do pedido para o qual foi publicado o despacho 11.1
                                    (arquivamento por falta de requerimento de exame), deverão ser geradas e pagas as retribuições
                                    referentes ao desarquivamento (GRU 209) e a GRU referente ao pedido de exame.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O requerimento de desarquivamento passa por avaliação técnica do INPI, quanto
                                    aos prazos e valores devidos, podendo sofrer exigências para esclarecimentos e
                                    complementação, sendo que, a não manifestação do depositante no prazo de 90 dias, ocasiona
                                    o arquivamento definitivo do pedido (despacho 11.1.1). Para os requerimentos de
                                    desarquivamento que estiverem de acordo com as normas legais, será publicado o despacho 4.3,
                                    referente ao desarquivamento (parágrafo único do art. 33 da LPI).
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Há diferentes GRUs para o requerimento de exame que poderão ser escolhidas de acordo
                                    com a natureza do invento (invenção, modelo de utilidade ou certificado de adição de invenção)
                                    e o tipo de pedido (nacional ou internacional).
                                </Text>
                                <ImageContainer 
                                    title="Figura 71 – GRU para requerimento de exame" 
                                    imgSrc="/assets/figure-71-GRU-para-requerimento-de-exame.png"
                                    subtitle="elaboração própria."
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O requerimento de exame técnico (Resolução INPI/PR N°
                                    94/2013 de 13/06/2013) bem como o requerimento de
                                    desarquivamento (Portaria INPI N° 302 de 12/08/2020) são
                                    dispensados da apresentação de petição. Ou seja, basta gerar a
                                    GRU correspondente e efetuar o pagamento na agência bancária
                                    de sua preferência.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Apenas a partir deste momento, é que o pedido está apto
                                    para o exame técnico. Em outras palavras, o pedido de patente
                                    “entra na fila” de pedidos disponíveis para o exame. Nesta
                                    ocasião ocorre o fim da fase formal do pedido de patente.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Existem casos em que o depositante compreende que é
                                    necessária a apresentação de algumas modificações no pedido de patente, a fim de melhor
                                    esclarecer ou definir a matéria reinvindicada. Quando isso ocorre, o requerente deverá ficar
                                    atento as disposições do Art. 32 da LPI, que permite alterações voluntárias, até o requerimento
                                    de exame, desde que essas se limitem a matéria inicialmente revelada no pedido.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7. Exame técnico
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}> 
                                    Após o pagamento do requerimento de exame e não estando arquivado por algum
                                    motivo, o Pedido de Patente será analisado por um Examinador de Patentes. Os pareceres de
                                    exame técnico, gerados de acordo com o Art. 35 da LPI, ficam disponíveis no sistema BuscaWeb,
                                    na forma de arquivos em PDF e se encontram ao lado do despacho publicado, na coluna Img.
                                    juntamente aos documentos de anterioridade citados no parecer.      
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    1). Caso o pedido de patente atenda aos requisitos de
                                    patenteabilidade, o mesmo será deferido. Isso
                                    significa que o INPI considera que todas as
                                    condições necessárias para o pedido se tornar uma
                                    patente foram atendidas. A informação é
                                    publicada com código de despacho 9.1, referente
                                    ao “Deferimento”.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    2). No exame técnico, o examinador pode considerar
                                    necessário formular uma Exigência Técnica
                                    (despacho 6.1) para reformulação do pedido, a fim
                                    de que sejam obtidas as condições para a concessão da patente. A exigência deve
                                    ser atendida por peticionamento eletrônico, com a apresentação da
                                    documentação necessária contida na exigência e o comprovante de pagamento
                                    de uma GRU de código 207, no prazo de 90 dias (a contar da data da publicação
                                    na RPI). Neste caso, será dado seguimento ao exame. Caso contrário, o pedido
                                    será arquivado definitivamente por falta de manifestação, com a publicação do
                                    despacho de código 11.2, referente ao “Arquivamento – Art. 36 § 1º da LPI”. Não
                                    cabe recurso da decisão que determinar o arquivamento definitivo do pedido de
                                    patente (Art. 212 da LPPI).
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Alternativamente ao despacho 6.1, caso não seja
                                    atendido algum requisito de patenteabilidade
                                    (seção 2.6) e/ou alguma condição de
                                    patenteabilidade do pedido (seção 2.7), o
                                    examinador de patentes irá emitir um despacho de
                                    código 7.1, referente a ciência de parecer. Quando
                                    for publicado um parecer com código de despacho
                                    7.1, o depositante deverá apresentar
                                    manifestação, contestando o parecer emitido e
                                    argumentando sobre as diferenças e melhorias de
                                    seu invento, em relação ao estado da técnica
                                    citado no parecer. A manifestação a respeito do
                                    parecer de ciência deverá ser efetuada com o pagamento da GRU de código 281,
                                    em até 90 dias da publicação do parecer. Nesse caso, independente da
                                    manifestação do interessado, será dado prosseguimento ao exame técnico.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Embora não seja o usual, o examinador de patente pode emitir diversos pareceres de
                                    exigência (6.1) e/ou de ciência (7.1), no decorrer do exame, antes de tomar a decisão de
                                    deferimento (9.1) ou de indeferimento (9.2) do pedido de patente.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        8. Orientações para manifestação e resposta de exigência
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}> 
                                    As respostas às exigências técnicas ou as manifestações sobre ciência de parecer,
                                    devem ser apresentadas em até 90 (noventa) dias contados de sua publicação na RPI. É
                                    necessário elaborar um documento contendo os esclarecimentos sobre o que está sendo
                                    apresentado.      
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O quadro a seguir, busca auxiliar o depositante na elaboração dos documentos a serem
                                    apresentados. As informações que não forem expressamente solicitadas no parecer e/ou
                                    recomendadas no quadro abaixo, devem constar apenas no documento de manifestação ou de
                                    esclarecimento. É importante ter cuidado ao inserir informações no relatório descritivo ou no
                                    quadro reivindicatório do pedido, devido a possibilidade de infringir o disposto no artigo 32 da
                                    LPI, por acréscimo de matéria.
                                </Text>
                                <ImageContainer 
                                    title="Figura 72 – Recomendações para respostas de exigências técnicas" 
                                    imgSrc="/assets/figure-72-Recomendacoes-para-respostas-de-exigencias-tecnicas.jpg"
                                    subtitle="elaboração própria."
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A Figura 73 busca auxiliar a identificação claramente das características do pedido e
                                    distingui-la do estado da técnica. Utilizando-a, a comunicação com o examinador ocorrerá de
                                    forma mais clara e objetiva, o que aumenta as chances do pedido ser deferido. Um exemplo de
                                    preenchimento do quadro é apresentado abaixo, para uma invenção relacionada a um eixo de
                                    bicicleta:
                                </Text>
                                <ImageContainer 
                                    title="Figura 73 – Sugestão de organização para identificar as características do pedido" 
                                    imgSrc="/assets/figure-73-Sugestao-de-organizacao-para-identificar-as-caracteristicas-do-pedido.png"
                                    subtitle="elaboração própria."
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Outra informação importante no momento de preparar a manifestação ou cumprimento
                                    de exigência:
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    a) Não é necessário repetir ou resumir o que o examinador apontou no parecer
                                    técnico;
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    b) Não é necessário anexar os documentos dos pedidos equivalentes ao pedido em
                                    exame que tenham sido depositados em outros países (se houver) e
                                    eventualmente deferidos. Além do examinador ter acesso a esses documentos,
                                    cada país é soberano na decisão de deferir ou não um pedido de patente.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No momento de gerar a GRU, o depositante deve estar atento quanto ao fato de estar
                                    cumprindo uma exigência (despacho 6.1) ou apresentando manifestação a ciência de parecer
                                    (despacho 7.1). No primeiro caso, deverá ser gerada e paga uma GRU de código 207 e no segundo
                                    caso, uma GRU de código 281.
                                </Text>
                                <ImageContainer 
                                    title="Figura 74 – GRU utilizada para cumprimento / manifestação" 
                                    imgSrc="/assets/figure-74-GRU-utilizada-para-cumprimento-manifestacao.png"
                                    subtitle="elaboração própria."
                                />
                            </AccordionPanel>
                        </AccordionItem> 
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        9. Expedição da carta patente
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>  
                                    Mesmo após o deferimento, o pedido ainda não é uma patente. É necessário que o
                                    depositante solicite a expedição da carta patente, no prazo de 60 dias (prazo ordinário) a partir
                                    da publicação do deferimento na RPI (código de despacho 9.1). O referido pagamento poderá
                                    também ser realizado nos 30 (trinta) dias subsequentes (prazo extraordinário), mediante o
                                    pagamento da retribuição específica. A solicitação de expedição de carta patente é um serviço
                                    dispensado de petição, bastando gerar e pagar a GRU. Se o pagamento for efetuado no prazo
                                    ordinário, deverá ser utilizada GRU de código 212 e no prazo extraordinário, GRU de código 213.     
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    De posse da Guia de Recolhimento da União (GRU) emitida
                                    pelo Sistema e-INPI, o usuário deverá efetuar o pagamento da GRU,
                                    obrigatoriamente dentro do período indicado (prazo ordinário ou
                                    extraordinário), sob pena do serviço solicitado não ser considerado.
                                    Após o pagamento desta taxa será publicado o despacho de código
                                    16.1, referente a “Concessão de Patente ou Certificado de Adição de
                                    Invenção”.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No caso do não pagamento da retribuição específica para
                                    expedição de carta patente no prazo estipulado o pedido de patente
                                    será arquivamento definitivamente, independente do mesmo ter
                                    sido deferido (despacho de código 9.1).
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </TabPanel>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Dentro do prazo de 3 (três) anos, depois de concedida a Patente, o titular deverá iniciar a
                        exploração ou comercialização do produto. Se não o fizer, para não perder seus direitos, ele terá
                        que conceder uma "licença de exploração a qualquer pessoa ou empresa que estiver
                        interessada" (licença compulsória – vide Seção III da LPI, Art. 68 § 5º).
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        A patente poderá caducar por falta de exploração se, decorridos 2 (dois) anos da primeira
                        licença compulsória, o desuso não for justificado (vide Capítulo XI da LPI, Art. 80).
                    </Text>
                </TabPanel>
                <TabPanel>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        1. Perda de prazo 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    As petições deverão ser protocoladas em tempo hábil junto ao INPI e acompanhadas do
                                    comprovante de pagamento original, quando for o caso, para produzirem efeitos legais. No caso
                                    de haver impedimento no protocolo de uma petição, poderá ser requerida a devolução de prazo
                                    conforme disposto no Art. 221 da LPI, sendo necessário a comprovação de que determinado ato
                                    previsto na LPI não foi realizado por justa causa. A Resolução PR nº 178/2017 disciplina os
                                    procedimentos relativos aos pedidos de devolução de prazo.     
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        2. Restauração (Anuidade)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Não realizado o pagamento, o pedido ou patente será arquivado (Art. 86 da LPI). O titular
                                    poderá requerer a restauração do pedido ou patente no prazo de 03 meses a contar da data da
                                    publicação do arquivamento na RPI, devendo para tanto comprovar junto ao INPI o pagamento
                                    da anuidade, no valor do prazo extraordinário e da retribuição de restauração. A não solicitação
                                    da restauração, dentro do prazo legal, levará ao arquivamento definitivo do pedido. Para
                                    solicitação de restauração, não é mais necessário efetuar o peticionamento eletrônico, bastando
                                    gerar e pagar a GRU 208 e a GRU referente a anuidade em atraso, no valor do prazo
                                    extraordinário. Porém, se for publicada uma exigência de complementação de anuidade, deverá
                                    ser efetuado o peticionamento eletrônico da exigência, com GRU de código 207, apresentando
                                    os comprovantes de pagamento das retribuições devidas.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        3. Desarquivamento (taxa de exame)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Notificado o arquivamento na RPI, por falta do requerimento de exame (código de
                                    despacho 11.1), o requerente terá prazo de 60 (sessenta) dias para pagar a taxa de
                                    desarquivamento, juntamente com o requerimento do pedido de exame, sob pena de
                                    arquivamento definitivo (código de despacho 11.1.1).
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O requerimento de desarquivamento por falta de pagamento da retribuição referente ao
                                    pedido de exame, é um serviço dispensado de petição, bastando gerar e pagar a GRU de código
                                    209 (desarquivamento) e a GRU correspondente ao pedido de exame.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A solicitação de desarquivamento é submetida a avaliação técnica do INPI, quanto aos
                                    prazos e valores devidos, podendo sofrer exigências para esclarecimentos e/ou complementação
                                    de valores devidos. A exigência deve ser cumprida por meio de peticionamento eletrônico,
                                    utilizando GRU de código 207. Caso o depositante não se manifeste em relação a essas
                                    exigências, no prazo de 90 (noventa) dias, o pedido será arquivado definitivamente.
                                    Indeferimento do pedido de patente.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        4. Recurso
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No prazo de 60 dias, após a notificação do indeferimento na RPI cabe ser interposto
                                    recurso pelo depositante (Arts. 212 a 220 da LPI).
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O depositante pode interpor recurso a respeito de qualquer decisão proferida pelo INPI,
                                    que lhe seja desfavorável, exceto quando tal decisão determinar o arquivamento definitivo do
                                    pedido.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        5. Indisponibilidade do sistema
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O INPI publicará os casos em que ocorram indisponibilidade do sistema e fará a devolução
                                    dos referidos prazos.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        6. Como recuperar a senha
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Ao entrar no sistema de emissão de GRU (item.....), clique em “Esqueceu usuário/senha?”,
                                    conforme a figura abaixo.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                </Text>
                                <ImageContainer 
                                    title="Figura 75 – Solicitação de nova senha" 
                                    imgSrc="/assets/figure-75-Solicitacao-de-nova-senha.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes"
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Surgirá a tela contendo a requisição CPF/CNPJ. Preencha o dado solicitado e clique em
                                    pesquisar.
                                </Text>
                                <ImageContainer 
                                    title="Figura 76 – campo para preenchimento de CPF/CNPJ" 
                                    imgSrc="/assets/figure-76-campo-para-preenchimento-de-CPF-CNPJ.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes"
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Ao clicar em pesquisar, aparecerá a tela abaixo, contendo o login do usuário relacionado
                                    ao CPF/CNPJ informado e deverá ser solicitado o envio da senha para o e-mail cadastrado no
                                    INPI.
                                </Text>
                                <ImageContainer 
                                    title="Figura 77 – Lembrete da senha" 
                                    imgSrc="/assets/figure-78-Lembrete-da-senha.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes"
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No caso do usuário não possuir um e-mail cadastrado no INPI ou tiver problemas com a
                                    recuperação de seu login e sua senha, deverá enviar uma mensagem pelo sistema Fale Conosco
                                    selecionado “Sistemas – Cadastro, Acesso, Correções”, no campo “Assunto/Área de Interesse”.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.1. Como proteger uma invenção ou criação industrializável?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Deve-se procurar o INPI para proteger o invento. A Patente e o Certificado de Adição de
                                    Invenção são instrumentos corretos para isso. É necessário depositar um pedido no INPI, o qual,
                                    depois de devidamente analisado por um Examinador de Patentes, poderá se tornar uma
                                    Patente, com validade em todo território nacional.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.2. O que é uma Patente?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    É um título de propriedade temporário outorgado pelo estado, por força da lei, ao titular
                                    /inventor ou pessoas cujos direitos derivem do mesmo, para que excluam terceiros, sem prévia
                                    autorização, de atos relativos à matéria protegida, tais como fabricação, comercialização,
                                    importação, uso, etc.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.3. Quais os tipos ou modalidades de Patente?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Em função das diferenças existentes entre as patentes, elas poderão se enquadrar nas
                                    seguintes naturezas ou modalidades: Patente de Invenção (antigo PI) - Concepção resultante da
                                    capacidade de criação do homem que represente uma solução para um problema técnico dentro
                                    de um determinado campo tecnológico e que possa ser fabricada. A invenção deve atender aos
                                    requisitos de atividade inventiva, novidade e aplicação industrial. Modelo de Utilidade (antigo
                                    MU) – Objeto de uso prático, ou parte deste, suscetível de aplicação industrial, que apresente
                                    nova forma ou disposição, envolvendo ato inventivo, que resulte em melhoria funcional no seu
                                    uso ou em sua fabricação. Existe também o Certificado de Adição de Invenção (antigo C1, C2,
                                    etc), que consiste em um aperfeiçoamento ou desenvolvimento introduzido no objeto da
                                    invenção mesmo que destituído de atividade inventiva, desde que a matéria se inclua no mesmo
                                    conceito inventivo. Sua vigência é a mesma da Patente de Invenção.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.4. O que é uma Patente?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    De acordo com o Art. 40 da LPI:
                                </Text>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A Patente de Invenção vigorará pelo prazo de 20 (vinte) anos e a de Modelo de Utilidade
                                    pelo prazo de 15 (quinze) anos contados da data do depósito.
                                    Parágrafo único. O prazo de vigência não será inferior a 10 (dez) anos para a patente de
                                    invenção e a 7 (sete) anos para a patente de modelo de utilidade, a contar da data de
                                    concessão, ressalvada a hipótese de o INPI estar impedido de proceder ao exame de
                                    mérito do pedido, por pendência judicial comprovada ou por motivo de força maior.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.5. Quais os direitos conferidos ao titular da Patente?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O titular da patente tem o direito de impedir terceiros, sem consentimento, de produzir,
                                    colocar à venda, usar, importar produto objeto da patente ou processo ou produto obtido
                                    diretamente por processo patenteado (capítulo V, Título I da LPI). Terceiros podem fazer uso da
                                    invenção somente com a permissão do titular (licença).
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.6. Qual o território de proteção da Patente?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A Patente é válida somente em território nacional (princípio consagrado pela Convenção
                                    da União de Paris - CUP). A existência de Patentes regionais (ex: Patente Europeia) não constitui
                                    exceção ao princípio, pois são resultantes de acordos regionais específicos.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.7. O que é Patenteável?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    É patenteável a matéria que não incida nas proibições legais e que atender aos requisitos
                                    legais dos Artigos 8º, 9º, 11, 13, 14 e 15 e as condições dispostas nos artigos 24 e 25 da Lei de
                                    Propriedade Industrial nº 9279/96 – LPI. A Invenção deve ser provida de novidade, utilização
                                    industrial, atividade inventiva, o Modelo de Utilidade deve ser provido de novidade, utilização
                                    industrial, ato inventivo e ambos devem descrever clara e suficientemente o objeto do pedido e
                                    ter reivindicações fundamentadas no relatório descritivo, caracterizando as particularidades do
                                    pedido e definindo, de modo claro e preciso a matéria objeto de proteção. A proteção do Modelo
                                    de Utilidade só pode ser concedida a um objeto de uso prático que apresente nova forma ou
                                    disposição (estando os processos excluídos) envolvendo ato inventivo (não decorra de maneira
                                    comum ou vulgar do estado da técnica), analisada por um técnico no assunto, resultando em
                                    melhoria funcional no seu uso ou fabricação, sendo os desenhos obrigatórios.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.8. O que não é patenteável?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A matéria enquadrada no Art. 18 da LPI, a saber: toda invenção contrária a moral, bons
                                    costumes, segurança, ordem pública, matérias relativas à transformação do núcleo atômico e
                                    todo ou parte dos seres vivos, exceto os microrganismos transgênicos. Além disso, de acordo
                                    com o Art. 10 da LPI várias matérias não são consideradas nem Invenção nem Modelo de
                                    Utilidade (deve-se analisar atentamente todo teor do artigo mencionado). Como exemplo,
                                    podemos citar: planos comerciais, planos de assistência médica, de seguros, esquemas de
                                    descontos em lojas, e também os métodos de ensino, plantas de arquitetura, obras de arte,
                                    músicas, livros e filmes, assim como apresentação de informações, tais como cartazes ou
                                    etiquetas com o retrato do dono. Tampouco é possível conceder patentes para ideias abstratas
                                    e inventos que não possam ser industrializados. Algumas destas criações podem ser protegidas
                                    pelo Direito Autoral, que nada tem a ver com o INPI. No caso de sua criação ser protegida pelo
                                    Direito Autoral, existem diversos órgãos responsáveis pelo seu Registro, tais como a Secretaria
                                    de Educação (no Rio de Janeiro fica na Rua da Imprensa, nº 16/12º andar, telefone (021) 2220-
                                    0039 - nos fundos da Biblioteca Nacional), o CREA ou a própria Biblioteca Nacional. Em alguns
                                    casos pode-se recorrer a um cartório de títulos.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.9. Posso patentear um programa de computador?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Um programa de computador enquadra-se em matéria que não é considerada invenção
                                    (Art.10) e, embora seja protegido pelo Direito Autoral, o INPI é o órgão responsável pelo Registro
                                    do Programa de Computador, conferindo segurança jurídica aos negócios (consultar no portal do
                                    INPI “Programa de Computador”). Um programa de computador é considerado patente somente
                                    quando “embarcado” em determinado equipamento e sua vigência é a mesma patente. Para
                                    saber mais, entre em contato com o Fale Conosco.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.10. É possível divulgar um invento em feiras, seminários e congresso antes de depositá-lo?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    É preferível sempre depositar antes. Contudo, se houver necessidade da divulgação
                                    anterior e para que a novidade não seja prejudicada existe um Período de Graça (Art. 12 da LPI),
                                    que permite tal divulgação antes de 12 (doze) meses do depósito para as Invenções e Modelos
                                    de Utilidade.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.11. É necessário fazer uma pesquisa para saber se o invento já existe?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Antes de depositar o pedido de Patente, é altamente recomendável que seja feita uma
                                    busca de documentos de anterioridades. Na página inicial do portal do INPI, em” Informação
                                    Tecnológica”, o usuário pode acessar os links “Busca de Patentes” e “Busca de Patentes Online”,
                                    onde encontrará informações de como fazer uma busca de patentes. Os documentos obtidos
                                    através da busca serão úteis para distinguir o que já existe (“Estado da Técnica”) do que o usuário
                                    inventou (“Escopo da Invenção”). Estas informações podem constar do relatório descritivo do
                                    Pedido de Patente, devendo ser bem estudadas e usadas como modelo para escrever o
                                    documento de Patente. Dúvidas adicionais devem ser enviadas para o Fale Conosco.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.12. Onde depositar um pedido?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No INPI, apenas eletronicamente
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.13. Que documentos devem ser apresentados?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Um requerimento do pedido de patente por meio do formulário “Depósito de Pedido de
                                    Patente“ acompanhado do conteúdo técnico - relatório descritivo, reivindicações, listagem de
                                    sequências (se for o caso), desenhos (se for o caso), resumo e a guia de recolhimento (GRU),
                                    devidamente paga. Esta guia é gerada eletronicamente e acessada através do portal do INPI
                                    (www.gov.br/inpi/pt-br). O INPI tem diversos serviços realizados via Internet, que dependem da
                                    criação de login e senha. Para emitir a guia, o usuário deve, portanto, efetuar antecipadamente
                                    seu cadastro, acessando “Cadastro no e-INPI” na página inicial do portal.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.14. Como elaborar os documentos que integram um pedido de patente?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O INPI expediu as Instruções Normativas 30/2013 (IN 30/13) e 31/2013 (IN 31/2013),
                                    disponível no portal do INPI, explicando como elaborar os pedidos de Patentes. Deve-se ler
                                    atentamente a IN 30/13 e IN 31/13 antes de começar a redigir o Pedido de Patente estudando
                                    bem os documentos encontrados na busca de anterioridades. Deve-se formular o pedido nos
                                    mesmos moldes, tendo em mente que se deve mencionar no relatório descritivo a existência dos
                                    pedidos anteriores (estado da técnica), brasileiros ou não, assim como fornecer informações
                                    sobre objetos ou processos semelhantes ao do objeto do pedido. Deve-se compará-los com o
                                    objeto, destacando os avanços técnicos introduzidos pela sua Invenção ou Modelo de Utilidade.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Quanto ao conteúdo técnico, o relatório deve descrever o objeto ou produto ou processo
                                    para o qual se requer a proteção. A descrição deve ser feita de forma a permitir que uma pessoa
                                    especializada possa compreender e colocar em prática a tecnologia. As reivindicações devem
                                    caracterizar as peculiaridades do objeto do pedido para as quais se requer a proteção legal. São
                                    elas que estabelecem e delimitam os direitos da patente. A listagem de sequencias para pedidos
                                    da área biotecnológica, devem ser incluídas para possibilitar a aferição da suficiência descritiva
                                    de que trata o Art. 24 da LPI.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Os desenhos, quando necessários, têm a finalidade de completar a descrição,
                                    esclarecendo ou delimitando o conteúdo da invenção. Finalmente, o resumo deve ser uma
                                    descrição clara, objetiva e sucinta do objeto do pedido de patente. A ferramenta Minha Primeira
                                    patente pode ajudar na redação do pedido de patente.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.15. Quem pode depositar?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Qualquer pessoa física ou jurídica, desde que tenha legitimidade para obter a Patente. O
                                    depositante pressuposto legitimado para requerer a Patente; não é necessário apresentar
                                    documento de Cessão, mas ele deve possuí-lo. As condições de titularidade de uma Patente
                                    estão estabelecidas nos Artigos 6º e 7º da LPI.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.16. Quais os custos básicos de uma Patente? 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Basicamente é o somatório das taxas correspondentes ao Depósito de Pedido de Patente
                                    de Invenção / Modelo de Utilidade, Pagamento das Anuidades, Pedido de Exame e Expedição de
                                    Carta-Patente.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    OBS: Ver Tabela de Retribuição no portal do INPI. Em caso de obstáculos processuais
                                    como exigências, subsídios ao exame, restaurações etc, novas retribuições serão acrescidas aos
                                    custos da patente.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.17. Como acompanhar o andamento processual de um pedido de patente depositado? 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Por meio de consulta na RPI eletrônica ou na Plataforma e-patentes. É facultado o
                                    cadastramento no sistema PUSH, disponível no portal, que não é a informação oficial do INPI.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        7.18. Como solicitar proteção de uma invenção em outros países? 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Neste caso é preciso depositar um pedido equivalente no país ou região onde se deseja
                                    obter a patente, via CUP (Convenção da União de Paris) ou via PCT ("Patent Cooperation Treaty"
                                    - "Tratado de Cooperação em Matéria de Patentes"). Via CUP, um pedido correspondente a um
                                    pedido originalmente depositado no Brasil pode ser depositado no prazo de 12 meses, conforme
                                    o princípio da prioridade unionista estabelecida pelo Art. 4° dessa Convenção. Deve ser
                                    designado um procurador para representar o depositante em cada um dos países escolhidos. O
                                    pedido depositado no Brasil deverá ser traduzido para o idioma do país/região onde se deseja
                                    depositar. O procedimento de depósito em diferentes países pode ser simplificado, usando o
                                    PCT, no qual o INPI atua como escritório receptor. O PCT é um tratado multilateral que permite
                                    requerer a proteção patentária de uma invenção, simultaneamente, num grande número de
                                    países, por intermédio do depósito de um único Pedido Internacional de Patente (vide portal do
                                    INPI, acessando “Patente” – “PCT”).
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}