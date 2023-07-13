const Level = () => {
  return (
    <div className="pt-28 text-white text-center">
      <h1 className="text-orange-500 text-3xl">
        Poziomy trudności w Lobos Definitive Edition
      </h1>
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
          {/* <h1>
            <span className="text-red-500">UWAGA: </span>Na wersji Ultra+
            cieniostwory i demoniczne rozpruwacze mają te same statystyki co na
            podstawowej wersji. Jest to niedopatrzenie.
          </h1> */}
        </div>
      </div>
    </div>
  );
};

export default Level;
