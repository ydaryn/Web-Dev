N = int(input("Введите число N: "))

for i in range(1, N + 1):
    left_part = ""
    for num in range(1, i + 1):
        left_part += str(num)

    right_part = ""
    for num in range(i - 1, 0, -1):
        right_part += str(num)

    print(left_part + right_part)
