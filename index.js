//Team Selection Game
//Annabelle Yee
//23/06/2021

//having a list of players ready to be picked 
let players = ['Anna', 'Abi', 'Annabelle', 'Zoe', 'Xanthe', 'Georgia', 'Lily', 'Ella', 'Samantha', 'Bob', 'Sal', 'Jo'];

//having two empty teams waiting to have players to be added
let team1 = [];
let team2 = [];
let round = 1;
let length = players.length;

do {
  //pick a random member from 'players' list
  let player1 = Math.floor(Math.random() * length + 0);
  // console.log(player1);
  let player1Name = players[player1];
  // console.log(player1Name);

  //to remove the random person picked from the 'players' list 
  players.splice(player1, 1);
  // console.log(players);

  //to add the random person picked to Team1
  console.log('Team 1: ' + player1Name);
  team1.push (player1Name)
  round++;
  length--;

  //give Team2 a member 
  //pick a random member from 'players' list
  let player2 = Math.floor(Math.random() * length + 0);
  // console.log(player2);
  let player2Name = players[player2];
  // console.log(player2Name);

  //to remove the random person picked from the 'players' list 
  players.splice(player2, 1);
  // console.log(players);

  //to add the random person picked to Team1
  console.log('Team 2: ' + player2Name);
  team2.push(player2Name)

  round++;
  length--;

} while (round <= 12);
console.log("Team 1 is: " + team1);
console.log("Team 2 is: " + team2);

