export const OurClient = () => {
  return (
    <>
      <div className="mb-[125px]">
        <div className="flex items-center justify-center gap-[10px] text-[36px] font-[500] mb-[67px] text-[#363853]">
          <h2>What Our Client</h2>
          <span className="text-orange">Saying </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <img src="/public/mock-imges/girl.png" alt="" className="w-[433px] h-[519px]" />
          </div>
          <div>
            <p className="text-[20px] leading-[45px] font-[400] mb-[74px] text-[#363853]">
              EFood has the most intriguing food order system
              in the <br /> country. UI in both their app and web Is
              very simple and <br /> easy to use, enhancing the UX. Their
              delivery men are also <br /> quite professional and knows the neighborhood well.
              Till <br /> now I never had to guide them to my address for delivery;
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[20px] font-[500] mb-[18px] text-[orange]">Anglina Jole</p>
                <p className="text-[14px] font-[400] text-[#AAA]">Food lover</p>
              </div>
              <div className="flex items-center gap-[44px]">
                <img src="/public/mock-imges/icon/ArrowLeft.svg" alt=""/>
                <img src="/public/mock-imges/icon/ArrowRight.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
