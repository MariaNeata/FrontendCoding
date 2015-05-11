var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function showList() {
    var firstN = [];
    var nr = 0;
    var myTable = '<table class="sortable" border="1" id="table"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Vizualizare</th><th>Stergere</th></tr>';

    for (var i = 0; i < employeesList.length; i++) {
        myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td><td><button type="button" onclick="vizualizare(' + i + ')">Vizualizare</button> </td><td><button type="button" onclick="stergere(' + i + ')">Stergere</button> </td></tr>';
        firstN.push(employeesList[i].firstName);
    }
    myTable += '<tr><td>' + firstN.aparitii() + '</td><td>' + numeUnice() + '</td><td>' + "cifre" + '</td><td>' + salaryAvg() + '</td></tr>';
    myTable += '</table>';


    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
    clear("sum");
}
var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstN = [];

    for (var i in employeesList) {
        firstN.push(employeesList[i].firstName);

    }

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
    clear("firstName");
    clear("lastName");
    clear("phone");
    clear("salary");
}

function clear(id) {
    document.getElementById(id).value = null;
}
function salaryTotal() {
    var sum = 0;
    for (var i = 0; i < employeesList.length; i++) {
        if (employeesList[i].salary != undefined) {
            sum += parseFloat(employeesList[i].salary);

        }
    }
    var elem = document.getElementById("sum");
    elem.value = sum;

}
function salaryAvg() {
    var sum = 0;
    var nr = 0;
    for (var i = 0; i < employeesList.length; i++) {
        if (typeof employeesList[i].salary != undefined) {
            sum += parseFloat(employeesList[i].salary);
            nr++;
        }
    }
    return sum / nr;
}
function deleteEmployee() {
    employeesList.pop();
    showList();

}

function vizualizare(i) {
    alert("Employee: " + employeesList[i].firstName + " " + employeesList[i].lastName + "\nPhone: " + employeesList[i].phone + "\nSalary: " + employeesList[i].salary);
}
function stergere(i) {

    employeesList.splice(i, 1);
    showList();
}

Array.prototype.aparitii = function () {
    var L = this.length, ap = [], unic = [],
        elem, max = 1, index, nr;
    while (L >= max) {
        elem = this[--L];
        if (unic.indexOf(elem) == -1) {
            unic.push(elem);
            index = -1, nr = 0;
            while ((index = this.indexOf(elem, index + 1)) != -1) {
                ++nr;
            }
            if (nr > max) {
                ap = [elem];
                max = nr;
            }
            else if (nr == max) ap.push(elem);
        }
    }
    return [ap];
}

function numeUnice() {
    var nr = 0;
    var lastN = [];
    for (var i = 0; i < employeesList.length; i++) {
        lastN.push(employeesList[i].lastName);
    }

    for (var j = 0; j < lastN.length; j++) {
        if (lastN.indexOf(lastN[j]) == lastN.lastIndexOf(lastN[j])) {
            nr++;
        }

    }
    return nr;
}
/*function apCifre() {
    var cifre = [];
    var nr = 0;
    var ap = [];
    var v = [];
    var aux;
    var t;

    for (var k = 0; k < employeesList.length; k++) {

        t = employeesList[k].phone;

        cifre.push(t);

    }

    for (var l = 0; l < 10; l++) {
        nr = 0;
        alert("strin " + l.toString());
        var pos = cifre.indexOf("l.toString()");
        alert("pos " + pos);

        while (pos !== -1) {
            nr = nr + 1;
            pos = cifre.indexOf(l.toString(), pos + 1);
        }
        ap[l] = nr;
        alert(nr);

    }
    for (var i = 0; i < 9; i++) {
        for (var j = i + 1; j < 10; j++) {
            if (ap[i] < ap[j]) {
                aux = ap[i];
                ap[i] = ap[j];
                ap[j] = aux;
                v[i] = j;
                v[j] = i;

            }
        }
    }
    for (var i = 0; i < 9; i++) alert(v[i]);
    var numere = v.join(',');
    return [numere];
}*/
function sortBy() {
var elem=document.getElementById("sort");

    if(elem.value==1){}

}
