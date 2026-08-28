
try:
    totals={}

    with open('transaction.txt') as f:
        for line in f:
            name,amount=line.strip().split(',')
            amount=float(amount)

            if name in totals:
                totals[name]+=amount
            else:
                totals[name]=amount
        
    sorted_totals = sorted(totals.items(), key=lambda item: item[1], reverse=True)
  
    for name, total in sorted_totals:
        print(f"{name}:{total} ETB")

    with open("report.txt","w") as f:
        f.write("customer transaction report\n")
        for name,total in sorted_totals:
            f.write(f"{name}:{total}ETB\n")

except FileNotFoundError:
    print("the file transaction.txt does not exist")
    


           
