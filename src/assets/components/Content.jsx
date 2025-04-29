import React from 'react';
import './Content.css';

function Content(){
    return(
        <>
            <section>
                <h2>O que é Spyware?</h2>
                <p>Spyware é um tipo de software malicioso que se instala no computador ou celular sem a pessoa saber. Ele serve para espionar o que o usuário faz, como os sites que acessa, senhas que digita, mensagens que envia e até a localização. Essas informações podem ser enviadas para criminosos, que usam isso para roubo de identidade, fraudes ou invasões de contas.</p> <br />

                <h2>Como detectar?</h2>
                <p>Um jeito fácil de tentar identificar se seu computador tem spyware é usando o Gerenciador de Tarefas do Windows. Para isso, aperte Ctrl + Shift + Esc para abrir a janela do Gerenciador. Olhe os programas que estão rodando e veja se há algo estranho ou que você não reconhece. Se encontrar algo suspeito, pesquise o nome na internet. Além disso, você pode usar um antivírus confiável para fazer uma varredura completa no seu computador.</p> <br />

                <h2>Como remover?</h2>
                <p>Para remover spyware do seu computador, comece desconectando-o da internet para evitar que ele envie dados. Em seguida, inicie o sistema no Modo de Segurança para impedir a execução do software espião. Utilize um antivírus ou antimalware, como o Malwarebytes, para escanear e remover o spyware. Verifique também se há programas suspeitos e desinstale-os, além de limpar os dados de navegação no seu navegador. É importante também verificar os processos em execução e atualizar o sistema para corrigir falhas de segurança. Após isso, reinicie o computador e faça uma nova verificação para garantir que o spyware foi completamente removido.</p> <br />

                <h2>5 formas de me proteger contra Spyware</h2>
                <li>Instale um bom antivírus: Um antivírus confiável ajuda a detectar e bloquear spywares antes que eles infectem o seu sistema;</li>
                
                <li>Mantenha o sistema e programas atualizados: Instale regularmente atualizações de segurança para o sistema operacional e softwares. Muitas infecções acontecem por falhas de segurança não corrigidas;</li>

                <li>Evite clicar em links desconhecidos: Não clique em links ou baixe arquivos de fontes não confiáveis, como e-mails ou sites desconhecidos;</li>

                <li>Não baixe programas de fontes não oficiais: Evite fazer download de softwares de sites não confiáveis ou de fontes desconhecidas, pois muitos deles podem conter spywares;</li>

                <li>Use uma rede segura: Evite usar redes Wi-Fi públicas para transações ou navegação sensível, já que elas podem ser alvos fáceis para ataques.</li> <br />

                <h3>Para saber mais, visite:</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vJWn_xvOSNs?si=88s7KRoJkCryki3H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
        </>
    );
};
export default Content;