import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Ourproduct = () => {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        const callProducts = async () => {
            try {
                const req = await fetch('/getAllProducts', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                    .then(response => response.json())
                    .then(jsonData => {
                        setData(jsonData);
                        setLoading(false);
                    }).catch(error => console.error(error))

            } catch (error) {
                console.log(error);
            }
        }
        callProducts();
    }, [])
    const handleProduct = (item) => {
        navigate(`/ProductDetail?${item.product_name}`, { state: item });
    }
    return (
        <div className='bg-[#f1f1f1] py-20'>
            <div className='md:container md:mx-auto '>
                <div className='pb-6'>
                    <h1 className='text-center text-[#262161] text-[40px] md:text-[54px]'>Our Product</h1>
                </div>
                <div className='m-0 md:m-4 p-0 md:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
                    {Loading ? (
                        'loading'
                    ) : (
                        data.map((item, i) => {
                            return (
                                <div key={i} onClick={() => handleProduct(item)} className="cursor-pointer">
                                    <div className=" bg-white  px-4 md:px-6 py-4 my-4 mx-4 ">
                                        <div className="w-full h-[250px] flex justify-center items-center">
                                            <img src={`/uploads/products/${item.images0}`} alt="singleproduct" className="object-cover mx-auto" />
                                        </div>
                                        <h1 className="text-2xl font-bold text-center my-2">{item.product_name}</h1>
                                        <p className=" text-base md:text-lg line-clamp-3 text-center">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

            </div>
        </div>
    )
}

export default Ourproduct