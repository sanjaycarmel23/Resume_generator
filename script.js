function addNewWEField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter Here');
    let weOb= document.getElementsById("we");
    let weAddButtonOb =document.getElementsById("weAddButton");

    weOb.insertBefore(newNode ,weAddButtonOb);
}

function addNewAQField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter Here');

    let aqOb= document.getElementsById("aq");
    let aqAddButtonOb =document.getElementsById("aqAddButton");

    aqOb.insertBefore(newNode ,aqAddButtonOb);
}

