public class Quick
{
  public static void sort(Comparable[] a)
  {
    StdRandom.shuffle(a);
    sort(a, 0, a.length-1); // Eliminate dependance on input.
  }
  private static void sort(Comparable[] a, int lo, int hi)
  {
    if (hi <= lo) return;
    int j = partition(a, lo, hi); // Partition (see page 291)
    sort(a, lo, j-1); // Sort left part a[lo .. j-1].
    sort(a, j+1, hi); // Sort right part a[j+1..hi].
  }
}
