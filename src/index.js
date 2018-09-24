
  function compareNum(a,b){
    return a - b;
}
class Sorter {
  constructor() {
      this.arr = [];
      this.compareFunction = undefined;
      // your implementation
  }

  add(element) {
      this.arr.push(element);
      // your implementation
  }

  at(index) {
      return this.arr[index]; 
      // your implementation
  }

  get length() {
      return this.arr.length;
      // your implementation
  }

  toArray() {
      return this.arr;            // your implementation
  }

  sort(indices) {
      var tmp = [];
      for (let i = 0; i < indices.length; i++) {
          tmp.push(this.arr[indices[i]]);
      }
      if (this.compareFunction){
          tmp.sort(this.compareFunction);
      }
      else{
          tmp.sort(compareNum);
      }

          indices.sort(compareNum);

      for (let i = 0; i < indices.length; i++) {
          this.arr[indices[i]] = tmp[i];
      }
      // your implementation
  }

  setComparator(compareFunction) {
      this.compareFunction = compareFunction;
      // your implementation
  }
 
};


module.exports = Sorter;
