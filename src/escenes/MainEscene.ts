import bgMain from '../../public/backgrounds/main.jpg'
import { Escene } from '../canvas/canvas'

export const MainCreate = new Escene({
  width: `${window.innerWidth}px`,
  height: `${window.innerHeight}px`,
  id: 'Home',
  background: `url(${bgMain})`,
  customStyles: `
      background-size: cover;
      background-position: center;
    `
})

MainCreate.drawBall({
  x: MainCreate.canvas.width / 2.5,
  y: 30,
  radius: 5,
  fillStyle: '#000000',
  startAngle: Math.PI * 2,
  id: 'dark-ball'
})

MainCreate.drawBall({
  x: MainCreate.canvas.width / 1.5,
  y: 30,
  radius: 5,
  fillStyle: 'red',
  startAngle: Math.PI * 2,
  id: 'dark-red'
})

export const MainEscene = MainCreate.canvas
