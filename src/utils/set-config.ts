import { TypeCanvasConfig } from '../canvas/canvas.types'

export function setConfig(config: TypeCanvasConfig, canvas: HTMLCanvasElement) {
  const { id, width, height } = config

  canvas.id = String(id)
  canvas.style.height = height
  canvas.style.width = width
}
