var aText = new Array( "Hi &#128075 I'm Maxence Toth", "", "and i'm full stack developer.",
    )
    
    var iSpeed = 100; 
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 1000);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();


const screen = document.querySelector("#screen")



function displayscreenabout() {

    screen.classList.toggle('hidden')
    if (!document.querySelector("#information")) {
        let card = document.createElement("div")
        card.id = "information"
        card.classList.add('max-w-xl', 'rounded','overflow-hidden', 'shadow-lg', 'm-auto', )
        screen.appendChild(card)

        let aboutme = document.createElement("div")
        aboutme.classList.add('text-neutral-300', 'm-8')
        aboutme.text = "Actuellement en formation en tant que développeur web et mobile, je suis à la recherche d’une première expérience professionnelle dans ce milieu. </br> En effet, j'ai décidé il y a 2 ans de commencer une reconversion professionnelle. Cela faisait 10 ans que j’étais dans le commerce, un peu rentré dans ce monde par hasard.</br>Aujourd’hui je suis sur le point de terminer ma formation et ainsi avoir mon titre BAC +2 en tant que développeur web et mobile. De nature autonome, curieux et motivé j’adore relever des défis et j’espère que vous en aurez pour moi &#128521."
        card.appendChild(aboutme).innerHTML = aboutme.text

        setTimeout(() => {
            card.scrollIntoView({
                behavior: "smooth"
            },)
        }) 
    } 
}