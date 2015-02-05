function useItem(x, y, z, itemid, blockid, side)
{
setTile(x, y, z, 0);
setTile(x, y+1, z, 0);
setTile(x, y-1, z, 0);
setTile(x-1, y, z, 0);
setTile(x+1, y, z, 0);
setTile(x, y, z-1, 0);
setTile(x, y, z+1, 0);
}
