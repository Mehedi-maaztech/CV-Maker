function getName(){
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    document.getElementById('rcv_first_name').innerHTML = first_name; 
    document.getElementById('rcv_last_name').innerHTML = last_name; 
}
function savepicture(){
    document.getElementById('rec_ProfiePicture').classList.add("d-none");
    document.getElementById('canv1').classList.remove("d-none");

    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("profile_input");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}
function getContact(){
    const rcv_contacts = document.querySelectorAll('.rcv_contact');
    const contacts = document.querySelectorAll('.contact');
    var length = contacts.length;

    for(var i = 0; i < length;i++){
        rcv_contacts[i].innerHTML = contacts[i].value;
    }
}
function getObj(){
    var objective = document.getElementById('objective').value;
    document.getElementById('rcv_objective').innerHTML = objective;
}
function getExp(){
    const rcv_exps = document.querySelectorAll('.rcv_exps');
    const exps = document.querySelectorAll('.exps');
    var lenght = exps.length;
    for(var i = 0; i < lenght; i++){
        rcv_exps[i].innerHTML = exps[i].value;
    }
}
function getEdu(){
    const rcv_edus = document.querySelectorAll('.rcv_edus');
    const edus = document.querySelectorAll('.edus');
    var lenght = edus.length;
    for(var i = 0; i < lenght; i++){
        rcv_edus[i].innerHTML = edus[i].value;
    }
}
function getRefer(){
    var refer = document.getElementById('refer').value;
    document.getElementById('rcv_refer').innerHTML = refer;
}
function getHobbies(){
    const rcv_hobbies = document.querySelectorAll('.rcv_hobbies');
    const hobbies = document.querySelectorAll('.hobbies');
    var lenght = hobbies.length;
    for(var i = 0; i < lenght; i++){
        rcv_hobbies[i].innerHTML = hobbies[i].value;
    }
}
function getSkills(){
    const rcv_skill = document.querySelectorAll('.rcv_skill');
    const skill = document.querySelectorAll('.skill');
    var length = skill.length;
    for(var i = 0; i < length;i++){
        rcv_skill[i].innerHTML = skill[i].value;
    }

    const rcv_skill_bar = document.querySelectorAll('.rcv_skill_bar');
    const skill_bar = document.querySelectorAll('.skill');
    var length = skill_bar.length;
    for(var i = 0; i < length;i++){
        rcv_skill_bar[i].style.width = skill_bar[i].value + "%";
    }
}