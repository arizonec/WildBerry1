function checkPasswords(password) {
    var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
    var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
    var digits = "0123456789"; // Цифры
    var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы
    var rating = 0;

    for (var i = 0; i < password.length; i++) {
      if (s_letters.indexOf(password[i]) != -1) rating++;
      else if (b_letters.indexOf(password[i]) != -1) rating++;
      else if (digits.indexOf(password[i]) != -1) rating++;
      else if (specials.indexOf(password[i]) != -1) rating++;
    }
    let text = "";

    if (password.length < 6 && rating < 3) text = "Простой";
    else if (password.length < 6 && rating >= 3) text = "Средний";
    else if (password.length >= 8 && rating < 3) text = "Средний";
    else if (password.length >= 8 && rating >= 3) text = "Сложный";
    else if (password.length >= 6 && rating == 1) text = "Простой";
    else if (password.length >= 6 && rating > 1 && rating < 4) text = "Средний";
    else if (password.length >= 6 && rating == 4) text = "Сложный";
    alert(text); // Выводим итоговую сложность пароля
    return false; // Форму не отправляем
}

checkPasswords('car-123-jeep')

const passwordDestroyerMachine = (password) => {
    const low_letters = "qwertyuiopasdfghjklzxcvbnm"; 
    const hith_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; 
    const digits = "0123456789";
    const symbols = "!@#$%^&*()_-+=\|/.,:;[]{}"; 


} 