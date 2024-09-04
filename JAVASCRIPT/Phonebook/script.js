let contacts=JSON.parse(localStorage.getItem('contacts')) || [];


function view(){
    let data=''
    for(let i in contacts){
        data+=`<tr>
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.num}</td>
                </tr>`
    }
    document.getElementById('con').innerHTML=data;
}

function add(){
    const name=document.getElementById('name').value;
    const number=document.getElementById('num').value;

    if (name.trim() == '' || number.trim() == '') {
        alert("Name and Phone fields are mandatory")
    } else {
        const obj = { id: contacts.length + 1, name, number };
        contacts.push(obj);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        document.getElementById('name').value = ''
        document.getElementById('num').value = ''
        console.log(obj);
        view();
    }
}