import React from 'react'

import{AiFillInstagram,AiFillFacebook,AiFillYoutube} from 'react-icons/ai'
function Footer() {
  return (
    <div className='Footer'>
            <h4>follow us</h4>
            <div>
                <AiFillFacebook ><a href="www.facebook.com">facebook</a></AiFillFacebook>
                <AiFillInstagram><a href="www.intagram.com">Instagram</a></AiFillInstagram>
                <AiFillYoutube><a href="www.youtube.com">Youtube</a></AiFillYoutube>
            </div>
            <p>&copy;all copyrights reserved</p>
    </div>
    )
}

export default Footer