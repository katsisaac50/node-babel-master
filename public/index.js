

function renderList(data){
 
  $shopping_list=document.getElementById("shopping_list");
  $shopping_list.innerHTML="";
  data.forEach((item, index)=>{
    const $li=document.createElement('li');
    const $remove_button=document.createElement('button');
    $remove_button.setAttribute("type","button");
    $remove_button.setAttribute("onclick","removeItem(event)");
    $remove_button.setAttribute("class", 'pure-button button-small button-error');
    $remove_button.setAttribute("data-index", index);
    $remove_button.innerHTML="remove item";
    $li.innerHTML=`Name:${item.name}, amount:${item.amount}, price:${item.price}`;
    $li.appendChild($remove_button);
    $shopping_list.appendChild($li);

const $edit_button=document.createElement('button');
    $edit_button.setAttribute("type","button");
    $edit_button.setAttribute("onclick","editItem(event)");
    $edit_button.setAttribute("class", 'pure-button button-small button-error')
    $edit_button.setAttribute("data-index", index);
    $edit_button.innerHTML="edit item";
    $li.appendChild($edit_button);

  });
}

window.removeItem=(event)=>{
  const index=event.target.getAttribute('data-index');
  axios.delete('/shopping_list/'+index)
  .then(function(response){
    console.log(response.data);
    renderList(response.data);
  })
  .catch(function(error){
    console.log(error);
  });
};


axios.get('/shopping_list')
  .then(function (response) {
    shopping_list=response.data;
    renderList(response.data);

   /* response.data.forEach(function(item){
        console.log(item);
        let elementli=document.createElement("li")
        elementli.innerHTML="name "+ item.name+" price "+item.price+" Amount "+item.amount;
        document.getElementById("shopping_list").appendChild(elementli)
    });*/
  })
  .catch(function (error) {
    console.log(error);
  });

  window.editItem=(event)=>{
    document.getElementById("submit_button").innerHTML="Edit item";
    const index=event.target.getAttribute('data-index');
    document.getElementById("name").value=shopping_list[index].name;
    document.getElementById("amount").value=shopping_list[index].amount;
    document.getElementById("price").value=shopping_list[index].price;
  edit_mode=true;

    axios.patch('/shopping_list/'+index, shopping_list[index])
      .then(function (response) {
        renderList(response.data);
        document.getElementById("submit_button").innerHTML="Add item";

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //Main

document.getElementById("item_form").addEventListener('submit',(event)=>{
  event.preventDefault();
  const item={
    name: document.getElementById("name").value,
    amount: document.getElementById("amount").value,
    price: document.getElementById("price").value
  }/*
console.log('item',item);

name: document.getElementById("name").value="";
amount: document.getElementById("amount").value="";
price: document.getElementById("price").value="";*/
axios.post('/shopping_list', item)
      .then(function (response) {
        renderList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      name : document.getElementById('name').value="";
    price: document.getElementById('price').value="";
    amount: document.getElementById('amount').value="";
});






  document.getElementById('item_form').addEventListener('submit', function(evt){
    evt.preventDefault();
const item={
    name : document.getElementById('name').value,
    price: document.getElementById('price').value,
    amount: document.getElementById('amount').value
}


    
})



  