export const today = () => {
  return `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`
}

export const round = (value: number, base = 6): number => {
  return Math.round(value * (10 ** base)) / (10 ** base)
}

export const delay = (msec: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, msec)
  })
}

export const toBool = (data: string): boolean => {
  return data.toLowerCase() === "true"
}

export function isIOS(): boolean {
  // https://bit.ly/2D2QKav
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
