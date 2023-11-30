export const Subscribe = () => {
  return (
    <>
      <div className="px-[59px] py-[165px] bg-orange rounded-[18px] mb-[101.28px]">
        <h2 className="text-center text-white text-[40px] font-[500] mb-[12px]">Subscribe to get the Latest Offer</h2>
        <p className="text-center text-white text-[16px] font-[400] leading-[30px] mb-[31.45px]">
          Get our daily updates by subscribing to our newspaper, please drop your email below
        </p>
        <div className="bg-white py-[24px] pl-[43.25px] pr-[7.5px] rounded-[70px] flex items-center justify-between">
            <input 
            type="text" 
            placeholder="Enter your email addres"
            className="text-[18px] font-[400] leading-[30px] text-[#363853]"
            />
            <div className="flex items-center gap-[10px] bg-orange py-[15px] px-[24px] rounded-[70px]">
              <img src="/public/mock-imges/icon/telegraph.svg" alt="" />
              <button className="text-white text-[20px] font-[500] leading-[30px]">Subscribe</button>
            </div>
        </div>
      </div>
    </>
  );
};
