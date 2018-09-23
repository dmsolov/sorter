function compareNegative(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
}

function comparePositive(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

class Sorter {
  constructor() {
      this.arr = [];
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
      return this.arr;           
       // your implementation
  }

  sort(indices) {
      var m = [];
      for (var i = 0; i < indices.length; i++) {
          m.push(this.arr[indices[i]]);
      }
      if (indices[0] > indices[1])
          m.sort(compareNegative);
      else
          m.sort(comparePositive);

      for (var i = 0; i < indices.length; i++) {
          this.arr[indices[i]] = m[i];
      }
      // your implementation
  }

  setComparator(compareFunction) {
      this.arr.sort(compareFunction);
      // your implementation
  }
};

module.exports = Sorter;
