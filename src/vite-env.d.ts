/// <reference types="vite/client" />
declare module "*.glb" {
  const src: string;
  export default src;
}
declare module "*.env" {
  const src: string;
  export default src;
}
