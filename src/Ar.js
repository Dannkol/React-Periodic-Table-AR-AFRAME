import {} from "react-aframe-ar";
import { Api_get } from "./api";

export function AR(props) {
  let data_api = Api_get();

  let data_AR = props.pat.slice(1)[0].toUpperCase() + props.pat.substring(2);
  
  return data_api.map((data_api) => {
    if (data_api.name === data_AR) {
      return (
        <div className="App">
          <h2> React AR JS </h2>
          <div>
            <a-scene>
              <a-marker preset="hiro">
                <a-entity
                  position="0 0 0"
                  scale="2 2 2"
                  gltf-model={data_api.bohr_model_3d}
                ></a-entity>
              </a-marker>
              <a-entity camera>
                <a-cursor></a-cursor>
              </a-entity>
            </a-scene>
          </div>
        </div>
      );
    } else {
      <h1>F</h1>;
    }
  });
}
