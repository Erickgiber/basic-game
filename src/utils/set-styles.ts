import { TypeCanvasConfig } from '../canvas/canvas.types'

export function setStyles(
  config: TypeCanvasConfig,
  canvas: HTMLCanvasElement
): void {
  const { background, customStyles, width, height } = config

  if (background) {
    canvas.style.background = background
  }

  if (customStyles) {
    canvas.style.cssText = `
            width: ${width};
            height: ${height};
            background: ${background};
            ${customStyles}
        `
  }
}
