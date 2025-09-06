
const euro=270
//events
//loclastorage VS sessionStorage
const fun=async()=>{
  try{
  const response=await fetch("https://randomuser.me/api/")
  if(response.ok){
    const data=await response.json()
    console.log(data.results[0].name.last)
  }
}
catch(error){

}
}
fun()
//gotlak 3afsa ma3rafe machi lahdia tathagag wla la