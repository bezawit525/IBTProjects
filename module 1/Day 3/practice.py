#unique cities
cities=['Addis Ababa','Gondar','Mekelle','Addis Ababa','Mekelle',"Axum"]

unique_cities=set(cities)
print(unique_cities)
print(f"number of unique cities: {len(unique_cities)}")

#price report
grocery={
     'rice':200,
     'eggs':50,
     'milk':150,
     'bread':40,
     'butter':300
}

for item, price in grocery.items():
    print(f"{item}:{price}ETB")

#Tax comprehension
prices=[100,250,400,80]
total_prices=[price+(price*0.15) for price in prices]


print(total_prices)

#cheap items
prices=[100,250,400,80]
cheap_items=[price for price in prices if price<200]

#write and read
with open('names.txt','w') as f:
    f.write('Niema\n')
    f.write('Beza\n')
    f.write('sara\n')

with open('names.txt','r') as f:
    for line in f:
        print(line.strip())

#safe division
try:
   number=float(input("enter a number:"))
   result=1000/number
   print(f"1000 divided by{number}is {result}")

except ValueError:
    print("please enter a number")

except ZeroDivisionError:
    print("division by zero is not allowed")






   

