import Header from 'Components/Header/Header';
import React, {useState, useEffect, ReactNode} from 'react'
import Style from './Theme.module.scss'
import Footer from 'Components/Footer/Footer';

export default function Theme({children}: {children: ReactNode}) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    console.log(newTheme)
  }

  return (
    <>
      <div className={Style[theme]}>
        <Header changeTheme={changeTheme} theme={theme} />
        {children}
      </div>
      <Footer />
    </>
  )
}
