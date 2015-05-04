var jesus = true;

function modTick()
{
if(jesus==true)
	{
		if(Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==8 || 
		Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==9 || 
		Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==10 || 
		Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==11)
			{
				setVelY(getPlayerEnt(), 0);
			}
	}
	}
