function solution(A, K) {
    
    var len = A.length;
    //var newArray = A.map(function(call)) ;
    
    /*for(var i = 0; i< K+1; i++ ){
        while(i < len-1){
            i++;
        }
    }*/
    
    if(len < 1){
        return A=[];
    }
   
    for(var i = 0; i< K+1; i++ ){
        if(i<K){
           A.unshift(A.pop()); 
        }
    }

    return A;
    

}