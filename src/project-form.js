import projectsStorer from "./projects-storer";

export default function projFormMaker(anchor) {
    const bodyGrbbr = anchor;

    bodyGrbbr.appendChild(document.createElement('form')).setAttribute('class', 'projFormTemplate');

    const formAnchorGrbbr = document.querySelector('.projFormTemplate');
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'title');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'title');
    document.querySelector('.title').setAttribute('type', 'text');
    document.querySelector('[for="title"]').innerText = "Title: ";
  
    //SUBMIT BUTTON
    // let todoForStor = new Todos();
    formAnchorGrbbr.appendChild(document.createElement('button')).setAttribute('class', 'submitBtn');
    const submitBtnGrbbr = document.querySelector('.submitBtn');
    submitBtnGrbbr.innerText = "Submit";
    submitBtnGrbbr.setAttribute('type', 'button');
  
    submitBtnGrbbr.addEventListener('click', () => {
      let addBtnWindowGrbbr = document.querySelector('.add-proj-btn-div-form');
    
      projectsStorer(document.querySelector(".title").value);

      addBtnWindowGrbbr.remove();
    });
}