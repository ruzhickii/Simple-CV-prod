document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-gray">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;


/* Contacts data */

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel: ${data.phone}">Phone number: ${data.phone}</a></li>`;
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto: ${data.email}">Email: ${data.email}</a></li>`;
document.querySelector('.contacts-block').innerHTML += `<li><a href="callto: ${data.skype}">Skype</a></li>`;
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}">Link to linkedin</a></li>`;
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.github}">Link to github</a></li>`;
document.querySelector('.address').innerHTML += `<p>${data.address}`;
document.querySelector('#my-photo').src = data.photo;



/* experience data */

let experienceData = '';
experience.forEach(item => {
    experienceData += `<section class="mb-5">`;
    experienceData += `<h4 class="company-name mb-2">${item.company} - ${item.city}, <i>${item.from} - ${item.to}</i></h4>`;
    experienceData += `<h5>${item.position}</h5>`;
    experienceData += `<p>${item.description}</p>`;
    experienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = experienceData;



/* skills */

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;



/* education data */

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;


/* Achievements data */

let achievementsData = '';
data.achievements.forEach(item => {
    achievementsData += `<li>${item}</li>`;
});
document.querySelector('.achievements-list').innerHTML = achievementsData;







