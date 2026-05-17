import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Outage Predictor — Early Warning for AWS, GCP & Azure",
  description: "Aggregates signals to predict cloud service outages before they're officially announced. Real-time alerts for DevOps teams and SaaS companies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6ae73511-8850-4ccf-a317-01d390aa0d7d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
