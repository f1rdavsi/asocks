import type { Tariff, Statistics, ProxyLocation } from '@shared/types'
import AttitudeImg from '@shared/assets/icons/attitude.svg'
import Solutions from '@shared/assets/icons/solutions.svg'
import Constanly from '@shared/assets/icons/proxy-pool.svg'
import Success from '@shared/assets/icons/success.svg'
import Support from '@shared/assets/icons/support.svg'
import Clear from '@shared/assets/icons/clear.svg'
import Ads from '@shared/assets/icons/Ads.svg'
import Price from '@shared/assets/icons/price.svg'
import Marketing from '@shared/assets/icons/marketing.svg'
import Prohibited from '@shared/assets/icons/prohibited.svg'
import Load from '@shared/assets/icons/loading-testing.svg'
import Social from '@shared/assets/icons/social.svg'
import ECommerce from '@shared/assets/icons/ecommerce.svg'
import Finance from '@shared/assets/icons/finance.svg'
import Dolphin from '@shared/assets/partners/dolanty.png'
import Cpaduck from '@shared/assets/partners/cpaduck.png'
import Vmlogin from '@shared/assets/partners/vmlogin.png'
import Fbl from '@shared/assets/partners/fbl.png'
import Undetectable from '@shared/assets/partners/undetechable.png'
import Octo from '@shared/assets/partners/octo.png'
import Sms from '@shared/assets/partners/activate.png'
import Teleexpert from '@shared/assets/partners/expert.png'
import Gologin from '@shared/assets/partners/gologin.png'
import Dark from '@shared/assets/partners/darkstore.jpeg'
import Teleprime from '@shared/assets/partners/prime.png'
import Adspower from '@shared/assets/partners/adspower.png'
import Incogniton from '@shared/assets/partners/incogniton.png'
import Indigo from '@shared/assets/partners/indigo.png'
import Captcha from '@shared/assets/partners/captcha.jpeg'
import AntBrowser from '@shared/assets/partners/ant.png'
import Identory from '@shared/assets/partners/identory.png'
import Capsolver from '@shared/assets/partners/capsolver.jpeg'
import DolphinCloud from '@shared/assets/partners/dolphincloau.png'
import Linken from '@shared/assets/partners/linken.png'
import Bit from '@shared/assets/partners/bitbrowser.png'
import Scan from '@shared/assets/partners/scan.jpeg'
import Proxybro from '@shared/assets/partners/proxybros.svg'
import Buster from '@shared/assets/partners/buster.png'
import Morelogin from '@shared/assets/partners/morelogin.jpeg'
import Nst from '@shared/assets/partners/nstbrowser.jpeg'
import Onedash from '@shared/assets/partners/onedash.png'
import Hidemy from '@shared/assets/partners/hidemy.jpeg'
import Lauth from '@shared/assets/partners/lauth.png'
import Zaley from '@shared/assets/partners/zaley.jpeg'
import Sseller from '@shared/assets/partners/sseller.png'
import Antik from '@shared/assets/partners/antik.png'
import Mylogin from '@shared/assets/partners/mulogin.png'

export const mockStatistics: Statistics = {
  connectionSuccess: '99.7%',
  locations: '150+',
  ipAddresses: '7M+',
  satisfiedCustomers: '100 000+',
}

export const mockTariffs: Tariff[] = [
  {
    id: '1',
    name: 'Starter',
    proxyCount: 100,
    price: 95.0,
    pricePerProxy: 0.95,
    connections: 500,
    features: ['High-speed connections', '24/7 support', 'Multiple locations'],
  },
  {
    id: '2',
    name: 'Professional',
    proxyCount: 250,
    price: 225.0,
    pricePerProxy: 0.9,
    connections: 500,
    isPopular: true,
    features: ['High-speed connections', '24/7 support', 'Multiple locations', 'Priority support'],
  },
  {
    id: '3',
    name: 'Business',
    proxyCount: 500,
    price: 425.0,
    pricePerProxy: 0.85,
    connections: 500,
    features: ['High-speed connections', '24/7 support', 'Multiple locations', 'Priority support', 'Custom solutions'],
  },
  {
    id: '4',
    name: 'Enterprise',
    proxyCount: 1000,
    price: 800.0,
    pricePerProxy: 0.8,
    connections: 500,
    features: [
      'High-speed connections',
      '24/7 support',
      'Multiple locations',
      'Priority support',
      'Custom solutions',
      'Dedicated manager',
    ],
  },
  {
    id: '5',
    name: 'Corporate',
    proxyCount: 5000,
    price: 3750.0,
    pricePerProxy: 0.75,
    connections: 500,
    features: [
      'High-speed connections',
      '24/7 support',
      'Multiple locations',
      'Priority support',
      'Custom solutions',
      'Dedicated manager',
      'Custom integrations',
    ],
  },
  {
    id: '6',
    name: 'Ultimate',
    proxyCount: 10000,
    price: 7200.0,
    pricePerProxy: 0.72,
    connections: 1000,
    isPopular: false,
    features: [
      'High-speed connections',
      '24/7 support',
      'Multiple locations',
      'Priority support',
      'Custom solutions',
      'Dedicated manager',
      'Custom integrations',
      'Enterprise-level security',
      'Unlimited API access',
    ],
  },
]

