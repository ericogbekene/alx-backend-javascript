interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Eric',
	lastName: 'Ogbekene',
	age: 30,
	location: 'Zaria'
};

const student2: Student = {
        firstName: 'Michael',
        lastName: 'Roberts',
        age: 35,
        location: 'Seattle'
};

const studentsList: Student[] = [student1, student2];


//create table structure 
const table = document.createElement('table');

const headerRow = table.insertRow();

const firstNameHeader = headerRow.insertCell();
const locationHeader = headerRow.insertCell();

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

studentsList.forEach((student) => {
	const studentRow =  table.insertRow();

	const firstNameCell = studentRow.insertCell();
	const locationCell = studentRow.insertCell();

	firstNameCell.textContent = student.firstName;
	locationCell.textContent = student.location;

});

document.body.appendChild(table);


