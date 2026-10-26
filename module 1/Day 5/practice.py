from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def wheels(self):
        pass
    def __init__(self,make,model):
        self.make=make
        self.model=model
        
    def describe(self):
        print( f" make: {self.make}, model:{self.model}")

class Car(Vehicle):
    def wheels(self):
        return 4
  

class Truck( Vehicle):
     def __init__(self,make,model,capacity):
        super().__init__(make,model)
        self.capacity=capacity
     def wheels(self):
         return 10
     def describe(self):
        print(f" make:{self.make},model:{self.model},capacity:{self.capacity}")

vehicles=[
    
    Car('Toyota','Corolla'),
    Truck('Volvo','FH16','25 tons')
]

for vehicle in vehicles:
    vehicle.describe()
    print(f'wheels:{vehicle.wheels()}')
