function getName(){
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var designation = document.getElementById('designation').value;

    document.getElementById('rcv_first_name').innerHTML = first_name;
    document.getElementById('rcv_last_name').innerHTML = last_name;
    document.getElementById('rcv_designation').innerHTML = designation;
}

function savepicture(){
    document.getElementById('rec_ProfiePicture').classList.add("d-none");
    document.getElementById('canv1').classList.remove("d-none");

    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("profile_input");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}

function getCourse() {
    var course_1 = document.getElementById('course_1').value;
    var institute_1 = document.getElementById('institute_1').value;
    var year_1 = document.getElementById('year_1').value;

    var course_2 = document.getElementById('course_1').value;
    var institute_2 = document.getElementById('institute_1').value;
    var year_2 = document.getElementById('year_1').value;

    document.getElementById('rcv_course_1').innerHTML = course_1;
    document.getElementById('rcv_institute_1').innerHTML = institute_1;
    document.getElementById('rcv_year_1').innerHTML = year_1;
    document.getElementById('rcv_course_2').innerHTML = course_2;
    document.getElementById('rcv_institute_2').innerHTML = institute_2;
    document.getElementById('rcv_year_2').innerHTML = year_2;
}

// rating variable

{
    onerate = '<i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle mr-1"></i><i class="bi bi-circle mr-1"></i><i class="bi bi-circle mr-1"></i><i class="bi bi-circle"></i>';
    tworate = '<i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle mr-1"></i><i class="bi bi-circle mr-1"></i><i class="bi bi-circle"></i>';
    threerate= '<i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle mr-1"></i><i class="bi bi-circle"></i>';
    fourrate = '<i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle"></i>';
    fiverate = '<i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle-fill mr-1"></i><i class="bi bi-circle-fill"></i>';

    function getVal(val){
        if (val == 1 || (val >= 0 && val <= 20)){
            return onerate;
        }
        else if (val == 2 || (val > 20 && val <= 40)){
            return tworate;
        }
        else if (val == 3 || (val > 40 && val <= 60)){
            return threerate;
        }
        else if (val == 4 || (val > 60 && val <= 80)){
            return fourrate;
        }
        else if (val == 5 || (val > 80 && val <= 100)){
            return fiverate;
        }
    }
    function getSkill1(){
        var skill_name_1 = document.getElementById('skill_name_1').value;
        document.getElementById('rcv_skill_name_1').innerHTML = skill_name_1;

        var skill_1 = document.getElementById('skill_1').value;
        document.getElementById('rcv_skill_1').innerHTML = getVal(skill_1);
    }

    function getSkill2(){
        var skill_name_2 = document.getElementById('skill_name_2').value;
        document.getElementById('rcv_skill_name_2').innerHTML = skill_name_2;

        var skill_2 = document.getElementById('skill_2').value;
        document.getElementById('rcv_skill_2').innerHTML = getVal(skill_2);
    }

    function getSkill3(){
        var skill_name_3 = document.getElementById('skill_name_3').value;
        document.getElementById('rcv_skill_name_3').innerHTML = skill_name_3;

        var skill_3 = document.getElementById('skill_3').value;
        document.getElementById('rcv_skill_3').innerHTML = getVal(skill_3);
    }

    function getSkill4(){
        var skill_name_4 = document.getElementById('skill_name_4').value;
        document.getElementById('rcv_skill_name_4').innerHTML = skill_name_4;

        var skill_4 = document.getElementById('skill_4').value;
        document.getElementById('rcv_skill_4').innerHTML = getVal(skill_4);
    }

    function getSkill5(){
        var skill_name_5 = document.getElementById('skill_name_5').value;
        document.getElementById('rcv_skill_name_5').innerHTML = skill_name_5;
        
        var skill_5 = document.getElementById('skill_5').value;
        document.getElementById('rcv_skill_5').innerHTML = getVal(skill_5);
    }
}
                                            
function getObjective() {
    var objective = document.getElementById('objective').value;

    document.getElementById('rcv_objective').innerHTML = objective;
}
                                
function getContact() {
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var location = document.getElementById('location').value;
    
    document.getElementById('rcv_phone').innerHTML = phone;
    document.getElementById('rcv_email').innerHTML = email;
    document.getElementById('rcv_location').innerHTML = location;
}                                          

function getHobbie() {
    var hob_1 = document.getElementById('hob_1').value;
    var hob_2 = document.getElementById('hob_2').value;
    var hob_3 = document.getElementById('hob_3').value;
    var hob_4 = document.getElementById('hob_4').value;
    var hob_5 = document.getElementById('hob_5').value;
    
    document.getElementById('rcv_hob_1').innerHTML = hob_1;              
    document.getElementById('rcv_hob_2').innerHTML = hob_2;              
    document.getElementById('rcv_hob_3').innerHTML = hob_3;              
    document.getElementById('rcv_hob_4').innerHTML = hob_4;              
    document.getElementById('rcv_hob_5').innerHTML = hob_5;              
}