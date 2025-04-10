let summary_section = document.getElementById("summary");

let data =
    [
        {
            "category": "Reaction",
            "score": 80,
            "icon": "./assets/images/icon-reaction.svg"
        },
        {
            "category": "Memory",
            "score": 92,
            "icon": "./assets/images/icon-memory.svg"
        },
        {
            "category": "Verbal",
            "score": 61,
            "icon": "./assets/images/icon-verbal.svg"
        },
        {
            "category": "Visual",
            "score": 72,
            "icon": "./assets/images/icon-visual.svg"
        }
    ]
let classes = ["reaction", "memory", "verbal", "visual"]

data.forEach((el, idx) => {  
    let div = document.createElement("div");
    div.innerHTML = `<p><img src="${el.icon}" alt="${el.category} Icon"> ${el.category}</p> 
      <p>${el.score} <span>/</span>  <span> 100 </span></p> `;
    div.classList.add(classes[idx]); 
    summary_section.appendChild(div);
});

