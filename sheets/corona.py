from sheets.models import *
my_csv_list = Corona.import_data(data = open("uploaded_sheets/testbook.csv"))
print(my_csv_list[0].dist_name)