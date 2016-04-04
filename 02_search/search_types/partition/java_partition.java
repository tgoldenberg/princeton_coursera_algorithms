private static int partition(Comparable[] a, int lo, int hi)
{ // Partition into a[lo..j-1], a[j], a[j+1..hi] and return j.
  int i = lo, j = hi+1;
  Comparable v = a[lo];
  while (true)
  { // Scan right, scan left, check for scan complete, and exchange.
    while (less(a[++i], v)) if (i == hi) break;
    while (less(v, a[--j])) if (j == lo) break;
    if (i >= j) break;
    exch(a, i, j);
  }
  exch(a, lo, j);
  return j; // with a[lo..j-1] <= a[j] <= a[j+1..hi]
}
