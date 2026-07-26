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


