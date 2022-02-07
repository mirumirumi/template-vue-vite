export const round = ((value: number, base = 6): number => {
  return Math.round(value * (10**base)) / (10**base)
})

export const delay = ((msec: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, msec)
  })
})
