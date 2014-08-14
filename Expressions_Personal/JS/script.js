//Personal Expression
// How much tile do I need for my new dining room?

var length = prompt ("How long is the room you are tiling in feet?", 30);
// length of the room you are tiling

var width = prompt ("How wide is the room you are tiling in feet?", 12);
//width of the room you are tiling

var tileSize = prompt ("What size tile are you wanting to use in sq. feet?", 1);
// what size tile are you wanting to use?

var howMuchTile = length * width / tileSize;
// How much tile you need is the size of the room, which is length times width, divided by the tile size

console.log( "You need " + howMuchTile + " tiles to complete your room. ");