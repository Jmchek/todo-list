import todosStorer from "./todos-storer.js";
import Todos from "./todos-creator.js";
import projectsModule from "./project-module.js";

export default function formMaker(anchor, todo) {
  let arrForStor = [];
  
  const bodyGrbbr = anchor;

  if(arguments.length > 1) {
    //FORM FOR EDITING existing todo (EDIT BUTTON)

    bodyGrbbr.appendChild(document.createElement('form')).setAttribute('class', 'formTemplate');

    const formAnchorGrbbr = document.querySelector('.formTemplate');
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'title');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'title');
    document.querySelector('.title').setAttribute('type', 'text');
    document.querySelector('[for="title"]').innerText = "Title: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'description');
    formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('class', 'description');
    document.querySelector('[for="description"]').innerText = "Description: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'dueDate');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'dueDate');
    document.querySelector('.dueDate').setAttribute('type', 'date');
    document.querySelector('[for="dueDate"]').innerText = "Due Date: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'priority');
  
    formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'priorityContainer');
    document.querySelector('.priorityContainer').appendChild(document.createElement('input')).setAttribute('class', 'priority');
    document.querySelector('.priorityContainer').appendChild(document.createElement('output')).setAttribute('class', 'value');
    document.querySelector(".priority").setAttribute('value', '50');
    
    const value = document.querySelector(".value");
    const input = document.querySelector(".priority");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    });
  
    
    document.querySelector('.priority').setAttribute('type', 'range');
    document.querySelector('.priority').setAttribute('min', '0');
    document.querySelector('.priority').setAttribute('max', '100');
    document.querySelector('.priority').setAttribute('step', '1');
    document.querySelector('[for="priority"]').innerText = "Priority: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'notes');
    formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('class', 'notes');
    document.querySelector('[for="notes"]').innerText = "Notes: ";
  
    //checklist
    formAnchorGrbbr.appendChild(document.createElement('p')).innerText = "Checklist:";
    formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'checklistInputContainer');
    
  
  
    document.querySelector('.checklistInputContainer').appendChild(document.createElement('input')).setAttribute('class', 'ulCLInput');
    document.querySelector('.ulCLInput').setAttribute('type', 'text');
    document.querySelector('.ulCLInput').setAttribute('placeholder', 'Write here...');
  
    document.querySelector('.checklistInputContainer').appendChild(document.createElement('span')).setAttribute('class', 'newEleSpan');
    document.querySelector('.newEleSpan').classList.add('addBtn');
    document.querySelector('.newEleSpan').addEventListener('click', () => {
        newElement();
    })
    document.querySelector('.newEleSpan').innerText = "Add";
    //UL checklist
    formAnchorGrbbr.appendChild(document.createElement('ul')).setAttribute('class', 'ulChecklist');
  
  
  
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName(".ulChecklist > LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
  
    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('.ulChecklist');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
  
    // Create a new list item when clicking on the "Add" button
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.querySelector(".ulCLInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.querySelector(".ulChecklist").appendChild(li);
      }
      document.querySelector(".ulCLInput").value = "";
  
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }

    //pre-fill form
    const event = new Event("input");
    document.querySelector(".title").value = todo.title;
    document.querySelector(".description").value = todo.description;
    document.querySelector(".dueDate").value = todo.dueDate;
    document.querySelector(".priority").value = todo.priority;
    document.querySelector(".priority").dispatchEvent(event);
    document.querySelector(".notes").value = todo.notes;
    
    //we are trying to update the data in localStorage when we add or remove a checklist item
    let checklistItemsPre = document.querySelector('.ulChecklist');
  
    todo.checklist.forEach(x => {
      checklistItemsPre.appendChild(document.createElement('li')).innerText = x;
      // document.querySelectorAll('.ulChecklist > li').appendChild(document.createElement('span')).setAttribute('class', 'close');
      // document.querySelectorAll('.close').innerText = "x";
    });

    document.querySelectorAll('.ulChecklist > li').forEach( y => {
      y.appendChild(document.createElement('span')).setAttribute('class', 'close');
    });

    document.querySelectorAll('li > span').forEach(z => {
      z.innerText = "\u00D7";
    });

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  
    //SUBMIT BUTTON
    let todoForStor = new Todos();
    formAnchorGrbbr.appendChild(document.createElement('button')).setAttribute('class', 'submitBtn');
    const submitBtnGrbbr = document.querySelector('.submitBtn');
    submitBtnGrbbr.innerText = "Submit";
    submitBtnGrbbr.setAttribute('type', 'button');
  
    submitBtnGrbbr.addEventListener('click', () => {
      let checklistItems = document.querySelectorAll('.ulChecklist > li');
      let checklistItemsArr = [];
  
      checklistItems.forEach(x => {
        checklistItemsArr.push(x.textContent.slice(0, -1));
      });

      todoForStor.project = todo.project;
      todoForStor.title = document.querySelector(".title").value;
      todoForStor.description = document.querySelector(".description").value;
      todoForStor.dueDate = document.querySelector(".dueDate").value;
      todoForStor.priority = document.querySelector(".priority").value;
      todoForStor.notes = document.querySelector(".notes").value;
      todoForStor.checklist = JSON.stringify(checklistItemsArr);

      todosStorer(todoForStor);
      
    });
  } else {
    //BASIC FORM, no todo
    bodyGrbbr.appendChild(document.createElement('form')).setAttribute('class', 'formTemplate');

    const formAnchorGrbbr = document.querySelector('.formTemplate');
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'title');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'title');
    document.querySelector('.title').setAttribute('type', 'text');
    document.querySelector('[for="title"]').innerText = "Title: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'description');
    formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('class', 'description');
    document.querySelector('[for="description"]').innerText = "Description: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'dueDate');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'dueDate');
    document.querySelector('.dueDate').setAttribute('type', 'date');
    document.querySelector('[for="dueDate"]').innerText = "Due Date: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'priority');
  
    formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'priorityContainer');
    document.querySelector('.priorityContainer').appendChild(document.createElement('input')).setAttribute('class', 'priority');
    document.querySelector('.priorityContainer').appendChild(document.createElement('output')).setAttribute('class', 'value');
    document.querySelector(".priority").setAttribute('value', '50');
    
    const value = document.querySelector(".value");
    const input = document.querySelector(".priority");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    });
  
    
    document.querySelector('.priority').setAttribute('type', 'range');
    document.querySelector('.priority').setAttribute('min', '0');
    document.querySelector('.priority').setAttribute('max', '100');
    document.querySelector('.priority').setAttribute('step', '1');
    document.querySelector('[for="priority"]').innerText = "Priority: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'notes');
    formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('class', 'notes');
    document.querySelector('[for="notes"]').innerText = "Notes: ";
  
    //checklist
    formAnchorGrbbr.appendChild(document.createElement('p')).innerText = "Checklist:";
    formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'checklistInputContainer');
    
  
  
    document.querySelector('.checklistInputContainer').appendChild(document.createElement('input')).setAttribute('class', 'ulCLInput');
    document.querySelector('.ulCLInput').setAttribute('type', 'text');
    document.querySelector('.ulCLInput').setAttribute('placeholder', 'Write here...');
  
    document.querySelector('.checklistInputContainer').appendChild(document.createElement('span')).setAttribute('class', 'newEleSpan');
    document.querySelector('.newEleSpan').classList.add('addBtn');
    document.querySelector('.newEleSpan').addEventListener('click', () => {
        newElement();
    })
    document.querySelector('.newEleSpan').innerText = "Add";
    //UL checklist
    formAnchorGrbbr.appendChild(document.createElement('ul')).setAttribute('class', 'ulChecklist');
  
  
  
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName(".ulChecklist > LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
  
    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  
    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
  
    // Create a new list item when clicking on the "Add" button
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.querySelector(".ulCLInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.querySelector(".ulChecklist").appendChild(li);
      }
      document.querySelector(".ulCLInput").value = "";
  
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
  
    //SUBMIT BUTTON
    formAnchorGrbbr.appendChild(document.createElement('button')).setAttribute('class', 'submitBtn');
    const submitBtnGrbbr = document.querySelector('.submitBtn');
    submitBtnGrbbr.innerText = "Submit";
    submitBtnGrbbr.setAttribute('type', 'button');
  
    submitBtnGrbbr.addEventListener('click', () => {
      let checklistItems = document.querySelectorAll('li');
      let checklistItemsArr = [];
  
      checklistItems.forEach(x => {
        checklistItemsArr.push(x.textContent);
      });
      
      console.log(checklistItemsArr);
  
      arrForStor.push(document.querySelector(".title").value);
      arrForStor.push(document.querySelector(".description").value);
      arrForStor.push(document.querySelector(".dueDate").value);
      arrForStor.push(document.querySelector(".priority").value);
      arrForStor.push(document.querySelector(".notes").value);
      arrForStor.push( JSON.stringify(checklistItemsArr));
  
      console.log(arrForStor);
  
      document.querySelector(".title").value = "";
      document.querySelector(".description").value = "";
      document.querySelector(".dueDate").value = "";
      document.querySelector(".priority").value = "";
      document.querySelector(".notes").value = "";
      document.querySelector(".value").textContent = 50;
      document.querySelector(".ulChecklist").innerHTML = "";
  
      checklistItemsArr.length = 0;
  
      checklistItems.forEach(x => {
        x.textContent = "";
      });
  
      todosStorer(arrForStor);
      console.log(localStorage);
  
      arrForStor.length = 0;
  
  
      //test stuff here
      const restoredSession = JSON.parse(localStorage.getItem("undefined"));
  
      // Now restoredSession variable contains the object that was saved
      // in localStorage
      console.log(restoredSession);
    });
  }

  
}