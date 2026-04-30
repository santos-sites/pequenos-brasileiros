const app = document.getElementById("app");

const allLevelsWords = {
  // ----------------------
  // LEVEL 1 - Family (Simple)
  // ----------------------
  1: [
    {
      english: "Father",
      portuguese: "Pai",
      image: "images/1father.png",
      phrase: "Meu pai é alto.",
    },
    {
      english: "Mother",
      portuguese: "Mãe",
      image: "images/1mother.png",
      phrase: "Minha mãe cozinha bem.",
    },
    {
      english: "Brother",
      portuguese: "Irmão",
      image: "images/1brother.png",
      phrase: "Meu irmão gosta de jogar.",
    },
    {
      english: "Sister",
      portuguese: "Irmã",
      image: "images/1sister.png",
      phrase: "Minha irmã canta.",
    },
    {
      english: "Grandfather",
      portuguese: "Avô",
      image: "images/1grandpa.png",
      phrase: "Meu avô conta histórias.",
    },
    {
      english: "Grandmother",
      portuguese: "Avó",
      image: "images/1grandma.png",
      phrase: "Minha avó faz bolos.",
    },
    {
      english: "Baby",
      portuguese: "Bebê",
      image: "images/1baby.png",
      phrase: "O bebê está dormindo.",
    },
    {
      english: "Uncle",
      portuguese: "Tio",
      image: "images/1uncle.png",
      phrase: "Meu tio trabalha no parque.",
    },
    {
      english: "Aunt",
      portuguese: "Tia",
      image: "images/1aunt.png",
      phrase: "Minha tia lê livros.",
    },
    {
      english: "Family",
      portuguese: "Família",
      image: "images/1family.png",
      phrase: "Minha família é feliz.",
    },
  ],

  // ----------------------
  // LEVEL 2 - Animals (Simple)
  // ----------------------
  2: [
    {
      english: "Dog",
      portuguese: "Cachorro",
      image: "images/2dog.png",
      phrase: "O cachorro corre no parque.",
    },
    {
      english: "Cat",
      portuguese: "Gato",
      image: "images/2cat.png",
      phrase: "O gato dorme na cama.",
    },
    {
      english: "Bird",
      portuguese: "Pássaro",
      image: "images/2bird.png",
      phrase: "O pássaro canta cedo.",
    },
    {
      english: "Fish",
      portuguese: "Peixe",
      image: "images/2fish.png",
      phrase: "O peixe nada rápido.",
    },
    {
      english: "Horse",
      portuguese: "Cavalo",
      image: "images/2horse.png",
      phrase: "O cavalo é forte.",
    },
    {
      english: "Duck",
      portuguese: "Pato",
      image: "images/2duck.png",
      phrase: "O pato nada no lago.",
    },
    {
      english: "Rabbit",
      portuguese: "Coelho",
      image: "images/2rabbit.png",
      phrase: "O coelho pula alto.",
    },
    {
      english: "Frog",
      portuguese: "Sapo",
      image: "images/2frog.png",
      phrase: "O sapo gosta de água.",
    },
    {
      english: "Elephant",
      portuguese: "Elefante",
      image: "images/2elephant.png",
      phrase: "O elefante é grande.",
    },
    {
      english: "Lion",
      portuguese: "Leão",
      image: "images/2lion.png",
      phrase: "O leão ruge alto.",
    },
  ],

  // ----------------------
  // LEVEL 3 - Games / Toys
  // ----------------------
  3: [
    {
      english: "Game",
      portuguese: "Jogo",
      image: "images/3game.png",
      phrase: "Eu gosto de jogar este jogo.",
    },
    {
      english: "Ball",
      portuguese: "Bola",
      image: "images/3ball.png",
      phrase: "A bola é vermelha.",
    },
    {
      english: "Doll",
      portuguese: "Boneca",
      image: "images/3-doll.png",
      phrase: "A boneca é bonita.",
    },
    {
      english: "Puzzle",
      portuguese: "Quebra-cabeça",
      image: "images/3puzzle.png",
      phrase: "O quebra-cabeça é difícil.",
    },
    {
      english: "Car",
      portuguese: "Carro",
      image: "images/3car.png",
      phrase: "O carro anda rápido.",
    },
    {
      english: "Train",
      portuguese: "Trem",
      image: "images/3train.png",
      phrase: "O trem é longo.",
    },
    {
      english: "Blocks",
      portuguese: "Blocos",
      image: "images/3blocks.png",
      phrase: "Eu construo com blocos.",
    },
    {
      english: "Bike",
      portuguese: "Bicicleta",
      image: "images/3bike.png",
      phrase: "A bicicleta é azul.",
    },
    {
      english: "Plane",
      portuguese: "Avião",
      image: "images/3plane.png",
      phrase: "O avião voa no céu.",
    },
    {
      english: "Balloon",
      portuguese: "Balão",
      image: "images/3balloon.png",
      phrase: "O balão é colorido.",
    },
  ],
  // ----------------------
  // LEVEL 4 - Escola(Simple)
  // ----------------------
  4: [
    {
      english: "School",
      portuguese: "Escola",
      image: "images/4school.png",
      phrase: "Eu gosto de ir para a escola.",
    },
    {
      english: "Teacher",
      portuguese: "Professor",
      image: "images/4teacherman.png",
      phrase: "Meu professor é muito legal.",
    },
    {
      english: "Teacher",
      portuguese: "Professora",
      image: "images/4teacherwoman.png",
      phrase: "Minha professora é muito simpática",
    },
    {
      english: "Student",
      portuguese: "Aluno",
      image: "images/4studentboy.png",
      phrase: "O aluno ta sentado",
    },
    {
      english: "Student",
      portuguese: "Aluna",
      image: "images/4studentgirl.png",
      phrase: "A aluna está lendo um livro.",
    },
    {
      english: "Book",
      portuguese: "Livro",
      image: "images/4book.png",
      phrase: "O livro é sobre animais. ",
    },
    {
      english: "Backpack",
      portuguese: "Mochila",
      image: "images/4backpack.png",
      phrase: "Minha mochila é azul.",
    },
    {
      english: "Pencil",
      portuguese: "Lápis",
      image: "images/4lápis.png",
      phrase: "Eu preciso de um lápis para escrever.",
    },
    {
      english: "Pen",
      portuguese: "Caneta",
      image: "images/4pen.png",
      phrase: "A caneta é vermelha.",
    },
    {
      english: "Notebook",
      portuguese: "Caderno",
      image: "images/4notebook.png",
      phrase: "Eu escrevo no meu caderno.",
    },
    {
      english: "Eraser",
      portuguese: "Borracha",
      image: "images/4eraser.png",
      phrase: "A borracha apaga o erro.",
    },
    {
      english: "Desk",
      portuguese: "Carteira",
      image: "images/4desk.png",
      phrase: "A carteira é grande.",
    },
    {
      english: "Crayon",
      portuguese: "Cera",
      image: "images/4crayon.png",
      phrase: "Eu desenho com giz de cera.",
    },
    {
      english: "Scissors",
      portuguese: "Tesoura",
      image: "images/4scissors.png",
      phrase: "A tesoura corta o papel.",
    },
    {
      english: "Ruler",
      portuguese: "Régua",
      image: "images/4ruler.png",
      phrase: "A régua ajuda a desenhar uma linha reta.",
    },
    {
      english: "Glue",
      portuguese: "Cola",
      image: "images/4glue.png",
      phrase: "A cola é para colar papel.",
    },
  ],

  // ----------------------
  // LEVEL 5 - Restaurantes (Simple)
  // ----------------------
  5: [
    {
      english: "Table",
      portuguese: "Mesa",
      image: "images/5table.png",
      phrase: "A mesa está pronta para o jantar.",
    },
    {
      english: "Plate",
      portuguese: "Prato",
      image: "images/5plate.png",
      phrase: "O prato está limpo.",
    },
    {
      english: "Cup",
      portuguese: "Copo",
      image: "images/5cup.png",
      phrase: "O copo tem suco de laranja.",
    },
    {
      english: "Knife",
      portuguese: "Faca",
      image: "images/5knife.png",
      phrase: "A faca corta o pão.",
    },
    {
      english: "Fork",
      portuguese: "Garfo",
      image: "images/5fork.png",
      phrase: "O garfo está em cima da mesa.",
    },
    {
      english: "Spoon",
      portuguese: "Colher",
      image: "images/5spoon.png",
      phrase: "A colher é usada para a sopa.",
    },
    {
      english: "Waiter",
      portuguese: "Garçom",
      image: "images/5waiter.png",
      phrase: "O garçom traz a comida.",
    },
    {
      english: "Menu",
      portuguese: "Cardápio",
      image: "images/5menu.png",
      phrase: "O cardápio tem muitas opções.",
    },
    {
      english: "Restaurant",
      portuguese: "Restaurante",
      image: "images/5restaurant.png",
      phrase: "O restaurante é muito famoso.",
    },
    {
      english: "Bread",
      portuguese: "Pão",
      image: "images/5bread.png",
      phrase: "O pão é fresco e quente.",
    },
    {
      english: "Soup",
      portuguese: "Sopa",
      image: "images/5soup.png",
      phrase: "A sopa está quente.",
    },
    {
      english: "Salad",
      portuguese: "Salada",
      image: "images/5salad.png",
      phrase: "A salada é saudável.",
    },
    {
      english: "Juice",
      portuguese: "Suco",
      image: "images/5juice.png",
      phrase: "O suco é de maçã.",
    },
    {
      english: "Water",
      portuguese: "Água",
      image: "images/5water.png",
      phrase: "A água está gelada.",
    },
    {
      english: "Pizza",
      portuguese: "Pizza",
      image: "images/5pizza.png",
      phrase: "A pizza está deliciosa.",
    },
    {
      english: "Coffee",
      portuguese: "Café",
      image: "images/5coffee.png",
      phrase: "O café está quente.",
    },
    {
      english: "Ice Cream",
      portuguese: "Sorvete",
      image: "images/5icecream.png",
      phrase: "O sorvete é doce e frio.",
    },
  ],

  // ----------------------
  // LEVEL 6 - Aleatório (Simple)
  // ----------------------
  6: [
    {
      english: "House",
      portuguese: "Casa",
      image: "images/6house.png",
      phrase: "A casa é grande.",
    },
    {
      english: "Tree",
      portuguese: "Árvore",
      image: "images/6tree.png",
      phrase: "A árvore é verde.",
    },
    {
      english: "Sun",
      portuguese: "Sol",
      image: "images/6sun.png",
      phrase: "O sol brilha forte.",
    },
    {
      english: "Moon",
      portuguese: "Lua",
      image: "images/6moon.png",
      phrase: "A lua aparece à noite.",
    },
    {
      english: "Star",
      portuguese: "Estrela",
      image: "images/6star.png",
      phrase: "A estrela brilha no céu.",
    },
    {
      english: "Shoe",
      portuguese: "Sapato",
      image: "images/6shoe.png",
      phrase: "O sapato é novo.",
    },
    {
      english: "Door",
      portuguese: "Porta",
      image: "images/6door.png",
      phrase: "A porta está aberta.",
    },
    {
      english: "Window",
      portuguese: "Janela",
      image: "images/6window.png",
      phrase: "A janela está fechada.",
    },
    {
      english: "Cloud",
      portuguese: "Nuvem",
      image: "images/6cloud.png",
      phrase: "A nuvem é branca.",
    },
    {
      english: "Flower",
      portuguese: "Flor",
      image: "images/6flower.png",
      phrase: "A flor é bonita.",
    },
    {
      english: "Bird",
      portuguese: "Pássaro",
      image: "images/6bird.png",
      phrase: "O pássaro canta cedo.",
    },
    {
      english: "Hat",
      portuguese: "Chapéu",
      image: "images/6hat.png",
      phrase: "O chapéu é pequeno.",
    },
    {
      english: "Bag",
      portuguese: "Bolsa",
      image: "images/6bag.png",
      phrase: "A bolsa é preta.",
    },
    {
      english: "Clock",
      portuguese: "Relógio",
      image: "images/6clock.png",
      phrase: "O relógio marca três horas.",
    },
    {
      english: "Key",
      portuguese: "Chave",
      image: "images/6key.png",
      phrase: "A chave abre a porta.",
    },
  ],
  // ----------------------
  // LEVEL 7 - Family 2 (Medium)
  // ----------------------
  7: [
    {
      english: "Cousin",
      portuguese: "Primo / Prima",
      image: "images/7cousin.png",
      phrase: "Meu primo gosta de futebol.",
    },
    {
      english: "Nephew",
      portuguese: "Sobrinho",
      image: "images/7nephew.png",
      phrase: "Meu sobrinho é pequeno.",
    },
    {
      english: "Niece",
      portuguese: "Sobrinha",
      image: "images/7niece.png",
      phrase: "Minha sobrinha desenha bem.",
    },
    {
      english: "Stepfather",
      portuguese: "Padrasto",
      image: "images/7stepfather.png",
      phrase: "Meu padrasto é gentil.",
    },
    {
      english: "Stepmother",
      portuguese: "Madrasta",
      image: "images/7stepmother.png",
      phrase: "Minha madrasta cozinha muito bem.",
    },
    {
      english: "Godfather",
      portuguese: "Padrinho",
      image: "images/7godfather.png",
      phrase: "Meu padrinho mora em outra cidade.",
    },
    {
      english: "Godmother",
      portuguese: "Madrinha",
      image: "images/7godmother.png",
      phrase: "Minha madrinha é carinhosa.",
    },
    {
      english: "Husband",
      portuguese: "Marido",
      image: "images/7husband.png",
      phrase: "O marido ajuda em casa.",
    },
    {
      english: "Wife",
      portuguese: "Esposa",
      image: "images/7wife.png",
      phrase: "A esposa trabalha muito.",
    },
    {
      english: "Relatives",
      portuguese: "Parentes",
      image: "images/7relatives.png",
      phrase: "Meus parentes vêm visitar.",
    },
    {
      english: "Twins",
      portuguese: "Gêmeos",
      image: "images/7twins.png",
      phrase: "Os gêmeos estudam juntos.",
    },
    {
      english: "Ancestor",
      portuguese: "Antepassado",
      image: "images/7ancestor.png",
      phrase: "Meus antepassados são importantes para mim.",
    },
    {
      english: "Descendant",
      portuguese: "Descendente",
      image: "images/7descendant.png",
      phrase: "Ele é descendente de uma família famosa.",
    },
  ],

  // ----------------------
  // LEVEL 8 - Animals 2 (Medium)
  // ----------------------
  8: [
    {
      english: "Giraffe",
      portuguese: "Girafa",
      image: "images/8giraffe.png",
      phrase: "A girafa tem pescoço comprido.",
    },
    {
      english: "Tiger",
      portuguese: "Tigre",
      image: "images/8tiger.png",
      phrase: "O tigre é forte e rápido.",
    },
    {
      english: "Bear",
      portuguese: "Urso",
      image: "images/8bear.png",
      phrase: "O urso gosta de mel.",
    },
    {
      english: "Monkey",
      portuguese: "Macaco",
      image: "images/8monkey.png",
      phrase: "O macaco sobe na árvore.",
    },
    {
      english: "Kangaroo",
      portuguese: "Canguru",
      image: "images/8kangaroo.png",
      phrase: "O canguru pula alto.",
    },
    {
      english: "Zebra",
      portuguese: "Zebra",
      image: "images/8zebra.png",
      phrase: "A zebra tem listras pretas e brancas.",
    },
    {
      english: "Crocodile",
      portuguese: "Crocodilo",
      image: "images/8crocodile.png",
      phrase: "O crocodilo vive no rio.",
    },
    {
      english: "Owl",
      portuguese: "Coruja",
      image: "images/8owl.png",
      phrase: "A coruja voa à noite.",
    },
    {
      english: "Whale",
      portuguese: "Baleia",
      image: "images/8whale.png",
      phrase: "A baleia nada no oceano.",
    },
    {
      english: "Penguin",
      portuguese: "Pinguim",
      image: "images/8penguin.png",
      phrase: "O pinguim vive no frio.",
    },
    {
      english: "Eagle",
      portuguese: "Águia",
      image: "images/8eagle.png",
      phrase: "A águia voa alto.",
    },
    {
      english: "Fox",
      portuguese: "Raposa",
      image: "images/8fox.png",
      phrase: "A raposa é esperta.",
    },
    {
      english: "Dolphin",
      portuguese: "Golfinho",
      image: "images/8dolphin.png",
      phrase: "O golfinho nada rápido.",
    },
    {
      english: "Wolf",
      portuguese: "Lobo",
      image: "images/8wolf.png",
      phrase: "O lobo uiva à noite.",
    },
  ],

  // ----------------------
  // LEVEL 9 - Games / Toys 2 (Medium)
  // ----------------------
  9: [
    {
      english: "Chess",
      portuguese: "Xadrez",
      image: "images/9chess.png",
      phrase: "O xadrez é um jogo difícil.",
    },
    {
      english: "Kite",
      portuguese: "Pipa",
      image: "images/9kite.png",
      phrase: "A pipa voa no céu.",
    },
    {
      english: "Yo-yo",
      portuguese: "Ioiô",
      image: "images/9yoyo.png",
      phrase: "O ioiô sobe e desce.",
    },
    {
      english: "Marbles",
      portuguese: "Bolinhas de gude",
      image: "images/9marbles.png",
      phrase: "As bolinhas de gude são coloridas.",
    },
    {
      english: "Drone",
      portuguese: "Drone",
      image: "images/9drone.png",
      phrase: "O drone voa alto.",
    },
    {
      english: "Skateboard",
      portuguese: "Skate",
      image: "images/9skate.png",
      phrase: "O skate é rápido.",
    },
    {
      english: "Scooter",
      portuguese: "Patinete",
      image: "images/9scooter.png",
      phrase: "O patinete é divertido.",
    },
    {
      english: "Lego",
      portuguese: "Lego",
      image: "images/9lego.png",
      phrase: "Eu construo casas com Lego.",
    },
    {
      english: "Teddy Bear",
      portuguese: "Urso de pelúcia",
      image: "images/9teddybear.png",
      phrase: "O urso de pelúcia é fofo.",
    },
    {
      english: "Slingshot",
      portuguese: "Estilingue",
      image: "images/9slingshot.png",
      phrase: "O estilingue é pequeno.",
    },
    {
      english: "Board Game",
      portuguese: "Jogo de tabuleiro",
      image: "images/9boardgame.png",
      phrase: "O jogo de tabuleiro é divertido.",
    },
    {
      english: "Action Figure",
      portuguese: "Boneco",
      image: "images/9actionfigure.png",
      phrase: "O boneco é do meu herói favorito.",
    },
    {
      english: "Rubik's Cube",
      portuguese: "Cubo mágico",
      image: "images/9rubikscube.png",
      phrase: "O cubo mágico é colorido.",
    },
    {
      english: "Remote Control Car",
      portuguese: "Carrinho de controle remoto",
      image: "images/9remotecontrolcar.png",
      phrase: "O carrinho de controle remoto corre rápido.",
    },
    {
      english: "Trampoline",
      portuguese: "Cama elástica",
      image: "images/9trampoline.png",
      phrase: "A cama elástica é divertida.",
    },
  ],

    // ----------------------
  // LEVEL 10 - Escola (Medium)
  // ----------------------
  10: [
    {
      english: "Classroom",
      portuguese: "Sala de aula",
      image: "images/10classroom.png",
      phrase: "A sala de aula é grande.",
    },
    {
      english: "Homework",
      portuguese: "Dever de casa",
      image: "images/10homework.png",
      phrase: "Eu terminei meu dever de casa.",
    },
    {
      english: "Blackboard",
      portuguese: "Quadro-negro",
      image: "images/10blackboard.png",
      phrase: "O professor escreve no quadro-negro.",
    },
    {
      english: "Library",
      portuguese: "Biblioteca",
      image: "images/10library.png",
      phrase: "A biblioteca tem muitos livros.",
    },
    {
      english: "Exam",
      portuguese: "Prova",
      image: "images/10exam.png",
      phrase: "A prova é amanhã.",
    },
    {
      english: "Recess",
      portuguese: "Recreio",
      image: "images/10recess.png",
      phrase: "No recreio, jogamos bola.",
    },
    {
      english: "Uniform",
      portuguese: "Uniforme",
      image: "images/10uniform.png",
      phrase: "O uniforme é branco e azul.",
    },
    {
      english: "Subject",
      portuguese: "Matéria",
      image: "images/10subject.png",
      phrase: "Minha matéria favorita é matemática.",
    },
    {
      english: "Grade",
      portuguese: "Nota",
      image: "images/10grade.png",
      phrase: "Minha nota foi muito boa.",
    },
    {
      english: "Principal",
      portuguese: "Diretor / Diretora",
      image: "images/10principal.png",
      phrase: "O diretor falou com os alunos.",
    },
    {
      english: "Chalk",
      portuguese: "Giz",
      image: "images/10chalk.png",
      phrase: "O giz é branco.",
    },
    {
      english: "Schedule",
      portuguese: "Horário",
      image: "images/10schedule.png",
      phrase: "O horário da escola mudou.",
    },
    {
      english: "Test",
      portuguese: "Teste",
      image: "images/10test.png",
      phrase: "Hoje fiz um teste difícil.",
    },
    {
      english: "Map",
      portuguese: "Mapa",
      image: "images/10map.png",
      phrase: "O mapa está na parede da sala.",
    },
    {
      english: "Lesson",
      portuguese: "Lição",
      image: "images/10lesson.png",
      phrase: "A lição de hoje é interessante.",
    },
    {
      english: "Notebook Paper",
      portuguese: "Folha",
      image: "images/10paper.png",
      phrase: "Escrevi na folha do caderno.",
    },
  ],

  // ----------------------
  // LEVEL 11 - Restaurantes (Medium)
  // ----------------------
  11: [
    {
      english: "Waitress",
      portuguese: "Garçonete",
      image: "images/11waitress.png",
      phrase: "A garçonete é simpática.",
    },
    {
      english: "Bill",
      portuguese: "Conta",
      image: "images/11bill.png",
      phrase: "A conta está na mesa.",
    },
    {
      english: "Tip",
      portuguese: "Gorjeta",
      image: "images/11tip.png",
      phrase: "Deixei uma gorjeta para o garçom.",
    },
    {
      english: "Tablecloth",
      portuguese: "Toalha de mesa",
      image: "images/11tablecloth.png",
      phrase: "A toalha de mesa é vermelha.",
    },
    {
      english: "Utensils",
      portuguese: "Talheres",
      image: "images/11utensils.png",
      phrase: "Os talheres estão limpos.",
    },
    {
      english: "Reservation",
      portuguese: "Reserva",
      image: "images/11reservation.png",
      phrase: "Tenho uma reserva para duas pessoas.",
    },
    {
      english: "Appetizer",
      portuguese: "Entrada",
      image: "images/11appetizer.png",
      phrase: "Pedimos uma entrada antes do prato principal.",
    },
    {
      english: "Dessert",
      portuguese: "Sobremesa",
      image: "images/11dessert.png",
      phrase: "A sobremesa é deliciosa.",
    },
    {
      english: "Chef",
      portuguese: "Cozinheiro / Chef",
      image: "images/11chef.png",
      phrase: "O chef prepara pratos especiais.",
    },
    {
      english: "Napkin",
      portuguese: "Guardanapo",
      image: "images/11napkin.png",
      phrase: "Pegue um guardanapo, por favor.",
    },
    {
      english: "Plate",
      portuguese: "Prato",
      image: "images/11plate.png",
      phrase: "O prato está cheio de comida.",
    },
    {
      english: "Soup",
      portuguese: "Sopa",
      image: "images/11soup.png",
      phrase: "A sopa está quente.",
    },
    {
      english: "Drink",
      portuguese: "Bebida",
      image: "images/11drink.png",
      phrase: "Minha bebida está gelada.",
    },
    {
      english: "Bottle",
      portuguese: "Garrafa",
      image: "images/11bottle.png",
      phrase: "A garrafa está na mesa.",
    },
    {
      english: "Tray",
      portuguese: "Bandeja",
      image: "images/11tray.png",
      phrase: "O garçom trouxe a bandeja cheia.",
    },
    {
      english: "Glass",
      portuguese: "Copo",
      image: "images/11glass.png",
      phrase: "O copo está cheio de água.",
    },
  ],

  // ----------------------
  // LEVEL 12 - Aleatório (Medium)
  // ----------------------
  12: [
    {
      english: "Mountain",
      portuguese: "Montanha",
      image: "images/12mountain.png",
      phrase: "A montanha é alta.",
    },
    {
      english: "River",
      portuguese: "Rio",
      image: "images/12river.png",
      phrase: "O rio corre rápido.",
    },
    {
      english: "Bridge",
      portuguese: "Ponte",
      image: "images/12bridge.png",
      phrase: "A ponte é longa.",
    },
    {
      english: "Market",
      portuguese: "Mercado",
      image: "images/12market.png",
      phrase: "O mercado está cheio de frutas.",
    },
    {
      english: "Festival",
      portuguese: "Festival",
      image: "images/12festival.png",
      phrase: "O festival é muito animado.",
    },
    {
      english: "Airport",
      portuguese: "Aeroporto",
      image: "images/12airport.png",
      phrase: "O aeroporto está lotado.",
    },
    {
      english: "Hospital",
      portuguese: "Hospital",
      image: "images/12hospital.png",
      phrase: "O hospital é grande.",
    },
    {
      english: "Island",
      portuguese: "Ilha",
      image: "images/12island.png",
      phrase: "A ilha é bonita.",
    },
    {
      english: "Village",
      portuguese: "Aldeia",
      image: "images/12village.png",
      phrase: "A aldeia é pequena.",
    },
    {
      english: "Square",
      portuguese: "Praça",
      image: "images/12square.png",
      phrase: "A praça está cheia de pessoas.",
    },
    {
      english: "Castle",
      portuguese: "Castelo",
      image: "images/12castle.png",
      phrase: "O castelo é antigo.",
    },
    {
      english: "Tunnel",
      portuguese: "Túnel",
      image: "images/12tunnel.png",
      phrase: "O túnel é escuro.",
    },
    {
      english: "Stadium",
      portuguese: "Estádio",
      image: "images/12stadium.png",
      phrase: "O estádio está cheio de torcedores.",
    },
    {
      english: "Museum",
      portuguese: "Museu",
      image: "images/12museum.png",
      phrase: "O museu tem muitas pinturas.",
    },
    {
      english: "Subway",
      portuguese: "Metrô",
      image: "images/12subway.png",
      phrase: "O metrô está chegando.",
    },
    {
      english: "Park",
      portuguese: "Parque",
      image: "images/12park.png",
      phrase: "O parque é bonito e verde.",
    },
  ],
// ----------------------
  // LEVEL 13 - Colors shapes (Easy)
  // ----------------------
  13: [
    {
      english: "Blue",
      portuguese: "Azul",
      image: "images/13blue.png",
      phrase: "O céu é azul.",
    },
    {
      english: "Green",
      portuguese: "Verde",
      image: "images/13green.png",
      phrase: "O grama é verde.",
    },
    {
      english: "Red",
      portuguese: "Vermelho",
      image: "images/13red.png",
      phrase: "A tenis é vermelho.",
    },
    {
      english: "Yellow",
      portuguese: "Amarelo",
      image: "images/13yellow.png",
      phrase: "O sol é amarelo.",
    },
    {
      english: "Purple",
      portuguese: "Roxo",
      image: "images/13purple.png",
      phrase: "A uva é roxa.",
    },
    {
      english: "Orange",
      portuguese: "Laranja",
      image: "images/13orange.png",
      phrase: "A camisa é laranja.",
    },
    {
      english: "Black",
      portuguese: "Preto",
      image: "images/13black.png",
      phrase: "O carro é preto.",
    },
    {
      english: "White",
      portuguese: "Branco",
      image: "images/13white.png",
      phrase: "O gato é branco.",
    },
    {
      english: "Pink",
      portuguese: "Rosa",
      image: "images/13pink.png",
      phrase: "A flor é rosa.",
    },
    {
      english: "Grey",
      portuguese: "Cinza",
      image: "images/13grey.png",
      phrase: "A nuvem está cinza.",
    },
    {
      english: "Brown",
      portuguese: "Marrom",
      image: "images/13brown.png",
      phrase: "A lama é marrom.",
    },
    {
      english: "Star",
      portuguese: "Estrela",
      image: "images/13star.png",
      phrase: "A estrela está no céu.",
    },
    {
      english: "Circle",
      portuguese: "Círculo",
      image: "images/13circle.png",
      phrase: "A roda é um círculo.",
    },
    {
      english: "Square",
      portuguese: "Quadrado",
      image: "images/13square.png",
      phrase: "A placa é quadrado.",
    },
    {
      english: "Oval",
      portuguese: "Ovo",
      image: "images/13oval.png",
      phrase: "O ovo é amarelo.",
    },
    {
      english: "Rectangle",
      portuguese: "Rêtangulo",
      image: "images/13rectangle.png",
      phrase: "O quadro é um rêtangulo.",
    },
	{
      english: "Heart",
      portuguese: "Coração",
      image: "images/13heart.png",
      phrase: "O coração é vermelho.",
    },
  ],
// ----------------------
  // LEVEL 14 - Numbers (Easy)
  // ----------------------
  14: [
    {
      english: "Zero",
      portuguese: "Zero",
      image: "images/14zero.png",
      phrase: "Está zero graus lá fora.",
    },
    {
      english: "One",
      portuguese: "Um",
      image: "images/14one.png",
      phrase: "Eu tenho uma bola.",
    },
    {
      english: "Two",
      portuguese: "Dois",
      image: "images/14two.png",
      phrase: "Voce tem dois cachorros.",
    },
    {
      english: "Three",
      portuguese: "Três",
      image: "images/14three.png",
      phrase: "Nôs temos três patos.",
    },
    {
      english: "Four",
      portuguese: "Quatro",
      image: "images/14four.png",
      phrase: "Ele tem quatro carrinhos.",
    },
    {
      english: "Five",
      portuguese: "Cinco",
      image: "images/14five.png",
      phrase: "Ela tem cinco bonecas.",
    },
    {
      english: "Six",
      portuguese: "Seis",
      image: "images/14six.png",
      phrase: "Eles tem seis bicicletas.",
    },
    {
      english: "Seven",
      portuguese: "Sete",
      image: "images/14seven.png",
      phrase: "Elas tem sete vestidos.",
    },
    {
      english: "Eight",
      portuguese: "Oito",
      image: "images/14eight.png",
      phrase: "A aranha tem oito pernas.",
    },
    {
      english: "Nine",
      portuguese: "Nove",
      image: "images/14nine.png",
      phrase: "Eu vejo nove círculos.",
    },
    {
      english: "Ten",
      portuguese: "Dez",
      image: "images/14ten.png",
      phrase: "Eu tenho dez dedos.",
    },
  ],
// ----------------------
  // LEVEL 15 - Numbers (Easy)
  // ----------------------
  15: [
    {
      english: "Eleven",
      portuguese: "Onze",
      image: "images/15eleven.png",
      phrase: "Eu tenho onze anos de idade.",
    },
    {
      english: "Twelve",
      portuguese: "Doze",
      image: "images/15twelve.png",
      phrase: "A caixa tem doze ovos.",
    },
    {
      english: "Thirteen",
      portuguese: "Treze",
      image: "images/15thirteen.png",
      phrase: "O ônibus chega na plataforma treze.",
    },
    {
      english: "Fourteen",
      portuguese: "Catorze",
      image: "images/15fourteen.png",
      phrase: "São catorze horas, ou duas da tarde.",
    },
    {
      english: "Fifteen",
      portuguese: "Quinze",
      image: "images/15fifteen.png",
      phrase: "A festa de quinze anos dela foi linda.",
    },
    {
      english: "Sixteen",
      portuguese: "Dezesseis",
      image: "images/15sixteen.png",
      phrase: "O ingresso custa dezesseis reais.",
    },
    {
      english: "Seventeen",
      portuguese: "Dezessete",
      image: "images/15seventeen.png",
      phrase: "Ela nasceu no dia dezessete de junho.",
    },
    {
      english: "Eighteen",
      portuguese: "Dezoito",
      image: "images/15eigteen.png",
      phrase: "Você pode tirar sua carteira de motorista aos dezoito anos.",
    },
    {
      english: "Nineteen",
      portuguese: "Dezenove",
      image: "images/15nineteen.png",
      phrase: "Nós temos dezenove alunos na turma.",
    },
    {
      english: "Twenty",
      portuguese: "Vinte",
      image: "images/15twenty.png",
      phrase: "Eu preciso de vinte minutos para terminar.",
    },
   
  ],
};

