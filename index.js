import { currency } from "./Currency.js"
import { dateFormat } from "./DateFormat.js" 
import { search } from "./SearchRegex.js"
import { getTotal } from "./sumTotal.js"

const peaple = [
  { name: "Tomas Shelb" , balance: "30000", qtd: "2" },
  { name: "Daenerys" , balance: 30000, qtd: 2 },
  { name: "John Snow" , balance: 30000, qtd: "2" },
  { name: "Alina Stark" , balance: 30000, qtd: 2 },
]

console.log("\n Search: \n",search("T", peaple))
console.log("\n DateFormat: \n",dateFormat(Date.now(), { dateStyle: 'medium', timeStyle: 'medium' }))
console.log("\n Currency: ",currency(2000))

console.log("\n SumTotal: \n",getTotal(peaple, "balance", "qtd"), "\n")
