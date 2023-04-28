import React from "react";
import introBG1 from "../assets/lobosbg1.png";

const Intro = () => {
  return (
    <div className="relative w-full h-full">
      <img
        src={introBG1}
        alt="Zdjęcie z dżungli w Lobos"
        className="absolute top-0 right-0 object-cover w-full  "
        style={{ height: 900 }}
      />
      <div className="absolute  text-white w-4/12 pt-10 pl-20 pb-10 ">
        <h1 className="text-orange-500 text-3xl pb-2">Prolog</h1>
        <div className=" leading-9 ">
          <p>
            Lobos to modyfikacja do Gothic 2 typu total conversion, osadzona w
            zupełnie nowym uniwersum niezwiązanym z orginalną grą.
          </p>
          <p>
            Akcja modyfikacji toczy się w starożytnych czasach, gdzie
            niepodzielnie panuje królestwo Lobosu.
          </p>
          <p>
            W modyfikacji wcielamy się w farmera z dobrej rodziny, który
            wyruszył z przyjaciółmi do tajemniczej doliny obfitującej w złoża
            złota i magicznej rudy, żeby szybko się wzbogacić.
          </p>
          <p>
            Ich wyprawa jednak okazuje się fiaskiem. Na podobny pomysł bowiem
            wpadło wielu rozrabiaków i bandyckich grup.
          </p>
          <p>
            Ponad to, w dolinie stacjonują elitarne wojska królestwa oraz
            mroczne siły. Z biegiem czasu, gdy nasz bohater wikła się coraz
            bardziej w sprawy elitarnego Legionu, atmosfera również staje się
            coraz gęstsza.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
