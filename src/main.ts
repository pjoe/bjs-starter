import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import "@babylonjs/core/Materials/standardMaterial";
import { setupBabylon } from "./setup_babylon";
import { PhysicsAggregate } from "@babylonjs/core/Physics/v2/physicsAggregate";
import { PhysicsShapeType } from "@babylonjs/core/Physics/v2/IPhysicsEnginePlugin";

setupBabylon((scene: Scene) => {
  const camera: ArcRotateCamera = new ArcRotateCamera(
    "Camera",
    60 * (Math.PI / 180),
    60 * (Math.PI / 180),
    16,
    Vector3.Zero(),
    scene
  );
  camera.attachControl();
  const light1 = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);

  const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
  sphere.position.y = 3.5;
  new PhysicsAggregate(sphere, PhysicsShapeType.SPHERE, { mass: 1 })

  const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 });
  new PhysicsAggregate(ground, PhysicsShapeType.BOX, { mass: 0 })

});
