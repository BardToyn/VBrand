import { Link } from 'react-router-dom';

import caseOne from "../../img/content/case-one.webp";
import caseTwo from "../../img/content/rostneft.webp";
import caseThree from "../../img/content/whitebeer.webp";
import caseFour from "../../img/content/fox.webp";
import caseFive from "../../img/content/rasktyt.webp";

import "./case.css"

const Case = () => {
    return ( 
        <section className='home-case container'>
            <div className="home-case__list">
                <Link className='home-case__item cursor-active' to="/">
                    <div className='home-case__img-wrap'>
                        <img className='home-case__img' src={caseOne} alt='caseImg' />
                    </div>
                    <h5 className='home-case__title'>Фудмолл мануфактура</h5>
                    <p className='home-case__subtitle'>Сайт для самого крупного фудмола в Ростове-на-Дону</p>
                </Link>
                <Link className='home-case__item cursor-active' to="/">
                    <div className='home-case__img-wrap'>
                        <img className='home-case__img' src={caseTwo} alt='caseImg' />
                    </div>
                    <h5 className='home-case__title'>Ростнефть</h5>
                    <p className='home-case__subtitle'>Как наш визуал поднял продажи на 1488%</p>
                </Link>
                <Link className='home-case__item cursor-active' to="/">
                    <div className='home-case__img-wrap'>
                        <img className='home-case__img' src={caseThree} alt='caseImg' />
                    </div>
                    <h5 className='home-case__title'>Белый медведь</h5>
                    <p className='home-case__subtitle'>Молочный завод белый медведь</p>
                </Link>
                <Link className='home-case__item cursor-white' to="/">
                    <div className='home-case__img-wrap'>
                        <img className='home-case__img' src={caseFour} alt='caseImg' />
                    </div>
                    <h5 className='home-case__title'>Fox</h5>
                    <p className='home-case__subtitle'>Кальяны и чашы</p>
                </Link>
                <Link className='home-case__item cursor-white' to="/">
                    <div className='home-case__img-wrap'>
                        <img className='home-case__img' src={caseFive} alt='caseImg' />
                    </div>
                    <h5 className='home-case__title'>Есть раки</h5>
                    <p className='home-case__subtitle'>Раковарня</p>
                </Link>
            </div>
        </section>
    );
}
 
export default Case;
