// Code by _Sin0psysS_

var falling = 0;
var next = 0;
var px,py,pz,x,y,z,vel,saver;
var cd = 0;

function modTick()
{
if(nofall==true)
{
px = Player.getX();
py = Player.getY();
pz = Player.getZ();
if(falling==0&&Entity.getVelY(getPlayerEnt())<-0.5&&cd==0)
{
falling = 1;
}
if(falling==1&&Entity.getVelY(getPlayerEnt())>=-0.5)
{
falling = 0;
}
if(falling==1&&getTile(px,py-3,pz)!=0&&cd==0)
{
saver = Level.spawnMob(px,py-1,pz,10);
vel = Entity.getVelY(getPlayerEnt());
Entity.setRenderType(saver,1);
rideAnimal(getPlayerEnt(),saver);
setVelY(saver,vel);
ModPE.showTipMessage("");
next = 1;
}
if(next==1)
{
next--;
cd = 10;
Entity.remove(saver);
setVelY(getPlayerEnt(),vel);
}
if(cd>0)
{
cd--;
}
}
}
