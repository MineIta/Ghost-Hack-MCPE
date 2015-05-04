// Code by tombailey94

var explosive = true;
var Entities = [];
var counter = 0;

function entityAddedHook(entity) {
	if (Entity.getEntityTypeId(entity) == 80) { //arrow
		var oldXYZ = [Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity)];
		Entities.push([entity,oldXYZ]);
	}
}

function modTick()
{
if(explosive==true)
{
	counter++;
	
	if(counter == 2) {
		for (i = 0; i < Entities.length; i++) {
		
			var element = Entities[i];
			var entity = element[0];
			var oldXYZ = element[1];
			var newXYZ = [Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity)];
			
			if (oldXYZ[0] == newXYZ[0] && oldXYZ[1] == newXYZ[1] && oldXYZ[2] == newXYZ[2]) {
				Entities.splice(i,1);
				Entity.setHealth(entity,0);
				Level.explode(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),5);
			} else {
				Entities[i][1] = newXYZ;
			}
		}
		counter = 0;
	}
	}
	}
