import json

def split_geojson(input_file, output_prefix, features_per_file):
    with open(input_file, 'r') as f:
        data = json.load(f)
    
    features = data['features']
    total_features = len(features)
    
    # Determine the number of output files needed
    num_files = total_features // features_per_file
    if total_features % features_per_file != 0:
        num_files += 1
    
    # Split the features into smaller chunks
    chunks = [features[i:i+features_per_file] for i in range(0, total_features, features_per_file)]
    
    # Write each chunk to a separate GeoJSON file
    for i, chunk in enumerate(chunks):
        output_file = f"{output_prefix}_{i+1}.geojson"
        output_data = {
            'type': data['type'],
            'features': chunk
        }
        with open(output_file, 'w') as f:
            json.dump(output_data, f)
        
        print(f"Generated {output_file} with {len(chunk)} features.")
    
    print(f"Total input features: {total_features}")
    print(f"Number of output files: {num_files}")

# Example usage
input_file = 'C:/Users/chky/Desktop/New folder/2020displacementdata.geojson'
output_prefix = 'output2020'
features_per_file = 9231

split_geojson(input_file, output_prefix, features_per_file)
