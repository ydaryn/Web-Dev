n = int(input())
arr = []
for _ in range(n):
    arr.append(int(input()))

for num in arr:
    if num % 2 == 0:
        print(num, end=" ")
