import App from "./App"
import RaycastScene from "./RaycastScene";
import './style.css'

window.addEventListener('DOMContentLoaded',()=>{
    const canvas = document.getElementById('app')
    const app = new RaycastScene({canvas});
})