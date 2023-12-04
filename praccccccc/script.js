var form = document.getElementById("myForm");
var nameInput = document.getElementById("name");
var phoneNumberInput = document.getElementById("phoneNumber");
var emailInput = document.getElementById("email");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  var isValid = true;

  // Проверка имени
  if (nameInput.value === "") {
    nameInput.classList.add("error");
    isValid = false;
  } else {
    nameInput.classList.add("success");
  }

  // Проверка номера телефона (10 цифр)
  var phoneNumberRegExp = /^\d{10}$/;
  if (!phoneNumberRegExp.test(phoneNumberInput.value)) {
    phoneNumberInput.classList.add("error");
    isValid = false;
  } else {
    phoneNumberInput.classList.add("success");
  }

 

  // Проверка адреса электронной почты
  var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegExp.test(emailInput.value)) {
    emailInput.classList.add("error");
    isValid = false;
  } else {
    emailInput.classList.add("success");
  }

  if (isValid) {
    // Если все поля заполнены верно
    alert("Форма успешно заполнена!");
  } else {
    alert("Пожалуйста, проверьте все поля.");
  }
}