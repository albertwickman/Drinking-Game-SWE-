var padding = {top: 0, right: 0, bottom: 0, left: 0},
    w = 295;
h = 295;
r = Math.min(w, h) / 2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category10();//category20c()
//randomNumbers = getRandomNumbers();
//http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results

var questions = [
    "Läs upp dina topp bestfriends på snapchat",
    "Läs upp dina 7 första på instastory",
    "Hur många killar/tjejer snackar du med just nu?",
    "Vem var ditt senaste ligg och var det bra?",
    "3 saker som gör dig avtänd?",
    "3 saker som gör dig kåt detaljerat?",
    "Vem var ditt senaste hångel och hur var det?",
    "Vad är din största fobi?",
    "Är du bra i sängen?",
    "Vad är ditt störta fuckup i sängen?",
    "Vem var ditt sämsta ligg?",
    "Vem var ditt bästa ligg?",
    "Om du fick ligga med en du redan legat med, vem skulle det vara?",
    "Om du fick ångra en du redan legat med vem skulle det vara?",
    "Läs dina snapchat bestfriends",
    "Hur ofta onanerar du?",
    "Vem var ditt bästa ligg?",
    "Ditt bästa orgasmtips?",
    "3 tips till oralsex?",
    "Berätta om ett one night stand",
    "Vilket är den sjukaste platsen du legat på?",
    "Vem är din crush?",
    "Vilken är din största osäkerhet?",
    "Senaste gången du hade sex?",
    "Senaste gången du onanerade?",
    "Vem i rummet hånglar du med helst?",
    "Hur många har du legat med?",
    "Vem i rummet ligger du med helst?",
    "Hur många har du hånglat med?",
    "Det snuskigaste du gjort i skolan?",
    "Det snuskigaste du gjort i sängen?",
    "Vad väljer du: Celibat i 1 år eller dåligt sex i 3 år?",
    "Har du strippat för någon? Om du har, berätta hur du gjorde det",
    "När förlorade du din oskuld?",
    "Har du varit otrogen?",
    "Skulle du tänka dig att ha trekant med 2 personer av könet du inte är attraherad?",
    "Har du någon gång blivit bunden under sex? Om inte, är det något du vill prova?",
    "Har du haft telefonsex?",
    "Har du haft snapchat-sex?",
    "Har du ljugit för att få någon i säng? Vad sa du i så fall?",
    "Vilken kroppsdel på det kön du är attraherad av är sexigast?",
    "Har du använt en sexleksak? Förklara detaljerat",
    "Skulle du kunna tänka dig att använda anus i sexuellt syfte?",
    "Har du haft sex på offentlig plats? Isåfall vart?",
    "Har du tagit nakenbilder på dig själv?",
    "Har du tagit nakenbilder på någon annan?",
    "Nämn en kändis du skulle kunna ha sex med",
    "Nämn en person dubbelt så gammal som du som du skulle kunna ligga med",
    "Vad är din age-limit på att ligga med någon?",
    "Vem är den äldsta du hållit på med?",
    "Vem är den yngsta du hållit på med?",
    "Har du hånglat med fler än 1 på samma kväll? Berätta",
    "Har du någon gång legat med 2 personer under samma dygn? Berätta",
    "Har du sårat någon rejält någon gång? Berätta",
    "Har du blivit sårad rejält någon gång? Berätta",
    "Vad är din weak-spot när det kommer till sex?",
    "Vilken sex-ställning är din favorit?",
    "Berätta om ditt värsta sex",
    "Berätta om ditt bästa sex",
    "Har du legat utomlands?",
    "Har du legat på en båt?",
    "3 egenskaper som din drömkille/drömtjej har?",
    "3 saker som en kille/tjej måste ha om du ska involvera dig i dem seriöst?",
    "3 saker som en kille/tjej INTE får ha om du ska involvera dig i dem seriöst?",
    "3 saker du avskyr med det motsatta könet?",
    "3 saker du älskar med det motsatta könet?",
    "Favoritlåt under sex?",
    "Om du var tvungen att ha sex med en person av ditt egna kön, vem skulle det vara?",
    "Har du varit intresserad av någon av samma kön?",
    "Har du legat med fler än 30 personer sammanlagt?",
    "Vart drar du gränsen vid att en person legat med ”många”?",
    "Tycker du om någon just nu?",
    "Vad gör dig galet kåt?",
    "Har du någon guilty pleasure?",
    "Har du haft sex i snön eller på is?",
    "Har du haft sex på en strand?",
    "Om du fick ändra 1 sak med dig själv, vad skulle det vara?",
    "Vad är ditt bästa trick i sängen för att någon ska komma ihåg dig?",
    "Hur gör du för att någon ska falla för dig? Berätta detaljerat",
    "Hur får man dig i säng?",
    "Hur får du andra i säng?",
    "Vad är ditt bästa raggningstips?",
    "Vad är din bästa raggningsreplik?",
    "Vem är ditt senaste och värsta ligg?",
    "Rumpa eller bröst och varför?",
    "Lång och smal med stor snopp eller kort och och mullig med liten snopp? ",
    "Does size matter?",
    "Vad är det sexigaste på din kropp?",
    "Vad är det pinsammaste du gjort i sängen?",
    "Vad är ditt bästa achievement i sängen?",
    "Vem som du legat med ligger du med igen över din döda kropp?",
    "Hur långt eller kort är ett riktigt nice sex för dig?",
    "Nämn dina 3 bästa hångel",
    "Har du någonsin haft sex i köket?",
    "Nämn dina topp 3 bästa ligg och varför de var bra",
    "Anser du att det är någon typ av cred om man legat med många?",
    "Tror du någon är bättre i sängen som har haft många one night stands eller en långvarig partner? Förklara",
    "Brunett eller blond?",
    "Legat med någon som är 10 år äldre?",
    "Har du ",
    "Har du någonsin haft sex med 12 personer samtidigt?",
    "Hånglat med någon annans kille/tjej? Berätta",
    "Är du omskuren? Och om du är tjej, vad föredrar du?",
    "Hur långt är du villig att gå första dejten?",
    "Tror du på att man har en själsfrände?",
    "När grät du sist?",
    "Vad är det mest romantiska du vet?",
    "Vad är det sexigaste du vet fysiskt?",
    "Vad är det sexigaste du vet psykiskt?",
    "Vad är det första du lägger märkte till på motsatta könet?",
    "Finns du på någon dejtingsida, och i så fall vilken/vilka?",
    "Har du någonsin varit på en stripklubb? Om inte, vill du?",
    "Har du någonsin varit på en sexklubb? Om inte, vill du?",
    "Har du någon gång blivit kysst av någon av könet du inte är attraherad av, vem i så fall?",
    "Har du med dig några kondomer just nu?",
    "Har du någon gång glömt dina underkläder någonstans? Berätta",
    "Vilket är ditt mest romantiska minne?",
    "Hade du legat med personen till vänster om dig för 10 000kr",
    "På en skala 1-10 hur kåt är du just nu?",
    "Peka ut den mest troliga deltagaren som kommer ligga inatt",
    "Vem i rummet skulle du vilja ligga med helst?",
    "Vilket är det konstigaste stället du rakat dig på?",
    "Vilken låt sätter du på om du vill förföra någon?",
    "Beskriv hur du är i sängen med 3 ord",
    "Har du haft sex hög någon gång? Berätta",
    "Hur många gånger under samma dag har du haft sex som max?",
    "Om du kunde ändra en sak i ditt förflutna vad skulle det vara?",
    "Gillar du dirty talk?",
    "Gillar du att använda sexleksaker när du har sex?",
    "Har du någonsin legat med någon för att få den att gilla dig? Vem och varför?",
    "Har du någonsin gråtit under eller precis efter en orgasm?",
    "Har du haft mer engångsligg eller längre relationer?",
    "Har du några fetischer? Vilka isåfall?",
    "Vilken är din snuskigaste dröm?",
    "Har du legat i en bil? Berätta",
    "Vilken är den bästa lärdomen du tar från dina tidigare relationer?",
    "Skulle du ta tillbaka någon som varit otrogen?",
    "Vad är bättre, att någon är ärlig med att den inte gillar dig eller om dem håller det för sig själva?",
    "Att dumpa eller bli dumpad? Vad är minst smärtsamt tror du?",
    "Hur ser du på droger?",
    "Vilken har varit din värsta torka hittills?",
    "Ha dåligt sex med en riktigt snygg person eller ha världens bästa sex med någon riktigt ful? ",
    "Om du är heterosexuell, har du homosexuella fantasier? (Eller tvärtom)",
    "Gillar du klädsex?",
    "Hur påklädd har du varit som mest under sex?",
    "Har du provat eller skulle vilja prova BDSM? ",
    "Vem i rummet tror du kysser bäst?",
    "Vilken är den märkligaste platsen du kissat på?",
    "Har du någon gång avsiktligt spridit ett falskt rykte?",
    "Vem har du stalkat och varför?",
    "Är du en giver eller taker?",
    "Vad skäms du mest över hos din partner eller ex?",
    "Är du förtjust i någon i rummet?",
    "Har du någon gång ändrat dig om att vilja ha sex med någon efter att ha sett den naken?",
    "Vart var du första gången du kysste någon?",
    "Är du rädd för att dö?",
    "Har du haft en könsjukdom? Om ja, vilken?",
    "Vem i detta rummet hade du helst legat med?",
    "Nämn något du ångrar i livet?",
    "Har du någon gång gjort något brottsligt?",
    "När hade du din första fylla? Berätta",
    "Din värsta fylla. Berätta!",
    "Vem är snyggast i rummet?",
    "Vad är meningen med livet?",
    "Din favoritsexställning?",
    "3 saker du absolut inte kan acceptera hos en partner?",
    "Hur mycket yngre/äldre kan du tänka dig att bli tillsammans med?",
];

