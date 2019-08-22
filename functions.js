 function myFunction() {
            var input, filter, ul, li, a, i;
            input = document.getElementById("mySearch");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myMenu");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                if (a.innerHTML.toUpperCase().startsWith(filter)) {
                    li[i].style.display = "";
                } else {
                li[i].style.display = "none";
                }
            }
  }
  function editTask(input) {
  		    var txt;
              var newTask = prompt("Please make the change",input);
              if (newTask != null && newTask != "") {
                  var tasks=html5docs = JSON.parse(localStorage.tasks);
                  var newTasks=[];
                  tasks.forEach(i=>{
                                  if(i!=input)
                                  {
                                      newTasks.push(i);
                                  }
                                }
                             );
                  newTasks.push(newTask);
                  localStorage.tasks = JSON.stringify(newTasks);
              }
              makeSearch();
  }
  function addTask() {
              var input = document.getElementById("mySearch").value;
              var tasks= JSON.parse(localStorage.tasks);
              if(tasks.includes(input))
              {
                  alert("Task already exists");
                  makeSearch();
                  return;
              }
              tasks.push(input);
              localStorage.tasks = JSON.stringify(tasks);
              makeSearch();
  }
  function deleteTask(input) {
              var tasks=html5docs = JSON.parse(localStorage.tasks);
              var newTasks=[];
              tasks.forEach(i=>{
                                  if(i!=input)
                                  {
                                      newTasks.push(i);
                                  }
                                }
                             );
              localStorage.tasks = JSON.stringify(newTasks);
              makeSearch();
  }
  function makeSearch() {
              var buttonscript='<ul id="myMenu"><input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search..">';
              var tasks= JSON.parse(localStorage.tasks);
              tasks.sort();
              tasks.forEach(i=>{
                                buttonscript=buttonscript+"<li><a href=\"#\">"+i+"</a>";
                                var deletemethod="\"deleteTask(\'"+i+"\')\"";
                                var editmethod="\"editTask(\'"+i+"\')\"";
                                buttonscript=buttonscript+'<div class="Delete"><button id="seperate" onclick='+deletemethod+'>Delete</button></div>';
                                buttonscript=buttonscript+'<div class="Edit"><button id="seperate" onclick='+editmethod+'>Edit</button></li><br></div>';
                                }
                            );
              buttonscript=buttonscript+"</ul>";
              buttonscript=buttonscript+"<button onclick=\"addTask()\">Add Task</button>";
  			  document.getElementById("p1").innerHTML=buttonscript;
  }
  function UselessTab1() {
  		      document.getElementById("p1").innerHTML="Inside useless tab 1";
  }
  function UselessTab2() {
  		      document.getElementById("p1").innerHTML="Inside useless tab 2";
  }
