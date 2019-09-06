import { isAdjacent } from './isAdjacent'

describe('isAdjacent', () => {
  it('should return true parcels that are one next to each other', () => {
    const p1 = { x: 10, y: 8 }
    const p2 = { x: 10, y: 9 }

    const result = isAdjacent(p1, p2)

    expect(result).toBe(true)
  })

  it("should return false with parcels that aren't one next to each other", () => {
    const p1 = { x: 10, y: 8 }
    const p2 = { x: 11, y: 9 }

    const result = isAdjacent(p1, p2)

    expect(result).toBe(false)
  })
})
