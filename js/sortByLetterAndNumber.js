let musics = [
  music1= {
    id: 1,
    artist: "The weeknd",
    name: "blinding lights",
    URL: "https://baarzesh.net/%D8%A2%D9%87%D9%86%DA%AF-blinding-lights/",
  },
  music2= {
    id: 2,
    artist: "Selena gomez",
    name: "I love you like a love song, baby",
    URL: "https://www.tarafdari.com/node/1176403",
  },
  music3= {
    id: 3,
    artist: "Adel",
    name: "someone likes you",
    URL: "https://baarzesh.net/%D8%A2%D9%87%D9%86%DA%AF-%D8%A7%D8%AF%D9%84-someone-like-you/",
  },
  music4= {
    id: 4,
    artist: "Inna",
    name: "thicky",
    URL: "https://kjmusic.ir/inna-thicky/",
  },
];

// sort by letter
console.log(
    musics.sort(function(a, b){
      let x = a.artist.toLowerCase();
      let y = b.artist.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    }));
 


// Numerical sort
// console.log(musics.sort(function(a, b){return b.id - a.id}));