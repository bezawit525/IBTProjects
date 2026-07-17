#Book Class
class Book:
    def __init__(self,title,author,pages):
        self.title=title
        self.author=author
        self.pages=pages


    def describe(self):
        print(f"{self.title} book by {self.author} has {self.pages} pages")

    book1 = Book("The Alchemist", "Paulo Coelho", 208)
book2 = Book("Atomic Habits", "James Clear", 320)

book1.describe()
book2.describe()


#Product Class
class Product:
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.__quantity=quantity

    @property
    def quantity(self):
        return self.__quantity
    
    @quantity.setter
    def quantity(self,value):
        if value<0:
           raise ValueError("quantity cannot be negative")
        else:
            self.__quantity = value
     
    def restock(self,n):
        if n>0:
            self.quantity+=n
            print(f"{n} quantity of {self.name} added to stock")
        else:
            print("restock amount must  be posititve")

    def sell(self,n):
        if n<=0:
            print("sell amount must be posititve")
        elif n>self.__quantity:
            print("Not enough stock for sell")
        else:
            self.__quantity-=n

product1 = Product("book", 5000, 10)
product2 = Product("bag", 20000, 15)
product3 = Product("phone", 30000, 5)

product1.sell(3)
product1.restock(5)

product2.quantity = -10

print("\nProduct and Quantities:")
print(f"{product1.name}: {product1.quantity}")
print(f"{product2.name}: {product2.quantity}")
print(f"{product3.name}: {product3.quantity}")


