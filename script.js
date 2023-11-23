
            //SVG canvas
            const width = window.innerWidth;
        const height= window.innerHeight;
        const maxRadius = 100;

        var rectWidth = 75;
        var rectHeight = 150;

        var squareSize = 50;
        var timeElapsed = 0;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

//Changes Character Size with Slider
        var characterSize = d3.select("#slider").property("value");
            var character = svg.append("rect")
                .attr("x", 10)
                .attr("y", height/2)
                .attr("width", rectWidth)
                .attr("height", rectHeight)
                .attr("fill", "red")
                .attr("class","character");

                d3.select("#slider").on("input", function() {
                    characterSize = d3.select(this).property("value");

                    character.attr("width", characterSize);
                });

        // Uses click event for character to jump
        d3.select("#jump").on("click", function() {
            character.transition()
            .attr("y", height/3)
            .attr("opacity", 1)
            .transition()
            .duration(500)
            .attr("y", height/2)
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