export const mockLocations: ProxyLocation[] = [
  { id: '1', country: 'United States', countryCode: 'US', city: 'New York', count: 120000 },
  { id: '2', country: 'United Kingdom', countryCode: 'GB', city: 'London', count: 95000 },
  { id: '3', country: 'Germany', countryCode: 'DE', city: 'Berlin', count: 85000 },
  { id: '4', country: 'France', countryCode: 'FR', city: 'Paris', count: 75000 },
  { id: '5', country: 'Japan', countryCode: 'JP', city: 'Tokyo', count: 65000 },
]

export const mockWhyChooseUs = [
  {
    id: '1',
    img: AttitudeImg,
    title: 'Attitude',
    description: 'We work hard to make your experience with our service as comfortable as possible',
  },
  {
    id: '2',
    img: Success,
    title: 'High success rate of connections',
    description: '99.7% successful connections and high response rate guaranteed',
  },
  {
    id: '3',
    img: Solutions,
    title: 'Custom solutions',
    description:
      'We develop solutions that work for the success of your business. New features are released every week',
  },
  {
    id: '4',
    img: Support,
    title: '24/7 support',
    description:
      'Technical support specialists will conduct you in all stages and will be convinced that everything works correctly. We answer questions 24/7. Your success is our priority',
  },
  {
    id: '5',
    img: Constanly,
    title: 'Constantly growing proxy pool',
    description: 'We work on the expansion of geo and add more IP addresses every day',
  },
  {
    id: '6',
    img: Clear,
    title: 'Clear IPs',
    description: 'We have our own proxy infrastructure with clean addresses that will save you from bans',
  },
]

