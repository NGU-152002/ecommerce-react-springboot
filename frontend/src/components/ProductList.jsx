import React, { useEffect, useState } from 'react'
import {Link} from 'react-router'


function ProductList({mainPage}) {


    
    return (
        <>
            <div className={`bg-amber-100 search-result w-full  h-full mt-5 pl-5 grid ${mainPage ? 'grid-cols-4' : 'grid-cols-3'} gap-4`}>

                <div className="card bg-base-100 w-75 shadow-sm cursor-pointer ">
                <Link to="/overview">
                    <figure>
                        <img
                            src="https://picsum.photos/300/200"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            ASUS TUF Gaming A15
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>HP AMD Ryzen 7 7435Hs, 15.6-Inch, FHD 144Hz, Gaming Laptop (16GB RAM/512GB SSD/NVIDIA Geforce RTX 3050/Windows 11/48WHR/Graphite Black/2.3 Kg), FA506NCR-HN054W</p>
                        <div className="card-actions justify-end">
                            <div className="badge font-bold text-2xl">$456</div>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className="card bg-base-100 w-75 shadow-sm cursor-pointer">
                    <figure>
                        <img
                            src="https://picsum.photos/300/200"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            ASUS TUF Gaming A15
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>HP AMD Ryzen 7 7435Hs, 15.6-Inch, FHD 144Hz, Gaming Laptop (16GB RAM/512GB SSD/NVIDIA Geforce RTX 3050/Windows 11/48WHR/Graphite Black/2.3 Kg), FA506NCR-HN054W</p>
                        <div className="card-actions justify-end">
                            <div className="badge font-bold text-2xl">$456</div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-75 shadow-sm cursor-pointer">
                    <figure>
                        <img
                            src="https://picsum.photos/300/200"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            ASUS TUF Gaming A15
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>HP AMD Ryzen 7 7435Hs, 15.6-Inch, FHD 144Hz, Gaming Laptop (16GB RAM/512GB SSD/NVIDIA Geforce RTX 3050/Windows 11/48WHR/Graphite Black/2.3 Kg), FA506NCR-HN054W</p>
                        <div className="card-actions justify-end">
                            <div className="badge font-bold text-2xl">$456</div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-75 shadow-sm cursor-pointer">
                    <figure>
                        <img
                            src="https://picsum.photos/300/200"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            ASUS TUF Gaming A15
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>HP AMD Ryzen 7 7435Hs, 15.6-Inch, FHD 144Hz, Gaming Laptop (16GB RAM/512GB SSD/NVIDIA Geforce RTX 3050/Windows 11/48WHR/Graphite Black/2.3 Kg), FA506NCR-HN054W</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">$456</div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-75 shadow-sm cursor-pointer">
                    <figure>
                        <img
                            src="https://picsum.photos/300/200"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            ASUS TUF Gaming A15
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>HP AMD Ryzen 7 7435Hs, 15.6-Inch, FHD 144Hz, Gaming Laptop (16GB RAM/512GB SSD/NVIDIA Geforce RTX 3050/Windows 11/48WHR/Graphite Black/2.3 Kg), FA506NCR-HN054W</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">$456</div>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 w-75 shadow-sm cursor-pointer">
                    <figure>
                        <img
                            src="https://picsum.photos/300/200"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            ASUS TUF Gaming A15
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>HP AMD Ryzen 7 7435Hs, 15.6-Inch, FHD 144Hz, Gaming Laptop (16GB RAM/512GB SSD/NVIDIA Geforce RTX 3050/Windows 11/48WHR/Graphite Black/2.3 Kg), FA506NCR-HN054W</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">$456</div>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 w-75 shadow-sm cursor-pointer">
                    <figure>
                        <img
                            src="https://picsum.photos/300/200"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            ASUS TUF Gaming A15
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>HP AMD Ryzen 7 7435Hs, 15.6-Inch, FHD 144Hz, Gaming Laptop (16GB RAM/512GB SSD/NVIDIA Geforce RTX 3050/Windows 11/48WHR/Graphite Black/2.3 Kg), FA506NCR-HN054W</p>
                        <div className="card-actions justify-end">
                            <div className="badge font-bold">$456</div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default ProductList