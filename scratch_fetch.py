import urllib.request
import gzip
import io
import re

url = 'https://www.indiamart.com/hightechindustries-ahmedabad/'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Encoding': 'gzip, deflate'
}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as response:
        content = response.read()
        if response.info().get('Content-Encoding') == 'gzip':
            content = gzip.decompress(content)
        html = content.decode('utf-8', errors='ignore')
        print(f"Fetched HTML length: {len(html)}")
        
        # Look for product image links
        img_urls = re.findall(r'https?://[^\s"\'<>]+\.(?:jpg|jpeg|png|webp)', html, re.IGNORECASE)
        imimg_urls = [u for u in set(img_urls) if 'imimg.com' in u]
        print(f"Found {len(imimg_urls)} imimg URLs:")
        for u in sorted(imimg_urls):
            print(u)
            
        with open("page_dump.html", "w", encoding="utf-8") as f:
            f.write(html)
except Exception as e:
    print(f"Error fetching: {e}")
