export const search = (search,arr) => arr.filter((item) => item.name.match(new RegExp(search, "ig")))
