import './App.css';
import { useEffect, useState } from 'react'
import logo from "./images/logo.svg";
import first_image from "./images/intro/first_image.jpg";
import about_image from "./images/about-us/Без имени-2.jpg";
import arteco_image from "./images/catalogue/arteco4.jpg";
import layout2 from "./images/layouts/layout2.jpg";
import artecoLogo from "./images/arteco1/артеко.png";
import arteco1 from "./images/arteco1/1.png";
import arteco2 from "./images/arteco1/2.png";
import arteco3 from "./images/arteco1/3.png";
import layout1 from "./images/layouts/layout1.jpg";
import arteco7Logo from "./images/arteco7/logo.png";
import arteco72 from "./images/arteco7/2.png";
import arteco73 from "./images/arteco7/3.png";
import arteco71 from "./images/arteco7/1.png";
import klondikeLogo from "./images/klondike/logo.png";
import klondike1 from "./images/klondike/1.png";
import klondike2 from "./images/klondike/2.png";
import klondike3 from "./images/klondike/3.png";
import meteoreLogo from "./images/meteore8/logo.png";
import meteore1 from "./images/meteore8/1.png";
import meteore2 from "./images/meteore8/2.png";
import meteore3 from "./images/meteore8/3.png";
import polistofLogo from "./images/polistof/logo.png";
import polistof1 from "./images/polistof/1.png";
import polistof2 from "./images/polistof/2.png";
import sabulaLogo from "./images/sabula2/logo.png";
import sabula1 from "./images/sabula2/1.png";
import sabula2 from "./images/sabula2/2.png";
import sabula3 from "./images/sabula2/3.png";
import sabula4 from "./images/sabula2/4.png";
import layout3 from "./images/layouts/layout3.png";
import layout4 from "./images/layouts/layout4.png";
import layout5 from "./images/layouts/layout5.png";
import sabuladorLogo from "./images/sabulador/logo.png";
import sabulador1 from "./images/sabulador/1.png";
import sabulador2 from "./images/sabulador/2.png";
import valpaintELogo from "./images/valpaintE/logo.png";
import valpaintE1 from "./images/valpaintE/1.png";
import valpaintE2 from "./images/valpaintE/2.png";
import valpaintE3 from "./images/valpaintE/3.png";
import valpaintILogo from "./images/valpaintI/logo.png";
import valpaintI1 from "./images/valpaintI/1.png";
import valpaintI2 from "./images/valpaintI/2.png";
import valpaintI3 from "./images/valpaintI/3.png";
import valrennaLogo from "./images/valrenna/logo.png";
import valrenna1 from  "./images/valrenna/1.png";
import valrenna2 from  "./images/valrenna/2.png";
import valrenna3 from  "./images/valrenna/3.png";
import valrenna2Logo from "./images/valrenna2/logo.png";
import valrenna21 from  "./images/valrenna2/1.png";
import valrenna22 from  "./images/valrenna2/2.png";
import valrenna23 from  "./images/valrenna2/3.png";
import valsetinLogo from "./images/valsetin/logo.png";
import valsetin1 from "./images/valsetin/1.png";
import valsetin2 from "./images/valsetin/2.png";
import valsetin3 from "./images/valsetin/3.png";
import valsetin4 from "./images/valsetin/4.png";

