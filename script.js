var wrapper =  document.body.querySelector(".wrapper");
var dragon = document.createElement("div");
var win = document.createElement("div");
var dragon_health = 0;

function attack(damage, attackType){
  if (attackType == "fire"){
    dragon_health=dragon_health+(damage-1);
  }else if (attackType == "ice"){
    dragon_health=dragon_health+(damage+1);
  }else{
    dragon_health=dragon_health+damage;
  }
}

document.body.querySelector(".fire").addEventListener("click", function(){
  attack(3, "fire");
}) 
document.body.querySelector(".ice").addEventListener("click", function(){
  attack(1, "ice");
})
document.body.querySelector(".poison").addEventListener("click", function(){
  attack(4, "poison");
})

dragon.innerHTML = "Dragon Health: " + dragon_health;
if (dragon_health >= 10){
  win.innerHTML = "You win!";
}

wrapper.appendChild(dragon)
wrapper.appendChild(win)