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
/**
 * @typescript - more presice ah ana antha session ah learn pannen - athu romba viyapa irunthuthu
 * and ithuv another god gift ah irukalam
 * na pala dev itha out of the box ah expose pannum bothu pathen
 * ithu enaku poga poga teriyum
 * first thing -  intha type aha namaku show pannum - athu precise ah irukum - ithula antha string can be anything
 * athukum mela nama kudukura string tha irukanum na nama as const use panna antha particular str than show agum matha mudiyathu - athu than readonly
 */