import React, { useCallback, useEffect, useRef } from "react";
import { DrumPad as DrumPadInterface } from "../../interfaces/DrumPad.interface";
import "./DrumPad.css";

interface DrumPadProps extends DrumPadInterface {
    display: Function;
}

const DrumPad: React.FC<DrumPadProps> = (props) => {
    const { text, audio, display } = { ...props };
    const audioRef = useRef<HTMLAudioElement>(null);

    const playAudio = () => {
        audioRef.current?.play();
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        playAudio();
        display(audio.name);
    };

    const handleKeyboard = useCallback(
        (event: KeyboardEvent) => {
            console.log(event.key);
            if (event.key.toUpperCase() === text) {
                playAudio();
                display(audio.name);
            }
        },
        [audio.name, display, text]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyboard, true);
        return () => {
            window.removeEventListener("keydown", handleKeyboard, true);
        };
    }, [handleKeyboard]);

    return (
        <div id={text} className="drum-pad drum__pad" onClick={handleClick}>
            <span className="drum__pad__key">{text}</span>
            <audio
                id={text}
                className="drum__pad__audio clip"
                ref={audioRef}
                src={audio.link}
                controls
            />
        </div>
    );
};

export default DrumPad;
