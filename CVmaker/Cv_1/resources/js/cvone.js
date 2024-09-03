function savepicture(){
    document.getElementById('rec_ProfiePicture').classList.add("d-none");
    document.getElementById('canv1').classList.remove("d-none");

    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("profile_input");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}
function getIntrest(){
    var intrest1 = document.getElementById('intrest1').value;
    var intrest2 = document.getElementById('intrest2').value;
    var intrest3 = document.getElementById('intrest3').value;
    var intrest4 = document.getElementById('intrest4').value;
    var intrest5 = document.getElementById('intrest5').value;
    var intrest6 = document.getElementById('intrest6').value;
    var intrest7 = document.getElementById('intrest7').value;
    var intrest8 = document.getElementById('intrest8').value;
    var intrest9 = document.getElementById('intrest9').value;

    document.getElementById('rcv_intrest1').innerHTML = intrest1;
    document.getElementById('rcv_intrest2').innerHTML = intrest2;
    document.getElementById('rcv_intrest3').innerHTML = intrest3;
    document.getElementById('rcv_intrest4').innerHTML = intrest4;
    document.getElementById('rcv_intrest5').innerHTML = intrest5;
    document.getElementById('rcv_intrest6').innerHTML = intrest6;
    document.getElementById('rcv_intrest7').innerHTML = intrest7;
    document.getElementById('rcv_intrest8').innerHTML = intrest8;
    document.getElementById('rcv_intrest9').innerHTML = intrest9;
}

function getContact(){
    var mobile = document.getElementById('mobile').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;

    document.getElementById('rcv_mobile').innerHTML = mobile;
    document.getElementById('rcv_address').innerHTML = address;
    document.getElementById('rcv_email').innerHTML = email;    
}

function getName(){
    var name = document.getElementById('name').value;

    document.getElementById('rcv_name').innerHTML = name;
}

function getExp(){
    var year1 = document.getElementById('year1').value;
    var company1 = document.getElementById('company1').value;
    var details1 = document.getElementById('details1').value;
    var year2 = document.getElementById('year2').value;
    var company2 = document.getElementById('company2').value;
    var details2 = document.getElementById('details2').value;
    var year3 = document.getElementById('year3').value;
    var company3 = document.getElementById('company3').value;
    var details3 = document.getElementById('details3').value;

    document.getElementById('year1').innerHTML= year1;
    document.getElementById('company1').innerHTML= company1;
    document.getElementById('details1').innerHTML= details1;
    document.getElementById('year2').innerHTML= year2;
    document.getElementById('company2').innerHTML= company2;
    document.getElementById('details2').innerHTML= details2;
    document.getElementById('year3').innerHTML= year3;
    document.getElementById('company3').innerHTML= company3;
    document.getElementById('details3').innerHTML= details3;
}

function getEdu(){
    var eduyear1 = document.getElementById('eduyear1').value;
    var schools1 = document.getElementById('schools1').value;
    var edudetails1 = document.getElementById('edudetails1').value;
    var eduyear2 = document.getElementById('eduyear2').value;
    var schools2 = document.getElementById('schools2').value;
    var edudetails2 = document.getElementById('edudetails2').value;
    var eduyear3 = document.getElementById('eduyear3').value;
    var schools3 = document.getElementById('schools3').value;
    var edudetails3 = document.getElementById('edudetails3').value;

    document.getElementById('rcv_eduyear1').innerHTML =  eduyear1;
    document.getElementById('rcv_schools1').innerHTML =  schools1;
    document.getElementById('rcv_edudetails1').innerHTML =  edudetails1;
    document.getElementById('rcv_eduyear2').innerHTML =  eduyear2;
    document.getElementById('rcv_schools2').innerHTML =  schools2;
    document.getElementById('rcv_edudetails2').innerHTML =  edudetails2;
    document.getElementById('rcv_eduyear3').innerHTML =  eduyear3;
    document.getElementById('rcv_schools3').innerHTML =  schools3;
    document.getElementById('rcv_edudetails3').innerHTML =  edudetails3;
}

function getSkill(){
    var skill1 = document.getElementById('skill1').value;
    var skill2 = document.getElementById('skill2').value;
    var skill3 = document.getElementById('skill3').value;
    var skill4 = document.getElementById('skill4').value;
    var skill5 = document.getElementById('skill5').value;

    document.getElementById('rcv_skill1').innerHTML = skill1;
    document.getElementById('rcv_skill2').innerHTML = skill2;
    document.getElementById('rcv_skill3').innerHTML = skill3;
    document.getElementById('rcv_skill4').innerHTML = skill4;
    document.getElementById('rcv_skill5').innerHTML = skill5;

    const rcv_skillPercentages = document.querySelectorAll(".rcv_skillPercentage");
    const skillPercentages = document.querySelectorAll(".skillPercentage");
    var length =  skillPercentages.length;

    for (var i = 0; i < length; i++){
        rcv_skillPercentages[i].style.width = skillPercentages[i].value + "%";
    }

}