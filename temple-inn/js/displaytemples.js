const requestURL = 'json/data.json';
const companiesObj = document.querySelector('.container');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });

  function displayTemples(temple) {
    let section = document.createElement('section');
    let name = document.createElement('h1');
    let img = document.createElement('img');
    let address = document.createElement('p');
    let telephone = document.createElement('p');
    let email = document.createElement('p');
    let history = document.createElement('p');
    let services = document.createElement('p');
    let sessionSchedule = document.createElement('p');
    let ordinanceSchedule = document.createElement('p');
    let templeClosureSchedule  = document.createElement('p');
    let span = document.createElement('span');

    img.setAttribute('src', temple.imageurl);
    img.setAttribute('alt', temple.name);
    img.setAttribute('loading', 'lazy');

    name.textContent = temple.name;
    telephone.innerHTML = `<b>Telephone:</b> ${temple.telephone}`;
    email.innerHTML = `<b>Email:</b> ${temple.email}`;
    address.innerHTML = `<b>Address:</b> ${temple.address}`;
    history.innerHTML = `<b>History:</b> ${temple.history}`;
    sessionSchedule.innerHTML = `<b>Session Schedule:</b> ${temple.session_schedule}`;

    // span.textContent = temple.services

    services.innerHTML = `<b>Services:</b> ${temple.services}`;
    ordinanceSchedule.innerHTML = `<b>Ordinace Schedule:</b> ${temple.ordinance_schedule}`;
    templeClosureSchedule.innerHTML = `<b>Temple Closure Schedule:</b> ${temple.temple_closure_schedule}`;

    section.appendChild(img);
    section.appendChild(name);
    section.appendChild(address);
    section.appendChild(telephone);
    section.appendChild(email);
    section.appendChild(history);
    section.appendChild(services);
    section.appendChild(sessionSchedule);
    section.appendChild(ordinanceSchedule);
    section.appendChild(templeClosureSchedule);

    document.querySelector('div.container').appendChild(section);
  }
