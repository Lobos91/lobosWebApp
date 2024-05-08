import React from "react";
import flaga from "../../assets/flaga.png";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation("");
  return (
    <div className="flex justify-center pt-28 pb-20 text-white ">
      <div className="w-1/5 fixed left-0 top-1/2 transform -translate-y-1/2 hide-on-1024 ">
        <img src={flaga} className="imageAnimation" />
      </div>
      <div className="text-center w-3/5 centertext-mobile ">
        <h1 className="text-orange-600 text-3xl pb-4">
          {" "}
          {t("news.title")}
        </h1>
       

        <hr className="styledHr my-6" />
   
    <article>
          <h1 className="text-lg text-orange-400">
          Aktualizacja 1.2 (Finalna)
          </h1>
        <ul className="text-orange-200">
        <li>
        • Naprawiono zadanie z siarką dla mordraga którego przedwczesne wykonanie mogło zablokować rozgrywkę.
            </li>
            <li>
            • Jozo, Lammar, Horacy i Miguel są od teraz nieśmiertelni dopóki ich rola fabularnie nie dobiegnie końca.
            </li>
            <li>
            • Poprawiono skalowanie czasu. Od teraz umiejętność berserk powinna działać poprawnie
            </li>
            <li>
            • Poprawienie warunku w krypcie, który powodował przedwczesną zmianę rutyny i dialog z Yao.
            </li>
            <li>
            • Poprawiono nakładanie się efektu na Yao podczas walki który powodował jego ”padaczke” lub zamrożenie na poziomie Ultra.
            </li>
            <li>
            • Naprawiono regenerację Yao podczas walki.
            </li>
            <li>
            • Runy takie jak tchnienie śmierci, duchowe uderzenie i powtarzalny strzał konsumują od teraz mniej many.
            </li>
            <li>
            • Naprawiono bug z kosturem Tajfun
            </li>
            <li>
            • Od teraz Neptun posiada klucz do swojej komnaty.
            </li>
            <li>
            • Logan daje teraz 3 dodatkowe mikstury many za wykonanie jego zadania.
            </li>
            <li>
            • Lazaroth daje teraz więcej złota za wykonanie jego zadania ze świątynią.
            </li>
            <li>
            • Dodano więcej strzał i bełtów do kupienia u kupca Prahla.
            </li>
          </ul>

        
          <p className="italic">
            2024-05-08
          </p>
        </article>
        <hr className="styledHr my-6" />


        <article>
          <h1 className="text-lg text-orange-400">
          Aktualizacja 1.1
          </h1>
        <ul className="text-orange-200">
        <li>
              - Dodano możliwość wyboru włączania i wyłączania animowanych okien w opcjach gry.
            </li>
            <li>
              - Naprawiona opcja wyboru wyświetlania podpisów w opcjach gry.
            </li>
            <li>
              - Naprawiona opcja wyboru oznaczania celów w opcjach gry.
            </li>
            <li>
              - Naprawiona opcja wyboru podświetlania obiektów w opcjach gry.
            </li>
            <li>
              - Naprawiona opcja wyboru ruchu kamery w opcjach gry.
            </li>
            <li>
              - Naprawiona opcja włączania i wyłączania myszy w opcjach gry.
            </li>
            <li>
              - Naprawiona opcja wyboru skalowania i odtwarzania filmów w opcjach gry.
            </li>
            <li>
              - Poprawiono bugowanie się bramy i zadania po śmierci Volta.
            </li>
            <li>
              - Osłabiono Volta na poziomie Story z 1500hp do 800hp oraz obniżono jego obrażenia o 50.
            </li>
            <li>
              - Osłabiono obrażenia Cesara na poziomie Story o 215.
            </li>
            <li>
              - Poprawiono kilka literówek w dzienniku oraz przepis na pierścień szybkości.
            </li>
            <li>
              - Poprawiono dubbing Miguela.
            </li>
            <li>
              - Dodano brakującą kwestię Mousa.
            </li>
            <li>
              - Dodano 10 dodatkowych mikstur many do znalezienia w dolinie.
            </li>
            <li>
              - Poprawiono outro z creditsami.
            </li>
            <li>
              - Poprawiono dodawanie wpisu do dziennika odnośnie umiejętności łapacza dusz.
            </li>
            <li>
              - Gobliny z zadania ”złodzieje zapasów” dostały do ekwipunu starą monetę by zapobiec zniknięciu ich ciała, zanim zbierzemy ich przedmioty.
            </li>
            <li>
              - Od teraz będzie można zabić Centusia zanim jeszcze dostaniemy na niego zlecenie i nadal kontynuować grę.
            </li>
            <li>
              - Od teraz będzie można zabić Benito zanim jeszcze dostaniemy zadanie z nim związane i nadal kontynuować grę.
            </li>
            <li>
              - Dodano dodatkowy wpis do dziennika związane z misją ”zatruć jedzenie”.
            </li>
            <li>
              - Dodano dodatkowy wpis do dziennika związane z misją ”haracz”.
            </li>
            <li>
              - Naprawiono zakładanie kostura przez handlarza Jana.
            </li>
           
          </ul>

       
          <p className="italic">
            2024-05-04
          </p>
        </article>
        <hr className="styledHr my-6" />


      


       
      
      </div>

      <div className="w-1/5 fixed right-0 top-1/2 transform -translate-y-1/2">
        <img
          src={flaga}
          className="scale-x-[-1] hide-on-1024  imageAnimation"
        />
      </div>
    </div>
  );
};

export default News;
