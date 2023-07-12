import React from "react";
import uriziel from "../assets/urizliel.png";
import kusza from "../assets/kusza.png";

const Noobguide = () => {
  return (
    <div className="flex justify-center pt-28 pb-20 text-white ">
      <div className="text-center ">
        <h1 className="text-orange-600 text-3xl pb-4">Jak nie być noobem</h1>
        <h1 className="text-xl italic underline underline-offset-4 pb-4">
          Krótki poradnik o tym, jak stać się bardziej PRO i nie lamić Gothica.
        </h1>

        <br />
        <div className="max-w-5xl">
          <h1>
            Pierwsza i podstawowa kwestia to przelicznik obrażeń. Niektórzy
            nadal nie wiedzą na czym polega skalowanie obrażeń w gothicu.
            Niektóre mody zmieniają sposób skalowania obrażeń ale w tym
            poradniku odniosę się do skalowania z oryginalnego Gothica 1/2 oraz
            Nocy Kruka ponieważ nadal większość modów bazuje na tym skalowaniu i
            Lobos nie jest wyjątkiem.
          </h1>
          <br />
          <article className="flex pb-2">
            <div className="w-1/5">
              <img src={uriziel} className="pr-10" />
            </div>
            <div className="w-3/5 ">
              <h1>
                Obrażenia broni do walki wręcz zależą od{" "}
                <span className="text-red-500">SIŁY</span> naszej postaci.
                Niezależnie czy jest to miecz, topór, szpada pod zręczność czy
                dwuręczny kostur pod manę. Każda broń jednoręczna i dwuręczna
                skaluje się z siłą.
              </h1>
              <br />
              <h1>
                Obrażenia łuków i kusz zależą od naszej{" "}
                <span className="text-green-500">ZRĘCZNOŚCI.</span> Kusze co
                prawda wymagają siły by je założyć ale ich obrażenia zależą od
                zręczności.
              </h1>
            </div>
            <div className="w-1/5">
              <img src={kusza} />
            </div>
          </article>
          <h1>
            Inwestowanie w obrażenia jakie zadajemy przeciwnikom powinno stać
            się priorytetem grając w każdą modyfikację, a w szczególności w
            Lobosa.
          </h1>
          <hr className="styledHr mt-4 mb-2" />
          <article>
            <h1 className="text-lg text-orange-200">
              Goblinie jagody i Smocze korzenie
            </h1>
            <h1>
              Jeśli w modzie występują{" "}
              <span className="text-red-500">Goblinie jagody</span> i{" "}
              <span className="text-green-500">Smocze korzenie</span>, znaczy to
              najprawdopodobniej, że będzie można zrobić z nich mikstury, które
              znacznie zwiększą nasze statystyki niż gdybyśmy zjedli te rośliny.
              Prawdziwy gothikowiec widząc gracza zjadającego goblinie jagody
              czy korzenie niczym jabłka, dostaje apopleksji.
            </h1>
            <h1>
              {" "}
              Nie zjadaj ich, chyba że faktycznie twórca moda nie
              zaimplementował alchemi w swoim dziele. W Lobosie można tworzyć
              mikstury siły i zręczności po zostaniu żołnierzem. Jeśli
              koniecznie trzeba podbić ten przysłowiowy punkt siły, lepiej
              skorzystać z jabłek, miodowego tytoniu, trolestu lub ugotować
              zupę.
            </h1>
          </article>
          <hr className="styledHr mt-4 mb-2" />
          <article>
            <h1 className="text-lg text-orange-200">Rzadkie przedmioty</h1>W
            niektórych modach jedzenie odpowiednich produktów, palenie tytoniu
            zwiększa nasze statystyki. Warto o tym wiedzieć i nie sprzedawać u
            handlarzy wszystkiego jak leci. W Lobosie palenie tytoniu, jedzenie
            serów, picie wody źródlanej, kokosów itd zwiększa nasze statystyki.
            Istnieją też przepisy na zupy stale podnoszące statystyki. Jeśli
            zatem natrafiasz na nietypowe przedmioty typu woreczki pieprzu,
            cynamonu i rzadkie rośliny, to nie sprzedawaj ich. Sprawdź najpierw
            do czego służą. To znacznie wzmocni twoją postać.{" "}
          </article>
          <hr className="styledHr mt-4 mb-2" />
          <article>
            <h1 className="text-lg text-orange-200">Nowe mechaniki</h1>
            Jeśli w modyfikacji występują nowe mechaniki rozwoju postaci, warto
            je najpierw sprawdzić, bo może się okazać, że znacznie zboostują
            naszą postać. Dodałem do moda system tworzenia pasów. Gracz jest o
            tym informowany klilkakrotnie w ciągu rozgrywki, żeby nakłonić go do
            skorzystania z tego systemu. Są osoby, które w ogóle nie zadały
            sobie trudu by sprawdzić jakie korzyści on daje. A korzyści są dość
            znaczne. Można wyciągnąć 20 punktów siły/zręczności i do 40-stu
            ochrony więcej.
          </article>
          <hr className="styledHr mt-4 mb-2" />
          <article>
            <h1 className="text-lg text-orange-200">Walka</h1>
            Jeśli grasz łukiem, warto poszukać "safespota" czyli miejsca, gdzie
            przeciwnicy cię niedosięgną, przynajmniej dopóki nie zabijasz ich na
            kilka strzał. Nie jest również wskazane atakować przeciwników,
            którzy są zbyt silni. Lepiej rozwinąć naszą postać i zmierzyć się z
            tymi przeciwnikami później, gdy będziemy w stanie przebijać się
            przez ich pancerz. Niestety niewiele modów jest dobrze
            zbalansowanych i czasami gra wymusza zmierzenie się ze zbyt trudnym
            przeciwnikiem na aktualny etap gry.
            <h1>
              Na każdego przeciwnika w Gothicu jest sposób. Grając pod siłę
              najlepszą obroną jest odskok do tyłu. Grając w ten sposób na 99%
              nie damy się trafić. Blokowanie ciosów czasami zawodzi. O
              bugowaniu na kamieniach, skałach i innych elementach otoczenia nie
              warto wspominać, nie jest to coś, co warto promować.
            </h1>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Noobguide;
