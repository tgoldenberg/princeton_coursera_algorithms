public class UF
{
  private int[] id; // access to component id (site indexed)
  private int count; // number of components

  public UF(int N)
  { // initialize component id array
    count = N;
    id = new int[N];
    for (int i=0; i<N; i++)
      id[i] = i;
  }

  public int count()
  { return count; }

  public boolean connected(int p, int q)
  { return find(p) == find(q); }

  public int find(int p)
  public void union(int p, int q)
  // see page 222 (quick-find), page 224(quick-union) and page 228(weighted)
  public static void main(String[] args)
  { // Solve dynamic connectivity problem on StdIn.
    int N = StdIn.readInt();
    UF uf = new UF(N);
    while (!StdIn.isEmpty())
    {
      int p = StdIn.readInt();
      int q = StdIn.readInt();
      if (uf.connected(p, 1)) continue;
      uf.union(p, q);
      StdOut.println(p + "" + q);
    }
    StdOut.println(uf.count() + " components");
  }
}
