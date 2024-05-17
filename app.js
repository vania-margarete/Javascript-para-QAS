
const LIST = [
    {
        id: 1,
        nome:'Mestre Yoda',
        avatar:'images/yoda.png'
    }

    {
        id: 2,
        nome:'Luke Skywalke',
        avatar:'images/Luke.png'
    }
    {
        id: 3,
        nome:'Princesa Leia',
        avatar:'images/leia.png'
    }
    {
        id: 4,
        nome:'Han Solo',
        avatar:'images/hansolo.png'
    }
    {
        id: 5,
        nome:'Darth vader',
        avatar:'images/vader.png'
    }
    {
        id: 6,
        nome:'Chewbacca',
        avatar:'images/chewbacca.png'
    }
    {
        id: 7,
        nome:'R2D2',
        avatar:'images/R2D2.png'
    }
    {
        id: 8,
        nome:'C3pO',
        avatar:'images/C3pO.png'
    }
]

const app = new vue({
    el:'#app',
    data:{
        title:'Star Wars Lego'
        userName:'Fernando',
        Characters: LIST,
        searchName:''

    },
    methods:{
        like(userName) {
            alert('O personagem ${userName} recebeu um like!')
        },
        remove(id) {
            const  list = this.Characters
            const result = list.filter(item =>{
                return item.id !== id 
            })

            this.Characters = result 

        },
        search(){
            if(this.searchName === ''){
               return alert('O campo de busca é obrigatório.')
            }
            const list = this.Characters

            const result = list.filter(item =>) {
                return item.nome ===this.searchName
            })

           if(result.length <=0) {
            alert('Nenhum registro encontro.')

           }else{ 
            
            this.Characters = result
        }
    }

})