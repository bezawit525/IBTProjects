total=1000
people=3
def split_bill(toal,people,tip_rate=0.10):
    total_tip=total+total*tip_rate
    return total_tip/people
name=('neima','beza','sara')
for i in name:
    print(f"{i}should pay:{split_bill(total,people)}")