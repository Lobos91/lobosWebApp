import React from "react";


const Idea = () => {
  return (
    <>
    <div 
      style={{

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex items-center justify-center flex-col pt-5 pl-96 pr-96 pb-7 text-center"
    >
      
      <h1 className="text-orange-500 text-3xl pb-4">Idea modyfikacji</h1>
      <div className=" leading-9 text-white">
        <p>
          To, na co szczególnie zwróciłem uwagę, to dbałość o szczegóły, wyważony balans i
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
         <p> Nawet najbardziej starannie zrobiony mod ze świetną 
          fabułą może okazać się nudny lub niepełny jeśli zabraknie w nim balansu i dobrze zaprojektowanej ekonomii. 
          Te 2 czynniki są kluczem do stworzenia udanych gier typu RPG opartych o rozwój postaci. 
          </p> 
          
      </div>
    </div>
    <hr className="styledHr" style={{height: 3}}/>
    </>
  );
};

export default Idea;
