public class Insertion
{ 
  public static void sort(Comparable[] a)
  { // Sort a[] into increasing order.
    int N = a.length;
    for (int i=1; i<N; i++)
    { // Insert a[i] among all a[i-1], a[i-2], a[i-3]...
      for (int j=i; j>0 && less(a[j], a[j-1]); j--)
        exch(a, j, j-1);
    }
  }
  //See page 245 for less(), exch(), isSorted(), and main()
}
