var knockback = true;

function attackHook(attacker, victim)
{
if(knockback==true){
        if(getYaw() < 0){
            var hit = getYaw()+90;
            for(go=0; hit<0; go++)
            {
                hit+= 360;
            }
            x = Math.cos(hit*(Math.PI/180));
            z = Math.sin(hit*(Math.PI/180));
            setVelX(victim, x*3);
            setVelY(victim, 1);
            setVelZ(victim, z*3);
        }
        else if(getYaw() > 0 && getYaw() < 360)
        {
            var hit = getYaw()+90;
            XVel = Math.cos(hit*(Math.PI/180));
            ZVel= Math.sin(hit*(Math.PI/180));
            setVelX(victim, XVel*3);
            setVelY(victim, 1);
            setVelZ(victim, ZVel*3);
        }
        else if(getYaw() >= 360)
        {
            var hit= getYaw()+90;
            for(go=0; hit>=360; go++)
            {
                hit -= 360;
            }
            XVel = Math.cos(hit*(Math.PI/180));
            ZVel = Math.sin(hit*(Math.PI/180));
            setVelX(victim, XVel*3);
            setVelY(victim, 1);
            setVelZ(victim, ZVel*3);
        }
    }
}
