import bgMain from '../public/backgrounds/main.jpg'
import { Escene } from './canvas/canvas'
import './style.scss'

const app = document.querySelector<HTMLDivElement>('#app')!

const home = new Escene({
  width: '100%',
  height: '100%',
  id: 'Home',
  background: `url(${bgMain})`,
  customStyles: `
    background-size: cover;
    background-position: center;
  `
})

app.appendChild(home.canvas)
