import { FaRing } from "react-icons/fa";

const Card = () => {
  return(
    <div className="card flex flex-col border-[1px] m-2 rounded-2xl">
      <div className="flex justify-between p-5">
        <div className="flex flex-2 flex-col items-center">
          
          <span className="min-h-0 text-sm">Attending a birthday party in Kilimani</span>
          <span className="min-h-0 text-sm text-gray-600">Buy gift on the way and pick up cake from the bakery</span>
        </div>
        <div className="flex-1">
          <img className="h-28 w-28 object-cover mt-3 rounded-lg" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
        </div>
        
      </div>
      <div className="status">
        <span>Priority: Moderate</span>
        <span>Status: Not shared</span>
      </div>
    </div>
  )
}
export default Card;