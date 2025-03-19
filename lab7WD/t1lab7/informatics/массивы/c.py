#n=int(input())
arr = list(map(int, input().split())) #map(функция, итерируемый_объект)
count=0
for m in arr:
    if m>0:count+=1
print(count)