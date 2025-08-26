import { FaRing } from "react-icons/fa";

const Card = () => {
  return(
    <div className="card flex flex-col">
      <div className="flex justify-between w-full p-5">
        <div className="flex flex-col">
          <FaRing />
          <span>Attending a birthday party in Kilimani</span>
          <span>Buy gift on the way and pick up cake from the bakery</span>
        </div>
        <div className="img">
          <img className="h-10 w-10 object-cover rounded-lg" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
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