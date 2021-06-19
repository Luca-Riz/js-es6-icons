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



const coloredArray = colorIcons(icons);
print(coloredArray);

const types = [];

//creazione di array delle sole type
coloredArray.forEach((element) => {
    //se types non è incluso in element, allora pushalo
    if(!types.includes(element.type)){
        types.push(element.type);
        //passo i valori degli element all'html in type
        document.getElementById('type').innerHTML += 
        `
        <option value="${element.type}">${element.type}</option>
        `
    }
});
console.log(types);


/*--------- funzioni ---------*/
function print(array){
    array.forEach((element) => {
        //destructuring
        const {name, prefix, color, family, type} = element;

        document.getElementById('boxIcon').innerHTML += (  

            //cosa passo all'HTML pescando le varie caratteristiche dall'array - template literal   
            `
            <div class="col-2">
                <div class="ret_animal bg-light d-flex flex-column justify-content-center align-items-center rounded-3 my-4">
                    <div><i class="${family} ${prefix}${name} ${type} fs-1" style="color:${color}"></i></div>
                    <div class="name text-uppercase fs-5">${name}</div>
                </div>             
            </div>
            `
        );
    });
}

// assegna la classe colore, poi in base a type il colore corretto
function colorIcons(array){
    const coloredArray = array.map((element) => {
        let color = 'violet';
        if(element.type == 'animal'){
            color = 'blue';
        } else if (element.type == 'vegetable'){
            color = 'green';
        }    
    
        return {
            ...element,
            color
        }
    });
    return coloredArray;
}





