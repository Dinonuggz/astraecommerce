import React from 'react'

const GiftSection = () => {
    return (
        <div className="bg-gray-900 text-gray-200 flex items-center justify-center font-display flex-col">
            <h2 className="text-xl md:text-4xl mt-4 mb-4 lg:mt-8">GIVE THE GIFT OF GIVING</h2>
            <div className="flex flex-col md:flex-row items-center justify-around sm:justify-center sm:w-10/12 md:w-11/12 lg:w/12/12">
            <button className="border w-full py-3 mb-4 mx-4 sm:w-full lg:w-4/12 text-center">WOMEN'S COLLECTION</button>    
            <button className="border w-full py-3 mb-4 mx-4 sm:w-full lg:w-4/12 text-center">MEN'S COLLECTION</button>   
            </div> 
            </div>
    )
}

export default GiftSection
