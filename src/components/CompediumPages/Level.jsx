import { useTranslation } from "react-i18next";

const Level = () => {
  const { t } = useTranslation("");
  return (
    <div className="pt-28 text-white text-center pb-20">
      <h1 className="text-orange-500 text-3xl">{t("difficultylevel.title")}</h1>
      <hr className="styledHr mt-4 my-4" />
      <div className="flex justify-center px-60">
        <table class=" w-8/12 border-collapse border border-slate-500 ">
          <thead>
            <tr>
              <th class="border border-slate-400 bg-slate-600 p-2"></th>
              <th class="border border-slate-400 bg-slate-600 p-2">Story</th>
              <th class="border border-slate-400 bg-slate-600 p-2">Balanced</th>
              <th class="border border-slate-400 bg-slate-600 p-2">Ultra</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-700 p-2">EXP</td>
              <td class="border border-slate-700 p-2">100%</td>
              <td class="border border-slate-700 p-2">100%</td>
              <td class="border border-slate-700 p-2">90%</td>
            </tr>
            <tr>
              <td class="border border-slate-700 p-2">HP za poziom</td>
              <td class="border border-slate-700 p-2">15</td>
              <td class="border border-slate-700 p-2">10</td>
              <td class="border border-slate-700 p-2">5</td>
            </tr>
            <tr>
              <td class="border border-slate-700 p-2">Statystyki potworów</td>
              <td class="border border-slate-700 p-2">30%</td>
              <td class="border border-slate-700 p-2">100%</td>
              <td class="border border-slate-700 p-2">140%</td>
            </tr>
            <tr>
              <td class="border border-slate-700 p-2">Statystyki NPC</td>
              <td class="border border-slate-700 p-2">50%</td>
              <td class="border border-slate-700 p-2">100%</td>
              <td class="border border-slate-700 p-2">140%</td>
            </tr>
            <tr>
              <td class="border border-slate-700 p-2">
                Statystyki pancerzy NPC
              </td>
              <td class="border border-slate-700 p-2">75%</td>
              <td class="border border-slate-700 p-2">100%</td>
              <td class="border border-slate-700 p-2">130%</td>
            </tr>
            <tr>
              <td class="border border-slate-700 p-2">
                Statystyki pancerzy PC
              </td>
              <td class="border border-slate-700 p-2">100%</td>
              <td class="border border-slate-700 p-2">100%</td>
              <td class="border border-slate-700 p-2">50%</td>
            </tr>
          </tbody>
        </table>
        <div className="w-4/12 pl-10 text-left ">
          <h1>
            <span className="text-red-500">*</span>EXP - Ilość zdobywanego
            doświadczenia
          </h1>
          <h1>
            <span className="text-red-500">*</span>NPC - Non-player character
            (Każda postać w grze)
          </h1>
          <h1>
            <span className="text-red-500">*</span>PC - Player character (Nasza
            postać)
          </h1>
          <br />
          <div className="text-center">
            <h1 className="text-green-500">STORY</h1>
            <h1>
              Poziom trudności przeznaczony dla osób bez doświadczenia w Gothicu
              chcących zagrać dla samej fabuły.
            </h1>
            <br />
            <h1 className="text-orange-400">BALANCED</h1>
            <h1>
              Właściwy i zbalansowany poziom moda, jaki polecam każdemu graczowi
              Gothica, który lubi rozwijanie postaci i wie na czym ten rozwój
              polega.
            </h1>
            <br />
            <h1 className="text-red-800">ULTRA</h1>
            <h1>
              Poziom trudności przeznaczony dla osób z dużym doświadczeniem w
              Gothicu, lubiących wyzwania i męczarnie z potworami.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level;