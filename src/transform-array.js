module.exports = function transform(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-next":
        if (i + 1 < arr.length) result.push(arr[i + 1]);
        break;
      case "--discard-next":
        i++;
        break;
      case "--double-prev":
        if (i >= 1 && arr[i - 2] !== "--discard-next") result.push(arr[i - 1]);
        break;
      case "--discard-prev":
        if (i >= 1 && arr[i - 2] !== "--discard-next") result.splice(-1, 1);
        break;
      default:
        result.push(arr[i]);
    }
  }
  return result;
};
