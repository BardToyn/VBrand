import React, { useState, useEffect } from 'react';
import loading from "../../img/icons/loading.svg";
import "./Loading.css";

const Loading = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const loadingWrap = document.getElementById('loading-wrap');

    const animationEndHandler = () => {
      // Убираем обработчик события и скрываем loading-wrap
      loadingWrap.removeEventListener('animationend', animationEndHandler);
      setShowLoading(false);
    };

    // Добавляем обработчик события для animationend
    loadingWrap.addEventListener('animationend', animationEndHandler);

    // После монтирования компонента добавляем класс для запуска анимации
    loadingWrap.classList.add('hide');

    // Очищаем обработчик события при размонтировании компонента
    return () => {
      loadingWrap.removeEventListener('animationend', animationEndHandler);
    };
  }, []);

  return (
    <div id="loading-wrap" className={`loading-wrap ${showLoading ? '' : 'hidden'}`}>
      <div className="spinner">
        <img className="spinner-img" alt="loading" src={loading} />
      </div>
    </div>
  );
}

export default Loading;