export const mockApplications = [
  {
    id: '1',
    img: Ads,
    text: 'Ad verification',
  },
  {
    id: '2',
    img: Price,
    text: 'Price comparison',
  },
  {
    id: '3',
    img: Marketing,
    text: 'Marketing research',
  },
  {
    id: '4',
    img: Prohibited,
    text: 'Prohibited content',
  },
  {
    id: '5',
    img: ECommerce,
    text: 'E-Commerce',
  },
  {
    id: '6',
    img: Load,
    text: 'Load testing',
  },
  {
    id: '7',
    img: Social,
    text: 'Social media',
  },
  {
    id: '8',
    img: Finance,
    text: 'Finance',
  },
]
export const partnersMock = [
  {
    id: 1,
    name: 'Dolphin',
    image: Dolphin,
    description:
      'Dolphin — это антидетект-браузер, который помогает управлять множеством аккаунтов одновременно. Он обеспечивает высокий уровень конфиденциальности и защиту от отслеживания. Подходит для маркетологов, арбитражников и специалистов по SMM.',
  },
  {
    id: 2,
    name: 'Cpaduck',
    image: Cpaduck,
    description:
      'Cpaduck — независимый медиахаб для арбитражников и аффилиатов. Здесь можно найти честные обзоры партнерских программ, рекламных платформ и инструментов. Также доступны гайды, рейтинги и инсайдерские интервью из мира performance marketing.',
  },
  {
    id: 3,
    name: 'Vmlogin',
    image: Vmlogin,
    description:
      'Vmlogin позволяет создавать виртуальные профили для браузеров и безопасно управлять несколькими аккаунтами. Идеально подходит для тестирования рекламных кампаний и работы с социальными сетями без риска блокировок. Обеспечивает конфиденциальность и защиту цифровой идентичности.',
  },
  {
    id: 4,
    name: 'FBL',
    image: Fbl,
    description:
      'FBL — инструмент для управления многочисленными аккаунтами в соцсетях и на онлайн-платформах. Он помогает избежать блокировок и отслеживания. Подходит как для маркетологов, так и для арбитражников.',
  },
  {
    id: 5,
    name: 'Undetectable',
    image: Undetectable,
    description:
      'Undetectable обеспечивает полную защиту цифровой идентичности при работе с несколькими аккаунтами. Сервис помогает обходить ограничения и оставаться анонимным в сети. Идеален для арбитража, SMM и тестирования приложений.',
  },
  {
    id: 6,
    name: 'Octo',
    image: Octo,
    description:
      'Octo — это антидетект-браузер с поддержкой многопрофильности и защиты от идентификации. Он позволяет безопасно вести несколько аккаунтов одновременно. Подходит для маркетинга, арбитража и интернет-продвижения.',
  },
  {
    id: 7,
    name: 'Sms',
    image: Sms,
    description:
      'Sms сервис предоставляет временные номера для регистрации на сайтах и приложениях. Это удобное решение для тестирования и обхода верификаций. Поддерживает множество стран и операторов.',
  },
  {
    id: 8,
    name: 'Teleexpert',
    image: Teleexpert,
    description:
      'Teleexpert предлагает аналитику и оптимизацию телекоммуникационных систем. Сервис помогает управлять контактами, сообщениями и звонками. Отлично подходит для бизнеса и call-центров.',
  },
  {
    id: 9,
    name: 'Gologin',
    image: Gologin,
    description:
      'Gologin — антидетект-браузер для безопасного управления множеством аккаунтов. Он обеспечивает конфиденциальность и уникальные профили. Подходит для маркетологов, арбитражников и SMM-специалистов.',
  },
  {
    id: 10,
    name: 'Darkstore',
    image: Dark,
    description:
      'Darkstore — платформа для управления онлайн-магазинами через социальные сети и мессенджеры. Она помогает автоматизировать продажи и мониторинг заказов. Подходит для малого и среднего бизнеса.',
  },
  {
    id: 11,
    name: 'Teleprime',
    image: Teleprime,
    description:
      'Teleprime — сервис для виртуальных номеров, позволяющий безопасно регистрироваться на любых платформах. Подходит для тестирования приложений, маркетинговых кампаний и обхода верификаций. Поддерживает множество стран.',
  },
  {
    id: 12,
    name: 'Adspower',
    image: Adspower,
    description:
      'Adspower — антидетект-браузер для управления рекламными аккаунтами. Он помогает вести несколько аккаунтов одновременно и избегать блокировок. Идеален для арбитражников и маркетологов.',
  },
  {
    id: 13,
    name: 'Incogniton',
    image: Incogniton,
    description:
      'Incogniton позволяет создавать уникальные профили браузера для безопасной работы с онлайн-аккаунтами. Он защищает цифровую идентичность и предотвращает слияние аккаунтов. Подходит для SMM и арбитража.',
  },
  {
    id: 14,
    name: 'Indigo',
    image: Indigo,
    description:
      'Indigo — набор инструментов для анализа и оптимизации маркетинговых кампаний. Позволяет отслеживать эффективность рекламы и управлять аккаунтами. Подходит для специалистов по digital marketing.',
  },
  {
    id: 15,
    name: 'Captcha',
    image: Captcha,
    description:
      'Captcha — сервис для защиты сайтов от автоматических ботов. Он помогает проверять пользователей и предотвращать мошеннические действия. Подходит для e-commerce и онлайн-сервисов.',
  },
  {
    id: 16,
    name: 'AntBrowser',
    image: AntBrowser,
    description:
      'AntBrowser — антидетект-браузер для анонимного серфинга и управления множеством аккаунтов. Он обеспечивает безопасность и конфиденциальность. Подходит для тестирования и арбитража.',
  },
  {
    id: 17,
    name: 'Identory',
    image: Identory,
    description:
      'Identory — инструмент управления цифровыми идентичностями. Он защищает аккаунты от слияния и отслеживания. Идеален для маркетологов и специалистов по SMM.',
  },
  {
    id: 18,
    name: 'Capsolver',
    image: Capsolver,
    description:
      'Capsolver — сервис для автоматического решения CAPTCHA и прохождения верификаций. Ускоряет работу с регистрациями и онлайн-платформами. Поддерживает популярные формы защиты.',
  },
  {
    id: 19,
    name: 'DolphinCloud',
    image: DolphinCloud,
    description:
      'DolphinCloud — облачная платформа для работы с антидетект-браузерами и анализа данных. Она позволяет управлять аккаунтами безопасно и эффективно. Подходит для маркетологов и арбитражников.',
  },
  {
    id: 20,
    name: 'Linken',
    image: Linken,
    description:
      'Linken — антидетект-браузер с уникальными профилями для работы с несколькими аккаунтами одновременно. Подходит для тестирования и маркетинговых кампаний. Обеспечивает безопасность и конфиденциальность.',
  },
  {
    id: 21,
    name: 'Bit',
    image: Bit,
    description:
      'Bit предоставляет инструменты для мониторинга и оптимизации рекламных кампаний. Он помогает анализировать эффективность и управлять аккаунтами. Подходит для digital marketing и арбитража.',
  },
  {
    id: 22,
    name: 'Scan',
    image: Scan,
    description:
      'Scan — сервис для сканирования и анализа QR-кодов и штрих-кодов. Позволяет быстро получать информацию о продуктах и ссылках. Используется в маркетинге и e-commerce.',
  },
  {
    id: 23,
    name: 'Proxybro',
    image: Proxybro,
    description:
      'Proxybro — сервис управления прокси-серверами для безопасного и анонимного серфинга. Поддерживает множество локаций и IP-адресов. Идеален для тестирования и маркетинговых кампаний.',
  },
  {
    id: 24,
    name: 'Buster',
    image: Buster,
    description:
      'Buster — инструмент для автоматического решения CAPTCHA. Ускоряет процесс регистрации и прохождения проверок. Подходит для онлайн-маркетинга и арбитража.',
  },
  {
    id: 25,
    name: 'Morelogin',
    image: Morelogin,
    description:
      'Morelogin — антидетект-браузер для управления несколькими аккаунтами одновременно. Обеспечивает уникальные профили и безопасность данных. Идеален для маркетологов и арбитражников.',
  },
  {
    id: 26,
    name: 'Nst',
    image: Nst,
    description:
      'Nst помогает создавать и управлять уникальными цифровыми профилями с защитой от отслеживания. Подходит для работы с соцсетями и маркетинговыми платформами. Обеспечивает безопасность и анонимность.',
  },
  {
    id: 27,
    name: 'Onedash',
    image: Onedash,
    description:
      'Onedash — платформа для анализа и мониторинга данных с онлайн-аккаунтов. Помогает управлять аккаунтами и повышать эффективность кампаний. Идеальна для маркетологов и арбитражников.',
  },
  {
    id: 28,
    name: 'Hidemy',
    image: Hidemy,
    description:
      'Hidemy — сервис для скрытия IP-адреса и обеспечения полной анонимности в интернете. Подходит для безопасного серфинга и работы с несколькими аккаунтами. Используется маркетологами и арбитражниками.',
  },
  {
    id: 29,
    name: 'Lauth',
    image: Lauth,
    description:
      'Lauth — инструмент для безопасной аутентификации и управления учетными данными. Поддерживает несколько аккаунтов и защищает от взлома. Используется в маркетинге и бизнес-приложениях.',
  },
  {
    id: 30,
    name: 'Zaley',
    image: Zaley,
    description:
      'Zaley — платформа для управления аккаунтами и защиты от блокировок. Помогает безопасно вести несколько аккаунтов одновременно. Подходит для маркетологов и арбитражников.',
  },
  {
    id: 31,
    name: 'Sseller',
    image: Sseller,
    description:
      'Sseller — сервис для управления и оптимизации онлайн-продаж. Помогает отслеживать заказы и управлять клиентами. Идеален для e-commerce и маркетинговых агентств.',
  },
  {
    id: 32,
    name: 'Antik',
    image: Antik,
    description:
      'Antik — антидетект-браузер для безопасного управления множеством аккаунтов. Обеспечивает уникальные профили и защиту от блокировок. Подходит для маркетологов и арбитражников.',
  },
  {
    id: 33,
    name: 'Mylogin',
    image: Mylogin,
    description:
      'Mylogin — инструмент для управления онлайн-аккаунтами с защитой от отслеживания. Позволяет безопасно вести несколько профилей одновременно. Идеален для маркетологов и арбитражников.',
  },
]
export interface MockUser {
  email: string
  password: string
  name: string
}

export const mockUsers: MockUser[] = [
  { email: 'farrukh@example.com', password: '123456', name: 'Farrukh ' },
  { email: 'alijon@example.com', password: 'abcdef', name: 'Alijon Rustamov' },
]