// ----------------------
// Profiles stored in localStorage
// ----------------------
const profiles = JSON.parse(localStorage.getItem("profiles")) || [];

// ----------------------
// Intro sequence
// ----------------------
function showIntro() {
  app.innerHTML = `
    <div class="card" id="introCard">
      <h1>The book is on the table.</h1>
      <img class="book-img" src="images/bookontable.png" alt="Book on table">
    </div>
  `;

  setTimeout(() => {
    const card = document.getElementById("introCard");
    card.style.opacity = 0;
    setTimeout(() => {
      app.innerHTML = `
        <div class="card" id="introCard">
          <h1>O livro está na mesa.</h1>
          <img class="book-img" src="images/bookontable.png" alt="Livro na mesa">
        </div>
      `;
    }, 500);
  }, 2000);

  setTimeout(() => {
    showProfileSelectionOrAvatar();
  }, 4500);
}

// ----------------------
// Decide whether to show profile selection or avatar creation
// ----------------------
function showProfileSelectionOrAvatar() {
  if (profiles.length === 0) {
    showAvatarSelection();
  } else {
    showProfileSelection();
  }
}

// ----------------------
// Avatar selection screen
// ----------------------
function showAvatarSelection() {
  const avatars = ["🐶", "🐱", "🐰", "🦊", "🐸", "🦁"];

  app.innerHTML = `
    <div class="card">
      <h2>Escolha seu avatar</h2>
      <div class="row" id="avatarRow"></div>
      <br>
      <button onclick="showProfileSelection()">Voltar para Perfis</button>
    </div>
  `;

  const avatarRow = document.getElementById("avatarRow");

  avatars.forEach((avatar) => {
    const btn = document.createElement("button");
    btn.textContent = avatar;
    btn.style.fontSize = "50px";
    btn.addEventListener("click", () => showNameInput(avatar));
    avatarRow.appendChild(btn);
  });
}

// ----------------------
// Name input screen
// ----------------------
function showNameInput(selectedAvatar) {
  app.innerHTML = `
    <div class="card">
      <h2>Seu avatar: ${selectedAvatar}</h2>
      <p>Digite seu nome:</p>
      <input type="text" id="nameInput" placeholder="Seu nome">
      <br>
      <button id="saveProfileBtn">Salvar Perfil</button>
      <br><br>
      <button onclick="showProfileSelection()">Voltar para Perfis</button>
    </div>
  `;

  document.getElementById("saveProfileBtn").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value || "Criança";
    profiles.push({ name, avatar: selectedAvatar });
    localStorage.setItem("profiles", JSON.stringify(profiles));
    localStorage.setItem("activeProfile", profiles.length - 1);
    showMainMenu();
  });
}

// ----------------------
// Profile selection screen
// ----------------------
function showProfileSelection() {
  let html = `<div class="card"><h2>Escolha seu perfil</h2><div class="row">`;

  profiles.forEach((p, i) => {
    html += `
        <div style="display:flex; flex-direction:column; align-items:center;">
          <button class="profileBtn" data-index="${i}" style="font-size:32px;">${p.avatar} ${p.name}</button>
          <button class="deleteBtn" data-index="${i}" style="margin-top:5px; font-size:16px; background:#ef4444;">🗑️</button>
        </div>
      `;
  });

  html += `</div>`;
  if (profiles.length < 4)
    html += `<br><button id="addProfileBtn">+ Adicionar Perfil</button>`;
  html += `</div>`;

  app.innerHTML = html;

  document.querySelectorAll(".profileBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = btn.dataset.index;
      localStorage.setItem("activeProfile", idx);
      showMainMenu();
    });
  });

  document.querySelectorAll(".deleteBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      profiles.splice(idx, 1);
      localStorage.setItem("profiles", JSON.stringify(profiles));
      const active = parseInt(localStorage.getItem("activeProfile"));
      if (active === idx) localStorage.removeItem("activeProfile");
      showProfileSelection();
    });
  });

  if (profiles.length < 4) {
    document
      .getElementById("addProfileBtn")
      .addEventListener("click", showAvatarSelection);
  }
}

// ----------------------
// Main Menu with levels
// ----------------------
function showMainMenu() {
  const activeProfile = profiles[localStorage.getItem("activeProfile")];

  app.innerHTML = `
   
  <div class="card">
    <h1>Bem-vindo, ${activeProfile.avatar} ${activeProfile.name}!</h1>
    <h2>Escolha uma ilha (nível)</h2>
<div class="levels-container">
    <div class="levels-scroll">
      <button class="level-btn level1-btn" onclick="showLevelMenu(1)">
        <span>Família (Nível 1)</span>
      </button>
      <button class="level-btn level2-btn" onclick="showLevelMenu(2)">
        <span>Animais (Nível 2)</span>
      </button>
      <button class="level-btn level3-btn" onclick="showLevelMenu(3)">
        <span>Jogos (Nível 3)</span>
      </button>
      <button class="level-btn level4-btn" onclick="showLevelMenu(4)">
        <span>Escola (Nível 4)</span>
      </button>
      <button class="level-btn level5-btn" onclick="showLevelMenu(5)">
        <span>Restaurantes (Nível 5)</span>
      </button>
      <button class="level-btn level6-btn" onclick="showLevelMenu(6)">
        <span>Aleatório (Nível 6)</span>
      </button>
      </div>
      <div class="levels-scroll">
      <button class="level-btn level7-btn" onclick="showLevelMenu(7)">
        <span>Família 2 (Nível 7)</span>
      </button>
      <button class="level-btn level8-btn" onclick="showLevelMenu(8)">
        <span>Animais 2(Nível 8)</span>
      </button>
      <button class="level-btn level9-btn" onclick="showLevelMenu(9)">
        <span>Jogos 2(Nível 9)</span>
      </button>
      <button class="level-btn level10-btn" onclick="showLevelMenu(10)">
        <span>Escola 2(Nível 10)</span>
      </button>
      <button class="level-btn level11-btn" onclick="showLevelMenu(11)">
        <span>Restaurantes 2(Nível 11)</span>
      </button>
      <button class="level-btn level12-btn" onclick="showLevelMenu(12)">
        <span>Aleatório 2(Nível 12)</span>
      </button>
    </div>
<div class="levels-scroll">
      <button class="level-btn level13-btn" onclick="showLevelMenu(13)">
        <span>Cores e Formas(Nível 13)</span>
      </button>
      <button class="level-btn level14-btn" onclick="showLevelMenu(14)">
        <span>Números(Nível 14)</span>
      </button>
      <button class="level-btn level15-btn" onclick="showLevelMenu(15)">
        <span>Jogos 2(Nível 15)</span>
      </button>
      <button class="level-btn level10-btn" onclick="showLevelMenu(10)">
        <span>Escola 2(Nível 10)</span>
      </button>
      <button class="level-btn level11-btn" onclick="showLevelMenu(11)">
        <span>Restaurantes 2(Nível 11)</span>
      </button>
      <button class="level-btn level12-btn" onclick="showLevelMenu(12)">
        <span>Aleatório 2(Nível 12)</span>
      </button>
    </div>
<div class="levels-scroll">
      <button class="level-btn level7-btn" onclick="showLevelMenu(7)">
        <span>Família 2 (Nível 7)</span>
      </button>
      <button class="level-btn level8-btn" onclick="showLevelMenu(8)">
        <span>Animais 2(Nível 8)</span>
      </button>
      <button class="level-btn level9-btn" onclick="showLevelMenu(9)">
        <span>Jogos 2(Nível 9)</span>
      </button>
      <button class="level-btn level10-btn" onclick="showLevelMenu(10)">
        <span>Escola 2(Nível 10)</span>
      </button>
      <button class="level-btn level11-btn" onclick="showLevelMenu(11)">
        <span>Restaurantes 2(Nível 11)</span>
      </button>
      <button class="level-btn level12-btn" onclick="showLevelMenu(12)">
        <span>Aleatório 2(Nível 12)</span>
      </button>
    </div>
<div class="levels-scroll">
      <button class="level-btn level7-btn" onclick="showLevelMenu(7)">
        <span>Família 2 (Nível 7)</span>
      </button>
      <button class="level-btn level8-btn" onclick="showLevelMenu(8)">
        <span>Animais 2(Nível 8)</span>
      </button>
      <button class="level-btn level9-btn" onclick="showLevelMenu(9)">
        <span>Jogos 2(Nível 9)</span>
      </button>
      <button class="level-btn level10-btn" onclick="showLevelMenu(10)">
        <span>Escola 2(Nível 10)</span>
      </button>
      <button class="level-btn level11-btn" onclick="showLevelMenu(11)">
        <span>Restaurantes 2(Nível 11)</span>
      </button>
      <button class="level-btn level12-btn" onclick="showLevelMenu(12)">
        <span>Aleatório 2(Nível 12)</span>
      </button>
    </div>
</div>
  <br>
  
  <!-- CORRECTED STORIES BUTTON -->
  <button onclick="generateHistórias()">Histórias</button> 
    <br>
    <br>
    <button onclick="showProfileSelection()">Voltar para Perfis</button>
  </div>
`;
}

// ----------------------
// Level Menu - choose activity
// ----------------------
function showLevelMenu(level) {
  app.innerHTML = `
      <div class="card">
        <h2>Escolha como aprender - Nível ${level}</h2>
        <div class="row" style="gap:15px;">
          <button onclick="generateFlashcards(${level})">📖 Flashcards</button>
          <button onclick="generateMemory(${level})">🧠 Memória</button>
          <button onclick="generateConnect(${level})">🔗 Correspondência</button>
          <button onclick="generateQuiz(${level})">❓ Quiz</button>
          <button onclick="generateWriting(${level})">✍️ Escrita</button>
          <button onclick="generateGuessTheWord(${level})">🔤 Descubra a Palavra</button>
        </div>
        <br>
        <button onclick="showMainMenu()">Voltar</button>
      </div>
    `;
}
// ----------------------
// FLASHCARDS
// ----------------------
function generateFlashcards(level) {
  app.innerHTML = `
      <div class="full-screen-game">
        <h2>Flashcards - Nível ${level}</h2>
        <div id="flashcard-container"></div>
        <div style="margin-top:20px;">
          <button id="nextBtn">Próxima</button>
          <button onclick="showLevelMenu(${level})">Voltar</button>
        </div>
      </div>
    `;
  initFlashcards(level);
}

