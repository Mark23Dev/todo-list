const Card = () => {
  return(
    <div className="card">
      <div className="">
        <div className="">
          <FaRing />
          <p>Attending a birthday party in Kilimani</p>
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