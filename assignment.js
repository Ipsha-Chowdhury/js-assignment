window.onload = (event) => {
  console.log('page is fully loaded');
  this.createTiles([1,2,3,4,5,6,7,8,9]);
};

function createTiles(arr){
let x ="";
for (let i=0; i<arr.length; i++) {
  x = x + "<div class='tile-wrapper border-" + arr[i] + "'><div class='tile tile-" + arr[i] + "''>" + arr[i] + "</div></div>";
}
document.getElementById("tiles").innerHTML = x;
}

function tileSort(){
let tileVal =[];
document.querySelectorAll(".tile-wrapper .tile").forEach((x)=> tileVal.push(+x.innerText));

tileVal.sort((a,b) => a-b)
console.log('sort: ',tileVal)
this.createTiles(tileVal);
}

function tileShuffle(){
let tileVal =[];
document.querySelectorAll(".tile-wrapper .tile").forEach((x)=> tileVal.push(+x.innerText));

tileVal.sort(()=>Math.random()-0.5)
console.log('shuffle: ', tileVal)
this.createTiles(tileVal);
}
