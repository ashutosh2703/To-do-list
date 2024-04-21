function addTask() {
    const newTask = document.createElement('li');
    const tlist = document.getElementById("tlist");
    newTask.textContent = document.getElementById("inputTask").value;
    document.getElementById("inputTask").value="";
    tlist.appendChild(newTask);

    deleteTask(newTask);
     
}

function deleteTask(newTask) {
    const dbox = document.createElement('div');
    const dbtn = document.createElement('button');
    dbox.className="btn-parent"
    dbtn.textContent="Delete";
    dbox.appendChild(dbtn);
    newTask.appendChild(dbox);
    dbtn.onclick =  function    () {
        newTask.remove();
    }
}