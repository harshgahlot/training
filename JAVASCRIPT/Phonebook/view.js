document.addEventListener('DOMContentLoaded', () => {
    const contactsList = document.getElementById('con');
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.name}: ${contact.phone}`;
        contactsList.appendChild(li);
    });
});
