function age() {
    let age = prompt("Введите Ваш возраст?")
        if (age >= 18) {
            alert("Добро пожаловать!")
        } else {
            alert("Рекомендуем раздел мультфильмы :)")
        
        }
    }

function username() {
    let name = document.getElementById('name').value
    
    console.log(name)

    const result = ("Привет, " + name)

    document.getElementById('result').innerText = result
}

function phone_number() {
    let number = document.getElementById('number').value

    console.log(number)

    const result2 = ("Менеджер свяжется с Вами по номеру - " + number)

    document.getElementById('result2').innerText = result2

}