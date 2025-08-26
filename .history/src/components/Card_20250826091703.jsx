import { FaRing } from "react-icons/fa";
import ProgressRing from "./ProgressRing";

const Card = () => {
  return(
    <div className="card flex flex-col border-[1px] m-2 rounded-2xl min-h-0">
      <div className="flex p-3 gap-2">
        <ProgressRing />
        <div className="content">
          <div className="flex justify-between">
            <div className="flex flex-2 flex-col items-center">
              
              <span className="min-h-0 font-extrabold text-[14px] mb-1.5">Attending a birthday party in Kilimani</span>
              <span className="min-h-0 text-sm text-gray-600 text-[12px]">Buy gift on the way and pick up cake from the bakery</span>
            </div>
            <div className="flex-1">
              <img className="h-24 w-24 object-cover mt-3 rounded-lg" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
            </div>
            
          </div>
          <div className="status">
            <span className="text-[11px] pl-3">Priority: Moderate</span>
            <span className="text-[11px]">Status: Not shared</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;