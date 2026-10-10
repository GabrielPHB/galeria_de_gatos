const apiKey = "live_UXCKt5uaz79OsfIAEWSfONnVeZU13Fh7WNf6nMiGsxHVKZVMeUl3pZIOz6gn2ZRP";
const galery = document.getElementById("galery");

fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
        "x-api-key": apiKey
    }

})
    .then(response => 
        response.json())

    .then(data => {
        data.forEach(data => {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const name = document.createElement("p");
        const origin = document.createElement("p");
        galery.appendChild(card);
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(origin);
        name.textContent = `Raça: ${data.name}`;
        origin.textContent = `País de Origem: ${data.origin}`;
        if (data.image !== undefined) {
            image.src = (data.image.url);
            } else {
                image.textContent = `Imagem Indisponível`;
            }
        });
        console.log(data);
    })

    .catch(error => {
        console.log("Erro ao processar informação:", error);
    })

