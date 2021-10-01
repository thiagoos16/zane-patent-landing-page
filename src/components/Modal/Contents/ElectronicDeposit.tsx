import {
    Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from "@chakra-ui/react";

import { ImageContainer } from "../../ImageContainer";

export function ElectronicDeposit() {
    return (
        <Tabs>
            <TabList>
                <Tab>Procedimentos</Tab>
                <Tab>Cadastro no e-INPI</Tab>
                <Tab>Tabela de retribuições</Tab>
                <Tab>Guia de Recolhimento da União</Tab>
                <Tab>Pagamento da retribuição</Tab>
                <Tab>Formulários eletrônicos</Tab>
                <Tab>Submeter o formulário</Tab>
            </TabList>

            <TabPanels sx={{"max-height": "calc(100vh - 300px)", "overflow-y":"auto"}}>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Para a obtenção de uma patente, cabe ao autor da Invenção ou Modelo de Utilidade
                        requerer a proteção legal junto ao INPI, observadas as condições e formalidades previstas na
                        legislação. De posse dos documentos descritos no Título 4, tona-se possível efetuar o depósito.
                        O texto que segue apresenta os procedimentos para efetuar o depósito através do
                        peticionamento eletrônico. Para efetuar um peticionamento eletrônico, o requerente deverá
                        observar os seguintes passos, exatamente na ordem abaixo descrita:
                    </Text>
                    <ImageContainer 
                        title="Figure 14 – passo a passo para efetuar o depósito" 
                        imgSrc="/assets/figure-14-passo-a-passo-para-efetuar-o-deposito.png"
                        subtitle="Fonte: elaboração própria"
                    />
                </TabPanel>
                <TabPanel>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        O cadastro no sistema e-INPI possibilitará o acesso ao módulo de Seleção de Serviços,
                        conhecido como GRU (Guia de Recolhimento da União). Este cadastro é obrigatório para toda
                        pessoa, física ou jurídica, que queira solicitar serviços à Diretoria de Patentes. O próprio
                        interessado, seu advogado ou representante legal poderá cadastrar uma identificação eletrônica,
                        composta por login e senha, que autentique seu acesso ao sistema.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        No <a href="https://www.gov.br/inpi/pt-br">portal do INPI</a>, o usuário deverá clicar no link “cadastro no e-INPI”, que se encontra na
                        parte superior do Portal:
                    </Text>
                    <br/>
                    <ImageContainer 
                        title="Figura 15 – Acesso ao castro no e-INPI" 
                        imgSrc="/assets/figure-15-Acesso-ao-casdastro-no-e-INPI.png"
                        subtitle="https://www.gov.br/inpi/pt-br"
                        subtitleLink="https://www.gov.br/inpi/pt-br"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Na tela do e-INPI, o novo usuário deverá se cadastrar, clicando no botão “Cadastre-se
                        aqui”. Existem duas opções para o cadastro: como o “Próprio interessado”, para Pessoas Físicas
                        ou Jurídicas que irão efetuar o depósito por conta própria ou como “Advogado/Procurador sem
                        habilitação especial”, para usuários que irão atuar como representante legal de outrem.
                    </Text>
                    <br/>
                    <ImageContainer
                        title="Figura 16 – Seleção de usuário no e-INPI" 
                        imgSrc="/assets/figure-16-Selecao-de-usuario-no-e-INPI.png"
                        subtitle="https://www.gov.br/inpi/pt-br/cadastro-no-e-inpi"
                        subtitleLink="https://www.gov.br/inpi/pt-br/cadastro-no-e-inpi"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Em seguida, o usuário deverá aceitar o “termo de adesão” ao e-INPI, em que constam as
                        condições gerais do serviço:
                    </Text>
                    <br/>
                    <ImageContainer
                        title="Figura 17 – Termo de adesão ao sistema e-INPI" 
                        imgSrc="/assets/figure-17-Termo-de-adesao-ao-sistema-e-INPI.png"
                        subtitle="https://www.gov.br/inpi/pt-br/cadastro-no-e-inpi"
                        subtitleLink="https://www.gov.br/inpi/pt-br/cadastro-no-e-inpi"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Procedendo dessa forma, o usuário será direcionado à área de cadastro, tal como exposto
                        na tela abaixo:
                    </Text>
                    <br/>
                    <ImageContainer
                        title="Figura 18 – Cadastro no e-INPI" 
                        imgSrc="/assets/figure-18-Cadastro-no-e-INPI.png"
                        subtitle="https://www.gov.br/inpi/pt-br/cadastro-no-e-inpi"
                        subtitleLink="https://www.gov.br/inpi/pt-br/cadastro-no-e-inpi"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        A senha deve conter o mínimo de 6 (seis) e o
                        máximo de 10 (dez) caracteres, podendo conter letras
                        e números ou os dois itens, sem espaços. Não utilize
                        caracteres especiais do tipo &, !, %, ?, hifens ou aspas.
                        O login e a senha são do tipo Case Sensitive, ou seja, o
                        sistema diferencia as letras maiúsculas das minúsculas
                        no registro do login e senha.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        A senha é de uso pessoal e intransferível. Não
                        transmita a sua senha a terceiros. O ideal é que o
                        depositante ou titular da patente, modelo de utilidade
                        ou certificado de adição de invenção tenha uma senha
                        e seu procurador ou representante legal tenha outra.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Não é necessário que o representante legal
                        saiba a senha do requerente/outorgante para emitir
                        uma GRU. Além disso, a transmissão da sua senha pode
                        acarretar problemas futuros, de uso não autorizado
                        após uma eventual destituição de procurador.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Nunca se esqueça de manter atualizado o seu cadastro no INPI. O instituto trata milhares
                        de pedidos todos os anos, movimentando uma quantidade incalculável de informação. É
                        unicamente com base nas informações do cadastro, que o INPI poderá entrar em contato com o
                        depositante ou seu procurador. Tudo depende da consistência das informações sobre o
                        depositante e/ou seu procurador. Portanto, toda e qualquer mudança de dados, além, é claro,
                        de quaisquer alterações que interfiram no curso do processo junto ao INPI, devem ser
                        comunicadas ao órgão. 
                    </Text>
                    <br/>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    1. Observações gerais relativas ao preenchimento
                                        dos dados do requerente durante o cadastramento no
                                        sistema e-INPI
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Apesar do módulo de seleção de serviços do e-INPI
                                    já disponibilizar uma ferramenta de ajuda ao
                                    preenchimento do cadastro, cumpre esclarecer alguns
                                    pontos relacionados aos dados do requerente, uma vez
                                    que algumas informações preenchidas nessa etapa são
                                    migradas automaticamente para o formulário eletrônico.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Os dados do requerente - ou seja, os dados da
                                    pessoa, física ou jurídica, que solicita a patente ou modelo
                                    de utilidade no INPI - que constarão do formulário são:
                                </Text>
                                <br/>
                                <ImageContainer 
                                    title="Quadro 19 – Como preencher os dados do e-INPI" 
                                    imgSrc="/assets/figure-19-Como-preencher-os-dados-do-e-INPI.png"
                                    subtitle="elaboração própria"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Qualquer alteração em um dos campos acima descritos
                                    deve ser efetuada antes da emissão da GRU. Migrarão para o
                                    formulário eletrônico tão somente os dados que constavam à
                                    época de emissão da GRU.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Os dados que ficarão registrados no banco de dados de
                                    patentes e certificados de adição são os da GRU e formulário de
                                    depósito. As alterações no cadastro do Módulo GRU não
                                    substituem os dados do requente ou titular que constam nestes
                                    bancos de dados. Para modificar os dados do cadastro, é
                                    necessário solicitar o serviço de Alteração de Nome, Razão Social,
                                    Sede e/ou Endereço (ver seção 2.8.5). Caso tenha ocorrido alteração do CNPJ ou CPF do titular,
                                    fusão, incorporação ou algo semelhante deve ser utilizado o serviço de a Anotação de
                                    Transferência de Titular (ver seção 2.8.6).
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </TabPanel>
                <TabPanel>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        No <a href="https://www.gov.br/inpi/pt-br"> portal do INPI </a> está disponível a tabela de retribuições
                        dos serviços prestados pela Diretoria de Patentes. Esta tabela de
                        retribuições possui diferentes valores e deverá ser estudada pelo
                        requerente antes da emissão da Guia de Recolhimento, a fim de
                        que o mesmo escolha o serviço que se enquadra à sua realidade
                        (<a href="https://www.gov.br/inpi/pt-br/servicos/tabelas-de-retribuicao/TabelaPatentesapsalteraesCGRECincpapelpct.pdf">Tabela de-Retribuicao</a>).
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Os usuários deverão consultar a tabela antes de efetuar o
                        seu depósito de pedido ou efetuar uma petição, visando tomar
                        conhecimento dos valores de cada serviço, assim como dos descontos concedidos pelo INPI (ver
                        seção 5.1.1).
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        <b>Importante saber que os descontos não incidem sobre todos os códigos e não são
                        estendidos aos estrangeiros.</b>
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Para acessar a Tabela de Retribuições, acesse o site do INPI e clique em “Custos e
                        Pagamento.
                    </Text>
                    <br/>
                    <ImageContainer 
                        title="Figura 20 – Acessar página de custos e pagamentos" 
                        imgSrc="/assets/figure-20-Acessar-pagina-de-custos-e-pagamentos.png"
                        subtitle="https://www.gov.br/inpi/pt-br"
                        subtitleLink="https://www.gov.br/inpi/pt-br"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Na sequência, é necessário selecionar “Patentes”:
                    </Text>
                    <br/>
                    <ImageContainer 
                        title="Figura 21 – Acessar página de custos de patentes" 
                        imgSrc="/assets/figure-21-Acessar-pagina-de-custos-de-patentes.png"
                        subtitle="https://www.gov.br/inpi/pt-br/servicos/custos-e-pagamento"
                        subtitleLink="https://www.gov.br/inpi/pt-br/servicos/custos-e-pagamento"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Em seguida, selecione a tabela de serviços de Patentes:
                    </Text>
                    <br/>
                    <ImageContainer 
                        title="Figura 22 – Acessar tabela de serviços de patentes" 
                        imgSrc="/assets/figure-22-Acessar-tabela-de-servicos-de-patentes.png"
                        subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/custos"
                        subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/custos"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        A tabela vigente no momento da elaboração desse manual é a definida pela Resolução
                        INPI nº 251, de 02/10/19. Um extrato da tabela é demonstrado na figura abaixo.
                    </Text>
                    <br/>
                    <ImageContainer 
                        title="Figura 23 – Tabela de retribuição dos serviços de patentes prestados pelo INPI" 
                        imgSrc="/assets/figure-23-Tabela-de-retribuicao-dos-servicos-de-patentes-prestados-pelo-INPI.png"
                        subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/custos"
                        subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/custos"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        No caso do depósito do pedido de patente, deve ser observado o valor do serviço de
                        código 200, referente à “Pedido nacional de invenção; Pedido nacional de modelo de utilidade;
                        Pedido nacional de certificado de adição; e Entrada em fase nacional do PCT.
                    </Text>
                </TabPanel>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Após ter realizado o cadastro no Módulo de Seleção de Serviços do e-INPI, o usuário, a
                        fim de selecionar o serviço a ser demandado à Diretoria de Patentes, deverá acessar o referido
                        sistema de emissão da Guia de Recolhimento da União (GRU), conforme orientação a seguir.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        A emissão da GRU corresponde à etapa de seleção do serviço
                        pretendido e, portanto, deverá ser efetuada obrigatoriamente pelo
                        requerente ou por seu procurador (ou representante deste último),
                        nunca por terceiros. Por esse motivo, o acesso ao sistema é condicionado
                        à prévia identificação do usuário. Assim, à exceção do representante do
                        Agente da Propriedade Industrial, o nome do usuário que acessa o
                        sistema para a seleção do serviço e consequente emissão da GRU,
                        constará impresso na guia gerada, ficando consignada a vinculação do
                        usuário em questão ao ato praticado.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Após clicar na <a href="https://www.gov.br/inpi/pt-br/servicos/patentes/custos">Página de Custos e Pagamento</a>:, o usuário deverá clicar em “Patentes” e a
                        seguir em “Sistema de Emissão de GRU”:
                    </Text>
                    <br/>
                    <ImageContainer 
                        title="Figura 24 – Acesso ao sistema de emissão de GRU" 
                        imgSrc="/assets/figure-24-Acesso-ao-sistema-de-emissao-de-GRU.png"
                        subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/custos"
                        subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/custos"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Em seguida, deverá preencher o login e senha, previamente cadastrados, conforme a
                        figura a seguir:
                    </Text>
                    <br/>
                    <ImageContainer 
                        title="Figura 25 – login no sistema de emissão de GRU" 
                        imgSrc="/assets/figure-25-login-no-sistema-de-emissao-de-GRU.png"
                        subtitle="https://gru.inpi.gov.br/pag"
                        subtitleLink="https://gru.inpi.gov.br/pag"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        As seguintes informações serão disponibilizadas:
                    </Text>
                    <br/>
                    <ImageContainer 
                        title="Figura 26 – Preenchimento dos dados do cliente" 
                        imgSrc="/assets/figure-26-Preenchimento-dos-dados-do-cliente.png"
                        subtitle="https://gru.inpi.gov.br/pag"
                        subtitleLink="https://gru.inpi.gov.br/pag"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Em “Tipo de Serviço”, selecione “Patente de Invenção e Modelo de Utilidade”.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Em “Serviço”, escolher o serviço desejado digitando o respectivo código (será 200 para
                        depósito de pedido de patente) e teclar "enter"; ou escolher o serviço buscando pelo seu nome
                        dentro da caixa correspondente. A seguir, clicar em “Confirmar”.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Observação: Para determinados serviços, outras informações
                        serão solicitadas, como por exemplo, a natureza do depósito, a
                        numeração do pedido ou ainda, a especificação do objeto da
                        petição.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Após selecionar o serviço, uma janela com uma prévia do
                        serviço solicitado aparecerá na tela; o usuário deverá conferir o
                        serviço desejado, bem como os dados informados, tais como o
                        número do processo ou o valor do serviço em questão. Para
                        finalizar, o usuário deverá clicar em "Gerar Boleto"; caso tenha
                        se enganado quanto à escolha do serviço ou ao preenchimento
                        de quaisquer outras informações durante essa fase, acionar o
                        botão "Cancelar Serviço":
                    </Text>
                    <br/>
                    <ImageContainer 
                        title="Figura 27 – escolha dos dados do serviço desejado" 
                        imgSrc="/assets/figure-27-escolha-dos-dados-do-servico-desejado.png"
                        subtitle="https://gru.inpi.gov.br/pag"
                        subtitleLink="https://gru.inpi.gov.br/pag"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Clicando em “Gerar boleto”, será aberta a janela que disponibiliza o boleto de pagamento
                        e o número da GRU gerada.
                    </Text>
                    <br/>
                    <ImageContainer 
                        title="Figura 28 – Ícone para baixar (dowload) da GRU" 
                        imgSrc="/assets/figure-28-icone-para-baixar-dowload-da-GRU.png"
                        subtitle="https://gru.inpi.gov.br/pag"
                        subtitleLink="https://gru.inpi.gov.br/pag"
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Caso opte por salvar ao invés de imprimir, guarde o “Nosso
                        Número” (número da GRU), porque será necessário para o
                        peticionamento eletrônico.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Para solicitar outro serviço da mesma "Unidade" escolhida, o
                        usuário deverá acionar o botão de "Novo Serviço”. Ao terminar a
                        emissão da GRU, o usuário deverá clicar no botão "Sair do Sistema”,
                        no canto superior direito da página.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Abaixo se encontra um exemplo de uma Guia de Recolhimento
                        da União (GRU), no qual foi dado destaque ao campo “Nosso
                        número”, que possibilitará o acesso ao formulário eletrônico.
                    </Text>
                    <br/>
                    <ImageContainer 
                        title="Figura 29 – exemplo de GRU com destaque para o “Nosso número”" 
                        imgSrc="/assets/figure-29-exemplo-de-GRU-com-destaque-para-o-nosso-numero.png"
                        subtitle="elaboração própria"
                    />
                    <br/>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    1. Observações importantes sobre a geração de GRU
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Recomenda-se guardar uma cópia salva ou impressa da GRU.
                                    Recomenda-se a impressão à jato de tinta (ink jet) ou laser em
                                    qualidade normal ou alta (evite o modo econômico). Utilize folha A4
                                    (210 x 297 mm) ou Carta (216 x 279 mm) e margens mínimas a
                                    esquerda e a direita do formulário. A página é melhor visualizada na
                                    resolução 1024 x 768.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Jamais utilize a guia mais de uma vez! Caso queira demandar o
                                    mesmo serviço novamente, é necessário reiniciar o processo e
                                    selecionar de novo o mesmo serviço de forma que uma nova GRU seja
                                    emitida.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Caso tenham sido inseridos dados errados e, mesmo assim, a GRU tenha sido emitida e
                                    paga, ela não poderá ser utilizada. Será necessário emitir uma nova GRU com as informações
                                    corretas do serviço desejado. Adicionalmente, poderá ser solicitada a devolução do valor pago
                                    relativo a GRU não utilizada. Para tanto, é necessário gerar uma GRU de código 801, preencher
                                    e submeter o formulário correspondente atendendo aos procedimentos regulamentados pela
                                    Diretoria de Patentes.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </TabPanel>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        De posse da Guia de Recolhimento da União (GRU) emitida
                        pelo Sistema e-INPI, o usuário deverá observar que o pagamento da
                        GRU, <b>deverá ser obrigatoriamente realizado antes do envio do
                        Formulário Eletrônico</b>, sob pena do serviço solicitado não ser
                        considerado.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        <b>A data de vencimento da GRU não possui relação com os
                        prazos administrativos</b>, que devem ser estritamente observados
                        pelos requerentes, de acordo com o que preceitua a Lei da
                        Propriedade Industrial. Por tanto, caso o requerente deseje enviar o
                        seu pedido ou petição na data de hoje, deverá efetuar o pagamento
                        até a data de hoje, mesmo que a GRU gerada apresente uma data de
                        vencimento futura ou que contenha informações tais como “contra-
                        apresentação” no campo Vencimento.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Cumpre observar que, para fins de validade dos atos
                        praticados pelo usuário que dependam de pagamento de retribuição,
                        o serviço pretendido será considerado como efetivamente pago
                        somente após a conciliação bancária da respectiva GRU.
                    </Text>
                    <br/>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    1. Pagamento da retribuição fora dos horários de expediente
                                    bancário
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    Para fins de pagamento da retribuição referente ao depósito
                                    de pedido de patente de invenção e de modelo de utilidades e
                                    certificado de adição de invenção, a data da operação bancária será
                                    considerada como a data efetiva do pagamento, ainda que aquela
                                    tenha sido realizada em horários ou em dias durante os quais não há
                                    expediente bancário e desde que efetivamente comprovada.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Portanto, nos casos em que a operação bancária relativa ao
                                    pagamento da retribuição for realizada até a data do envio do
                                    formulário eletrônico, mas fora dos horários ou dos dias de
                                    expediente bancário, o usuário deverá encaminhar, como anexo ao
                                    formulário eletrônico, o comprovante digitalizado do pagamento da
                                    Guia de Recolhimento da União (GRU) contendo claramente o nº da
                                    GRU, a data de pagamento e autenticação bancária legíveis. Não
                                    serão aceitos como comprovante de pagamento os agendamentos de
                                    operação bancária.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Da mesma maneira como todos os documentos enviados
                                    digitalmente, os comprovantes em papel relativos ao pagamento de
                                    retribuições ao INPI deverão ser guardados pelo usuário a fim de, numa eventual exigência, os
                                    mesmos possam ser apresentados ou remetidos ao INPI.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    
                                </Text>
                                <br/>
                                <ImageContainer 
                                    title="" 
                                    imgSrc=""
                                    subtitle="" 
                                    subtitleLink="" 
                                />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </TabPanel>
                <TabPanel>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Para ter acesso aos formulários eletrônicos de pedido e de petição, é
                        necessário cumprir os passos de um a cinco (consulta a Lei da Propriedade
                        Industrial e ao Manual do Usuário, cadastro no sistema e-INPI, consulta à
                        tabela de retribuição da diretoria de patentes, emissão da GRU, pagamento
                        da retribuição).
                    </Text>
                    <br/>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    1. Acesso à área do cliente
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No portal do INPI, o usuário deverá clicar no link “<a href="https://www.gov.br/inpi/pt-br/servicos/sistemas-de-peticionamento">Sistemas de peticionamento</a>”:
                                </Text>
                                <br/>
                                <ImageContainer 
                                    title="Figura 30 – Acesso ao sistema de peticionamento eletrônico" 
                                    imgSrc="/assets/figure-30-Acesso-ao-sistema-de-peticionamento-eletronico.png"
                                    subtitle="https://www.gov.br/inpi/pt-br" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Na sequência, deve ser selecionado o sistema de patentes:
                                </Text>
                                <br/>
                                <ImageContainer 
                                    title="Figura 31 – Acesso ao sistema e-Patentes" 
                                    imgSrc="/assets/figure-31-Acesso-ao-sistema-e-Patentes.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Em seguida, acessar e-Patentes.
                                </Text>
                                <br/>
                                <ImageContainer 
                                    title="Figura 32 – 2ª tela de acesso ao e-Patentes" 
                                    imgSrc="/assets/figure-32-segunda-tela-de-acesso-ao-e-Patentes.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Deverá ser preenchido o login e senha, conforme a figura a seguir:
                                </Text>
                                <br/>
                                <ImageContainer 
                                    title="Figura 33 – Login no e-Patentes" 
                                    imgSrc="/assets/figure-33-Login-no-e-Patentes.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A partir do momento em que se logar, o usuário terá 30 minutos para efetuar o
                                    preenchimento do formulário eletrônico. No entanto, caso o tempo de sessão se encerre durante
                                    o preenchimento, as informações lançadas até aquele momento estarão salvas. Basta que o
                                    usuário faça o login, novamente, para continuar o preenchimento.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    2. Acesso ao Formulário Eletrônico
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Após inserir seu login e senha e clicar em “Acessar”, o usuário deverá inserir o número da
                                    GRU (também chamado “nosso número”), devidamente paga, no campo abaixo reproduzido.
                                    Cumpre lembrar que é por intermédio desse número que a Diretoria de Patentes confirma a
                                    solicitação dos serviços e a conciliação bancária dos respectivos pagamentos. Portanto, o número
                                    da GRU constitui dado fundamental relativo à retribuição, além de possibilitar a eventual
                                    recuperação da segunda via do recibo do pedido.
                                </Text>
                                <ImageContainer 
                                    title="Figura 34 - Inserção do Nosso Número" 
                                    imgSrc="/assets/figure-34-Insercao-do-Nosso-Numero.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                /> 
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Ao inserir o número da GRU no campo apropriado e clicar em “Avançar”, o usuário terá
                                    acesso ao formulário eletrônico de pedido de patente de invenção e de modelo de utilidade ou
                                    certificado de adição de invenção que reproduzirá não apenas as informações referentes ao
                                    requerente e ao seu procurador (caso haja), como também alguns dados - natureza e forma de
                                    apresentação - relativos ao depósito requerido. Portanto, tais campos não poderão ser alterados.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Este guia segue apresentando os dados referentes ao depósito. A depender de cada
                                    serviço desejado, será necessário preencher os dados específicos no formulário eletrônico, bem
                                    como apresentar os anexos particulares.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Determinados serviços são isentos de peticionamento, bastando apenas que a GRU seja
                                    paga, e quando houver o conciliamento do pagamento com o sistema financeiro será gerado um
                                    número de protocolo de forma automática. Esses serviços isentos de peticionamento são as
                                    GRUs com código de serviço:
                                </Text>
                                <br/>
                                <ImageContainer 
                                    title="Figure 35 – Serviços isentos de peticionamento" 
                                    imgSrc="/assets/figure-36-Servicos-isentos-de-peticionamento.png"
                                    subtitle="elaboração própria" 
                                />
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    3. Dados do depositante
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Os dados do depositante precisam da atualização (obrigatória) da nacionalidade e da
                                    qualificação do depositante (pessoas jurídicas estão isentas da atualização de qualificação) (ver
                                    item 2.8.1). Além disso, o pedido de Patente de Invenção e de Modelo de Utilidade e certificado
                                    de adição de invenção permitem a cotitularidade, bastando para isso, a adição de depositante
                                    mediante o botão correspondente (ver item 2.8.2).
                                </Text>
                                <ImageContainer 
                                    title="Figura 36 - dados do requerente" 
                                    imgSrc="/assets/figure-35-dados-do-requerente.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    4. Dados do Pedido de Patente ou Certificado de Adição de Invenção
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O dado de natureza do pedido é carregado automaticamente com a informação fornecida
                                    na emissão da GRU. O requerente deve observar se existe alguma inconsistência nesse dado e,
                                    caso exista, poderá alterar a natureza clicando em “Alterar Natureza”. Na dúvida de qual a
                                    natureza adequada para sua invenção, consulte o item 2.5.
                                </Text>
                                <br/>
                                <ImageContainer 
                                    title="Figura 37 - dados do pedido de patente" 
                                    imgSrc="/assets/figure-37-dados-do-pedido-de-patente.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O usuário deverá preencher o campo com o título da invenção, que deverá ser idêntico
                                    ao título utilizado no Relatório Descritivo, Resumo, e Reinvindicações que serão enviados ao INPI.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O resumo do pedido deverá ser digitado ou copiado no campo, <b>devendo ser idêntico ao
                                    resumo que será anexado em PDF</b>. O preenchimento do resumo no campo do formulário não
                                    dispensa a apresentação do mesmo em formato PDF. Se tiver dúvidas sobre a redação do
                                    resumo, consulte o item 4.2.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A janela “Figura a publicar” é utilizada para o depositante escolher qual das figuras
                                    (desenhos) apresentadas será a representativa da invenção no momento da publicação do
                                    pedido. O Preenchimento deste campo é obrigatório em todos os depósitos em que forem
                                    anexados desenhos. Somente deve ser escolhida uma figura a ser publicada.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    5. Dados da Prioridade Unionista ou Prioridade Interna:
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A reivindicação de prioridade indica a existência de depósitos da mesma matéria pelos
                                    mesmos depositante/titulares dentro de um prazo de 12 meses. A prioridade garante a utilização
                                    da data mais antiga para fins de exame de anterioridade. A prioridade de depósito pode ser de
                                    pedidos de patente estrangeiros (prioridade unionista - ver item 2.6.1.2) ou pedidos de patente
                                    depositados no Brasil (prioridade interna – ver item 2.6.1.3).
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A reivindicação da prioridade deverá ser feita no ato do depósito, clicando na quadrícula
                                    específica. Ao marcar a solicitação, abre-se o campo para a indicação do tipo (Prioridade Interna
                                    ou Unionista), país ou Organização e número e data, em que ocorreu o primeiro depósito.<b>Não
                                    será possível efetuar essa solicitação em outro momento. A comprovação da prioridade poderá
                                    ser apresentada no depósito (como segue) ou em até 180 dias</b> a contar da data em que o
                                    depósito foi efetuado.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Tendo selecionado a quadrícula de reivindicação de prioridade, o formulário
                                    disponibilizará os campos conforme a figura a seguir. Devem ser preenchidos os campos relativos
                                    ao tipo de prioridade (unionista ou interna); o país ou instituição da prioridade (para a Prioridade
                                    interna, somente o país “Brasil” estará disponível); o número do documento da prioridade em
                                    questão; a data de depósito do documento de prioridade; campo para informação do código
                                    DAS, caso seja essa a forma de comprovação escolhida pelo depositante.
                                </Text>
                                <ImageContainer 
                                    title="Figura 38 – Preenchimento dos dados da prioridade de depósito (CUP)" 
                                    imgSrc="/assets/figure-38-Preenchimento-dos-dados-da-prioridade-de-deposito.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Caso o usuário queira reivindicar mais de uma prioridade, ele poderá fazê-lo mediante o
                                    preenchimento dos respectivos campos e clicando no botão “Adicionar Prioridade”.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    6. Dados do Inventor:
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O inventor é o responsável pela criação da patente de invenção e de modelo de utilidade.
                                    Não necessariamente é o depositante do pedido, pois pode ceder ou transferir seus direitos
                                    patrimoniais a outra pessoa física ou jurídica (ver item 2.8.3). Mesmo no caso de cessão ou
                                    transferência, é obrigatório constar no formulário o nome e a qualificação do inventor,
                                    necessariamente uma pessoa física.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Ao clicar em “Adicionar inventor”, a seguinte caixa de diálogo se abrirá:
                                </Text>
                                <ImageContainer 
                                    title="Figura 39 – Preenchimento dos dados do inventor" 
                                    imgSrc="/assets/figure-39-Preenchimento-dos-dados-do-inventos.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Caso seja de interesse do inventor a não divulgação de seu nome, esta deverá ser
                                    solicitada no ato do preenchimento dos dados. A informação não aparecerá no formulário
                                    protocolado, porém será salva no banco de dados interno do INPI, portanto deverá: (1) ser
                                    preenchido completamente os dados do inventor que se deseja que fique em sigilo, e (2)
                                    obrigatoriamente ser anexada uma “Declaração de não divulgação dos dados do Inventor/Autor”
                                    utilizando o modelo se encontra no site do INPI (<a href="https://www.gov.br/inpi/pt-br/servicos/patentes/materiais-de-consulta-e-apoio-1/Declaraodenodivulgaodosdadosdoautor_empapel.pdf">Modelo de não divulgação</a>). No item 5.5.12
                                    constam detalhes das informações desta declaração.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Havendo mais de um inventor, basta clicar no botão “Adicionar Inventor”.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    7. Dados do Procurador:
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Os dados relativos ao seu procurador, caso haja, reproduzirão as informações cadastradas
                                    pelo próprio advogado/agente da propriedade industrial para sua identificação no e-INPI. Assim,
                                    caso o acesso ao formulário eletrônico esteja sendo realizado pelo seu procurador, o formulário
                                    trará 2 (duas) informações básicas: um campo referente aos dados do requerente e outro
                                    relacionado aos dados do procurador.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Observa-se que caso o preenchimento seja feito pelo procurador o mesmo deverá estar
                                    constituído através de procuração válida ou substabelecimento da procuração, caso a
                                    procuração assim o permita fazer (ver item 5.5.12).
                                </Text>
                                <ImageContainer 
                                    title="Figura 40 – Preenchimento dos dados do procurador" 
                                    imgSrc="/assets/figure-40-Preenchimento-dos-dados-do-procurador.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    8. Declaração de Divulgação Anterior Não Prejudicial:
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A quadrícula de “Declaração de divulgação anterior não prejudicial” só deve ser marcada
                                    se o depositante estiver fazendo jus ao “Período de Graça” previsto no Artigo 12 da Lei 9.279/96
                                    (ver item 2.6.1.1). O período consiste no direito de depositar o pedido em até 12 meses contados
                                    a partir da primeira divulgação da invenção requerida. <b>Caso selecionado, o usuário deverá
                                    anexar documentação que comprove que, essa publicação anterior, ocorreu dentro dos 12
                                    meses que antecedem o depósito.</b>
                                </Text>
                                <ImageContainer 
                                    title="Figura 41 – Preenchimento da declaração de divulgação anterior não prejudicial (período de graça)" 
                                    imgSrc="/assets/figure-41-Preenchimento-da-declaração-de-divulgacao-anterior-nao-prejudicial.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    9. Sequências Biológicas:
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    As Proteínas, o DNA e o RNA são caraterizados através de suas sequências de aminoácidos
                                    e nucleotídeos, portanto, caso a invenção se refira a essas moléculas é necessário que suas
                                    Sequências Biológicas sejam apresentadas no formato de uma listagem, conforme descrito no
                                    item 4.6.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Ao preencher o formulário de depósito, o usuário deverá selecionar a quadrícula, para
                                    habilitar o campo de anexação da listagem e clicar em “Adicionar Anexo”. A marcação da
                                    quadrícula dispensa a apresentação adicional de Declaração de Veracidade, conforme
                                    estabelecido na Resolução referente à Listagem de Sequências (ver exemplo abaixo).
                                </Text>
                                <ImageContainer 
                                    title="Figura 42 – Declaração de limitação da sequencia biológica" 
                                    imgSrc="/assets/figure-42-Declaracao-de-limitacao-da-sequencia-biologica.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Ao selecionar a quadrícula, será aberto apenas um campo para a anexação da Listagem
                                    de Sequências Biológicas em formato TXT ou XML conforme as regras estabelecidas no
                                    Dispositivo Normativo específico em vigor.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Após o upload do arquivo da listagem de Sequências, o sistema gerará automaticamente
                                    e anexará o código de controle referente à listagem no formulário. <b>O Código de barras do código
                                    de controle em formato PDF e o Código de controle em formato XML não devem ser anexados
                                    ao formulário.</b> O envio do arquivo PDF da Listagem de sequências é facultativo.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    10. Material Biológico:
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Quando a invenção contiver material biológico essencial à sua realização, a descrição
                                    completa deste pode ser impossível de ser alcançada na forma escrita. Nesses casos, o usuário
                                    deverá realizar o Depósito do Material Biológico em instituição autorizada pelo INPI, ou indicada
                                    em acordo internacional vigente no país, ou em qualquer uma das autoridades de depósito
                                    internacional reconhecidas pelo Tratado de Budapeste, conforme descrito no item 4.7.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Ao preencher o formulário de depósito, o usuário deverá selecionar a quadrícula para
                                    habilitar os campos de preenchimento das informações relacionadas ao Material Biológico e a
                                    Autoridade de Depósito Internacional.
                                </Text>
                                <ImageContainer 
                                    title="Figura 43 – declaração de acesso ao material biológico" 
                                    imgSrc="/assets/figure-43-declaracao-de-acesso-ao-material-biologico.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O usuário deverá completar as informações solicitadas (1) Tipo de Material (Descreva de
                                    forma sucinta, por exemplo: Levedura (Saccharomyces cerevisiae)), (2) o Número de Acesso
                                    fornecido pela Autoridade Depositária e (3) qual foi a Autoridade Depositária em que o depósito
                                    foi realizado.
                                </Text>  
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Cabe destacar que, caso o usuário tenha mais de um deposito de material biológico, ele
                                    poderá incluir mediante o preenchimento dos respectivos campos e clicando no botão
                                    “Adicionar”.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O usuário deverá apresentar nos anexos, um “Recibo de Material Biológico” que
                                    comprove o depósito na Autoridade Depositária.
                                </Text>               
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    11. Acesso ao Patrimônio Genético:
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O Governo Federal publicou a Lei de Acesso ao Patrimônio
                                    Genético nº 13.123 de 20/05/2015, a qual, estabelece no artigo 47,
                                    que a concessão de Direitos de Propriedade Intelectual pelo órgão
                                    competente sobre produto ou processo obtido a partir de acesso a
                                    patrimônio genético ou a conhecimento tradicional associado fica
                                    condicionada ao cadastramento ou autorização, nos termos da lei,
                                    conforme descrito no item 4.8.
                                </Text>
                                <ImageContainer 
                                    title="Figura 44 – declaração de acesso ao patrimônio genético" 
                                    imgSrc="/assets/figure-44-declaracao-de-acesso-ao-patrimonio-genetico.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A primeira opção “Declaração Negativa de Acesso” deverá ser selecionada quando
                                    envolver as seguintes situações: (a) não se aplica - quando a área tecnológica (ou o campo
                                    tecnológico) da invenção não envolva nenhuma relação com amostra do patrimônio genético,
                                    seja nacional ou estrangeiro; (b) quando a invenção envolver acesso à amostra do patrimônio
                                    genético, porém não seja de Patrimônio Genético Brasileiro; (c) a amostra seja de Patrimônio
                                    Genético Brasileiro, contudo o acesso tenha ocorrido antes de 29/06/2000 (data da primeira
                                    edição da MP 2186-16/2001); ou (d) o acesso se enquadre nas exceções estabelecidas na
                                    legislação específica e em Resolução do CGEN.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A segunda opção “Declaração Positiva de Acesso” deverá ser selecionada sempre que a
                                    invenção for obtida em virtude de acesso à amostra de patrimônio genético e/ou conhecimento
                                    tradicional associado Brasileiro. O usuário, ao marcar a quadrícula, irá habilitar os campos de
                                    preenchimento: (1) Número da Autorização de Acesso, (2) Data da Autorização de Acesso e, (3)
                                    Origem do material genético e do conhecimento tradicional associado, quando for ao caso, o
                                    qual deverá ser descrito de forma sucinta, visto que a descrição completa já foi apresentada e
                                    analisada pelos órgãos que concederam o cadastro/autorização.
                                </Text>               
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    12. Anexos
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O campo Documentos Anexados, é de extrema
                                    importância no peticionamento do pedido ou petição. Deve-se
                                    estar atento à conferência dos arquivos enviados, e à correta
                                    identificação do Tipo de anexo que está sendo inserido no
                                    documento.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    De acordo com natureza do depósito ou a especificidade
                                    de cada petição, o formulário eletrônico correspondente deverá
                                    conter anexos, que poderão ser obrigatórios ou facultativos,
                                    conforme o caso. A figura a seguir mostra os tipos de anexos mais
                                    comuns para o depósito do pedido de patente ou modelo de
                                    utilidade (é muito importante que seja escolhida a identificação
                                    mais adequada ao tipo de documento que está sendo anexado):
                                </Text>
                                <ImageContainer 
                                    title="Figura 45 – Anexo de documentos" 
                                    imgSrc="/assets/figure-45-Anexo-de-documentos.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O usuário deverá (a) escolher o tipo de anexo que deseja inserir, (b) clicar no botão
                                    “Adicionar Anexo” e em seguida (c) selecionar, no seu computador o arquivo em formato PDF,
                                    que deseja anexar no formulário eletrônico. Após estes três passos o anexo constará no
                                    formulário eletrônico, que também apresentará o nome selecionado para o arquivo.
                                </Text>  
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O Relatório Descrito, Reivindicações, Resumo e Desenhos deverão, obrigatoriamente, ser
                                    enviados em arquivos separados (no caso, PDF separados). O quadro abaixo apesenta os
                                    documentos necessários para o depósito:
                                </Text> 
                                <ImageContainer 
                                    title="igura 46 – Lista de documentos para depósito" 
                                    imgSrc="/assets/figure-46-lista-de-documentos-para-deposito.jpg"
                                    subtitle="elaboração própria"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Os depósitos que não contiverem Relatório Descritivo ou Reivindicação anexados não
                                    serão protocolados e a documentação será devolvida. Quando houver relatório descritivo e
                                    reinvindicação no documento de depósito, será publicada uma exigência formal para a
                                    apresentação dos demais documentos (ver item 6.3.1).
                                </Text>           
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    12.1. Observações importantes quanto aos anexos
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Algumas observações são importantes quanto aos
                                    anexos. Primeiramente, alguns anexos não são obrigatórios
                                    para prosseguir o peticionamento, mas podem ser
                                    obrigatórios a depender das características do invento e/ou
                                    de seus depositantes.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Evite enviar documentos, sob a rubrica “outros”, que
                                    não sejam absolutamente necessários ao exame do pedido.
                                    Todo o atual sistema foi arquitetado para a conveniência da
                                    parcela mais ampla possível de interessados – de pessoas
                                    físicas à jurídicas, de pequenas a grandes empresas, usuários
                                    com ou sem procurador – assim, os diversos tipos de anexos,
                                    tanto nos pedidos quanto nas petições, foram limitados aos
                                    mais frequentes ou essenciais, permanecendo a opção “outros” para os casos em que
                                    efetivamente nenhuma categoria pré-estabelecida satisfaça o encaminhamento da demanda.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O usuário poderá remover os anexos, a qualquer momento antes do envio do formulário,
                                    clicando no ícone que consta ao lado direito de cada um. <b>Porém, não será possível modificar,
                                    adicionar ou retirar documentos anexados após a finalização do processo de peticionamento
                                    eletrônico.</b>
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O envio de documentos via internet para a Diretoria de Patentes não desobriga o usuário
                                    à guarda dos originais. Nesse sentido, a posse e/ou guarda do original do instrumento de
                                    procuração é obrigatório, uma vez que, a qualquer momento, o INPI poderá formular exigência
                                    relativa à apresentação do referido documento. Trata-se, portanto, de medida de segurança
                                    tanto para o INPI, quanto para os usuários e procuradores / agentes da propriedade industrial.
                                </Text>             
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    12.2. Especificações técnicas dos anexos
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Só serão aceitos documentos que tenham a extensão PDF,
                                    uma vez que esse tipo de extensão impede a edição não
                                    autorizada, o que se constitui em medida de segurança para o
                                    usuário. O arquivo de texto poderá ser convertido para PDF
                                    utilizando-se o aplicativo Texto (integrante do OpenOffice,
                                    Software Livre e gratuito); o Microsoft Word (2007 em diante) ou
                                    o Acrobat Writer.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No caso de documentos de texto que precisem ser
                                    impressos para autenticação e depois ter suas páginas
                                    digitalizadas ou ainda no caso de envio de cópia de documentos já impressos, é recomendado
                                    que:
                                </Text>
                                <br/>
                                <Text>
                                    <ul>
                                        <li>
                                            cada página seja digitalizada em preto e branco como uma imagem TIF, no
                                            tamanho original e com uma resolução de 200 a 300 DPI;
                                        </li>
                                        <li>
                                            após a digitalização de todas as páginas do documento, estas devem ser colocadas
                                            num documento do editor de texto Word ou do Open Office para então serem
                                            convertidas em arquivo PDF, pois esse arquivo, ainda que contenha diversas
                                            imagens, ficará com tamanho comprimido, o que facilita a transmissão do arquivo;
                                        </li>
                                    </ul>
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Os arquivos PDF anexados não poderão ter nenhum tipo de bloqueio ou restrição, como
                                    por exemplo, protegidos por senha ou contra gravação e/ou impressão. O usuário deverá,
                                    obrigatoriamente, observar as especificações técnicas referentes à transmissão documentos
                                    através do formulário eletrônico:
                                </Text>
                                <ImageContainer 
                                    title="Figura 47 – especificações técnicas dos documentos do depósito" 
                                    imgSrc="/assets/figure-47-especificacoes-tecnicas-dos-documentos-do-deposito.png"
                                    subtitle="elaboração própria"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Documentos com tamanho superior a 30 MB podem ser fracionados, de forma a serem
                                    enviados inteiramente. (Exemplo: Contrato Social – Parte 1; Contrato Social – Parte 2; Contrato
                                    Social – Parte 3). <b>Não é possível fracionar os arquivos das sequências biológicas.</b>
                                </Text>               
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </TabPanel>
                <TabPanel>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Para finalizar o preenchimento do formulário eletrônico de pedido ou de petição, o
                        usuário deverá declarar a veracidade das informações prestadas, conforme a figura seguinte.
                        Sem assinalar esta Declaração, o usuário não conseguirá enviar o formulário:
                    </Text>
                    <ImageContainer 
                        title="Figura 48 – Declaração de veracidade" 
                        imgSrc="/assets/figure-48-Declaracao-de-veracidade.png"
                        subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                        subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Para finalizar o preenchimento do formulário eletrônico de pedido ou de petição, o
                        usuário deverá declarar a veracidade das informações prestadas, conforme a figura seguinte.
                        Sem assinalar esta Declaração, o usuário não conseguirá enviar o formulário:
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Após ter assinalado a declaração anterior, o usuário terá, ao final do formulário, 3 (três)
                        opções, a saber, “voltar” “terminar outra hora” e “avançar”, conforme figura abaixo:
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        <b>Voltar</b>: O usuário retornará para a tela inicial, na qual deverá inserir novamente a GRU
                        para reabrir o formulário. As informações preenchidas até então serão gravadas;
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        <b>Terminar outra hora</b>: É efetuado automaticamente o logout do sistema. O usuário deverá
                        informar login e senha para ter acesso ao mesmo. As informações preenchidas ficarão gravadas
                        para posterior envio do formulário, sendo sua recuperação feita por meio do número da GRU;
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        <b>Avançar</b>: O sistema fará uma verificação, visando identificar se as informações
                        indispensáveis foram preenchidas e se os anexos obrigatórios foram inseridos no formulário.
                        Caso o sistema detecte que algum campo obrigatório não foi preenchido, ou algum documento
                        obrigatório não foi anexado, uma mensagem de erro será emitida, como abaixo:
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Se as informações básicas estiverem preenchidas o sistema
                        apresentará uma prévia do formulário, a fim de que o mesmo seja
                        validado, pelo usuário, antes do envio. É nesse momento que o usuário
                        poderá se certificar de todos os dados e informações. Não negligencie
                        este importante momento do envio do formulário eletrônico. O
                        sucesso no preenchimento do pedido ou petição é fundamental para
                        que o processo não sofra nenhum tipo de exigência, fato que
                        obviamente atrasaria a decisão final do pedido.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Abaixo da prévia do formulário, constarão 2 (duas) opções, a
                        saber, “voltar” e “protocolar”, conforme figura abaixo:
                    </Text>
                    <ImageContainer 
                        title="Figura 49 – Prévia do documento antes do protocolo" 
                        imgSrc="/asets/figure-49-Previa-do-documento-antes-do-protocolo.png"
                        subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                        subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        <b>Voltar</b>: Este procedimento deverá ser adotado sempre que, na visualização prévia, o
                        depositante encontrar alguma inconsistência ou algo que deseje alterar. Clicando em “voltar”, o
                        usuário r
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        <b>Protocolar</b>: Significa que a Guia de Recolhimento já foi paga, que o usuário concorda com
                        a visualização prévia e vai efetivamente apresentar o seu pedido ou petição de patente, modelo
                        de utilidade ou certificado de adição de invenção.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Tendo selecionado a opção “Protocolar”, abrirá a caixa abaixo, alertando ao usuário sobre
                        todas as questões relativas à emissão da Guia de Recolhimento e ao pagamento, já descritas
                        neste manual:
                    </Text>
                    <ImageContainer 
                        title="Figura 50 – Mensagem de alerta antes do protocolo" 
                        imgSrc="/assets/figure-50-Mensagem-de-alerta-antes-do-protocolo.png"
                        subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                        subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                    />
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Selecionando a opção “Fechar” o usuário retornará para a
                        visualização prévia e poderá clicar em “voltar” para reeditar o
                        formulário. Selecionando “Protocolar”, não será mais possível alterar
                        as informações inseridas no formulário eletrônico. Este é o momento
                        exato em que o formulário será enviado e emitirá o recibo de envio.
                        A tela a seguir denota o efetivo envio do formulário eletrônico. A
                        opção “Voltar ao início”, conduz o usuário novamente à tela para
                        inserção do número da GRU e preenchimento de um novo serviço.
                    </Text>
                    <ImageContainer 
                        title="Figura 51 – Link para baixar o documento protocolado" 
                        imgSrc="/assets/figure-51-Link-para-baixar-o-documento-protocolado.png"
                        subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                        subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                    />
                    <br/>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    1. Informações importantes geradas no protocolo
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No protocolo serão geradas informações essenciais sobre o pedido e sobre a petição.
                                </Text>
                                <ImageContainer 
                                    title="Figura 52 – informações gerada no momento do protoloco" 
                                    imgSrc="/assets/figure-52-informacoes-gerada-no-momento-do-protoloco.png"
                                    subtitle="elaboração própria."
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O <b>Número do protocolo</b> é essencial para o acompanhamento do andamento das petições
                                    apresentadas. Caso esteja depositando o pedido, este será apenas um número de controle num
                                    universo geral de pedidos e petições. O acompanhamento deverá ser efetuado pelo número de
                                    pedido, de doze dígitos.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A <b>Data e horário do protocolo</b> descrevem a data e hora em que o sistema do INPI recebe
                                    o pedido ou petição. Em caso de pedido de patente ou modelo de utilidade, observe que a data
                                    em que é enviado o pedido, será a chamada data de depósito para os pedidos nacionais, sendo
                                    que para os pedidos PCT será a data da apresentação de entrada na fase nacional brasileira (a
                                    data de deposito de um pedido PCT é sempre a data do deposito internacional).
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O <b>Número do pedido</b> é atribuído automaticamente pelo sistema PAG. O novo código de
                                    numeração dos pedidos de patente é representado por: BR ZZ XXXX YYYYYY K. O 1º bloco
                                    numérico (ZZ) corresponde à natureza da proteção, de acordo com a natureza determinada pelo
                                    usuário e é apresentado após as letras BR. Para patentes, estes números serão:
                                </Text>
                                <ImageContainer 
                                    title="Figura 53 – Natureza dos pedidos de patente" 
                                    imgSrc="/assets/figure-53-Natureza-dos-pedidos-de-patente.png"
                                    subtitle="elaboração própria"
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Os 2º e 3º blocos numéricos do código - XXXX e YYYYYY, respectivamente, correspondem
                                    ao ano de entrada no INPI e à numeração da ordem de depósito dos pedidos de patente e de
                                    certificado de adição. O número representado por K corresponde ao dígito verificador. Por
                                    exemplo, o primeiro pedido de patente de invenção, depositado em 2012 no INPI tem o seguinte
                                    número: BR 10 2012 000001-0.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Com esse número, poderá ser acompanhado o andamento do processo através da RPI
                                    (em formato PDF), disponível no portal do INPI, inclusive com relação a eventual exigência
                                    formal. No caso de apresentação de petição, este será o número do pedido de patente ao qual a
                                    petição se refere.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    2. Obtendo o recibo de envio do formulário eletrônico
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O usuário terá acesso ao recibo do pedido de patente ou da petição clicando no botão
                                    abaixo reproduzido:
                                </Text>
                                <ImageContainer 
                                    title="Figura 54 – link para baixar (dowload) o formulário eletrônico" 
                                    imgSrc="/assets/figure-54-link-para-baixar-dowload-o-formulário-eletronico.png"
                                    subtitle="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                    subtitleLink="https://www.gov.br/inpi/pt-br/servicos/patentes/e-patentes" 
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Ao clicar no botão acima reproduzido, será aberta uma tela perguntando se o usuário
                                    deseja fazer o download em seu computador ou apenas abrir o arquivo gerado. O recibo do
                                    pedido ou da petição será emitido em PDF. Para a leitura de arquivos PDF é necessário ter
                                    instalado o software Acrobat Reader, que é gratuito e pode ser baixado na Internet.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    O recibo contém importantes aspectos a serem observados pelo usuário. Os dados
                                    preenchidos no formulário eletrônico juntamente com a documentação anexada passam a
                                    compor um único arquivo em PDF que não pode ser alterado, conferindo total segurança aos
                                    usuários do sistema. As páginas são numeradas, contabilizando as páginas do formulário e
                                    também as páginas relativas aos anexos. <b>Sugerimos imprimir o recibo e guardar o número do
                                    pedido ou da petição que aparecerá no recibo, para acompanhamento na Revista da
                                    Propriedade Industrial.</b>
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No arquivo em formato PDF, ao clicar no ícone, estará disponível ao usuário o menu de
                                    acesso rápido aos seus documentos. Nesse menu, será disponibilizado um index, contendo os
                                    títulos de anexos, definidos pelo próprio usuário no preenchimento do formulário eletrônico,
                                    conforme modelo a seguir. Daí a importância de o usuário realmente anexar o arquivo que diz
                                    corresponder a determinado documento.
                                </Text>
                                <ImageContainer 
                                    title="Figura 55 – Marcadores do documento .pdf gerado" 
                                    imgSrc="/assets/figure-55-Marcadores-do-documento-pdf-gerado.png"
                                    subtitle="elaboração própria."
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No exemplo acima, foram anexados 5 (cinco) documentos, que foram incorporados ao
                                    recibo em PDF. O usuário poderá ter acesso a cada um dos documentos de forma rápida, sem
                                    precisar percorrer o arquivo página por página e ainda poderá averiguar se toda a documentação
                                    pretendida foi realmente enviada no depósito eletrônico.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}