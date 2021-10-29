function arrSum(thatArray)
{
    let sum = 0;
    for(let i = 0 ; i < thatArray.length; ++i)
    {
        //console.log(thatArray[i]);
        sum = sum + thatArray[i];
    }
    return sum;
    //console.log(sum);
}

console.log(arrSum([2, 2, 2]));


