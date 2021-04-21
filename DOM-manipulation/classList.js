const liList = document.querySelectorAll("li");

for (let li of liList){
    if(li.classList.contains("highlight")){
        li.classList.remove("highlight");
    } else {
        li.classList.add("highlight");
    }
}