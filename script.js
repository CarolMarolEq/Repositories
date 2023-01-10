window.onload=function(){

    const PacTarget = document.getElementById("Pac-Button");
    const PacTooltip = document.getElementById("PacMan");
    const EyesTarget = document.getElementById("Eyes-Button");
    const EyesTooltip = document.getElementById("Eyes");
    const MapTarget = document.getElementById("Map-Button");
    const MapTooltip = document.getElementById("Map");
    
    PacTarget.addEventListener('mouseover', () => {
      PacTooltip.style.display = 'block';
    }, false);
    
    PacTarget.addEventListener('mouseleave', () => {
      PacTooltip.style.display = 'none';
    }, false);

    EyesTarget.addEventListener('mouseover', () => {
        EyesTooltip.style.display = 'block';
      }, false);
      
      EyesTarget.addEventListener('mouseleave', () => {
        EyesTooltip.style.display = 'none';
      }, false);

      MapTarget.addEventListener('mouseover', () => {
        MapTooltip.style.display = 'block';
      }, false);
      
      MapTarget.addEventListener('mouseleave', () => {
        MapTooltip.style.display = 'none';
      }, false);

    
    }