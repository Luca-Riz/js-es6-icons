const icons = [
    {name: 'cat', prefix: 'fa-',type: 'animal',family: 'fas', },
    {name: 'crow', prefix: 'fa-',type: 'animal',family: 'fas', },
    {name: 'dog', prefix: 'fa-',type: 'animal',family: 'fas', },
    {name: 'dove', prefix: 'fa-',type: 'animal',family: 'fas', },
    {name: 'dragon', prefix: 'fa-',type: 'animal',family: 'fas', },
    {name: 'horse', prefix: 'fa-',type: 'animal',family: 'fas', },
    {name: 'hippo', prefix: 'fa-',type: 'animal',family: 'fas', },
    {name: 'fish', prefix: 'fa-',type: 'animal',family: 'fas', },
    {name: 'carrot', prefix: 'fa-',type: 'vegetable',family: 'fas', },
    {name: 'apple-alt', prefix: 'fa-',type: 'vegetable',family: 'fas', },
    {name: 'lemon', prefix: 'fa-',type: 'vegetable',family: 'fas', },
    {name: 'pepper-hot', prefix: 'fa-',type: 'vegetable',family: 'fas', },
    {name: 'user-astronaut', prefix: 'fa-',type: 'user',family: 'fas', },
    {name: 'user-graduate', prefix: 'fa-',type: 'user',family: 'fas', },
    {name: 'user-ninja', prefix: 'fa-',type: 'user',family: 'fas', },
    {name: 'user-secret', prefix: 'fa-',type: 'user',family: 'fas', },
];

print(icons);

/*--------- funzioni ---------*/
function print(array){
    array.forEach((element) => {
        const {name, prefix, type, family} = element;
        console.log(type);
        document.getElementById('boxIcon').innerHTML += (        
            `
            <div class="col-2">
                <div class="ret_animal bg-light d-flex flex-column justify-content-center align-items-center rounded-3 my-4">
                    <div><i class="${family} ${prefix}${name} ${type} fs-1"></i></div>
                    <div class="name text-uppercase fs-5">${name}</div>
                </div>             
            </div>
            `
        );
    });

}





// Milestone 2 Coloriamo le icone per tipo