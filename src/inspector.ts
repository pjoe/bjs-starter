import "@babylonjs/core/Debug/debugLayer";
import { Scene } from "@babylonjs/core/scene";
import "@babylonjs/inspector";

export function setupInspector(scene: Scene) {
  window.addEventListener("keydown", (ev) => {
    // Alt+I toggles inspector
    if (ev.altKey && ev.keyCode === 73) {
      if (scene.debugLayer.isVisible()) {
        scene.debugLayer.hide();
      } else {
        scene.debugLayer.show({
          embedMode: true,
          globalRoot: document.body,
        });
      }
    }
  });
}
