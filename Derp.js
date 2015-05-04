var derp = true;

function modTick()
{
if(derp==true)
{
var player = getPlayerEnt();
var y = Math.floor(Entity.getYaw(player));
var p = Math.floor(Entity.getPitch(player));
Entity.setRot(player, y+3, p);
}
}
