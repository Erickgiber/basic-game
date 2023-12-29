import { MainEscene } from './escenes/MainEscene'
import './style.scss'

const app = document.querySelector<HTMLDivElement>('#app')!

app.appendChild(MainEscene)
