function savepicture(){
    document.getElementById('rec_ProfiePicture').classList.add("d-none");
    document.getElementById('canv1').classList.remove("d-none");

    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("profile_input");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}

function getName(){
    var name = document.getElementById('demo').value;
    document.getElementById('rcv_name').innerHTML = name;
}

function getObj(){
    var objective = document.getElementById('objective').value;
    document.getElementById('rcv_objective').innerHTML = objective;
}

function getExp(){
    var exp1 = document.getElementById('exp1').value;
    var compny1 = document.getElementById('compny1').value;
    var expdetails1 = document.getElementById('expdetails1').value;
    var exp2 = document.getElementById('exp2').value;
    var compny2 = document.getElementById('compny2').value;
    var expdetails2 = document.getElementById('expdetails2').value;
    var exp3 = document.getElementById('exp3').value;
    var compny3 = document.getElementById('compny3').value;
    var expdetails3 = document.getElementById('expdetails3').value;

    document.getElementById('rcv_exp1').innerHTML = exp1;
    document.getElementById('rcv_compny1').innerHTML = compny1;
    document.getElementById('rcv_expdetails1').innerHTML = expdetails1;
    document.getElementById('rcv_exp2').innerHTML = exp2;
    document.getElementById('rcv_compny2').innerHTML = compny2;
    document.getElementById('rcv_expdetails2').innerHTML = expdetails2;
    document.getElementById('rcv_exp3').innerHTML = exp3;
    document.getElementById('rcv_compny3').innerHTML = compny3;
    document.getElementById('rcv_expdetails3').innerHTML = expdetails3;
}

function getEdu(){
    var eduyr1 = document.getElementById('eduyr1').value;
    var schoolname1 = document.getElementById('schoolname1').value;
    var gpa1 = document.getElementById('gpa1').value;
    var eduyr2 = document.getElementById('eduyr2').value;
    var schoolname2 = document.getElementById('schoolname2').value;
    var gpa2 = document.getElementById('gpa2').value;
    var eduyr3 = document.getElementById('eduyr3').value;
    var schoolname3 = document.getElementById('schoolname3').value;
    var gpa3 = document.getElementById('gpa3').value;

    document.getElementById('eduyr1').innerHTML = eduyr1;
    document.getElementById('schoolname1').innerHTML = schoolname1;
    document.getElementById('gpa1').innerHTML = gpa1;
    document.getElementById('eduyr2').innerHTML = eduyr2;
    document.getElementById('schoolname2').innerHTML = schoolname2;
    document.getElementById('gpa2').innerHTML = gpa2;
    document.getElementById('eduyr3').innerHTML = eduyr3;
    document.getElementById('schoolname3').innerHTML = schoolname3;
    document.getElementById('gpa3').innerHTML = gpa3;
}

function getContact(){
    var mobile = document.getElementById('mobile').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;

    document.getElementById('rcv_mobile').innerHTML = mobile;
    document.getElementById('rcv_address').innerHTML = address;
    document.getElementById('rcv_email').innerHTML = email;
}

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

function getReger(){
    var refer = document.getElementById('refer').value;

    document.getElementById('rcv_refer').innerHTML = refer;
}