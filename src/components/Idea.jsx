import React from "react";
import lobosBG1 from "../assets/lobosbg1.png";

const Idea = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${lobosBG1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: 800,
      }}
    >
      <h1 className="text-orange-500 text-3xl pb-2">Idea modyfikacji</h1>
      <div className=" leading-9 ">
        <p className="text-white">
          To, na co szczególnie zwróciłem uwagę, to dbałość o szczegóły i
          logika, by w modzie wszystko znalazło swoje uzasadnienie, niebyło
          wyrwane z kontekstu, będąc przypadkowo pozlepianą modderską fantazją.
          Nieprzemyślane kwestie dialogowe i misje, potężne artefakty czy inne
          „mega” bronie, którymi posiekamy większość potworów już w połowie gry
          to zjawisko, które skutecznie odbiera chęć do kontynuowania rozgrywki.
          Skupiłem się na tym, by rozgrywka przybrała bardziej „realną” formę
          wliczając w to świat, dialogi, ekonomię, postacie, potwory i
          przedmioty, gdzie super ekwipunek czy złoto nie leżą na ziemi tylko
          trzeba się o to postarać.
        </p>
      </div>
    </div>
  );
};

export default Idea;
