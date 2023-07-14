import React from "react";

const Version = () => {
  return (
    <div className="pt-28 text-white text-center">
      <h1 className="text-orange-500 text-3xl">
        Czym się różni zwykły Lobos od Ultra+?
      </h1>
      <hr className="styledHr mt-4 my-4" />
      <div className="flex justify-center px-60">
        <table class=" w-8/12 border-collapse border border-slate-500 ">
          <thead>
            <tr>
              <th class="border border-slate-400 bg-slate-600 p-2">Zmiany</th>
              <th class="border border-slate-400 bg-slate-600 p-2">Lobos</th>
              <th class="border border-slate-400 bg-slate-600 p-2">
                Lobos Ultra+
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-700 p-2">EXP</td>
              <td class="border border-slate-700 p-2">100%</td>
              <td class="border border-slate-700 p-2">90%</td>
            </tr>
            <tr>
              <td class="border border-slate-700 p-2">HP za poziom</td>
              <td class="border border-slate-700 p-2">12</td>
              <td class="border border-slate-700 p-2">3</td>
            </tr>
            <tr>
              <td class="border border-slate-700 p-2">Statystyki potworów</td>
              <td class="border border-slate-700 p-2">100%</td>
              <td class="border border-slate-700 p-2">od 140% do 200%</td>
            </tr>
            <tr>
              <td class="border border-slate-700 p-2">Statystyki NPC</td>
              <td class="border border-slate-700 p-2">100%</td>
              <td class="border border-slate-700 p-2">od 130% do 140%</td>
            </tr>
            <tr>
              <td class="border border-slate-700 p-2">
                Statystyki pancerzy NPC
              </td>
              <td class="border border-slate-700 p-2">100%</td>
              <td class="border border-slate-700 p-2">od 15% do 40%</td>
            </tr>
            <tr>
              <td class="border border-slate-700 p-2">
                Statystyki pancerzy PC
              </td>
              <td class="border border-slate-700 p-2">100%</td>
              <td class="border border-slate-700 p-2">od -20% do -60%</td>
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
          <h1>
            <span className="text-red-500">UWAGA: </span>Na wersji Ultra+
            cieniostwory i demoniczne rozpruwacze mają te same statystyki co na
            podstawowej wersji. Jest to niedopatrzenie.
          </h1>
          <br />
          <h1>
            <span className="text-orange-500">INFO: </span>Gra ścieżką maga jest
            możliwa jedynie na wersji Definivite Edition. W Lobos i Lobos Ultra+
            możemy grać jedynie pod zręczność i siłę.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Version;
