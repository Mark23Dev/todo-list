import { FaRing } from "react-icons/fa";

const Card = () => {
  return(
    <div className="card flex flex-col">
      <div className="flex justify-between p-5">
        <div className="flex flex-col items-center">
          <FaRing />
          <span className="min-h-0 text-sm">Attending a birthday party in Kilimani</span>
          <span className="min-h-0 text-sm">Buy gift on the way and pick up cake from the bakery</span>
        </div>
        <div className="img">
          <img className="h-28 w-28 object-cover rounded-lg" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
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