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

export const mockWhyChooseUs = [
  {
    id: '1',
    img: AttitudeImg,
    title: 'why.attitude.title',
    description: 'why.attitude.description',
  },
  {
    id: '2',
    img: Success,
    title: 'why.success.title',
    description: 'why.success.description',
  },
  {
    id: '3',
    img: Solutions,
    title: 'why.solutions.title',
    description: 'why.solutions.description',
  },
  {
    id: '4',
    img: Support,
    title: 'why.support.title',
    description: 'why.support.description',
  },
  {
    id: '5',
    img: Constanly,
    title: 'why.constantly.title',
    description: 'why.constantly.description',
  },
  {
    id: '6',
    img: Clear,
    title: 'why.clear.title',
    description: 'why.clear.description',
  },
]
export const mockTariffs: Tariff[] = [
  {
    id: '1',
    name: 'tariff.starter.name',
    proxyCount: 100,
    price: 95.0,
    pricePerProxy: 0.95,
    connections: 500,
    features: ['tariff.starter.feature1', 'tariff.starter.feature2', 'tariff.starter.feature3'],
  },
  {
    id: '2',
    name: 'tariff.professional.name',
    proxyCount: 250,
    price: 225.0,
    pricePerProxy: 0.9,
    connections: 500,
    isPopular: true,
    features: [
      'tariff.professional.feature1',
      'tariff.professional.feature2',
      'tariff.professional.feature3',
      'tariff.professional.feature4',
    ],
  },
  {
    id: '3',
    name: 'tariff.business.name',
    proxyCount: 500,
    price: 425.0,
    pricePerProxy: 0.85,
    connections: 500,
    features: [
      'tariff.business.feature1',
      'tariff.business.feature2',
      'tariff.business.feature3',
      'tariff.business.feature4',
      'tariff.business.feature5',
    ],
  },
  {
    id: '4',
    name: 'tariff.enterprise.name',
    proxyCount: 1000,
    price: 800.0,
    pricePerProxy: 0.8,
    connections: 500,
    features: [
      'tariff.enterprise.feature1',
      'tariff.enterprise.feature2',
      'tariff.enterprise.feature3',
      'tariff.enterprise.feature4',
      'tariff.enterprise.feature5',
      'tariff.enterprise.feature6',
    ],
  },
  {
    id: '5',
    name: 'tariff.corporate.name',
    proxyCount: 5000,
    price: 3750.0,
    pricePerProxy: 0.75,
    connections: 500,
    features: [
      'tariff.corporate.feature1',
      'tariff.corporate.feature2',
      'tariff.corporate.feature3',
      'tariff.corporate.feature4',
      'tariff.corporate.feature5',
      'tariff.corporate.feature6',
      'tariff.corporate.feature7',
    ],
  },
  {
    id: '6',
    name: 'tariff.ultimate.name',
    proxyCount: 10000,
    price: 7200.0,
    pricePerProxy: 0.72,
    connections: 1000,
    isPopular: false,
    features: [
      'tariff.ultimate.feature1',
      'tariff.ultimate.feature2',
      'tariff.ultimate.feature3',
      'tariff.ultimate.feature4',
      'tariff.ultimate.feature5',
      'tariff.ultimate.feature6',
      'tariff.ultimate.feature7',
      'tariff.ultimate.feature8',
      'tariff.ultimate.feature9',
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
export const mockApplications = [
  { id: '1', img: Ads, text: 'applications.adVerification' },
  { id: '2', img: Price, text: 'applications.priceComparison' },
  { id: '3', img: Marketing, text: 'applications.marketingResearch' },
  { id: '4', img: Prohibited, text: 'applications.prohibitedContent' },
  { id: '5', img: ECommerce, text: 'applications.eCommerce' },
  { id: '6', img: Load, text: 'applications.loadTesting' },
  { id: '7', img: Social, text: 'applications.socialMedia' },
  { id: '8', img: Finance, text: 'applications.finance' },
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
export const mockCountries = [
  { name: 'Afghanistan', flag: 'https://flagcdn.com/af.svg', ips: 1000 },
  { name: 'Albania', flag: 'https://flagcdn.com/al.svg', ips: 2000 },
  { name: 'Algeria', flag: 'https://flagcdn.com/dz.svg', ips: 3000 },
  { name: 'Andorra', flag: 'https://flagcdn.com/ad.svg', ips: 4000 },
  { name: 'Angola', flag: 'https://flagcdn.com/ao.svg', ips: 5000 },
  { name: 'Antigua and Barbuda', flag: 'https://flagcdn.com/ag.svg', ips: 6000 },
  { name: 'Argentina', flag: 'https://flagcdn.com/ar.svg', ips: 7000 },
  { name: 'Armenia', flag: 'https://flagcdn.com/am.svg', ips: 8000 },
  { name: 'Australia', flag: 'https://flagcdn.com/au.svg', ips: 9000 },
  { name: 'Austria', flag: 'https://flagcdn.com/at.svg', ips: 10000 },
  { name: 'Azerbaijan', flag: 'https://flagcdn.com/az.svg', ips: 11000 },
  { name: 'Bahamas', flag: 'https://flagcdn.com/bs.svg', ips: 12000 },
  { name: 'Bahrain', flag: 'https://flagcdn.com/bh.svg', ips: 13000 },
  { name: 'Bangladesh', flag: 'https://flagcdn.com/bd.svg', ips: 14000 },
  { name: 'Barbados', flag: 'https://flagcdn.com/bb.svg', ips: 15000 },
  { name: 'Belarus', flag: 'https://flagcdn.com/by.svg', ips: 16000 },
  { name: 'Belgium', flag: 'https://flagcdn.com/be.svg', ips: 17000 },
  { name: 'Belize', flag: 'https://flagcdn.com/bz.svg', ips: 18000 },
  { name: 'Benin', flag: 'https://flagcdn.com/bj.svg', ips: 19000 },
  { name: 'Bhutan', flag: 'https://flagcdn.com/bt.svg', ips: 20000 },
  { name: 'Bolivia', flag: 'https://flagcdn.com/bo.svg', ips: 21000 },
  { name: 'Bosnia and Herzegovina', flag: 'https://flagcdn.com/ba.svg', ips: 22000 },
  { name: 'Botswana', flag: 'https://flagcdn.com/bw.svg', ips: 23000 },
  { name: 'Brazil', flag: 'https://flagcdn.com/br.svg', ips: 24000 },
  { name: 'Brunei Darussalam', flag: 'https://flagcdn.com/bn.svg', ips: 25000 },
  { name: 'Bulgaria', flag: 'https://flagcdn.com/bg.svg', ips: 26000 },
  { name: 'Burkina Faso', flag: 'https://flagcdn.com/bf.svg', ips: 27000 },
  { name: 'Burundi', flag: 'https://flagcdn.com/bi.svg', ips: 28000 },
  { name: 'Cabo Verde', flag: 'https://flagcdn.com/cv.svg', ips: 29000 },
  { name: 'Cambodia', flag: 'https://flagcdn.com/kh.svg', ips: 30000 },
  { name: 'Cameroon', flag: 'https://flagcdn.com/cm.svg', ips: 31000 },
  { name: 'Canada', flag: 'https://flagcdn.com/ca.svg', ips: 32000 },
  { name: 'Central African Republic', flag: 'https://flagcdn.com/cf.svg', ips: 33000 },
  { name: 'Chad', flag: 'https://flagcdn.com/td.svg', ips: 34000 },
  { name: 'Chile', flag: 'https://flagcdn.com/cl.svg', ips: 35000 },
  { name: 'China', flag: 'https://flagcdn.com/cn.svg', ips: 36000 },
  { name: 'Colombia', flag: 'https://flagcdn.com/co.svg', ips: 37000 },
  { name: 'Comoros', flag: 'https://flagcdn.com/km.svg', ips: 38000 },
  { name: 'Congo (Congo-Brazzaville)', flag: 'https://flagcdn.com/cg.svg', ips: 39000 },
  { name: 'Congo (Democratic Republic)', flag: 'https://flagcdn.com/cd.svg', ips: 40000 },
  { name: 'Costa Rica', flag: 'https://flagcdn.com/cr.svg', ips: 41000 },
  { name: 'Croatia', flag: 'https://flagcdn.com/hr.svg', ips: 42000 },
  { name: 'Cuba', flag: 'https://flagcdn.com/cu.svg', ips: 43000 },
  { name: 'Cyprus', flag: 'https://flagcdn.com/cy.svg', ips: 44000 },
  { name: 'Czech Republic (Czechia)', flag: 'https://flagcdn.com/cz.svg', ips: 45000 },
  { name: 'Denmark', flag: 'https://flagcdn.com/dk.svg', ips: 46000 },
  { name: 'Djibouti', flag: 'https://flagcdn.com/dj.svg', ips: 47000 },
  { name: 'Dominica', flag: 'https://flagcdn.com/dm.svg', ips: 48000 },
  { name: 'Dominican Republic', flag: 'https://flagcdn.com/do.svg', ips: 49000 },
  { name: 'Ecuador', flag: 'https://flagcdn.com/ec.svg', ips: 50000 },
  { name: 'Egypt', flag: 'https://flagcdn.com/eg.svg', ips: 51000 },
  { name: 'El Salvador', flag: 'https://flagcdn.com/sv.svg', ips: 52000 },
  { name: 'Equatorial Guinea', flag: 'https://flagcdn.com/gq.svg', ips: 53000 },
  { name: 'Eritrea', flag: 'https://flagcdn.com/er.svg', ips: 54000 },
  { name: 'Estonia', flag: 'https://flagcdn.com/ee.svg', ips: 55000 },
  { name: 'Eswatini', flag: 'https://flagcdn.com/sz.svg', ips: 56000 },
  { name: 'Ethiopia', flag: 'https://flagcdn.com/et.svg', ips: 57000 },
  { name: 'Fiji', flag: 'https://flagcdn.com/fj.svg', ips: 58000 },
  { name: 'Finland', flag: 'https://flagcdn.com/fi.svg', ips: 59000 },
  { name: 'France', flag: 'https://flagcdn.com/fr.svg', ips: 60000 },
  { name: 'Gabon', flag: 'https://flagcdn.com/ga.svg', ips: 61000 },
  { name: 'Gambia', flag: 'https://flagcdn.com/gm.svg', ips: 62000 },
  { name: 'Georgia', flag: 'https://flagcdn.com/ge.svg', ips: 63000 },
  { name: 'Germany', flag: 'https://flagcdn.com/de.svg', ips: 64000 },
  { name: 'Ghana', flag: 'https://flagcdn.com/gh.svg', ips: 65000 },
  { name: 'Greece', flag: 'https://flagcdn.com/gr.svg', ips: 66000 },
  { name: 'Grenada', flag: 'https://flagcdn.com/gd.svg', ips: 67000 },
  { name: 'Guatemala', flag: 'https://flagcdn.com/gt.svg', ips: 68000 },
  { name: 'Guinea', flag: 'https://flagcdn.com/gn.svg', ips: 69000 },
  { name: 'Guinea-Bissau', flag: 'https://flagcdn.com/gw.svg', ips: 70000 },
  { name: 'Guyana', flag: 'https://flagcdn.com/gy.svg', ips: 71000 },
  { name: 'Haiti', flag: 'https://flagcdn.com/ht.svg', ips: 72000 },
  { name: 'Honduras', flag: 'https://flagcdn.com/hn.svg', ips: 73000 },
  { name: 'Hungary', flag: 'https://flagcdn.com/hu.svg', ips: 74000 },
  { name: 'Iceland', flag: 'https://flagcdn.com/is.svg', ips: 75000 },
  { name: 'India', flag: 'https://flagcdn.com/in.svg', ips: 76000 },
  { name: 'Indonesia', flag: 'https://flagcdn.com/id.svg', ips: 77000 },
  { name: 'Iran', flag: 'https://flagcdn.com/ir.svg', ips: 78000 },
  { name: 'Iraq', flag: 'https://flagcdn.com/iq.svg', ips: 79000 },
  { name: 'Ireland', flag: 'https://flagcdn.com/ie.svg', ips: 80000 },
  { name: 'Israel', flag: 'https://flagcdn.com/il.svg', ips: 81000 },
  { name: 'Italy', flag: 'https://flagcdn.com/it.svg', ips: 82000 },
  { name: 'Jamaica', flag: 'https://flagcdn.com/jm.svg', ips: 83000 },
  { name: 'Japan', flag: 'https://flagcdn.com/jp.svg', ips: 84000 },
  { name: 'Jordan', flag: 'https://flagcdn.com/jo.svg', ips: 85000 },
  { name: 'Kazakhstan', flag: 'https://flagcdn.com/kz.svg', ips: 86000 },
  { name: 'Kenya', flag: 'https://flagcdn.com/ke.svg', ips: 87000 },
  { name: 'Kiribati', flag: 'https://flagcdn.com/ki.svg', ips: 88000 },
  { name: 'Korea (North)', flag: 'https://flagcdn.com/kp.svg', ips: 89000 },
  { name: 'Korea (South)', flag: 'https://flagcdn.com/kr.svg', ips: 90000 },
  { name: 'Kuwait', flag: 'https://flagcdn.com/kw.svg', ips: 91000 },
  { name: 'Kyrgyzstan', flag: 'https://flagcdn.com/kg.svg', ips: 92000 },
  { name: 'Laos', flag: 'https://flagcdn.com/la.svg', ips: 93000 },
  { name: 'Latvia', flag: 'https://flagcdn.com/lv.svg', ips: 94000 },
  { name: 'Lebanon', flag: 'https://flagcdn.com/lb.svg', ips: 95000 },
  { name: 'Lesotho', flag: 'https://flagcdn.com/ls.svg', ips: 96000 },
  { name: 'Liberia', flag: 'https://flagcdn.com/lr.svg', ips: 97000 },
  { name: 'Libya', flag: 'https://flagcdn.com/ly.svg', ips: 98000 },
  { name: 'Liechtenstein', flag: 'https://flagcdn.com/li.svg', ips: 99000 },
  { name: 'Lithuania', flag: 'https://flagcdn.com/lt.svg', ips: 100000 },
  { name: 'Luxembourg', flag: 'https://flagcdn.com/lu.svg', ips: 101000 },
  { name: 'Macau', flag: 'https://flagcdn.com/mo.svg', ips: 102000 },
  { name: 'Madagascar', flag: 'https://flagcdn.com/mg.svg', ips: 103000 },
  { name: 'Malawi', flag: 'https://flagcdn.com/mw.svg', ips: 104000 },
  { name: 'Malaysia', flag: 'https://flagcdn.com/my.svg', ips: 105000 },
  { name: 'Maldives', flag: 'https://flagcdn.com/mv.svg', ips: 106000 },
  { name: 'Mali', flag: 'https://flagcdn.com/ml.svg', ips: 107000 },
  { name: 'Malta', flag: 'https://flagcdn.com/mt.svg', ips: 108000 },
  { name: 'Marshall Islands', flag: 'https://flagcdn.com/mh.svg', ips: 109000 },
  { name: 'Martinique', flag: 'https://flagcdn.com/mq.svg', ips: 110000 },
  { name: 'Mauritania', flag: 'https://flagcdn.com/mr.svg', ips: 111000 },
  { name: 'Mauritius', flag: 'https://flagcdn.com/mu.svg', ips: 112000 },
  { name: 'Mayotte', flag: 'https://flagcdn.com/yt.svg', ips: 113000 },
  { name: 'Mexico', flag: 'https://flagcdn.com/mx.svg', ips: 114000 },
  { name: 'Micronesia', flag: 'https://flagcdn.com/fm.svg', ips: 115000 },
  { name: 'Moldova', flag: 'https://flagcdn.com/md.svg', ips: 116000 },
  { name: 'Monaco', flag: 'https://flagcdn.com/mc.svg', ips: 117000 },
  { name: 'Mongolia', flag: 'https://flagcdn.com/mn.svg', ips: 118000 },
  { name: 'Montenegro', flag: 'https://flagcdn.com/me.svg', ips: 119000 },
  { name: 'Montserrat', flag: 'https://flagcdn.com/ms.svg', ips: 120000 },
  { name: 'Morocco', flag: 'https://flagcdn.com/ma.svg', ips: 121000 },
  { name: 'Mozambique', flag: 'https://flagcdn.com/mz.svg', ips: 122000 },
  { name: 'Myanmar', flag: 'https://flagcdn.com/mm.svg', ips: 123000 },
  { name: 'Namibia', flag: 'https://flagcdn.com/na.svg', ips: 124000 },
  { name: 'Nauru', flag: 'https://flagcdn.com/nr.svg', ips: 125000 },
  { name: 'Nepal', flag: 'https://flagcdn.com/np.svg', ips: 126000 },
  { name: 'Netherlands', flag: 'https://flagcdn.com/nl.svg', ips: 127000 },
  { name: 'New Caledonia', flag: 'https://flagcdn.com/nc.svg', ips: 128000 },
  { name: 'New Zealand', flag: 'https://flagcdn.com/nz.svg', ips: 129000 },
  { name: 'Nicaragua', flag: 'https://flagcdn.com/ni.svg', ips: 130000 },
  { name: 'Niger', flag: 'https://flagcdn.com/ne.svg', ips: 131000 },
  { name: 'Nigeria', flag: 'https://flagcdn.com/ng.svg', ips: 132000 },
  { name: 'Niue', flag: 'https://flagcdn.com/nu.svg', ips: 133000 },
  { name: 'Norfolk Island', flag: 'https://flagcdn.com/nf.svg', ips: 134000 },
  { name: 'Northern Mariana Islands', flag: 'https://flagcdn.com/mp.svg', ips: 135000 },
  { name: 'Norway', flag: 'https://flagcdn.com/no.svg', ips: 136000 },
  { name: 'Oman', flag: 'https://flagcdn.com/om.svg', ips: 137000 },
  { name: 'Pakistan', flag: 'https://flagcdn.com/pk.svg', ips: 138000 },
  { name: 'Palau', flag: 'https://flagcdn.com/pw.svg', ips: 139000 },
  { name: 'Palestine', flag: 'https://flagcdn.com/ps.svg', ips: 140000 },
  { name: 'Panama', flag: 'https://flagcdn.com/pa.svg', ips: 141000 },
  { name: 'Papua New Guinea', flag: 'https://flagcdn.com/pg.svg', ips: 142000 },
  { name: 'Paraguay', flag: 'https://flagcdn.com/py.svg', ips: 143000 },
  { name: 'Peru', flag: 'https://flagcdn.com/pe.svg', ips: 144000 },
  { name: 'Philippines', flag: 'https://flagcdn.com/ph.svg', ips: 145000 },
  { name: 'Poland', flag: 'https://flagcdn.com/pl.svg', ips: 146000 },
  { name: 'Portugal', flag: 'https://flagcdn.com/pt.svg', ips: 147000 },
  { name: 'Puerto Rico', flag: 'https://flagcdn.com/pr.svg', ips: 148000 },
  { name: 'Qatar', flag: 'https://flagcdn.com/qa.svg', ips: 149000 },
  { name: 'Réunion', flag: 'https://flagcdn.com/re.svg', ips: 150000 },
  { name: 'Romania', flag: 'https://flagcdn.com/ro.svg', ips: 151000 },
  { name: 'Russia', flag: 'https://flagcdn.com/ru.svg', ips: 152000 },
  { name: 'Rwanda', flag: 'https://flagcdn.com/rw.svg', ips: 153000 },
  { name: 'Saint Barthélemy', flag: 'https://flagcdn.com/bl.svg', ips: 154000 },
  { name: 'Saint Kitts and Nevis', flag: 'https://flagcdn.com/kn.svg', ips: 155000 },
  { name: 'Saint Lucia', flag: 'https://flagcdn.com/lc.svg', ips: 156000 },
  { name: 'Saint Martin (French part)', flag: 'https://flagcdn.com/mf.svg', ips: 157000 },
  { name: 'Saint Pierre and Miquelon', flag: 'https://flagcdn.com/pm.svg', ips: 158000 },
  { name: 'Saint Vincent and the Grenadines', flag: 'https://flagcdn.com/vc.svg', ips: 159000 },
  { name: 'Samoa', flag: 'https://flagcdn.com/ws.svg', ips: 160000 },
  { name: 'San Marino', flag: 'https://flagcdn.com/sm.svg', ips: 161000 },
  { name: 'Sao Tome and Principe', flag: 'https://flagcdn.com/st.svg', ips: 162000 },
  { name: 'Saudi Arabia', flag: 'https://flagcdn.com/sa.svg', ips: 163000 },
  { name: 'Senegal', flag: 'https://flagcdn.com/sn.svg', ips: 164000 },
  { name: 'Serbia', flag: 'https://flagcdn.com/rs.svg', ips: 165000 },
  { name: 'Seychelles', flag: 'https://flagcdn.com/sc.svg', ips: 166000 },
  { name: 'Sierra Leone', flag: 'https://flagcdn.com/sl.svg', ips: 167000 },
  { name: 'Singapore', flag: 'https://flagcdn.com/sg.svg', ips: 168000 },
  { name: 'Sint Maarten (Dutch part)', flag: 'https://flagcdn.com/sx.svg', ips: 169000 },
  { name: 'Slovakia', flag: 'https://flagcdn.com/sk.svg', ips: 170000 },
  { name: 'Slovenia', flag: 'https://flagcdn.com/si.svg', ips: 171000 },
  { name: 'Solomon Islands', flag: 'https://flagcdn.com/sb.svg', ips: 172000 },
  { name: 'Somalia', flag: 'https://flagcdn.com/so.svg', ips: 173000 },
  { name: 'South Africa', flag: 'https://flagcdn.com/za.svg', ips: 174000 },
  { name: 'South Sudan', flag: 'https://flagcdn.com/ss.svg', ips: 175000 },
  { name: 'Spain', flag: 'https://flagcdn.com/es.svg', ips: 176000 },
  { name: 'Sri Lanka', flag: 'https://flagcdn.com/lk.svg', ips: 177000 },
  { name: 'Sudan', flag: 'https://flagcdn.com/sd.svg', ips: 178000 },
  { name: 'Suriname', flag: 'https://flagcdn.com/sr.svg', ips: 179000 },
  { name: 'Sweden', flag: 'https://flagcdn.com/se.svg', ips: 180000 },
  { name: 'Switzerland', flag: 'https://flagcdn.com/ch.svg', ips: 181000 },
  { name: 'Syria', flag: 'https://flagcdn.com/sy.svg', ips: 182000 },
  { name: 'Taiwan', flag: 'https://flagcdn.com/tw.svg', ips: 183000 },
  { name: 'Tajikistan', flag: 'https://flagcdn.com/tj.svg', ips: 184000 },
  { name: 'Tanzania', flag: 'https://flagcdn.com/tz.svg', ips: 185000 },
  { name: 'Thailand', flag: 'https://flagcdn.com/th.svg', ips: 186000 },
  { name: 'Timor-Leste', flag: 'https://flagcdn.com/tl.svg', ips: 187000 },
  { name: 'Togo', flag: 'https://flagcdn.com/tg.svg', ips: 188000 },
  { name: 'Tonga', flag: 'https://flagcdn.com/to.svg', ips: 189000 },
  { name: 'Trinidad and Tobago', flag: 'https://flagcdn.com/tt.svg', ips: 190000 },
  { name: 'Tunisia', flag: 'https://flagcdn.com/tn.svg', ips: 191000 },
  { name: 'Turkey', flag: 'https://flagcdn.com/tr.svg', ips: 192000 },
  { name: 'Turkmenistan', flag: 'https://flagcdn.com/tm.svg', ips: 193000 },
  { name: 'Tuvalu', flag: 'https://flagcdn.com/tv.svg', ips: 194000 },
  { name: 'Uganda', flag: 'https://flagcdn.com/ug.svg', ips: 195000 },
  { name: 'Ukraine', flag: 'https://flagcdn.com/ua.svg', ips: 196000 },
  { name: 'United Arab Emirates', flag: 'https://flagcdn.com/ae.svg', ips: 197000 },
  { name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg', ips: 198000 },
  { name: 'United States', flag: 'https://flagcdn.com/us.svg', ips: 199000 },
  { name: 'Uruguay', flag: 'https://flagcdn.com/uy.svg', ips: 200000 },
  { name: 'Uzbekistan', flag: 'https://flagcdn.com/uz.svg', ips: 201000 },
  { name: 'Vanuatu', flag: 'https://flagcdn.com/vu.svg', ips: 202000 },
  { name: 'Vatican City', flag: 'https://flagcdn.com/va.svg', ips: 203000 },
  { name: 'Venezuela', flag: 'https://flagcdn.com/ve.svg', ips: 204000 },
  { name: 'Vietnam', flag: 'https://flagcdn.com/vn.svg', ips: 205000 },
  { name: 'Western Sahara', flag: 'https://flagcdn.com/eh.svg', ips: 206000 },
  { name: 'Yemen', flag: 'https://flagcdn.com/ye.svg', ips: 207000 },
  { name: 'Zambia', flag: 'https://flagcdn.com/zm.svg', ips: 208000 },
  { name: 'Zimbabwe', flag: 'https://flagcdn.com/zw.svg', ips: 209000 },
]
