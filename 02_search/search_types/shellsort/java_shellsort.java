public class Shell
{
  public static void sort(Comparable[] a)
  { // Sort a[] into increasing order.
    int N = a.length;
    int h = 1;
    while (h < N/3) h = 3*h + 1; // 1, 4, 13, 40, 121, 364, 1093...
    while (h >= 1)
    { // h-sort the array
      for (int i=h; i<N; i++)
      { // Insert a[i] among a[i-h], a[i-2*h], a[1-3*h]...
        for (int j=i; j>= h && less(a[j], a[j-h]); j-=h)
          exch(a, j, j-h);
      }
      h /= 3;
    }
  }
  // See page 245 for less(), exch(), isSorted(), and main()
 
}
