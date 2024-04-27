import Button from "../../controls/button/Button";

const Hobberd = () => {
  return (
    <div className="hobberd">
      <ul className="hobberd__list">
        <li className="hobberd__list-item">
          <Button className={"btn-secondary"} href="">
            Kindergarden
          </Button>
        </li>
        <li className="hobberd__list-item">
          <Button className={"btn-secondary active"} href="">
            High School
          </Button>
        </li>
        <li className="hobberd__list-item">
          <Button className={"btn-secondary"} href="">
            College
          </Button>
        </li>
      </ul>
    </div>
  );
};
export default Hobberd;
