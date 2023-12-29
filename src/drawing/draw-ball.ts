import { TypeBallConfig } from '../canvas/ball.types'
import { ballsRepository } from './balls.repository'

export function drawBall(
  configBall: TypeBallConfig,
  ctx: CanvasRenderingContext2D,
  ballsRepo: ballsRepository
) {
  const { x, y, radius, fillStyle, startAngle, id } = configBall

  ctx.beginPath()
  ctx.arc(x, y, radius, 0, startAngle)
  ctx.fillStyle = fillStyle
  ctx.fill()
  ctx.closePath()

  ballsRepo.drawed.push(id)
}
