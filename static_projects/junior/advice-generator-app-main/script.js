let getAdviceBtn = document.getElementById("advice-icon-btn");
let quoteBox = document.getElementById("advice-quote")
let AdviceIdBox = document.getElementById("advice-id")

let getAdvice = ()=>{
    fetch("	https://api.adviceslip.com/advice")
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data.slip.id)
        quoteBox.innerText = `"${data.slip.advice}"`
        AdviceIdBox.innerHTML = `${data.slip.id}`
    })
}

getAdviceBtn.addEventListener("click",()=> getAdvice())