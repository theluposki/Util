export const currency = (number, lang = "pt-br", currencyAcronyms = "BRL") => {
  const n = Number(number)
  return new Intl.NumberFormat(lang, { style: 'currency', currency: currencyAcronyms }).format(n)
}
