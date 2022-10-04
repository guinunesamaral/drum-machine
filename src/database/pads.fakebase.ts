import { DrumPad as DrumPadInterface } from "../interfaces/DrumPad.interface";

export const pads: Array<DrumPadInterface> = [
    {
        text: "Q",
        audio: {
            name: "Heater 1",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        },
    },
    {
        text: "W",
        audio: {
            name: "Heater 2",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        },
    },
    {
        text: "E",
        audio: {
            name: "Heater 3",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        },
    },
    {
        text: "A",
        audio: {
            name: "Heater 4",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        },
    },
    {
        text: "S",
        audio: {
            name: "Clap",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        },
    },
    {
        text: "D",
        audio: {
            name: "Open HH",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        },
    },
    {
        text: "Z",
        audio: {
            name: "Kick n' hat",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        },
    },
    {
        text: "X",
        audio: {
            name: "Kick",
            link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        },
    },
    {
        text: "C",
        audio: {
            name: "Closed HH",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        },
    },
];
