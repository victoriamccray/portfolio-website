// Changes Character Size with Slider
var characterSize = d3.select("#slider").property("value");
var initialCharacterY = height / 2 - rectHeight / 2; // Adjusted for vertical centering

var character = svg.append("rect")
    .attr("x", 10)
    .attr("y", initialCharacterY)
    .attr("width", rectWidth)
    .attr("height", rectHeight)
    .attr("fill", "red")
    .attr("class", "character");

d3.select("#slider").on("input", function () {
    characterSize = d3.select(this).property("value");
    character.attr("width", characterSize);
});

// Uses click event for character to jump
d3.select("#jump").on("click", function () {
    character.transition()
        .attr("y", initialCharacterY - 50) // Adjusted for jump height
        .attr("opacity", 1)
        .transition()
        .duration(500)
        .attr("y", initialCharacterY); // Back to the original position
});

var characterY = d3.select(".character").attr("y");
        
    //animates blue block from rightmost part of screen to leftmost screen
function runBlock() {


    var block = svg.append("rect")
                .attr("x", width)
                .attr("y", height/2 + 100)
                .attr("width", squareSize)
                .attr("height", squareSize)
                .attr("fill", "blue")
                .attr("class","block")
                .transition()
                .duration(2000)
                .ease(d3.easeLinear)
                    .attr("x",90)
                    .remove()
                    .on("end", function() {
                        timeElapsed = timeElapsed + 2000;
                        
                        if(timeElapsed >= 2000 && d3.select(".character").attr("y") > 350) {
                            character.attr("opacity", 0);
                            d3.select("#status").html("You lost!");
                        } else {
                            runBlock();
                        }
                    });
                    


            console.log(timeElapsed);

}

runBlock();

d3.select("#restart").on("click", function() {
    character.attr("opacity", 1);
    runBlock();
    d3.select("#status").html("Jump over the blue block!");
});
