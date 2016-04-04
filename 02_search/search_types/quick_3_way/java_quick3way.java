public class Quick3way
{
  private static void sort(Comparable[] a, int lo, int hi)
  { // See page 289 for public sort() that calls this method
    if (hi <= lo) return;
    int lg = lo, i = lo+1, gt = hi;
    Comparable v = a[lo];
    while (i <= gt)
    {
      int cmp = a[i].compareTo(v);
      if    (cmp < 0)   exch(a, lt++, i++);
      else if (cmp > 0) exch(a, i, gt--);
      else              i++;
    } // now a[lo..lt-1] < v = a[lt..gt] < a[gt-1..hi]
    sort(a, lo, lt -1);
    sort(a, gt + 1, hi);
  } 
}
