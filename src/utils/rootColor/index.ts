import theme from './map'

const genCssString = (): string => {
  const themeMap = theme || {}

  if (typeof themeMap !== 'object' || Array.isArray(themeMap) || themeMap === null) return ''

  let mergedString = ''
  for (const [key, value] of Object.entries(themeMap)) {
    mergedString += `--${key}:${value};\n`
  }

  return mergedString
}

export const initColor = () => {
  const style = document.createElement('style')

  style.innerHTML = `:root {${genCssString()}}`

  document.getElementsByTagName('head')[0].appendChild(style)
}

export default initColor
