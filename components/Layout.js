import Link from 'next/link';
import Layout from '../components/Layout';
export default ({ children }) => (
  <div className="root">
    <header>
      <Link href="/">
        <a style={{ display: 'block' }}>Go to home</a>
      </Link>
      <Link href="./about">
        <a style={{ display: 'block' }}>Go to About</a>
      </Link>
      <Link href="./hireme">
        <a style={{ display: 'block' }}>Hire me</a>
      </Link>
    </header>
    {children}
    <footer>
      <div>&copy; {new Date().getFullYear()}</div>
      <div>
        <Link href="/">
          <a style={{ display: 'block' }}>Go to home</a>
        </Link>
        <Link href="./about">
          <a style={{ display: 'block' }}>Go to About</a>
        </Link>
        <Link href="./hireme">
          <a style={{ display: 'block' }}>Hire me</a>
        </Link>
      </div>
    </footer>
    <style jsx>
      {`
        // it can work but I dont see a purpose because shortcuts doesnt work here
      `}
    </style>
  </div>
);
