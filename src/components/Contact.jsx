import React from 'react'

function Contact() {
  return (
    <div>

<div className="Contact">
<h1>Contact Us</h1>
<form action="/">


<div className='Userdiv'>
    <label>Username</label>
    <input type={"text"} Placeholder="Username"  required/>
</div>
<div className='Passdiv'>
    <label>Password</label>
    <input type={"Password"} placeholder="Password"  required/>
</div>
<div className='Textdiv'>
    <label>Comment</label>
    <textarea type={"text"} placeholder="Tell us about what is your query?" required></textarea>
</div>
<div>
    <button type='submit'>Submit</button>
</div>
</form>




</div>






    </div>
  )
}

export default Contact;