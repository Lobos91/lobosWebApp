import React from "react";
import uriziel from "../../assets/urizliel.png";
import kusza from "../../assets/kusza.png";
import { useNavigate } from "react-router-dom";

const Noobguide = () => {
  const navigation = useNavigate();
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
            się priorytetem grając w każdą modyfikacje, a w szczególności w
            Lobosa. To od ilości twojej siły lub zręczności będzie zależeć czy
            walka jest dla ciebie łatwa i siekasz przeciwnika w 5 sekund czy też
            męczysz się z nim kilka minut.
          </h1>
          <hr className="styledHr mt-4 mb-2" />
          <article>
            <h1 className="text-lg text-orange-200">
              Jedzenie smoczych korzeni i goblinich jagód to grzech śmiertelny!
            </h1>
            <h1>
              Jeśli w modzie występują goblinie jagody i smocze korzenie, znaczy
              to najprawdopodobniej, że będzie można zrobić z nich mikstury,
              które znacznie zwiększą nasze statystyki niż gdybyśmy zjedli te
              rośliny. Prawdziwy gothikowiec widząc gracza zjadającego goblinie
              jagody czy korzenie niczym jabłka, dostaje apopleksji.
            </h1>
            <h1>
              Nie zjadaj ich, chyba że faktycznie twórca moda nie
              zaimplementował alchemi w swoim dziele. Przykład: Pierwsza odsłona
              moda Gladiator, gdzie faktycznie można je jeść. W Lobosie można
              tworzyć mikstury siły i zręczności po zostaniu żołnierzem. Jeśli
              koniecznie trzeba podbić ten przysłowiowy punkt siły, lepiej
              skorzystać z jabłek, miodowego tytoniu, trolestu lub ugotować
              zupę.
            </h1>
          </article>
          <hr className="styledHr mt-4 mb-2" />
          <article>
            <h1 className="text-lg text-orange-200">
              Nie sprzedawaj rzadkich przedmiotów, jeśli nie wiesz do czego
              służą
            </h1>
            W niektórych modach jedzenie odpowiednich produktów, palenie tytoniu
            zwiększa nasze statystyki. Warto o tym wiedzieć i nie sprzedawać u
            handlarzy wszystkiego jak leci. W Lobosie palenie tytoniu, jedzenie
            serów, picie wody źródlanej, kokosów itd zwiększa nasze statystyki.
            Istnieją też przepisy na zupy stale podnoszące statystyki. Jeśli
            zatem natrafiasz na nietypowe przedmioty typu woreczki pieprzu,
            cynamonu i rzadkie rośliny, to nie sprzedawaj ich. Sprawdź najpierw
            do czego służą.
          </article>
          <hr className="styledHr mt-4 mb-2" />
          <article>
            <h1 className="text-lg text-orange-200">
              Nie bądź leniwy, sprawdzaj nowe mechaniki
            </h1>
            Jeśli w modyfikacji występują nowe mechaniki rozwoju postaci, warto
            je najpierw sprawdzić, bo może się okazać, że znacznie zboostują
            naszą postać. Dla przykładu w Lobosie dodałem system tworzenia
            pasów. Gracz jest o tym informowany klilkakrotnie w ciągu rozgrywki,
            żeby nakłonić go do skorzystania z tego systemu. Mimo wszystko
            zdarzają się osoby, które w ogóle nie zadały sobie trudu by
            sprawdzić jakie korzyści on daje. A korzyści są dość znaczne. Można
            wyciągnąć 20 punktów siły/zręczności i do 40-stu ochrony więcej.
          </article>
          <hr className="styledHr mt-4 mb-2" />
          <article>
            <h1 className="text-lg text-orange-200">Naucz się walczyć</h1>
            Jeśli grasz łukiem, warto poszukać "safespota" czyli miejsca, gdzie
            przeciwnicy cię niedosięgną, przynajmniej dopóki nie zabijasz ich na
            kilka strzał. Nie jest również wskazane atakować przeciwników,
            którzy są zbyt silni. Lepiej rozwinąć naszą postać i zmierzyć się z
            nimi później, gdy będziemy w stanie przebijać się przez ich pancerz.
            <h1>
              Na każdego przeciwnika w Gothicu jest sposób. Grając pod siłę
              najlepszą obroną jest odskok do tyłu. Grając w ten sposób na 99%
              nie damy się trafić. Blokowanie ciosów stojąc w miejscu czasami
              zawodzi. Bugowanie przeciwników na skałach i elementach otoczenia
              nie jest czymś, co warto promować, ale jeśli koniecznie trzeba coś
              zabić to najskuteczniej dopchać potwora do ściany i atakować w
              lewo i prawo tak aby niezdążył zadać ciosu. Nie ma sensu męczyć
              się z jaszczurem czy zębaczem na otwartej przestrzeni, jeśli jest
              możliwość zablokowania go na skale obok.
            </h1>
          </article>
          <hr className="styledHr mt-4 mb-2" />
          <article>
            <h1 className="text-lg text-orange-200">
              Zbieraj wszystko co znajdziesz
            </h1>
            Są modyfikacje gdzie balans i ekonomia nie istnieją. Również
            oryginalny gothic był pozbawiony balansu, a od 2 rozdziału zbieranie
            każdej roślinki i przedmiotu traciło sens ponieważ nie było już co
            robić ze złotem i rudą. W dobrze zbalansowanych modach ten problem
            niewystępuje dlatego ważne jest, by zbierać cenne przedmioty, broń i
            ekwipunek po pokonanych przeciwnikach, a najlepiej zbierać wszystko.
            Od przybytku jeszcze głowa niebolała, a znalezione przedmioty często
            mogą się przydać w najmniej oczekiwanym momencie.
          </article>
          <hr className="styledHr mt-4 mb-2" />
          <article>
            <h1 className="text-lg text-orange-200">
              Zabijaj każdego potwora i wszystko eksploruj
            </h1>
            Zabijanie wszystkiego, co żyje z pewnością da ci sporą ilość punktów
            doświadczenia. W późniejszych etapach gry ludzie mają skłonność do
            pomijania walk czy zwiedzania lokacji. Nie rób tego. Tak samo jak na
            początku gry biłeś nawet chrząszcza dla 10 doświadczenia i
            zwiedzałeś każdy kąt tak pod koniec gry nie pomijaj dodatkowego
            doświadczenia w formie zadań pobocznych i potworów. Nie pomijaj też
            lokacji, bo może się tam kryć coś przydatnego. Oczywiście mówimy tu
            o modach, które są wymagające i mają zaprojektowaną jakąkolwiek
            ekonomię. Jeśli grasz w podstawowego Gothica to eksploracja czy
            bicie wszystkiego nie jest takie ważne. Grę ukończysz bez większych
            problemów nawet ze średnimi statystykami. W przypadku Lobosa, grę
            również zdołasz ukończyć z kiepskimi statystykami, ale po co tak się
            męczyć?
          </article>
          <hr className="styledHr mt-4 mb-2" />
          <article>
            <h1 className="text-lg text-orange-200">Nie oczekuj zbyt wiele</h1>
            Na koniec warto wspomnieć o oczekiwaniach jakie rodzą się w głowach
            niektórych osób. Jeśli denerwujesz się, że po wbiciu marnych 60
            punktów siły twój przeciwnik nie pada na 2 strzały, to może czas
            zagrać w coś łatwiejszego? Może Gothic 1 na marvinie, Quake 3 Arena
            z botami na łatwym? Albo grzybobranie w Zielonym Gaju? Osobiście gra
            szybko by mnie znudziła, gdybym z łatwością rozwalał każdego
            przeciwnika, nieotrzymując przy tym wiele obrażeń. "Gothic to nie
            tylko grindowanie i bicie potworów!" - Ktoś krzyczy. Jasne, ale nie
            da się ukryć, że jest to podstawowy element Gothica, jak i
            większości gier typu RPG w ogóle. Jeśli nie sprawiają ci frajdy
            dobre RPG-i to, co tu u diabła robisz? Oczywiście ludzie są różni i
            nie każdy lubi godzinami farmić poziom i statystyki, żeby wkońcu
            poczuć tę satysfakcję z siły swojej postaci. Istnieje grupa osób,
            które chcą sobie zagrać dla samej historii, poznać fabułę. Z myślą o
            takich osobach przygotowana zostanie wersja "story" Lobosa, gdzie
            poziom trudności można będzie porównać do Gothic 1. Poziom trudności
            zadań i zagadek pozostanie ten sam.
            <h1>
              Jeśli jesteś jedną z wyżej wymienionych osób... Nie licz tylko na
              dobry balans. W końcu zbalansowana wersja moda jest dla ciebie za
              trudna.
            </h1>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Noobguide;
