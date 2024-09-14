import pandas as pd
import csv

# Load plant data from CSV file
def load_plant_data(csv_file):
    plant_data = {}
    with open(csv_file, mode='r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            plant_name = row["Plant Name"]
            water_needs = int(row["Water (ml/day)"])
            plant_data[plant_name.lower()] = water_needs
    return plant_data

# Function to get water needs for a specific plant
def get_water_needs(plant_data, plant_name):

    plant_name = plant_name.lower()
    if plant_name in plant_data:
        return f"Your plant, the {plant_name.capitalize()} needs {plant_data[plant_name]} ml of water per day."
        
    else:
        return f"Sorry! Your plant, the '{plant_name}', was not found in our current database. Please try another plant."

# Main program
if __name__ == "__main__":
    csv_file_path = "big/house_plants_water_needs.csv"  # Path to your CSV file
    plant_data = load_plant_data(csv_file_path)

    # Take user input for the plant name
    user_plant = input("Enter the name of your plant: ")

    # Display the water requirement
    print(get_water_needs(plant_data, user_plant))

