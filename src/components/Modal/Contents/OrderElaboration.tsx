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
                <Tab>Considerações iniciais</Tab>
                <Tab>Título</Tab>
                <Tab>Resumo</Tab>
                <Tab>Relatório descritivo</Tab>
                <Tab>Reivindicações</Tab>
                <Tab>Desenhos</Tab>
                <Tab>Listagem de sequências</Tab>
                <Tab>Material biológico</Tab>
                <Tab>Acesso ao patrimônio genético</Tab>
                <Tab>Informações adicionais</Tab>
            </TabList>

            <TabPanels sx={{"max-height": "calc(100vh - 300px)", "overflow-y":"auto"}}>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                        Após a realização da busca prévia poderá ser iniciada a
                        redação do pedido de patente. As informações básicas para
                        elaboração do Pedido de Patente ou Certificado de Adição
                        encontram-se a seguir.          
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        <b>É fundamental que, antes de iniciar a redação do pedido de
                        patente, o usuário leia a Lei da Propriedade Industrial nº
                        9279/1996 (LPI), as Instruções Normativas 30/2013 e 31/2013</b>, que
                        dispõem sobre a aplicação da LPI em relação às patentes e aos certificados de adição. É
                        fortemente recomendável ler também as Guias de Exame Técnico (material que o examinador
                        de patentes utilizada para realizar o exame substantivo) do campo técnico específico da
                        invenção.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        O INPI disponibiliza um conjunto de ferramentas simples
                        para auxiliar o inventor e/ou depositante nacional a redigir seu
                        pedido de patente (bem como depositar e acompanhar a
                        tramitação) chamado <a href="https://www.gov.br/inpi/pt-br/servicos/patentes/minha-primeira-patente/minha-primeira-patente">Minha Primeira Patente</a>.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Esse conjunto de ferramentas não dispensa a leitura da
                        legislação sobre patentes, mas pode ser um bom começo para quem
                        não está familiarizado com o assunto. No Minha Primeira Patente
                        você poderá ter exemplos de patentes deferidas em diferentes
                        campos técnicos.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        De maneira geral, os Pedidos de Patente ou Certificado de
                        Adição devem conter:
                    </Text>
                    <br/>
                    <Text>
                        <ul>
                            <li>relatório descritivo;</li>
                            <li>reivindicações (quadro reivindicatório);</li>
                            <li>listagem de sequências, se for o caso (vide itens 4.6 e 5.5.9);</li>
                            <li>desenhos, se for o caso;</li>
                            <li>e resumo.</li>
                        </ul>
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        As folhas relativas ao relatório descritivo, às reinvindicações, aos desenhos e ao resumo
                        deverão ser numeradas consecutivamente, com algarismos arábicos, indicando o número da
                        página e o número total de páginas, de cada uma dessas partes, como por exemplo 1/3, 1 de 3,
                        1-3, etc.
                    </Text>
                    <br/>
                </TabPanel>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        O título do pedido deve definir de forma concisa, clara e precisa o escopo técnico da
                        invenção, e deve ser o mesmo para o requerimento, o relatório descritivo, o resumo, e a listagem
                        de sequências, se houver. O título deve representar adequadamente as diferentes categorias de
                        reivindicações e não conter expressões ou palavras irrelevantes ou desnecessárias, tais como,
                        “novo”, “melhor”, “original” e semelhantes, ou quaisquer denominações de fantasia ou de
                        marca.
                    </Text>
                </TabPanel>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        O resumo deve conter uma descrição sumária do objeto do pedido de patente. Ele deve
                        ser iniciado pelo título, em destaque com relação ao restante do texto e ressaltar de forma clara
                        a matéria objeto de proteção. Deve englobar as características técnicas, a solução para o
                        problema descrito e seus principais usos, tendo como finalidade principal facilitar a busca do
                        pesquisador nos Bancos de Patentes. O resumo deve contar entre cinquenta (50) e duzentas
                        (200) palavras, e no máximo 25 linhas de texto. Importante: Não devem ser incluídos caracteres
                        diferentes da ABNT2 (Associação Brasileira de Normas Técnicas).
                    </Text>
                </TabPanel>
                <TabPanel>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        O relatório descritivo deve apontar o problema existente
                        no estado da técnica e a solução proposta, especificando o setor
                        técnico a que se destina. Além disso, o relatório deve ressaltar
                        nitidamente a novidade, o efeito técnico alcançado (no caso de
                        invenção) e as vantagens em relação ao estado da técnica.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        É no relatório descritivo que o depositante deve descrever
                        todos os detalhes que permitam um técnico da área reproduzir a
                        invenção ou modelo de utilidade. Nele deve também constar,
                        quando for o caso, as variantes de execução e a melhor forma de
                        execução (Art. 24 da LPI). Em outras palavras, o relatório
                        descritivo de um Pedido de Patente ou Certificado de Adição deve
                        ter suficiência descritiva.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Como já visto anteriormente, há diferentes categorias de
                        invento que podem ser patenteadas (item 2.5). Os inventos estão
                        divididos em dois grupos principais: produtos e processos. Os
                        produtos podem ser equipamentos/aparelhos; objetos, invenção
                        implementada por computador (IIC), compostos, composição ou
                        Kit. Os processos podem ser métodos, uso e IIC. <b>Deve ficar claro
                        qual o tipo de invento descrito e há regras específicas de redação
                        de cada categoria.</b>
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Os modelos de utilidade, só podem fazer referências a um
                        tipo particular de produtos: os objetos de uso prático. O relatório
                        descritivo de um Pedido de Patente de Modelo de Utilidade deverá
                        evidenciar a condição de melhor utilização do objeto ou parte deste, resultante da nova forma e
                        disposição introduzida, evidenciando a melhoria funcional alcançada.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        As seguintes etapas devem ser seguidas para a confecção do relatório descritivo:
                    </Text>
                    <br/>
                    <Text>
                        <ul>
                            <li>
                                Iniciar com o título, em destaque com relação ao restante do texto;
                            </li>
                            <li>
                                Referir-se a uma única invenção, ou a um grupo de invenções inter-relacionadas de
                                maneira que constituam um só conceito inventivo;
                            </li>
                            <li>
                                Descrever a finalidade, aplicação e campo técnico de utilização da invenção;
                            </li>
                            <li>
                                Comparar a matéria objeto de proteção com o estado da técnica, ressaltando suas
                                vantagens e o problema que vem solucionar;
                            </li>
                            <li>
                                Ressaltar, nitidamente, a novidade e evidenciar o efeito técnico alcançado;
                            </li>
                            <li>
                                Indicar, explicitamente, a utilização industrial, quando essa não for evidente a partir da
                                descrição da invenção;
                            </li>
                            <li>
                                Cada parágrafo do relatório descritivo deverá ser iniciado com uma numeração
                                sequencial, em algarismos arábicos, localizada a esquerda do texto, como por exemplo
                                [003], 015, etc.
                            </li>
                            <li>
                                Relacionar os desenhos apresentados, numerando-os consecutivamente e descrevendo
                                o seu significado, conforme o exemplo abaixo, e assim sucessivamente para todas as
                                figuras apresentadas no pedido de patente. A relação de figuras não deve ser numerada
                                como parágrafos.
                            </li>
                        </ul>
                    </Text>
                    <ImageContainer 
                        title="Figura 10 – Exemplo da descrição dos desenhos" 
                        imgSrc="/assets/figure-10-Exemplo-da-descricao-dos-desenhos.png"
                        subtitle="Fonte: elaboração própria"  
                    />
                    <br/>
                    <Text>
                        <ul>
                            <li>
                                Descrever pormenorizadamente o objeto do pedido de patente, de acordo com os
                                desenhos apresentados, reportando-se às referências numéricas de cada parte do
                                desenho, por exemplo:
                            </li>
                        </ul>
                    </Text>
                    <ImageContainer 
                        title="Figura 11 - Exemplo da descrição detalhada da invenção" 
                        imgSrc="/assets/figure-11-Exemplo-da-descricao-detalhada-da-invencao.png"
                        subtitle="Fonte: elaboração própria"  
                    />
                </TabPanel>
                <TabPanel>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        A redação das reivindicações é da maior importância na elaboração de um pedido de
                        patente. A extensão da proteção conferida pela patente é determinada pelo conteúdo das
                        reivindicações, interpretado com base no relatório descritivo e nos desenhos.<b>Ou seja, as
                        reivindicações definem e delimitam os direitos do autor do pedido (Art. 41 da LPI).</b>
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        As reivindicações devem ser fundamentadas no relatório descritivo, caracterizando as
                        particularidades do pedido, e definindo de forma clara e precisa a matéria objeto da proteção,
                        evitando expressões que acarretem em indefinições (Art. 25 da LPI).
                    </Text>
                    <br/>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    1. Formulação das Reivindicações
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    A formulação da reivindicação tem regras próprias e
                                    específicas. Para melhor resguardar seus direitos, recomenda-se
                                    que se iniciem com o título do invento; seguidas por um preâmbulo
                                    explicitando as características essenciais a definição da matéria
                                    reivindicada e já compreendidas pelo estado da técnica; conter uma
                                    única expressão <b>"caracterizado por"</b>; seguida pelas características
                                    técnicas essenciais e particulares que, em combinação com os
                                    aspectos explicitados no preâmbulo, se deseja proteger. No
                                    eventual deferimento do pedido de patente, o trecho da matéria
                                    após a expressão “caracterizado por” será de propriedade do titular.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    As reivindicações são classificadas como independentes e dependentes:
                                </Text>
                                <br/>
                                <Text>
                                    <ul>
                                        <li>
                                            <b>Reivindicações independentes</b> - são aquelas que, mantida
                                            a unidade de invenção - ou técnico-funcional e corporal do
                                            objeto (no caso de Modelo de Utilidade) - visam a proteção
                                            de características técnicas essenciais e específicas da
                                            invenção, ou do modelo de utilidade, em seu conceito
                                            integral. As reivindicações independentes podem servir de
                                            base a uma ou mais reivindicações dependentes.
                                        </li>
                                        <li>
                                            Reivindicações dependentes - são aquelas que, mantidas a
                                            unidade de invenção, ou técnico-funcional e corporal,
                                            incluem características de outra(s) reivindicação(ões)
                                            anterior(es), e definem detalhamentos dessas
                                            características e/ou características adicionais, contendo uma indicação de dependência a
                                            essa(s) reivindicação(ões). Por exemplo:
                                        </li>
                                    </ul>
                                </Text>
                                <br/>
                                <ImageContainer 
                                    title="Figura 12 - exemplo da uma reivindicação dependente" 
                                    imgSrc="/assets/figure-12-exemplo-da-uma-reivindicacao-dependente.png"
                                    subtitle="Fonte: elaboração própria"  
                                />
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    No pedido de Patente de Invenção, não há limite de reivindicações (dependentes e/ou
                                    independentes). As reivindicações devem ser arranjadas da forma mais prática possível. A forma
                                    usual é agrupar as reivindicações por categorias (ver seção 2.5). Podem existir reivindicações de
                                    uma ou várias categorias (tais como produto e processo, processo e aparelho, produto e
                                    aparelho, etc.), contanto que elas estejam ligadas pelo mesmo conceito inventivo. Inclusive, é
                                    permitido a existência de mais de uma reivindicação independente da mesma categoria, se tais
                                    reivindicações definirem diferentes conjuntos de características alternativas e essenciais à
                                    realização da invenção.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    As reivindicações independentes de categorias diferentes, em que uma das categorias
                                    seja especialmente adaptada à outra, serão, de preferência, formuladas de modo a evidenciar
                                    sua interligação, empregando-se, na parte inicial da reivindicação, expressões, como por
                                    exemplo: "Aparelho para realização do processo definido na reivindicação...", "Processo para a
                                    obtenção do produto definido na reivindicação...".
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    As reivindicações devem efetivamente descrever as características de forma positiva. Isso
                                    significa que não podem conter textos do tipo "como descrito no relatório descritivo" ou "como
                                    representado pelos desenhos". Isso também significa que não deve conter textos explicativos
                                    com relação ao funcionamento, forma de utilizar, ou vantagens. Da mesma forma, a
                                    reivindicação não pode conter expressões do tipo "...caracterizado por não possuir ... ".
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                                    Quanto à forma, cada reivindicação deverá ser em texto contínuo, com um único ponto
                                    no final. Porém, não há limites para o uso da vírgula (,) ou o ponto-e-vírgula (;) no texto. No caso
                                    de o pedido conter desenhos, deve-se citar nas reivindicações os respectivos sinais de referência,
                                    entre parênteses, visando facilitar a compreensão do examinador do pedido.
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
                                    2. Reivindicações de modelos de utilidade
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    No caso de Patente de Modelo de Utilidade, o objeto deverá estar integralmente
                                    caracterizado em uma única reivindicação principal e independente. No caso de um pedido de
                                    patente de modelo de utilidade, após a expressão "caracterizado por" devem ser definidos todos
                                    os elementos que o constituem, bem como os seus posicionamentos e interconexões em relação
                                    ao conjunto.
                                </Text>
                                <br/>
                                <Text textAlign="justify" sx={{"text-indent":"50px"}} mt="5">
                                    O modelo poderá incluir elementos complementares de uso opcional ou variação de
                                    forma caracterizada em reivindicações dependentes, definidos na reivindicação principal. Caso o
                                    modelo seja uma estrutura planificada definida na reivindicação principal, admite-se uma
                                    reivindicação dependente descrevendo a forma tridimensional secundária do objeto decorrente
                                    daquela estrutura planificada.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </TabPanel>
                <TabPanel>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Os desenhos deverão ser apresentados com clareza, em traços
                        firmes, uniformes, em tinta indelével e, serão tantos quantos forem
                        necessários à perfeita compreensão do objeto da patente, sendo
                        numerados consecutivamente.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Cada parte, peça ou elemento do desenho, deverá conter
                        referências numéricas, as quais deverão ser descritas no relatório
                        descritivo, bem como nas reivindicações.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Nos pedidos de Patentes de Modelo de Utilidade é obrigatório apresentar um ou mais
                        desenhos, uma vez que a leitura do quadro reivindicatório é sempre associada a eles, tendo em
                        vista que se referem especificamente a objetos tridimensionais.
                    </Text>
                    <br/>
                    <ImageContainer 
                        title="Figura 13 – exemplo de desenho de um pedido de patente" 
                        imgSrc="/assets/figure-13-exemplo-de-desenho-de-um-pedido-de-patente.png"
                        subtitle="Fonte: banco de patentes do INPI"
                    />
                </TabPanel>
                <TabPanel>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Às vezes, é impossível descrever a invenção de forma escrita. Este é o caso, por exemplo,
                        de produtos como proteínas e polinucleotídeos que são caracterizados por suas sequências
                        biológicas. Portanto, caso a invenção contenha essas moléculas é necessário que suas Sequências
                        Biológicas sejam apresentadas no formato de uma listagem.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        É fundamental que, antes de apresentar uma Listagem de Sequências Biológicas, o
                        usuário leia atentamente os Dispositivos Normativos do INPI relacionadas às questões técnicas e
                        formais das Sequências Biológicas, e em caso de dúvida entre em contato. A apresentação da
                        Listagem de Sequências Biológicas ocorre em formato TXT ou XML conforme as regras
                        estabelecidas no Dispositivo Normativo específico em vigor (Portaria/INPI/PR Nº 405, de
                        21/12/2020).
                    </Text>
                </TabPanel>
                <TabPanel>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Quando a invenção contiver material biológico essencial à sua realização, a descrição
                        completa deste também pode ser impossível de ser alcançada na forma escrita. Nesses casos, o
                        usuário deverá realizar o Depósito do Material Biológico em instituição autorizada pelo INPI, ou
                        indicada em acordo internacional vigente no país, ou em qualquer uma das autoridades de
                        depósito internacional reconhecidas pelo Tratado de Budapeste.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        O depósito de material biológico deverá realizar-se em uma das Autoridades de Depósito
                        Internacional (IDA) cadastradas na Organização Mundial da Propriedade Intelectual – OMPI para
                        fins do <a href="http://www.wipo.int/treaties/en/registration/budapest">Tratado de Budapeste</a>. Ressalta-se que, caso a informação sobre o depósito do material
                        biológico não conste no relatório descritivo (cópia do recibo de material biológico emitido pela
                        Autoridade de Depósito Internacional), este pode ser exigido pelo examinador. Tal medida visa
                        a cumprir o disposto no parágrafo único do Artigo 24 da Lei 9.279/96.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        É fundamental que, antes de realizar o Depósito de Material Biológico e o pedido de
                        patente, o usuário leia atentamente os Dispositivos Normativos do INPI relacionados às questões
                        técnicas e formais do Depósito de Material Biológico, bem como se informe quais são as
                        Autoridades de Depósito Internacional (<a href="https://www.wipo.int/budapest/es/">IDAs</a>), e em caso de dúvida, entre em contato com o INPI.
                    </Text>
                </TabPanel>
                <TabPanel>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        O Governo Federal publicou a Lei de Acesso ao Patrimônio Genético nº 13.123 de
                        20/05/2015, que entrou em vigor em 17 de novembro de 2015. Esta Lei substituiu a MP 2.186-
                        16/2001, que começou a ser editada em 29/06/2000 como a Medida Provisória (MP) 2.052/2000,
                        e que estabeleceu o estatuto legal sobre o Acesso ao Patrimônio Genético Nacional e/ou
                        Conhecimento Tradicional Associado. A Lei 13.123/2015, bem como já ocorria na MP
                        2.186/2001, estabelece no artigo 47, que a concessão de Direitos de Propriedade Intelectual pelo
                        órgão competente sobre produto ou processo obtido a partir de acesso a patrimônio genético
                        ou a conhecimento tradicional associado fica condicionada ao cadastramento ou autorização,
                        nos termos da lei.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Portanto, todos os usuários que acessaram o patrimônio genético nacional ou o
                        conhecimento tradicional associado que pretendem ter seu Pedido de Patente, Modelo de
                        Utilidade ou Certificado de Adição de Invenção concedidos, deverão realizar o Cadastro, ter a
                        Autorização Prévia, ou regularizar o seu acesso, conforme a legislação vigente. Cabe destacar que
                        o cadastramento deve ocorrer previamente ao depósito do pedido de patente. No ato de um
                        depósito de um pedido de patente o usuário deverá informar se houve acesso ao patrimônio
                        genético ou ao conhecimento tradicional associado, como também se há cadastro de acesso. O
                        INPI não emite cadastro/autorização de Acesso a Recursos Genéticos e/ou Conhecimento
                        Tradicional Associado. O cadastramento/autorização de acesso, bem como a regularização
                        destes, é realizado no Sistema Nacional de Gestão do Patrimônio Genético e do Conhecimento
                        Tradicional Associado – SisGen, (<a href="http://sisgen.gov.br/">http://sisgen.gov.br</a>), e deve seguir os prazos estabelecidos pelo
                        CGEN (Conselho de Gestão do Patrimônio Genético). Para mais informações acesse Cadastro ao
                        Patrimônio Genético em <a href="https://www.gov.br/pt-br/servicos/cadastrar-acesso-ao-patrimonio-genetico-e-ou-conhecimento-tradicional-associado">Acesso ao patrimonio genetico</a>.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        É fundamental que, antes de realizar o depósito do pedido de patente e de modelo de
                        utilidade ou certificado de adição de invenção, o usuário leia atentamente toda a legislação
                        relacionada a Acesso ao Patrimônio Genético e os Dispositivos Normativos do INPI e, em caso de
                        dúvida, entre em contato com o INPI ou com o CGEN.
                    </Text> 
                </TabPanel>
                <TabPanel>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        A redação do pedido de patente é fundamental para a aquisição do direito. Além do mais,
                        cada tipo de invento tem características próprias que devem ser atendidas – o que impede o
                        aprofundamento neste manual. Sugerimos fortemente as seguintes consultas adicionais:
                    </Text> 
                    <br/>
                    <Text>
                        <ul>
                            <li>
                                Artigos 19 a 29 da Lei da Propriedade Industrial (LPI) nº 9279/1996;
                            </li>
                            <li>
                                A integralidade das Instruções Normativas 30/2013 e 31/2013, que dispõe sobre
                                a aplicação da LPI em relação às patentes e aos certificados de adição;
                            </li>
                            <li>
                                As Guias de Exame Técnico (material que o examinador de patentes utilizada para
                                realizar o exame substantivo) do campo técnico específico da invenção;
                            </li>
                            <li>
                                Uso da ferramenta Minha Primeira Patente.
                            </li>
                        </ul>
                    </Text> 
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        A LPI, as Instruções Normativas 30/2013 e 31/2013 e as Diretrizes de Exame de
                        Patentes, encontram-se disponíveis no endereço eletrônico <a href="https://www.gov.br/inpi/pt-br/servicos/patentes/legislacao">Legislação</a>.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        O Minha Primeira Patente pode ser acessado através do link <a href="https://www.gov.br/inpi/pt-br/servicos/patentes/minha-primeira-patente/minha-primeira-patente">Minha Primeira Patente</a>.
                    </Text>
                    <br/>
                    <Text textAlign="justify" sx={{"text-indent":"50px"}}>
                        Para a obtenção de uma patente, cabe ao autor da Invenção ou Modelo de Utilidade
                        requerer a proteção legal junto ao INPI, observadas as condições e formalidades previstas na
                        legislação. De posse dos documentos descritos no Título 4, tona-se possível efetuar o depósito.
                        O texto que segue apresenta os procedimentos para efetuar o depósito através do
                        peticionamento eletrônico. Para efetuar um peticionamento eletrônico, o requerente deverá
                        observar os seguintes passos, exatamente na ordem abaixo descrita:
                    </Text>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}