//Criando um objeto simulando uma realidade onde temos um usuário que cria, atualiza e deleta posts
const miniInsta = {
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
    ]
}
//Create
function createPost (dados){
    miniInsta.posts.push({ //usando o metodo push para adicionar ao objeto array
        Id: miniInsta.posts.length + 1, //sempre que for criado novo post, vai somar o id+1
        owner: dados.owner, 
        content: dados.content
    })
    
    console.log(miniInsta.posts)
}
createPost({owner:'miqueias.velez', content: 'Post que será deletado'}) // está sendo adicionado aqui o conteudo de owner e content


//Read
function getPosts (){
    return miniInsta.posts //o Read simplesmente pegar o que foi solicitado e mostra
}
console.log(getPosts())

//Update
function editPost (id, novoConteudo){ 
    const postSelect = miniInsta.posts.find((post) => { //vai buscar dentro do meu objeto o Id que está lá se for igual ao designado na função
        return post.Id === id});
    postSelect.content = novoConteudo //o conteudo do id selecionado será atualizado
    //console.log(postSelect)

}
editPost(1, 'Novo conteudo do post 1') //identificou pelo Id e atualizou o content

//Delete
function removePost(id){
    const newPostList = miniInsta.posts.filter((atualPosts) => {
        return atualPosts.Id !== id
    })
    miniInsta.posts = newPostList
}
removePost(3)
console.log(getPosts())