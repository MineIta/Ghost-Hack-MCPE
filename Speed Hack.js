var pspeed = true;
var s = 1;
var Xpos = 0;
var Zpos = 0;
var s = 0;
var Xdiff = 0;
var Zdiff = 0;

function modTick()
{
if(pspeed==true) {
if(s==1)
      {
        Xpos=getPlayerX();
        Zpos=getPlayerZ();
        s = s + 1;
      }
      else if(s==3)
      {
        s=1;
        Xdiff=getPlayerX()-Xpos;
        Zdiff=getPlayerZ()-Zpos;
        setVelX(getPlayerEnt(),Xdiff);
        setVelZ(getPlayerEnt(),Zdiff);
        Xdiff=0;
        Zdiff=0;
      }
  if(s!=1)
  {
  s = s + 1;
  }
}
}
