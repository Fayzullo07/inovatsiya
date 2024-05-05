import { CalendarCheckIcon, HandshakeIcon, NewspaperIcon, RssIcon } from "lucide-react";

export const navbar = [
    { icon: <RssIcon />, name: "Yangiliklar", slug: "/news" },
    { icon: <NewspaperIcon />, name: "Loyihalar", slug: "/projects" },
    { icon: <HandshakeIcon />, name: "Hamkorlar", slug: "/partners" },
    { icon: <CalendarCheckIcon />, name: "Tadbirlar", slug: "/events" },
    { icon: <NewspaperIcon />, name: "Tashabbuskorlar", slug: "/initiators" },
    { icon: <NewspaperIcon />, name: "Xizmatlar", slug: "/services" },
    { icon: <NewspaperIcon />, name: "Aql Markazi", slug: "/center_mind" },
    { icon: <NewspaperIcon />, name: "Ilmiy etika", slug: "/ilmiy_etika" },
];

export const stats = [
    { companies: 92 },
    { winners: 27 },
    { consulting: 25 },
    { clients: 187 }
];

export const data_links = [
    {
        slug: "/news",
        title: "Yangiliklar"
    },
    {
        slug: "/projects",
        title: "Loyihalarimiz"
    },
    {
        slug: "/members",
        title: "A'zolar"
    },
    {
        slug: "/events",
        title: "Tadbirlar"
    },

    {
        slug: "/partners",
        title: "Hamkorlar"
    },
    {
        slug: "/initiators",
        title: "Tashabbuskorlar"
    },
    {
        slug: "/services",
        title: "Xizmatlar"
    },
    {
        slug: "/center_mind",
        title: "Aql Markazi"
    },
    {
        slug: "/ilmiy_etika",
        title: "Ilmiy etika"
    },
    {
        slug: "/about",
        title: "Biz haqimizda"
    },
]
