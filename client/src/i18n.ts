import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        dualToken: "Dual Token",
        roadmap: "Roadmap",
        calculator: "Calculator",
        allocation: "Allocation",
        whitepaper: "Whitepaper",
        launchApp: "Launch App"
      },
      hero: {
        title: "The Economic Engine of Web3 Social",
        subtitle: "A dual-token model designed for sustainable growth, community governance, and real value capture.",
        explore: "Explore XME",
        readWhitepaper: "Read Whitepaper"
      },
      roadmap: {
        title: "Roadmap",
        subtitle: "Our journey to build the future of Web3 social economy",
        phase1: {
          title: "Before April: Foundation",
          desc: "Platform development including Pan-Psychology and Mini-games Web2 sub-features."
        },
        phase2: {
          title: "July: Growth",
          desc: "XMEX listing on DEX."
        },
        phase3: {
          title: "December: Expansion",
          desc: "XME Alpha launch and Binance Futures listing."
        }
      }
    }
  },
  zh: {
    translation: {
      nav: {
        dualToken: "双代币",
        roadmap: "路线图",
        calculator: "计算器",
        allocation: "代币分配",
        whitepaper: "白皮书",
        launchApp: "启动应用"
      },
      hero: {
        title: "Web3 社交的经济引擎",
        subtitle: "专为可持续增长、社区治理和真实价值捕获而设计的双代币模型。",
        explore: "探索 XME",
        readWhitepaper: "阅读白皮书"
      },
      roadmap: {
        title: "路线图",
        subtitle: "构建 Web3 社交经济未来的旅程",
        phase1: {
          title: "4月前：奠基",
          desc: "平台开发，包括泛心理、小游戏等 Web2 子功能上线。"
        },
        phase2: {
          title: "7月：增长",
          desc: "XMEX 在 DEX 上线。"
        },
        phase3: {
          title: "12月：扩张",
          desc: "XME 上线 Alpha 版本及币安合约。"
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
