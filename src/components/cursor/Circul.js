import React, { useEffect } from 'react';
import "./Cursor.css";

const Cursor = () => {

  useEffect(() => {
    const follower = document.getElementById('follower');
    const cursorActiveElements = document.querySelectorAll('.cursor-active');
    const cursorWhiteElements = document.querySelectorAll('.cursor-white');

    const handleMouseMove = (e) => {
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  
      follower.style.transition = 'transform 0.2s ease-out, background-color 0.2s ease-out';
      follower.style.transform = `translate(${e.clientX - 15 + scrollX}px, ${e.clientY - 15 + scrollY}px)`;
    };

    const handleMouseOver = () => {
      follower.style.width = '62px'; // увеличиваем ширину
      follower.style.height = '62px'; // увеличиваем высоту
      follower.style.backgroundColor = '#00000050'; // меняем цвет фона
    
      // Меняем цвет всех rect внутри circul-arrow для каждого элемента
      document.querySelectorAll('.circul-arrow').forEach(circulArrow => {
        circulArrow.querySelectorAll('rect').forEach(rect => {
          rect.style.fill = 'white';
        });
      });
    };
    
    const handleMouseOut = () => {
      follower.style.width = '18px'; // возвращаем начальную ширину
      follower.style.height = '18px'; // возвращаем начальную высоту
      follower.style.backgroundColor = 'var(--clr-black)'; // возвращаем начальный цвет фона
    
      // Возвращаем начальный цвет всех rect внутри circul-arrow для каждого элемента
      document.querySelectorAll('.circul-arrow').forEach(circulArrow => {
        circulArrow.querySelectorAll('rect').forEach(rect => {
          rect.style.fill = '#000';
        });
      });
    };

    const handleMouseOverWhite = () => {
      follower.style.width = '62px'; // увеличиваем ширину
      follower.style.height = '62px'; // увеличиваем высоту
      follower.style.backgroundColor = 'white'; // меняем цвет фона
    
      // Меняем цвет всех rect внутри circul-arrow для каждого элемента
      document.querySelectorAll('.circul-arrow').forEach(circulArrow => {
        circulArrow.querySelectorAll('rect').forEach(rect => {
          rect.style.fill = 'black';
        });
      });
    };
    
    const handleMouseOutWhite = () => {
      follower.style.width = '18px'; // возвращаем начальную ширину
      follower.style.height = '18px'; // возвращаем начальную высоту
      follower.style.backgroundColor = 'var(--clr-black)'; // возвращаем начальный цвет фона
    
      // Возвращаем начальный цвет всех rect внутри circul-arrow для каждого элемента
      document.querySelectorAll('.circul-arrow').forEach(circulArrow => {
        circulArrow.querySelectorAll('rect').forEach(rect => {
          rect.style.fill = '#000';
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Добавляем обработчики событий для каждого элемента с классом cursor-active
    cursorActiveElements.forEach(cursorActive => {
      cursorActive.addEventListener('mouseover', handleMouseOver);
      cursorActive.addEventListener('mouseout', handleMouseOut);
    });

    // Добавляем обработчики событий для каждого элемента с классом cursor-white
    cursorWhiteElements.forEach(cursorWhite => {
      cursorWhite.addEventListener('mouseover', handleMouseOverWhite);
      cursorWhite.addEventListener('mouseout', handleMouseOutWhite);
    });
  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Удаляем обработчики событий для каждого элемента с классом cursor-active
      cursorActiveElements.forEach(cursorActive => {
        cursorActive.removeEventListener('mouseover', handleMouseOver);
        cursorActive.removeEventListener('mouseout', handleMouseOut);
      });

      // Удаляем обработчики событий для каждого элемента с классом cursor-white
      cursorWhiteElements.forEach(cursorWhite => {
        cursorWhite.removeEventListener('mouseover', handleMouseOverWhite);
        cursorWhite.removeEventListener('mouseout', handleMouseOutWhite);
      });
    };
  }, []);

  return (
    <div className="circle" id="follower">
      <svg className="circul-arrow" width="12" height="12" viewBox="0 0 23 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.32242" width="18.6776" height="2" fill="#000" />
        <rect x="23" width="18.6776" height="2" transform="rotate(90 23 0)" fill="#000" />
        <rect x="22.3165" y="2.36659" width="29.6277" height="1.93265" transform="rotate(135 22.3165 2.36659)" fill="#000" />
      </svg>
    </div>
  );
}

export default Cursor;
