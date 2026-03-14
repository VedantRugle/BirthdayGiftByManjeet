function next(n){

let pages=document.querySelectorAll(".page")

pages.forEach(p=>p.classList.remove("active"))

document.getElementById("p"+n).classList.add("active")

}

/* music */

function play(){
let audio = document.getElementById("song")
audio.src ="aditisong.mp3"
audio.play()
}

/* floating hearts */

setInterval(()=>{

let heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="💖"

heart.style.left=Math.random()*100+"vw"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),6000)

},400)

/* fireworks */

function fireworks(){

for(let i=0;i<30;i++){

let spark=document.createElement("div")

spark.innerHTML="✨"

spark.style.position="fixed"
spark.style.left=Math.random()*100+"vw"
spark.style.top=Math.random()*100+"vh"
spark.style.fontSize="24px"

document.body.appendChild(spark)

setTimeout(()=>spark.remove(),2000)

}

}