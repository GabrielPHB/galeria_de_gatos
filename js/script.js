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

        card.className = "border-2 border-[#EADCD3] rounded-lg bg-[#FFFFFF]";
        image.className = "object-cover h-96 w-full";
        name.className = "font-lilita text-[#3D2A25] px-2 text-2xl py-2";
        origin.className = " font-lilita text-[#3D2A25] px-2 text-2xl";
        name.textContent = `Raça: ${data.name}`;
        origin.textContent = `País de Origem: ${data.origin}`;

        if (data.image !== undefined) {
            image.src = (data.image.url);
            } else {
                image.src = ("/img/unavailable.jfif");
            }
        image.onerror = () => {
            image.onerror = null
            image.src = "/img/unavailable.jfif";
            };
        });
        console.log(data);
    })

    .catch(error => {
        console.log("Erro ao processar informação:", error);
    })

