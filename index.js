

let inp=document.getElementById('inp')
let btn=document.getElementById('btn')
let check=document.getElementById('check')
let dv=document.getElementById('dv')
const euro=270
let v=10
//events
//loclastorage VS sessionStorage
window.onload=async()=>{
  try{
  const response=await fetch("https://randomuser.me/api/")
  if(response.ok){
    const data=await response.json()
    console.log(data.result[0].name.last)
  }
}
catch(error){

}
}

//gotlak 3afsa ma3rafe machi lahdia tathagag wla la