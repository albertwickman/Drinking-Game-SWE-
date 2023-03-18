const words = [
    'apa',
    'banan',
    'citron',
    'dator',
    'elefant',
    'fisk',
    'häst',
    'igloo',
    'jordgubbe',
    'katt',
    'lampa',
    'mango',
    'nöt',
    'oliv',
    'pasta',
    'råtta',
    'sallad',
    'tårta',
    'uggla',
    'vattenmelon',
    'zebra',
    'äpple',
    'ödla',
    'blomma',
    'cykel',
    'dusch',
    'elektronik',
    'fotboll',
    'giraff',
    'hockey',
    'is',
    'järn',
    'klocka',
    'löv',
    'målning',
    'nallebjörn',
    'olja',
    'penna',
    'quesadilla',
    'sol',
    'träd',
    'ull',
    'vindruvor',
    'yacht',
    'zucchini',
    'ankare',
    'biljett',
    'cirkus',
    'diamant',
    'fantasi',
    'gris',
    'himmel',
    'iskräm',
    'jazz',
    'karamell',
    'laser',
    'måne',
    'näbb',
    'olika',
    'pil',
    'quiche',
    'raket',
    'solnedgång',
    'trubadur',
    'under',
    'akrobat',
    'banjo',
    'choklad',
    'delfin',
    'elektriker',
    'fyr',
    'guldfisk',
    'hälsning',
    'isbjörn',
    'jungfru',
    'krokodil',
    'lönn',
    'maskin',
    'nässla',
    'ostron',
    'papegoja',
    'quiz',
    'räv',
    'sjöhäst',
    'tandborste',
    'ursäkt',
    'valp',
    'xenofobi',
    'yxa',
    'zoo',
    'abstrakt',
    'bumerang',
    'cement',
    'diskmaskin',
    'elefantunge',
    'fyrverkeri',
    'gigantisk',
    'hälsosam',
    'island',
    'järnväg',
    'kniv',
    'läder',
    'möbel',
    'nattskärra',
    'öken',
    'paprika',
    'quinoa',
    'rom',
    'salamander',
    'taco',
    'ugn',
    'valuta',
    'xylofonist',
    'yoghurtkultur',
    'zink',
    'akvamarin',
    'bison',
    'champagne',
    'dykning',
    'elektricitet',
    'fanfar',
    'glaciär',
    'havre',
    'iskaffe',
    'jordbävning',
    'kaviar',
    'långsam',
    'maskros',
    'ninja',
    'ödemark',
    'palats',
    'qvadrat',
    'raketbränsle',
    'segel',
    'unik',
    'vante',
    'xenon',
    'zest',
    'basilika',
    'cirkel',
    'drakon',
    'emalj',
    'fjärrkontroll',
    'gigant',
    'hållbar',
    'isig',
    'jazzmusik',
    'kanel',
    'läderjacka',
    'människa',
    'nötkött',
    'överleva',
    'pastell',
    'rispapper',
    'solros',
    'tålamodig',
    'unge',
    'vild',
    'xylofon',
    'yachtclub'
];

function getRandomWord(list) {
    let i = Math.floor(Math.random() * list.length);
    let word = list[i];
    return word;
}

function findDuplicates() {
    let count = 0;
    let duplicates = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i] === words[j]) {
                count++;
                duplicates.push(words[i]);
            }
        }
    }
    console.log(count);
    console.log(duplicates);
}

document.getElementById("wordBtn").addEventListener("click", () => {
    getRandomWord(words);
});

document.getElementById("restart").addEventListener("click", () => {
    window.location.reload();
});