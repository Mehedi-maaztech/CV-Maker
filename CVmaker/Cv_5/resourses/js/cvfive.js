function getLocation(){
    var location = document.getElementById('location').value;

    document.getElementById('rcv_location').innerHTML = location;
}

function getName(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;

    document.getElementById('rcv_firstname').innerHTML = firstname;
    document.getElementById('rcv_lastname').innerHTML = lastname;
}

function savepicture(){
    document.getElementById('rec_ProfiePicture').classList.add("d-none");
    document.getElementById('canv1').classList.remove("d-none");

    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("profile_input");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}

function getDesignation() {
    var designation  = document.getElementById('designation').value;
    document.getElementById('rcv_designation').innerHTML = designation;
}

function getEdu() {
    var exam_1 = document.getElementById('exam_1').value;
    var institute_1 = document.getElementById('institute_1').value;
    var year_1 = document.getElementById('year_1').value;
    var grade_1 = document.getElementById('grade_1').value;

    var exam_2 = document.getElementById('exam_2').value;
    var institute_2 = document.getElementById('institute_2').value;
    var year_2 = document.getElementById('year_2').value;
    var grade_2 = document.getElementById('grade_2').value;

    document.getElementById('rcv_exam_1').innerHTML = exam_1;
    document.getElementById('rcv_institute_1').innerHTML = institute_1;
    document.getElementById('rcv_year_1').innerHTML = year_1;
    document.getElementById('rcv_grade_1').innerHTML = grade_1;
    document.getElementById('rcv_exam_2').innerHTML = exam_2;
    document.getElementById('rcv_institute_2').innerHTML = institute_2;
    document.getElementById('rcv_year_2').innerHTML = year_2;
    document.getElementById('rcv_grade_2').innerHTML = grade_2;
}

function getContact(){
  var number = document.getElementById('number').value;
  var email = document.getElementById('email').value;
  var web = document.getElementById('web').value;

  document.getElementById('rcv_number').innerHTML = number;
  document.getElementById('rcv_email').innerHTML = email;
  document.getElementById('rcv_web').innerHTML = web;
}

function getExperience(){
  var companyName1 = document.getElementById('companyName1').value;
  var location1 = document.getElementById('location1').value;
  var jobPosition1 = document.getElementById('jobPosition1').value;
  var jobYear1 = document.getElementById('jobYear1').value;
  var workDesc1 = document.getElementById('workDesc1').value;

  var companyName2 = document.getElementById('companyName2').value;
  var location2 = document.getElementById('location2').value;
  var jobPosition2 = document.getElementById('jobPosition2').value;
  var jobYear2 = document.getElementById('jobYear2').value;
  var workDesc2 = document.getElementById('workDesc2').value;

  var companyName3 = document.getElementById('companyName3').value;
  var location3 = document.getElementById('location3').value;
  var jobPosition3 = document.getElementById('jobPosition3').value;
  var jobYear3 = document.getElementById('jobYear3').value;
  var workDesc3 = document.getElementById('workDesc3').value;

  document.getElementById('rcv_companyName1').innerHTML = companyName1;
  document.getElementById('rcv_location1').innerHTML = location1;
  document.getElementById('rcv_jobPosition1').innerHTML = jobPosition1;
  document.getElementById('rcv_jobYear1').innerHTML = jobYear1;
  document.getElementById('rcv_workDesc1').innerHTML = workDesc1;
  document.getElementById('rcv_companyName2').innerHTML = companyName2;
  document.getElementById('rcv_location2').innerHTML = location2;
  document.getElementById('rcv_jobPosition2').innerHTML = jobPosition2;
  document.getElementById('rcv_jobYear2').innerHTML = jobYear2;
  document.getElementById('rcv_workDesc2').innerHTML = workDesc2;
  document.getElementById('rcv_companyName3').innerHTML = companyName3;
  document.getElementById('rcv_location3').innerHTML = location3;
  document.getElementById('rcv_jobPosition3').innerHTML = jobPosition3;
  document.getElementById('rcv_jobYear3').innerHTML = jobYear3;
  document.getElementById('rcv_workDesc3').innerHTML = workDesc3;
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


    // skillbar
    // var skillPercentage1 = document.getElementById('skillPercentage1').value;
    // var skillPercentage2 = document.getElementById('skillPercentage2').value;
    // var skillPercentage3 = document.getElementById('skillPercentage3').value;
    // var skillPercentage4 = document.getElementById('skillPercentage4').value;
    // var skillPercentage5 = document.getElementById('skillPercentage5').value;

    // document.getElementById('rcv_skillPercentage1').style.width = skillPercentage1 + "%";
    // document.getElementById('rcv_skillPercentage2').style.width = skillPercentage2 + "%";
    // document.getElementById('rcv_skillPercentage3').style.width = skillPercentage3 + "%";
    // document.getElementById('rcv_skillPercentage4').style.width = skillPercentage4 + "%";
    // document.getElementById('rcv_skillPercentage5').style.width = skillPercentage5 + "%";

    const rcv_skillPercentages = document.querySelectorAll(".rcv_skillPercentage");
    let skillPercentages = document.querySelectorAll(".skillPercentage");

    for (var i = 0; i < skillPercentages.length; i++){
        rcv_skillPercentages[i].style.width = skillPercentages[i].value + "%";
    }

}