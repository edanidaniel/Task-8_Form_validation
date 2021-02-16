function Fullname() {
    var fname = document.getElementById('firstname').value;
    var sname = document.getElementById('secondname').value;
    document.getElementById('fullname').value = fname + " " + sname;
}
function Category() {
    var age = document.getElementById('age').value;
    if (age <= 12)
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
    if (select_country == 'India') {
        for (i = 0; i < India.length; i++) {
            var option = document.createElement("option");
            option.innerHTML = India[i];
            state.appendChild(option);
        }
    }
    if (select_country == 'USA') {
        for (i = 0; i < India.length; i++) {
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
}