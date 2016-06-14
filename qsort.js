function quicksort( arr ){

    var len = arr.length;

    if( len <= 1  ){
        return arr;
    }else{
        var pivotIndex = Math.floor( len / 2 );

        var pivot = arr.splice( pivotIndex,1 )[0];

        var left = [];
        var right = [];
        var element = null;

        for (var i = 0; i < arr.length; i++) {
            element = arr[i];
            if( element < pivot  ){
                left.push( element );
            }else{
                right.push( element );
            }
        }
    }

    console.log("pivot:"+pivot);
    console.log( "left:"+left.join(",") );
    console.log( "right:"+right.join(",") );

    var result = quicksort( left ).concat( [pivot],quicksort( right )  ); 

    console.log( "result:"+result );

    console.log("-----------------------------------------");

    return result;
}

var arr = [ 85, 24, 63, 45, 17, 31, 96, 50,68 ];

console.log( arr );

var result = quicksort( arr );

console.log( result );