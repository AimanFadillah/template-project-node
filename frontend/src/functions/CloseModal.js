export default function CloseModal (target){
    const button = document.createElement("button");
    button.setAttribute("class","d-none");
    button.setAttribute("data-bs-dismiss","modal");
    button.setAttribute("data-bs-target",target);
    document.body.appendChild(button);
    button.click();
    document.body.removeChild(button);
    return true;
}