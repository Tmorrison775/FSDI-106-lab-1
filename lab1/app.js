//JS to change the text on a text field
function createNew(){
    var text = $("#txtTest").val();
    var list = $("#todos");
    list.append('<li class="list-group-item">' + text + '</li>');

    //clear the text

    $("#txtTest").val("").focus;
}
/*function init() {
    var txt = document.getElementById("txtTest");
    console.log(txt.value);
    txt.value = "Last";
    //assign a function to click event of button
    var btn = document.getElementById('btnAdd');
    btn.onclick = createNew;
}*/
function init2(){
    //change the text on the field
    //event binding
    $("#txtTest").keypress(function(args){
        if(args.key == "Enter")
        createNew();
    })
    $("#btnAdd").click(createNew);
}
//window.onload = init; //this will load a function when the document is loaded. This will help cause less faults in the code.
$(document).ready(init2);

