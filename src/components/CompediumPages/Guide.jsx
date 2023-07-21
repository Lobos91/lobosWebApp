import React from "react";
import flaga from "../../assets/flaga.png";
import { useTranslation } from "react-i18next";

const Economy = () => {
  const { t } = useTranslation("");
  return (
    <div className="flex justify-center pt-28 pb-20 text-white ">
      <div className="w-1/5 fixed left-0 top-1/2 transform -translate-y-1/2 hidden md:block">
        <img src={flaga} className="imageAnimation" />
      </div>
      <div className="text-center w-3/5 ">
        <h1 className="text-orange-600 text-3xl pb-4">
          {" "}
          {t("lobosguide.title")}
        </h1>
        <h1 className="text-xl italic underline underline-offset-4 pb-4">
          Najważniejsze informacje, które dramatycznie ułatwią ci rozgrywkę (Bez
          spoilerów fabularnych)
        </h1>

        <hr className="styledHr my-6" />
        <article>
          <h1 className="text-lg text-orange-200">
            Zainwestuj w walkę bronią jednoręczną lub dwuręczną
          </h1>
          <h1>
            Gdy tylko pojawi się możliwość zainwestuj w walkę machania mieczem
            minimum do 30%, nawet jeśli zamierzasz grać magiem. Bardzo ułatwi ci
            to grę na początkowych etapach i jest konieczne do popchnięcia
            fabuły.
          </h1>
        </article>
        <hr className="styledHr my-6" />
        <article>
          <h1 className="text-lg text-orange-200">Progi i koszty nauki</h1>
          <h1>
            Koszt nauki każdego punktu atrybutu oraz umiejętności walki to
            zawsze 1 Punkt Nauki, niezależnie czy masz 20 czy 400 zręczności lub
            80% w broni jednoręcznej. Jednak za naukę trzeba płacić, a ilość
            złota, które wydamy zależy od tego na jak zaawansowanym poziomie
            jesteśmy. W miarę rozwoju postaci będziemy musieli pobierać nauki u
            coraz potężniejszych nauczycieli, którzy liczą sobie co raz więcej
            za swój trening. Progi nauki zostały zaprojektowane i ustawione na
            każdy rozdział rozgrywki, jednak górny limit nauki jest nieosiągalny
            do zdobycia, dlatego też wszystkie mikstury i wspomagacze dające
            premię do statystyk można używać od razu.
          </h1>
          <br />
          <h1 className="text-sm text-shadow text-orange-200">
            Progi statystyk dla siły i zręczności. Mana ma zwiększone progi.
          </h1>
          <table class="border-collapse border border-slate-500 mx-auto">
            <thead>
              <tr>
                <th class="border border-slate-400 bg-slate-600 p-2">
                  Wersja moda
                </th>
                <th class="border border-slate-400 bg-slate-600 p-2">
                  Rozdział 1
                </th>
                <th class="border border-slate-400 bg-slate-600 p-2">
                  Rozdział 2 (1/2)
                </th>
                <th class="border border-slate-400 bg-slate-600 p-2">
                  Rozdział 2 (2/2)
                </th>
                <th class="border border-slate-400 bg-slate-600 p-2">
                  Rozdział 3
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="border border-slate-700 p-2">Lobos</td>
                <td class="border border-slate-700 p-2">90</td>
                <td class="border border-slate-700 p-2">160</td>
                <td class="border border-slate-700 p-2">350</td>
                <td class="border border-slate-700 p-2">500</td>
              </tr>
              <tr>
                <td class="border border-slate-700 p-2">Lobos Ultra+</td>
                <td class="border border-slate-700 p-2">90</td>
                <td class="border border-slate-700 p-2">160</td>
                <td class="border border-slate-700 p-2">350</td>
                <td class="border border-slate-700 p-2">500</td>
              </tr>
              <tr>
                <td class="border border-slate-700 p-2">Definitive Edition</td>
                <td class="border border-slate-700 p-2">100</td>
                <td class="border border-slate-700 p-2">180</td>
                <td class="border border-slate-700 p-2">350</td>
                <td class="border border-slate-700 p-2">600</td>
              </tr>
            </tbody>
          </table>
        </article>
        <hr className="styledHr my-6" />
        <article>
          <h1 className="text-lg text-orange-200">
            Tych przedmiotów nie sprzedawaj
          </h1>
          <h1>
            W modzie natkniesz się na sporą ilość skał krystalicznych. Świat się
            nie zawali jeśli je sprzedasz, ale w przyszłosci będziesz ich
            potrzebować. Nie sprzedawaj też tytoni, woreczków pieprzu i
            woreczków cynamonu. Tytoń można palić w fajkach wodnych, a woreczki
            użyć do tworzenia zup podnoszących statystyki postaci. Jeśli
            interesuje cię wykuwanie i ulepszanie pasów przydadzą ci się bryłki
            magicznej i czarnej rudy oraz białe i czarne perły. Nie sprzedawaj
            też gadzich skór zwykłym handlarzom.
          </h1>
        </article>
        <hr className="styledHr my-6" />
        <article>
          <h1 className="text-lg text-orange-200">
            Inwestuj tylko w jeden atrybut
          </h1>
          <h1>
            O ile nie jesteś doświadczonym graczem Gothica, który zęby zjadł na
            testowaniu różnych sposobów rozwoju postaci, to inwestuj tylko w
            jeden atrybut. Jeśli grasz pod siłę, inwestuj tylko w siłę, jeśli
            pod zręczność to idź tylko w zręczność. Wedle starego porzekadła "Co
            jest do wszystkiego, to jest do niczego". Jest to ważne nawet z
            punktu widzenia samej konstrukcji modyfikacji, tego jak została
            zaprojektowana. Jeśli nie osiągniemy pewnego progu naszego atrubutu,
            nie będziemy mogli posunąć fabuły do przodu. Limit jaki trzeba
            osiągnąć, żeby odblokować 2 rozdział to minimum 90 siły lub 90
            zręczności i minimum 30% do walki dowolną bronią. Kolejny próg
            pojawia się w późnym rozdziale 2 gry i jest nim minimum 160 punktów
            wybranego atrybutu i 60% do walki dowolną bronią. Nic się nie stało
            jeśli wydałeś 20 lub 30 Punktów Nauki w drugorzędny atrybut, ale
            jeśli zbyt mocno zaczniesz rozwijać dwa z nich, istnieje ryzyko, że
            zablokujesz sobie dalszą rozgrywkę.
          </h1>
        </article>
        <hr className="styledHr my-6" />

        <article>
          <h1 className="text-lg text-orange-200">
            Stale rozwijaj swoją postać
          </h1>
          <h1>
            Ludzie, którzy najbardziej narzekają na poziom trudności to zawsze
            ci, którzy źle rozdają Punkty Nauki i nie orientują się, jak
            prawidłowo rozwijać swoją postać.
          </h1>
          <h1>
            Jeśli grasz pod siłę, pamiętaj by inwestować w siłę i często
            wymieniać ekwipunek na lepszy. Analogicznie to samo zrób gdy grasz
            pod zręczność. Grając pod maga sytuacja ma się delikatnie inaczej,
            ale ostatecznie twoje obrażenia również zależeć będą od tego jak
            dużo many posiadasz. Jeśli przeciwnicy sprawiają ci trudności, to
            najprawdopodobniej potrzebujesz wzmocnić swoje atrybuty i ubrać
            lepszą broń. Handlarzom co rozdział respi się lepszy ekwpinuek,
            biżuteria i nowe mikstury.
          </h1>
          <h1>
            Powinieneś zawsze starać się o najlepszy możliwy do zdobycia sprzęt
            na dany rozdział gry. Pamiętaj, że poprzeczka rośnie co rozdział.
            Jeśli nie rozwijasz swojej postaci, będzie ci coraz trudniej.
            Wyjątkiem jest gra na poziomie "Story", gdzie przeciwnicy nie
            stanowią żadnego wyzwania. Jeśli wybrałeś ten poziom trudności, to
            ten akapit nie jest dla ciebie.
          </h1>
        </article>

        <hr className="styledHr my-6" />
        <article>
          <h1 className="text-lg text-orange-200">Ekonomia</h1>
          <h1>
            Niewiedziałeś co robić z nadmiarem złota w Nocy Kruka? W Lobosie też
            nie będziesz wiedzieć. A to dlatego, że złoto trzeba będzie wydawać
            rozsądnie, chyba że zadbasz o kwestie zarobkowe. W innym wypadku
            twoja postać ciągle będzie miała puste kieszenie.
          </h1>
          <h1>
            Koniecznie naucz się skórowania gadów. Ich skóry można sprzedawać za
            pełną cenę. Dobrze też umieć pozyskiwać kły i pazury, są potrzebne
            do ulepszania pasów. Reszta trofeów nie jest aż taka ważna. W wersji
            Definitive Edition warto też nauczyć się wydobywania rogów
            cieniostwora.
          </h1>
          <h1>
            Mikstury regenerujące życie i mane są dość kosztowne i regenerują
            procentowo. Warto zachować je na nieco późniejszy etap gry i nauczyć
            się je samemu warzyć. W modzie jest mnóstwo roślin. Ważenie własnych
            mikstur leczniczych pomoże zaoszczędzić dużą ilość złota. Na
            początku lepszym rozwiązaniem będzie regenerować swoje statystyki
            jedzeniem i grzybami. Warto wiedzieć, że niektóre jedzenie trwale
            zwiększa statystyki.
          </h1>
          <h1></h1>
          <h1>
            Zbieraj wszystko, co znajdziesz i eksploruj każdą dziure. Na mapach
            często znajdują się poukrywane przedmioty, warto więc eksplorować
            każdy kąt.
          </h1>
          <h1>
            Jeśli zastosujesz się do tych rad to istnieje duża szansa, że złota
            ci nie zabraknie i śmiało wystarczy na wykupienie wszystkich mikstur
            stale podnoszących statystyki.
          </h1>
        </article>
        <hr className="styledHr my-6" />
        <article>
          <h1 className="text-lg text-orange-200">
            Nie bój się, że coś zepsułeś
          </h1>
          <h1>
            Kluczowi NPC potrzebni fabularnie będą zabezpieczeni
            nieśmiertelnością do czasu, gdy przestaną być potrzebni do
            posunięcia gry do przodu. Nie martw się też, jeśli zepsułeś jakieś
            zadanie. Skoro dało sie je zepsuć, to znaczy, że wziąłem pod uwagę
            taką możliwość.
          </h1>
        </article>
      </div>

      <div className="w-1/5 fixed right-0 top-1/2 transform -translate-y-1/2">
        <img
          src={flaga}
          className="scale-x-[-1] hidden md:block imageAnimation"
        />
      </div>
    </div>
  );
};

export default Economy;
