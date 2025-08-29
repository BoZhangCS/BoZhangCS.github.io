// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-one-collaboration-paper-accepted-by-ieee-infocom-ccf-a-collaboration-paper-senfeed-dynamic-decentralized-oracle-services-for-accurate-and-real-time-sensor-data-is-accepted-by-ieee-infocom-2025-congratulations-to-hao-zeng",
          title: 'One Collaboration Paper Accepted by IEEE INFOCOM (CCF-A)! Collaboration Paper “SenFEED: Dynamic Decentralized...',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-by-usenix-security-ccf-a-paper-v-oram-a-versatile-and-adaptive-oram-framework-with-service-transformation-for-dynamic-workloads-is-accepted-by-usenix-security-2025-it-s-our-first-paper-in-big-4-congratulations",
          title: 'One Paper Accepted by USENIX Security (CCF-A)! Paper “V-ORAM: A Versatile and Adaptive...',
          description: "",
          section: "News",},{id: "news-one-collaboration-paper-accepted-by-ieee-tdsc-ccf-a-collaboration-paper-decentralized-and-fair-trading-via-blockchain-the-journey-so-far-and-the-road-ahead-is-accepted-by-ieee-tdsc-2025-congratulations-to-hao-zeng",
          title: 'One Collaboration Paper Accepted by IEEE TDSC (CCF-A)! Collaboration Paper “Decentralized and Fair...',
          description: "",
          section: "News",},{id: "news-one-collaboration-paper-accepted-by-ieee-tdsc-ccf-a-collaboration-paper-dcrowd-decentralized-mobile-crowdsensing-via-proof-of-task-assignment-blockchain-is-accepted-by-ieee-tdsc-2025-congratulations-to-hao-zeng",
          title: 'One Collaboration Paper Accepted by IEEE TDSC (CCF-A)! Collaboration Paper “DCrowd: Decentralized Mobile...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
