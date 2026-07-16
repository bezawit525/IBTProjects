#temprature label

temp=(float(input("Enter the temperature in celsius:")))
if temp<15:
    print("cold")
elif temp>=15 and temp<=28:
    print("warm") 
else:
    print("hot")


#Receipt loop

for i in range(1,11):
    print(f"Receipt #{i}")


#Even numbers

for i in range(1,21):
    if i%2==0:
        print(i)

    
#Discount calculator

def apply_discount(price,percent=10):
    discounted_price=price-(price*(percent/100))
    return discounted_price

print(apply_discount(100))
print(apply_discount(200,15))


#countdown

for i in range(5,0,-1):
    print(i)
