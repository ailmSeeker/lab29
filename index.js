// Write your code here!
let newHeader = document.createElement("h1");
let y = document.querySelector('main#main')
y.remove();
newHeader.textContent = "Mohamed Yusuf is the champion";
newHeader.id = "victory";
document.body.append(newHeader);
