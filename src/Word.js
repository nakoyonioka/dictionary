import React from "react";
import "./App.css";

export default function Word({ data }) {
  return (
    <div className="containerWord">
      {data == null ? null : (
        <>
          <div className="word">{data.word}</div>

          <div className="origin">
            <p>
              ORIGIN: <span>{data.origin}</span>
            </p>
          </div>

          <div className="audioSound">
            <audio controls>
              <source src={data.phonetics[0].audio} type="audio/mpeg" />
            </audio>
          </div>

          <div className="meanings">
            {data.meanings.map((element, index) => (
              <div key={index}>
                <div className="bar"></div>
                <div className="partOfSpeech">
                  <span>{element.partOfSpeech}:</span>
                </div>
                <div className="definition">
                  <p>{element.definitions[0].definition}</p>
                </div>
                <div className="bar"></div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
