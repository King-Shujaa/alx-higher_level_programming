#!/usr/bin/node

import sys
import requests

def get_webpage_content(url):
    response = requests.get(url)
    return response.text

def save_content_to_file(content, file_path):
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python script.py <url> <file_path>")
        sys.exit(1)

    url = sys.argv[1]
    file_path = sys.argv[2]

    content = get_webpage_content(url)
    save_content_to_file(content, file_path)

    print("Webpage content has been saved to:", file_path)
