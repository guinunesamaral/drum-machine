import React from "react";
import DrumPad from "../DrumPad/DrumPad";
import { DrumPad as DrumPadInterface } from "../../interfaces/DrumPad.interface";
import "./DrumPadList.css";

interface DrumPadListProps {
    pads: Array<DrumPadInterface>;
    display: Function;
}

const DrumPadList: React.FC<DrumPadListProps> = (props) => {
    return (
        <div className="drum__pad__list">
            {props.pads.map((p, i) => (
                <DrumPad key={i} {...p} display={props.display} />
            ))}
        </div>
    );
};

export default DrumPadList;
