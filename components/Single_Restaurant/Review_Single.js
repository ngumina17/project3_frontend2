import React from 'react'
import Star from './Star'
import Link from 'next/link'

function Review_Single() {
    //information is sent this is sent back to  Review_Single
    return (
        <div>
            <Star />
            <p>Review text</p>
            <Link href="/"><button>Delete</button></Link>
        </div>
    )
}

export default Review_Single