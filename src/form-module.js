//we will have a dom anchor, it will be dynamic mostly
// form-module will append to w/e dom anchor we pick the todos form

// document.getElementById('formTemplate').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const dueDate = document.getElementById('dueDate').value;
//     const priority = document.getElementById('priority').value;
//     const notes = document.getElementById('notes').value;
//     const checklist = document.getElementById('checklist');

//     const formData = {
//         project: 'test',
//         title: title,
//         description: description,
//         dueDate: dueDate,
//         priority: priority,
//         notes: notes,
//         checklist : checklist
//     };

//     // todosStorer(formData);
//     // projectsStorer(someProject);

// // console.log(localStorage);
// // console.log(JSON.parse(localStorage.getItem('test')));
// // console.log(JSON.parse(localStorage.getItem('test')).find(x => x.title == 'test' ));

//     // let test = JSON.parse(localStorage.getItem('test'));
    
//     // for (let i = 0; i < test.length; i++) {
//     //     if (test[i] == 'hello pls work') {
//     //         test.splice(i, 1);
//     //     }
//     // }
    
//     // localStorage.setItem('test', JSON.stringify(test));

//     // for (let i in localStorage.getItem('test')) {
//     //     i++
//     //     for (let j in localStorage.getItem('test')[i].models) {
//     //       x += myObj.cars[i].models[j];
//     //     }
//     //   }
// });

// <form id="formTemplate">
// <label for="title">Title:</label>
// <input type="text" id="title" required>

// <label for="description">Description:</label>
// <textarea id="description"></textarea>

// <label for="dueDate">Due Date:</label>
// <input type="date" id="dueDate" required>

// <label for="priority">Priority:</label>
// <input type="range" min="1" max="100" value="50" id="priority">

// <label for="notes">Notes:</label>
// <textarea id="notes"></textarea>

// <!-- <label for="checklist">Checklist:</label>
// <input type="checkbox" name="checklist"> -->

// <fieldset id="checklist">
//     <legend>Checklist:</legend>
  
//     <div>
//       <input type="checkbox" id="choice1" name="choice1" value="choice1"/>
//       <label for="choice1">First Choice</label>
//     </div>
  
//     <div>
//       <input type="checkbox" id="choice2" name="choice2" value="choice2"/>
//       <label for="choice2">Second Choice</label>
//     </div>
//   </fieldset>

// <button type="submit">Submit</button>
// </form>

export default function formMaker() {
    const bodyGrbbr = document.querySelector('body');

    bodyGrbbr.appendChild(document.createElement('form')).setAttribute('id', 'formTemplate');

    const formAnchorGrbbr = document.getElementById('formTemplate');

    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'title');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('id', 'title');
    document.getElementById('title').setAttribute('type', 'text');
    document.querySelector('[for="title"]').innerText = "Title: ";

    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'description');
    formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('id', 'description');
    document.querySelector('[for="description"]').innerText = "Description: ";

    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'dueDate');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('id', 'dueDate');
    document.getElementById('dueDate').setAttribute('type', 'date');
    document.querySelector('[for="dueDate"]').innerText = "Due Date: ";

    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'priority');

    formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('id', 'priorityContainer');
    document.querySelector('#priorityContainer').appendChild(document.createElement('input')).setAttribute('id', 'priority');
    document.querySelector('#priorityContainer').appendChild(document.createElement('output')).setAttribute('id', 'value');
    
    const value = document.querySelector("#value");
    const input = document.querySelector("#priority");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    });

    
    document.getElementById('priority').setAttribute('type', 'range');
    document.getElementById('priority').setAttribute('min', '0');
    document.getElementById('priority').setAttribute('max', '100');
    document.getElementById('priority').setAttribute('step', '1');
    document.querySelector('[for="priority"]').innerText = "Priority: ";

    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'notes');
    formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('id', 'notes');
    document.querySelector('[for="notes"]').innerText = "Notes: ";

    //checklist
    formAnchorGrbbr.appendChild(document.createElement('p')).innerText = "Checklist:";

    // formAnchorGrbbr.appendChild(document.createElement('fieldset')).setAttribute('id', 'checklist');

    // const clGrbbr = document.getElementById('checklist');

    // clGrbbr.appendChild(document.createElement('input')).setAttribute('id', 'cl-button');
    // document.querySelector('#cl-button').setAttribute('type', 'button');
    // document.querySelector('#cl-button').value = "Add List Item";


    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('id', 'ulCLInput');
    document.querySelector('#ulCLInput').setAttribute('type', 'text');
    document.querySelector('#ulCLInput').setAttribute('placeholder', 'Add List Item');

    formAnchorGrbbr.appendChild(document.createElement('span')).setAttribute('id', 'newEleSpan');

    document.querySelector('#newEleSpan').addEventListener('click', () => {
        newElement();
    })
    //UL checklist
    formAnchorGrbbr.appendChild(document.createElement('ul')).setAttribute('id', 'ulChecklist');



    // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
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
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

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

}