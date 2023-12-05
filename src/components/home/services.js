import "./services.css";

import arrow from "../../img/icons/arrow-services.svg";

const Services = () => {
    return ( 
        <section className='home-services'>
            <div className="home-services__wrap">
                <div className="home-services__wrap-title">
                    <h2 className="home-services__title">
                        Решение нерешаемых задач.
                        — Поможем отстроиться от конкурентов и начать доминировать на вашем рынке.
                    </h2>
                </div>
                <div className="home-services__list">
                    <div className="home-services__item home-services__item-one cursor-white">
                        <div className="home-services__item-wrap-top">
                            <img className="home-services__item-arrow" src={arrow} alt="arrow" />
                            <h3 className="home-services__item-title">
                                Создадим спрос
                            </h3>
                        </div>
                        <div className="home-services__item-wrap">
                            <h4 className="home-services__item-subtitle">
                                UX-UI Разработка
                            </h4>
                            <p className="home-services__item-text">
                                Разработаем запоминающееся название, остроумный цепляющий слоган и оригинальный фирменный стиль.
                            </p>
                        </div>
                    </div>
                    <div className="home-services__item home-services__item-two cursor-white">
                        <div className="home-services__item-wrap-top">
                            <img className="home-services__item-arrow" src={arrow} alt="arrow" />
                            <h3 className="home-services__item-title">
                                Создадим спрос
                            </h3>
                        </div>
                        <div className="home-services__item-wrap">
                            <h4 className="home-services__item-subtitle">
                                UX-UI Разработка
                            </h4>
                            <p className="home-services__item-text">
                                Разработаем запоминающееся название, остроумный цепляющий слоган и оригинальный фирменный стиль.
                            </p>
                        </div>
                    </div>
                    <div className="home-services__item home-services__item-three cursor-white">
                        <div className="home-services__item-wrap-top">
                            <img className="home-services__item-arrow" src={arrow} alt="arrow" />
                            <h3 className="home-services__item-title">
                                Создадим спрос
                            </h3>
                        </div>
                        <div className="home-services__item-wrap">
                            <h4 className="home-services__item-subtitle">
                                UX-UI Разработка
                            </h4>
                            <p className="home-services__item-text">
                                Разработаем запоминающееся название, остроумный цепляющий слоган и оригинальный фирменный стиль.
                            </p>
                        </div>
                    </div>
                    <div className="home-services__item home-services__item-four cursor-white">
                        <div className="home-services__item-wrap-top">
                            <img className="home-services__item-arrow" src={arrow} alt="arrow" />
                            <h3 className="home-services__item-title">
                                Создадим спрос
                            </h3>
                        </div>
                        <div className="home-services__item-wrap">
                            <h4 className="home-services__item-subtitle">
                                UX-UI Разработка
                            </h4>
                            <p className="home-services__item-text">
                                Разработаем запоминающееся название, остроумный цепляющий слоган и оригинальный фирменный стиль.
                            </p>
                        </div>
                    </div>
                    <div className="home-services__item home-services__item-five cursor-white">
                        <div className="home-services__item-wrap-top">
                            <img className="home-services__item-arrow" src={arrow} alt="arrow" />
                            <h3 className="home-services__item-title">
                                Создадим спрос
                            </h3>
                        </div>
                        <div className="home-services__item-wrap">
                            <h4 className="home-services__item-subtitle">
                                UX-UI Разработка
                            </h4>
                            <p className="home-services__item-text">
                                Разработаем запоминающееся название, остроумный цепляющий слоган и оригинальный фирменный стиль.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Services;