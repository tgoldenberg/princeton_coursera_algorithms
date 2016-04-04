public class Merge
{
  private static Comparable[] aux; // auxiliary array for merges
  public static void sort(Comparable[] a)
  {
    aux = new Comparable[a.length]; // Allocate space just once.
    sort(a, 0, a.length-1);
  }
  private static void sort(Comparable[] a, int lo, int hi)
  { // Sort a[lo..hi]
    if (hi <= lo) return;
    int mid = lo + (hi - lo)/2;
    sort(a, lo, mid); // Sort left half
    sort(a, mid+1, hi); // Sort right half
    merge(a, lo, mid, hi); // Merge results
  } 
}
