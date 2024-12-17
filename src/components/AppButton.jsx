import { useState } from "react";
import languages from "../date/languages";




function AppButton() {
const [activeLang, setActiveLang] = useState ("Clicca su un linguaggio per avere la descrizione")


    return (
        <div>
       {languages.map((curLang, id ) => (
            <button onClick={() => {setActiveLang(curLang.description)}} key={curLang.id}> {curLang.title}</button>
         ))}
         <div className="border">
           
           {activeLang}
            </div>
         </div>
    );
}


export default AppButton;