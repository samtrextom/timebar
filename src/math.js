export const getPOYR=(date)=>{
  const totalYear = 365*24*60*60
  const theStorySoFar = ((date.getSeconds()+(date.getMinutes()*60)+(date.getHours()*60*60)+((date.getDate()-1)*24*60*60)+(date.getMonth()*30*24*60*60))*100)/totalYear
  return theStorySoFar
}

export const increments ={
  year: 100,
  day: (100/365),
  hour: (100/365/24),
  min: (100/365/24/60),
  sec: (100/365/24/60/60)
}