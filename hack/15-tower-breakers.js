// Tower Breakers \\

/* 
Given the values  of n and m
  determine which player will win 
If the first player 1 wins, return 2. Otherwise, return 2.

- Two players are playing a game of Tower Breakers! 
- Player 1  always moves first
- Initially there are n towers.
- Each tower is of height m.
- The players move in alternating turns.
- In each turn, a player can choose a tower of height x and reduce its height to y ,
  - y is bigger than one and smaller than x
  - y evenly divides x. 
- If the current player is unable to make a move, they lose the game.
- If there is one height to the tower left, then that player loses
  int n: the number of towers
  int m: the height of each tower
*/

const towerBreakers = (n, m) => (m <= 1 || n % 2 === 0) ? 2 : 1;

let i, o, test = (e, a) => a === e ? true : `a(${a}) !== e(${e})`;
//Test 1
i = { n: 2, m: 2 }, o = 2;
console.log(test(o, towerBreakers(i.n, i.m)));
//Test 2
i = { n: 1, m: 4 }, o = 1;
console.log(test(o, towerBreakers(i.n, i.m)));

