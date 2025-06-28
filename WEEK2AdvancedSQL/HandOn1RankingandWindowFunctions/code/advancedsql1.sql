
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);


INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'MacBook', 'Electronics', 1500.00),
(2, 'iPhone', 'Electronics', 1200.00),
(3, 'Monitor', 'Electronics', 300.00),
(4, 'Desk', 'Furniture', 400.00),
(5, 'Chair', 'Furniture', 200.00),
(6, 'Lamp', 'Furniture', 200.00),
(7, 'Jacket', 'Clothing', 200.00),
(8, 'T-Shirt', 'Clothing', 50.00),
(9, 'Shoes', 'Clothing', 200.00);

SELECT 
  ProductID,
  ProductName,
  Category,
  Price,
  ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
FROM Products;

SELECT 
  ProductID,
  ProductName,
  Category,
  Price,
  RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankPos,
  DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankPos
FROM Products;

SELECT *
FROM (
  SELECT 
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
  FROM Products
) AS RankedProducts
WHERE RowNum <= 3;
