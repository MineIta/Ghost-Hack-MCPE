var trigger = true;

function modTick()
{
if(trigger==true)
{
var mobs = Entity.getAll();
for(var i=0; i<mobs.length; i++)
{
var x = Entity.getX(mobs[i])-getPlayerX();
var y = Entity.getY(mobs[i])-getPlayerY();
var z = Entity.getZ(mobs[i])-getPlayerZ();
if(x*x+y*y+z*z<=4*4 && mobs[i]!==getPlayerEnt())
{
Entity.setHealth(mobs[i], 0);
}
}
}
}