function initFlashcards(level) {
  const words = allLevelsWords[level] || [];
  let currentIndex = 0;

  function renderCard() {
    const word = words[currentIndex];
    const container = document.getElementById("flashcard-container");

    container.innerHTML = `
      <div class="flashcard" id="flashcard">
        <div class="audio-btn-container">
          <button id="playAudioBtn" class="audio-btn">🔊</button>
        </div>
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <img src="${word.image}" alt="${word.english}">
            <p>${word.english}</p>
          </div>
          <div class="flashcard-back">
            <p>${word.portuguese}</p>
            <p style="font-size:1rem; margin-top:10px;">${word.phrase || ""}</p>
          </div>
        </div>
      </div>
    `;

    const card = document.getElementById("flashcard");
    const playBtn = document.getElementById("playAudioBtn");

    function updateButtonColor() {
      if (card.classList.contains("flipped")) {
        playBtn.classList.add("portuguese");
        playBtn.classList.remove("english");
      } else {
        playBtn.classList.add("english");
        playBtn.classList.remove("portuguese");
      }
    }

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      updateButtonColor();
    });

    updateButtonColor();

    playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isFlipped = card.classList.contains("flipped");
      const lang = isFlipped ? "pt" : "en";
      const audioPath = `audio/audio/audio_files/${word.english}_${lang}.mp3`;

      const audio = new Audio(audioPath);

      audio.onerror = () => {
        playBtn.textContent = "🚫";
        playBtn.disabled = true;
      };

      audio.play().catch(() => {
        playBtn.textContent = "🚫";
        playBtn.disabled = true;
      });
    });
  }

  renderCard();

  document.getElementById("nextBtn").onclick = () => {
    currentIndex++;
    if (currentIndex >= words.length) currentIndex = 0;
    renderCard();
  };
}

// ----------------------
// MEMORY MATCH GAME
// ----------------------
function generateMemory(level) {
  app.innerHTML = `
    <div class="full-screen-game">
      <h2 style="text-align:center;">Memória - Nível ${level}</h2>
      <div id="memory-grid" class="memory-grid"></div>
      <button onclick="initMemory(${level}, true)">Novo Jogo</button>
      <button onclick="showLevelMenu(${level})">Voltar</button>
    </div>
  `;
  initMemory(level);
}

function shuffleCards(cards) {
  let shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  for (let i = 0; i < shuffled.length - 1; i++) {
    if (shuffled[i].matchId === shuffled[i + 1].matchId) {
      let swapIndex = (i + 2) % shuffled.length;
      [shuffled[i + 1], shuffled[swapIndex]] = [
        shuffled[swapIndex],
        shuffled[i + 1],
      ];
    }
  }
  return shuffled;
}

function initMemory(level, reset = false) {
  const words = [...allLevelsWords[level]];
  const numWords = level + 3;

  const existingPopup = document.getElementById("win-popup");
  if (existingPopup) existingPopup.remove();

  const chosen = words.sort(() => Math.random() - 0.5).slice(0, numWords);

  let cards = [];
  chosen.forEach((w) => {
    cards.push({
      type: "eng",
      matchId: w.english,
      content: `
        <img src="${w.image}" alt="${w.english}">
        <p>${w.english}</p>
      `,
    });
    cards.push({
      type: "pt",
      matchId: w.english,
      content: `
        <div class="pt-text">
          <p><strong>${w.portuguese}</strong></p>
          <p class="phrase">${w.phrase}</p>
        </div>
      `,
    });
  });

  cards = shuffleCards(cards);

  const grid = document.getElementById("memory-grid");
  grid.innerHTML = "";
  let first = null;
  let matches = 0;

  cards.forEach((card) => {
    const div = document.createElement("div");
    div.className = "memory-card";
    div.dataset.matchId = card.matchId;
    div.dataset.type = card.type;

    div.innerHTML = `
      <div class="card-inner">
        <div class="card-back"></div>
        <div class="card-front">
          ${card.content}
          <button class="audio-btn ${card.type}-btn" data-lang="${card.type}">🔊</button>
        </div>
      </div>
    `;

    // flip logic
    div.addEventListener("click", (e) => {
      if (e.target.classList.contains("audio-btn")) return;
      if (
        div.classList.contains("flipped") ||
        div.classList.contains("matched")
      )
        return;

      div.classList.add("flipped");

      if (!first) {
        first = div;
      } else {
        if (
          first.dataset.matchId === div.dataset.matchId &&
          first.dataset.type !== div.dataset.type
        ) {
          first.classList.add("matched");
          div.classList.add("matched");
          matches++;
          if (matches === numWords) showWinMessage(level);
          first = null;
        } else {
          const second = div;
          setTimeout(() => {
            first.classList.remove("flipped");
            second.classList.remove("flipped");
            first = null;
          }, 800);
        }
      }
    });

    // audio button
    div.querySelector(".audio-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      const lang = e.target.dataset.lang === "eng" ? "en" : "pt";
      const audioPath = `audio/audio/audio_files/${card.matchId}_${lang}.mp3`;
      const audio = new Audio(audioPath);
      audio.play().catch(() => console.log("Audio not found:", audioPath));
    });

    grid.appendChild(div);
  });
}

function showWinMessage(level) {
  let popup = document.createElement("div");
  popup.id = "win-popup";
  popup.className = "win-popup";
  popup.innerHTML = `
    <div class="win-popup-content">
      <h2>🎉 Você ganhou! 🎉</h2>
      <button id="newGameBtn">Novo Jogo</button>
    </div>
  `;
  document.body.appendChild(popup);
  document.getElementById("newGameBtn").addEventListener("click", () => {
    popup.remove();
    initMemory(level, true);
  });
  popup.classList.add("show");
}

// ----------------------
// CONNECT WORDS (Correspondência)
// ----------------------

function generateConnect(level) {
  app.innerHTML = `
    <div class="connect-game">
      <h2>Correspondência - Nível ${level}</h2>
      <p>Ligue as palavras em Inglês com suas correspondentes em Português</p>

      <div id="connect-wrapper" class="connect-wrapper">
      <svg id="connect-lines" width="100%" height="100%"></svg>
        <div id="connect-columns">
          <div class="connect-col" id="col-english"></div>
          <div class="connect-col" id="col-portuguese"></div>
        </div>
      </div>

      <div class="button-row">
        <button onclick="generateConnect(${level})">Novo Jogo</button>
        <button onclick="showLevelMenu(${level})">Voltar</button>
      </div>
    </div>

    <div id="win-popup" class="win-popup">
      <div class="win-popup-content">
        <h2>🎉 Você Ganhou! 🎉</h2>
        <button onclick="generateConnect(${level})">Novo Jogo</button>
      </div>
    </div>
  `;

  initConnect(level);
}

function initConnect(level) {
  const words = [...(allLevelsWords[level] || [])];

  const count = Math.min(5, words.length);
  const chosen = shuffle(words).slice(0, count);

  const english = shuffle([...chosen]);
  const portuguese = shuffle([...chosen]);

  const colEnglish = document.getElementById("col-english");
  const colPortuguese = document.getElementById("col-portuguese");
  const svg = document.getElementById("connect-lines");
  const wrapper = document.getElementById("connect-wrapper");

  colEnglish.innerHTML = "";
  colPortuguese.innerHTML = "";
  svg.innerHTML = "";

  let matches = 0;
  const totalMatches = chosen.length;

  english.forEach((w) => {
    const card = document.createElement("div");
    card.className = "connect-card english-card";
    card.dataset.matchId = w.english;
    card.dataset.lang = "eng";

    card.innerHTML = `
      <p class="word">${w.english}</p>
      <div class="audio-btn-container">
        <button class="audio-btn english" aria-label="Play English audio">🔊</button>
      </div>
    `;

    const btn = card.querySelector(".audio-btn");
    btn.addEventListener("pointerdown", (e) => e.stopPropagation());
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      playAudio(w.english, "en");
    });

    colEnglish.appendChild(card);
  });

  portuguese.forEach((w) => {
    const card = document.createElement("div");
    card.className = "connect-card portuguese-card";
    card.dataset.matchId = w.english;
    card.dataset.lang = "pt";

    card.innerHTML = `
      ${
        w.image
          ? `<img class="card-img" src="${w.image}" alt="${w.portuguese}">`
          : ""
      }
      <p class="word"><strong>${w.portuguese}</strong></p>
      <p class="phrase">${w.phrase || ""}</p>
      <div class="audio-btn-container">
        <button class="audio-btn portuguese" aria-label="Play Portuguese audio">🔊</button>
      </div>
    `;

    const btn = card.querySelector(".audio-btn");
    btn.addEventListener("pointerdown", (e) => e.stopPropagation());
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      playAudio(w.english, "pt");
    });

    colPortuguese.appendChild(card);
  });

  // ----------------------
  // Drag-to-connect logic
  // ----------------------
  let startCard = null;
  let tempLine = null;

  document.querySelectorAll(".connect-card").forEach((card) => {
    card.addEventListener("pointerdown", (e) => {
      if (card.classList.contains("matched")) return;

      startCard = card;

      const p1 = anchorPoint(card, wrapper);
      tempLine = makeLine(p1.x, p1.y, p1.x, p1.y, "temp-line");
      svg.appendChild(tempLine);

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp, { once: true });
    });
  });

  function onPointerMove(e) {
    if (!tempLine) return;
    const wr = wrapper.getBoundingClientRect();
    const x = e.clientX - wr.left;
    const y = e.clientY - wr.top;
    tempLine.setAttribute("x2", x);
    tempLine.setAttribute("y2", y);
  }

  function onPointerUp(e) {
    window.removeEventListener("pointermove", onPointerMove);

    if (!startCard || !tempLine) {
      startCard = null;
      tempLine = null;
      return;
    }

    const upEl = document.elementFromPoint(e.clientX, e.clientY);
    const endCard = upEl?.closest(".connect-card");

    if (
      !endCard ||
      endCard === startCard ||
      endCard.classList.contains("matched")
    ) {
      tempLine.remove();
      tempLine = null;
      startCard = null;
      return;
    }

    if (startCard.dataset.lang === endCard.dataset.lang) {
      tempLine.remove();
      tempLine = null;
      startCard = null;
      return;
    }

    const isCorrect = startCard.dataset.matchId === endCard.dataset.matchId;

    if (isCorrect) {
      const a = anchorPoint(startCard, wrapper);
      const b = anchorPoint(endCard, wrapper);
      tempLine.setAttribute("x1", a.x);
      tempLine.setAttribute("y1", a.y);
      tempLine.setAttribute("x2", b.x);
      tempLine.setAttribute("y2", b.y);
      tempLine.classList.remove("temp-line");
      tempLine.classList.add("correct");

      startCard.classList.add("matched");
      endCard.classList.add("matched");
      matches++;

      if (matches === totalMatches) {
        document.getElementById("win-popup")?.classList.add("show");
      }

      tempLine = null;
      startCard = null;
    } else {
      // Wrong: shake both, turn red, and remove gray line immediately
      startCard.classList.add("wrong-match");
      endCard.classList.add("wrong-match");
      tempLine.remove();
      tempLine = null;

      const clearWrong = (el) => {
        el.classList.add("wrong-match");
      };

      // Listen for the end of the shake animation on the starting card
      startCard.addEventListener("animationend", () => clearWrong(startCard), {
        once: true,
      });
      // Listen for the end of the shake animation on the ending card
      endCard.addEventListener("animationend", () => clearWrong(endCard), {
        once: true,
      });

      startCard = null;
    }
  }
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function makeLine(x1, y1, x2, y2, cls) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("class", cls);
  return line;
}

function anchorPoint(card, wrapperEl) {
  const r = card.getBoundingClientRect();
  const wr = wrapperEl.getBoundingClientRect();
  return {
    x: r.left - wr.left + r.width / 2,
    y: r.top - wr.top + r.height / 2,
  };
}

function playAudio(englishWord, lang) {
  const src = `audio/audio/audio_files/${englishWord}_${lang}.mp3`;
  const a = new Audio(src);
  a.play().catch(() => console.warn("Missing audio:", src));
}

function showWinMessage(level) {
  let popup = document.createElement("div");
  popup.id = "win-popup";
  popup.className = "win-popup";
  popup.innerHTML = `
    <div class="win-popup-content">
      <h2>🎉 Você ganhou! 🎉</h2>
      <button id="newGameBtn">Novo Jogo</button>
    </div>
  `;
  document.body.appendChild(popup);
  document.getElementById("newGameBtn").addEventListener("click", () => {
    popup.remove();
    initMemory(level, true);
  });
  popup.classList.add("show");
}

// ----------------------
// QUIZ (Multiple Choice)
// ----------------------
/**
 * Removes diacritics (accents) from a string.
 * @param {string} text The string to sanitize.
 * @returns {string} The sanitized string.
 */
