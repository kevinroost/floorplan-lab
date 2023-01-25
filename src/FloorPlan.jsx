import Kitchen from "./Kitchen"
import Bedroom from "./Bedroom"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"

const FloorPlan = (props) => {
  return (
    <>
      <div><Bedroom bedNum={1}/></div>
      <div>Kitchen<Kitchen /></div>
      <div><Bath size={'Full'}/></div>
      <div><Bedroom bedNum={2}/></div>
      <div><LivingRoom /></div>
      <div><Bath size={'Half'}/></div>
      <div><Bedroom bedNum={2}/></div>
    </>
  )
}

export default FloorPlan