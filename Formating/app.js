let expensesItem = document.querySelectorAll('.expenses-item'),
done, doneOrig,
insert = [],
valli = [],
valliRename = [],
test = [],
innput = document.querySelector('.innput'),
expensesBtn = document.getElementsByTagName('button')[0]; 

expensesBtn.addEventListener('click', function() {
  
  doneOrig = expensesItem[0].value.replace( /[^0-9]/g, "").replace(/(\d{11})/g, '$1, ').replace(/8([\d]{10})/g,"7$1").replace(/7([\d]{10})/g,"+7$1");

  valli = doneOrig.split(', ');
  valli.pop();

  done = expensesItem[0].value.replace( /[^0-9]/g, "").replace(/(\d{11})/g, '$1, ').replace(/8([\d]{10})/g,"7$1") .replace(/7([\d]{3})([\d]{3})([\d]{2})([\d]{2})/g,"+7 ($1) $2-$3-$4");
  
  valliRename = done.split(', ');

  insert = expensesItem[1].value.split(', ');


  for (let i = 0; i < valli.length; i++ ) {
    innput.innerHTML += '<li class="terra"></li>';
    let terraTu = document.querySelectorAll('.terra');
    terraTu[i].textContent = insert[0] + valli[i] + insert[1] + valliRename[i] + insert[2];
    
    };

 
});




