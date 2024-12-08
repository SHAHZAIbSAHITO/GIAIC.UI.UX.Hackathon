import ReviewsSection from '@/components/revews/reviews'
import Detailcards from '@/components/revews/reviwscards'
import React from 'react'

const Review = () => {
  return (
    <div>
     <div className='md:px-[100px]  '>
     <ReviewsSection/>
     <Detailcards/>
     </div>
    </div>
  )
}

export default Review