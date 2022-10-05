import { currency } from "./Currency.js"
import { dateFormat } from "./DateFormat.js" 
import { search } from "./SearchRegex.js"

const peaple = [
  { name: "Tomas Shelb" , balance: "30000" },
  { name: "Daenerys" , balance: "30000" },
  { name: "John Snow" , balance: "30000" },
  { name: "Alina Stark" , balance: "30000" },
]

console.log(search("D", peaple))
console.log(dateFormat(Date.now(), { dateStyle: 'medium', timeStyle: 'medium' }))
console.log(currency(2000))