function App() {

  const [state, setState] = useState('idle')

  useEffect(() => {
    if (state === 'downloading') {
      fetch("/download")
      .then(res => res.blob())
      .then(blob => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", "Актуальные цены на продукцию Valpaint.pdf");
        document.body.appendChild(link);
        link.click();
      })
      setState('idle')
    }
  }, [state])

  return (
      <div className="fixed-wrapper">
        <div className="intro fixed-container-1">
        <div className="image-container  fixed-container-1" id="main">
          <img src={first_image} alt=""/>
          <p className="main-header main-header-1">Сделайте</p>
          <p className="main-header main-header-2">Ваш интерьер</p>
          <p className="main-header main-header-3">особенным!</p>
        </div>
        </div>
  <div className="about-us fixed-container" id="about">
    <div className="second-image-container fixed-container">
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
      <a href="#contacts" className="place-order-link"><button className="place-order-button">Сделать заказ</button></a>
    </div>
  </div>
  <div className="catalogue fixed-container" id="catalogue">
    <div className="catalogue-img-container fixed-container">
      <img src={arteco_image} alt=""/>
        <div className="our-catalogue-text">
          Наш каталог
        </div>
          <button onClick={() => setState('downloading')} className="download-catalogue-button">Скачать</button>
        <div className="catalogue-names">
          <p className="catalogue-list-name">Каталог:</p><br/>
          <ul className="catalogue-list">
            <li><a href="#arteco1">ARTECO 1</a></li>
            <li><a href="#arteco7">ARTECO 7</a></li>
            <li><a href="#klondike">KLONDIKE</a></li>
            <li><a href="#meteore8">METEORE 8</a></li>
            <li><a href="#polistof">POLISTOF</a></li>
            <li><a href="#sabula2">SABULA 2</a></li>
            <li><a href="#sabulador">SABULADOR</a></li>
            <li><a href="#valpaintE">VALPAINT E-VOLUTION</a></li>
            <li><a href="#valpaintI">VALPAINT I-BETON</a></li>
            <li><a href="#valrenna">VALRENNA</a></li>
            <li><a href="#valrenna2">VALRENNA 2</a></li>
            <li><a href="#valsetin">VALSETIN</a></li>
          </ul>

        </div>
    </div>
  </div>
  <div className="arteco1 fixed-container" id="arteco1">
    <div className="arteco1-img-container fixed-container">
      <img src={layout2} alt=""/>
        <div className="arteco1-left-up-image">
          <img src={artecoLogo} alt=""/>
        </div>
        <div className="arteco1-left-down-image">
          <img src={arteco1} alt=""/>
        </div>
        <div className="arteco1-middle-image">
          <img src={arteco3} alt=""/>
        </div>
        <div className="arteco1-right-down-image">
          <img src={arteco2} alt=""/>
        </div>
        <div className="arteco1-table">
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
  <div className="arteco7 fixed-container fixed-container" id="arteco7">
    <div className="arteco7-img-container fixed-container">
      <img src={layout1} alt=""/>
        <div className="arteco7-first-image">
          <img src={arteco71} alt=""/>
        </div>
        <div className="arteco7-second-image">
          <img src={arteco7Logo} alt=""/>
        </div>
        <div className="arteco7-third-image">
          <img src={arteco73} alt=""/>
        </div>
        <div className="arteco7-fourth-image">
          <img src={arteco72} alt=""/>
        </div>
        <div className="arteco7-table">
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
  <div className="klondike fixed-container" id="klondike">
    <div className="klondike-img-container fixed-container">
      <img src={layout2} alt=""/>
        <div className="klondike-left-up-image">
          <img src={klondike2} alt=""/>
        </div>
        <div className="klondike-left-down-image">
          <img src={klondikeLogo} alt=""/>
        </div>
        <div className="klondike-middle-image">
          <img src={klondike3} alt=""/>
        </div>
        <div className="klondike-right-down-image">
          <img src={klondike1} alt=""/>
        </div>
        <div className="klondike-table">
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
        <div className="meteore8 fixed-container" id="meteore8">
          <div className="meteore8-img-container fixed-container">
            <img src={layout1} alt=""/>
            <div className="meteore8-first-image">
              <img src={meteore1} alt=""/>
            </div>
            <div className="meteore8-second-image">
              <img src={meteore2} alt=""/>
            </div>
            <div className="meteore8-third-image">
              <img src={meteoreLogo} alt=""/>
            </div>
            <div className="meteore8-fourth-image">
              <img src={meteore3} alt=""/>
            </div>
            <div className="meteore8-table">
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
        <div className="polistof fixed-container" id="polistof">
          <div className="polistof-img-container fixed-container">
            <img src={layout3} alt=""/>
            <div className="polistof-left-up-image">
              <img src={polistofLogo} alt=""/>
            </div>
            <div className="polistof-left-down-image">
              <img src={polistof1} alt=""/>
            </div>
            <div className="polistof-right-down-image">
              <img src={polistof2} alt=""/>
            </div>
            <div className="polistof-table">
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
        </div>
        <div className="sabula2 fixed-container" id="sabula2">
          <div className="sabula2-img-container fixed-container">
            <img src={layout4} alt=""/>
            <div className="sabula2-first-image">
              <img src={sabulaLogo} alt=""/>
            </div>
            <div className="sabula2-second-image">
              <img src={sabula2} alt=""/>
            </div>
            <div className="sabula2-third-image">
              <img src={sabula3} alt=""/>
            </div>
            <div className="sabula2-fourth-image">
              <img src={sabula1} alt=""/>
            </div>
            <div className="sabula2-fifth-image">
              <img src={sabula4} alt=""/>
            </div>
            <div className="sabula2-table">
              <table>
                <tr>
                  <td className="inline2">SABULA 2<br/>(краска<br/>декоративная)</td>
                  <td>5 л</td>
                  <td>21 120<br/>руб.</td>
                  <td>15 - 20 м<sup>2</sup></td>
                  <td>2 слоя</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="sabulador fixed-container" id="sabulador">
          <div className="sabulador-img-container fixed-container">
            <img src={layout5} alt=""/>
            <div className="sabulador-first-image">
              <img src={sabuladorLogo} alt=""/>
            </div>
            <div className="sabulador-second-image">
              <img src={sabulador2} alt=""/>
            </div>
            <div className="sabulador-third-image">
              <img src={sabulador1} alt=""/>
            </div>
            <div className="sabulador-table">
              <table>
                <tr>
                  <td rowSpan="2" className="inline2">SABULADOR<br/>LUX<br/>(краска<br/>декоративная)</td>
                  <td>1 л</td>
                  <td>4 580<br/>руб.</td>
                  <td>8 - 9 м<sup>2</sup></td>
                  <td>1 слой</td>
                </tr>
                <tr>
                  <td>5 л</td>
                  <td>21 070<br/>руб.</td>
                  <td>40 - 45 м<sup>2</sup></td>
                  <td>1 слой</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="valpaintE fixed-container" id="valpaintE">
          <div className="valpaintE-img-container fixed-container">
            <img src={layout1} alt=""/>
            <div className="valpaintE-first-image">
              <img src={valpaintELogo} alt=""/>
            </div>
            <div className="valpaintE-second-image">
              <img src={valpaintE2} alt=""/>
            </div>
            <div className="valpaintE-third-image">
              <img src={valpaintE1} alt=""/>
            </div>
            <div className="valpaintE-fourth-image">
              <img src={valpaintE3} alt=""/>
            </div>
            <div className="valpaintE-table">
              <table>
                <tr>
                  <td rowSpan="3" className="inline2">SABULADOR<br/>LUX<br/>(краска<br/>декоративная)</td>
                  <td>1 л</td>
                  <td>5 290<br/>руб.</td>
                  <td>14 - 16 м<sup>2</sup></td>
                  <td>2 слоя</td>
                  <td rowSpan="3">Эффект<br/>marmorizzato</td>
                </tr>
                <tr>
                  <td>2,5 л</td>
                  <td>11 900<br/>руб.</td>
                  <td>35 - 40 м<sup>2</sup></td>
                  <td>2 слоя</td>
                </tr>
                <tr>
                  <td>5 л</td>
                  <td>23 050<br/>руб.</td>
                  <td>70 - 80 м<sup>2</sup></td>
                  <td>2 слоя</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="valpaintI fixed-container" id="valpaintI">
          <div className="valpaintI-img-container fixed-container">
            <img src={layout3} alt=""/>
            <div className="valpaintI-first-image">
              <img src={valpaintILogo} alt=""/>
            </div>
            <div className="valpaintI-second-image">
              <img src={valpaintI1} alt=""/>
            </div>
            <div className="valpaintI-third-image">
              <img src={valpaintI2} alt=""/>
            </div>
            <div className="valpaintI-fourth-image">
              <img src={valpaintI3} alt=""/>
            </div>
            <div className="valpaintI-table">
              <table>
                <tr>
                  <td className="inline2">METEORE 14<br/>GROSSO<br/>(штукатурка<br/>декоративная)</td>
                  <td>12 л</td>
                  <td>24 270<br/>руб.</td>
                  <td>9,6 - 12 м<sup>2</sup></td>
                  <td>1 слой</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="valrenna fixed-container" id="valrenna">
          <div className="valrenna-img-container fixed-container">
            <img src={layout1} alt=""/>
            <div className="valrenna-first-image">
              <img src={valrennaLogo} alt=""/>
            </div>
            <div className="valrenna-second-image">
              <img src={valrenna1} alt=""/>
            </div>
            <div className="valrenna-third-image">
              <img src={valrenna2} alt=""/>
            </div>
            <div className="valrenna-fourth-image">
              <img src={valrenna3} alt=""/>
            </div>
            <div className="valrenna-table">
              <table>
                <tr>
                  <td rowSpan="3" className="inline2">VALRENNA<br/>EXTRA SOFT<br/>(краска<br/>декоративная)</td>
                  <td>0,75 л</td>
                  <td>7 190<br/>руб.</td>
                  <td>5,25 - 6 м<sup>2</sup></td>
                  <td>2 слоя</td>
                </tr>
                <tr>
                  <td>2,5 л</td>
                  <td>19 990<br/>руб.</td>
                  <td>17,5 - 20 м<sup>2</sup></td>
                  <td>2 слоя</td>
                </tr>
                <tr>
                  <td>5 л</td>
                  <td>36 890<br/>руб.</td>
                  <td>35 - 40 м<sup>2</sup></td>
                  <td>2 слоя</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="valrenna2 fixed-container" id="valrenna2">
          <div className="valrenna2-img-container fixed-container">
            <img src={layout2} alt=""/>
            <div className="valrenna2-first-image">
              <img src={valrenna2Logo} alt=""/>
            </div>
            <div className="valrenna2-second-image">
              <img src={valrenna21} alt=""/>
            </div>
            <div className="valrenna2-third-image">
              <img src={valrenna22} alt=""/>
            </div>
            <div className="valrenna2-fourth-image">
              <img src={valrenna23} alt=""/>
            </div>
            <div className="valrenna2-table">
              <table>
                <tr>
                  <td rowSpan="3" className="inline2">VALRENNA 2<br/>(краска<br/>декоративная)</td>
                  <td>1 л</td>
                  <td>5 720<br/>руб.</td>
                  <td>9 - 11 м<sup>2</sup></td>
                  <td>2 слоя</td>
                  <td rowSpan="3">Эффект renna</td>
                </tr>
                <tr>
                  <td>2,5 л</td>
                  <td>12 950<br/>руб.</td>
                  <td>22,5 - 27 м<sup>2</sup></td>
                  <td>2 слоя</td>
                </tr>
                <tr>
                  <td>5 л</td>
                  <td>23 680<br/>руб.</td>
                  <td>45 - 55 м<sup>2</sup></td>
                  <td>2 слоя</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="valsetin fixed-container" id="valsetin">
          <div className="valsetin-img-container fixed-container">
            <img src={layout4} alt=""/>
            <div className="valsetin-first-image">
              <img src={valsetinLogo} alt=""/>
            </div>
            <div className="valsetin-second-image">
              <img src={valsetin1} alt=""/>
            </div>
            <div className="valsetin-third-image">
              <img src={valsetin2} alt=""/>
            </div>
            <div className="valsetin-fourth-image">
              <img src={valsetin3} alt=""/>
            </div>
            <div className="valsetin-fifth-image">
              <img src={valsetin4} alt=""/>
            </div>
            <div className="valsetin-table">
              <table>
                <tr>
                  <td rowSpan="3" className="inline2">VALSETIN 2<br/>Col.<br/>AGENTO 700<br/>(краска<br/>декоративная)</td>
                  <td>1 л</td>
                  <td>6 150<br/>руб.</td>
                  <td>7 - 9 м<sup>2</sup></td>
                  <td>1 слой</td>
                </tr>
                <tr>
                  <td>2,5 л</td>
                  <td>14 750<br/>руб.</td>
                  <td>17,5 - 22,5 м<sup>2</sup></td>
                  <td>1 слой</td>
                </tr>
                <tr>
                  <td>4 л</td>
                  <td>22 800<br/>руб.</td>
                  <td>28 - 36 м<sup>2</sup></td>
                  <td>1 слой</td>
                </tr>
                <tr>
                  <td className="inline2">VALSETIN 2<br/>Col. ORO 709<br/>(краска<br/>декоративная)</td>
                  <td>4 л</td>
                  <td>27 860<br/>руб.</td>
                  <td>45 - 55 м<sup>2</sup></td>
                  <td>1 слой</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="services  fixed-container" id="services">
          <div className="services-top">
            <div className="services-top-text">
              Услуги
            </div>
            <div className="image-oval-2"/>
            <div className="image-oval-1"/>
            <div className="logo-oval"/>
          </div>
          <div className="services-bottom">
            <div className="services-bottom-text">Наша команда DECOR IMPRESS предлагает Вам услуги наших мастеров.
              Мы успешно выполним такие задачи, как малярная работа, монтаж гипсокартона, установка напольного
              и потолочного плинтусов. Также мы предлагаем Вам услуги наших художников, которые украсят ваш
              интерьер картинами, основываясь на ваших индивидуальных предпочтениях!
            </div>
          </div>
        </div>
        <div className="examples fixed-container" id="examples">
          <div className="examples-container  fixed-container">
            <div className="examples-top-text">Наши работы</div>
            <div className="examples-image examples-image-1"/>
            <div className="examples-image examples-image-2"/>
            <div className="examples-image examples-image-3"/>
            <div className="examples-image examples-image-4"/>
            <div className="examples-image examples-image-5"/>
            <div className="examples-image examples-image-6"/>
            <div className="examples-image examples-image-7"/>
            <div className="examples-image examples-image-8"/>
            <div className="examples-image examples-image-9"/>
            <div className="examples-image examples-image-10"/>
          </div>
        </div>
        <div className="examples-2 fixed-container">
          <div className="examples-2-container fixed-container">
            <div className="examples-2-image examples-2-image-1"/>
            <div className="examples-2-image examples-2-image-2"/>
            <div className="examples-2-image examples-2-image-3"/>
            <div className="examples-2-image examples-2-image-4"/>
            <div className="examples-2-image-small examples-2-image-5"/>
            <div className="examples-2-image-small examples-2-image-6"/>
            <div className="examples-2-image-small examples-2-image-7"/>
          </div>
        </div>
        <div className="contacts fixed-container" id="contacts">
          <div className="contacts-img-container  fixed-container">
            <div className="contacts-side-container">
              <div className="contacts-text-container">
                <p>
                  <b>Электронная почта:</b><br/>
                  orders@decor-impress.ru<br/><br/>
                  <b>Телефон:</b><br/>
                  +7 (915) 348-20-30<br/>
                  +7 (936) 617-50-55
                </p>
              </div>
              <div className="contacts-top-text">
                Наши контакты:
              </div>
              <img className="contacts-logo" src={logo} alt=""/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
