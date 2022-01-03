import React from 'react';
import  Carrot from '../images/carrot.svg'; 
import './landing.css';
import dinner from '../images/dinner.jfif';



function LandingPage() {

    const onSubmitHandler = (e) => {
          e.preventDefault();

    }
    return (
        <div className='landingpage'>
            <div className='carrot_header'>
                <img src={Carrot} className='carrot_image' />
               <div className='carrot_header_title'>
                Healthy Diet
                </div>
            </div>
                <div className='welcome_container'>
                    <div className='welcome_content'>
                    <div>WANT TO PLAN YOUR DIET</div>
                    <div>TO STAY <span className='welcome_content_bold'>FIT AND HEALTHY</span></div>
                    <p className='welcome_sub_content'>Let us to it for you!</p>
                    </div>
                    <div className='login_container'>
                       <div className='login_image'>
                         
                       </div>
                     <div className='login'>
                      <form className='form_container' onSubmit={onSubmitHandler}>
                              <h3>signup for our two week diet plan</h3>
                          <div class="form-group">
                            <label for="name">Name : </label>
                            <input type="text" class="form-control form_input" name="name" id="name" aria-describedby="helpId" placeholder="name" />
                            </div>
                             <div class="form-group">
                               <label for="">Email : </label>
                               <input type="email" class="form-control form_input" name="email" id="email" aria-describedby="emailHelpId" placeholder="email" /> 
                             </div> 
                            <button className="form_submit">lets get Healthy</button>
                      </form>
                     </div>
                    </div>
                </div>
        </div>
    )
}

export default LandingPage
