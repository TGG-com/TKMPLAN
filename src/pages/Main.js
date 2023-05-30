import React from "react";
import { TextTab } from "../database/Text";
import SectionText from "../components/SectionText";
import CoverPage from "../components/CoverPage";
import SectionTitle from "../components/SectionTitle";

export default function Main() {
  const url = "https://www.youtube.com/watch?app=desktop&v=Q9n2mLqXFpU";
  const url2 = "https://github.com/TGG-com/TheKindMissile/blob/main/sources/links.csv";
  return (
    <div className="Main">
        <CoverPage title="TheKindMissile" subtitle="Sorry, I don't want to hit you !" name="Achraf Groiez | TGG-com"/>
        {
            TextTab.map((value) => 
                <SectionText
                    key={value.id} 
                    title={value.title} 
                    subtitle={value.subtitle} 
                    svg={value.svg} 
                    text={value.text} 
                />
            )
        }
        <div className="totalFlexCol">
          <div>
            <SectionTitle title="Structure of the project" />
            <img src="./img/Structure.jpg" />
          </div>
          <SectionTitle title="Links" />
          <p>1. PedroTech “How To Deploy A React App To Github Pages (Simple)” PedroTech, <a href={url}>{url}</a></p>
          <p>2. TGG-com, “Links.csv” TGG-com, <a href={url2}>{url2}</a></p>
        </div>
    </div>
  );
}