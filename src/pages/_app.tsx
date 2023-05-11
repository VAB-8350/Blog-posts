import { useState, useEffect} from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from 'Components/Header/Header';

export default function App({ Component, pageProps }: AppProps) {

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
  }

  return (
    <div data-theme={theme}>
      <Header changeTheme={changeTheme} theme={theme} />
      <Component {...pageProps} />
    </div>
  )
}
