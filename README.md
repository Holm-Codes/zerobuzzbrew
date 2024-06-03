Multimedieproduktion 1
Eksamensprojekt 1. semester, Forår 2024
ZeroBuzz Brew

Dette respository er programmeringsdelen af den digitale løsning (i.e. en website) til det fiktive mikrobryggeri ZeroBuzz Brew, og er altså ikke
en reel hjemmeside.

I denne README.md er der redegjort for relevante kodemæssige elementer, samt henvisninger til uddybende screenshots i det medfølgende process
dokument. Hjemmesiden er kodet i HTML5 og CSS3


Programmering

* sitemap


* HTML + CSS validering:
    For at validere min HTML og CSS har jeg brugt følgende sider: https://validator.w3.org/#validate_by_input (HTML) og https://jigsaw.w3.org/css-validator/#validate_by_input (CSS)

    Udover 2 Error codes (se processdokument, bilag s. 70), som ikke har været mulige at rette, har det ikke været nogle problemer ift. valideringen af forside HTMLen. 
    Da det kom til CSS valideringen af forsiden var der ingen problemer.
    Se screenshot i bilag (slide 71)

* Kommentarer i koden:
    Der er benyttet kommentarer i koden til, 1. at gruppere HTML/CSS elementer for at få overblik, og 2. at beskrive, hvad HTMLen og stylingen gør.

* Simulate mobile devices:
    Igennem kodningsprocessen benyttede jeg googles inspect tool først ved Mobile first metoden og dernæst til de forskellige desktop viewport skærmstørrelser.

* Lighthouse analyse - Desktop + Mobil:
    Der blev foretaget en Lighthouse analyse (via Google Inspect Tool) af index.hmtl (ZeroBuzz Brews forside), før optimering (Se screenshot i bilag slide 72). Her var samtlige billeder på sitet .png filer. Ved hjælp af en png til webp conveter, komprimerede jeg billederne på siden til .webp filer, så filstørrelserne blev mindre og derigennem forbedre forsidens performance (Se screenshot i bilag slide 73)

    SEO og Accessibility resultaterne er ikke optimale, men dette skyldes b.la. for mange link på sitet der ikke virker. Disse problemer ville selvfølgelig kunne løses, hvis flere sider blev kodet, og derigennem vil flere links virke.

* Robot.txt:
    Til sidst oprettede jeg en robot.txt fil for at begrænse søgemaskiners analyse af ZeroBuzz' hjemmeside. Dette blev gjort, da websitet kun er en prototype og et eksamensprojekt, der ikke er beregnet til brug i virkeligheden.

