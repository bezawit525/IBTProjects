customer=[
    ('Neima',1000),
    ('Beza',2000),
    ('Sara',500),
    ('Hana',200),
    ('Abel',700)
]

def tier(balance):
    if balance>=1000:
        return "premium"
    elif balance>=500:
        return "standard"
    elif balance>=200:
        return "basic"
    
for name, balance in customer:
    print (f"{name}:{tier(balance)} ({balance} ETB) ")
    