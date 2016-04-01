class MergeSort{
  constructor(a){
    this.a = a;
  }
  _mergeSort(arr){
    this._sort(arr, 0, arr.length-1);
  }
  _sort(arr, l, r){
    if (l >= r) { return; }
    let m = Math.floor((r - l) / 2) + l;
    this._sort(arr, l, m);
    this._sort(arr, m+1, r);
    this._merge(arr, l, m, r);
  }
  _merge(arr, l, m, r){
    let temp = new Array(r - l + 1).fill(null);
    let tempIdx = 0;
    let lIdx = l;
    let rIdx = m + 1;
    /* fill in the temp array */
    while (lIdx <= m && rIdx <= r){
      if (arr[lIdx] < arr[rIdx]){
        temp[tempIdx] = arr[lIdx];
        lIdx++; 
      }
    }
  }
}

