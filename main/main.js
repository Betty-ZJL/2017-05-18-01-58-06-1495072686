module.exports = function main(str) {
  var sum=0;
  for (var i=0;i<str.length;i++)
      sum=sum+parseInt(str.charAt(i));
  return sum;
};
