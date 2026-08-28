
class BankConfig:
    _instance=None
    def __new__(cls):
        if cls._instance is None:
            cls._instance=super().__new__(cls)
            cls._instance.interest_rate=0.05
            cls._instance.overdraft_limit=1000
        return cls._instance


class SMSAlert:
    def update(self,event):
        print(f"[TeleBirr SMS] {event}")

class AuditLog:
    def update(self,event):
        print (f"[log]{event}")
class Account:
    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self.__balance = balance
        self._observers=[]
        self.history=[]
    @property
    def balance(self):
        return self.__balance
   

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self.__balance += amount
        self.history.append(("deposit",amount))
        self._notify(f"{amount} ETB deposited")

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        if amount > self.__balance:
            raise ValueError("Insufficient balance")

        self.__balance -= amount
        self.history.append(("withdraw", amount))
        self._notify(f"{amount} ETB withdrawn")

    def undo_last(self):
        if not self.history:
            print("there is no history")
            return
        else :
            transaction_type,amount=self.history.pop()
            self.__balance+= amount if transaction_type == "withdraw" else -amount

        

    def subscribe(self,obs):
        self._observers.append(obs)

    def _notify(self,event):
        for obs in self._observers:
            obs.update(event)

    def statement(self):
        print(" Account Statement ")
        print(f"Owner: {self.owner}")
        print(f"Account Number: {self.account_number}")
        print(f"Balance: {self.__balance} ETB")
    

class SavingsAccount(Account):
    def __init__(self,owner,number,balance=0,):
         super().__init__(owner, number,balance)
         self.rate=BankConfig().interest_rate

    def add_interest(self):
        self.deposit(self.balance*self.rate)

    def statement(self):
        print(" sa Account Statement ")
        print(f"Owner: {self.owner}")
        print(f"Account Number: {self.account_number}")
        print(f"Balance: {self.balance} ETB")


class CurrentAccount(Account):
    def __init__(self, owner, number, balance=0, overdraft=1000):
        super().__init__(owner,number, balance)
        self.overdraft = BankConfig().overdraft_limit

    def withdraw(self,amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        if amount > self.balance + self.overdraft:
            raise ValueError("Insufficient balance")

        self._Account__balance -= amount
        self.history.append(("withdraw", amount))
        self._notify(f"-{amount} ETB withdrawn")

    def statement(self):
        print(" current Account Statement ")
        print(f"Owner: {self.owner}")
        print(f"Account Number: {self.account_number}")
        print(f"Balance: {self.balance} ETB")

class AccountFactory:
    @staticmethod 
    def create(kind,owner,number,balance=0):
        if kind == "savings":
            return SavingsAccount(owner,number,balance)
        if kind=="current":
            return CurrentAccount(owner,number,balance)
        raise ValueError(f"Unknown type:{kind}")

def binary_search(sorted_list, target):
    lo, hi = 0, len(sorted_list) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if sorted_list[mid] == target:
            return mid
        elif sorted_list[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1

class AccountRegistry:
    def __init__(self):
        self.by_number={}
        self.order=[]

    def add(self,acc):
        self.by_number[acc.account_number]=acc
        self.order.append(acc.account_number)

    def find(self,number):
        return self.by_number.get(number)

    def list_all(self):
        account=[]
        for number in self.order:
            account.append(self.by_number[number])

        return account

    def top_by_balance(self, n=5):
           accts = sorted(self.by_number.values(), key=lambda a: a.balance, reverse=True)
           return accts[:n]
 
    def find_by_number(self, number):
        nums = sorted(self.by_number)
        i = binary_search(nums, number)
        return self.by_number[nums[i]] if i >= 0 else None
 
    def total_transactions(self, number):
        acc = self.by_number.get(number)
        if acc is None:
            return 0
 
        def _total(history):
            if not history:               
                return 0
            typ, amount = history[0]
            signed = amount if typ == "deposit" else -amount
            return signed + _total(history[1:])   
 
        return _total(acc.history)

class Branch:
    def __init__(self, name):
        self.name = name
        self.children = []     
        self.accounts = []     
 
    def add_child(self, branch):
        self.children.append(branch)
        return branch          
 
    def add_account(self, account):
        self.accounts.append(account)
 
    def total_balance(self):
        total = sum(a.balance for a in self.accounts)   # this node's own accounts
        for child in self.children:                     # recurse into each sub-branch
            total += child.total_balance()
        return total
 
    def print_tree(self, depth=0):
        indent = "  " * depth
        print(f"{indent}{self.name}  (subtotal: {self.total_balance()} ETB)")
        for acc in self.accounts:
            print(f"{indent}  - {acc.owner} ({acc.account_number}): {acc.balance} ETB")
        for child in self.children:
            child.print_tree(depth + 1)
 
 
def bfs(transfers, start):
    visited = set()
    order = []             
    queue = [start]
    visited.add(start)
 
    while queue:
        current = queue.pop(0)   
        order.append(current)
        for neighbor in transfers.get(current, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
 
    return order


head = Branch("Head Office")
mekelle = Branch("Mekelle Branch")
addis = Branch("Addis Branch")

head.add_child(mekelle)
mekelle.add_child(addis)

acc1 = AccountFactory.create("savings", "Beza", "CBE-1", 10000)
acc2 = AccountFactory.create("current", "Helen", "CBE-2", 9000)
acc3 = AccountFactory.create("savings", "Firtuna", "CBE-3", 6000)

head.add_account(acc1)
mekelle.add_account(acc2)
addis.add_account(acc3)


transfers = {
    "CBE-1": ["CBE-2", "CBE-3"],
    "CBE-2": ["CBE-3"],
    "CBE-3": []
}

print("Total Bank Balance:", head.total_balance())
print("Reachable from CBE-1:", bfs(transfers, "CBE-1"))