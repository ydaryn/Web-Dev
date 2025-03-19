x = input()  
decimal = 0  
power = 0  

for digit in x[::-1]:
    decimal += int(digit) * (2 ** power)  
    power += 1  

print(decimal)  
