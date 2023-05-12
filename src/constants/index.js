import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";
import { env } from './env'

export const navLinks = [{
        id: "home",
        title: "Home",
        link: `${env.api}/doc.html`,
    },
    {
        id: "apis",
        title: "API's",
        link: "/apis",

    },
    {
        id: "solucoes",
        title: "Soluções",
        link: "/solucoes",
    },
];

export const features = [{
        id: "feature-1",
        icon: star,
        title: "Documento De Entrada",
        content: "Cadastre, consulte seus Documentos de Entrada a qualquer momento.",
        link: `${env.api}/doc.html#tag/Documento-de-Entrada`,
    },
    {
        id: "feature-2",
        icon: shield,
        title: "Inventário",
        content: "Realize análise, contagem e inventário por meio de nossas API’s.",
        link: `${env.api}/doc.html#tag/Inventory`,
    },
    {
        id: "feature-3",
        icon: send,
        title: "Documento De Saída",
        content: "Cadastre, consulte seus Documentos de Saída a qualquer momento.",
        link: `${env.api}/doc.html#tag/Documento-de-Saida`,
    },
];

export const feedback = [{
        id: "feedback-1",
        content: "Nunca foi tão útil uma API que nos permitisse a realização de inventários de maneira simples integrada ao nosso ERP",
        name: "José Ereno",
        title: "Founder & Leader",
        img: people01,
    },
    {
        id: "feedback-2",
        content: "Construir aplicações ou consultas por meio das integrações fornecidas pela Zion tornam tarefas difíceis cada vez mais simples.",
        name: "Eduardo Brunelli",
        title: "Founder & Leader",
        img: people02,
    },
    {
        id: "feedback-3",
        content: "Por meio das API’s disponibilizadas pela Zion criamos novas soluções para nossos processos.",
        name: "Thor Derenzi",
        title: "Founder & Leader",
        img: people03,
    },
];

export const stats = [{
        id: "stats-1",
        title: "Usuários Ativos",
        value: "3800+",
    },

    {
        id: "stats-2",
        title: "Recomendações",
        value: "230+",
    },

];

export const footerLinks = [{
        title: "API's mais vistas",
        links: [{
                name: "Conferência",
                link: "https://zionlogtec.com.br/",
            },
            {
                name: "Inventário",
                link: "https://zionlogtec.com.br/",
            },
            {
                name: "Documento Saída",
                link: "https://zionlogtec.com.br/",
            },
            {
                name: "Portaria",
                link: "https://zionlogtec.com.br/",
            },
            {
                name: "Pesagem",
                link: "https://zionlogtec.com.br/",
            },
        ],
    },
    {
        title: "Comunidade",
        links: [{
                name: "Suporte",
                link: "https://zionlogtec.com.br/",
            },
            {
                name: "Parceiros",
                link: "https://zionlogtec.com.br/",
            },
            {
                name: "Sugestões",
                link: "https://zionlogtec.com.br/",
            },
            {
                name: "Blog",
                link: "https://zionlogtec.com.br/",
            },
            {
                name: "Atualizações",
                link: "https://zionlogtec.com.br/",
            },
        ],
    },
    {
        title: "Parceiros",
        links: [{
                name: "Nossos Parceiros",
                link: "https://zionlogtec.com.br/",
            },
            {
                name: "Seja um Parceiro",
                link: "https://zionlogtec.com.br/",
            },
        ],
    },
];

export const socialMedia = [{
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/zionlogtec/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/Zionlogtec.oficial",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/company/zion-logtec/mycompany/",
    },
];

export const clients = [{
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];