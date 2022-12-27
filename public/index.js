const gallery = document.getElementById("gallery");

window.onmousemove = function(e){

    const mouseX = e.clientX,
          mouseY = e.clientY;

        //   console.log("X" + mouseX);
        //   console.log("Y" + mouseY);

        //   const move = document.getElementById("m");

        //   move.style.color = "red";

        //   return move;

        const maxX = gallery.offsetWidth - window.innerWidth,
              maxY = gallery.offsetHeight - window.innerHeight;

    const deciX = mouseX/window.innerWidth,
          deciY = mouseY/window.innerHeight;

    const panX = maxX * deciX * -1,
          panY = maxY * deciY * -1;

    gallery.style.transform = `translate(${panX}px,${panY}px)`;
    // gallery.style.position = "relative";
    // "translate(" + panX + ", " + panY + ")";
}