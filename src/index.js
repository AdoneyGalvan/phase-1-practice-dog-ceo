const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", function(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        const dogImageContainer = document.getElementById("dog-image-container");
        for (const dog of data.message)
        {
            const image = document.createElement("img");
            image.src = dog;
            dogImageContainer.append(image);
        }
    })
    .catch(error => console.log(error));

    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        let dogBreeds = document.getElementById("dog-breeds");
        for (const dog of Object.keys(data.message))
        {
            const breed = document.createElement("li");
            breed.innerText = dog;
            dogBreeds.append(breed);
        }
        
        document.querySelectorAll("li").forEach(dogBreed => {
            dogBreed.addEventListener('click', (e) => {
                e.target.style.color = 'red';
            })
        })

        const breedDropDown = document.getElementById('breed-dropdown');
        
        breedDropDown.addEventListener('click', (e) => {
            const dogs = Object.keys(data.message).filter(dog => dog[0] == e.target.value);
            
            dogBreeds.innerHTML = "";

            for (const dog of dogs)
            {
                const breed = document.createElement("li");
                breed.innerText = dog;
                dogBreeds.append(breed);
            }
            
            document.querySelectorAll("li").forEach(dogBreed => {
                dogBreed.addEventListener('click', (e) => {
                    e.target.style.color = 'red';
                })
            })
        })

    })
    .catch(error => console.log(error));
});