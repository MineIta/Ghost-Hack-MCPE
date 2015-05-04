// Code by zhuowei

var jetpack = true;
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 1;

function jetpackTick() {
    toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
    var player = getPlayerEnt();
    setVelX(player, playerFlySpeed * playerDir[0]);
    setVelY(player, playerFlySpeed * playerDir[1]);
    setVelZ(player, playerFlySpeed * playerDir[2]);
}
 
function toDirectionalVector(vector, yaw, pitch) {
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

function modTick()
{
if(jetpack==true)
    {
    jetpackTick();
    }
}
