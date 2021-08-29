import React from 'react'
import './App.css';


export default function Word({data}) {
   return (
      <div className="containerWord">
         {data==null?null:(<>
         <div className="word">
            {data.word}
         </div>
         <div className="origin">
            <p>ORIGIN: {data.origin}</p>
         </div>
         <div className="audioSound">
            <audio controls autoPlay>
               <source src={data.phonetics[0].audio} type="audio/mpeg" />
            </audio>
         </div>
         <div className="meanings">
            {data.meanings.map(element => (
               <>
                  <div className="partOfSpeech">
                     <p>PART OF SPEECH: {element.partOfSpeech}</p>
                  </div>
                  <div className="definition">
                     <p>DEFINITION: {element.definitions[0].definition}</p>    
                  </div>
               </>
            ))}
         </div>
         
         </>
         )}
      </div>

   )
}
