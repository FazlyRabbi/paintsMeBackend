export default {
  config: {
    locales: ["en"],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to PRINT&GRAPH!",
        "Auth.form.welcome.subtitle": "Log in to your Admin account",
        "app.components.LeftMenu.navbrand.title": "Dashboard",
        "app.components.HomePage.welcome.again":
          "WELCOME TO PRINT&GRAPH ADMIN DASHBOARD",
        "app.components.HomePage.welcomeBlock.content.again": `TOGETHER WE PROSPER. THE FUTURE IS NOW
        PRINT&GRAPH
        PRINT&GRAPH LLC
       `,
        "app.components.HomePage.button.blog": ` 󠀠`,
      },
    },
  },

  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },

  bootstrap() {},
};
