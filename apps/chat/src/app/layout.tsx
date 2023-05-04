/* eslint-disable @next/next/no-page-custom-font */
import "@/styles/globals.scss";
import "@/styles/markdown.scss";
import "@/styles/prism.scss";
import { Analytics } from "@vercel/analytics/react";
import { AuthProvider } from "@/app/provider";

export const metadata = {
  title: "ChatGPT",
  description: "Your personal ChatGPT Bot.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, userRef-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="manifest" href="/public/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
          <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                  __html: `
              (function() {
                window.sib = {
                  equeue: [],
                  client_key: "jrh4yiitxzni705lzvk1z2yq"
                };
                /* OPTIONAL: email for identify request*/
                // window.sib.email_id = 'example@domain.com';
                window.sendinblue = {};
                for (var j = ['track', 'identify', 'trackLink', 'page'], i = 0; i < j.length; i++) {
                  (function(k) {
                    window.sendinblue[k] = function() {
                      var arg = Array.prototype.slice.call(arguments);
                      (window.sib[k] || function() {
                        var t = {};
                        t[k] = arg;
                        window.sib.equeue.push(t);
                      })(arg[0], arg[1], arg[2], arg[3]);
                    };
                  })(j[i]);
                }
                var n = document.createElement("script"),
                  i = document.getElementsByTagName("script")[0];
                n.type = "text/javascript", n.id = "sendinblue-js", n.async = !0, n.src = "https://sibautomation.com/sa.js?key=" + window.sib.client_key, i.parentNode.insertBefore(n, i), window.sendinblue.page();
              })();
            `
              }}
          />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
