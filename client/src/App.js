import './App.css';
import first_image from "./images/first_image.jpg";
import about_image from "./images/about-us/Без имени-2.jpg";
import arteco4 from "./images/catalog/arteco4.jpg";
import shablon from "./images/shablon.jpg";
import arteco from "./images/4/артеко.png";
import arteco1 from "./images/4/1.png";
import arteco3 from "./images/4/3.png";
import arteco2 from "./images/4/2.png";
import arteco7 from "./images/5/Без имени-3.jpg";
import arteco5 from "./images/5/2.png";
import arteco6 from "./images/5/артеко 7.png";
import arteco8 from "./images/5/3.png";
import arteco9 from "./images/5/1.png";
import klondike2 from "./images/6-klondike/2.png";
import klondike3 from "./images/6-klondike/3.png";
import klondike4 from "./images/6-klondike/4.png";
import klondike1 from "./images/6-klondike/1.png";
import meteore8 from "./images/5/Без имени-3.jpg";
import meteore1 from "./images/meteore8/1.png";
import meteore2 from "./images/meteore8/2.png";
import meteore4 from "./images/meteore8/4.png";
import meteore3 from "./images/meteore8/3.png";
import polistof from "./images/polistof/polistof-backside.png";
import polistof1 from "./images/polistof/1.png";
import polistof2 from "./images/polistof/2.png";
import polistof3 from "./images/polistof/3.png";

