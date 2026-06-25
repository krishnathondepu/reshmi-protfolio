import "./globals.css";

export const metadata = {
  title: "Reshmi Maity | Data Scientist & AI Engineer",
  description: "Premium portfolio of Reshmi Maity - 3+ years of experience in Machine Learning, Data Science, and AI solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
