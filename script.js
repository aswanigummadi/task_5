fetch('https://jsonplaceholder.typicode.com/users')

.then(response => response.json())

.then(data => {

    let container = document.getElementById("userContainer");

    data.forEach(user => {

        let card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>City: ${user.address.city}</p>
        `;

        container.appendChild(card);
    });

})

.catch(error => {
    console.log("Error fetching data:", error);
});