function App() {
  return (
      <div>
        <div className="image-container">
          <img src={first_image} alt=""/>
            <div className="text-container">
              <p>Сделайте Ваш интерьер</p>
              <p className="inline1">особенным!</p>
            </div>
        </div>
  <div className="about-us">
    <div className="second-image-container">
      <img src={about_image} alt=""/>
        <div className="second-text-container">
          <p>Итальянский бренд VALPAINT известен на рынке с 1988 года
            и является лучшим производителем декоративной штукатурки в мире.
            Эксклюзивные цветовые решения
            сделают Ваш интерьер оригинальным, a
            уникальная технология нанесения от наших мастеров придаст совершенно новые
            тактильные ощущения. Благодаря высокому профессионализму и болышому опыту
            работы нашей команды, продукты бренда
            VALPAINT украсят любой, даже самый
            сложный интерьер. VALPAINT и наши
            мастера сделают всё, чтобы все Ваши мечты стали частью Вашей жизни!</p>
          <p className="inline4">DECOR IMPRESS</p>
        </div>
    </div>
  </div>
  <div className="catalog">
    <div className="catalog-img-container">
      <img src={arteco4} alt=""/>
        <div className="our-catalog-text">
          Наш каталог
        </div>
        <div className="download-catalog-container">
          <div className="download-catalog-text">Скачать полный каталог:</div>
          <button className="download-catalog-button">Скачать</button>
        </div>
        <div className="catalog-names">
          Каталог:<br/>
          ARTECO 1<br/>
          ARTECO 7<br/>
          KLONDIKE<br/>
          METEORITE 8<br/>
          POLISTOF<br/>
          SABULA 2<br/>
          SABULADOR<br/>
          VALPAINT E-VOLUTION<br/>
          VALPAINT I-BETON<br/>
          VALRENNA<br/>
          VALRENNA 2<br/>
          VALSETIN 2
        </div>
    </div>
  </div>
  <div className="arteco1">
    <div className="arteco1-img-container">
      <img src={shablon} alt=""/>
        <div className="left-up-image">
          <img src={arteco} alt=""/>
        </div>
        <div className="left-down-image">
          <img src={arteco1} alt=""/>
        </div>
        <div className="middle-image">
          <img src={arteco3} alt=""/>
        </div>
        <div className="right-down-image">
          <img src={arteco2} alt=""/>
        </div>
        <div className="first-table">
          <table>
            <tr>
              <td className="inline2">ARTECO1<br/>(краска<br/>декоративная)</td>
              <td>4 л</td>
              <td className="inline3">27 050<br/>руб.</td>
              <td>24 - 25 м<sup>2</sup></td>
              <td>1 слой</td>
            </tr>
          </table>
        </div>
    </div>
  </div>
  <div className="arteco7">
    <div className="arteco7-img-container">
      <img src={arteco7} alt=""/>
        <div className="arteco7-first-image">
          <img src={arteco5} alt=""/>
        </div>
        <div className="arteco7-second-image">
          <img src={arteco6} alt=""/>
        </div>
        <div className="arteco7-third-image">
          <img src={arteco8} alt=""/>
        </div>
        <div className="arteco7-fourth-image">
          <img src={arteco9} alt=""/>
        </div>
        <div className="second-table">
          <table>
            <tr>
              <td rowSpan="2" className="inline2">ARTECO7<br/>(краска<br/>декоративная)</td>
              <td rowSpan="2">5 л</td>
              <td rowSpan="2" className="inline3">18 200<br/>руб.</td>
              <td>35-40 м<sup>2</sup></td>
              <td>1 слой</td>
              <td>Эффект<br/>classico</td>
            </tr>
            <tr>
              <td>44-50 м<sup>2</sup></td>
              <td>1 слой</td>
              <td>Эффект<br/>floreale<br/>metallizatto</td>
            </tr>
          </table>
        </div>
    </div>
  </div>

  <div className="klondike">
    <div className="klondike-img-container">
      <img src={shablon} alt=""/>
        <div className="klondike-left-up-image">
          <img src={klondike2} alt=""/>
        </div>
        <div className="klondike-left-down-image">
          <img src={klondike3} alt=""/>
        </div>
        <div className="klondike-middle-image">
          <img src={klondike4} alt=""/>
        </div>
        <div className="klondike-right-down-image">
          <img src={klondike1} alt=""/>
        </div>
        <div className="third-table">
          <table>
            <tr>
              <td rowSpan="2" className="inline2">KLONDIKE<br/>(краска<br/>декоративная)</td>
              <td>5 л</td>
              <td className="inline3">3810 руб.</td>
              <td>4 - 5 м<sup>2</sup></td>
              <td>2 слоя</td>
            </tr>
            <tr>
              <td>2,5 л</td>
              <td>7400 руб.</td>
              <td>10 - 12,5 м<sup>2</sup></td>
              <td>2 слоя</td>
            </tr>
          </table>
        </div>
    </div>
  </div>

  <div className="meteore8">
    <div className="meteore8-img-container">
      <img src={meteore8} alt=""/>
        <div className="meteore8-first-image">
          <img src={meteore1} alt=""/>
        </div>
        <div className="meteore8-second-image">
          <img src={meteore2} alt=""/>
        </div>
        <div className="meteore8-third-image">
          <img src={meteore4} alt=""/>
        </div>
        <div className="meteore8-fourth-image">
          <img src={meteore3} alt=""/>
        </div>
        <div className="fourth-table">
          <table>
            <tr>
              <td rowSpan="4" className="inline2">METEORE 8<br/>(штукатурка<br/>декоративная)</td>
              <td rowSpan="2">1 л</td>
              <td rowSpan="2">3 660<br/>руб.</td>
              <td>12 - 13 м<sup>2</sup></td>
              <td>1 слой</td>
              <td>Эффект liscio</td>
            </tr>
            <tr>
              <td>4 - 5 м<sup>2</sup></td>
              <td>1 слой</td>
              <td>Эффект spatolato</td>
            </tr>
            <tr>
              <td rowSpan="2">4 л</td>
              <td rowSpan="2">11 510 <br/>руб.</td>
              <td>48 - 52 м<sup>2</sup></td>
              <td>1 слой</td>
              <td>Эффект liscio</td>
            </tr>
            <tr>
              <td>16 - 20 м<sup>2</sup></td>
              <td>1 слой</td>
              <td>Эффект spatolato</td>
            </tr>
          </table>
        </div>
    </div>
  </div>

  <div className="polistof">
    <div className="polistof-img-container">
      <img src={polistof} alt=""/>
        <div className="polistof-left-up-image">
          <img src={polistof1} alt=""/>
        </div>
        <div className="polistof-left-down-image">
          <img src={polistof2} alt=""/>
        </div>
        <div className="polistof-right-down-image">
          <img src={polistof3} alt=""/>
        </div>
        <div className="five-table">
          <table>
            <tr>
              <td rowSpan="4" className="inline2">POLISTOF<br/>(краска<br/>декоративная)</td>
              <td rowSpan="4">1 л<br/>фас.</td>
              <td rowSpan="4">6 710<br/>руб.</td>
              <td>3,5 - 4 м<sup>2</sup></td>
              <td>2 слоя</td>
              <td>Эффект <br/> tessuto <br/> vellutato</td>
            </tr>
            <tr>
              <td>3,5 - 4 м<sup>2</sup></td>
              <td>2 слоя</td>
              <td>Эффект <br/> tessuto <br/> vellutato con <br/> L50</td>
            </tr>
            <tr>
              <td>12 - 14 м<sup>2</sup></td>
              <td>1 слой</td>
              <td rowSpan="2">Эффект <br/> tessuto jeans</td>
            </tr>
            <tr>
              <td>4 - 5 м<sup>2</sup></td>
              <td>2 слоя</td>
            </tr>
          </table>
        </div>
    </div>
  </div></div>
  );
}

export default App;
