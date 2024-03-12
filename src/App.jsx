// import { NavLink } from "react-router-dom";
import bgImd from "./assets/Frame.svg";
import "./Card.scss";
function App() {
  return (
    <div className="bgRow">
      <div className="bgCols">
        <div className="bgImgEdu">
          <img src={bgImd} alt="" />
        </div>
        <div className="bgTextsEdu">
          <p className="bg-text">Ta’lim</p>
          <p className="bg-title">
            Zamonaviy texnologiya va metodikalar asosida IT yo‘nalishlarini
            o‘qitish
          </p>
        </div>
        <a to="/1" className="bg-btn">
          Batafsil
        </a>
      </div>
      <div className="bgCols">
        <div className="bgImgEdu">
          <img src={bgImd} alt="" />
        </div>
        <div className="bgTextsEdu">
          <p className="bg-text">Ta’lim</p>
          <p className="bg-title">
            Zamonaviy texnologiya va metodikalar asosida IT yo‘nalishlarini
            o‘qitish
          </p>
        </div>
        <a to="/2" className="bg-btn">
          Batafsil
        </a>
      </div>
      <div className="bgCols">
        <div className="bgImgEdu">
          <img src={bgImd} alt="" />
        </div>
        <div className="bgTextsEdu">
          <p className="bg-text">Ta’lim</p>
          <p className="bg-title">
            Zamonaviy texnologiya va metodikalar asosida IT yo‘nalishlarini
            o‘qitish
          </p>
        </div>
        <a to="/3" className="bg-btn">
          Batafsil
        </a>
      </div>
      <div className="bgCols">
        <div className="bgImgEdu">
          <img src={bgImd} alt="" />
        </div>
        <div className="bgTextsEdu">
          <p className="bg-text">Ta’lim</p>
          <p className="bg-title">
            Zamonaviy texnologiya va metodikalar asosida IT yo‘nalishlarini
            o‘qitish
          </p>
        </div>
        <a to="/4" className="bg-btn">
          Batafsil
        </a>
      </div>
    </div>
  );
}

export default App;
