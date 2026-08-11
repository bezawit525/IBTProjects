#name the Big-O

# list index - O(1) because it can directly access an item using its position.
# single loop-O(n) because the loop goes through each item once, so the number of steps increases as the input size grows.
# Nested loop-O(n²) because the second loop runs for every item in the first loop
# Dicitionary lookup- O(1) because a dicitionary uses a key directly to find the value
# Binary search- O(logn) because it repeatedly divides the
# search area in half, making it faster even with large amounts of data.

#List Vs dict lookup
import time

account_list=[f"CBE-{i}" for i in range(100000)]
account_dict={f"CBE-{i}":i for i in range(100000)}

account="CBE-999"

start=time.time()

account in account_list

end=time.time()

print("list lookup takes",end-start)

start=time.time()

account in account_dict

end=time.time()

print("dictionary lookup takes",end-start)

#   Build a stack

class Stack:

     def __init__(self):
          self.arr=[]

     def push(self,data):
          self.arr.append(data)
        
     def pop(self):
          return self.arr.pop()
     
     def peek(self):
          return self.arr[-1]
     
names=["Beza","Abigiya","Frtuna","Beti"]

stack=Stack()

for name in names:
     stack.push(name)

reversed_name=[stack.pop() for i in range(len(stack.arr))]

print(reversed_name)

#build a queue 

from collections import deque

bank_line=deque()
 
bank_line.append("beza")
bank_line.append("kidist")
bank_line.append("eyob")
bank_line.append("eyuel")
bank_line.append("helen")

for i in range(len(bank_line)):
     customer=bank_line.popleft()
     print(f"serving : {customer}")

#singly linked list

class Node:
     def __init__(self,data):
          self.data=data
          self.next=None


class LinkedList:
     def __init__(self):
          self.head=None

     def push_front(self,data ):
          new_node=Node(data)
          new_node.next=self.head
          self.head=new_node

     def print_all(self):
          current=self.head
          while current:
               print(current.data)
               current=current.next
            
    
accounts = LinkedList()

accounts.push_front("CBE-1")
accounts.push_front("CBE-2")
accounts.push_front("CBE-3")

accounts.print_all()

    
