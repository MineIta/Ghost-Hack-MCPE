function useItem(x, y, z, itemid, blockid, side)
{
setTile(x, y, z, 46);
setTile(x, y+1, z, 46);
setTile(x, y-1, z, 46);
setTile(x-1, y, z, 46);
setTile(x+1, y, z, 46);
setTile(x, y, z-1, 46);
setTile(x, y, z+1, 46);
}
