import React from 'react';

const IntroSection = () => {
  const triangleStyle = {
    transform: 'translate(31.872727, 29.218182) rotate(90.000000) translate(-31.872727, -29.218182)',
  };

  const uspsData = [
    {
      icon: 'https://cdn.mahlatini.com/_80x80_crop_center-center_80_none/Why-Choose-Bespoke-Service.svg',
      title: 'Bespoke Service',
      description: 'Custom itineraries designed just for you',
    },
    {
      icon: 'https://cdn.mahlatini.com/_80x80_crop_center-center_80_none/Why-Choose-Responsible-Travel.svg',
      title: 'Sustainable Travel',
      description: 'Conserving wildlife and supporting communities',
    },
    {
      icon: 'https://cdn.mahlatini.com/_80x80_crop_center-center_80_none/Why-Choose-African-Specialists.svg',
      title: 'African Specialists',
      description: '20+ years of knowledge informs every trip',
    },
    {
      icon: 'https://cdn.mahlatini.com/_80x80_crop_center-center_80_none/Why-Choose-Financial-Protection.svg',
      title: '100% Financial Protection',
      description: 'Peace of mind with your money secured in a Trust',
    },
  ];


  // Clone kar rhe hai 
  // Tailwind css use kar rha hu

  return (
    <section id="-2" className="content-block intro intro--dark bg-gray-900 text-white py-20">
      <div className=" px-8">
        <div className="limit-width-md text-center">
          <div className="intro__text text-center  px-12">
            <span className="preheading text-4xl">Your adventure. Our expertise.</span>
            <h2 className="intro__heading uppercase text-[40px] font-medium mb-8   tracking-[8px] ">Why travel with mahlatini?</h2>
            <div className=" mb-8">
              <p>
                We know Africa intimatey and your dedicated travel expert will create a custom African adventure that exceeds your wildest dreams. From extraordinary wildlife encounters to exceptional lodges, breathtaking scenery, and responsible travel, you’ll be in the safest of hands. Tell us your wishes, and we’ll draw on our experience to make them come true.
              </p>
              {/* Add any other content here */}
            </div>
          </div>
        </div>
        <div className="limit-width-md intro-usps">
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {uspsData.map((item, index) => (
              <li key={index} className="col-span-1 md:col-span-1 px-2">
                <div className="usp flex flex-col justify-center text-center items-center">
                  <figure className="usp__icon">
                    <img className="rounded-full bg-[#047857]" src={item.icon} width="80" height="80" alt={item.title} loading="lazy" />
                  </figure>
                  <strong>{item.title}</strong>
                  <span className="pb-8">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="limit-width-md intro__video-wrapper-block">
          <div className="intro__video-wrapper">
            <a href="https://player.vimeo.com/video/687086045" data-glightbox="title: Video footage credits and thanks to:; description: Angama Mara, Singita Ebony lodge, Singita Lebombo Lodge, Azura Quilalea Private Island, Singita Sweni Lodge, Asilia and Babylonstoren; descPosition: bottom; type: video; effect: fade; width: 1150px; height: auto;" className="glightboxVideo">
              <figure className="intro__video hidden md:block ">
                <picture className=' flex justify-center  items-center'>
                  <source type="image/webp" srcSet="https://cdn.mahlatini.com/_990x631_crop_center%20center_100_none/120496/Signature-Video-Thumbnail-min.webp" media="(min-width: 1px)" />
                  <source type="image/jpg" srcSet="https://cdn.mahlatini.com/_990x631_crop_center%20center_100_none/120496/Signature-Video-Thumbnail-min.jpg" media="(min-width: 1px)" />
                  <img src="https://cdn.mahlatini.com/_990x631_crop_center%20center_100_none/120496/Signature-Video-Thumbnail-min.jpg" width="990" height="631" alt="Signature Video Thumbnail" loading="lazy" className="hero__image" />
                </picture>
                <span className="video-button">
                  <svg width="11px" height="15px" viewBox="0 0 11 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>Triangle</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Responsive-Homepage" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Homepage-375" transform="translate(-183.000000, -1697.000000)" fill="#333333">
                        <g id="Overview" transform="translate(0.000000, 677.000000)">
                          <g id="Play-Icon" transform="translate(157.000000, 998.000000)">
                            <polygon id="Triangle" style={triangleStyle} points="31.8727273 24.2181818 38.8727273 34.2181818 24.8727273 34.2181818"></polygon>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </figure>
            </a>
            <figure className="intro__image-left">
              <picture>
                <source type="image/webp" srcSet="https://cdn.mahlatini.com/_250x320_crop_center%20center_100_none/111127/Granite-boulders-Six-Senses.webp" media="(min-width: 1px)" />
                <source type="image/jpg" srcSet="https://cdn.mahlatini.com/_250x320_crop_center%20center_100_none/Granite-boulders-Six-Senses.jpg" media="(min-width: 1px)" />
                <img src="https://cdn.mahlatini.com/_250x320_crop_center%20center_100_none/Granite-boulders-Six-Senses.jpg" width="250" height="320" alt="Seychelles island vacation granite boulders" loading="lazy" className="hero__image" />
              </picture>
            </figure>
            <figure className="intro__image-right">
              <picture>
                <source type="image/webp" srcSet="https://cdn.mahlatini.com/_300x220_crop_center%20center_100_none/111126/lionesses-Angama-Mara-Maasai-Mara.webp" media="(min-width: 1px)" />
                <source type="image/jpg" srcSet="https://cdn.mahlatini.com/_300x220_crop_center%20center_100_none/lionesses-Angama-Mara-Maasai-Mara.jpg" media="(min-width: 1px)" />
                <img src="https://cdn.mahlatini.com/_300x220_crop_center%20center_100_none/lionesses-Angama-Mara-Maasai-Mara.jpg" width="300" height="220" alt="Lioness Maasai Mara Kenya safari" loading="lazy" className="hero__image" />
              </picture>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
