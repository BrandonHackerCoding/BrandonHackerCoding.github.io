// table must contain tbody, tr, th (or td)

// get the table01 object
let table01 = document.getElementById("table01");

// build the table01 object
appendScorecard();

//      tbody       tr          th
table01.children[0].children[1].children[2].innerHTML = "3";
table01.children[0].children[1].children[3].innerHTML = "-1";


// build the table01 object
// calls TableHeaders (arr) and TableRow (arr)
function appendScorecard () {
  
  // create a new tbody object
  let tbody = document.createElement("tbody");

  // create tr object to contains column headers
  let tr = document.createElement("tr");
  tr.innerHTML = TableHeaders(["hole", "par", "score", "over", "actions"]);
  tbody.appendChild(tr);

  // loop: create tr objects to contain each hole from 1 to 18
  for(let i=0; i<18; i++) {
    tr = document.createElement("tr");
    tr.innerHTML = TableRow([i+1, "4", "-", "-", "actions"]);
    tbody.appendChild(tr);
  }

  // create tr object to contain totals row at bottom
  tr = document.createElement("tr");
  tr.innerHTML = TableRow(["<strong>totals</strong>", "72", "", "", ""]);
  tbody.appendChild(tr);

  // append the whole schmeer to table01
  table01.appendChild(tbody);
  
  // debug
  console.log(table01.children[0].children[0].children[0].innerHTML); // hole
  
}

function TableHeaders (arr) {
  this.hole    = '<th>' + arr[0] + '</th>';
  this.par     = '<th>' + arr[1] + '</th>';
  this.score   = '<th>' + arr[2] + '</th>';
  this.over    = '<th>' + arr[3] + '</th>';
  this.actions = '<th>' + arr[4] + '</th>';
  return this.hole + this.par + this.score + this.over + this.actions; // string
}

function TableRow (arr) {
  this.hole    = '<td>' + arr[0] + '</td>';
  this.par     = '<td>' + arr[1] + '</td>';
  this.score   = '<td>' + arr[2] + '</td>';
  this.over    = '<td>' + arr[3] + '</td>';
  this.actions = '<td><button class="btn btn-success">+</button> <button class="btn btn-danger">-</button></td>';
  return this.hole + this.par + this.score + this.over + this.actions; // string
}

//assign row for hole 1 to variable elem
let elem = document.getElementById("1");
//assign function to +
elem.children[4].children[0].onclick = function(){add1(elem);};
//create add1
function add1 (elem) {
  if(elem.children[2].innerHTML == "-")
    elem.children[2].innerHTML == "1";
  else{
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
