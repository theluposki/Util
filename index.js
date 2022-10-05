import { currency } from "./Currency.js"
import { dateFormat } from "./DateFormat.js" 
import { search } from "./SearchRegex.js"
import { getTotal } from "./sumTotal.js"

const peaple = [
  { name: "Tomas Shelb" , balance: "30000", qtd: "w2" },
  { name: "Daenerys" , balance: 30000, qtd: 2 },
  { name: "John Snow" , balance: 30000, qtd: "2" },
  { name: "Alina Stark" , balance: 30000, qtd: 2 },
]

console.log(search("D", peaple))
console.log(dateFormat(Date.now(), { dateStyle: 'medium', timeStyle: 'medium' }))
console.log(currency(2000))

console.log("\n",getTotal(peaple, "balance", "qtd"), "\n")
