const myForm = document.querySelector('form')


const miniRedeSocial= {
   // postsList:document.querySelector('.postsList'),
    users: [
        {
            username: 'miqueias.velez',
        }
    ],
    posts: [
        
        {
            Id: 1,
            owner: 'miqueias.velez',
            content: 'Primerio Post'
        },
        {
            Id: 2,
            owner: 'miqueias.velez',
            content: 'Segundo Post'
        }
    ],
    createPost (dados) {
        //Cria posts na memoria Array/Objeto
        miniRedeSocial.posts.push({ //usando o metodo push para adicionar ao objeto array
            Id: miniRedeSocial.posts.length + 1, //sempre que for criado novo post, vai somar o id+1
            owner: dados.owner,
            content: dados.content
        })
        // miniRedeSocial.createPost.postsList.insertAdjacentHTML('afterbegin', `<li>${dados.content}</li>`) //insertAdjacentHTML permite que um elemento html seja adicionado afterbegin(depois de começar), beforebegin(antes de começar), beforeafter(antes de terminar), afterend(depois de terminar)
        const postList = document.querySelector('.postsList')
        postList.insertAdjacentHTML('afterbegin', `<li>${dados.content}`)
        
    }
    
}

//CRUD - Read
miniRedeSocial.posts.forEach(({owner, content})=>{
    miniRedeSocial.createPost({owner: owner, content: content})
})

//CRUD - Create
myForm.addEventListener('submit', function createPostController(event){
    event.preventDefault() //previnir de fazer padrao de recarregar pagina
    const inputPost = document.querySelector('input[name="fieldCreatePost"]')
    console.log(inputPost.value)
    
    miniRedeSocial.createPost({owner: 'miqueias.velez', content: inputPost.value}) // está sendo adicionado aqui o conteudo de owner e content
    console.log(miniRedeSocial.posts[3])
  
    inputPost.value = '' //limpando campo
    
    console.log(miniRedeSocial.posts)

})
