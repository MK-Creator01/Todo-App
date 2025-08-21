
function gettask() {
  let task = document.getElementById('myText');
  let value = task.value;
  console.log(value);



  // Create a new <div>
  let maindiv = document.getElementById('maindiv');

  let creatediv = document.createElement('div');
  creatediv.className = 'items';

 //Show the task status
 let taskStatus = document.createElement('select');
 taskStatus.id = 'option';

 let opt1 = document.createElement('option');
 opt1.innerHTML = '&#xf254;';
 taskStatus.appendChild(opt1);


 const opt2 = document.createElement('option');
 opt2.innerHTML = '&#10004;';
 taskStatus.appendChild(opt2);

 const opt3 = document.createElement('option');
 opt3.innerHTML = '&#10680;';
 taskStatus.appendChild(opt3);



  //Create new p tag for write a New task
  let taskadd = document.createElement('p');
  taskadd.textContent = value;

  //Delete a task
  let deletebtn = document.createElement('i');
  deletebtn.innerHTML = '&#xf014;';
  deletebtn.innerHTML = '🗑️';
  deletebtn.className = 'fa';
  deletebtn.className = 'delete';
  deletebtn.style.fontSize = '30px';
  deletebtn.style.font = 'font: normal normal normal 14px / 1 FontAwesome;';
  deletebtn.addEventListener('click',deletTask);

  //show  in body
  maindiv.appendChild(creatediv);
  creatediv.appendChild(taskStatus);
  creatediv.appendChild(taskadd);
  creatediv.appendChild(deletebtn);

  function deletTask() {
    // let contant = document.getElementsByClassName('dlttask');
     console.log("hi");
    creatediv.remove();
  }

}
function taskdel(){
  let removetask = document.getElementById('Defalttask');
  removetask.remove();
}


