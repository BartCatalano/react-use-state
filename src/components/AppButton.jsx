import { useState } from "react";
import languages from "../date/languages";




function AppButton() {
const [activeLang, setActiveLang] = useState ("Clicca su un linguaggio per avere la descrizione")

const changeLanguages = (newLanguages) => {
setActiveLang(newLanguages);
}
    return (
        <div>
       {languages.map((curLang, id ) => (
            <button onClick={() => {changeLanguages(curLang.description)}} key={curLang.id}> {curLang.title}</button>
         ))}
         <div>
           
           {activeLang}
            </div>
         </div>
    );
}


export default AppButton;