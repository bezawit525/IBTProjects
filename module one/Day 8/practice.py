# recursive sum

def total(nums):
    if nums==0:
        return 0

    else:
        return nums+total(nums-1)

def count_down(n):
    if n==1:
        return 1
    else:
        print (n)
        count_down(n-1)


#binary search 
def binary_search(items,target):
    lo, hi= 0, len(items)-1
    while lo<=hi:
        mid=(lo + hi)//2
        if items[mid]==target:
            return mid
        elif items[mid]<target:
            lo=mid+1
        else:
            hi=mid-1
    return -1

balances=[100,200,2000,4000,5000,6000,7000]

print (binary_search(balances,5000))

#merge sort 

import random

def merge(left, right):
    result = []
    i = 0
    j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # Add remaining elements
    result.extend(left[i:])
    result.extend(right[j:])

    return result
def merge_sort(items):
    if len(items)<=1:
        return items
    
    mid=len(items)//2
    left=merge_sort(items[:mid])
    right=merge_sort(items[mid:])

    return merge(left,right)

numbers=[random.randint(1,100) for i in range(8)]

print(f"the list of numbers are: {numbers}")
print(f"merge sorted: {merge_sort(numbers)}")
print(f"python sorted:{sorted(numbers)}")

#sort with a key

accounts=[
    ("Beza",10000),
    ("Helen",7000),
    ("Henok",8000),
    ("Seid",3000)
]

sort_accounts=sorted(accounts, key=lambda account: account[1], reverse=True)

print(sort_accounts)

#Two pointers
 
def has_pair(nums,target):
    lo, hi=0, len(nums)-1

    while lo<hi:
        s=nums[lo]+nums[hi]
        if s==target:
            return True 
        elif s<target: lo+=1
        else: hi-=1

    return False

nums=[3,6,7,9]
print(has_pair(nums,10))


