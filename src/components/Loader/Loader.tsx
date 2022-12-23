import spinner from "../../assets/img/spinner/spinner.svg";
import './style.css'

interface ILoaderProps {
    show: boolean
}

export default function Loader({ show }: ILoaderProps) {
  return (
    <div className={show ? "spinner-container" : "spinner-container spinner-hide"}>
      <img alt="loader" src={spinner} />
    </div>
  );
}