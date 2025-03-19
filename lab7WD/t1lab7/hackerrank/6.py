import math

AB = int(input()) 
BC = int(input()) 

theta = math.degrees(math.atan(AB / BC)) 
print(f"{round(theta)}°")  
