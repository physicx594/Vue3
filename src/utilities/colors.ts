import Colors from '@/themes/general'

const formatRgbFromHex = (hexCode: string): string => {
  const hexColor = hexCode.replace('#', '')
  const r = hexColor.substring(0, 2)
  const g = hexColor.substring(2, 4)
  const b = hexColor.substring(4, 6)
  const a = hexColor.substring(6, 8)
  const toDecimal = (hex: string) => parseInt(hex, 16)
  if (a) {
    return `${toDecimal(r)}, ${toDecimal(g)}, ${toDecimal(b)}, ${(toDecimal(a) / 255).toFixed(2)}`
  }
  return `${toDecimal(r)} ${toDecimal(g)} ${toDecimal(b)}`
}

export const colorsGenerator = () => {
  const rootElement: HTMLElement = document.querySelector(':root')!

  Object.entries(Colors).forEach(([keys, values]) => {
    rootElement.style.setProperty(`--color-${keys}`, formatRgbFromHex(values))
  })
}
