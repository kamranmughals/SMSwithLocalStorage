


function add(){
//     let sname = document.getElementById('name').value;
//     let sfather = document.getElementById('father').value;
//     let sage = document.getElementById('age').value;
//     let sphone = document.getElementById('phone').value;
//     let content = document.querySelector('.content-area');

//     let user_record = new Array();
//     user_record = JSON.parse(localStorage.getItem("user"))

//     user_record.push({
//         "sname": sname,
//         "sfather":sfather,
//         "sage": sage,
//         "sphone":sphone
//     })
//     localStorage.setItem("user", JSON.stringify(user_record));
var formarea = document.querySelector('.form-area');
    var success = document.querySelector('.success-area');
    let data = JSON.parse(localStorage.getItem('data')) || [];
    data.push({
        id: document.getElementById('rollNo').value,
        name: document.getElementById('name').value,
        father: document.getElementById('father').value,
        age: document.getElementById('age').value,
        phone: document.getElementById('phone').value,
        depart: document.getElementById('depart').value
    })
    localStorage.setItem('data', JSON.stringify(data));
    success.innerHTML = '<span class="alert-success" type="button" onclick="closearea()">Student has been Successfully added!!  &times</span>'
    formarea.reset();
    return false;

}


function closearea(){
    var close = document.querySelector('.alert-success');
    if(close.style.display === "none"){
        close.style.display = "block";
    }
    else{
        close.style.display ="none";
    }
}
function show(){

    if(localStorage.getItem('data')){
    var content = document.querySelector('.content-area');
    content.innerHTML = '';
    JSON.parse(localStorage.getItem('data')).forEach(data1 => {
        content.innerHTML += '<div id="disdata"><span class="show-details1">' + data1.id + '</span><span class="show-details2">' + data1.name + '</span><span class="show-details3">' + data1.father + '</span><span class="show-details4">' + data1.age + '</span><span class="show-details5">' + data1.phone + '</span><span class="show-details6">' + data1.depart + '</span></div>';
    });
    }
    else if(localStorage.getItem('data') === null){
        content.style.display = "block";
    }
}


{/* <span id="rn" class="user-details">Roll#</span>
        <span class="user-details">Student Name</span>
        <span class="user-details">Father name</span>
        <span class="user-details">Age</span>
        <span class="user-details">Phone No.</span>
        <span class="user-details">Department</span> */}