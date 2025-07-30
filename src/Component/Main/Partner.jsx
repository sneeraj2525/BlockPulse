import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../../public/images/partner/bnc1.png'
import img2 from '../../../public/images/partner/cdx.png'
import img3 from '../../../public/images/partner/dc1.png'
import img4 from '../../../public/images/partner/hotbit.png'
import img5 from '../../../public/images/partner/ltc.png'
import img6 from '../../../public/images/partner/susi.png'
import img7 from '../../../public/images/partner/vindax.png'
import img8 from '../../../public/images/partner/wzx.png'


const Partner = () => {
  return (
    <>
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
            <img className="img-fluid" src={img1} />
            <img className="img-fluid" src={img2} />
            <img className="img-fluid" src={img3} />
            <img className="img-fluid" src={img4} />
            <img className="img-fluid" src={img5} />
            <img className="img-fluid" src={img6} />
            <img className="img-fluid" src={img7} />
            <img className="img-fluid" src={img8} />
        </Marquee>
    </>
  )
}

export default Partner

