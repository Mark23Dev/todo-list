import { FaRing } from "react-icons/fa";
import ProgressRing from "./ProgressRing";

const Card = () => {
  return(
    <div className="card flex flex-col border-[1px] m-2 rounded-2xl min-h-0">
      <div className="flex p-3 gap-2">
        <ProgressRing 
          radius="4"
          cx="6"
          cy="6"
          strokeWidth="1.5"
          stroke="blue"
          fill="transparent"
        />
        <div className="content">
          <div className="flex justify-between ml-0">
            <div className="flex flex-2 flex-col items-center mr-4 mt-0.5">
              <span className="min-h-0 font-bold text-[12px] mb-1.5">Attending a birthday party in Kilimani</span>
              <span className="min-h-0 text-sm text-gray-600 text-[11px]">Buy gift on the way and pick up cake from the bakery</span>
            </div>
            <div className="flex-1">
              <img className="h-18 w-18 object-cover mt-3 rounded-lg" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
            </div>
            
          </div>
          <div className="status min-w-0 min-h-0">
            <span className="text-[9px] min-w-0">Priority: Moderate</span>
            <span className="text-[9px] min-w-0">Status: Not shared</span>
            <span className="text-[9px] min-w-0 text-gray-300">Created on: 20/08/2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;