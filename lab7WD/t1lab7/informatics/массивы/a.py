n = int(input())
arr = []
for _ in range(n):
    arr.append(int(input()))

for i in range(0, n, 2):
    print(arr[i], end=" ")
