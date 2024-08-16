// const list = [];
// for(let i=0;i<26;i++){
//     list.push(String.fromCharCode(i+65));
//     for(let j=0;j<26;j++){
//         list.push(String.fromCharCode(i+65) + String.fromCharCode(j+65));
//     }
// }

// console.log(list);

let listElements = "";

for(let i=0;i<26;i++){
    listElements += `<div class="same-start"><div class="name-list stick-top">${String.fromCharCode(i+65)}</div>`;
    //listElements += `<div class="name-list stick-top">${String.fromCharCode(i+65)}</div>`;
    for(let j=0;j<26;j++){
        listElements += `<div class="name-list">${String.fromCharCode(i+65) + String.fromCharCode(j+65)}</div>`;
    }
    listElements += `</div>`;
}
console.log(listElements);

document.addEventListener("DOMContentLoaded", ()=> {
    const box = document.getElementsByClassName("box")[0];

    box.innerHTML = listElements;
    
});
    // list.forEach((nameInList,index) => {
    //     if(index%27 != 0){
    //         box.innerHTML += `<div class="name-list">${nameInList}</div>`;
    //     }
    //     else{
    //         box.innerHTML += `<div class="name-list stick-top">${nameInList}</div>`;
    //     }
    // })
    
