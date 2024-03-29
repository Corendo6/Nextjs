import Link from 'next/link'
import './globals.css'
import { Control } from './Control';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const resp = await fetch('http://localhost:9999/topics', {
    cache: 'no-store'
  });
  const topics = await resp.json();
  return (
    <html lang="en">
      <body>
        <div>
          <input type='text' placeholder='search'></input>
          <h1><Link href='/'>WEB</Link></h1>
          <ol>
            {topics.map((t) => {
              return <li key={t.id}><Link href={`/read/${t.id}`}>{t.title}</Link></li>
            })}
          </ol>
          {children}
          <Control />
        </div>
      </body>
    </html>
  )
}

