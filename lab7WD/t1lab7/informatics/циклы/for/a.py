def even(x):
    if(x%2==0):
        return True
    else: return False
a=int(input())
b=int(input())
for i in range(a,b+1):
    if even(i):print(i)
    else:continue