function sanitizeString(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function generateQuiz(level) {
  app.innerHTML = `
      <div class="full-screen-game">
        <h2 style="text-align:center;">Quiz - Nível ${level}</h2>
        <div id="quiz-container"></div>
        <div class="quiz-footer">
          <button onclick="showLevelMenu(${level})">Voltar</button>
        </div>
      </div>
    `;
  initQuiz(level);
}

function initQuiz(level) {
  const words = allLevelsWords[level] || [];
  const container = document.getElementById("quiz-container");
  let questions = shuffle([...words]);
  let index = 0;
  let correctCount = 0;

  function showNextQuestion() {
    if (index >= questions.length) {
      const percent = Math.round((correctCount / questions.length) * 100);
      const color = percent >= 80 ? "#22c55e" : "#ef4444";
      container.innerHTML = `
          <div class="card quiz-summary">
            <h3>Fim do Jogo!</h3>
            <p style="color:${color}; font-size:1.5rem; font-weight:bold;">
              Você acertou ${correctCount} de ${questions.length} (${percent}%)
            </p>
            <p>${
              percent >= 80
                ? "Ótimo trabalho! Você é um expert! 🎉"
                : "Continue praticando, você vai conseguir! 👍"
            }</p>
          </div>
        `;
      return;
    }

    const word = questions[index];
    const questionTypes = [
      "translation",
      "fill-in-the-blank",
      "find-the-image",
    ];
    const type =
      questionTypes[Math.floor(Math.random() * questionTypes.length)];

    switch (type) {
      case "translation":
        renderTranslationQuestion(word, words, () => {
          index++;
          showNextQuestion();
        });
        break;
      case "fill-in-the-blank":
        renderFillInBlankQuestion(word, () => {
          index++;
          showNextQuestion();
        });
        break;
      case "find-the-image":
        renderFindImageQuestion(word, words, () => {
          index++;
          showNextQuestion();
        });
        break;
    }
  }

  function renderTranslationQuestion(word, allWords, next) {
    let options = [word.portuguese];
    while (options.length < 4) {
      const rand =
        allWords[Math.floor(Math.random() * allWords.length)].portuguese;
      if (!options.includes(rand)) options.push(rand);
    }
    options = shuffle(options);

    container.innerHTML = `
      <div class="quiz-card card">
        <img src="${word.image}" alt="${word.english}" class="quiz-image">
        <p class="quiz-prompt">Qual é a tradução de "${word.english}"?</p>
        <div class="quiz-options">
          ${options
            .map(
              (o) =>
                `<button class="quiz-option" data-answer="${o}">${o}</button>`
            )
            .join("")}
        </div>
      </div>
    `;
    setupQuizButtons(word.portuguese, next);
  }

  function renderFillInBlankQuestion(word, next) {
    if (!word.phrase) {
      renderTranslationQuestion(word, words, next);
      return;
    }

    const phraseParts = word.phrase
      .toLowerCase()
      .split(word.portuguese.toLowerCase());
    container.innerHTML = `
      <div class="quiz-card card">
        <p class="quiz-prompt">Complete a frase (inglês: ${word.english}):</p>
        <div class="fill-in-blank-container">
          <p class="phrase-text">${phraseParts[0]}<span class="blank">____</span>${phraseParts[1]}</p>
          <input type="text" id="fill-input">
          <button id="check-fill">Verificar</button>
        </div>
      </div>
    `;

    document.getElementById("check-fill").onclick = () => {
      const input = document.getElementById("fill-input").value.trim();
      const sanitizedInput = sanitizeString(input);
      const sanitizedCorrect = sanitizeString(word.portuguese);
      const isCorrect = sanitizedInput === sanitizedCorrect;

      if (isCorrect) {
        const isPerfectMatch =
          input.toLowerCase() === word.portuguese.toLowerCase();
        correctCount++;
        if (isPerfectMatch) {
          container.querySelector(
            ".blank"
          ).innerHTML = `<span style="color:#22c55e;">${word.portuguese} ✅</span>`;
        } else {
          container.querySelector(
            ".blank"
          ).innerHTML = `<span style="color:#22c55e;">${word.portuguese} ✅</span>`;
          alert(`Correto! Mas não se esqueça do acento: "${word.portuguese}"`);
        }
        setTimeout(next, 1500);
      } else {
        container.querySelector(
          ".blank"
        ).innerHTML = `<span style="color:#ef4444;">❌</span>`;
        alert(`Incorreto. A resposta é "${word.portuguese}".`);
        setTimeout(next, 1500);
      }
    };
  }

  function renderFindImageQuestion(word, allWords, next) {
    let options = [word];
    while (options.length < 4) {
      const rand = allWords[Math.floor(Math.random() * allWords.length)];
      if (!options.includes(rand)) options.push(rand);
    }
    options = shuffle(options);

    container.innerHTML = `
      <div class="quiz-card card">
        <p class="quiz-prompt">Qual imagem representa "${word.portuguese}"?</p>
        <div class="quiz-options">
          ${options
            .map(
              (o) => `
            <button class="quiz-option image-option" data-answer="${o.english}">
              <img src="${o.image}" alt="${o.portuguese}" class="quiz-option-image">
            </button>
          `
            )
            .join("")}
        </div>
      </div>
    `;
    setupQuizButtons(word.english, next);
  }

  function setupQuizButtons(correctAnswer, next) {
    const optionButtons = container.querySelectorAll(".quiz-option");
    const sanitizedCorrect = sanitizeString(correctAnswer);
    optionButtons.forEach((btn) => {
      btn.onclick = () => {
        optionButtons.forEach((b) => (b.disabled = true));
        const userAnswer = btn.dataset.answer;
        const sanitizedUserAnswer = sanitizeString(userAnswer);
        const isCorrect = sanitizedUserAnswer === sanitizedCorrect;

        if (isCorrect) {
          btn.classList.add("correct");
          correctCount++;
        } else {
          btn.classList.add("incorrect");
          container
            .querySelector(`[data-answer="${correctAnswer}"]`)
            .classList.add("correct-highlight");
        }
        setTimeout(next, 1500);
      };
    });
  }

  showNextQuestion();
}

// ----------------------
// WRITING PRACTICE
// ----------------------
/**
 * Removes diacritics (accents) from a string.
 * @param {string} text The string to sanitize.
 * @returns {string} The sanitized string.
 */
function sanitizeString(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Helper function to check if a color matches, accounting for small variations due to anti-aliasing.
// Increased tolerance for kid-friendly tracing.
function colorsMatch(pixelColor, targetColor, tolerance = 30) {
  if (
    !pixelColor ||
    !targetColor ||
    pixelColor.length < 3 ||
    targetColor.length < 3
  )
    return false;
  return (
    Math.abs(pixelColor[0] - targetColor[0]) <= tolerance &&
    Math.abs(pixelColor[1] - targetColor[1]) <= tolerance &&
    Math.abs(pixelColor[2] - targetColor[2]) <= tolerance
  );
}

// Define the colors used in drawing for comparison
const USER_STROKE_COLOR_RGB = [74, 144, 226]; // #4A90E2
const OUTLINE_COLOR_RGB = [204, 204, 204]; // #cccccc
const BACKGROUND_COLOR_RGB = [248, 248, 248]; // #f8f8f8 (canvas-wrapper background)

function generateWriting(level) {
  app.innerHTML = `
      <div class="full-screen-game">
        <h2 style="text-align:center;">Escrita - Nível ${level}</h2>
        <div class="writing-card card">
          <p class="writing-instruction" id="writing-instruction"></p>
          <img id="writing-image" class="writing-small-image" src="" alt="Word image">

          <div class="canvas-wrapper">
            <canvas id="tracingCanvas"></canvas>
            <div id="tracing-feedback-container" class="tracing-feedback-container" style="display: none;">
                <p id="tracingFeedbackText" class="feedback-message"></p>
            </div>
          </div>

          <div class="writing-controls">
            <button id="clearCanvasBtn">Limpar</button>
            <button id="finishedTracingBtn">Terminei!</button>
            <button id="nextWordBtn">Próxima Palavra</button>
          </div>
        </div>
        <button onclick="showLevelMenu(${level})">Voltar</button>

        <!-- Completion Popup -->
        <div id="writing-completion-popup" class="win-popup">
            <div class="win-popup-content">
                <h2>🎉 Parabéns! 🎉</h2>
                <p>Você completou todas as palavras deste nível!</p>
                <button id="restartWritingBtn">Começar Novamente</button>
                <button onclick="showLevelMenu(${level})" style="background-color: #ef4444;">Voltar ao Menu</button>
            </div>
        </div>
      </div>
    `;
  initWriting(level);
}

function initWriting(level) {
  const words = allLevelsWords[level] || [];
  const canvas = document.getElementById("tracingCanvas");
  const ctx = canvas.getContext("2d");
  const writingInstructionEl = document.getElementById("writing-instruction");
  const writingImageEl = document.getElementById("writing-image");
  const clearButton = document.getElementById("clearCanvasBtn");
  const finishedTracingBtn = document.getElementById("finishedTracingBtn");
  const nextButton = document.getElementById("nextWordBtn");
  const completionPopup = document.getElementById("writing-completion-popup");
  const restartButton = document.getElementById("restartWritingBtn");

  const tracingFeedbackContainer = document.getElementById(
    "tracing-feedback-container"
  );
  const tracingFeedbackText = document.getElementById("tracingFeedbackText");

  let currentIndex = 0;
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let perfectOutlineImageData = null; // To store the pixel data of the perfect outline

  // Set initial canvas size and make it responsive
  function setupCanvas() {
    const wrapper = canvas.parentElement;
    canvas.width = wrapper.clientWidth;
    canvas.height = wrapper.clientHeight || 250; // Increased default height
    if (canvas.height < 200) canvas.height = 200; // Minimum height
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 15; // Pen stroke thickness for user drawing
    ctx.strokeStyle = `rgb(${USER_STROKE_COLOR_RGB[0]}, ${USER_STROKE_COLOR_RGB[1]}, ${USER_STROKE_COLOR_RGB[2]})`; // Blue color for user's tracing
    redrawWordOutline();
  }

  function clearDrawing() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear entire canvas
    redrawWordOutline(); // Redraw the word outline and lines
    hideFeedback(); // Hide any existing feedback
  }

  function redrawWordOutline() {
    const word = words[currentIndex];
    if (!word) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      writingInstructionEl.innerHTML = "";
      writingImageEl.style.display = "none";
      return;
    }

    // --- Prepare context for outline drawing ---
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas fully

    const targetWord = word.portuguese;
    const fullPhrase = word.phrase;

    writingInstructionEl.innerHTML = `"${fullPhrase}"`; // Sentence at the top
    writingImageEl.src = word.image;
    writingImageEl.alt = word.english;
    writingImageEl.style.display = "block";

    // --- Fixed reference line (bottom bold line) ---
    const baseLineY = canvas.height * 0.8; // Bottom bold line for tracing

    // --- Calculate Max Font Size ---
    const maxTextWidth = canvas.width * 0.9;
    // Aim for capital letters to be a significant portion of the canvas height
    const idealCapHeightTarget = canvas.height * 0.55; // Target capital height for font fitting

    let fontSize = 10;
    let textMetrics;
    let bestFontSize = 10;

    // Loop to find the largest fontSize that fits both width and the target capital height
    do {
      fontSize++;
      ctx.font = `bold ${fontSize}px "Comic Sans MS"`;
      textMetrics = ctx.measureText(targetWord);
      // Approximation for capital height
      const currentCapHeight =
        textMetrics.actualBoundingBoxAscent || fontSize * 0.7;

      if (
        textMetrics.width < maxTextWidth &&
        currentCapHeight <= idealCapHeightTarget * 1.1
      ) {
        // Allow slight overshoot
        bestFontSize = fontSize;
      } else {
        break;
      }
    } while (fontSize < canvas.height); // Prevent infinite loop

    // Apply the best fitting font size
    ctx.font = `bold ${bestFontSize}px "Comic Sans MS"`;
    textMetrics = ctx.measureText(targetWord); // Re-measure with final bestFontSize

    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic"; // Alphabetic baseline is key for precise positioning
    const textX = canvas.width / 2;
    const textY = baseLineY; // Set the baseline of the text to the bottom bold line

    // --- Draw Tracing Lines based on Font Metrics ---
    const boldLineThickness = 4;
    const outlineLineThickness = 2;

    // Draw Bottom Bold Line (explicitly drawn at textY)
    ctx.strokeStyle = `rgb(${OUTLINE_COLOR_RGB.join(",")})`;
    ctx.lineWidth = boldLineThickness;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(0, baseLineY);
    ctx.lineTo(canvas.width, baseLineY);
    ctx.stroke();

    // Draw Top Bold Line (for capitals)
    // Positioned relative to the baseline using actualBoundingBoxAscent
    const capLineY =
      textY - (textMetrics.actualBoundingBoxAscent || bestFontSize * 0.7);
    ctx.beginPath();
    ctx.moveTo(0, capLineY);
    ctx.lineTo(canvas.width, capLineY);
    ctx.stroke();

    // Draw Dashed Middle Line (for x-height of lowercase)
    // Positioned relative to the baseline using emHeightAscent (approximation for x-height)
    const xHeight = textMetrics.emHeightAscent || bestFontSize * 0.35;
    const xLineY = textY - xHeight;
    ctx.lineWidth = outlineLineThickness;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, xLineY);
    ctx.lineTo(canvas.width, xLineY);
    ctx.stroke();
    ctx.setLineDash([]); // Reset line dash

    // --- Store Perfect Outline Pixels ---
    // Use an offscreen canvas to draw only the word outline
    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;
    const offscreenCtx = offscreenCanvas.getContext("2d");

    // Draw the word outline on the offscreen canvas for reference
    offscreenCtx.font = ctx.font; // Use the same font settings
    offscreenCtx.textAlign = ctx.textAlign;
    offscreenCtx.textBaseline = ctx.textBaseline;
    offscreenCtx.strokeStyle = `rgb(${OUTLINE_COLOR_RGB.join(",")})`;
    offscreenCtx.lineWidth = outlineLineThickness; // Use the same outline thickness for word
    offscreenCtx.globalAlpha = 1.0; // Ensure full opacity for reference

    offscreenCtx.strokeText(targetWord, textX, textY);
    perfectOutlineImageData = offscreenCtx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );

    // --- Draw Word Outline on Main Canvas (faded visual guide) ---
    ctx.strokeStyle = `rgb(${OUTLINE_COLOR_RGB.join(",")})`;
    ctx.lineWidth = outlineLineThickness; // Thinner outline for the visual guide
    ctx.fillStyle = "rgba(255, 255, 255, 0.0)"; // Transparent fill for the guide
    ctx.globalAlpha = 0.6; // Faded visual guide

    ctx.strokeText(targetWord, textX, textY);
    ctx.globalAlpha = 1.0; // Reset alpha
    ctx.strokeStyle = `rgb(${USER_STROKE_COLOR_RGB[0]}, ${USER_STROKE_COLOR_RGB[1]}, ${USER_STROKE_COLOR_RGB[2]})`; // User stroke color
    ctx.lineWidth = 15; // User stroke thickness
    ctx.restore(); // Restore previous drawing state
  }

  // Adjust y-coordinate for drawing to align better with cursor tip
  const Y_OFFSET_FOR_CURSOR = ctx.lineWidth / 2; // Offset by half the line width downwards

  function startDrawing(e) {
    if (tracingFeedbackContainer.style.display === "flex") return; // Don't draw if feedback is active
    isDrawing = true;
    let [x, y] = getPointerPos(e);
    lastX = x;
    lastY = y + Y_OFFSET_FOR_CURSOR; // Apply offset
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
  }

  function draw(e) {
    if (!isDrawing) return;
    if (tracingFeedbackContainer.style.display === "flex") return; // Don't draw if feedback is active
    e.preventDefault(); // Prevent scrolling/zooming on touch devices
    let [x, y] = getPointerPos(e);
    x = x;
    y = y + Y_OFFSET_FOR_CURSOR; // Apply offset
    ctx.lineTo(x, y);
    ctx.stroke();
    [lastX, lastY] = [x, y];
  }

  function stopDrawing() {
    isDrawing = false;
    ctx.closePath();
  }

  function getPointerPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return [clientX - rect.left, clientY - rect.top];
  }

  function showCompletionPopup() {
    completionPopup.classList.add("show");
  }

  function hideCompletionPopup() {
    completionPopup.classList.remove("show");
  }

  function showFeedback(message, isCorrect) {
    tracingFeedbackText.textContent = message;
    tracingFeedbackText.style.color = isCorrect ? "#34d399" : "#ef4444"; // Green or Red
    tracingFeedbackContainer.style.display = "flex";
    // Temporarily disable controls while feedback is shown
    clearButton.disabled = true;
    finishedTracingBtn.disabled = true;
    nextButton.disabled = true;
  }

  function hideFeedback() {
    tracingFeedbackContainer.style.display = "none";
    tracingFeedbackText.textContent = "";
    // Re-enable controls
    clearButton.disabled = false;
    finishedTracingBtn.disabled = false;
    nextButton.disabled = false;
  }

  function checkTracingAccuracy() {
    if (!perfectOutlineImageData) {
      showFeedback(
        "Erro: Não foi possível carregar o contorno para verificação.",
        false
      );
      return;
    }

    const currentImageData = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );
    const outlineData = perfectOutlineImageData.data; // Data from offscreen canvas (outline only)
    const currentData = currentImageData.data; // Data from main canvas (user drawing + outline)

    let totalOutlinePixels = 0;
    let tracedOutlinePixels = 0; // User drew over outline (or very close to it)
    let excessDrawingPixels = 0; // User drew outside outline

    const bufferPixels = 2; // Expand the outline check by this many pixels around the reference outline

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const index = (y * canvas.width + x) * 4;

        const currentR = currentData[index];
        const currentG = currentData[index + 1];
        const currentB = currentData[index + 2];
        const currentA = currentData[index + 3];

        // Is this a user drawing pixel? Check color and alpha
        const isUserDrawingPixel =
          currentA > 0 &&
          colorsMatch([currentR, currentG, currentB], USER_STROKE_COLOR_RGB);

        // Check if this pixel is part of the outline or within the buffer around it
        let isOutlineArea = false;
        for (let dy = -bufferPixels; dy <= bufferPixels; dy++) {
          for (let dx = -bufferPixels; dx <= bufferPixels; dx++) {
            const checkX = x + dx;
            const checkY = y + dy;
            if (
              checkX >= 0 &&
              checkX < canvas.width &&
              checkY >= 0 &&
              checkY < canvas.height
            ) {
              const outlinePixelIndex = (checkY * canvas.width + checkX) * 4;
              // Critically, check alpha from perfectOutlineImageData to see if it's an actual outline pixel
              if (outlineData[outlinePixelIndex + 3] > 0) {
                // If alpha > 0, it's part of the outline
                isOutlineArea = true;
                break;
              }
            }
          }
          if (isOutlineArea) break;
        }

        if (isOutlineArea) {
          totalOutlinePixels++; // Count pixels in the expanded outline area
          if (isUserDrawingPixel) {
            tracedOutlinePixels++;
          }
        } else {
          // This pixel is outside the expanded outline area from the reference.
          if (isUserDrawingPixel) {
            excessDrawingPixels++;
          }
        }
      }
    }

    const tracingScore =
      totalOutlinePixels > 0
        ? (tracedOutlinePixels / totalOutlinePixels) * 100
        : 0;
    // Calculate excess drawing relative to the total potential outline area.
    // This penalizes drawing a lot outside, even if little is traced.
    const excessRatio =
      totalOutlinePixels > 0
        ? (excessDrawingPixels / totalOutlinePixels) * 100
        : 0;

    // --- NEW Adjusted Forgiveness Parameters for balanced experience ---
    // These thresholds are carefully chosen to allow for child-like inaccuracies
    // while still differentiating between an attempt to trace and pure scribbling.

    // Excellent: Good coverage, minimal to moderate excess.
    const EXCELLENT_MIN_TRACING_PERCENT = 40; // Needs to cover at least 40% of the outline
    const EXCELLENT_MAX_EXCESS_PERCENT = 80; // Excess drawing should not be more than 80% of the outline's total pixel area

    // Good work: Moderate coverage, more allowance for excess.
    const GOOD_MIN_TRACING_PERCENT = 20; // Needs to cover at least 20% of the outline
    const GOOD_MAX_EXCESS_PERCENT = 150; // Excess drawing can be up to 150% of the outline's total pixel area

    // Fail / Scribble: Very low coverage, or extremely high excess.
    // Anything below GOOD_MIN_TRACING_PERCENT or above GOOD_MAX_EXCESS_PERCENT falls here.

    if (
      tracingScore >= EXCELLENT_MIN_TRACING_PERCENT &&
      excessRatio <= EXCELLENT_MAX_EXCESS_PERCENT
    ) {
      showFeedback("Excelente! Você traçou muito bem! 🎉", true);
    } else if (
      tracingScore >= GOOD_MIN_TRACING_PERCENT &&
      excessRatio <= GOOD_MAX_EXCESS_PERCENT
    ) {
      showFeedback(
        "Bom trabalho! Continue praticando para cobrir melhor o contorno e ficar nas linhas. 👍",
        true
      );
    } else {
      showFeedback(
        "Quase lá! Tente cobrir mais a palavra e ficar dentro das linhas. 🧐",
        false
      );
    }

    setTimeout(() => {
      hideFeedback();
    }, 3000); // Hide feedback after 3 seconds
  }

  function showNextWord() {
    currentIndex++;
    if (currentIndex >= words.length) {
      showCompletionPopup();
      // Hide all controls when finished
      clearButton.style.display = "none";
      finishedTracingBtn.style.display = "none";
      nextButton.style.display = "none";
      canvas.style.display = "none"; // Hide canvas
      writingInstructionEl.style.display = "none";
      writingImageEl.style.display = "none";
      return;
    }
    clearDrawing(); // Clears user drawing and redraws new word outline
    // Ensure tracing buttons are visible for the new word
    finishedTracingBtn.style.display = "inline-block";
    clearButton.style.display = "inline-block";
    nextButton.style.display = "inline-block";
    canvas.style.display = "block";
    writingInstructionEl.style.display = "block";
    writingImageEl.style.display = "block";
  }

  function restartWriting() {
    currentIndex = 0; // Reset to the first word
    hideCompletionPopup(); // Hide the popup
    clearDrawing(); // Clear canvas and redraw the first word
    // Re-enable and show buttons/canvas
    finishedTracingBtn.style.display = "inline-block";
    clearButton.style.display = "inline-block";
    nextButton.style.display = "inline-block";
    canvas.style.display = "block";
    writingInstructionEl.style.display = "block";
    writingImageEl.style.display = "block";
  }

  // Event Listeners
  canvas.addEventListener("pointerdown", startDrawing);
  canvas.addEventListener("pointermove", draw);
  canvas.addEventListener("pointerup", stopDrawing);
  canvas.addEventListener("pointerleave", stopDrawing);

  clearButton.addEventListener("click", clearDrawing);
  finishedTracingBtn.addEventListener("click", checkTracingAccuracy);
  nextButton.addEventListener("click", showNextWord);
  restartButton.addEventListener("click", restartWriting);

  // Initial setup
  window.addEventListener("resize", setupCanvas);
  setupCanvas();
}

// ----------------------
// NEW: DESCUBRA A PALAVRA (Guess The Word)
// ----------------------
// Ensure sanitizeString helper is present in your global JS scope
/**
 * Removes diacritics (accents) from a string.
 * @param {string} text The string to sanitize.
 * @returns {string} The sanitized string.
 */
