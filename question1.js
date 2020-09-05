const form = document.querySelector('#contactForm');
const lastName = document.querySelector('#lastName');
const lastNameError = document.querySelector('#lastNameError');

function checkLength() {
  event.preventDefault();

  if (lastName.value.trim().length > 4) {
    lastNameError.style.display = 'none';
    console.log(lastName.value);
  } else {
    lastNameError.style.display = 'block';
  }
}

form.addEventListener('submit', checkLength);
