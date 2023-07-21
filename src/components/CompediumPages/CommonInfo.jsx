import React from "react";
import { useTranslation } from "react-i18next";

const CommonInfo = () => {
  const { t } = useTranslation("");
  return (
    <div className="flex justify-center pt-28 pb-20 text-white ">
      <div className="text-center ">
        <h1 className="text-orange-600 text-3xl pb-4">
          {t("technicalinfo.title")}
        </h1>
        <hr className="styledHr mb-10" />

        <article className="max-w-5xl">
          <h1 className="text-lg text-orange-200">Pakiety skryptowe</h1>
          <h1>
            Każda wersja moda Lobos jest napisana na czystym oryginalnym języku
            skryptowym Gothica. Nie zawiera w sobie żadnych dodatków typu
            Uniony, Lego, Ikarus itd.
          </h1>
          <h1>
            Powodów ku temu jest kilka. Gdy jeszcze tworzyłem podstawową wersję
            modyfikacji, Ikarus, Lego i najpopularniejszy pakiet skryptowy jakim
            jest Union dopiero raczkowały. Modyfikacje, które implementowały
            Ikarusa i Lego miały duże problemy z działaniem u osób
            korzystających z Uniona czy innych wersji Ikarusa. Chcąc zapobiec
            ewentualnym problemem technicznym zdecydowałem się na nieużywanie
            żadnych dodatków.
          </h1>
          <h1>
            Kolejną zaletą tego posunięcia jest charakter samego Uniona. Jest
            kompatybilny z oryginalnymi skryptami Gothica. Można go bardzo łatwo
            wgrać do Lobosa w charakterze pluginów czyli pomniejszych bibliotek
            skryptowych spełniających jakieś zadanie. Np. wolne celowanie,
            szybkie podnoszenie. Implementując Uniona bezpośrednio do kodu
            źródłowego modyfikacji naraziłbym ją na problemy techniczne w
            przypadku nowszych aktualizacji, które mogły by mieć jakieś
            zależności między nowszymi pluginami i zmusił bym się do częstszych
            aktualizacji moda. A w obecnej sytuacji w ciągu minuty można dodać
            do moda nowe mechaniki bez potrzeby "hard-kodowania".
          </h1>
        </article>
        <hr className="styledHr my-6" />

        <article className="max-w-5xl">
          <h1 className="text-lg text-orange-200">Skalowaie obrażeń</h1>
          <h1>
            Skalowanie obrażeń w Losobie jest identyczne do formuły z
            oryginalnego Gothica. Czyli nasza siła skaluje się z obrażeniami od
            broni jednoręcznych i dwuręcznych, a zręczność z obrażeniami od
            łuków i kusz. Nie zdziwcie się zatem, że szpady pod zręczność czy
            kusze mają większe obrażenia niż reszta dostępnych broni.
          </h1>
          <h1 className="text-red-600">
            Istnieje plugin uniona który zmienia to skalowanie, ale nie powinien
            być używany w moim modzie ponieważ mocno narusza balans i za bardzo
            ułatwia grę. Jest zatem traktowany jako oszustwo.
          </h1>
          <h1>
            Wziąłem pod uwagę oryginalne skalowanie z gothica i w Definitive
            Edition miecze pod zręczność i kusze pod siłę zostały odpowiednio
            zbalansowane. W podstawowej wersji Lobosa były nieco za słabe. Mimo
            to nie polecam grać w nią używając wyżej wymienionego pluginu.
          </h1>
        </article>
        <hr className="styledHr my-6" />

        <article className="max-w-5xl">
          <h1 className="text-lg text-orange-200">
            Problemy techniczne z modyfikacją
          </h1>
          <h1>
            Przyczyn problemów może być wiele. W zależności od wersji Gothica,
            czy jest to wersja steamowa, Złota Edycja czy Gothic instalowany z
            płyty, błedy mogą mieć różne podłoże. Większość problemów z samym
            uruchomieniem można rozwiązać włączając modyfikację za pomocą
            GothicStarter.exe z zaznaczoną we właściwościach opcją "Uruchom jako
            administrator". Jeśli masz problemy z działaniem modyfikacji,
            najlepiej przepatrz dyskusję na{" "}
            <a
              href="https://discord.com/channels/480664394020159488/1011979124253937784"
              className="text-blue-400 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              discordzie
            </a>{" "}
            lub zadaj tam pytanie. Należy najpierw wybrać rolę "Lobos", żeby
            zobaczyć wątki tematyczne związane z modyfikacją.
          </h1>
        </article>
      </div>
    </div>
  );
};

export default CommonInfo;
