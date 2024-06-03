Multimedieproduktion 1
Eksamensprojekt 1. semester, Forår 2024
ZeroBuzz Brew

Dette respository er programmeringsdelen af den digitale løsning (i.e. en website) til det fiktive mikrobryggeri ZeroBuzz Brew, og er altså ikke
en reel hjemmeside.

I denne README.md er der redegjort for relevante kodemæssige elementer, samt henvisninger til uddybende screenshots i det medfølgende process
dokument.


Programmering

* sitemap


* HTML + CSS validering
    Se screenshot i bilag (slide XX)

* Kommentarer i koden
    Der er benyttet kommentarer i koden til, 1. at gruppere HTML/CSS elementer for at få overblik, og 2. at beskrive, hvad HTMLen og stylingen gør.

* Simulate mobile devices
    Igennem kodningsprocessen benyttede jeg googles inspect tool først ved Mobile first metoden og dernæst til de forskellige desktop viewport skærmstørrelser.

* Lighthouse analyse - Desktop + Mobil
    Der blev foretaget en Lighthouse analyse (via Google Inspect Tool) af index.hmtl (ZeroBuzz Brews forside), før optimering (Se screenshot i bilag slide XX). Her var samtlige billeder på sitet .png filer. Ved hjælp af en png til webp conveter, komprimerede jeg billederne på siden, så filstørrelserne blev mindre og derigennem forbedre forsidens performance (Se screenshot i bilag slide XX)

    SEO og Accessibility resultaterne er ikke optimale, men dette skyldes b.la. for mange link på sitet der ikke virker. Disse problemer ville selvfølgelig kunne løses, hvis flere sider blev kodet, og derigennem vil flere links virke.

* Robot.txt
    Til sidst oprettede jeg en robot.txt fil for at begrænse søgemaskiners analyse af ZeroBuzz' hjemmeside. Dette blev gjort, da websitet kun er en prototype og et eksamensprojekt, der ikke er beregnet til brug i virkeligheden.

