function modTick()
{
if(Player.getCarriedItem()==261)
{
ModPE.setFov(20);
}
if(Player.getCarriedItem()!==261)
{
ModPE.setFov(70);
}
}
