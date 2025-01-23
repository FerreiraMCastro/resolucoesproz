//1.captura de um elemento
// capaturar o elemento pelo id getElementById
//deve retornar apenas um elemento
//manipulação do HTML > manipulação de DOM sempre que eu precisar manipular o DOM, eu preciso usar a 
//reservada "document".

let logo = document.getElementById("logo");
console.log(logo);

//2. Captura de um elemento pelo nome da classe
//getElementByClassName

let elementos_nav = document.getElementsByClassName("elementos_nav");

console.log(elementos_nav)

//capturando post 02 com o id

let post_02 = document.getElementById("post02");

console.log(post_02)

//capturando formulario com id

let formulario = document.getElementById("formulario");
console.log(formulario);

// capturanto a section com ambos os posts

let section_posts = document.getElementById("posts");
console.log(section_posts);

//capturando as datas dos posts
let dataPost = document.getElementsByClassName("post-data");
console.log(dataPost);

//capturando os textos dos posts

let textPost = document.getElementsByClassName("post-texto");
console.log(textPost);

//capturando listas com links de rede sociais

let linkRedesSociais = document.getElementsByClassName("lista_redes");
console.log(linkRedesSociais);

// 3. querySelector
// aceita todos os seletores css, exemplos: id, classname, nome de tag(img), hierarquia(main section)
//Ele só retorna o primeiro elemento encontrado.
//retonna todos os elementos que correspondem ao valor dado

let elementosNav = document.querySelector("li");
console.log(elementosNav)

let todosOsPs = document.querySelector("p")

console.log(todosOsPs)

let lista_redes_all = document.querySelectorAll(".lista_redes");
console.log(lista_redes_all)