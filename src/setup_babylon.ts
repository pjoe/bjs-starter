import { Engine } from "@babylonjs/core/Engines/engine";
import "./style.css";
import { Scene } from "@babylonjs/core/scene";
import "@babylonjs/core/Materials/standardMaterial";
import { setupInspector } from "./inspector";
import { HavokPlugin } from "@babylonjs/core/Physics/v2/Plugins/havokPlugin";
import HavokPhysics from "@babylonjs/havok";
import '@babylonjs/core/Physics/v2/physicsEngineComponent';
import { Vector3 } from "@babylonjs/core/Maths/math.vector";

export async function setupBabylon(onSceneReady: (scene: Scene) => void) {
  const canvas = document.querySelector<HTMLCanvasElement>("canvas#c3d");

  // initialize babylon scene and engine
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);

  window.addEventListener("resize", () => {
    engine.resize();
  });

  await setupPhysics(scene)

  scene.onReadyObservable.addOnce(onSceneReady);

  await setupInspector(scene);

  // run the main render loop
  engine.runRenderLoop(() => {
    scene.render();
  });
}

async function setupPhysics(scene: Scene) {
  const havokInstance = await HavokPhysics();
  const havokPlugin = new HavokPlugin(true, havokInstance);
  scene.enablePhysics(new Vector3(0, -9.8, 0), havokPlugin);
}

