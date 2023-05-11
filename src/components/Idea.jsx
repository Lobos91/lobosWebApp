import React from "react";


const Idea = () => {
  return (
    <>
    <div
      style={{
        backgroundColor: '#202020',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex items-center justify-center flex-col pt-5 pl-96 pr-96 pb-5 text-center"
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
          Skupiłem się na tym, aby rozgrywka przybrała bardziej „realną” formę
          wliczając w to świat, dialogi, ekonomię, postacie, potwory i
          przedmioty, gdzie super ekwipunek czy złoto nie leżą na ziemi tylko
          trzeba się o to postarać.
        </p>
      </div>
    </div>
    <hr className="styledHr" style={{height: 3}}/>
    </>
  );
};

export default Idea;
