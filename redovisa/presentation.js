/* global menu */

"use strict";

var presentation = (function () {
    var showPresentation = function () {
        window.mainContainer.innerHTML = "";
        menu.showMenu("people");

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Redovisning";

        var greeting = document.createElement("p");

        greeting.innerHTML = `
        <article>

        <p>Detta är redovisningssidan för kursen webapp.</p>

        <section>
        <h2>Kmom01</h2>
        <p>Då var jag klar med första kursmomentet inom kursen webapp-v3 och
        det gick bra.  Jag har inte jobbat specifikt med mobila appar förut men
        jag lärde mig en hel del om responsivitet, användarvänlighet, presentation,
        vertikal rytm mm i Designkursen och känner att dessa kunskaper kommer
        hjälpa mig i denna kurs också.  Under alla kurser hittills har man byggt
        upp webbplatser baserat på desktop skärmar först och anpassat dem i
        efterhand med brytpunkter för mindre skärmar.  Men i detta kursmoment var
        det tvärtom, man bygger en webbapplikation för den mindre skärm först och
        anpassar den till större skärmar i efterhand, en mobil först strategi.</p>

        <p>Både redovisnings appen samt Lager appen är en Single Page Application,
        SPA, där man bygger om sidan med hjälp av moduler och funktioner för att
        skapa dynamiskt innehåll utan att ladda om sidan.  Denna teknik att bygga
        en webbaplikation känner jag igen från JavaScript kursen, ännu mer kunskap
        som kommer till användning nu.</p>

        <p>När det gäller typografi så är min viktigaste lärdom att skapa en
        lättläst sida, speciellt om den är textintensiv med hjälp av vitt utrymme
        och vertikal rytm.  Att jobba med vitt utrymme samt vertikal rytm på
        sidan är ett effektivt sätt att presentera en behaglig läsnings upplevelse.
        Man klara detta genom att jobba med sidans line-height, marginaler och
        padding ihop med det magiska nummer, radavstånd * typsnittsstorlek.
        Man kan också jobba med olika typsnitt som gör väldigt mycket för att
        skapa en lättläst sida.  Jag valde noggrant typsnitt till min me-app och
        lager-appen där jag valde till slut typsnitten ’Droid Sans’ och ’Bitter’
        som var skapade och motiverade för mindre skärmar.  Jag tycker att texten
        blir lättare att läsa med både dessa typsnitten.</p>

        <p>Jag har också hämtat data från olika API med hjälp av Postman programmet
        samt direkt i webb-appen genom ’fetch’.  Jag har tidigare använt många
        olika program som jobbar med en API för att kommunicera med olika servrar
        och hämta eller skicka data, men detta är första gången jag har hanterat
        hela processen själv.  Egentligen är det inte så svårt att göra en API
        call där man behöver bara skicka med specifika argument för motsvarande
        parameter till servern och hantera resultatet därefter.  Postman var
        väldigt smidigt för att kunna testa hur allting fungerar innan man börjar
        koda i webb-appen.</p>

        <p>Jag ser fram emot att lära mig ännu mer webbapplikations tekniker
        under kursen gång, framförallt när den mobila platform är så pass
        populär idag.</p>

        <p>Min TIL för detta kursmoment är hur effektiv och kraftfull en RESTful,
        REpresentational State Transfer, API, Application Program Interface,
        är för att kommunicera och utvecklar mot servrar.</p>
        </section>

        <section>
        <h2>Kmom02</h2>
        <p>Då var jag klar med kmom02 inom kursen webapp-v3 där fokus ligger på
        sökning i JSON filer, struktur i JavaScript och CSS samt designstrategin
        flat design.

        <p>Jag jobbade med verktygen jq som används för att söka igenom JSON-filer,
        ett smidigt och enkelt program som underlättar när det finns mycket data
        att söka igenom.  Postman har jag använt en del nu ihop med lager-appen
        för att kontrollera det verkliga innehållet som hjälper att förbereda
        bättre när man kodar själva appen.  Jag har också jobbat lite med curl,
        ett snabbt men kraftfull CLI verktyg som är ett alternativ till både jq
        och Postman.  Alla dessa verktyg har sina styrkor och underlättar jobbet
        när man ska hantera mycket data så snabbt och effektivt som möjligt.
        Det största fördelen är att man kan filtrera snabbt ut specifika innehåll
        med väldigt lite kod.  Med Postman uppskattar jag möjligheten att enkelt
        spara specifika requests för senare återanvändning samt den
        användarvänligt UI.</p>

        <p>Jag har nu en bättre struktur på både min JavaScript och CSS kod.
        När det gäller CSS
        så har jag använt SASS för att dela upp stylen till olika moduler, vilket
        blir både lättare att läsa samt underhålla.  Jag har också använt en del
        variabler som ger en centralpunkt för att snabbt ändra färgpaletten eller
        typsnitten.  En till stor fördel är att kunna enkelt lägga in externa
        moduler som ”normalize” ihop med sin egen style för att sedan kompilera
        allting till en enda, minimerat, CSS fil.  Jag har jobbat tidigare med
        LESS så jag känner igen strukturen och fördelarna, det kändes som ett
        naturligt steg i utvecklingen.</p>

        <p>JavaScript koden som finns i flera filer kompileras nu med hjälp av
        webpack till en fil, vilket är det enda fil som behöver importeras till
        index.html.  Fördelen nu är att jag kan förlita mig på att alla mina
        JavaScript filer kommer att importeras, smidigt.  Att använda
        ”npm run watch” för att omgående uppdatera filen är en nödvändig
        funktion, annars hade webpack varit osmidigt och tidskrävande.</p>

        <p>Jag tycker om flat design och känner att den ger ett kliniskt, modern
        och snygg känsla till en webbapplikation.  Jag tycker också om färg och
        känner att navigeringen blir tydligare med färg kodade knappar, så jag
        skapade mina med både en grundfärg samt ”hover” färg ihop med en mjuk
        transition.  Mina knappar har däremot inga skuggor eller borders.</p>

        <p>Jag har lagt till en ny vy på min lager app som visar enbart nya ordrar,
        orderstatus 100.  På varje order finns det länkar till en plocklista vy
        som visa lager detaljer och en checklista.  Jag testar om det finns
        tillräckligt av en produkt i lager och om detta är sant kan man klicka på
        checkrutan.  Annars visas en varnings ikon, man kan inte klicka på
        checkrutan och färgen på lager(stock) värdet ändras till röd.  Enbart
        när man har checkat av alla produkter i ordern visas en knapp för att
        ändra order statusen till ”packad” och uppdaterar lager saldo på alla
        produkter i ordern.  Finns det brist på en produkt kan man inte checka
        av den vilket resulterar i att man kommer inte heller åt knappen.</p>

        <p>Min TIL för detta kursmoment är hur en bra struktur på både JavaScript
        och CSS kan underlätta utvecklingen samtidigt som den ger möjligheten
        att återanvända kod.</p>
        </section>

        <section>
        <h2>Kmom03</h2>
        <p>Då var jag klar med kmom03 inom kursen webapp-v3, där fokus ligger
        på formulär och CRUD.  Jag har byggt en ny app för inleveranser med hjälp
        av ramverket Mithril.  Detta ramverk var nytt för mig men jag kände igen
        konceptet från mitt tidigare arbete inom Express.js och Flask.</p>

        <p>När man designar formulär för mobila enheter behöver man ta hänsyn
        till den mindre skärmstorlek, inmatning med mindre precision samt begränsade
        datatillgänglighet. Man kan underlätta och effektivisera saker genom att
        anpassa formulär vyn, lagra och återanvända så mycket data som möjligt och
        specificera vilken sorts inmatning som förväntas.  Om man behöver ett
        datum kan man välja den som inmatnings typ som resulterar i att man kan
        välja ett datum från en kalender, mycket enklare.  Man kan också specificera
        inmatningstyper för siffror, telefonnummer, epost, lösenord och text.
        Att utnyttja effektivt den mindre skärmytan är nödvändigt där man kan
        jobba med typsnitt, storlek, marginaler och padding för att visa
        formulären tydligare med tillräckligt utrymme runt om.</p>

        <p>Övergången från vanilla JavaScript till ett JavaScript ramverk kändes
        helt naturligt.  Att jobba med routes och objekt fungerar bra och
        underlättar en hel del, den blir mer flexibel och bättre strukturerad.
        Men om jag jämför med Express.js och Flask så känns Mithril lite
        krångligare och svårläst.  Allting gick bra men det blir lite pilligt
        med alla nestade element, lite rörigt.  Det är enklare att skriva ren
        HTML och skicka bara in data värdarna/objekt men ska man bygga en SPA
        så fungerar den väldigt bra för det.</p>

        <p>I min nya inleverans app har jag gjort designen så likt som möjligt
        som min tidigare app och jag vill gärna flytta över all funktionalitet
        från original appen, men bara om det behövs/krävs.</p>

        <p>Som extra uppgift har jag lagt till funktionalitet för att lägga in
        nya produkter i inleverans vyn, där jag gjorde ett liknande formulär och
        struktur som med inleveranserna.  När mar har lagt in en ny produkt blir
        man omdirigerad till inleveranserna där produkten finns nu tillgänglig i
        select listan.  Jag skapade också inleverans formulären med ett förvalt
        datum(dagens) samt kommentar för snabbare inmatning.</p>

        <p>Min TIL för detta kursmoment är de olika inmatnings typer som gör det
        ännu enklare att skriva ett formulär med anpassade tangentbord eller även
        en riktig kalender att välja ifrån.</p>
        </section>

        <section>
        <h2>Kmom04</h2>
        <p>Kmom04 inom kursen webapp handlar om autentisering med JWT samt
        utbyggandet av min lager app till version 4 med bättre designat tabeller
        och tillgång till en faktureringssida genom att registrera sig och logga
        in i sidan.</p>

        <p>När det gäller tabeller i mobila enheter så finns det en begränsad
        skärm yta för att presentera all data, i alla fall på bredden.  Man kan
        då vända tabellerna så att man skrolla ned till varje tabellrad vilket är
        det mest naturliga momentet på en mindre skärm.  Man kan skrolla sydligt
        men det resulterar i en dålig upplevelse och är omständligt.  I min lager
        app har jag vänt alla mina tabeller responsivt där jag gömde tabell
        headers i början av tabellen och ersatte med att varje ny rad har en header
        titel på vänster sidan följt av data på högersidan.  Jag tycker att det
        ser mycket bättre ut på detta sättet.</p>

        <p>På login sidan jobbar jag med JWT, JSON Web Token.  När man loggar in
        så hämtas en token som används för att komma åt data på fakturasidan.
        Förut har jag byggt möjligheten att logga in med en session ihop med en
        lokal databas där man stämmer av om login detaljerna är korrekt och
        släpper förbi användaren.  Men denna metod är relativt begränsad både
        funktionellt samt säkerhetsmässigt och där kommer JWT till användning.
        Med denna autentiserings metod kan man begränsa livslängden på en token
        så att den är giltig i en specificerad tid och därefter behöver man
        logga in igen.  Den skapar också ett mer säkert sätt att verifierar en
        användare eller klient vilket är alltid välkommet.</p>

        <p>På min lager sidan så göms menyvalen till fakturasidan samt åtkomst
        till routen om det saknas en token, där man omredigeras till login sidan.
        Har man inga inloggningsdetaljer så kan man registrera sig, där man är
        sedan automatiskt inloggad och omdirigerad till fakurasidan.  Jag skapade
        ett åtkomstobjekt som kan skicka inloggningsdetaljer från ett
        registreringsformulär med inmatning för både epost och lösenord i en POST
        request för att skapa en ny användare.  Sedan kallas en funktion till som
        skickar en POST request för att logga in med samma inmatade detaljer från
        registreringssidan för att sedan omdirigeras till den låsta fakturasidan.
        Har man inlogg så loggar man bara in som vanligt.
        Under inloggningsprocessen så lagras den returnerade token i objektet som
        sedan används för att skicka med en faktura request.  När menyn skapas
        så görs en kontroll om det finns en token annars visas inte fakturasidans
        länk.  På route hanterasidan så görs också en kontroll för att en token
        finns som sedan renderar sidan om den hittats, annars är man omdirigerad
        till inloggnings sidan.  Om man försöker logga in utan att registrera sig
        så fångar jag upp detta nekad promise och man blir omdirigerad till
        registreringssidan.</p>

        <p>Jag har också portat in, från grunden, funktionalitet som fanns med
        Lager app 1 och 2 till den senaste lager appen så jag nu har en stor
        lager app istället för två mindre.  Min app innehåller också en CSP,
        Content Security Policy, som bara tillåter precis det som behöver hämtas
        för att undvika XSS-attacker och liknande.</p>

        <p>Min TIL för detta kursmoment är strategin att vända en tabell för att
        enklare och snyggare presentera mycket tabelldata vertikalt där man har
        mest utrymme på mindre skärmar.</p>

        </section>

        <section>
        <h2>Kmom05</h2>
        <p>Webapp kmom05 handlar om att skapa en native Lager app som går att köra
        på Android, iOS samt i webbläsaren på datorn.  För att hjälpa med detta
        använder vi Apache Cordova ihop med mithril för att skapa en hybrid app,
        en webbsida som exekveras i mobilen som en native app.</p>

        <p>Fördelarna med en native app jämfört med webbapplikationer är en djupare
        integration med enhetens OS samt kopplade komponenter som kamera, GPS osv.
        Man kan lägga till en Splash screen samt ikoner för att ge ett riktigt
        proffsigt intryck, där allting känns och fungerar som en riktig app.
        Man kan också lägga ut sin hybrid app på plattformens egen app store för
        att nå en marknad som inte är åtkomligt annars.  Denna integrationen är
        svårt att uppnå med vanliga webbapplikationer och öppnar upp möjligheter
        som inte finns annars.  En fördel mot en riktig native app är att man
        använder en källkod till flera olika plattformar vilket resulterar i att
        det kräver mindre tid och jobb för att utveckla och underhålla samma
        projekt till flera olika plattformar.</p>

        <p>Jag har flyttad koden från min Lager app till min Cordova app utan
        problem och lagt till Android, iOS och browser plattformar.  Jag jobbar
        på Mac och har iPhone själv så det första jag gjorde var att starta Xcode
        och köra appen i en virtuell iPhone.  Sen kopplade jag in mobilen för att
        köra appen direkt i den, vilket resulterade i något bättre prestanda.
        Jag installerade Android Studio och startade upp en virtuell Android mobil
        som också fungerade bra.  Till slut körde jag appen i Safari på datorn
        som fungerade bäst prestandamässigt.  Så nu har jag fyra olika testmiljöer
        för att jobba med, vilket är bra för att känna av hur saker fungerar i
        verkligheten och vad de olika plattformarna erbjuder för att kunna anpassa
        appen så väl som möjligt.</p>

        <p>Jag skapade också en logga och Splash screen till de olika plattformar
        för att ge ett proffsigt intryck.  Jag jobbade med Abiro phoneGap Image
        Generator mest för att skapa bilderna, den fungerade bra för mig ihop med
        iconfinder.com.  Att man kan justera delay tiden och bildstorlek är ett plus.
        Förut har jag jobbat med olika favicon bilder för att ändra webbsidans icon
        när man spara länken till hämskärmen men att kunna lägga till en Splash
        screen är klart imponerande.</p>

        <p>När det gäller designen på min app har jag jobbat med Material icons som
        är väldigt snygga och eleganta, en viktig detalj för att skapa en proffsig
        och snygg app.  Jag har jobbat med en varm bakgrundsfärg för att skapa ett
        lugn och elegant känsla ihop med en blå accentfärg för knapparna och aktiva
        sidor i navaren för att enklare navigerar i appen.  Jag vill bygga en app
        som är relativt neutral i sin design men ändå påminner delvis om de native
        appar som finns med.  Lättläst, elegant och något minimalistiskt är nyckelord
        som jag följer i designprocessen.</p>

        <p>Min TIL för detta kursmoment är möjligheterna en hybrid app ger när det
        gäller djupare integration med själva enheten samt tidsbesparingen att kunna
        skapa en app som passar flera plattformar.</p>
        </section>

        <section>
        <h2>Kmom06</h2>
        <p>Då var jag klar med webapp kmom06 där jag byggde ut min Lager app
        ytterligare genom användning av GPS och karta för kund lokaliseringen
        samt kamera för att ta produktbilder.  En native app har tillgång till
        många olika resurser som inte finns på vanliga webbaplikationer och det
        gäller att använda dessa verktyg för att jobba mot mobila enheters
        styrkor.</p>

        <p>Cordova erbjuder många olika plugins som gör att man kommer åt enhetens
        hårdvara specifika funktioner, som GPS, kamera, kontaktlista mm.  Jag har
        installerat Cordova plugins för GPS samt åtkomst till kamera och resultatet
        blev imponerande.  Jag kunde hämta ut nuvarande position med GPS för att
        sedan visa på kartan vart man är, en enkel men relativt nödvändig funktion
        som man ta för givet nuförtiden.  Den stora fördelen här är möjligheten att
        kunna jobba med all funktionalitet som en native app har tillgång till men
        enbart installera de plugins som man kommer att använda.  Med varje plugin
        finns det instruktioner för hur den fungerar och vad man kan göra med den
        som kommer väl till användning.</p>

        <p>Jag tycker att jag fick ett bra gränssnitt med kartan, där varje kunds
        adress är startvyn när man klickar på en orderrad på packad sidan.  Man kan
        sedan zooma in och ut samt flytta kartan efter behov för att se vart ordern
        ska skickas.  Jag har lagt till en marker som flaggas vart man är just nu
        genom användning av enhetens GPS.  Utöver detta, har jag lagt till en egen
        knapp för att flytta kartans vy direkt till enhetens aktuella position, en
        funktion som är väldigt vanligt på dagens kartprogram.  Denna knapp finns
        överst på höger sidan av kartan.</p>

        <p>Jag har lagt till några animationer och effekter också, som att en
        undersida flyttas in och ut från höger, vilket ger en snygg rörelseeffekt.
        Detta blev särskilt snyggt när man pendlar emellan packade orders och kartvyn.
        Jag har också lagt till funktionalitet att kunna klicka var som helst på en
        order/produkt rad för att komma åt motsvarande detaljer sidan.  På mobila
        skärmar, när man håller fingret på en orderrad så ändras bakgrundsfärgen som
        ger en bekräftelse av vilken rad som är vald.  Det finns också en likande
        effekt på alla knappar i appen när man sätter fingret på dem.
        Denna funktionalitet är skapat genom funktionerna ontouchstart och
        ontouchend.</p>

        <p>Jag gjorde extrauppgiften också där jag installerade en plugin för
        kameran.  Jag skapade funktionalitet att ta en bild med enhetens kamera
        och lagra resulterande länk som src kod till image elementet.  Länken
        lagras ihop med produktens id så alla produkter kan ha olika bilder.
        Man kommer åt kamera funktionen genom kamera ikonen som finns på produkt
        detaljer sidan, som man kommer åt från Stock sidan.  Ikonen finns längre
        ned på sidan efter produktbeskrivningen.</p>

        <p>Min TIL för detta kursmoment är användning av Cordova plugins för att
        komma åt enhetens olika hårdvara och inbyggda funktioner, vilket är den
        största anledningen till att bygga en hybrid app.  Man kan nu bygga en
        komplett app där enbart fantasin stoppar.  Det finns mycket att göra här
        känner jag!</p>
        </section>

        <section>
        <h2>Kmom07-10</h2>
        <p>Då var jag klar med webapp kmom10 projektet och det gick bra.
        Jag utförde alla 6 kraven som fanns i projektet.</p>

        <h3>Krav 1: Specifikation, datakällor och arkitektur</h3>

        <p>Ligger i README.md, me/kmom10/proj.</p>

        <h3>Krav 2: En webapp</h3>

        <p>Jag har skapat en webapp som presenterar Polis aktiviteter ihop med
        andra relevanta informationer från tre olika API:er.  I början av projektet
        var jag osäker på vilken API jag skulle jobba med, med efter en undersökning
        av de olika tips så hittade jag ett intressant område, Polis.  Det fanns två
        olika API:er från polisen så det fanns en klar möjlighet att knyta ihop dessa
        till en komplett app.  Men jag kände att det skulle bli ännu bättre om jag
        jobbade med en tredje API, som inte var direkt kopplad till polisen med som
        var ändå relevant, som jag hittade till slut.  Ambitionen var att, som vanligt
        för mig, utföra alla kraven som fanns, vilket jag gjorde.  Det enda jag inte
        hade gjort under kursmomenten var att skapa en möjlighet för ett offline läge,
        men efter lite undersökning så var inte detta så svårt.  Min största
        prioritering under projektet var att den skulle vara lättanvänd, rolig och snygg.
        Jag känner mig nöjd med resultatet och tycker att jag har uppnått min ambition
        för vad jag hade tänkt mig från början.

        Jag har däremot lagt till mer tid än planerat, mest för att det var ett
        roligt projekt med intressanta API:er.  Det finns alltid förbättringar med
        allt man gör och följande är relevanta till min app:
        <ol>
        <li>Egen profil sida till varje användare som hjälper appen att fokusera
        på lokala händelser.</li>
        <li>Att varje event och polisstation har unika bilder, gärna kopplade till
        verkligheten.  Just nu så har jag lagt till 5 olika bilder per sida som
        loopas genom om och om för att ge ett snyggare, mer komplett, presentation
        av respektive API:s data.  Det hade varit tråkigt utan bilder helt enkelt.</li>
        <li>Push meddelande för nya händelser.</li>
        <li>Bättre kommunikation till användaren när nya data finns tillgängliga
        och under uppdateringsprocessen.</li>
        <li>Samlad statistik för alla områden när det gäller typ av händelse,
        hur ofta, hur mycket, hur allvarligt mm.</li>
        <li>Det finns säkert mer.</li>
        </ol>
        <h3>Krav 3: Native design</h3>

        <p><strong>Detta textstycke finns också med min README.md fil ihop med
        relevanta skärm dumpar.</strong></p>

        <p>Jag har valt ut BBC News appen på iOS för att min app ska efterlikna den.
        Detta var en rolig uppgift och krävde att man studera den befintliga appen
        noggrant när det gäller både design och funktionalitet.  Det första jag
        gjorde var att studera designen, där jag implementerade i min app liknande
        färger, typsnitt, layout, navigation samt generella smådetaljer.  När det
        gäller layouten, så tänkte jag att tabeller passar inte riktigt för mycket
        av innehållet om man jämför med BBC appen, så jag skapade en container för
        varje API resultat, på Events och Stations sidorna, och delade upp containern
        till två delar, bild på vänster sidan och text på höger, precis som i BBC appen.
        I resultaten från min API så fanns det klockslag med varje Polis event så jag
        ville visa detta fast liknande som BBC appen gör.  Då skapade jag en funktion
        som räknar ut tiden som har gått jämfört med radens klockstämpel, nu visas hur
        många minuter eller timmar sedan som själva händelsen inträffade.
        Jag presenterar också tiden med radens kategori länk bredvid till höger,
        precis som i BBC appen.  När man navigerar till detaljvyn för en Polis händelse
        eller station så finns samma knappdesign som BBC har för att gå tillbaka med
        samt nuvarande kategorin är markerad aktiv i scrollbaren.  Denna scrollbar
        fungerar samma som BBC appen gör, där man skrollar sydligt med touch eller
        klick genom alla kategorier för att filtrera innehållet som visas.
        På Polisstations sidan så visas istället för kategorier alla tjänster som
        motsvarande station erbjuder.  Alla dessa stationstjänster är markerade aktiv
        i skrollbaren och man kan filtrera resultatet med de olika valen här med.
        På BBC appen så finns det funktionalitet för att dra nedåt på skärmen för att
        uppdatera sidan, vilket jag har också återskapat.  Sidan laddas om och all
        data hämtas igen, vilket tar några sekunder innan det är klart och sidan refreshas
        med nytt data om tillgängligt.  Modulen som jag använder för denna funktionalitet
        är <a href="https://www.boxfactura.com/pulltorefresh.js">PullToRefresh.js</a>.  Navbaren är
        designat för att efterlikna den i BBC Appen med likande ikoner och jag har även
        studerat appens padding och marginaler för att efterlikna så mycket som möjligt.
        När det gäller innehåll, så har jag lagt till 5 olika bilder för Polis Events och
        Polis Stations, som loopas genom om och om för att ge ett snyggare, mer komplett,
        presentation av respektive API:s data och för att matcha BBC appen
        som jag efterliknar.

        Jag tycker att min App efterliknar BBC appen till en bra nivå men innehållet
        är inte exakt samma så identiska kommer de aldrig vara.</p>


        <h3>Krav 4: Autentisering av användaren</h3>

        <p>På min app finns det möjligheten att logga in eller registrera sig genom
        kursens API, där jag lagrar den giltiga token i en fil, med samma teknik som
        förklaras nedan i Offline-läge, för att skapa en sorts session, som är aktiv
        i enbart 24 timmar och då måste man logga in igen.  Jag gör en kontroll för
        att kolla om det finns ett giltig inloggnings token på Stations och Regions
        sidorna och finns det inte så omredigeras man till inloggnings sidan.
        Är man inloggad så har man tillgång till hela appen.</p>

        <h3>Krav 5: Offline-läge</h3>

        <p>Jag använder cordova-plugin-file för att skapa ett offline läge till appen.
        På uppstart av appen så läser jag först av befintliga JSON filarna, om de finns,
        för att snabbare presentera innehållet, sen hämtas nytt data från API:et som sedan
        lagras i motsvarande JSON fil.  Eftersom Polisens Events API tar upp till ca 10
        sekunder för att hämta hem resultatsetet så valde jag denna strategi, där sidan
        uppdateras med nytt data när den är tillgänglig.  Det finns två funktioner som
        är central i processen, en read från fil funktion och en skriva till fil funktion.
        Först läses de befintliga filerna av, 4st totalt med sessions filen, sidan laddas
        med dessa innehåll och då börjar nästa steg.  En test görs med hjälp av en annan
        Cordova plugin, cordova-plugin-network-information, för att kontrollera nuvarande
        nätverk status och om det finns internetuppkoppling så görs en hämtning av nytt
        data genom en request och då laddas current variabeln med resultatet och sidan
        uppdateras automatiskt.  Sen lagras det nya data genom min skriv funktion,
        där jag använder
        ’window.resolveLocalFileSystemURL(cordova.file.dataDirectory, callback)’ för
        att lokalisera befintliga filer om de finns eller skapa nya filer och
        sedan skriva till filen med inskickade data från motsvarande API.
        När man navigerar runt om i appen så görs en kontroll varje gång om det
        finns cachade data i current variabeln som används istället för att hämta
        nytt data för att undvika onödiga belastningar på servern.  Med eftersom
        jag har också implementerat funktionalitet för att dra ned på skärmen för
        att uppdatera har man kontroll över när nytt data ska hämtas hem.

        Då funkar appen i både i online och offline läge och jag följde först guiden
        på dbwebb och sedan instruktioner på Cordovas hemsida för att utföra denna
        funktionalitet i min app och den fungerar som förväntat.</p>


        <h3>Krav 6: Karta och GPS</h3>

        <p>Jag använder leaflet.js och cordova-plugin-geolocation för att skapa
        kartor som kartlägger Polis händelse och Polisstationer med API:ens GPS
        data ihop med möjligheten att kolla upp användarens nuvarande position.
        Jag använder en röd ikon som kartlägger Polis händelser och en blå ikon
        markerar Polisstationer, där man kan klicka på respektive ikon för att visa en
        Popup med en kort förklaring av kopplade event eller station.  Jag visar
        också en ring runt om ikonen med en 500m radius för att lyfta fram det
        lokala området.  På Events sidan, så visas alla Polisstationer i närheten
        på samma kartvy för att ge ett intressant perspektiv till händelsen.
        Det finns en funktion som tar en array av positioner för att kartlägger
        alla med respektive information.  På top-höger sidan av appen finns det
        en knapp för att visa nuvarande position med enhetens inbyggda GPS,
        där man syns med en blå rund ikon.  Det finns en kartvy på stations
        sidan också, där varje Polisstation är markerade på sin egen informationssida.
        GPS koordinater fanns med både Polis Events API och Polis Stations API
        så jag utnyttjade båda.</p>

        <h3>Om projektet</h3>

        <p>Jag tycker att projektet gick bra att utföra och erbjöd en möjlighet
        att testa olika strategier och tekniker.  Jag spenderade mer tid än
        förväntade men det var mest för att jag hade kul att testa olika saker,
        som att skriva data till fil och jobba med GPS och kartor.  Mithril
        fungerar bra för en SPA ramverk och erbjuder tillräckligt med funktionalitet
        och flexibilitet för att kunna bygga en bra och stabil webapp.
        Men jag känner att jag vill testa andra sorts ramverk framöver också för
        att jämföra med, som React vilket verkar väldigt populär.
        Cordova har många olika plugins och levererar en väl polerad app med
        förväntade och viktig integration med mobila enhetens inbyggda tekniker,
        den kommer jag använda ofta.  Det svåraste med projektet var att
        bestämma vilket API jag skulle jobba med, i en djungel med olika
        sorters API:er, mer än jag visste om.  Jag tycker att projektet var ett
        rimligt avslut till denna kurs och lagom svårt samt lagom tidskrävande.</p>

        <h3>Om kursen</h3>

        <p>Kursen webapp kändes väldigt roligt och efterlängtat.  Nu har jag
        förbättrat och utökat mina verktyg för mobila enheter, som är en stor
        del av den värld vi lever i, men som också erbjuder krångligheter liksom
        möjligheter.  Med en mindre skärmyta har man begränsat utrymme på bredden
        samt en annan sorts inputkälla, touch, gör att man måste tänka annorlunda,
        men med ny lärda designstrategier och förståelse av mobila enhetens
        potential känner jag mig väl förberedd för framtida projekt.
        Varje kursmoment har erbjudit relevant information, tips, guider och
        artiklar som har används för fullt.  Det som gav mig mest var de videor
        som Emil Folino gjorde, där han förklarare bra hur och vad man ska tänka på.
        Man fick en bra inblick till vad som krävdes för varje uppgift och hur man
        klarar det.  Jag skulle definitivt rekommendera denna kurs till mina vänner
        och kollegor.</p>

        <p>På en skala av 1-10 så ger jag kursen webapp en 9.</p>

        </section>

        </article>
        `;

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);

        window.rootElement.appendChild(window.mainContainer);
    };

    return {
        showPresentation: showPresentation
    };
})(presentation);
