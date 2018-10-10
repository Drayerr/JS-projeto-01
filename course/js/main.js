// Criando um vetor com Descrição, quantidade e preço
var list = [
  {"desc" : "rice","amount" : "1", "value" : "5.40"},
  {"desc" : "beer","amount" : "12","value" : "1.99"},
  {"desc" : "meat","amount" : "1", "value" : "15"},
];

// Criando função que multiplica a quantidade de produtos pelo preço (puxando do vetor)
function getTotal (list){
  var total = 0
  for (var key in list){
    total += list[key].value * list[key].amount;
  }
  return total;
}

// Criando função que incrementa produtos na lista do site
function setList (list){
  var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';

  for (var key in list){
    table += '<tr><td> ' +capitalize(list[key].desc)+' </td><td> '+list[key].amount+' </td><td> '+formatValue(list[key].value)+' </td><td><button class="btn btn-default" onclick="setUpdate('+key+')">Edit</button> | Delete</td></tr>';
  }

  table += '</tbody>';
  document.getElementById('listTable').innerHTML = table;
  
}

// Criando função que muda a primeira letra para maiúsculo
function capitalize(desc){
  return desc.charAt(0).toUpperCase() + desc.slice(1).toLowerCase();
}

// Criando função que:
// Adiciona "R$" antes do valor;
// Muda o ponto para vírgula na exibição;
// Faz com que mostre apenas os 2 primeiros números decimais
function formatValue(value){
  var str = parseFloat(value).toFixed(2) +"";
  str = str.replace(".",",");
  var preco = "R$" +str;
  return preco;
}

// Criando função que:
// Adiciona produto no vetor
// Coloca o novo produto em cima
// Muda o ponto por vírgula
function addData(){
  var desc = document.getElementById("desc").value;
  var amount =document.getElementById("amount").value;
  var value= document.getElementById("value").value;
  
  value = value.replace(',','.') 

  list.unshift({"desc": desc ,"amount": amount,"value": value});

  setList(list);

}

function setUpdate(id){
  var obj = list[id];
  document.getElementById("desc").value = obj.desc;
  document.getElementById("amount").value = obj.amount;
  document.getElementById("value").value = obj.value;
  document.getElementById("btnUpdate").stlye.display = "inline-block";
  document.getElementById("btnAdd").style.display = "inlin-block";}

// Usando função etList
setList(list);

console.log("total: " +getTotal(list));