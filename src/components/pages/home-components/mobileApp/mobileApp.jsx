export const MobileApp = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-[165px] mb-[166px]">
        <div>
          <div className="flex items-center text-[36px] leading-[50px] font-[500] mb-[30px] gap-[10px] text-[#363853]">
            <h2>Download  Our</h2>
            <span className="text-orange">Mobile App</span>
          </div>
          <p className="text-[20px] font-[400] leading-[30px] mb-[30px] text-[#363853]">
            It's all at your fingertips -- the restaurants
            you love. Find <br /> the right food to suit your mood,
            and make the first bite <br /> last. Go ahead, download
            app and get 50% discount
          </p>
          <div className="flex items-center gap-[35px]">
            <img src="/public/mock-imges/appStore.png" alt="" />
            <img src="/public/mock-imges/googleStore.png" alt="" />
          </div>
        </div>
        <div>
          <img src="/public/mock-imges/iPhone.png" alt="" />
        </div>
      </div>
    </>
  );
};