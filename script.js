

function Fullname() {
    var fname = document.getElementById('firstname').value;
    var sname = document.getElementById('secondname').value;
    document.getElementById('fullname').value = fname + " " + sname;
}
function Category() {
    var age = document.getElementById('age').value;
    if(age<=0){
        alert("invalid age");
        document.getElementById("category").value = "invalid age";
    }
    if (age <= 12 && age > 0)
        document.getElementById("category").value = "Kids";

    if (age > 12 && age <= 19)
        document.getElementById("category").value = "Teenagers";

    if (age >= 20 && age <= 40)
        document.getElementById("category").value = "Adults";

    if (age >= 41 && age <= 60)
        document.getElementById("category").value = "Middle agers";

    if (age >= 61 && age <= 100)
        document.getElementById("category").value = "Senior Citizens";
}
function DisplayState() {
    var select_country = document.getElementById('country').value;
    var India = ["Andhra Pradesh", "Goa", "TamilNadu", "UttarPradesh"];
    var USA = ["California", "Florida", "Hawaii", "NewYork"];
    var state = document.getElementById('state');
    state.innerHTML = '<option>select</option>';
    if (select_country == 'India') {
        for (i = 0; i < India.length; i++) {
            // state.innerHTML = '<option>'+India[i]+'</option>';
            var option = document.createElement("option");
            option.innerHTML = India[i];
            state.appendChild(option);
        }
    }
    if (select_country == 'USA') {
        for (i = 0; i < USA.length; i++) {
            // state.innerHTML = '<option>'+USA[i]+'</option>';
            var option = document.createElement("option");
            option.innerHTML = USA[i];
            state.appendChild(option);
        }
    }
}
function DisplayCity() {
    var select_state = document.getElementById('state').value;
    var TamilNadu = ["Virudhunagar", "Dharmapuri", "Chennai", "Madurai", "Salem"];
    var city = document.getElementById('city');
    if (select_state == 'TamilNadu') {
        for (i = 0; i < TamilNadu.length; i++) {
            var option1 = document.createElement("option");
            option1.innerHTML = TamilNadu[i];
            city.appendChild(option1);
        }
    }
}
function onDisplay() {
    var data = readDetails();
    insertDetails(data);

    onReset();
    // var table = document.getElementById("table"),rIndex;
    // console.log(table);    
    // for(var i = 1; i < table.rows.length; i++)
    // {
    //     table.rows[i].onclick = function()
    //     {
    //         rIndex = this.rowIndex;
    //         console.log(rIndex);
            
    //         document.getElementById("firstname").value = this.cells[0].innerHTML;
    //         document.getElementById("secondname").value = this.cells[1].innerHTML;
    //         document.getElementById("fullname").value = this.cells[2].innerHTML;
    //         document.getElementById("username").value = this.cells[3].innerHTML;
    //         document.getElementById("age").value = this.cells[4].innerHTML;
    //         document.getElementById("category").value = this.cells[5].innerHTML;
    //         document.getElementById("gender").value = this.cells[6].innerHTML;
    //         document.getElementById("email").value = this.cells[7].innerHTML;
    //         document.getElementById("address").value = this.cells[8].innerHTML;
    //     };
    // }
    
}
function onReset(){
            document.getElementById("firstname").value = '';
            document.getElementById("secondname").value = '';
            document.getElementById("fullname").value = '';
            document.getElementById("username").value = '';
            document.getElementById("age").value = '';
            document.getElementById("category").value = '';
            document.getElementById("gender").value = '';
            document.getElementById("email").value = '';
            document.getElementById("address").value = '';
            document.getElementById("country").value='';
            document.getElementById('state').value='';
            document.getElementById('city').value=''
}
function onEdit(){
    var table = document.getElementById("table"),rIndex;
    // console.log(table);    
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex;
            console.log(rIndex);
            
            document.getElementById("firstname").value = this.cells[0].innerHTML;
            document.getElementById("secondname").value = this.cells[1].innerHTML;
            document.getElementById("fullname").value = this.cells[2].innerHTML;
            document.getElementById("username").value = this.cells[3].innerHTML;
            document.getElementById("age").value = this.cells[4].innerHTML;
            document.getElementById("category").value = this.cells[5].innerHTML;
            document.getElementById("gender").value = this.cells[6].innerHTML;
            document.getElementById("email").value = this.cells[7].innerHTML;
            document.getElementById("address").value = this.cells[8].innerHTML;

        };
    }
}

