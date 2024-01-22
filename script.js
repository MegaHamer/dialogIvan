
const observer = new IntersectionObserver ((entires,observer)=>{
    console.log(entires)
    entires.forEach(
        entiry =>{
            console.log(entiry)
            if (entiry.isIntersecting){
                document.querySelector(".mamaMia").textContent=entiry.target.innerText;
            }
        }
    )
}, {threshold:1})

document.querySelectorAll(".interDay").forEach(
    day => {observer.observe(day)}
)