HEAD
function createGame(player1, hour, player2) {
  return ` 
  <li>
   <img src="./assets/icon-${player1}.svg" alt=" Bandeira do ${player1}" />
   <strong>${hour}</strong>
   <img src="./assets/icon-${player2}.svg" alt=" Bandeira da ${player2}" />
 </li>
 `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
      <div class="card" style= "animation-delay: ${delay}s">
          <h2> ${date} <span> ${day} </span> </h2>
          <ul>
           ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "Quinta", createGame("brazil", "14:00", "Serbia")) +
  createCard("28/11", "Segunda", createGame("brazil", "14:00", "switzerland")) +
  createCard("02/12", "Sexta", createGame("brazil", "11:00", "Cameroon"))

function createGame(player1, hour, player2){
    return`
    <li>
     <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
     <strong>${hour}</strong>
     <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">

    </li>
    `
}

function createCard(date, day, games){
    return `<div class="card">
            <h2>${date} <span>${day}</span></h2>
            <ul>
             ${games}
           </ul>
        </div>
        `
}

    
document.querySelector("#app").innerHTML =  `
    <header>
        <img src="./assets/logo.svg" alt="Logo da NLW">
    </header>
    <main id="cards">
       ${createCard('24/11', 'quinta', 
       createGame('brazil', '16:00', 'serbia'))} 
       ${createCard('28/11', 'segunda', 
       createGame('brazil', '13:00', 'switzerland') +
       createGame('portugal', '16:00', 'uruguai'))} 
       ${createCard('02/12', 'sexta', 
       createGame('brazil', '16:00', 'cameroon'))} 
    </main>
`
fd4861f686716a6bdc85d8170017e18136befe73
