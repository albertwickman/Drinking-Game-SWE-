const questions = [
    "Läs upp dina 7 första på instastory",
    "Hur många killar/tjejer snackar du med just nu",
    "Vem var ditt senaste ligg och var det bra?",
    "3 saker som gör dig avtänd",
    "3 saker som gör dig kåt detaljerat",
    "Vem var ditt senaste hångel och hur var det?",
    "Vad är din största fobi",
    "Är du bra i sängen?",
    "Vad är ditt störta fuckup i sängen?",
    "Vem var ditt sämsta ligg?",
    "Vem var ditt bästa ligg?",
    "Om du fick ligga med en du redan legat med, vem skulle det vara?",
    "Om du fick ångra en du redan legat med vem skulle det vara?",
    "Läs dina snapchat bestfriends",
    "Hur ofta onanerar du?",
    "Vem var ditt bästa ligg?",
    "Ditt bästa orgasmtips",
    "3 tips till oralsex",
    "Berätta om ett one night stand",
    "Vilket är den sjukaste platsen du legat på?",
    "Vem är din crush?",
    "Vilken är din största osäkerhet?",
    "Senaste gången du hade sex?",
    "Senaste gången du onanerade?",
    "Vem i rummet hånglar du med helst?",
    "Vem i rummet ligger du med helst?",
    "Hur många har du legat med?",
    "Hur många har du hånglat med?",
    "Det snuskigaste du gjort i skolan",
    "Det snuskigaste du gjort i sängen",
    "Celibat i 1 år eller dåligt sex i 1 år",
    "Har du strippat för någon, om du har, berätta hur du gjorde det",
    "När förlorade du din oskuld, om du inte har, när vill du göra det?",
    "Har du varit otrogen?",
    "Skulle du tänka dig att ha trekant med 2 personer av samma kön som du har? Och varför?",
    "Har du någon gång blivit bunden under sex och om inte, är det något du vill prova?",
    "Har du haft telefonsex? Via telefonsamtal?",
    "Har du haft snapchat-sex?",
    "Har du ljugit för att få någon i säng, och vad sa du i så fall?",
    "Vilken kroppsdel på det kön du är attraherad av är sexigast?",
    "Har du använt en sexleksak? Förklara detaljerat",
    "Skulle du kunna tänka dig att använda anus i sexuellt syfte?",
    "Sex på offentlig plats? Och i så fall vart?",
    "Har du tagit nakenbilder på dig själv?",
    "Har du tagit nakenbilder på någon annan?",
    "Nämn en kändis du skulle kunna ha sex med",
    "Nämn en person dubbelt så gammal som du som du skulle kunna ligga med",
    "Vad är din age-limit på att haffa någon",
    "Vem är den äldsta du hållt på med",
    "Vem är den yngsta du hållt på med",
    "Har du någon gång legat med 2 personer under samma dygn, berätta i så fall",
    "Har du hånglat med fler än 1 på samma kväll? Berätta",
    "Har du sårat någon rejält någon gång? Berätta",
    "Har du blivit sårad rejält någon gång, berätta",
    "Vad är din weak-spot när det kommer till sex",
    "Vilken sex-ställning är din favorit",
    "Berätta om ditt värsta sex",
    "Berätta om ditt bästa sex",
    "Har du legat utomlands?",
    "Har du legat på en båt?",
    "3 egenskaper som din drömkille/drömtjej har",
    "3 saker som en kille/tjej måste ha om du ska involvera dig i dem seriöst",
    "Samma som 60 men som hon/han inte får han",
    "3 saker du avskyr med det motsatta könet",
    "3 saker du älskar med det motsatta könet",
    "Favorit-soundtrack under sex?",
    "Om du var tvungen att ha sex med en person av ditt egna kön, vem skulle det vara?",
    "Har du varit intresserad av någon av samma kön?",
    "Matsex? Berätta",
    "Har du legat med fler än 10 personer sammanlagt?",
    "Vart drar du gränsen vid att en person legat med ”många”",
    "Berätta om en gång du fått smisk",
    "Tycker du om någon just nu?",
    "Vad gör dig galet kåt?",
    "Haft sex i snön eller på is?",
    "Haft sex på en strand?",
    "Om du fick ändra 1 sak med dig själv, vad skulle det vara?",
    "Vad är ditt bästa trick i sängen för att fnågon ska komma ihåg dig?",
    "Hur gör du för att någon ska falla för dig? Detaljerat tack!",
    "Hur får man dig i säng?",
    "Hur får du andra i säng?",
    "Vad är ditt bästa raggningstips?",
    "Din bästa raggningsreplik",
    "Ditt senaste och värsta ligg",
    "Vad är ditt dirty pleasure",
    "Rumpa eller tuttar och varför",
    "Lång och smal med stor snopp eller kort och och mullig med liten snopp?",
    "Does size matter?",
    "Vad är sexigast på det motsatta könet?",
    "Vad är det sexigaste på din kropp?",
    "Vad är det pinsammaste du gjort i sängen?",
    "Vad är ditt bästa achievement i sängen?",
    "Vem som du legat med ligger du med igen över din döda kropp?",
    "Hur långt eller kort är ett riktigt nice sex för dig?",
    "Nämn dina 3 bästa hångel",
    "Har du någonsin haft sex i köket?",
    "Nämn dina topp 3 bästa ligg om du legat med färre, förklara också varför dem var bra",
    "Anser du att det är någon typ av cred om man legat med många?",
    "Tror du någon är bättre i sängen som har haft många one night stands eller en långvarig partner, förklara",
    "Brunett eller blond?",
    "Kollar du porr eller fantiserar du när du onanerar? Eller hur gör du?",
    "Gjort ett sugmärke på någon? Och i så fall var det med flit, förklara",
    "Kysst någon över 30? Föräldrar gills inte.",
    "Hånglat med någon annans kille/tjej? Berätta",
    "Är du omskuren? Och om du är tjej- vad föredrar du?",
    "Hur långt är du villig att gå första dejten?",
    "Tror du på att man har en själsfrände eller flera?",
    "När grät du sist?",
    "Vad är det mest romantiska du vet?",
    "Vad är det sexigaste du vet? Psykiskt",
    "Vad är det sexigaste du vet fysiskt",
    "Vad är det första du lägger märkte till på motsatta könet?",
    "Finns du på någon dejtingsida, och i så fall vilken/vilka?",
    "Har du någonsin varit på en sexklubb, om inte, vill du?",
    "Har du någon gång blivit kysst av någon av samma kön, vem i så fall?",
    "Har du med dig några kondomer just nu?",
    "Har du någon gång glömt dina underkläder någonstans? Berätta",
    "Vilket är ditt mest romantiska minne?",
    "På en skala 1-10 hur tänd är du just nu?",
    "Peka ut de 2 mest troliga deltagarna som kommer hångla innan kvällen är slut",
    "Vilket är det konstigaste stället du rakat dig på?",
    "Vilken låt sätter du på om du vill förföra någon?",
    "Beskriv hur du är i sängen med 3 ord",
    "Har du haft sex hög någon gång? Berätta",
    "Hur många gånger om dagen har du haft sex som max?",
    "Om du kunde ändra 1 sak i ditt förflutna vad skulle det vara?",
    "Om du har fler en ett ex, jämför ditt sexliv med dem två nämn namn",
    "Gillar du dirty talk?",
    "Gillar du att använda sexleksaker när du har sex?",
    "Har du någonsin legat med någon för att få den att gilla dig? Vem och varför?",
    "Har du någonsin gråtit under eller precis efter en orgasm?",
    "Har du någonsin använt en kondom med smak?",
    "Hur många engångsligg har du haft?",
    "Har du några fetischer? Vilka isf?",
    "Vilken är din snuskigaste dröm?",
    "Har du gjort något snuskigt i en bil någon gång?",
    "När har du älskat någon som inte älskat dig tillbaka?",
    "Har du blivit dumpad?",
    "Vilken är den bästa lärdomen du tar från dina tidigare relationer?",
    "Skulle du ta tillbaka någon som varit otrogen?",
    "Vad är bättre, att någon är ärlig med att den inte gillar dig eller om dem håller det för dem själva?",
    "Att dumpa eller bli dumpad? Vad är minst smärtsamt tror du?",
    "Hur ser du på droger?",
    "Vilken har varit din värsta torka hittills?",
    "Ha dåligt sex med en riktigt het jävla människa eller ha världens bästa sex med någon riktigt ful?",
    "Har du homosexuella fantasier?",
    "Gillar du klädsex?",
    "Hur påklädd har du varit som mest under sex?",
    "Har du provat eller skulle vilja prova BDSM?",
    "Vem i rummet tror du kysser bäst? Du får basera detta på egna erfarenheter",
    "Vilken är den märkligaste platsen du kissat på?",
    "Har du någon gång avsiktligt spridit ett falskt rykte?",
    "Vem har du stalkat och varför?",
    "Är du en giver?",
    "Ger eller tar du?",
    "Vad skäms du mest över hos din partner eller ex?",
    "Är du förtjust i någon i rummet? Och i så fall vem?",
    "Har du någon gång ändrat dig om att vilja ha sex med någon efter att ha sett den naken?",
    "Vart var du första gången du kysste någon?",
    "Är du rädd för att dö?",
    "Boxer eller briefs?",
    "Har du haft en könsjukdom? Om ja vilken och varför?",
    "Vem i detta rummet hade du helst legat med?",
    "Något du ångrar i livet?",
    "Har du någon gång gjort något brottsligt?",
    "Din första fylla. Berätta!",
    "Hitta din livs kärlek eller bli miljardär?",
    "Vem är snyggast i rummet?",
    "Vad är meningen med livet?",
    "Din värsta fylla. Berätta!",
    "Din favoritställning.",
    "Har du varit på strippklubb. Berätta.",
    "Tre saker du absolut inte kan acceptera hos en partner.",
    "Hur mycket yngre/äldre kan du tänka dig att bli tillsammans med?"
];


let i = 0;

function questionGenerator() {
    let text = questions[i];

    console.log(i++);

    document.getElementById('nextQuestion').innerHTML = 'Nästa fråga';
    document.getElementById('200Question').innerHTML = text;

    if (i === questions.length) {
        i = 0;
    }
}