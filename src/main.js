import App from "./App.js"
import RaycastScene from "./RaycastScene.js";

window.addEventListener('DOMContentLoaded',()=>{
    const canvas = document.getElementById('app')
    const app = new RaycastScene({canvas});
})