var players = [];

var data = [];

let j = 0;
var svg;
var container;
var vis;
var pie;
var arc;
var arcs;

svg = d3.select('#chart')
    .append("svg")
    .data([data])
    .attr("width", w + padding.left + padding.right)
    .attr("height", h + padding.top + padding.bottom);

function renderWheel() {
    data.push({"label": players[j], "value": j});
    const ul = document.getElementById("player_ul");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(players[j]));
    ul.appendChild(li);
    j++;

    pie = d3.layout.pie().sort(null).value(function (d) {
        return 1;
    });

    container = svg.append("g")
        .attr("class", "chartholder")
        .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");
    vis = container
        .append("g");

    // declare an arc generator function
    arc = d3.svg.arc().outerRadius(r);

    // select paths, use arc generator to draw
    arcs = vis.selectAll("g.slice")
        .data(pie)
        .enter()
        .append("g")
        .attr("class", "slice");

    arcs.append("path")
        .attr("fill", function (d, i) {
            return color(i);
        })
        .attr("d", function (d) {
            return arc(d);
        });

    // add the text
    arcs.append("text").attr("transform", function (d) {
        d.innerRadius = 0;
        d.outerRadius = r;
        d.angle = (d.startAngle + d.endAngle) / 2;
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
    })
        .attr("text-anchor", "end")
        .text(function (d, i) {
            return data[i].label;
        });

    //draw spin circle
    container.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 60)
        .style({"fill": "white", "cursor": "pointer"});

    //spin text
    container.append("text")
        .attr("x", 0)
        .attr("y", 10)
        .attr("text-anchor", "middle")
        .text("SPIN")
        .style({"font-weight": "bold", "font-size": "30px", "font-family": "sans-serif"});


    document.getElementById('nameInput').value = null;
}


