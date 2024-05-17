
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" = "IE=edge">
        <meta name="viewport" content="width=width,initial-s"
        <title>Star Wars</title>
        <link rel="stylesheet" href="css/styles.css"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /><link href="https://fonts.googleapis.com/css2?family=Acme&family=Handlee&display=swap" rel="folha de estilo">
</head>
<body>

    <div id="app">
        <div class= "top">
        <div>
        <h1>{{title}}</h1>
        <small>Olá, {{userName}} </small>

        </div>

        <form>
            <imput placeholder="Busque por nome..."></imput>
            <button "type=" @click="search()"></form>Buscar</button>
        </form>

        </div>

        <div>
        <h1>{{title}}</h1>
        <small>Olá, {{userName}} </small>

        </div>

        <form>
            <imput placeholder="Busque por nome..."></imput>
            <button "type=" @click="search()"></form>Buscar</button>
        </form>

        <div class="characters">
            <div class="item" v-for="item of characters" >
                <img src="item.avatar" :alt="item.nome" />
                <p>{{item.nome}}</p>
                <span  @click="like(item.nome)" class="material-symbols-outlined">
                    favorite
                        </span>
                        <span  @click="like(item.nome)" class="material-symbols-outlined">
                    delete
                        </span>
                <button @click="remove(item.id)">remover</button>
            </div>
            
        </div>

    </div>

    <Script type="text/javascript" src="js/vue.js"</Script>
    <Script type="text/javascript" src="js/app.js"</Script>

    </body>
</html>