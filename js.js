let age = document.getElementById('age');
function showUser(surname, name) {
alert("Пользователь " + surname + " " + name + ", его возраст " + this.value + ' лет');
}
showUser.apply(age, ['Иванов ', 'Иван ']); 