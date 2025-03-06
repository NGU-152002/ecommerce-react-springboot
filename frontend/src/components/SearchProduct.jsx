import React from 'react'
import ProductList from './ProductList'

function SearchProduct() {
    return (
        <>
            <div className="search-product-container h-[100%]">
                <div className="search-bar justify-center items-center flex">
                <div className="join p-4 ">
                    <div>
                        <label className="input join-item">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                            <input type="text" placeholder="Search" />
                        </label>
                    </div>
                    <button className="btn btn-neutral join-item ">Search</button>
                </div>

                </div>
                <h2 className="search-title font-bold text-center">Search Results for "Laptop"</h2>
                <div className="main-container flex h-full ">
                    <div className="category-filter-section w-[20%] space-y-5 p-5  bg-[#ffc3af] ">
                        <div className="brand-category flex flex-col">
                            <h2 className="font-bold text-2xl">Brand</h2>
                            <label className="cursor-pointer items-center">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                HP
                            </label>

                            <label className="cursor-pointer">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                DELL
                            </label>


                            <label className="cursor-pointer">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                ACER
                            </label>

                        </div>
                        <div className="price-category ">
                            <h2 className="font-bold text-2xl">Price</h2>
                            <div className="w-full max-w-sm">
                                <input type="range" min={0} max="100" className="range range-sm" step="25" />
                                <div className="flex justify-between px-2.5 mt-2 text-xs">
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>
                                </div>
                                <div className="flex justify-between px-2.5 mt-2 text-xs">
                                    <span>1k</span>
                                    <span>2k</span>
                                    <span>3k</span>
                                    <span>4k</span>
                                    <span>5k</span>
                                </div>
                            </div>

                        </div>
                        <div className="specification-category flex flex-col">
                            <h2 className="font-bold text-2xl">Specifications</h2>
                            <label className="cursor-pointer">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                16 ram
                            </label>

                            <label className="cursor-pointer">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                8gb ram
                            </label>


                            <label className="cursor-pointer">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                32gb ram
                            </label>

                        </div>


                    </div>

<ProductList mainPage={false}/>
                </div>

            </div>
        </>
    )
}

export default SearchProduct