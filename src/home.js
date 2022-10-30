import { useState } from "react";
import { Api_get } from "./api";


export function Home() {
  const Data = Api_get();
  const [query, setQuery] = useState("");

  return (
    <div>
      <div className="input-div">
        <input type="text" onChange={(e) => setQuery(e.target.value)}></input>
      </div>
      <div className="Contenedor">
        {Data.filter((data) =>
          data.name.toLowerCase().includes(query.toLowerCase())
        ).map((Data) => {
          return (
            <div key={Data.name} className="card">
              <div className="Symbol">
                {Data.symbol}
                <img src={Data.bohr_model_image} alt="Atom"></img>
              </div>

              <div className="container">
                <h4>
                  <b>Name: {Data.name}</b>
                </h4>

                <p>Atomic Mass: {Data.atomic_mass} </p>
                <p>Electron Configuration: {Data.electron_configuration}</p>

                <h4>
                  <p>summary: {Data.summary}</p>
                </h4>

                <button
                  onClick={() => {
                    window.location.href = "/" + Data.name;
                  }}
                >
                  View AR
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
