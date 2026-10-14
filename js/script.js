
const apiKey = "";
const galery = document.getElementById("galery");
const searchInput = document.getElementById("searchInput");

function openModal(data) {
    const modalBlur = document.createElement("div");
    const modal = document.createElement("div");
    const catName = document.createElement("p");
    const catOrigin = document.createElement("p");
    const catDescri = document.createElement("p");
    const catTemp = document.createElement("p");
    const catExpect = document.createElement("p");
    const catGalery = document.createElement("div");
    const backButton = document.createElement("button");
    const backImage = document.createElement("img");

    modalBlur.className = "fixed inset-0 flex items-center justify-center bg-black/50";
    modal.className = "relative font-lilita border-2 border-[#EADCD3] rounded-lg bg-[#FFFFFF] px-4 py-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto";
    backButton.className = "absolute top-2 right-2 cursor-pointer";
    backImage.className = "h-10";
    catGalery.className = "grid grid-cols-2 gap-4 min-h-40 w-full";
    catName.className = "pb-3";
    catOrigin.className = "pb-3";
    catDescri.className = "pb-3";
    catTemp.className = "pb-3";
    catExpect.className= "pb-3";

    modalBlur.appendChild(modal);
    modal.appendChild(backButton);
    backButton.appendChild(backImage);
    modal.appendChild(catName);
    modal.appendChild(catOrigin);
    modal.appendChild(catDescri);
    modal.appendChild(catTemp);
    modal.appendChild(catExpect);
    modal.appendChild(catGalery);

    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${data.id}&limit=4`, {
    headers: {
        "x-api-key": apiKey
    }
    })
    .then(response => response.json())
    .then(catImages => {
        console.log(catImages);

    catImages.forEach(item => {
        const image = document.createElement("img");
        image.src = item.url;
        image.className = 'w-full aspect-square object-cover rounded-lg';
        catGalery.appendChild(image);
    })    

    })
    .catch(error => {
    console.log("Erro ao buscar imagens:", error);
    });

    backImage.src = ("/img/back.svg");

    if (!data.name) {
        catName.textContent = "Raça: Não informada";
    } else {
        catName.textContent = `Raça: ${data.name}`;
    }
    

    if (!data.origin) {
        catOrigin.textContent = "Origem: Não informada";
    } else {
        catOrigin.textContent = `Origem: ${data.origin}`;
    }
    
    if(!data.description) {
        catDescri.textContent = "Descrição: Não informada";
    } else {
        catDescri.textContent = `Descrição: ${data.description}`;
    }

    if(!data.temperament) {
        catTemp.textContent = "Temperamento: Não informado";
    } else {
        catTemp.textContent = `Temperamento: ${data.temperament}`;
    }

    if (!data.life_span) {
        catExpect.textContent = "Expectativa de Vida: Indefinida";
        } else {
            catExpect.textContent = `Expectativa de Vida: ${data.life_span} anos`;
        }
    

    backButton.addEventListener("click", ()=> {
        modalBlur.remove();
    })

    document.body.appendChild(modalBlur);
}


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
        const imageBoard = document.createElement("div");
        const image = document.createElement("img");
        const name = document.createElement("p");
        const origin = document.createElement("p");
        const plus = document.createElement("button");

        card.dataset.name = data.name.toLowerCase();

        galery.appendChild(card);
        card.appendChild(imageBoard);
        imageBoard.appendChild(image);
        card.appendChild(name);
        card.appendChild(origin);
        card.appendChild(plus);

        card.className = "border-2 border-[#EADCD3] rounded-lg bg-[#FFFFFF]";
        imageBoard.className = "w-full aspect-square border rounded-lg overflow-hidden";
        image.className = "w-full h-full object-fill";
        name.className = "font-lilita text-[#3D2A25] px-2 text-2xl py-2";
        origin.className = "font-lilita text-[#3D2A25] px-2 text-2xl";
        plus.className = "font-lilita text-[#3D2A25] px-2 text-2xl underline cursor-pointer";

        if (!data.name) {
            name.textContent = "Não informado";
        } else {
            name.textContent = `Raça: ${data.name}`;
        }
        

        if(!data.origin) {
            origin.textContent = "País de Origem: Não informado";
        } else {
            origin.textContent = `País de Origem: ${data.origin}`;
        }
        
        plus.textContent = 'Mais informações:';

        plus.addEventListener("click", () =>{
            openModal(data)
        })

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

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase().trim();
    const cards = galery.children;
    let visibleCards = 0;
    for(const card of cards) {
        if (card.dataset.name.includes(searchText)) {
            card.style.display = "";
            visibleCards++;
    } else {
        card.style.display = "none";
}
    }

    if (visibleCards === 0) {
    noResults.style.display = "block";
    } else {
    noResults.style.display = "none";
    }
});

const noResults = document.createElement("h2");
noResults.textContent = "Nenhuma raça encontrada.";
noResults.className = "font-lilita text-center text-3xl py-6 text-[#3D2A25]";
noResults.style.display = "none";
galery.parentElement.appendChild(noResults);