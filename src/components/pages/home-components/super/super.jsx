import { Button } from "../../../common/button/Button"

export const Super = () => {
  return (
    <div className="flex items-center justify-between mb-[94.46px]">
      <div>
        <div className="text-[66px] font-[500] text-[#363853] mb-[23px]">
          <h2>
            super fast  <span className="text-orange">Food</span>
          </h2>
          <h2>
            <span className="text-orange">delivery</span> service
          </h2>
        </div>
        <p className="text-[20px] font-[400] leading-[30px] mb-[44.78px] text-[#363853]" >
          We provide super fast-delivery service.
          Let’s use our <br /> services right now and get
          discounts of up to 50%
        </p>
        <div className="flex gap-[30px] items-center">
          <div className="bg-orange px-[21px] py-[13px] rounded-[5px]">
            <Button>Explore Food</Button>
          </div>
          <span className="text-[20px] font-[400] text-[363853] underline"><a href="">Download App</a></span>
        </div>
      </div>
      <div className="w-[689px] h-[681px]">
        <img src="/public/mock-imges/superImg.png" alt="" />
      </div>
    </div>
  )
}
