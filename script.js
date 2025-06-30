const scriptURL = 'https://script.google.com/macros/s/AKfycbxBijNv8OfwQXAtsBko59DSxj5Qt4-NecEk-fcX8hOOY_rUnIV_JbMOEqRQOg9gFHPRVw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})