stock = {}

try:
    with open("stock.txt") as f:
        for line in f:
            item, qty = line.strip().split(",")
            stock[item] = int(qty)

except FileNotFoundError:
    print("No stock file yet — starting empty")


def adjust(item, amount):
    stock[item] = stock.get(item, 0) + amount


# Update stock 
adjust("Paracetamol", 5)   
adjust("Vitamin C", -3)    
adjust("Amoxicillin", 10)  

# Print all stock
print("Current Stock:")
for item, qty in stock.items():
    print(f"{item}: {qty}")

# Print low-stock items
print("\nLow Stock Items:")
for item, qty in stock.items():
    if qty < 10:
        print(f"{item}: {qty}")

# Save the updated stock back to the file
with open("stock.txt", "w") as f:
    for item, qty in stock.items():
        f.write(f"{item},{qty}\n")

print("\nStock has been updated and saved to stock.txt.")