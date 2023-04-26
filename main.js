let customerProfiles = document.querySelector("#customerProfiles")

console.log(customers);

//build a container for each customer and populate with name

for (let customer of customers){

    let customerCard = document.createElement('div');

    let customerImg = document.createElement('img');
    customerImg.src = customer.picture.medium;
    customerImg.classList.add("customerImg");
    // apply style to a class in css first, then add that class to the element with JS
    customerCard.appendChild(customerImg);

    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    customerName.classList.add("customerName");
    customerCard.appendChild(customerName);

    let customerEmail = document.createElement('p');
    customerEmail.innerText = customer.email;
    customerEmail.classList.add("customerEmail");
    customerCard.appendChild(customerEmail);

    let formattedState = nameToAbbr(customer.location.state);
    let customerAddress = document.createElement('p');
    customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name} \n ${customer.location.city} ${formattedState} ${customer.location.postcode}`;
    customerCard.appendChild(customerAddress);
    
//dates
    let formattedDate = moment(customer.registered.date).format("MMM DD, YYYY")
    let formattedDob = moment(customer.dob.date).format("MMM DD, YYYY")

    let customerDob = document.createElement('p');
    customerDob.innerText = `DOB: ${formattedDob} \n Customer since: ${formattedDate}`;
    customerCard.appendChild(customerDob);

    customerProfiles.appendChild(customerCard);
}