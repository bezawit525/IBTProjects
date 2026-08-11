
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
    @property
    def balance(self):
        return self.__balance
   

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self.__balance += amount
        self._notify(f"+{amount} ETB deposited")

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        if amount > self.__balance:
            raise ValueError("Insufficient balance")

        self.__balance -= amount
        self._notify(f"-{amount} ETB withdrawn")

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
        raise ValueError(f"Unkown type:{kind}")


            