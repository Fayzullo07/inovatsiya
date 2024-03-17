import Shuhrat from "../public/shuhrat.jpg"
import Dusmurod from "../public/dusmurod.jpg"
import User from "../public/user.png"
import { CalendarCheckIcon, HandshakeIcon, NewspaperIcon, RssIcon } from "lucide-react";

export const navbar = [
    { icon: <RssIcon />, name: "Yangiliklar", slug: "/news" },
    { icon: <NewspaperIcon />, name: "Loyihalar", slug: "/projects" },
    { icon: <HandshakeIcon />, name: "Hamkorlar", slug: "/partners" },
    { icon: <CalendarCheckIcon />, name: "Tadbirlar", slug: "/events" },
    { icon: <NewspaperIcon />, name: "Tashabbuskorlar", slug: "/initiators" },
    { icon: <NewspaperIcon />, name: "Xizmatlar", slug: "/services" },
    { icon: <NewspaperIcon />, name: "Aql Markazi", slug: "/#services" },
    // { name: "Bog'lanish", slug: "/boglanish" },
    // { icon: <NewspaperIcon />, name: "Biz haqimizda", slug: "/#about" },
    // { name: "Dashboard", slug: "/dashboard" },
];

export const stats = [
    { companies: 92 },
    { winners: 27 },
    { consulting: 25 },
    { clients: 187 }
];

export const ourTeam = [

    {
        id: 1,
        img: Shuhrat,
        name: "Исроилов Шухратхон Ахматхонович",
        job: "Председатель Ассоциации",
        desc: "Исроилов Шухратхон drives the technical strategy of the flowbite platform and brand."
    },
    {
        id: 2,
        img: Dusmurod,
        name: "Исмоилов Дустмурод Гайбулла угли",
        job: "Проект-менеджер",
        desc: "Bonnie drives the technical strategy of the flowbite platform and brand."
    },
    {
        id: 3,
        img: User,
        name: "Хотамбоев Ислом Муминбоевич",
        job: "Председатель Совета экспертов Ассоциации",
        desc: "Michael drives the technical strategy of the flowbite platform and brand."
    },
    {
        id: 4,
        img: User,
        name: "Хакимов Маъсум Лукмонович",
        job: "Заместитель Председателя",
        desc: "Lana Byrd drives the technical strategy of the flowbite platform and brand."
    },

    {
        id: 5,
        img: User,
        name: "Абдухаликов Махмуд Абдуганиевич",
        job: "Юрист",
        desc: "Lana Byrd drives the technical strategy of the flowbite platform and brand."
    },

    {
        id: 6,
        img: User,
        name: "Каримов Тошпулат Гуламджанович",
        job: "Аудитор",
        desc: "Lana Byrd drives the technical strategy of the flowbite platform and brand."
    },

    {
        id: 7,
        img: User,
        name: "Кудратов Наврузбек Баходир угли",
        job: "Бухгалтер",
        desc: "Lana Byrd drives the technical strategy of the flowbite platform and brand."
    },
    {
        id: 8,
        img: User,
        name: "Бобоназаров Хоким Убайдуллаевич",
        job: "Советник председателя",
        desc: "Lana Byrd drives the technical strategy of the flowbite platform and brand."
    },

    {
        id: 9,
        img: User,
        name: "Теловов Асилбек Темирович",
        job: "Советник председателя",
        desc: "Lana Byrd drives the technical strategy of the flowbite platform and brand."
    },
    {
        id: 10,
        img: User,
        name: "Холмирзаев Жасур Абдумаджидович",
        job: "Советник председателя",
        desc: "Lana Byrd drives the technical strategy of the flowbite platform and brand."
    },
    {
        id: 11,
        img: User,
        name: "Юлдашев Акрамжон Курбонназарович",
        job: "Советник председателя",
        desc: "Lana Byrd drives the technical strategy of the flowbite platform and brand."
    },
    {
        id: 12,
        img: User,
        name: "Хусанов Мурод Неъматович",
        job: "Советник председателя",
        desc: "Lana Byrd drives the technical strategy of the flowbite platform and brand."
    },
    {
        id: 13,
        img: User,
        name: "Цараков Эльбрус Сергеевич",
        job: "Советник председателя",
        desc: "Lana Byrd drives the technical strategy of the flowbite platform and brand."
    }
]


export const dataCompanies = [
    {
        company: "INNOVATIVE BUSINESS TECHNOLOGY",
        desc: "Промышленно-производственный консалтинг. Управленческий консалтинг."
    },
    {
        company: "DIGITAL BUSINESS TECHNOLOGIES",
        desc: "Консалтинг в сфере информационных технологий. Разработка, внедрение, сопровождение программных продуктов. Обучение в сфере IT технологий."
    },
    {
        company: "DASSTYOUR CONSULTING",
        desc: "Маркетинговый консалтинг. Экологический консалтинг. Обучающий консалтинг. Бухгалтерские услуги."
    },
    {
        company: "VA-TAN BUSINESS",
        desc: "Изучение конъюнктуры рынка. Реклама. Брендинг. Дизайн. Коммуникации."
    },
    {
        company: "AL-MAHMUD MASLAHATI",
        desc: "Юридический консалтинг. Правовая экспертиза предприятия"
    },
    {
        company: "INNOVATIVE AGRO CLUSTER",
        desc: "Комплексный консалтинг в сельском хозяйстве."
    },
    {
        company: "ADVERTISING PROMOTION",
        desc: "Деятельность в сфере рекламы."
    },
    {
        company: "INSURANCE DEVELOPMENT",
        desc: "Финансовый, налоговый, бухгалтерский консалтинг. Создание и управление страховыми компаниями."
    }
]