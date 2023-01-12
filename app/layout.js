/* eslint-disable @next/next/no-head-element */
//Styles
import styles from "/app/styles/min/Root.module.css"

//Fonts
import { Poppins } from "@next/font/google"
const poppins = Poppins({ weight: "400" })

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className}>
      <head></head>
      <body className={styles.root}>{children}</body>
    </html>
  );
}
