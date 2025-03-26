const forms = document.getElementById('forms');


let formCount = 0;

function addNewForm() {
    formCount++;

    const newDiv = document.createElement('div');
    newDiv.classList.add('container');
    newDiv.classList.add(`container-${formCount}`);
    newDiv.innerHTML = `
        <h1>Form ${formCount}</h1>
        <i class="fa-solid fa-circle-half-stroke"></i>
    `;

    /*-----------------------------------------------------*/

    forms.appendChild(newDiv);

    const newForm = newDiv.appendChild(document.createElement('form'));
    newForm.classList.add('form');
    newForm.classList.add(`form-${formCount}`);
    newForm.innerHTML = `
        <h2>Log in</h2>
        <input type="text" id="username-${formCount}" placeholder="Username">
        <input type="email" id="email-${formCount}" placeholder="Email">
        <input type="password" id="password-${formCount}" placeholder="Password">
        <input type="password" id="password2-${formCount}" placeholder="Confirm Password">
        <button type="submit">Submit
    `;

    /*-----------------------------------------------------*/
    const themeButton = newDiv.querySelector('i');
    themeButton.classList.add(`theme-button-${formCount}`);
    
    themeButton.addEventListener('click', () => {
        newDiv.classList.toggle(`dark-container-${formCount}`);
        newForm.classList.toggle(`dark-form-${formCount}`);
    });
}



for (let i = 0; i < 3; i++) {
    addNewForm();
} 