function sanitizeString(text) {
  // This version of sanitizeString will ONLY be used where truly accent-insensitive comparison is needed.
  // For the guessing game itself, we largely work with original characters.
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Ensure shuffle helper is present in your global JS scope
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- Brazilian Landmarks Data for Completion Popup (Keep this globally accessible) ---
const brazilianLandmarks = [
  {
    name: "Cristo Redentor",
    image: "images/christ.jpg",
    fact: "O Cristo Redentor no Rio de Janeiro é uma das Sete Novas Maravilhas do Mundo!",
  },
  {
    name: "Futebol (Bola)",
    image: "images/soccer.svg.png",
    fact: "O Brasil é o país com mais títulos na Copa do Mundo de Futebol!",
  },
  {
    name: "Catedral de Brasília",
    image: "images/catedral1.jpg",
    fact: "A Catedral de Brasília tem um design futurista único, com 16 pilares de concreto que parecem mãos abertas para o céu.",
  },
  {
    name: "Floresta Amazônica",
    image: "images/amazon.jpg",
    fact: "A Amazônia é a maior floresta tropical do mundo, lar de milhões de espécies de animais e plantas!",
  },
  {
    name: "Pão de Açúcar",
    image: "images/sugarmountain.jpg",
    fact: "O Pão de Açúcar é um famoso morro no Rio de Janeiro, que oferece vistas espetaculares da cidade.",
  },
  {
    name: "Carnaval do Rio",
    image: "images/carnivall.jpg",
    fact: "O Carnaval do Rio de Janeiro é uma de maiores e mais famosas festas do mundo, cheia de música e dança!",
  },
  {
    name: "Churrasco",
    image: "images/churrasco.jpg",
    fact: "Churrasco é uma tradição brasileira deliciosa de carne grelhada!",
  },
  {
    name: "Capoeira",
    image: "images/Capoeira.jpg",
    fact: "Capoeira é uma arte marcial afro-brasileira que combina elementos de luta, dança e música!",
  },
  {
    name: "Café Brasileiro",
    image: "images/coffee.jpg",
    fact: "O Brasil é o maior produtor de café do mundo!",
  },
  {
    name: "Praia de Copacabana",
    image: "images/beach.jpg",
    fact: "A Praia de Copacabana, no Rio de Janeiro, é famosa pelo seu calçadão em forma de ondas!",
  },
];

const MAX_MISTAKES = 7; // Number of incorrect guesses allowed
const LANDMARK_REVEAL_SEGMENTS = 5; // How many "blocks" to split the landmark image reveal into

function generateGuessTheWord(level) {
  app.innerHTML = `
    <div class="full-screen-game">
      <h2 style="text-align:center;">Descubra a Palavra - Nível ${level}</h2>
      <div class="guess-card card">
        <p class="mistakes-counter">Erros: <span id="mistakesCount">0</span>/${MAX_MISTAKES}</p>
        
        <div class="image-and-hint-wrapper">
          <!-- Original vocabulary image - smaller and to the left -->
          <div class="vocab-image-wrapper">
            <img id="guess-image" class="guess-word-image" src="" alt="Word image">
            <p class="guess-hint" id="guess-hint"></p>
          </div>

          <!-- Landmark image reveal container - to the right -->
          <div class="landmark-reveal-section">
            <div id="landmark-image-reveal-container" class="landmark-image-reveal-container">
                <img id="guess-landmark-image-gameplay" src="" alt="Landmark" class="landmark-base-image">
                <!-- Overlay blocks will be dynamically added here by JS -->
            </div>
            <h3 id="current-landmark-name" class="current-landmark-name"></h3>
            <p id="current-landmark-fact" class="current-landmark-fact"></p>
          </div>
        </div>

        <div class="word-display" id="word-display"></div>
        <div class="keyboard" id="keyboard"></div>
        <div class="game-controls">
          <button id="skipWordBtn">Pular Palavra</button> 
        </div>
      </div>
      <button onclick="showLevelMenu(${level})">Voltar</button>

      <!-- Win Popup - UPDATED TO INCLUDE LANDMARK IMAGE AND FACT -->
      <div id="guess-win-popup" class="win-popup">
          <div class="win-popup-content">
              <h2>🎉 Parabéns! 🎉</h2>
              <p>Você descobriu a palavra!</p>
              
              <!-- Landmark details for the WIN POPUP -->
              <img id="popup-landmark-image" src="" alt="Landmark" style="max-width: 150px; border-radius: 10px; margin: 15px auto;">
              <h3 id="popup-landmark-name" style="margin-bottom: 5px; color: #fff;"></h3>
              <p id="popup-landmark-fact" style="font-size: 0.95rem; margin-bottom: 20px; color: #ccc;"></p>

              <button id="continueGuessingBtn">Continuar</button>
              <button onclick="showLevelMenu(${level})" style="background-color: #ef4444;">Voltar ao Menu</button>
          </div>
      </div>

      <!-- Lose Popup -->
      <div id="guess-lose-popup" class="win-popup">
          <div class="win-popup-content">
              <h2>😞 Que pena! 😞</h2>
              <p>Você não descobriu a palavra a tempo.</p>
              <p>A palavra era: <strong id="revealedWord"></strong></p>
              <button id="loseRetryBtn">Tentar Novamente</button>
              <button onclick="showLevelMenu(${level})" style="background-color: #ef4444;">Voltar ao Menu</button>
          </div>
      </div>
    </div>
  `;
  initGuessTheWord(level);
}

function initGuessTheWord(level) {
  const words = shuffle([...allLevelsWords[level]] || []);
  const wordDisplay = document.getElementById("word-display");
  const guessImage = document.getElementById("guess-image"); // Vocabulary image (always visible)
  const guessHint = document.getElementById("guess-hint");
  const keyboard = document.getElementById("keyboard");
  const mistakesCountSpan = document.getElementById("mistakesCount");
  const skipWordBtn = document.getElementById("skipWordBtn");

  const winPopup = document.getElementById("guess-win-popup");
  const losePopup = document.getElementById("guess-lose-popup");
  const revealedWordEl = document.getElementById("revealedWord");
  const continueGuessingBtn = document.getElementById("continueGuessingBtn");
  const loseRetryBtn = document.getElementById("loseRetryBtn"); // Corrected typo here

  // Landmark reveal elements - NOW IN MAIN GAME AREA
  const landmarkImageRevealContainer = document.getElementById(
    "landmark-image-reveal-container"
  );
  const guessLandmarkImageGameplayEl = document.getElementById(
    "guess-landmark-image-gameplay"
  ); // Image in gameplay area
  const currentLandmarkNameEl = document.getElementById(
    "current-landmark-name"
  );
  const currentLandmarkFactEl = document.getElementById(
    "current-landmark-fact"
  );

  // Landmark elements for the WIN POPUP
  const popupLandmarkImageEl = document.getElementById("popup-landmark-image");
  const popupLandmarkNameEl = document.getElementById("popup-landmark-name");
  const popupLandmarkFactEl = document.getElementById("popup-landmark-fact");

  let currentWordIndex = 0;
  let currentWord = {};
  let maskedWord = [];
  let guessedLetters = new Set();
  let mistakes = 0;
  let uniqueLettersInTargetWord = new Set();
  let correctUniqueLettersCount = 0;
  let selectedLandmark = {};

  const alphabet = "abcdefghijklmnopqrstuvwxyzàáâãçéêíóôõúü".split("");

  function setupGame() {
    if (currentWordIndex >= words.length) {
      app.querySelector(".full-screen-game").innerHTML = `
        <div class="guess-card card">
          <h2>Fim do Jogo!</h2>
          <p>Você descobriu todas as palavras deste nível!</p>
          <button onclick="showLevelMenu(${level})">Voltar ao Menu</button>
        </div>
      `;
      return;
    }

    currentWord = words[currentWordIndex];
    const targetWordOriginalCase = currentWord.portuguese;

    maskedWord = Array(targetWordOriginalCase.length).fill("_");
    guessedLetters.clear();
    mistakes = 0;
    correctUniqueLettersCount = 0;
    uniqueLettersInTargetWord.clear();

    currentWord.portuguese
      .toLowerCase()
      .split("")
      .forEach((char) => {
        if (alphabet.includes(char)) {
          uniqueLettersInTargetWord.add(char);
        }
      });

    const randomIndex = Math.floor(Math.random() * brazilianLandmarks.length);
    selectedLandmark = brazilianLandmarks[randomIndex];

    guessImage.src = currentWord.image;
    guessImage.alt = currentWord.english;

    guessLandmarkImageGameplayEl.src = selectedLandmark.image; // Set gameplay landmark image
    currentLandmarkNameEl.textContent = selectedLandmark.name;
    currentLandmarkFactEl.textContent = selectedLandmark.fact;

    guessHint.textContent = `(${currentWord.english})`;
    mistakesCountSpan.textContent = mistakes;
    updateWordDisplay();
    createKeyboard();
    hidePopups();
    skipWordBtn.style.display = "inline-block";

    createLandmarkOverlays();
    updateLandmarkReveal(); // Initially hide the landmark image (fully opaque overlays)

    currentLandmarkNameEl.style.display = "none"; // Hide name/fact until fully revealed
    currentLandmarkFactEl.style.display = "none";
  }

  function createLandmarkOverlays() {
    const existingOverlays = landmarkImageRevealContainer.querySelectorAll(
      ".landmark-overlay-block"
    );
    existingOverlays.forEach((overlay) => overlay.remove());

    for (let i = 0; i < LANDMARK_REVEAL_SEGMENTS; i++) {
      const overlay = document.createElement("div");
      overlay.classList.add("landmark-overlay-block");
      overlay.style.width = `${100 / LANDMARK_REVEAL_SEGMENTS}%`;
      overlay.style.left = `${(100 / LANDMARK_REVEAL_SEGMENTS) * i}%`;
      landmarkImageRevealContainer.appendChild(overlay);
    }
  }

  function updateLandmarkReveal() {
    const overlays = landmarkImageRevealContainer.querySelectorAll(
      ".landmark-overlay-block"
    );
    const totalUniqueGuessableLetters = uniqueLettersInTargetWord.size;

    if (totalUniqueGuessableLetters === 0) {
      overlays.forEach((overlay) => (overlay.style.opacity = 0));
      return;
    }

    const percentageRevealed =
      (correctUniqueLettersCount / totalUniqueGuessableLetters) * 100;

    const numToReveal = Math.floor(
      (percentageRevealed / 100) * LANDMARK_REVEAL_SEGMENTS
    );

    overlays.forEach((overlay, index) => {
      if (index < numToReveal) {
        overlay.style.opacity = 0;
      } else {
        overlay.style.opacity = 1;
      }
    });
  }

  function updateWordDisplay() {
    const displayHtml = maskedWord
      .map((char) => {
        return char === "_"
          ? `<span class="blank-letter">_</span>`
          : `<span class="guessed-letter">${char}</span>`;
      })
      .join(" ");
    wordDisplay.innerHTML = displayHtml;
  }

  function createKeyboard() {
    keyboard.innerHTML = "";
    alphabet.forEach((letter) => {
      const button = document.createElement("button");
      button.textContent = letter.toUpperCase();
      button.classList.add("key-button");
      button.onclick = (event) => handleGuess(letter, event.target);
      keyboard.appendChild(button);

      if (guessedLetters.has(letter)) {
        button.disabled = true;
        if (currentWord.portuguese.toLowerCase().includes(letter)) {
          button.classList.add("correct-guess");
        } else {
          button.classList.add("incorrect-guess");
        }
      }
    });
  }

  function disableKeyboard() {
    keyboard
      .querySelectorAll(".key-button")
      .forEach((btn) => (btn.disabled = true));
  }

  function handleGuess(letter, clickedButton) {
    if (guessedLetters.has(letter)) return;

    guessedLetters.add(letter);

    const targetWordLower = currentWord.portuguese.toLowerCase();
    const letterFoundInWord = targetWordLower.includes(letter);

    if (letterFoundInWord) {
      clickedButton.classList.add("correct-guess");

      if (
        uniqueLettersInTargetWord.has(letter) &&
        !guessedLetters.has(letter + "_counted")
      ) {
        correctUniqueLettersCount++;
        guessedLetters.add(letter + "_counted");
      }

      for (let i = 0; i < currentWord.portuguese.length; i++) {
        if (currentWord.portuguese[i].toLowerCase() === letter) {
          maskedWord[i] = currentWord.portuguese[i];
        }
      }
      updateLandmarkReveal();
    } else {
      mistakes++;
      mistakesCountSpan.textContent = mistakes;
      clickedButton.classList.add("incorrect-guess");
      if (mistakes >= MAX_MISTAKES) {
        gameOver(false);
        return;
      }
    }

    clickedButton.disabled = true;
    updateWordDisplay();
    checkGameStatus();
  }

  function checkGameStatus() {
    const isWordGuessed = currentWord.portuguese.split("").every((char, i) => {
      return char.toLowerCase() === maskedWord[i].toLowerCase();
    });

    if (isWordGuessed) {
      gameOver(true);
    }
  }

  function gameOver(won) {
    disableKeyboard();
    skipWordBtn.style.display = "none";

    if (won) {
      // Full reveal in gameplay area
      landmarkImageRevealContainer
        .querySelectorAll(".landmark-overlay-block")
        .forEach((overlay) => (overlay.style.opacity = 0));
      currentLandmarkNameEl.style.display = "block";
      currentLandmarkFactEl.style.display = "block";

      // Set content for win popup
      popupLandmarkImageEl.src = selectedLandmark.image;
      popupLandmarkImageEl.alt = selectedLandmark.name;
      popupLandmarkNameEl.textContent = selectedLandmark.name;
      popupLandmarkFactEl.textContent = selectedLandmark.fact;
      winPopup.classList.add("show");
    } else {
      // On lose, hide the landmark image completely (resetting for next word)
      landmarkImageRevealContainer
        .querySelectorAll(".landmark-overlay-block")
        .forEach((overlay) => (overlay.style.opacity = 1));
      currentLandmarkNameEl.style.display = "none";
      currentLandmarkFactEl.style.display = "none";
      revealedWordEl.textContent = currentWord.portuguese;
      losePopup.classList.add("show");
    }
  }

  function hidePopups() {
    winPopup.classList.remove("show");
    losePopup.classList.remove("show");
  }

  // Event listeners for popup buttons
  continueGuessingBtn.onclick = () => {
    currentWordIndex++;
    setupGame();
  };

  loseRetryBtn.onclick = () => {
    currentWordIndex++;
    setupGame();
  };

  skipWordBtn.onclick = () => {
    currentWordIndex++;
    setupGame();
  };

  // Initial game setup
  setupGame();
}

// ----------------------
// HISTÓRIAS (Stories) Section - BEGINNING
// ----------------------

// Global audio and language control variables
let currentStoryAudio = null; // Holds the Audio object for the current page's audio
let isAudioEnabled = true; // User's preference for audio playback (starts ON)
let currentAudioLanguage = "pt"; // "pt" for Portuguese, "en" for English
let currentTextLanguage = "pt"; // "pt" for Portuguese, "en" for English

// Plays a given audio file if audio is enabled
function playStoryAudio(audioPath) {
  if (currentStoryAudio) {
    currentStoryAudio.pause();
    currentStoryAudio.currentTime = 0;
  }
  if (isAudioEnabled && audioPath) {
    currentStoryAudio = new Audio(audioPath);
    currentStoryAudio.play().catch((e) => console.warn("Sem Audio", e));
  }
}

// Toggles the audio playback on/off
function toggleAudio() {
  isAudioEnabled = !isAudioEnabled;
  const audioBtn = document.getElementById("toggleAudioBtn");
  if (audioBtn) {
    audioBtn.textContent = isAudioEnabled
      ? "🔊 Som Ligado"
      : "🔇 Som Disligado";
  }

  if (currentStoryAudio) {
    if (isAudioEnabled) {
      currentStoryAudio.play().catch((e) => console.warn("Sem Audio", e));
    } else {
      currentStoryAudio.pause();
    }
  }
}

// Sets the audio language and reloads the current page
function setAudioLanguage(lang, storyId, pageIndex) {
  currentAudioLanguage = lang;
  viewStory(storyId, pageIndex);
}

// Sets the text language and reloads the current page
function setTextLanguage(lang, storyId, pageIndex) {
  currentTextLanguage = lang;
  viewStory(storyId, pageIndex);
}

// Example stories data - UPDATED FOR MULTI-LANGUAGE SUPPORT
const allStories = [
  {
    id: "historia1",
    title: "O Gato Curioso",
    image: "images/books/catpage(0).png",
    pages: [
      {
        image: "images/books/catpage(0).png",
        text: {
          pt: "Mimi era uma gatinha rajada que queria saber de tudo.",
          en: "Mimi was a striped kitten who wanted to know everything.",
        },
        audio: {
          pt: "audio/historias/historia1_page1.mp3",
          en: "audio/historias/en/historia1_page1.mp3",
        },
      },
      {
        image: "images/books/catpage(1).png",
        text: {
          pt: "Numa manhã ensolarada, ela viu um buraco na cerca do jardim. O que será que tem do outro lado pensou. Ela se espremeu e apareceu no quintal do vizinho.",
          en: "One sunny morning, she saw a hole in the garden fence. She wondered what was on the other side. She squeezed through and appeared in the neighbor's yard.",
        },
        audio: {
          pt: "audio/historias/historia1_page2.mp3",
          en: "audio/historias/en/historia1_page2.mp3",
        },
      },
      {
        image: "images/books/catpage(2).png",
        text: {
          pt: "Primeiro, Mimi encontrou um par de botas. Ela cheirou, entrou dentro de uma… e atchim! saiu espirrando. Não são bons esconderijos decidiu.",
          en: "First, Mimi found a pair of boots. She sniffed, went inside one… and achoo! She came out sneezing. 'These aren't good hiding places,' she decided.",
        },
        audio: {
          pt: "audio/historias/historia1_page3.mp3",
          en: "audio/historias/en/historia1_page3.mp3",
        },
      },
      {
        image: "images/books/catpage(3).png",
        text: {
          pt: "Depois, avistou um bebedouro de passarinhos. Ela se inclinou para ver o próprio reflexo, mas PLUFT! — caiu lá dentro! Agora parecia uma tigresa encharcada.",
          en: "Then, she saw a birdbath. She leaned in to see her own reflection, but SPLASH! — she fell in! Now she looked like a soggy tiger.",
        },
        audio: {
          pt: "audio/historias/historia1_page4.mp3",
          en: "audio/historias/en/historia1_page4.mp3",
        },
      },
      {
        image: "images/books/catpage(4).png",
        text: {
          pt: "E dormiu feliz, Toda molhada, Mimi voltou para casa. Sua dona riu e a enrolou em uma toalha quentinha. Mimi, você sempre arruma confusão",
          en: "She slept happily. All wet, Mimi went back home. Her owner laughed and wrapped her in a warm towel. 'Mimi, you're always getting into trouble,' she said.",
        },
        audio: {
          pt: "audio/historias/historia1_page5.mp3",
          en: "audio/historias/en/historia1_page5.mp3",
        },
      },
      {
        image: "images/books/catpage(5).png",
        text: {
          pt: "Mas naquela noite, quando Mimi se enroscou no cobertor, ronronou feliz. Ser curiosa tinha lhe dado uma grande aventura…e amanhã, quem sabe que mistérios iria descobrir?",
          en: "But that night, as Mimi curled up in her blanket, she purred happily. Being curious had given her a great adventure… and who knows what mysteries she would discover tomorrow?",
        },
        audio: {
          pt: "audio/historias/historia1_page5.mp3",
          en: "audio/historias/en/historia1_page5.mp3",
        },
      },
    ],
  },
  {
    id: "historia2",
    title: "A Festa Secreta da Fazenda",
    image: "images/books/farmpage(0).png",
    pages: [
      {
        image: "images/books/farmpage(1).png",
        text: {
          pt: "Numa noite tranquila, quando o fazendeiro já roncava na rede, os animais da fazenda se reuniram com um plano secreto: fazer uma festa.",
          en: "On a quiet night, when the farmer was already snoring in his hammock, the farm animals gathered with a secret plan: to throw a party.",
        },
        audio: {
          pt: "audio/historias/historia2_page1.mp3",
          en: "audio/historias/en/historia2_page1.mp3",
        },
      },
      {
        image: "images/books/farmpage(2).png",
        text: {
          pt: "Bolota, o porquinho, ficou responsável por vigiar a porta do celeiro. Se o fazendeiro se mexesse, ele bateria as patinhas no chão como aviso. Enquanto isso, as galinhas prepararam o palco: uma fileira de fardos de feno virou arquibancada e o balde de leite velho virou tambor.",
          en: "Bolota the pig was in charge of watching the barn door. If the farmer moved, he would tap his hooves on the ground as a warning. Meanwhile, the chickens prepared the stage: a row of hay bales became the bleachers and the old milk bucket became a drum.",
        },
        audio: {
          pt: "audio/historias/historia2_page2.mp3",
          en: "audio/historias/en/historia2_page2.mp3",
        },
      },
      {
        image: "images/books/farmpage(3).png",
        text: {
          pt: "Trovão, o cavalo, começou o show, batendo os cascos como um verdadeiro baterista. Mimosa, a vaca, entrou na dança, balançando o rabo de um lado para o outro como se fosse a rainha da pista. Até o cachorro da fazenda resolveu participar, uivando no ritmo da música.",
          en: "Thunder the horse started the show, tapping his hooves like a real drummer. Mimosa the cow joined the dance, swinging her tail from side to side as if she were the queen of the dance floor. Even the farm dog decided to participate, howling to the rhythm of the music.",
        },
        audio: {
          pt: "audio/historias/historia2_page3.mp3",
          en: "audio/historias/en/historia2_page3.mp3",
        },
      },
      {
        image: "images/books/farmpage(4).png",
        text: {
          pt: "Então Bolota, tentando arriscar alguns passos de dança enquanto vigiava a porta, escorregou numa palha solta e rolou pelo chão do celeiro. Os animais congelaram, com medo do barulho acordar o fazendeiro. Mas em vez de se preocupar, Bolota parou numa pose engraçada, com palha espetada nas orelhas. A cena ficou tão ridícula que todos caíram na risada. A festa da fazenda ficou ainda mais divertida.",
          en: "Then Bolota, trying to risk some dance moves while watching the door, slipped on a loose straw and rolled across the barn floor. The animals froze, afraid the noise would wake the farmer. But instead of worrying, Bolota stopped in a funny pose, with straw stuck in his ears. The scene was so ridiculous that everyone burst out laughing. The farm party became even more fun.",
        },
        audio: {
          pt: "audio/historias/historia2_page4.mp3",
          en: "audio/historias/en/historia2_page4.mp3",
        },
      },
      {
        image: "images/books/farmpage(5).png",
        text: {
          pt: "Quando o sol começou a nascer, cada animal correu de volta pro seu lugar, fingindo estar dormindo. O fazendeiro acordou, abriu a porta do celeiro e ficou intrigado ao ver palha espalhada por todo lado, pegadas sujas de lama no chão e até uma galinha dormindo em cima do balde de leite.",
          en: "When the sun began to rise, each animal ran back to its place, pretending to be asleep. The farmer woke up, opened the barn door, and was puzzled to see straw scattered everywhere, muddy footprints on the floor, and even a chicken sleeping on top of the milk bucket.",
        },
        audio: {
          pt: "audio/historias/historia2_page5.mp3",
          en: "audio/historias/en/historia2_page5.mp3",
        },
      },
      {
        image: "images/books/farmpage(6).png",
        text: {
          pt: "Ele coçou a cabeça, sem entender nada, enquanto os animais, escondendo o riso, faziam cara de inocentes. A festa secreta da fazenda tinha sido um sucesso.",
          en: "He scratched his head, not understanding a thing, while the animals, hiding their laughter, put on innocent faces. The farm's secret party had been a success.",
        },
        audio: {
          pt: "audio/historias/historia2_page6.mp3",
          en: "audio/historias/en/historia2_page6.mp3",
        },
      },
    ],
  },
  {
    id: "historia3",
    title: "Clara Marca um Gol",
    image: "images/books/clarapage(0).png",
    pages: [
      {
	image: "images/books/clarapage(1).png",
        text: {
          pt: "Clara era uma menina que adorava jogar futebol. Todas as tardes, ela corria para o campinho com sua bola. Tap, tap, tap! faziam seus pés enquanto ela driblava. Chutão! fazia a bola quando ela chutava forte.",
          en: "Clara was a little girl who loved playing soccer. Every afternoon, she ran to the little field with her ball. Tap, tap, tap! went her feet as she dribbled. Thump! went the ball when she kicked it hard.",
        },
        audio: {
          pt: "audio/historias/historia3_page1.mp3",
          en: "audio/historias/en/historia3_page1.mp3",
        },
      },
      {
	image: "images/books/clarapage(2).png",
        text: {
          pt: "No sábado, o time da Clara tinha um jogo importante. O outro time era rápido — vruuum! — e Clara começou a ficar um pouco nervosa. 'Não se preocupe,' disse a treinadora. 'É só dar o seu melhor e se divertir.'",
          en: "On Saturday, Clara’s team had an important game. The other team was fast—vroom!—and Clara started to feel a little nervous. 'Don’t worry,' said the coach. 'Just do your best and have fun.'",
        },
        audio: {
          pt: "audio/historias/historia3_page2.mp3",
          en: "audio/historias/en/historia3_page2.mp3",
        },
      },
      {
	image: "images/books/clarapage(3).png",
        text: {
          pt: "Clara respirou fundo. Ela se lembrou de como treinava seus dribles todos os dias. Quando a bola veio na direção dela, Clara dominou com cuidado. Tap, tap, tap! Foi levando a bola pelo campo.",
          en: "Clara took a deep breath. She remembered how she practiced her dribbling every day. When the ball came toward her, Clara controlled it carefully. Tap, tap, tap! She carried the ball down the field.",
        },
        audio: {
          pt: "audio/historias/historia3_page3.mp3",
          en: "audio/historias/en/historia3_page3.mp3",
        },
      },
      {
	image: "images/books/clarapage(4).png",
        text: {
          pt: "'Vai, Clara!' gritaram suas amigas do time. Clara chutou — pááá! — e a bola entrou direto no gol.",
          en: "'Go, Clara!' shouted her teammates. Clara kicked—wham!—and the ball went straight into the goal.",
        },
        audio: {
          pt: "audio/historias/historia3_page4.mp3",
          en: "audio/historias/en/historia3_page4.mp3",
        },
      },
	{
	image: "images/books/clarapage(5).png",
        text: {
          pt: "Ela marcou! Todo o time aplaudiu e comemorou. Clara sorriu de orelha a orelha. Eles ganharam o campeonato! Todo o time levantou Clara no ar para celebrar.",
          en: "She scored! The whole team clapped and cheered. Clara grinned from ear to ear. They won the championship! Her whole team lifted her in the air to celebrate.",
        },
        audio: {
          pt: "audio/historias/historia3_page4.mp3",
          en: "audio/historias/en/historia3_page4.mp3",
        },
      },
    ],
  },
 {
  id: "historia4",
  title: "Blaze e a Borboleta",
  image: "images/books/blaze(0).png",
  pages: [
    {
	image: "images/books/blaze(1).png",
      text: {
        pt: "Era uma vez, em uma floresta de árvores altas e verdes, vivia um dragão chamado Blaze. Ele era um dragão comum, com asas fortes e um sopro de fogo, mas naquele dia tinha uma missão muito importante: capturar a Grande Borboleta Glimmerwing. Diziam que essa borboleta tinha asas que brilhavam como mil pequenos arco-íris.",
        en: "Once, in a forest of tall, green trees, lived a dragon named Blaze. He was a regular dragon with strong wings and a puff of fire, but today he had a very important mission: catching the Great Glimmerwing Butterfly. This butterfly was said to have wings that shimmered like a thousand tiny rainbows.",
      },
      audio: {
        pt: "audio/historias/historia4_page1.mp3",
        en: "audio/historias/en/historia4_page1.mp3",
      },
    },
    {
	image: "images/books/blaze(2).png",
      text: {
        pt: "Blaze viu a Glimmerwing voando perto de um campo de flores perfumadas. Com uma rede de borboletas na mão, ele se aproximou devagar, levantando a rede. Suuush! Ele errou a borboleta e, em vez disso, derrubou uma colmeia de abelhas de um galho!",
        en: "Blaze saw the Glimmerwing fluttering near a patch of sweet-smelling flowers. In his hand, he held a butterfly net, he crept closer, net raised. Swish! He missed the butterfly and instead knocked a beehive right off a tree branch!",
      },
      audio: {
        pt: "audio/historias/historia4_page2.mp3",
        en: "audio/historias/en/historia4_page2.mp3",
      },
    },
    {
	image: "images/books/blaze(3).png",
      text: {
        pt: "Uma nuvem zumbidora de abelhas muito bravas saiu da colmeia. \"Bzzzzzzzzzz!\" rugiam em vozes pequenas e irritadas. Blaze não ficou por perto. Ele prendeu a rede debaixo do braço e correu o mais rápido que suas fortes pernas de dragão permitiam. As abelhas furiosas voavam logo atrás, com seus ferrões prontos.",
        en: "A buzzing cloud of very cross bees poured out of the hive. \"Buzzzzzzzzz!\" they roared in tiny, angry voices. Blaze didn't stick around. He tucked his net under his arm and ran as fast as his strong dragon legs would carry him. The angry bees buzzed right behind him, their tiny stingers ready.",
      },
      audio: {
        pt: "audio/historias/historia4_page3.mp3",
        en: "audio/historias/en/historia4_page3.mp3",
      },
    },
    {
	image: "images/books/blaze(4).png",
      text: {
        pt: "Quando as abelhas estavam quase alcançando, Blaze avistou uma caverna escura escondida por folhagens. Ele entrou voando e se apertou em um canto pequeno e escuro. Prendeu a respiração, ouvindo. As abelhas passaram direto pela entrada da caverna, ainda zumbindo com raiva. Depois de alguns minutos, o som foi sumindo quando voltaram para a colmeia. Blaze soltou um grande suspiro de alívio. \"Ufa!\", disse para si mesmo.",
        en: "Just as the bees were getting close, Blaze spotted a dark cave hidden by some leafy vines. He zipped inside and squeezed himself into a small, dark corner. He held his breath, listening. The bees flew right past the cave's opening, still buzzing angrily. After a few minutes, the buzzing faded away as they flew back to their hive. Blaze let out a big sigh of relief. \"Whew!\" he said to himself.",
      },
      audio: {
        pt: "audio/historias/historia6_page1.mp3",
        en: "audio/historias/en/historia6_page1.mp3",
      },
    },
    {
	image: "images/books/blaze(5).png",
      text: {
        pt: "\"ROAR!\" Um enorme rugido sonolento ecoou do fundo da caverna. Um enorme urso marrom, que tinha acabado de ser acordado de sua soneca, encarava Blaze com uma cara muito zangada. A cauda de Blaze se arrepiou. Ele havia escapado das abelhas, mas agora estava frente a frente com um urso muito, muito bravo!",
        en: "\"ROAR!\" A big, sleepy roar echoed from the back of the cave. An enormous brown bear, who had just been woken from his nap, was staring at him with a very grumpy face. Blaze's tail stood up on end. He had escaped the bees, but now he was face-to-face with a very, very angry bear!",
      },
      audio: {
        pt: "audio/historias/historia6_page1.mp3",
        en: "audio/historias/en/historia6_page1.mp3",
      },
    },
    {
	image: "images/books/blaze(6).png",
      text: {
        pt: "Blaze não pensou duas vezes. Saiu correndo direto para fora da caverna. O urso veio atrás dele. Blaze bateu as asas com toda a força, levantando voo no céu. Subiu cada vez mais alto, um borrão de escamas verdes entre as nuvens. Voou até que o urso não passasse de um pequeno ponto rabugento lá embaixo. Finalmente, pousou em segurança no topo de uma montanha alta.",
        en: "Blaze didn't hesitate. He took off running, straight out of the cave. The bear lumbered out right after him. Blaze flapped his wings as hard as he could, launching himself into the sky. He soared higher and higher, a blur of green scales against the clouds. He flew until the bear was just a small, grumpy dot below him, and finally, he landed safely on a high mountain peak.",
      },
      audio: {
        pt: "audio/historias/historia5_page1.mp3",
        en: "audio/historias/en/historia5_page1.mp3",
      },
    },
    {
	image: "images/books/blaze(7).png",
      text: {
        pt: "Enquanto Blaze descansava no pico silencioso, ainda recuperando o fôlego, viu um brilho de cores maravilhosas. Era a Grande Borboleta Glimmerwing, voando pacificamente por perto! Ele pegou a rede e, com um movimento rápido e certeiro, a capturou. As asas da Glimmerwing brilhavam com todas as cores do arco-íris, exatamente como diziam as histórias. Blaze olhou para a borboleta e depois para o céu aberto. Sorriu e abriu a rede. A Glimmerwing voou feliz de volta para a floresta.",
        en: "As Blaze sat on the quiet peak, still catching his breath, he saw a flash of brilliant color. It was the Great Glimmerwing Butterfly, fluttering peacefully nearby! He took his net, and with one swift, practiced swoop, he caught the butterfly. The Glimmerwing's wings shimmered with every color of the rainbow, just as the stories said. Blaze looked at the beautiful butterfly, then at the wide, open sky. He smiled and opened his net. The Glimmerwing fluttered out and flew happily back into the forest.",
      },
      audio: {
        pt: "audio/historias/historia5_page1.mp3",
        en: "audio/historias/en/historia5_page1.mp3",
      },
    },
    {
	image: "images/books/blaze(8).png",
      text: {
        pt: "Blaze percebeu que os maiores tesouros não são os que você captura, mas aqueles que você deixa livres. Desde então, ele passou seus dias admirando as borboletas Glimmerwing de longe, feliz apenas por saber que elas estavam lá.",
        en: "Blaze realized that the greatest treasures are not the ones you catch, but the ones you set free. From then on, he spent his days admiring the Glimmerwing butterflies from a distance, happy just knowing they were there.",
      },
      audio: {
        pt: "audio/historias/historia5_page1.mp3",
        en: "audio/historias/en/historia5_page1.mp3",
      },
    },
  ],
},

{
  id: "historia5",
  title: "O Pequeno Astronauta",
  image: "images/books/space(0).png",
  pages: [
    {
      image: "images/books/space(1).png",
      text: {
        pt: "Maya era uma pequena astronauta com uma grande imaginação. Mais do que tudo, ela queria voar além das estrelas e tocar a lua.",
        en: "Maya was a little astronaut with a big imagination. More than anything, she wanted to fly past the stars and touch the moon."
      },
      audio: {
        pt: "audio/historias/historia5_page1.mp3",
        en: "audio/historias/en/historia5_page1.mp3"
      }
    },
    {
      image: "images/books/space(2).png",
      text: {
        pt: "Numa tarde ensolarada, ela encontrou uma caixa de papelão grande. Com canetinhas, desenhou botões e janelas. Até colou papel brilhante para parecer um foguete de verdade.",
        en: "One sunny afternoon, she found a big cardboard box. With markers, she drew buttons and windows. She even taped on shiny paper to make it look like a rocket."
      },
      audio: {
        pt: "audio/historias/historia5_page2.mp3",
        en: "audio/historias/en/historia5_page2.mp3"
      }
    },
    {
      image: "images/books/space(3).png",
      text: {
        pt: "Ela entrou na caixa, colocou seu capacete de brinquedo e sussurrou: \"Três… Dois… Um… Decolar!\"",
        en: "She climbed inside, put on her toy helmet, and whispered, \"Three… Two… One… Blast off!\""
      },
      audio: {
        pt: "audio/historias/historia5_page3.mp3",
        en: "audio/historias/en/historia5_page3.mp3"
      }
    },
    {
      image: "images/books/space(4).png",
      text: {
        pt: "Na sua imaginação, a caixa de papelão tremia e roncava como um foguete de verdade. De repente, ela estava subindo pelo céu, deixando um rastro de brilhos. Os planetas giravam em cores lindas e as estrelas brilhavam como diamantes.",
        en: "In her mind, the cardboard box shook and rumbled like a real rocket. Suddenly, she was zooming into the sky, leaving a trail of sparkles behind. Planets swirled in beautiful colors, and stars twinkled like diamonds."
      },
      audio: {
        pt: "audio/historias/historia5_page4.mp3",
        en: "audio/historias/en/historia5_page4.mp3"
      }
    },
    {
      image: "images/books/space(5).png",
      text: {
        pt: "Na lua, Maya fincou uma pequena bandeira de papel com seu nome. Ela pulava e ria, imaginando marquinhas de botas na poeira cinzenta.",
        en: "On the moon, Maya planted a small paper flag with her name on it. She bounced and giggled, imagining little boot prints in the soft, gray dust."
      },
      audio: {
        pt: "audio/historias/historia5_page5.mp3",
        en: "audio/historias/en/historia5_page5.mp3"
      }
    },
    {
      image: "images/books/space(6).png",
      text: {
        pt: "Então, percebeu algo brilhando — uma estrelinha solitária que tinha caído ali perto. A estrela parecia triste.",
        en: "Then she noticed something glowing — a lonely star that had fallen nearby. The star looked sad."
      },
      audio: {
        pt: "audio/historias/historia5_page6.mp3",
        en: "audio/historias/en/historia5_page6.mp3"
      }
    },
    {
      image: "images/books/space(7).png",
      text: {
        pt: "\"Não se preocupe, estrelinha,\" disse Maya. \"Vou te levar de volta para casa.\"",
        en: "\"Don’t worry, little star,\" Maya said. \"I’ll take you back home.\""
      },
      audio: {
        pt: "audio/historias/historia5_page7.mp3",
        en: "audio/historias/en/historia5_page7.mp3"
      }
    },
    {
      image: "images/books/space(8).png",
      text: {
        pt: "Ela fingiu colocar a estrela dentro do foguete. Juntas, subiram cada vez mais alto até encontrarem a família da estrelinha no céu.",
        en: "She carefully pretended to place the star inside her rocket. Together, they soared higher and higher until they reached the star’s family in the sky."
      },
      audio: {
        pt: "audio/historias/historia5_page8.mp3",
        en: "audio/historias/en/historia5_page8.mp3"
      }
    },
    {
      image: "images/books/space(9).png",
      text: {
        pt: "As estrelas brilharam mais forte do que nunca, dizendo obrigado. Maya acenou e conduziu seu foguete de volta para a Terra.",
        en: "The stars twinkled brighter than ever, saying thank you. Maya waved goodbye and steered her rocket back to Earth."
      },
      audio: {
        pt: "audio/historias/historia5_page9.mp3",
        en: "audio/historias/en/historia5_page9.mp3"
      }
    },
    {
      image: "images/books/space(11).png",
      text: {
        pt: "Quando abriu os olhos, estava de volta ao seu quarto, sentada dentro da caixa de papelão. Sorriu e sussurrou: \"Boa noite, estrelas. Eu volto para visitar em breve.\"",
        en: "When she opened her eyes, she was back in her room, sitting inside her cardboard box. She smiled and whispered, \"Goodnight, stars. I’ll visit again soon.\""
      },
      audio: {
        pt: "audio/historias/historia5_page10.mp3",
        en: "audio/historias/en/historia5_page10.mp3"
      },
    },
  ],
},
{
  id: "historia6",
  title: "Uma Viagem ao Mercado",
  image: "images/books/market(0).png",
  pages: [
    {
      image: "images/books/market(1).png",
      text: {
        pt: "Lara, Bruno e Luca chegaram animados ao mercado da cidade. “Uau! Olhem todas essas frutas coloridas!” exclamou Lara. “Eu quero ver os vegetais,” disse Bruno. Luca apontou para uma barraca: “E eu quero experimentar sucos frescos!”",
        en: "Lara, Bruno, and Luca arrived excitedly at the city market. “Wow! Look at all these colorful fruits!” exclaimed Lara. “I want to see the vegetables,” said Bruno. Luca pointed to a stall: “And I want to try the fresh juices!”"
      },
      audio: {
        pt: "audio/historias/historia7_page1.mp3",
        en: "audio/historias/en/historia7_page1.mp3"
      }
    },
    {
      image: "images/books/market(2).png",
      text: {
        pt: "Lara se aproximou de uma barraca de maçãs. “Quanto custa esta maçã, por favor?” perguntou educadamente. A vendedora respondeu sorrindo: “Duas reais, por favor.” “Obrigada!” disse Lara. Bruno pegou uma cenoura e perguntou: “Posso levar esta cenoura grande, por favor?”",
        en: "Lara approached an apple stall. “How much is this apple, please?” she asked politely. The vendor replied with a smile: “Two reais, please.” “Thank you!” said Lara. Bruno picked up a carrot and asked: “Can I take this big carrot, please?”"
      },
      audio: {
        pt: "audio/historias/historia7_page2.mp3",
        en: "audio/historias/en/historia7_page2.mp3"
      }
    },
    {
      image: "images/books/market(3).png",
      text: {
        pt: "Luca experimentou uma uva que a vendedora ofereceu como amostra. “Hummm, deliciosa! Obrigado!” disse ele. Lara provou um pedaço de maçã e concordou: “É muito doce!” Bruno riu: “Eu adoro esses mercados, sempre tem algo novo para provar.”",
        en: "Luca tried a grape the vendor offered as a sample. “Mmm, delicious! Thank you!” he said. Lara tried a piece of apple and agreed: “It’s very sweet!” Bruno laughed: “I love these markets, there’s always something new to try.”"
      },
      audio: {
        pt: "audio/historias/historia7_page3.mp3",
        en: "audio/historias/en/historia7_page3.mp3"
      }
    },
    {
      image: "images/books/market(4).png",
      text: {
        pt: "Eles caminharam até a barraca de vegetais. “Podemos levar um punhado de cenouras, por favor?” perguntou Bruno. “Claro, aqui estão,” respondeu a vendedora. Luca escolheu tomates e disse: “Estes parecem muito vermelhos e maduros!”",
        en: "They walked to the vegetable stall. “Can we take a bunch of carrots, please?” asked Bruno. “Of course, here you go,” replied the vendor. Luca chose some tomatoes and said: “These look very red and ripe!”"
      },
      audio: {
        pt: "audio/historias/historia7_page4.mp3",
        en: "audio/historias/en/historia7_page4.mp3"
      }
    },
    {
      image: "images/books/market(5).png",
      text: {
        pt: "Em frente à barraca de flores, Lara disse: “Que flores lindas! Olhem essas tulipas!” Luca pegou algumas margaridas. “Posso levar algumas para minha mãe, por favor?” “Claro, elas vão adorar,” disse a vendedora sorrindo.",
        en: "In front of the flower stall, Lara said: “What beautiful flowers! Look at these tulips!” Luca picked up some daisies. “Can I take some for my mom, please?” “Of course, she will love them,” said the vendor, smiling."
      },
      audio: {
        pt: "audio/historias/historia7_page5.mp3",
        en: "audio/historias/en/historia7_page5.mp3"
      }
    },
    {
      image: "images/books/market(7).png",
      text: {
        pt: "Na hora de pagar, Lara disse: “Aqui está o dinheiro.” “Obrigada!” respondeu a vendedora. Bruno acrescentou: “Foi muito divertido comprar frutas e vegetais hoje.” Luca concordou: “Sim! E ainda vamos levar sucos fresquinhos para casa.”",
        en: "When it was time to pay, Lara said: “Here’s the money.” “Thank you!” replied the vendor. Bruno added: “It was so much fun buying fruits and vegetables today.” Luca agreed: “Yes! And we’re also taking fresh juice home.”"
      },
      audio: {
        pt: "audio/historias/historia7_page7.mp3",
        en: "audio/historias/en/historia7_page7.mp3"
      }
    },
    {
      image: "images/books/market(8).png",
      text: {
        pt: "Antes de sair, Luca pediu: “Posso experimentar este suco, por favor?” “Claro, aqui está um copinho para você,” disse a vendedora. Eles beberam e sorriram juntos. “Delicioso!” exclamou Lara. “Com certeza o melhor do dia,” disse Bruno.",
        en: "Before leaving, Luca asked: “Can I try this juice, please?” “Of course, here’s a small cup for you,” said the vendor. They drank and smiled together. “Delicious!” exclaimed Lara. “Definitely the best of the day,” said Bruno."
      },
      audio: {
        pt: "audio/historias/historia7_page8.mp3",
        en: "audio/historias/en/historia7_page8.mp3"
      }
    },
    {
      image: "images/books/market(9).png",
      text: {
        pt: "Eles se despediram da vendedora: “Até logo! Obrigado por tudo!” “Voltem sempre, crianças!” respondeu ela. Lara, Bruno e Luca começaram a caminhar de volta para casa, felizes com suas compras.",
        en: "They said goodbye to the vendor: “See you! Thank you for everything!” “Come back soon, kids!” she replied. Lara, Bruno, and Luca began walking home, happy with their purchases."
      },
      audio: {
        pt: "audio/historias/historia7_page9.mp3",
        en: "audio/historias/en/historia7_page9.mp3"
      }
    },
    {
      image: "images/books/market(10).png",
      text: {
        pt: "Enquanto caminhavam, Lara disse: “Mal posso esperar para comer a maçã e tomar o suco!” Bruno riu: “E eu vou mostrar para minha mãe as flores que escolhi.” Luca acrescentou: “O mercado é mesmo divertido, podemos voltar no próximo sábado?”",
        en: "As they walked, Lara said: “I can’t wait to eat the apple and drink the juice!” Bruno laughed: “And I’ll show my mom the flowers I picked.” Luca added: “The market is so much fun, can we come back next Saturday?”"
      },
      audio: {
        pt: "audio/historias/historia7_page10.mp3",
        en: "audio/historias/en/historia7_page10.mp3"
      },
    },
  ],
},
  {
  id: "historia7",
  title: "Leo e o Primeiro Passeio com Max",
  image: "images/books/leo(0).png",
  pages: [
    {
      image: "images/books/leo(1).png",
      text: {
        pt: "Leo sonhava em ter um cachorrinho. Quando seus pais lhe deram Max, um filhote marrom de orelhas caídas, ele ficou radiante.",
        en: "Leo had always dreamed of having a puppy. When his parents gave him Max, a floppy-eared brown pup, he was overjoyed."
      },
      audio: {
        pt: "audio/historias/historia7_page1.mp3",
        en: "audio/historias/en/historia7_page1.mp3"
      }
    },
    {
      image: "images/books/leo(2).png",
      text: {
        pt: "Nos primeiros dias, Max só dormia enrolado em uma cobertinha. Mas logo começou a explorar a casa.",
        en: "At first, Max mostly slept in a little blanket. But soon he started exploring the house."
      },
      audio: {
        pt: "audio/historias/historia7_page2.mp3",
        en: "audio/historias/en/historia7_page2.mp3"
      }
    },
    {
      image: "images/books/leo(3).png",
      text: {
        pt: "Numa manhã ensolarada, o pai de Leo entregou uma guia vermelha: 'Acho que Max está pronto para o primeiro passeio.'",
        en: "One sunny morning, Leo’s dad handed him a red leash. 'I think Max is ready for his first walk.'"
      },
      audio: {
        pt: "audio/historias/historia7_page3.mp3",
        en: "audio/historias/en/historia7_page3.mp3"
      }
    },
    {
      image: "images/books/leo(4).png",
      text: {
        pt: "Leo prendeu a guia na coleira de Max. O cachorrinho cheirava a grama e se encostava nas pernas do amigo.",
        en: "Leo clipped the leash onto Max’s collar. The puppy sniffed the grass and pressed close to his friend."
      },
      audio: {
        pt: "audio/historias/historia7_page4.mp3",
        en: "audio/historias/en/historia7_page4.mp3"
      }
    },
    {
      image: "images/books/leo(5).png",
      text: {
        pt: "De repente, uma borboleta passou voando. Max ergueu as orelhas e começou a andar na frente, puxando Leo.",
        en: "Suddenly, a butterfly fluttered past. Max perked up and began trotting ahead, tugging Leo along."
      },
      audio: {
        pt: "audio/historias/historia7_page5.mp3",
        en: "audio/historias/en/historia7_page5.mp3"
      }
    },
    {
      image: "images/books/leo(6).png",
      text: {
        pt: "No parque, Max cheirava cada árvore e corria atrás de folhas caindo. Leo ria sem parar.",
        en: "At the park, Max sniffed every tree and chased falling leaves. Leo laughed and laughed."
      },
      audio: {
        pt: "audio/historias/historia7_page6.mp3",
        en: "audio/historias/en/historia7_page6.mp3"
      }
    },
    {
      image: "images/books/leo(7).png",
      text: {
        pt: "De repente, um golden retriever apareceu. Max se escondeu atrás de Leo, mas logo fez amizade.",
        en: "Suddenly, a golden retriever appeared. Max hid behind Leo, but soon made a new friend."
      },
      audio: {
        pt: "audio/historias/historia7_page7.mp3",
        en: "audio/historias/en/historia7_page7.mp3"
      }
    },
    {
      image: "images/books/leo(8).png",
      text: {
        pt: "Leo conheceu Samuel, dono do retriever. Eles caminharam juntos, conversando sobre a escola e os cães.",
        en: "Leo met Samuel, the retriever’s owner. They walked together, talking about school and their dogs."
      },
      audio: {
        pt: "audio/historias/historia7_page8.mp3",
        en: "audio/historias/en/historia7_page8.mp3"
      }
    },
    {
      image: "images/books/leo(9).png",
      text: {
        pt: "Quando o sol baixou, Max estava cansado. Leo o pegou no colo e o cachorrinho se aconchegou.",
        en: "As the sun set, Max grew tired. Leo scooped him up, and the puppy nestled close."
      },
      audio: {
        pt: "audio/historias/historia7_page9.mp3",
        en: "audio/historias/en/historia7_page9.mp3"
      }
    },
    {
      image: "images/books/leo(10).png",
      text: {
        pt: "Naquela noite, Max dormiu no pé da cama. Leo sussurrou: 'Você foi corajoso. Amanhã iremos ainda mais longe.'",
        en: "That night, Max slept at the foot of Leo’s bed. Leo whispered, 'You were brave. Tomorrow we’ll go even farther.'"
      },
      audio: {
        pt: "audio/historias/historia7_page10.mp3",
        en: "audio/historias/en/historia7_page10.mp3"
      }
    }
  ]
},
{
  id: "historia8",
  title: "A Grande Viagem de Ônibus do Noah",
  image: "images/books/noah(0).png",
  pages: [
    {
      image: "images/books/noah(1).png",
      text: {
        pt: "Noah adorava carros e caminhões, mas nunca tinha andado de ônibus. Hoje seria a primeira vez!",
        en: "Noah loved cars and trucks, but he had never ridden a bus. Today would be the first time!"
      },
      audio: {
        pt: "audio/historias/historia8_page1.mp3",
        en: "audio/historias/en/historia8_page1.mp3"
      }
    },
    {
      image: "images/books/noah(2).png",
      text: {
        pt: "No ponto, ele segurou firme a mão da mãe. O ônibus chegou com um chiado alto e as portas se abriram.",
        en: "At the stop, he held his mom’s hand tight. The bus arrived with a hiss, and the doors swung open."
      },
      audio: {
        pt: "audio/historias/historia8_page2.mp3",
        en: "audio/historias/en/historia8_page2.mp3"
      }
    },
    {
      image: "images/books/noah(3).png",
      text: {
        pt: "“Passagem, por favor”, disse o motorista. Noah colocou uma moedinha brilhante e sorriu.",
        en: "'Ticket, please,' said the driver. Noah dropped in a shiny coin and smiled."
      },
      audio: {
        pt: "audio/historias/historia8_page3.mp3",
        en: "audio/historias/en/historia8_page3.mp3"
      }
    },
    {
      image: "images/books/noah(4).png",
      text: {
        pt: "O ônibus começou a andar. Noah grudou o nariz na janela, vendo lojas, prédios e árvores passando.",
        en: "The bus rumbled forward. Noah pressed his nose to the window, watching shops, buildings, and trees go by."
      },
      audio: {
        pt: "audio/historias/historia8_page4.mp3",
        en: "audio/historias/en/historia8_page4.mp3"
      }
    },
    {
      image: "images/books/noah(5).png",
      text: {
        pt: "Entraram novos passageiros: uma moça com bebê, um menino com skate e um homem com flores.",
        en: "New passengers boarded: a woman with a baby, a boy with a skateboard, and a man carrying flowers."
      },
      audio: {
        pt: "audio/historias/historia8_page5.mp3",
        en: "audio/historias/en/historia8_page5.mp3"
      }
    },
    {
      image: "images/books/noah(6).png",
      text: {
        pt: "Noah ouviu uma banda marcial tocando no parque. Os tambores faziam BUM BUM BUM!",
        en: "Noah heard a marching band practicing in the park. The drums went BOOM BOOM BOOM!"
      },
      audio: {
        pt: "audio/historias/historia8_page6.mp3",
        en: "audio/historias/en/historia8_page6.mp3"
      }
    },
    {
      image: "images/books/noah(7).png",
      text: {
        pt: "O ônibus passou por uma ponte alta. Noah ficou de boca aberta ao ver o rio brilhando lá embaixo.",
        en: "The bus crossed a tall bridge. Noah gasped at the sparkling river below."
      },
      audio: {
        pt: "audio/historias/historia8_page7.mp3",
        en: "audio/historias/en/historia8_page7.mp3"
      }
    },
    {
      image: "images/books/noah(8).png",
      text: {
        pt: "Na ladeira, Noah enxergou a cidade inteira: parques, casas e até o telhado do zoológico.",
        en: "On the hill, Noah could see the whole city: parks, houses, and even the roof of the zoo."
      },
      audio: {
        pt: "audio/historias/historia8_page8.mp3",
        en: "audio/historias/en/historia8_page8.mp3"
      }
    },
    {
      image: "images/books/noah(9).png",
      text: {
        pt: "O motorista anunciou: 'Próxima parada: Parque Central.' Noah saltou animado.",
        en: "The driver called, 'Next stop: Central Park.' Noah hopped off, excited."
      },
      audio: {
        pt: "audio/historias/historia8_page9.mp3",
        en: "audio/historias/en/historia8_page9.mp3"
      }
    },
    {
      image: "images/books/noah(10).png",
      text: {
        pt: "Ele e a mãe fizeram piquenique, brincaram no balanço e observaram os patos no lago.",
        en: "He and his mom had a picnic, played on the swings, and watched ducks in the pond."
      },
      audio: {
        pt: "audio/historias/historia8_page10.mp3",
        en: "audio/historias/en/historia8_page10.mp3"
      }
    },
    {
      image: "images/books/noah(11).png",
      text: {
        pt: "Na volta, Noah perguntou: 'Mãe, podemos andar de ônibus de novo amanhã?'",
        en: "On the way home, Noah asked, 'Mom, can we ride the bus again tomorrow?'"
      },
      audio: {
        pt: "audio/historias/historia8_page11.mp3",
        en: "audio/historias/en/historia8_page11.mp3"
      }
    },
    {
      image: "images/books/noah(12).png",
      text: {
        pt: "A mãe sorriu: 'Claro. Amanhã o ônibus pode nos levar para um lugar novo.'",
        en: "His mom smiled: 'Of course. Tomorrow the bus might take us somewhere new.'"
      },
      audio: {
        pt: "audio/historias/historia8_page12.mp3",
        en: "audio/historias/en/historia8_page12.mp3"
      }
    }
  ]
},

{
  id: "historia9",
  title: "O Que Vamos Fazer Depois da Escola?",
  image: "images/books/mia(0).png",
  pages: [
    {
      image: "images/books/mia(1).png",
      text: {
        pt: "O sinal da escola tocou, e Mia, Leo e Sam saíram correndo com as mochilas balançando. “Finalmente! Acabou a aula,” disse Mia. “O que a gente vai fazer agora?” Leo chutou uma pedrinha. “Eu quero ir ao parque.” Sam abanou a cabeça: “O parque é legal, mas está muito quente.” Mia sorriu: “E se a gente tomar um sorvete primeiro?”",
        en: "The school bell rang, and Mia, Leo, and Sam spilled out with their backpacks bouncing. “Finally! School’s over,” said Mia. “What should we do now?” Leo kicked a pebble. “I kind of want to go to the park.” Sam shook his head, “The park is fun, but it’s so hot.” Mia smiled, “What if we get ice cream first?”"
      },
      audio: {
        pt: "audio/historias/historia9_page1.mp3",
        en: "audio/historias/en/historia9_page1.mp3"
      }
    },
    {
      image: "images/books/mia(2).png",
      text: {
        pt: "Leo bateu palmas: “Boa ideia! Vamos para a sorveteria da Rua Maple.” Sam ergueu a mão como se pedisse permissão: “Por favor, vamos! Eu adoro aquela loja.” Mia riu: “Então está decidido!” Eles começaram a caminhar, comentando sobre as lições de casa e os planos para o fim de semana.",
        en: "Leo clapped his hands, “Great idea! Let’s go to the ice cream shop on Maple Street.” Sam raised his hand as if asking permission, “Please, let’s go! I love that place.” Mia laughed, “Then it’s decided!” They started walking, chatting about homework and their weekend plans."
      },
      audio: {
        pt: "audio/historias/historia9_page2.mp3",
        en: "audio/historias/en/historia9_page2.mp3"
      }
    },
    {
      image: "images/books/mia(3).png",
      text: {
        pt: "No caminho, passaram por jardins cheios de flores. “Olha aquelas rosas vermelhas,” disse Mia. “Lindas! Parece que dizem ‘olá’ para a gente,” respondeu Sam. Leo comentou: “Minha mãe adoraria essas flores. Devíamos trazer algumas para ela um dia.” “Boa ideia,” disse Mia. “Podemos fazer isso depois da escola amanhã.”",
        en: "On the way, they passed gardens full of flowers. “Look at those red roses,” said Mia. “Beautiful! They look like they’re waving hello to us,” replied Sam. Leo added, “My mom would love these flowers. We should bring some for her one day.” “Great idea,” said Mia. “We could do that after school tomorrow.”"
      },
      audio: {
        pt: "audio/historias/historia9_page3.mp3",
        en: "audio/historias/en/historia9_page3.mp3"
      }
    },
    {
      image: "images/books/mia(4).png",
      text: {
        pt: "Quando chegaram à sorveteria, a campainha da porta tocou alegremente. “Boa tarde!” disse a atendente com um grande sorriso. “O que vão querer hoje?” Mia respondeu educadamente: “Olá! Eu gostaria de um sorvete de morango, por favor.” A atendente sorriu: “Um morango para você, claro!”",
        en: "When they reached the ice cream shop, the doorbell jingled cheerfully. “Good afternoon!” said the clerk with a big smile. “What can I get for you today?” Mia answered politely, “Hi! I’d like a strawberry cone, please.” The clerk smiled, “One strawberry for you, of course!”"
      },
      audio: {
        pt: "audio/historias/historia9_page4.mp3",
        en: "audio/historias/en/historia9_page4.mp3"
      }
    },
    {
      image: "images/books/mia(5).png",
      text: {
        pt: "Leo se aproximou: “Eu quero menta com pedacinhos de chocolate, por favor.” “Excelente escolha,” respondeu a atendente. Sam bateu palmas: “Eu quero chocolate duplo, por favor!” A atendente riu: “Chocolate duplo é sempre um sucesso.” Ele preparou cada cone com cuidado. “Aqui estão! Aproveitem.”",
        en: "Leo stepped forward, “I’d like mint with chocolate chips, please.” “Excellent choice,” replied the clerk. Sam clapped, “I want double chocolate, please!” The clerk laughed, “Double chocolate is always a winner.” He prepared each cone carefully. “Here you go! Enjoy.”"
      },
      audio: {
        pt: "audio/historias/historia9_page5.mp3",
        en: "audio/historias/en/historia9_page5.mp3"
      }
    },
    {
      image: "images/books/mia(6).png",
      text: {
        pt: "“Muito obrigada,” disse Mia. “Obrigado!” completaram Leo e Sam. “De nada, pessoal! Tenham um ótimo dia,” respondeu a atendente. Eles sentaram perto da janela e começaram a saborear os sorvetes. “Melhor ideia de todas,” disse Mia. “Bem melhor que dever de casa,” riu Sam. “Concordo totalmente,” falou Leo, lambendo o sorvete antes que derretesse.",
        en: "“Thank you so much,” said Mia. “Thanks!” added Leo and Sam. “You’re welcome, have a great day,” replied the clerk. They sat by the window and began to enjoy their ice cream. “Best idea ever,” said Mia. “Way better than homework,” Sam laughed. “Totally agree,” said Leo, licking his ice cream before it melted."
      },
      audio: {
        pt: "audio/historias/historia9_page6.mp3",
        en: "audio/historias/en/historia9_page6.mp3"
      }
    },
    {
      image: "images/books/mia(7).png",
      text: {
        pt: "Depois de terminar, eles começaram a caminhar de volta para casa, rindo e conversando sobre o que fariam amanhã. “Olhem aquelas flores na calçada,” disse Mia. “São lindas!” “Minha mãe adoraria,” disse Leo. “Podemos pegar algumas amanhã depois da escola?” Sam perguntou. “Só se fizermos a lição primeiro,” respondeu Mia, rindo.",
        en: "After finishing, they started walking home, laughing and chatting about what they’d do tomorrow. “Look at those flowers on the sidewalk,” said Mia. “They’re beautiful!” “My mom would love them,” said Leo. “Can we pick some tomorrow after school?” Sam asked. “Only if we do homework first,” replied Mia, laughing."
      },
      audio: {
        pt: "audio/historias/historia9_page7.mp3",
        en: "audio/historias/en/historia9_page7.mp3"
      }
    },
    {
      image: "images/books/mia(8).png",
      text: {
        pt: "Eles passaram por uma lojinha de bairro e cumprimentaram o dono: “Boa tarde!” “Boa tarde, crianças! Como foi o dia?” perguntou ele. “Muito divertido!” responderam todos juntos.",
        en: "They passed a little neighborhood shop and greeted the owner: “Good afternoon!” “Good afternoon, kids! How was your day?” he asked. “Very fun!” they all replied together."
      },
      audio: {
        pt: "audio/historias/historia9_page8.mp3",
        en: "audio/historias/en/historia9_page8.mp3"
      }
    },
    {
      image: "images/books/mia(9).png",
      text: {
        pt: "Chegando em casa, Mia suspirou feliz: “Hoje foi um ótimo dia depois da escola.” Leo sorriu: “Eu concordo! Que divertido foi tudo.” Sam acrescentou: “Mal posso esperar para amanhã!”",
        en: "Arriving home, Mia sighed happily: “Today was such a great after-school day.” Leo smiled, “I agree! Everything was so much fun.” Sam added, “I can’t wait for tomorrow!”"
      },
      audio: {
        pt: "audio/historias/historia9_page9.mp3",
        en: "audio/historias/en/historia9_page9.mp3"
      }
    },
    {
      image: "images/books/mia(10).png",
      text: {
        pt: "Eles se despediram e entraram em casa, felizes e cansados. “Até amanhã!” disse Mia, acenando. “Até amanhã!” responderam Leo e Sam, já pensando na próxima aventura.",
        en: "They said goodbye and went into their homes, happy and tired. “See you tomorrow!” said Mia, waving. “See you tomorrow!” replied Leo and Sam, already thinking about the next adventure."
      },
      audio: {
        pt: "audio/historias/historia9_page10.mp3",
        en: "audio/historias/en/historia9_page10.mp3"
      },
    },
  ],
},
{
  id: "historia10",
  title: "Fazendo Biscoitos com a Vovó",
  image: "images/books/cece(0).png",
  pages: [
    {
      image: "images/books/cece(1).png",
      text: {
        pt: "A cozinha já cheirava a baunilha e açúcar quente. Cece subiu no banquinho ao lado da vovó. “Pronta para fazer biscoitos?” perguntou a vovó. “Sim! Já lavei as mãos,” disse Cece. “Muito bem, querida. Por favor, pegue a tigela grande.” Cece pegou a tigela com um sorriso. “Obrigada,” disse a vovó.",
        en: "The kitchen already smelled like vanilla and warm sugar. Cece climbed onto the stool beside Grandma. “Ready to make cookies?” Grandma asked. “Yes! I washed my hands already,” said Cece. “Very good, dear. Please grab the big mixing bowl.” Cece held the bowl with a smile. “Thank you,” said Grandma."
      },
      audio: {
        pt: "audio/historias/historia10_page1.mp3",
        en: "audio/historias/en/historia10_page1.mp3"
      }
    },
    {
      image: "images/books/cece(2).png",
      text: {
        pt: "“Agora coloque duas xícaras de farinha, com cuidado,” disse a vovó. Cece inclinou o medidor e uma nuvem de farinha pousou em seu nariz. “Está nevando farinha!” riu Cece. “Que divertido!” disse a vovó. “Agora adicione o açúcar, por favor.” “Posso provar um pouquinho, por favor?” perguntou Cece. “Só uma pitadinha, minha ladra de biscoito,” respondeu a vovó.",
        en: "“Now add two cups of flour, carefully,” said Grandma. Cece tilted the measuring cup and a cloud of flour landed on her nose. “It’s snowing flour!” Cece giggled. “How fun!” said Grandma. “Now add the sugar, please.” “May I taste a little, please?” asked Cece. “Just a pinch, my cookie thief,” replied Grandma."
      },
      audio: {
        pt: "audio/historias/historia10_page2.mp3",
        en: "audio/historias/en/historia10_page2.mp3"
      }
    },
    {
      image: "images/books/cece(3).png",
      text: {
        pt: "Cece provou e sorriu. “Hummm, obrigada!” “Agora quebre os ovos—cuidado com as cascas,” orientou a vovó. “Ops, um pedacinho caiu,” disse Cece. “Boa observação. Vamos tirar juntas,” respondeu a vovó. Elas mexeram a massa com a colher de madeira, rindo quando a massa grudava nos dedos.",
        en: "Cece tasted and smiled. “Yum, thank you!” “Now crack the eggs—careful with the shells,” Grandma instructed. “Oops, a piece fell in,” said Cece. “Good catch. Let’s get it out together,” replied Grandma. They stirred the dough with the wooden spoon, laughing when the dough stuck to their fingers."
      },
      audio: {
        pt: "audio/historias/historia10_page3.mp3",
        en: "audio/historias/en/historia10_page3.mp3"
      }
    },
    {
      image: "images/books/cece(4).png",
      text: {
        pt: "“Hora das gotas de chocolate,” disse a vovó. “Quer despejar, por favor?” “Sim!” Cece virou o pacote e as gotas caíram como pequenos tesouros. “Obrigada pela ajuda,” disse a vovó. “De nada!” riu Cece. “Agora, vamos colocar porções da massa na assadeira,” continuou a vovó. Cece pegou a colher com cuidado. “Assim está bom?” “Perfeito,” elogiou a vovó.",
        en: "“Time for the chocolate chips,” said Grandma. “Will you pour them in, please?” “Yes!” Cece tipped the bag and the chips fell in like tiny treasures. “Thanks for helping,” said Grandma. “You’re welcome!” Ella giggled. “Now let’s scoop the dough onto the tray,” Grandma continued. Cece held the spoon carefully. “Is this okay?” “Perfect,” praised Grandma."
      },
      audio: {
        pt: "audio/historias/historia10_page4.mp3",
        en: "audio/historias/en/historia10_page4.mp3"
      }
    },
    {
      image: "images/books/cece(5).png",
      text: {
        pt: "Elas encheram duas assadeiras. “Obrigada por me deixar ajudar,” disse Cece. “Eu adoro fazer biscoitos com você.” “Eu também adoro quando você ajuda,” respondeu a vovó. “Pronta para colocar no forno?” “Sim, por favor!” Cece observou enquanto a vovó colocava as assadeiras cuidadosamente.",
        en: "They filled two baking trays. “Thank you for letting me help,” said Cece. “I love making cookies with you.” “I love when you help, too,” replied Grandma. “Ready to put them in the oven?” “Yes, please!” Cece watched as Grandma carefully slid the trays inside."
      },
      audio: {
        pt: "audio/historias/historia10_page5.mp3",
        en: "audio/historias/en/historia10_page5.mp3"
      }
    },
    {
      image: "images/books/cece(6).png",
      text: {
        pt: "Enquanto os biscoitos assavam, um cheiro delicioso tomou conta da cozinha. “Está cheirando cada vez melhor,” disse Cece. “Quase prontos,” respondeu a vovó. “Mas precisamos deixar esfriar depois.” “Tudo bem, eu espero,” disse Cece, mesmo batendo os pés de ansiedade.",
        en: "As the cookies baked, a delicious smell filled the kitchen. “It smells better and better,” said Cece. “Almost ready,” replied Grandma. “But we need to let them cool afterward.” “Okay, I’ll wait,” said Cece, even as she tapped her feet impatiently."
      },
      audio: {
        pt: "audio/historias/historia10_page6.mp3",
        en: "audio/historias/en/historia10_page6.mp3"
      }
    },
    {
      image: "images/books/cece(7).png",
      text: {
        pt: "Quando o timer apitou, a vovó deslizou os biscoitos dourados para a grade de resfriamento. “Eles estão lindos!” exclamou Cece. “Posso pegar um agora, por favor?” “Ainda estão quentes, mas podemos dividir um pequeno,” disse a vovó com um sorriso.",
        en: "When the timer dinged, Grandma slid the golden cookies onto the cooling rack. “They look beautiful!” exclaimed Cece. “Can I have one now, please?” “They’re still hot, but we can share a small one,” said Grandma with a smile."
      },
      audio: {
        pt: "audio/historias/historia10_page7.mp3",
        en: "audio/historias/en/historia10_page7.mp3"
      }
    },
    {
      image: "images/books/cece(8).png",
      text: {
        pt: "Cece pegou o biscoito com cuidado. “Obrigada, vovó!” Ela deu uma mordida. “Hummm! Crocante por fora, macio por dentro.” A vovó sorriu: “A melhor ajudante sempre ganha o primeiro biscoito.” Cece abraçou a vovó. “Melhor dia de cozinha de todos!”",
        en: "Cece held the cookie carefully. “Thank you, Grandma!” She took a bite. “Mmm! Crispy on the outside, soft on the inside.” Grandma smiled, “The best helper always gets the first cookie.” Cece hugged Grandma. “Best baking day ever!”"
      },
      audio: {
        pt: "audio/historias/historia10_page8.mp3",
        en: "audio/historias/en/historia10_page8.mp3"
      }
    },
    {
      image: "images/books/cece(9).png",
      text: {
        pt: "“Agora vamos arrumar a cozinha,” disse a vovó. Cece pegou um pano e começou a limpar a mesa. “Obrigada por me ensinar,” disse Cece. “Eu adoro ajudar.” “Eu também adoro quando você ajuda,” respondeu a vovó.",
        en: "“Now let’s tidy up the kitchen,” said Grandma. Cece grabbed a cloth and started wiping the table. “Thank you for teaching me,” said Cece. “I love helping.” “I love it when you help too,” replied Grandma."
      },
      audio: {
        pt: "audio/historias/historia10_page9.mp3",
        en: "audio/historias/en/historia10_page9.mp3"
      }
    },
    {
      image: "images/books/cece(8).png",
      text: {
        pt: "Depois de limpar, sentaram-se na mesa com os biscoitos. “Posso comer mais um, por favor?” perguntou Cece. “Claro,” disse a vovó. Elas comeram e riram juntas. “Melhor dia de cozinha de todos!” disse Cece. “Concordo totalmente,” respondeu a vovó, sorrindo.",
        en: "After cleaning, they sat at the table with the cookies. “Can I have one more, please?” asked Cece. “Of course,” said Grandma. They ate and laughed together. “Best baking day ever!” said Cece. “I totally agree,” replied Grandma, smiling."
      },
      audio: {
        pt: "audio/historias/historia10_page10.mp3",
        en: "audio/historias/en/historia10_page10.mp3"
      },
    },
  ],
},

{
  id: "historia11",
  title: "O Brinquedo Perdido",
  image: "images/books/paws(0).png",
  pages: [
    {
	image: "images/books/paws(1).png",
      text: {
        pt: "Meu ursinho de pelúcia, Paws, sumiu! Procurei em todos os lugares da casa. Será que ele está debaixo da cama?",
        en: "My teddy bear, Paws, is missing! I looked everywhere in the house. Could he be under the bed?",
      },
      audio: {
        pt: "audio/historias/historia11_page1.mp3",
        en: "audio/historias/en/historia11_page1.mp3",
      },
    },
    {
	image: "images/books/paws(2).png",
      text: {
        pt: "Ajoelhei-me no tapete e olhei debaixo da cama. Entre o chão e o colchão havia apenas poeira e uma meia esquecida.",
        en: "I knelt on the rug and looked under the bed. Between the floor and the mattress there was only dust and a forgotten sock.",
      },
      audio: {
        pt: "audio/historias/historia11_page2.mp3",
        en: "audio/historias/en/historia11_page2.mp3",
      },
    },
    {
image: "images/books/paws(3).png",
      text: {
        pt: "Talvez ele esteja dentro do armário, atrás dos casacos. Olhei entre os cabides, em cima da prateleira e dentro de uma caixa de sapatos.",
        en: "Maybe he is inside the closet, behind the coats. I looked between the hangers, on top of the shelf, and inside a shoebox.",
      },
      audio: {
        pt: "audio/historias/historia11_page3.mp3",
        en: "audio/historias/en/historia11_page3.mp3",
      },
    },
    {
image: "images/books/paws(3.5).png",
      text: {
        pt: "Fui até a sala de estar. Será que ele está embaixo do sofá, atrás da poltrona ou ao lado da estante? Olhei cuidadosamente em cada canto, mas nada.",
        en: "I went to the living room. Could he be under the sofa, behind the armchair, or next to the bookshelf? I looked carefully in each corner, but nothing.",
      },
      audio: {
        pt: "audio/historias/historia11_page4.mp3",
        en: "audio/historias/en/historia11_page4.mp3",
      },
    },
    {
image: "images/books/paws(4).png",
      text: {
        pt: "Olhei também em cima da mesa de centro e atrás da televisão. Apenas livros, revistas e o controle remoto estavam lá.",
        en: "I also looked on top of the coffee table and behind the television. Only books, magazines, and the remote control were there.",
      },
      audio: {
        pt: "audio/historias/historia11_page5.mp3",
        en: "audio/historias/en/historia11_page5.mp3",
      },
    },
    {
image: "images/books/paws(5).png",
      text: {
        pt: "Na cozinha, abri os armários, olhei dentro da geladeira, em cima da mesa e até debaixo da pia. Havia pratos, copos e panelas, mas nenhum ursinho.",
        en: "In the kitchen, I opened the cupboards, looked inside the fridge, on top of the table, and even under the sink. There were plates, cups, and pans, but no teddy bear.",
      },
      audio: {
        pt: "audio/historias/historia11_page6.mp3",
        en: "audio/historias/en/historia11_page6.mp3",
      },
    },
    {
image: "images/books/paws(6).png",
      text: {
        pt: "Fui até a lavanderia. Olhei entre a máquina de lavar e o cesto de roupas, em cima da secadora e atrás de uma pilha de toalhas.",
        en: "I went to the laundry room. I looked between the washing machine and the laundry basket, on top of the dryer, and behind a pile of towels.",
      },
      audio: {
        pt: "audio/historias/historia11_page7.mp3",
        en: "audio/historias/en/historia11_page7.mp3",
      },
    },
    {
image: "images/books/paws(7).png",
      text: {
        pt: "No banheiro, olhei atrás da cortina do chuveiro, dentro da banheira, embaixo da pia e ao lado do espelho. Só vi minha escova de dentes e um sabonete cheiroso.",
        en: "In the bathroom, I looked behind the shower curtain, inside the bathtub, under the sink, and next to the mirror. I only saw my toothbrush and a sweet-smelling soap.",
      },
      audio: {
        pt: "audio/historias/historia11_page8.mp3",
        en: "audio/historias/en/historia11_page8.mp3",
      },
    },
    {
image: "images/books/paws(8).png",
      text: {
        pt: "Até o corredor eu verifiquei. Olhei embaixo do tapete, entre os pares de sapatos, atrás da porta e perto do guarda-chuva.",
        en: "I even checked the hallway. I looked under the rug, between the pairs of shoes, behind the door, and near the umbrella.",
      },
      audio: {
        pt: "audio/historias/historia11_page9.mp3",
        en: "audio/historias/en/historia11_page9.mp3",
      },
    },
    {
image: "images/books/paws(9).png",
      text: {
        pt: "Subi até o sótão. O sótão era escuro e cheio de caixas. Olhei embaixo de uma mesa velha, dentro de uma mala e atrás de um espelho quebrado.",
        en: "I climbed up to the attic. The attic was dark and full of boxes. I looked under an old table, inside a suitcase, and behind a broken mirror.",
      },
      audio: {
        pt: "audio/historias/historia11_page10.mp3",
        en: "audio/historias/en/historia11_page10.mp3",
      },
    },
    {
image: "images/books/paws(10).png",
      text: {
        pt: "Depois fui até a garagem. Olhei entre a bicicleta e a bola, em cima de uma caixa de ferramentas e atrás da porta pesada.",
        en: "Then I went to the garage. I looked between the bicycle and the ball, on top of a toolbox, and behind the heavy door.",
      },
      audio: {
        pt: "audio/historias/historia11_page11.mp3",
        en: "audio/historias/en/historia11_page11.mp3",
      },
    },
    {
image: "images/books/paws(11).png",
      text: {
        pt: "No quintal, olhei atrás do arbusto de rosas, embaixo do banco de madeira, perto do balanço e até dentro do galpão.",
        en: "In the backyard, I looked behind the rose bush, under the wooden bench, near the swing, and even inside the shed.",
      },
      audio: {
        pt: "audio/historias/historia11_page12.mp3",
        en: "audio/historias/en/historia11_page12.mp3",
      },
    },
    {
image: "images/books/paws(12).png",
      text: {
        pt: "Por fim, voltei para o meu quarto. Olhei embaixo da escrivaninha, ao lado da cadeira, em cima da estante e dentro da caixa de brinquedos.",
        en: "At last, I went back to my room. I looked under the desk, next to the chair, on top of the bookshelf, and inside the toy box.",
      },
      audio: {
        pt: "audio/historias/historia11_page13.mp3",
        en: "audio/historias/en/historia11_page13.mp3",
      },
    },
    {
image: "images/books/paws(13).png",
      text: {
        pt: "De repente, vi algo marrom atrás da almofada azul na cama. Uma orelha peluda apareceu. Era o Paws! Ele estava escondido ali o tempo todo.",
        en: "Suddenly, I saw something brown behind the blue pillow on the bed. A furry ear appeared. It was Paws! He had been hiding there all along.",
      },
      audio: {
        pt: "audio/historias/historia11_page14.mp3",
        en: "audio/historias/en/historia11_page14.mp3",
      },
    },
  ],
},
{
  id: "historia12",
  title: "Sir Reginald e o Dragão Rabugento",
  image: "images/books/sir(0).png",
  pages: [
    {
image: "images/books/sir(1).png",
      text: {
        pt: "Sir Reginald era um cavaleiro feliz. Seu castelo era claro e brilhante. O sol entrava por dez janelas altas e iluminava os corredores.",
        en: "Sir Reginald was a happy knight. His castle was bright and shiny. The sun came in through ten tall windows and lit up the halls.",
      },
      audio: {
        pt: "audio/historias/historia12_page1.mp3",
        en: "audio/historias/en/historia12_page1.mp3",
      },
    },
    {
image: "images/books/sir(2).png",
      text: {
        pt: "Do outro lado do fosso vivia o dragão Grumpy. Sua caverna era escura e fria, com apenas uma pequena entrada. Dentro dela havia pedras duras e água gelada.",
        en: "Across the moat lived the dragon Grumpy. His cave was dark and cold, with only a small entrance. Inside were hard stones and cold water.",
      },
      audio: {
        pt: "audio/historias/historia12_page2.mp3",
        en: "audio/historias/en/historia12_page2.mp3",
      },
    },
    {
image: "images/books/sir(3).png",
      text: {
        pt: "“Olá, Grumpy!”, gritou Sir Reginald. “Quer brincar com minha bola grande e saltitante?”",
        en: "“Hello, Grumpy!” shouted Sir Reginald. “Do you want to play with my big, bouncy ball?”",
      },
      audio: {
        pt: "audio/historias/historia12_page3.mp3",
        en: "audio/historias/en/historia12_page3.mp3",
      },
    },
    {
image: "images/books/sir(4).png",
      text: {
        pt: "“Não”, resmungou o dragão. “Sua bola é muito grande. Minha pedrinha é pequena e cabe dentro da minha caverna.”",
        en: "“No,” grumbled the dragon. “Your ball is too big. My pebble is small and fits inside my cave.”",
      },
      audio: {
        pt: "audio/historias/historia12_page4.mp3",
        en: "audio/historias/en/historia12_page4.mp3",
      },
    },
    {
image: "images/books/sir(5).png",
      text: {
        pt: "O cavaleiro pensou rápido. Correu até a cozinha do castelo. Havia três canecas na mesa. Encheu uma com leite frio, outra com água morna e outra com chocolate quente.",
        en: "The knight thought quickly. He ran to the castle kitchen. There were three mugs on the table. He filled one with cold milk, another with warm water, and another with hot chocolate.",
      },
      audio: {
        pt: "audio/historias/historia12_page5.mp3",
        en: "audio/historias/en/historia12_page5.mp3",
      },
    },
    {
image: "images/books/sir(6).png",
      text: {
        pt: "Ele atravessou lentamente a ponte. O cavaleiro era alto, forte e pesado. O dragão era baixo, fraco e leve naquele dia triste.",
        en: "He slowly crossed the bridge. The knight was tall, strong, and heavy. The dragon was short, weak, and light on that sad day.",
      },
      audio: {
        pt: "audio/historias/historia12_page6.mp3",
        en: "audio/historias/en/historia12_page6.mp3",
      },
    },
    {
image: "images/books/sir(7).png",
      text: {
        pt: "“Aqui está, meu amigo. Algo quente para o seu lugar frio.” Grumpy tomou um pequeno gole. Seus olhos ficaram brilhantes e um sorriso apareceu.",
        en: "“Here you go, my friend. Something hot for your cold place.” Grumpy took a small sip. His eyes grew bright and a smile appeared.",
      },
      audio: {
        pt: "audio/historias/historia12_page7.mp3",
        en: "audio/historias/en/historia12_page7.mp3",
      },
    },
    {
image: "images/books/sir(8).png",
      text: {
        pt: "De repente, a caverna escura parecia mais clara. O dia triste ficou alegre. O silêncio virou risada.",
        en: "Suddenly, the dark cave seemed brighter. The sad day became happy. The silence turned into laughter.",
      },
      audio: {
        pt: "audio/historias/historia12_page8.mp3",
        en: "audio/historias/en/historia12_page8.mp3",
      },
    },
    {
image: "images/books/sir(9).png",
      text: {
        pt: "O cavaleiro grande e o dragão pequeno sentaram juntos. Um era rápido, o outro lento. Um estava quente, o outro frio. Mas agora eram dois amigos felizes.",
        en: "The big knight and the small dragon sat together. One was fast, the other slow. One was warm, the other cold. But now they were two happy friends.",
      },
      audio: {
        pt: "audio/historias/historia12_page9.mp3",
        en: "audio/historias/en/historia12_page9.mp3",
      },
    },
    {
image: "images/books/sir(10).png",
      text: {
        pt: "Eles começaram a contar coisas. Contaram uma espada, dois escudos, três tochas, quatro elmos e cinco bandeiras no castelo.",
        en: "They started counting things. They counted one sword, two shields, three torches, four helmets, and five flags in the castle.",
      },
      audio: {
        pt: "audio/historias/historia12_page10.mp3",
        en: "audio/historias/en/historia12_page10.mp3",
      },
    },
    {
image: "images/books/sir(11).jpg",
      text: {
        pt: "Depois contaram seis pedras, sete nuvens, oito pássaros voando, nove peixes no lago e dez estrelas no céu da noite.",
        en: "Then they counted six stones, seven clouds, eight birds flying, nine fish in the pond, and ten stars in the night sky.",
      },
      audio: {
        pt: "audio/historias/historia12_page11.mp3",
        en: "audio/historias/en/historia12_page11.mp3",
      },
    },
    {
image: "images/books/sir(12).png",
      text: {
        pt: "O dragão antes solitário agora tinha companhia. O cavaleiro antes sozinho agora tinha um amigo. Diferentes, mas juntos.",
        en: "The once lonely dragon now had company. The once alone knight now had a friend. Different, but together.",
      },
      audio: {
        pt: "audio/historias/historia12_page12.mp3",
        en: "audio/historias/en/historia12_page12.mp3",
      },
    },
    {
image: "images/books/sir(14).png",
      text: {
        pt: "Quando a lua subiu no céu, eles estavam cansados, mas não tristes. Estavam felizes. Dois amigos, um grande e um pequeno, rindo juntos.",
        en: "When the moon rose in the sky, they were tired but not sad. They were happy. Two friends, one big and one small, laughing together.",
      },
      audio: {
        pt: "audio/historias/historia12_page14.mp3",
        en: "audio/historias/en/historia12_page14.mp3",
      },
    },
  ],
},

];

// Generates the stories menu page
function generateHistórias() {
  // Stop any playing audio when leaving a story
  if (currentStoryAudio) {
    currentStoryAudio.pause();
    currentStoryAudio = null;
  }

  app.innerHTML = `
      <div class="full-screen-game">
        <h2 style="text-align:center;">Histórias</h2>
        <div id="stories-list" class="story-options-container"></div>
        <div style="margin-top:20px;">
          <button onclick="showMainMenu()">Voltar a Menu</button>
        </div>
      </div>
    `;
  initHistórias();
}

// Initializes and populates the stories menu
function initHistórias() {
  const storiesListEl = document.getElementById("stories-list");

  if (allStories.length === 0) {
    storiesListEl.innerHTML = "<p>Sem Histórias 🙁</p>";
    return;
  }

  storiesListEl.innerHTML = ""; // Clear previous content
  allStories.forEach((story) => {
    const storyButton = document.createElement("button");
    storyButton.classList.add("story-button");
    storyButton.onclick = () => viewStory(story.id, 0); // Start at page 0
    storyButton.innerHTML = `
        <img src="${story.image}" alt="${story.title}" class="story-button-image">
        <span>${story.title}</span>
    `;
    storiesListEl.appendChild(storyButton);
  });
}

// Displays the content of a selected story page
function viewStory(storyId, pageIndex) {
  const story = allStories.find((s) => s.id === storyId);
  if (!story || !story.pages || !story.pages[pageIndex]) {
    app.innerHTML = `
      <div class="full-screen-game">
        <h2>Erro</h2>
        <p>Sem Histórias</p>
        <div style="margin-top:20px;">
          <button onclick="generateHistórias()">Voltar a Histórias</button>
        </div>
      </div>
    `;
    return;
  }

  const currentPage = story.pages[pageIndex];
  const totalPages = story.pages.length;

  // Stop any previous audio before generating new content
  if (currentStoryAudio) {
    currentStoryAudio.pause();
    currentStoryAudio = null;
  }

  app.innerHTML = `
    <div class="full-screen-game">
      <h2 style="text-align:center;">${story.title}</h2>
      <div class="stories-buttons-top-right">
        <button id="toggleAudioBtn" class="small-language-btn" onclick="toggleAudio()">
            ${isAudioEnabled ? "🔊" : "🔇"}
        </button>
        <button class="top-small-language-btn btn-blue ${
          currentAudioLanguage === "pt" ? "active" : ""
        }" onclick="setAudioLanguage('pt', '${storyId}', ${pageIndex})">🔊Portuguese</button>
        <button class="top-small-language-btn btn-green ${
          currentAudioLanguage === "en" ? "active" : ""
        }" onclick="setAudioLanguage('en', '${storyId}', ${pageIndex})">🔊English</button>
      </div>
      <div class="story-content card">
        <img src="${currentPage.image}" alt="${
    story.title
  }" class="story-content-image">
        <div class="story-text-container">
            <p class="story-page-text">${
              currentPage.text[currentTextLanguage]
            }</p> 
        </div>
      </div>
      
      <!-- NEW: Language and Audio buttons are now positioned relative to the story page container -->

      <div class="stories-buttons-bottom-right">
        <button class="small-language-btn btn-blue ${
          currentTextLanguage === "pt" ? "active" : ""
        }" onclick="setTextLanguage('pt', '${storyId}', ${pageIndex})">🔤Portuguese</button>
        <button class="small-language-btn btn-green ${
          currentTextLanguage === "en" ? "active" : ""
        }" onclick="setTextLanguage('en', '${storyId}', ${pageIndex})">🔤English</button>
      </div>
      
      <div class="story-page-controls-bottom">
  ${
    pageIndex > 0
      ? `<button onclick="viewStory('${storyId}', ${
          pageIndex - 1
        })">Página Anterior</button>`
      : "<button disabled>Página Anterior</button>"
  }
  <span class="page-indicator">Página ${pageIndex + 1} de ${totalPages}</span>
  ${
    pageIndex < totalPages - 1
      ? `<button onclick="viewStory('${storyId}', ${
          pageIndex + 1
        })">Próxima Página</button>`
      : `<button onclick="generateHistórias()">Fim</button>`
  }
</div>

      <div style="margin-top:20px;">
        <button onclick="generateHistórias()">Voltar a Histórias</button>
      </div>
    </div>
  `;

  // Auto-play audio for the current page if enabled, using the selected language's audio path
  playStoryAudio(currentPage.audio[currentAudioLanguage]);
}

// ----------------------

// Start the app
showIntro();