function onDelet(clicked_row){
    console.log("Work");
    var index = clicked_row.parentNode.parentNode.rowIndex-1;
    console.log(index);
    document.getElementById("tbody").deleteRow(index);
}

function readDetails() {
    var details = {};
    details['first_name'] = document.getElementById('firstname').value;
    details['second_name'] = document.getElementById('secondname').value;
    details['full_name'] = document.getElementById('fullname').value;
    details['user_name'] = document.getElementById('username').value;
    details['age_'] = document.getElementById('age').value;
    details['category_'] = document.getElementById('category').value;
    details['gender_'] = document.getElementById('gender').value;
    details['email_'] = document.getElementById('email').value;
    details['address_'] = document.getElementById('address').value;
    return details
}
function insertDetails(data) {
    var table_body = document.getElementById("tbody");
    var row = table_body.insertRow(table_body.length);
    var cell0 = row.insertCell(0);
    cell0.innerHTML = data.first_name;
    var cell1 = row.insertCell(1);
    cell1.innerHTML = data.second_name;
    var cell2 = row.insertCell(2);
    cell2.innerHTML = data.full_name;
    var cell3 = row.insertCell(3);
    cell3.innerHTML = data.user_name;
    var cell4 = row.insertCell(4);
    cell4.innerHTML = data.age_;
    var cell5 = row.insertCell(5);
    cell5.innerHTML = data.category_;
    var cell6 = row.insertCell(6);
    cell6.innerHTML = data.gender_;
    var cell7 = row.insertCell(7);
    cell7.innerHTML = data.email_;
    var cell8 = row.insertCell(8);
    cell8.innerHTML = data.address_;

    var cell9 = row.insertCell(9);
    var btn = document.createElement("BUTTON");
    btn.setAttribute("class","btn btn-primary btn-sm");
    btn.setAttribute("type","submit");
    btn.setAttribute("onclick","onDelet(this)");
    btn.setAttribute("id","delete");   
    btn.innerHTML = "Delete"
    cell9.appendChild(btn);

    var cell10 = row.insertCell(10);
    var btn1 = document.createElement("BUTTON");
    btn1.setAttribute("class","btn btn-primary btn-sm");
    btn1.setAttribute("type","submit");
    btn1.setAttribute("onclick","onEdit()");
    btn1.setAttribute("id","edit");   
    btn1.innerHTML = "Edit"
    cell10.appendChild(btn1);

    var cell11 = row.insertCell(11);
    var btn1 = document.createElement("BUTTON");
    btn1.setAttribute("class","btn btn-primary btn-sm");
    // btn1.setAttribute("type","submit");
    btn1.setAttribute("onclick","onUpdate(this)");
    btn1.setAttribute("id","update");   
    btn1.innerHTML = "Update"
    cell11.appendChild(btn1);
}

function onUpdate(click){
    var rIndex = click.parentNode.parentNode.rowIndex-1;
    rIndex = rIndex+1;
    var table = document.getElementById("table");
    console.log(rIndex);
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("firstname").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("secondname").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("fullname").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("username").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("age").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("category").value;
    table.rows[rIndex].cells[6].innerHTML = document.getElementById("gender").value;
    table.rows[rIndex].cells[7].innerHTML = document.getElementById("email").value;
    table.rows[rIndex].cells[8].innerHTML = document.getElementById("address").value;
}