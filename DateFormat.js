export const dateFormat = (date, options = { lang: "pt-br",dateStyle: 'full', timeStyle: 'long' }) => {
  return new Intl.DateTimeFormat(options.lang, options).format(date)
}
