function age() {
    let age = prompt("Введите Ваш возраст?")
        if (age >= 18) {
            alert("Добро пожаловать!")
        } else {
            alert("Рекомендуем раздел мультфильмы :)")
        
        }
    }

function error() {
    answer = "Привет, "
    let name = document.getElementById('name').value
    
    const result = (answer + name)

    document.getElementById('result').innerText = result
}