function spin(d) {
    //all slices have been seen, all done
    var ps = 360 / data.length,
        pieslice = Math.round(1440 / data.length),
        rng = Math.floor((Math.random() * 1440) + 360);

    rotation = (Math.round(rng / ps) * ps);

    picked = Math.round(data.length - (rotation % 360) / ps);
    picked = picked >= data.length ? (picked % data.length) : picked;

    rotation += 90 - Math.round(ps / 2);
    vis.transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", function () {

            //populate question
            d3.select("#question h1")
                .text(getRandomQuestion());
            oldrotation = rotation;

            /* Get the result value from object "data" */
            console.log(data[picked].value)

            /* Comment the below line for restrict spin to single time */
            //container.on("click", spin);
        });

    //make arrow
    svg.append("g")
        .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
        .append("path")
        .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
        .style({"fill": "white"});
}


function rotTween(to) {
    var i = d3.interpolate(oldrotation % 360, rotation);
    return function (t) {
        return "rotate(" + i(t) + ")";
    };
}

function getRandomNumbers() {
    var array = new Uint16Array(1000);
    var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
    if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
        window.crypto.getRandomValues(array);
        console.log("works");
    } else {
        //no support for crypto, get crappy random numbers
        for (var i = 0; i < 1000; i++) {
            array[i] = Math.floor(Math.random() * 100000) + 1;
        }
    }
    return array;
}

function getRandomQuestion() {
    let randomNumber = Math.floor(Math.random() * questions.length);
    return questions[randomNumber];
}

function createPlayer() {
    const val = document.getElementById('nameInput').value;
    if (val !== "") {
        players.push(val);
    }
    else {
        return;
    }
    for (var i in players) {
        console.log(players[i]);
    }
    renderWheel();
}

function reloadPage() {
    return window.location.reload();
}
