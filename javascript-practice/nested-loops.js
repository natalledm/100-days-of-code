function multiplyAll(arr) {
  var product = 1;

  for(var i = 0; i <arr.length; i++){
    const innerList = arr[i];
    for(var j = 0; j < innerList.length; j++){
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);