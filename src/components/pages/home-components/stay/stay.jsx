export const Stay = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-[128px]">
        <div className="w-[626px] h-[723px]">
          <img src="/public/mock-imges/staybgImg.png" alt="" />
        </div>
        <div>
          <div className="text-[36px] font-[500] leading-[50px] mb-[30px] text-[#363853]">
            <div className="flex items-center">
              <span className="text-orange mr-[10px]">Stay</span> <h2>at home, we will</h2>
            </div>
            <div className="flex items-center">
              <h2>Provide </h2> <span className="text-orange ml-[10px]">good food</span>
            </div>
          </div>
          <p className="text-[20px] font-[400] leading-[30px] mb-[14px] text-[363853]">
            We provide tasty food and superfast delivery
            at <br /> your home.  Let’s use our services right
            now and <br /> get discounts of up to 50%.
          </p>
          <div className="flex items-center mb-[25px] gap-[32px]">
            <img src="/public/mock-imges/icon/stay1.svg" alt="" className="w-[34px] h-[34px]"/>
            <p className="text-[24px] font-[400] leading-[30px] text-[363853]">fasted delivery in 30 Minutes</p>
          </div>
          <div className="flex items-center mb-[25px] gap-[32px]">
            <img src="/public/mock-imges/icon/stay2.svg" alt="" className="w-[30px] h-[30px]"/>
            <p className="text-[24px] font-[400] leading-[30px] text-[363853]">300+ delivery men</p>
          </div>
          <div className="flex items-center gap-[32px] mb-[52px]">
            <img src="/public/mock-imges/icon/stay3.svg" alt="" className="w-[28px] h-[28px]"/>
            <p className="text-[24px] font-[400] leading-[30px] text-[363853]">500+ restaurant & cafe shop</p>
          </div>
          <button className="bg-orange text-white text-[20px] font-[400] py-[17px] px-[44px] rounded-[30px] rounded-br-[0px]">See more</button>
        </div>
      </div>
    </>
  );
};
