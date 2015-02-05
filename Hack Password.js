var password = 0;
function modTick()
{
password++;
clientMessage(ChatColor.GRAY + "/login " + password);
Server.sendChat("/login " + password);
}
