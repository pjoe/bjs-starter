import { Engine } from "@babylonjs/core/Engines/engine";
import "./style.css";
import { Scene } from "@babylonjs/core/scene";
import "@babylonjs/core/Materials/standardMaterial";
import { setupInspector } from "./inspector";

export function setupBabylon(onSceneReady: (scene: Scene) => void) {
  const canvas = document.querySelector<HTMLCanvasElement>("canvas#c3d");

  // initialize babylon scene and engine
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);

  window.addEventListener("resize", () => {
    engine.resize();
  });

  scene.onReadyObservable.addOnce(onSceneReady);

  setupInspector(scene);

  // run the main render loop
  engine.runRenderLoop(() => {
    scene.render();
  });
}
