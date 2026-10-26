
#Spot the SRP violation

class buildReport:
     def build(self):
          print("building a report")
class saveReport:
      def save(self):
           print("saving a report")
class emailReport:
      def email(self):
           print("emailing report")

#Refactor to OCP 

          
class Circle:
     def area(self):
          return 3.14*8*8
class Square:
     def area(self):
          return 8*8
class Triangle:
     def area(self):
          return 0.5*5*9 
        
circle=Circle()
print(circle.area())

square=Square()
print(square.area())

#write a singleton
class AppSettings:
     _instance=None 
     def __new__(cls):
          if cls._instance is None:
               cls._instance=super().__new__(cls)
               cls._instance.currency="ETB"
          return cls._instance
     

settingx =AppSettings()
settingy= AppSettings()

print(settingx.currency)
print(settingy.currency)

print(settingx is settingy)

     

        

#write a Factory
class ShapeFactory:
     @staticmethod 
     def create(kind):
          if kind=="Circle":
               return Circle()
          if kind=="Square":
               return Square()
          if kind=="Triangle":
               return Triangle()
          raise ValueError(f"unknown type:{kind}")

shape=ShapeFactory.create("Circle")

print(shape.area())

     #write an observer pair
class NewsAgency:
     def __init__(self):
          self._observers=[]
     def subscribe(self,observers):
           self._observers.append(observers)
     
     def notify(self, event):
          for obs in self._observers:
               obs.update(event)
            
class TelegramSubscriber:
     def update(self,news):
          print("Telegram",news)

class SMSSubscriber:
     def update(self,news):
          print("SMS",news)
        
agency=NewsAgency()
Telegram=TelegramSubscriber()
sms=SMSSubscriber()

agency.subscribe(Telegram)
agency.subscribe(sms)

agency.notify("EBC news")





     
               
          
              

