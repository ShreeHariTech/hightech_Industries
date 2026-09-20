import os
import urllib.request

# Define directory structure
dirs = [
    "assets/images/products/hydraulic-compressor",
    "assets/images/products/cable-drum-jack",
    "assets/images/products/cable-winder",
    "assets/images/products/hydraulic-press",
    "assets/images/products/compressor-head",
    "assets/images/products/die-set",
    "assets/images/products/cutter-hub",
    "assets/images/products/tower-generator",
    "assets/images/products/cable-winch",
    "assets/images/hero",
    "assets/images/company",
    "assets/icons"
]

for d in dirs:
    os.makedirs(d, exist_ok=True)

# Map of output path to IndiaMART image URL (using highest res available, like 500x500)
images = {
    "assets/images/products/hydraulic-compressor/hydraulic-compressor-150t.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602517464/NB/SQ/IM/5654798/mild-steel-hydraulic-compressor-joint-machine-motorized-500x500.jpg",
    "assets/images/products/hydraulic-compressor/hydraulic-compressor-jointing.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602516486/MI/EP/YP/5654798/mild-steel-hydraulic-compressor-jointing-machine-500x500.jpg",
    "assets/images/products/hydraulic-compressor/hydraulic-compressor-standard.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602514240/QN/RR/UN/5654798/hydraulic-compressor-joint-machine-500x500.jpg",
    
    "assets/images/products/cable-drum-jack/drum-lifting-jack-8-ton.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602470326/XO/ZL/OQ/5654798/drum-lifting-jack-500x500.jpeg",
    "assets/images/products/cable-drum-jack/drum-lifting-jack-7-ton.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602470717/LF/JE/LX/5654798/lifting-jack-500x500.jpeg" if "500x500" in "https://5.imimg.com/data5/SELLER/Default/2026/4/602470717/LF/JE/LX/5654798/lifting-jack-500x500.jpeg" else "https://5.imimg.com/data5/SELLER/Default/2026/4/602470717/LF/JE/LX/5654798/lifting-jack-250x250.jpeg",

    "assets/images/products/hydraulic-press/hydraulic-press-machine.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602543681/IV/ES/FI/5654798/alloy-steel-hydraulic-press-machine-500x500.jpeg" if False else "https://5.imimg.com/data5/SELLER/Default/2026/4/602543681/IV/ES/FI/5654798/alloy-steel-hydraulic-press-machine-250x250.jpeg",

    "assets/images/products/compressor-head/hydraulic-compress-head.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602513920/MJ/SQ/CX/5654798/hydraulic-compress-head-500x500.jpg",
    "assets/images/products/compressor-head/press-head-100-150.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602473567/JR/HS/WD/5654798/100-150-press-head-500x500.jpg",

    "assets/images/products/cable-winder/metal-cable-winder.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602516003/EG/AD/NW/5654798/metal-cable-winder-machine-500x500.jpg",

    "assets/images/products/die-set/compressor-die-set.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602543568/PL/IT/ZO/5654798/compressor-die-sets-500x500.jpeg" if False else "https://5.imimg.com/data5/SELLER/Default/2026/4/602543568/PL/IT/ZO/5654798/compressor-die-sets-250x250.jpeg",

    "assets/images/products/cutter-hub/metal-wire-cutter-hub.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602518085/XC/HX/FB/5654798/metal-wire-cutter-hub-500x500.jpeg" if False else "https://5.imimg.com/data5/SELLER/Default/2026/4/602518085/XC/HX/FB/5654798/metal-wire-cutter-hub-250x250.jpeg",

    "assets/images/products/tower-generator/mini-mobile-light-tower.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/3/595196612/JT/SF/QI/5654798/mini-mobile-light-towers-500x500.jpeg",

    "assets/images/products/cable-winch/cable-pulling-winch.jpg": 
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602579583/TM/GR/RQ/5654798/mild-steel-cable-pulling-winches-500x500.png" if False else "https://5.imimg.com/data5/SELLER/Default/2026/4/602579583/TM/GR/RQ/5654798/mild-steel-cable-pulling-winches-125x125.png",

    # Hero & Company main images
    "assets/images/hero/hero-product-150t.jpg":
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602517464/NB/SQ/IM/5654798/mild-steel-hydraulic-compressor-joint-machine-motorized-500x500.jpg",
    "assets/images/company/factory-facility.jpg":
        "https://5.imimg.com/data5/SELLER/Default/2026/4/602516486/MI/EP/YP/5654798/mild-steel-hydraulic-compressor-jointing-machine-500x500.jpg"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for local_path, url in images.items():
    print(f"Downloading {local_path} from {url}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(local_path, "wb") as f:
            f.write(resp.read())
        print(f"Saved: {local_path} ({os.path.getsize(local_path)} bytes)")
    except Exception as e:
        print(f"Failed to download {local_path}: {e}")
