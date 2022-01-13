import { QueueTypeEng } from "../../types/QueueType";

const code_queueType: { [key: number]: QueueTypeEng } = {
    400: 'norm', //Normal Draft Pick
    420: 'solo',
    430: 'norm',
    440: 'flex',
    450: 'aram',
    700: 'clash',
    830: 'ai',
    840: 'ai',
    850: 'ai',
    900: 'urf',
    920: 'poro',
    1020: 'ofa',
    1300: 'nbg',
    1400: 'usb', // Ultimate Spellbook
    2000: 'tut',
    2010: 'tut',
    2020: 'tut',
}

export default code_queueType;

// export default {
//     400: 'norm', //Normal Draft Pick
//     420: 'solo',
//     430: 'norm',
//     440: 'flex',
//     450: 'aram',
//     700: 'clash',
//     830: 'ai',
//     840: 'ai',
//     850: 'ai',
//     900: 'urf',
//     920: 'poro',
//     1020: 'ofa',
//     1300: 'nbg',
//     1400: 'usb', // Ultimate Spellbook
//     2000: 'tut',
//     2010: 'tut',
//     2020: 'tut',
// }