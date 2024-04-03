export const links = [
    {
        name: "Home",
        hash: '#home',
    },
    {
        name: "About",
        hash: '#about',
    },
    {
        name: "Projects",
        hash: '#projects',
    }, {
        name: "Skills",
        hash: '#skills',
    },
    {
        name: "Experience",
        hash: '#experience',
    },
    {
        name: "Contact",
        hash: '#contact',
    }
] as const; // type script - key la iruka koodiya string/ data va matha mudiyathu

/**
 * const -  change panna mateom - key change pannalam
 * but typescript - atha readonly ah vechikum matha mudiyathu
 */