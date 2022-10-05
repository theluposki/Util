export const getTotal = (arr, prop, prop2) => {
    arr.forEach(el => {
      if(isNaN(Number(el[prop]))) return `the property passed [ ${prop} ] is not a number`
      if(isNaN(Number(el[prop2]))) return `the property passed [ ${prop2} ] is not a number`
    });
    
    return arr.reduce((a, b) => {
      if(prop2) return a + Number(b[prop]) * Number(b[prop2])  
      
      return a + Number(b[prop])
    }, 0) 
}
