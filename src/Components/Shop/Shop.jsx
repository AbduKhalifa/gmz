


import React, { useEffect, useState } from 'react'
import ShopOption from './ShopOption';
import OptionContent from './OptionContent';
import ShopIntro from './ShopIntro';
import styles from "./shop.module.css";
import ProductCard from './ProductCard';
import axios from 'axios';
import { domain } from '../../vars/var';
import DiscountArea from './DiscountArea';
export default function Shop() {


    const [maxPrice, setMaxPrice] = useState(200);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [products, setProducts] = useState(null);
    const [discountProducts, setDiscountProducts] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState([]);

    function handleMaxPrice(mxp) {
        if (mxp < 200)
            setMaxPrice(200);
        else if (mxp > 2600)
            setMaxPrice(2600);
        else
            setMaxPrice(mxp)
    }


    async function getProducts(mxp, cat, page) {
        const maxPrice = mxp;
        const category = cat;
        const getPage = page;
        const route = `/shop/products?price=${maxPrice}&cat=${category}&page=${getPage}`;

        try {
            const { data } = await axios.get(domain + route);
            setProducts(data.data.rows);
            getPageCount(data.data.count)
        } catch (error) {
            console.log(error);
        }
    }
    async function getDiscountProducts() {
        const route = "/shop/products/discount";
        try {
            const { data } = await axios.get(domain + route);
            setDiscountProducts(data.products)
        } catch (error) {
            console.log(error);
        }
    }

    function getPageCount(count) {
        if (count <= 9) setNumberOfPages([])
        else if (count > 9) {
            const pages = count / 9;
            if (Number.isInteger(pages)) setNumberOfPages(new Array(pages).fill("z"));
            else setNumberOfPages(new Array(Math.ceil(pages)).fill("z"));
        }
    }

    useEffect(() => {
        const loopRequest = setInterval(() => {
            getProducts(maxPrice, currentCategory, currentPage);
        }, 500)
        setTimeout(() => {
            clearInterval(loopRequest);
        }, 600)
    }, [maxPrice, currentPage])

    useEffect(() => {
        getDiscountProducts();
    }, [])

    return (
        <section>
            <ShopIntro />
            <section className='py-24 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-40'>
                <DiscountArea products={discountProducts} />
                <div className='grid grid-cols-4'>
                    <aside className='col-span-4 md:col-span-2 lg:col-span-1'>
                        <ShopOption className="mb-12">
                            <ShopOption.OptionTitle>
                                FILTER BY PRICE
                            </ShopOption.OptionTitle>
                            <OptionContent>
                                <div>
                                    <input
                                        className={styles.range + ' w-full mb-3'}
                                        type="range"
                                        name="cowbell"
                                        min="200"
                                        max="2600"
                                        value={maxPrice}
                                        step="200"
                                        onChange={({ target }) => {
                                            setCurrentPage(1);
                                            handleMaxPrice(target.value);
                                        }}
                                    />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='f-1 font-black'>FILTER</span>
                                    <span className='text-text f-2 font-semibold'>$ 0 - {maxPrice}</span>
                                </div>
                            </OptionContent>
                        </ShopOption>
                        <ShopOption className="mb-12">
                            <ShopOption.OptionTitle>
                                RELATED PRODUCTS
                            </ShopOption.OptionTitle>
                            <ShopOption.OptionContent>
                                <div className='flex items-center gap-6 mb-4'>
                                    <div className='border-[1px] border-[#26292c]'>
                                        <img src={require("./../../assets/120coin.png")} alt="" width={70} />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <p className='f-1 font-black text-[16px]'>120 Coin</p>
                                        <p className='f-1 text-text font-semibold text-[15px]'>$20.00</p>
                                    </div>
                                </div>
                            </ShopOption.OptionContent>
                        </ShopOption>
                        <ShopOption>
                            <ShopOption.OptionTitle>
                                CATEGORIES
                            </ShopOption.OptionTitle>
                            <ShopOption.OptionContent>
                                <ul className='flex flex-col gap-3'>
                                    <li className='flex justify-between items-center hover:text-[white] text-text cursor-pointer'>
                                        <p className='text-[14px] f-1 font-semibold'>COINS</p>
                                        <span className='text-[14px]  f-1 font-semibold'>(5)</span>
                                    </li>
                                    <li className='flex justify-between items-center hover:text-[white] text-text cursor-pointer'>
                                        <p className='text-[14px] f-1 font-semibold'>GAMING TOOLS</p>
                                        <span className='text-[14px]  f-1 font-semibold'>(5)</span>
                                    </li>
                                </ul>
                            </ShopOption.OptionContent>
                        </ShopOption>
                    </aside>
                    <section className='col-span-4 md:col-span-2 lg:col-span-3 pl-0  md:pl-12 py-12 md:py-0 '>
                        <div className='grid  lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:grid-cols-2 md:grid-cols-1'>
                            {
                                products ? products.map(product => {
                                    return <ProductCard
                                        key={product.id}
                                        title={product.title}
                                        price={product.price}
                                        cat={product.category.name}
                                        pathImage={product.image}
                                        discount={product.discount}
                                    />
                                })
                                    :
                                    null
                            }
                        </div>
                        <div className={styles.btns + ' flex items-center justify-center gap-2 mt-12'}>
                            {
                                numberOfPages.map((e, i) => {
                                    return <button
                                        onClick={() => {
                                            setCurrentPage(i + 1)
                                        }}
                                        key={e + i * i}
                                        className={(currentPage == i + 1 ? styles.active : null) + ' w-[60px]  py-3 border-[1px] border-helperH f-1 font-semibold'}>
                                        {i + 1}
                                    </button>
                                })
                            }
                        </div>
                    </section>
                </div>
            </section>
        </section>
    )
}
