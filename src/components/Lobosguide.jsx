import React from "react";

const Lobosguide = () => {
  return (
    <div className="pt-28 text-white text-center">
      <article className="flex pb-2">
        <div className="w-1/5">
          <h1>kolumna 1</h1>
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
            <span className="text-green-500">ZRĘCZNOŚCI.</span> Kusze co prawda
            wymagają siły by je założyć ale ich obrażenia zależą od zręczności.
          </h1>
        </div>
        <div className="w-1/5">
          <h1>Kolumna 3</h1>
        </div>
      </article>
    </div>
  );
};

export default Lobosguide;
