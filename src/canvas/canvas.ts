import { ballsRepository } from '../drawing/balls.repository'
import { drawBall } from '../drawing/draw-ball'
import { setConfig } from '../utils/set-config'
import { setStyles } from '../utils/set-styles'
import { TypeBallConfig } from './ball.types'
import { TypeCanvasConfig } from './canvas.types'

export class Escene {
  public canvas = document.createElement('canvas') as HTMLCanvasElement
  public context = this.canvas.getContext('2d') as CanvasRenderingContext2D
  public ballsDrawed = new ballsRepository()

  public drawBall(configBall: TypeBallConfig) {
    const ctx = this.getContext()

    drawBall(configBall, ctx, this.ballsDrawed)
    this.ballsDrawed.drawed = this.ballsDrawed.drawed
  }

  private getCanvas(): HTMLCanvasElement {
    return this.canvas
  }

  private getContext(): CanvasRenderingContext2D {
    return this.context
  }

  private onLoad = setTimeout(() => {
    console.clear()
    console.group('Balls information')
    console.info('Balls Drawed: ')
    console.log({ total: this.ballsDrawed.drawed.length })
    console.table(this.ballsDrawed.drawed)
    console.groupEnd()
  }, 50)

  constructor(config: TypeCanvasConfig) {
    const canvas = this.getCanvas()
    setConfig(config, canvas)
    setStyles(config, canvas)

    this.onLoad
  }
}
