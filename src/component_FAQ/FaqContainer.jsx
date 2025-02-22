import React from 'react'
import faqData from './faqData'
import Faq from './Faq'

function FaqContainer() {
    return (
        <div className='container mx-auto px-6'>
            <h1 className='mb-4 text-2xl text-center'>Freuently Asked Questions</h1>
            {faqData.map((item, index) => {
                return <Faq key={index} item={item} />;
            })}
        </div>
    )
}

export default FaqContainer