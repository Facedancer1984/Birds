/**
 * Created by faced on 04.02.2017.
 */
// CLASS
function Bird(typeName,price,count,sold){
    this.type = typeName;
    this.price = price;
    this.count = count;
    this.sold = sold;
}
// OBJECTS
var eagle = new Bird("eagle",5,8,4);
var duck = new Bird("duck",2,12,23);

//var eagle = {"type":"eagle","price":5,"count":3,"sold":12}
//var duck = {"type":"duck","price":2,"count":1,"sold":30}
//var shopStore = {"eagle":eagle,"duck":duck}

var shopStore = [eagle,duck];
printAllStoreObj();

/*var sold = getSoldBirdsByTypeEx(null);
console.log("sold = " + sold);

var left = getBirdsLeftByType("eagle");
console.log("left = " + left);

var little = getLowCountBirds();
console.log("little = " + little);

printAllStore()

addNewType("HAWK","7");

printAllStore()*/

// FUNCTIONS
function getSoldBirdsByType(birdType)
{
    var result = 0;
    if(birdType!=null) {
        for(p in  shopStore){
            if(shopStore[p].type == birdType){
                result = shopStore[p].sold;
            }
        }
    } else {
        for(p in  shopStore){
            if(shopStore[p]!=null){
                result += shopStore[p].sold;
            }
        }
    }
    return result;
}

function getBirdsLeftByType(birdType)
{
    for(p in shopStore){
        if(shopStore[p].type == birdType){
            return shopStore[p].count;
        }
    }
}


function getBirdPriceByType(birdType)
{
    for(p in shopStore){
        if(shopStore[p].type == birdType){
            return shopStore[p].price;
        }
    }
}


function getLowCountBirds()
{
    var res = []
    for(p in  shopStore){
        if(shopStore[p]!=null){
            if(shopStore[p].count < 3){
                res.push(shopStore[p].type);
            }
        }
    }
    return res;
}


function addNewBirdType(typeName,price,count)
{
    var newBird = Bird(typeName,price,count,0);
    shopStore.push(newBird);
    return newBird;
}


function printAllStoreObj()
{
    for(bird in  shopStore){
        if(shopStore[bird] != null){
            console.log("type:" + shopStore[bird].type +
                "; price:" + shopStore[bird].price +
                "; count:" + shopStore[bird].count +
                "; sold:" + shopStore[bird].sold);
        }
    }
}


function addToStore(birdType,addCount)
{
    for(p in  shopStore){
        if(shopStore[p].type == birdType){
            shopStore[p].count += addCount;
            return ("added " + addCount + "; now has = " + shopStore[p].count);
        }
    }
}


function sellBirds(birdType,sellCount)
{
    for(p in  shopStore){
        if(shopStore[p].type == birdType){
            var totalCost = 0;
            if(shopStore[p].count >= sellCount){
                shopStore[p].count -= sellCount;
                totalCost = sellCount*shopStore[p].price;
            } else {
                var left =  shopStore[p].count;
                shopStore[p].count -= left;
                totalCost = left*shopStore[p].price;
            }
            return totalCost;
        }
    }
}

function changePrice(birdType,newPrice)
{
    for(p in  shopStore){
        if(shopStore[p].type == birdType){
            shopStore[p].price = newPrice;
            return;
        }
    }
}


function getTotalCostByType(birdType)
{
    for(p in  shopStore){
        if(shopStore[p].type == birdType){
            return shopStore[p].price*shopStore[p].count;
        }
    }
}

