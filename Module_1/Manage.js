class Persons {
    constructor(stt, name, birth, address, salary, Rank) {
        this.stt= stt;
        this.name = name;
        this.birth =birth;
        this.address = address;
        this.salary = salary;
        this.Rank = Rank;
    }

    setStt (newStt)
    {
        this.id = newStt;
    };
    setName (newName)
    {
        this.name = newName;
    };
    setBirth (newBirth)
    {
        this.birth = newBirth;
    };
    setAddress (newAddress)
    {
        this.address = newAddress;
    };
    setSalary (newSalary)
    {
        this.salary = newSalary;
    };
    setRank (newRank)
    {
        this.Rank = newRank;
    };
}
let persons=[];
function updatePersons() {
    let tablePersons=
        '<table>'+
        '<tr>'+
        '<th>STT</th>'+
        '<th>Họ và tên</th>'+
        '<th>Ngày Sinh</th>'+
        '<th>Địa chỉ</th>'+
        '<th>Lương</th>'+
        '<th>Chức vụ</th>'+
        '</tr>';
    for (let i = 0; i <persons.length ; i++) {
        tablePersons+=
            '<tr>'+
            '<td>'+(i+1)+'</td>'+
            '<td>'+persons[i].name+'</td>'+
            '<td>'+persons[i].birth+'</td>'+
            '<td>'+persons[i].address+'</td>'+
            '<td>'+persons[i].salary+'</td>'+
            '<td>'+persons[i].Rank +'</td>'+
            '</tr>'
    }
    tablePersons+="</table>";
    document.getElementById('result').innerHTML=tablePersons;
}
function formatBirthday(date) {
    return date.slice(0,2)+"-"+date.slice(2,4)+"-"+date.slice(4,8);
}

function createPerson()
{
    let person = new Persons();
    let inputName;
        inputName = prompt ("Enter First and Last Name");
    person.setName(inputName);

    let inputBirth = prompt ("Enter the BirthDay");
    person.setBirth(formatBirthday(inputBirth));

    let inputAddress= prompt ("Enter Address");
    person.setAddress(inputAddress);

    let inputSalary = prompt ("Enter Salary");
    person.setSalary(inputSalary);

    let inputRank=prompt ("Enter the Rank");
    person.setRank(inputRank);
   persons.push(person);
    updatePersons();
}