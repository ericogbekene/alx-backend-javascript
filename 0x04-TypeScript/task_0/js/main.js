var student1 = {
    firstName: 'Eric',
    lastName: 'Ogbekene',
    age: 30,
    location: 'Zaria'
};
var student2 = {
    firstName: 'Michael',
    lastName: 'Roberts',
    age: 35,
    location: 'Seattle'
};
var studentsList = [student1, student2];
//create table structure 
var table = document.createElement('table');
var headerRow = table.insertRow();
var firstNameHeader = headerRow.insertCell();
var locationHeader = headerRow.insertCell();
firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';
studentsList.forEach(function (student) {
    var studentRow = table.insertRow();
    var firstNameCell = studentRow.insertCell();
    var locationCell = studentRow.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
document.body.appendChild(table);
