import App from './ReshmiPortfolio';
import './globals.css';

export const metadata = {
  title: 'Reshmi Maity | Data Scientist & AI Engineer',
  description: 'Premium portfolio of Reshmi Maity - 3+ years of experience in Machine Learning, Data Science, and AI solutions.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Page() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Reshmi Maity | Data Scientist & AI Engineer" />
        <meta property="og:description" content="Premium portfolio showcasing 3+ years of ML/AI expertise" />
      </head>
      <body>
        <App />
      </body>
    </html>
  );
}
