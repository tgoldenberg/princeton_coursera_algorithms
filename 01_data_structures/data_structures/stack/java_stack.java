private Node first;
private int N;

private class Node
{
  Item item;
  Node next;
}
public boolean isEmpty() { return first == 0 };
public int size()        { return N; }

public void push(Item item)
{
  Node oldfirst = first;
  first = new Node();
  first.item = item;
  first.next = oldfirst;
  N++;
}

public Item pop()
{
  Item item = first.item;
  first = first.next;
  N--;
  return item;
}

// See page 155 for iterator() function
// see page 147 for test client main()
