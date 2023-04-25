let customerProfiles = document.querySelector("#customerProfiles")

console.log(customers);

//build a container for each customer and populate with name

for (let customer of customers){
    let customerCard = document.createElement('div');
    // created the card for this customer
    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    customerCard.appendChild(customerName);
    // added the name of the customer to the card
    let customerEmail = document.createElement('p');
    customerEmail.innerText = customer.email;
    customerCard.appendChild(customerEmail);
    // added the email of the customer to the card
    customerProfiles.appendChild(customerCard);
    // added the customer card to the customer profiles container
}












// let profile = document.querySelector('#profile')
// let clientName = document.querySelectorAll('Name')
// let ourCustomers = [
//     {
//     emailAddress: 'sophia.burns@example.com',
//     name: 'Dr. Sophia Burns', 
//     address: '4339 Green Rd, Great Falls Alabama 66032',
//     dob: 'Jul 28, 1990',
//     since: 'Mar 9, 2012',
//     },
//     {
//     emailAddress: 'krin.oliver@example.com',
//     name: 'Krin Oliver',
//     address: '9294 Stevens Creek Blvd Hampton, NV 48932',
//     dob: 'Jul 22, 1965',
//     since: 'Jul 28, 2011',
//     },
// ]

// function findCustomerByName(emailAddress, name, address, dob, since){
//     let customer = []
//     for (let name of customer){
//         if (person.name === name){
//             customer.push(person.name)
//         }
//     }
//     console.log(customer)
// };



// let customerDiv = document.createElement('div')







// function nameToAbbr (stateName) {
//     const idx = usStates.findIndex(function (state) {
//       return state.name === stateName.toUpperCase()
//     })
  
//     if (idx === -1) {
//       return null
//     }
  
//     return usStates[idx].abbreviation
//   }
