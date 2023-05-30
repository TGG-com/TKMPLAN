import React from "react";

export default function CoverPage(param) {
    const {title, subtitle, name} = param
    return (
        <div className="CP-global">
            <div className="CoverPage">
                <div className="CP-theTitles">
                    <div className="CP-pad">
                        <h1 className="CP-title">{title}</h1>
                        <h3 className="CP-subtitle">"{subtitle}"</h3>
                    </div>
                    <div className="CP-signature">
                        <p className="CP-name">{name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}