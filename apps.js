let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

var myDomain = pronoun.concat(adj,noun);


for (i = 0; i < myDomain.length; i++) {
  var a = Math.floor(Math.random() * 2);
  var b = Math.floor(Math.random() * 2);
  var c = Math.floor(Math.random() * 2);
  console.log(pronoun[a]+adj[b]+noun[c]+".com");
}
