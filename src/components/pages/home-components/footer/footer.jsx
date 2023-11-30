export const Footer = () => {
  return (
    <>
      <div>
      <div className="flex gap-[118px]">
        <div>
          <div className="font-bold text-[25px] mb-[20px]">
            <span className="text-orange">E</span>
            <span>Food</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src="" alt="" />
            <p className="text-[16px] font-[400] leading-[32px] text-[#37383D] mb-[15px]">Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src="" alt="" />
            <p className="text-[16px] font-[400] leading-[32px] text-[#37383D] mb-[15px]">0943833399</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src="" alt="" />
            <p className="text-[16px] font-[400] leading-[32px] text-[#37383D] mb-[15px]">support@efood.com</p>
          </div>
          <div className="-ml-[15px]">
            <img src="/public/mock-imges/footerIcon/sosmed.svg" alt="" />
          </div>
        </div>
        <div className="flex items-center justify-around text-[18px] font-[400] leading-[49px] text-[#363853] mb-[29px] gap-[99px]">
          <p>
            <span className="font-[500]">Service</span> <br />
            How it works <br />
            Home delivery <br />
            Prducts <br />
            Menu
          </p>
          <p>
            <span className="font-[500]">Company</span> <br />
            About Us <br />
            News <br />
            Our trusted partner <br />
            New users FAQ
          </p>
          <p>
            <span className="font-[500]">Supports </span><br />
            Help center <br />
            Feedbcak <br />
            Contact us <br />
            Terms conditins
          </p>
          <p>
            <span className="font-[500]">Resources</span> <br />
            Download app <br />
            Blog <br />
            What’s new <br />
            Sitemap <br />
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[25px] mb-[36px] border-t-[3px] pt-[26px]">
        <div className="flex items-center gap-[51px] text-[14px] font-[400] leading-[14px] text-[#646464]">
          <p>© 2021 EFood - All rights reserved.</p>
        </div>
        <div className="flex items-center gap-[51px] text-[14px] font-[400] leading-[14px] text-[#646464] ">
          <span>Privacy</span>
          <span>Security</span>
          <span>Terms</span>
        </div>
      </div>
      </div>
    </>
  );
};
