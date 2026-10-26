
#build a BST

class Node:
    def __init__(self,value):
        self.value=value
        self.left=None
        self.right=None


def insert(root,value):
    if root is None:
        return Node(value)

    elif value<root.value:
        root.left=insert(root.left,value)

    else:
        root.right=insert(root.right,value)
        return root

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.value)
        inorder_traversal(root.right)


balances=[5000,4000,2345,5980]

root=None

for balance in balances:
    root=insert(root,balance)

print("Balances:")
inorder_traversal(root)

#Tree depth

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def height(node):
    if node is None:       
        return 0

    left_height = height(node.left)
    right_height = height(node.right)

    return 1 + max(left_height, right_height)

#Graph BFS

from collections import deque


def bfs(graph, start):
    visited = {start}
    queue = deque([start])

    while queue:
        node = queue.popleft()

        for neighbour in graph[node]:
            if neighbour not in visited:
                visited.add(neighbour)
                queue.append(neighbour)

    return visited


#Graph DFS 

def dfs(graph, start, visited=None):
    if visited is None:
        visited = []

    visited.append(start)

    for neighbour in graph[start]:
        if neighbour not in visited:
            dfs(graph, neighbour, visited)

    return visited

#Priority Queue

import heapq


tasks = []

heapq.heappush(tasks, (3, "take a shower"))
heapq.heappush(tasks, (1, "Pray"))
heapq.heappush(tasks, (2, "do workouts"))
heapq.heappush(tasks, (4, "read"))


while tasks:
    priority, task = heapq.heappop(tasks)
    print(priority, "-", task)