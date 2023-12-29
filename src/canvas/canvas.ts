import { TypeCanvasConfig } from './canvas.types'

export class Escene {
  public canvas = document.createElement('canvas') as HTMLCanvasElement
  public context = this.canvas.getContext('2d') as CanvasRenderingContext2D

  private getCanvas(): HTMLCanvasElement {
    return this.canvas
  }

  /* 
  private getContext(): CanvasRenderingContext2D {
    return this.context
  }
  */

  private setConfig(config: TypeCanvasConfig) {
    const { id, width, height } = config
    const canvas = this.getCanvas()

    canvas.id = String(id)
    canvas.style.height = height
    canvas.style.width = width
  }

  private setStyles(config: TypeCanvasConfig) {
    const { background, customStyles, width, height } = config
    const canvas = this.getCanvas()

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

  constructor(config: TypeCanvasConfig) {
    this.setConfig(config)
    this.setStyles(config)

    console.clear()
    console.log(this.getCanvas())
  }
}
