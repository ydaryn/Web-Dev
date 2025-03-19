def make_chocolate(small, big, goal):
    big_needed = min(goal // 5, big)
    goal -= big_needed * 5
    
    if goal <= small:
        return goal
    else:
        return -1
