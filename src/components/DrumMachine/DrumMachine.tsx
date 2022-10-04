import React, { useState } from "react";
import { pads } from "../../database/pads.fakebase";
import DrumPadList from "../DrumPadList/DrumPadList";

const DrumMachine = () => {
    const [str, setStr] = useState("");

    const display = (s: string) => {
        setStr(s);
    };

    return (
        <div id="drum-machine">
            <div id="display">
                <DrumPadList pads={pads} display={display} />
                <p>{str}</p>
            </div>
        </div>
    );
};

export default DrumMachine;
