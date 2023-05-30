import React from "react";
import SectionTitle from "./SectionTitle";

export default function SectionText(param) {
    const {title, subtitle, svg, text} = param;
    return (
    <div className="SectionText">
        <div className="totalFlexCol">
            <div className="ST-titles">
                <SectionTitle title={title} />
                <i><h2 className="secondTitle">{subtitle}</h2></i>
            </div>
            <img className="inkscape" src={svg} type="image/x-icon" alt="img" />
            <p className="code">{text}</p>
        </div>
    </div>
  );
}