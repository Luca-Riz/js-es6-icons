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

icons.forEach((element) => {
    const {name, prefix, type, family} = element;
    console.log(type);
    document.getElementById('boxIcon').innerHTML += (
        
        `
        <div class="row">
            <div class="col-2">
                <div class="ret_animal bg-light d-flex justify-content-center rounded-3 my-4">
                    <div><i class="${family} ${prefix}${name}"></i></div>
                    <div class="name text-uppercase">${name}</div>
                </div>             
            </div>
        </div>  
        `

    );
});




// {/* <div class="col-2">
//     <div class="ret_animal bg-light d-flex justify-content-center rounded-3 my-4">
//         <div><i class="fas fa-cat"></i></div>
//         <div class="name text-uppercase">Cats</div>
//     </div>             
// </div> */}