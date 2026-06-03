let BasicOfHashing=function(){
    let map=new Map();//declare map

    map.set(1,10);
    map.set(0,0);
    map.set(2,20);

    console.log("Whole map",map);

    console.log("get key value",map.get(1));
    console.log("size",map.size)
    map.delete(1)
    console.log("Delete", map)
    console.log("has key=>",map.has(0))
}
BasicOfHashing();

