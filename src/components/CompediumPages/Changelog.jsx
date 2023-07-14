import React from "react";
import { useState } from "react";
import piorun from "../../assets/piorun2.png";

const Changelog = () => {
  const [allChanges, setAllChanges] = useState(false);

  return (
    <div className="pt-28  pb-24 text-white ">
      <h1 className="text-orange-600 text-3xl pb-4 text-center">
        Lista zmian w Definitive Edition
      </h1>
      <div className="flex justify-center pb-6 space-x-10">
        <button
          onClick={() => setAllChanges(false)}
          className="bg-transparent hover:bg-red-500 text-white font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          Pokaż najważniejsze zmiany
        </button>
        <button
          onClick={() => setAllChanges(true)}
          className="z-10 bg-transparent hover:bg-blue-500 text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Pokaż wszystkie zmiany
        </button>
      </div>
      <div className="flex">
        <article className=" pl-20 w-3/5">
          <ul className="list-disc ">
            <li>
              Pełny polski dubbing do moda nagrany przeze mnie, graczy, widzów
              oraz profesjonalnych aktorów
            </li>
            <li>Dodana została magia i możliwość gry pod magię</li>
            <li>Możliwość skalowania obrażeń zaklęć z maną</li>
            <li>Trzy poziomy trudności</li>
            <li>
              Nowa ścieżka rozwoju legionisty-maga wraz z nowym setem pancerzy
              przeznaczonym wyłącznie dla nich
            </li>
            <li>Dodano 3 nowe umiejętności dla maga</li>
            <li>
              Nowe przedmioty (miecze, kostury, pancerze, rośliny, runy,
              książki, mikstury, przedmioty różne, voby)
            </li>
            <li>Poszerzone lokacje</li>
            <li>Nowy ZEN (nowa mapa)</li>
            <li>Nowi NPC i potwory</li>
            <li>W modzie pojawią się piraci</li>
            <li>Nowe wątki i dialogi</li>
            <li>Poprawione zakończenia moda</li>
            <li>Walki na arenie</li>
            <li>
              Czasowe buffy zwiększające umiejętności walki, statystyki i
              ochronę
            </li>
            <li>
              Dodany został częściowy respawn potworów z 4 rozdziału w późnym
              rozdziale 3 gry
            </li>
            <li>
              Dodane zostały bossy, które dają lepszy łup niż ich zwykłe
              odpowiedniki potworów/NPC. Ponad to gracz otrzyma Punkty Nauki za
              każdego pokonanego bossa
            </li>
            <li>
              Mapa teleportacyjna do szybkiej podróży, jeśli gracz uprzednio
              odkrył daną lokację
            </li>
            <li>
              Od teraz za bicie żołnierzy będąc członikiem Legionu Lord Santos
              wymierza nam grzywnę, a jeśli gracz nadal będzie łamał kodeks
              Legionisty spotka go kara skutkująca trwałą utratą punktów życia
            </li>
            <li>
              Możliwość modlitwy do Oriona na podobnej zasadzie, co w Gothic 2
            </li>
            <li>
              Przewaluowanie obrażeń i wymagań wszystkich dostępnych broni plus
              zbalansowanie magii w modzie
            </li>
            <li>Dodano intro oraz outro do moda</li>
            <li>Bug ze strzelaniem przez kolce w świątyni został usunięty</li>
            <li>
              Dodanie reakcji przełożonych na wtargnięcie bohatera do krypty
            </li>
            <li>Dodano handlarzom wiecej strzał i bełtów</li>
            <li>
              Dodano możliwość nauki podstawowych trofeów w 1 rozdziale w
              przypadku, gdy zawaliliśmy polowanie
            </li>
            <li>
              Dodano możliwość nauki wyrywania rogów cieniostwora i oddawania
              ich do Prahla za złoto i exp
            </li>

            <li>Nowe menu statystyk i dziennika</li>
            <li>
              Poprawienie rutyn Jocke i protektora, które powodowały śmierć i
              znikanie tych postaci u niektórych graczy
            </li>
          </ul>

          {/* Less crucial Changes from here  */}
          {/* Less crucial Changes from here  */}
          {/* Less crucial Changes from here  */}

          {allChanges ? (
            <ul
              className={
                allChanges
                  ? "list-disc animate-pulse temporary-bounce text-blue-100"
                  : ""
              }
            >
              <li>
                Możliwość wymiany starych monet na nowe unikatowe przedmioty
              </li>

              <li>
                Zmniejszono ilość potworów i ich odradzania się, co rozdział w
                niektórych miejscach
              </li>
              <li>
                Usunięto tytoń z możliwego do wylosowania łupu z ciężkich
                skórzanych paczek
              </li>
              <li>Dodano teleport pomiędzy doliną a grotą</li>

              <li>
                <li>Dodano biżuterię dla maga analogicznie do wojownika</li>
                <li>Dodano pas dla maga</li>
                <li>
                  Niektórzy NPC będą od teraz nieśmiertelni aż do 3 rozdziału
                </li>
                <li>
                  Dodano możliwość skórowania demonicznych rozpruwaczy,
                  cieniostworów, wargów i wilków
                </li>
                Dodano możliwość tworzenia zup dających stałą premię do many
                analogicznie do zup pod inne klasy postaci
              </li>
              <li>
                Poprawiono pojawienie się klucza do Groty w przypadku, gdy gracz
                odrazu zabija Cesara bez rozmowy
              </li>
              <li>
                Poprawiono wymarsz z Balorem na pustyni. Od teraz nie można
                wejść do wioski razem z żołnierzami
              </li>

              <li>Więcej mrocznych plot twistów</li>
              <li>
                Nieznaczne osłabienie NPC w kopalni w 1 rozdziale, by ułatwić
                graczom walkę w początkowych etapach gry
              </li>
              <li>Dodano więcej przedmiotów do zdobycia</li>

              <li>
                Dodano możliwość ulepszenia najlepszych broni u Carlosa:
                Złodziej Dusz, Topór Boga Wojny, Łuk Mistrza Wojny, Rozcinacz
                Światów
              </li>
              <li>
                Ulepszenie broni skutkuje utratą premii do umięjętności
                posługiwania się bronią, ale ich obrażenia znacznie się
                zwiększają
              </li>
              <li>
                Niektóre rośliny i przedmioty spożywcze odnawiają inną ilość
                punktów życia i many. Piwa, wina gin odnawiają teraz więcej many
                z uwagi na pojawienie się w modzie ścieżki gry pod maga
              </li>
              <li>
                Ciemne grzyby odnawiają teraz 10 punktów many zamiast 5 punktów
                życia
              </li>

              <li>
                Wzięto pod uwagę za słabe obrażenia od broni jednoręcznych pod
                zręczność w 3 rozdziale
              </li>
              <li>
                Wzięto pod uwagę za słabe obrażenia od kusz pod siłę w 3
                rozdziale
              </li>
              <li>
                Poszerzono Biologowi serię zadań "Badania Biologa" o jedną misję
                na elitarny poziom
              </li>
              <li>
                Poprawienie koloru czcionki przez którą ciężko było nawigować w
                dzienniku zadań używając DirecX 11
              </li>

              <li>
                Poprawienie bugu z blokowaniem się Saimana w podeście w kopalni.
              </li>
              <li>
                Poprawienie rutyn Santosa i Wascara gdy idziemy po Lupino do
                krypty
              </li>

              <li>
                Dialog z Lukanem nie jest już wymagany do kontynuowania gry
              </li>
              <li>
                Poprawiono triggerowanie się bandytów, Malika i Henrego w misji
                od nadzorcy Santosa
              </li>
              <li>
                Poprawiono wiszące w dzienniku zadania "Posłaniec" w przypadku
                jego niewykonania po zostaniu żołnierzem
              </li>
              <li>
                Poprawiono bug z zabijaniem żołnierzy przez Lorda Mordraga
                poprzez niewłaściwe działanie runy "Tchnienie śmierci"
              </li>

              <li>
                Dialog z adeptem pod bagnami nie jest już wymagany do
                kontynuowania gry
              </li>

              <li>
                Kopalnia na pustyni w pobliżu wioski, gdzie niebyło nic oprócz 3
                bryłek siarki została bardziej ovobowana
              </li>
              <li>
                Usunięto bonus many w ogniocierniu. (Gracze go zjadali i
                niemieli czym tworzyć zupek na ochronę)
              </li>
              <li>
                Dodano premie do walki bronią dwuręczną 10 do Topora Boga Wojny
              </li>

              <li>Dodano do kupienie mikstury na manę u Biologa i Vito</li>
              <li>
                Od teraz po dołączeniu do Legionu można wybrać sobie broń u
                Hectora zależnie pod co gramy (2 z nich są unikatowe i nie da
                się ich zdobyć w inny sposób)
              </li>
              <li>
                Od teraz po dołączeniu do Gwardii można wybrać u Gratusa rodzaj
                ekwipunku jaki chcemy otrzymywać. (Mag bojowy lub żołnierz)
                Wybór jest uzależniony od rozwoju naszej postaci
              </li>
              <li>
                Poprawiono błędne wyświetlanie statystyk pancerzy w oknie
                dialogowym u Gratusa i Fuada w zależności od poziomu trudności
              </li>

              <li>
                Najlepsza broń z każdej kategorii dostała efekt pfx (będzie się
                świecić)
              </li>
              <li>
                Poprawiono wyświetlanie ilości ochrony w oknie statystyk powyżej
                300
              </li>
              <li>
                Najlepsza broń i pancerz będzie do zdobycia nieco wcześniej niż
                w podstawowej wersji moda
              </li>

              <li>Dodano do gry więcej cieniostworów</li>

              <li>
                Od teraz w zadaniu z Louisem można oddać mu więcej książek
              </li>
              <li>
                Poprawiono dialog z Abrahamem, w przypadku gdy jego brat zginie
              </li>
            </ul>
          ) : null}
        </article>
        <artice className="w-2/5 fixed right-0 top-2/4 transform -translate-y-1/2">
          <img src={piorun} className="scale-75 mt-32 hidden lg:block" />
        </artice>
      </div>
    </div>
  );
};

export default Changelog;
