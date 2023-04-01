import React from 'react';

import { images } from '../../constants';
import { SubHeading, subheading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    
<div className='app__wrapper_img app__wrapper_img-reverse'>
  <img src={images.chef} alt='chef' />
</div>

<div className='app__wrapper_info'>
  <SubHeading title="Chef's World" />
  <h1 className='headtext__cormorant'>What We Believe In</h1>

  <div className='app__chef-content'>
    <div className='app__chef-content_quote'>
      <img src={images.quote} alt="quote" />
      <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel mollitia provident reiciendis fugit facere quia neque iste porro impedit beatae, exercitationem, dolorem soluta et assumenda ab totam debitis sapiente.</p>
    </div>
    <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi numquam, quod consectetur enim similique corrupti dolor inventore eius soluta dignissimos, eum eligendi velit, aperiam quasi corporis aspernatur at cumque!</p>
  </div>

  <div className='app__chef-sign'>
    <p className='p__opensans'>Kevin Luo</p>
    <p className='p__opensans'>Chef & Founder</p>
    <img src={images.sign} alt="sign" />
  </div>
</div>

  </div>
);

export default Chef;
