import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function ProductDetails() {
    return (
        <>
            <div className="product-detail-container flex space-x-2">
                <img src="https://picsum.photos/700/500" alt="product" className="product-img" />
                <div className="product-info space-y-2 mr-2 ">
                    <h1 className="product-title font-bold text-2xl">ASUS TUF Gaming A15, AMD Ryzen 7 7435Hs, 15.6-Inch, FHD 144Hz, Gaming Laptop (16GB RAM/512GB SSD/NVIDIA Geforce RTX 3050/Windows 11/48WHR/Graphite Black/2.3 Kg), FA506NCR-HN054W</h1>

                    <div className="rating">
                        <div className="mask mask-star" aria-label="1 star"></div>
                        <div className="mask mask-star" aria-label="2 star"></div>
                        <div className="mask mask-star" aria-label="3 star" ></div>
                        <div className="mask mask-star" aria-label="4 star" aria-current="true"></div>
                        <div className="mask mask-star" aria-label="5 star"></div>
                    </div>
                    <span className="font-bold">4.0</span>
                    <h1 className="product-title font-bold text-3xl">$452</h1>
                    <h3 className="description bg-gray-200">
                    Processor : AMD Ryzen 7 7435HS Mobile Processor 3.1GHz (20MB Cache, up to 4.5 GHz, 8 cores, 16 Threads) delivers fast and responsive performance for demanding tasks such as gaming, content creation, and multitasking.
Storage : 512GB PCIe 4.0 NVMe M.2 SSD | Memory : 16GB DDR5-5600 MHz Support Up to 32 GB Expandable 2x DDR5 SO-DIMM slots [Disclaimer : Rated speed of RAM module. Actual memory speeds may vary by CPU configuration]
Graphics : 4GB GDDR6, NVIDIA GeForce RTX 3050 Laptop GPU, Up to 1675MHz at 60W (75W with Dynamic Boost)
Display : 15.6-inch FHD (1920 x 1080) 16:9, 144Hz, 250 nits Brightness, Anti-Glare Display, Display output : 1x HDMI 2.1 TMDS, Keyboard : Backlit Chiclet Keyboard 1-Zone RGB
                    </h3>

                    <div className="btn-option space-x-7">
                        <button className="btn btn-warning text-2xl px-5 py-7 text-black"><ShoppingCartIcon />Add to Cart</button>
                        <button className="btn btn-accent text-2xl px-5 py-7 text-black">Buy Now</button>

                    </div>
                </div>

                {/* Product Details */}
            </div>
        </>
    )
}

export default ProductDetails