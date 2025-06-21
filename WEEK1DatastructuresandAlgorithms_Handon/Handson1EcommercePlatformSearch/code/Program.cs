using System;
public class Product
{
    public int Id
    {
        get;
        set;
    }
    public string Name
    {
        get;
        set;
    }
    public string Category
    {
        get;
        set;
    }
    public Product(int pid, string pname, string pcategory)
    {
        Id = pid;
        Name = pname;
        Category = pcategory;
    }
    public override string ToString()
    {
        return $"ID:{Id}, Name:{Name}, Category:{Category}";
    }
}
class Program
{
    static Product LinearSearch(Product[] prods, string n)
    {
        foreach (var p in prods)
        {
            if (p.Name.Equals(n, StringComparison.OrdinalIgnoreCase))
            {
                return p;
            }
        }
        return null;
    }

    static Product BinarySearch(Product[] prods, string n)
    {
        int low = 0;
        int high = prods.Length - 1;
        while (low <= high)
        {
            int mid = low + (high - low) / 2;
            if (prods[mid].Name.Equals(n, StringComparison.OrdinalIgnoreCase))
            {
                return prods[mid];
            }
            else if (prods[mid].Name.CompareTo(n) < 0)
            {
                low = mid + 1;
            }
            else
            {
                high = mid - 1;
            }
        }
        return null;
    }
        static void Main()
        {
            Product[] prods = new Product[] {
                new Product(1, "TV", "Electronics"),
                new Product(2, "Laptop", "Electronics"),
                new Product(3, "Mobile", "Electronics"),
                new Product(4, "Tablet", "Electronics"),
                new Product(5, "Headphones", "Electronics"),
            };
            Array.Sort(prods, (a, b) => a.Name.CompareTo(b.Name));
            Console.WriteLine("Enter product name to search:");
            string search = Console.ReadLine();
            Console.WriteLine("Linear Search:");
            var resultLinear = LinearSearch(prods, search);
            if (resultLinear != null)
            {
                Console.WriteLine(resultLinear);
            }
            else
            {
                Console.WriteLine("Product not found");
            }
            Console.WriteLine("Binary Search:");
            var resultBinary = BinarySearch(prods, search);
            if (resultBinary != null)
            {
                Console.WriteLine(resultBinary);
            }
            else
            {
                Console.WriteLine("Product not found");
            }
        }





    }
// binary search better because it takes O(log n) time