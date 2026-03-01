export interface Question {
  questionNumber: number;
  reference: string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export const questions: Question[] = [
  {
    questionNumber: 1,
    reference: "BAFS600C1Ch1-1",
    text: "Which of the following are the roles of business in Hong Kong economy?\n(1) It promotes economic growth.\n(2) It provides job opportunities.\n(3) It improves people’s living standard.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. Economic growth refers to the growth in real output of a place. Businesses organise resources to produce output, stimulating economic growth. (2) is correct. In order to provide goods and services, businesses need to employ labour inputs and consume goods and services provided by others, thus creating job opportunities. (3) is correct. Businesses provide a diversified range of goods and services available at different prices. Customers can have more choices and thus enjoy a higher living standard."
  },
  {
    questionNumber: 2,
    reference: "BAFS600C1Ch1-2",
    text: "Which of the following is/are correct about the business environment in Hong Kong?\n(1) The contribution of secondary industry to Hong Kong economy is the largest.\n(2) China is the largest trading partner of Hong Kong.\n(3) The government employs the majority of Hong Kong’s workforce.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) is incorrect. Currently, the tertiary industry makes the largest contribution to Hong Kong economy. It amounts to over 90% of Hong Kong's GDP. (2) is correct. Policies like Closer Economic Partnership Arrangement (CEPA) have fostered a closer economic link between Hong Kong and China. In the meantime, the attractive investment opportunities and low production costs in China have also driven more entrepreneurs northwards, creating more cross-border transactions. As a result, China has become the largest trading partner of Hong Kong, contributing to about 50% of Hong Kong's trade value. (3) is incorrect. The government only employs a small segment, which is about 4%, of the total workforce."
  },
  {
    questionNumber: 3,
    reference: "BAFS600C1Ch1-3",
    text: "Which of the following descriptions about the economic and business relationships between Hong Kong and the Mainland are correct?\n(1) The Mainland is the main origin and destination of Hong Kong's re-exports of goods.\n(2) The purpose of Closer Economic Partnership Arrangement (CEPA) is to help Mainland enterprises raise capital in Hong Kong.\n(3) The Mainland is one of the major sources of foreign direct investment in Hong Kong.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) is correct. Since Hong Kong is located in coastal area, its location is favourable for re-exports of goods from other countries to the Mainland, or vice versa. In 2014, the values of Hong Kong's re-export to and from the Mainland amount to $1,955.8 billion (54.1% of the total re-exports value) and $2,168.3 billion (59.9% of the total re-exports value) respectively. (2) is incorrect. The objectives of CEPA are as follows: 1. To reduce or eliminate barriers on substantially all the trade in goods between Hong Kong and the Mainland. 2. To achieve free trade in services through reduction or elimination of substantially all discriminatory measures. 3. To promote trade and investment facilitation. Therefore CEPA does not aim at helping Mainland enterprises raise capital in Hong Kong. (3) is correct. There is a huge investment flow between Hong Kong and the Mainland. In particular, the Mainland companies have made various direct investments in Hong Kong. As at the end of 2014, the Mainland was the second major source of foreign direct investments (FDI) in Hong Kong, following British Virgin Islands. The amount of FDI of the Mainland in Hong Kong at the end of 2014 is $3,493.5 billion, which is 30.1% of the total FDI in Hong Kong."
  },
  {
    questionNumber: 4,
    reference: "BAFS600C1Ch1-4",
    text: "Which of the following is correct regarding the recent development of Hong Kong?",
    options: {
      A: "There is no more primary production now.",
      B: "Most of the secondary production in Hong Kong has moved to the Mainland.",
      C: "Hong Kong economy has a high dependence on internal trade.",
      D: "There is an urgent need in Hong Kong to develop the primary industry to secure the supply of raw materials."
    },
    answer: "B",
    explanation: "After the announcement of the Open Door Policy in China, preferential treatment was provided to foreign investors including Hong Kong entrepreneurs. Due to the rise in rents and salaries in Hong Kong, the production cost in the Mainland was lower than that in Hong Kong. Therefore, in the 1980s, most of the industries involving in secondary production relocated to places like the Pearl River Delta in the Mainland. A is incorrect. Primary production still contributes a small proportion (about 0.1% of the GDP) to Hong Kong business sector. C is incorrect. Hong Kong has a higher dependence on external trade than internal trade. D is incorrect. There is no urgent need to develop primary industry."
  },
  {
    questionNumber: 5,
    reference: "BAFS600C1Ch1-5",
    text: "Which of the following statements about the characteristics of Hong Kong economy is INCORRECT?",
    options: {
      A: "Since Hong Kong lacks natural resources, consumer durables are imported into Hong Kong.",
      B: "There are no capital or foreign exchange restrictions in Hong Kong.",
      C: "The government does not intervene in the functioning of market.",
      D: "Hong Kong adopts a simple taxation system."
    },
    answer: "C",
    explanation: "The government ensures that the market functions efficiently. It makes sure that the market maintains an efficient allocation of resources. Therefore it does intervene the functioning of the market though adopting the laissez-faire policy and the \"big market, small government\" principle, minimising its intervention in the market in order to maintain a free market economy. A, B and D are correct characteristics of the Hong Kong economy."
  },
  {
    questionNumber: 6,
    reference: "BAFS600C1Ch1-6",
    text: "Which of the following are the reasons for foreign companies to set up their headquarters in Hong Kong?\n(1) Hong Kong promotes free trade.\n(2) Hong Kong adopts a simple taxation system.\n(3) The market competition is keen in Hong Kong.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) and (2) are correct. Hong Kong does not impose any trade barriers, control on the flow of capital and exchange control on foreign businesses. The taxation system is simple with a low profits tax rate. These encourage many foreign companies to set up their headquarters here. (3) is incorrect. Keen market competition discourages foreign companies from setting up their headquarters in Hong Kong instead."
  },
  {
    questionNumber: 7,
    reference: "BAFS600C1Ch1-7",
    text: "Victor is planning to relocate his factory from Hong Kong to Mainland China. Which of the following factors should he be aware of?\n(1) the tightness of the environmental regulations in China\n(2) the number of tourists from the mainland travelling to Hong Kong\n(3) cultural differences between Mainland China and Hong Kong",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) is correct. It is a legal factor to be considered. Tighter environmental regulations lead to higher production costs. (2) is incorrect. There is no direct relationship between the number of Mainland tourists to HK and the prospect of a factory in the Mainland. (3) is correct. Cultural differences constitute a cultural factor. Corporate culture and management styles differ between HK and the Mainland."
  },
  {
    questionNumber: 8,
    reference: "BAFS600C1Ch1-8",
    text: "Julian is going to open a new bookstore in Happy Village. He is worried that the riots originated from the jobless citizens will affect his business. Which of the following factors is he considering?",
    options: {
      A: "physical factor",
      B: "political factor",
      C: "cultural factor",
      D: "economic factor"
    },
    answer: "B",
    explanation: "Riots cause political instability, which results in an unstable political environment. Therefore Julian is considering the political factor."
  },
  {
    questionNumber: 9,
    reference: "BAFS600C1Ch1-9",
    text: "Which of the following statements is/are correct?\n(1) Hong Kong imports a variety of goods and services from the Mainland.\n(2) \"Closer Economic Partnership Arrangement\" (CEPA) has stopped functioning since 2012.\n(3) China is a member of Asia-Pacific Economic Cooperation (APEC), while Hong Kong is not.",
    options: {
      A: "(1) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) is correct. HK cannot produce all goods and services herself due to a lack of natural resources. She imports many of them from the Mainland. (2) is incorrect. CEPA has never stopped functioning. (3) is incorrect. Both China and Hong Kong are members of APEC."
  },
  {
    questionNumber: 10,
    reference: "BAFS600C1Ch1-10",
    text: "Which of the following is/are correct classification(s) of factors affecting business decisions?\n(1) physical: reliability of telecommunication network\n(2) social: languages of customers\n(3) economic: wage level",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "D",
    explanation: "(1) is incorrect. Reliability of telecommunication network is a technological factor, not a physical factor. (2) is correct. Languages of customers constitute a type of social factor. (3) is correct. Wage level affects the operation cost and is an economic factor."
  },
  {
    questionNumber: 11,
    reference: "BAFS600C1Ch1-11",
    text: "Lulu is an owner of a boutique selling clothes. Which of the following is/are the example(s) of economic factors that might affect Lulu's plan of extending her clothes retailing business in Hong Kong?\n(1) the inflation rate\n(2) the legislation of standard working hour\n(3) the tightness of regulations on the import of foreign labour",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "A",
    explanation: "(1) is correct. Inflation rate is an indicator of economic factors as it directly affects the economy and costs. (2) is incorrect. Legislation of standard working hour is a legal factor. (3) is incorrect. Tightening or loosening of regulations is an amendment of law, which is a legal factor."
  },
  {
    questionNumber: 12,
    reference: "BAFS600C1Ch1-12",
    text: "Which of the following statements about World Trade Organization (WTO) or Asia-Pacific Economic Cooperation (APEC) is INCORRECT?",
    options: {
      A: "WTO encourages members to provide subsidies for local industries.",
      B: "APEC serves as a platform for members to have a high-level governmental dialogue.",
      C: "WTO possesses the power to impose trade sanctions on members who violate its regulations.",
      D: "Decisions made by APEC are carried out by members on a voluntary basis."
    },
    answer: "A",
    explanation: "WTO aims at promoting free trade. It does not encourage members to provide subsidies for local industries because this may upset the fairness of international trade. B, C, and D are correct statements."
  },
  {
    questionNumber: 13,
    reference: "BAFS600C1Ch1-13",
    text: "Which of the following descriptions about the recent development of Hong Kong economy is/are correct?\n(1) There are a lot of capital flows between the Mainland and Hong Kong.\n(2) Hong Kong serves as an offshore Renminbi business centre of China.\n(3) After signing Closer Economic Partnership Arrangement (CEPA), Hong Kong left the Asia-Pacific Economic Cooperation (APEC), since China can then represent Hong Kong to take part in the organisation.",
    options: {
      A: "(1) only",
      B: "(1) and (2) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) is correct. Capital flows between the two places have been increasing. (2) is correct. HK is an offshore Renminbi business centre. (3) is incorrect. HK has never withdrawn from APEC; HK and China have separate memberships."
  },
  {
    questionNumber: 14,
    reference: "BAFS600C1Ch1-14",
    text: "Which of the following functions of the business sector is/are demonstrated by Janna's business (selling clothes manufactured in Mainland in HK boutiques)?\n(1) generating revenues\n(2) providing goods to the locals of both Hong Kong and the Mainland\n(3) supporting China's business sector",
    options: {
      A: "(1) only",
      B: "(1) and (2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "C",
    explanation: "(1) is correct. Selling clothes generates revenues. (2) is incorrect. Clothes are sold in HK boutiques, not in China. (3) is correct. Manufacturing is carried out in the Mainland, supporting Chinese secondary industry."
  },
  {
    questionNumber: 15,
    reference: "BAFS600C1Ch1-15",
    text: "Which of the following factors should Janna consider when making the decision (setting up a factory in Mainland)?\n(1) economic factor\n(2) legal factor\n(3) physical factor",
    options: {
      A: "(1) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. Wage levels and inflation affect production costs. (2) is correct. Laws regulating factories affect production. (3) is correct. Space and infrastructure (accessibility) are physical factors. Most business decisions involve many aspects."
  },
  {
    questionNumber: 16,
    reference: "BAFS600C1Ch1-16",
    text: "Which of the following is NOT a threat to local factory owners in Dongguan since China has joined WTO?",
    options: {
      A: "the opening up of various industries to foreign investors",
      B: "better treatment to foreign investors",
      C: "gradual reduction of tariffs on imported products",
      D: "the growth of export trade"
    },
    answer: "D",
    explanation: "The growth of export trade is a strength, not a threat. It leads to a boom in manufacturing as demand increases. A, B, and C are threats as they increase competition."
  },
  {
    questionNumber: 17,
    reference: "BAFS600C1Ch1-17",
    text: "Which of the following statements about the business relationship between Hong Kong and China is/are correct?\n(1) Hong Kong is the largest trading partner of the Mainland.\n(2) Many enterprises in the Mainland raise capital in Hong Kong through issuing shares in Hong Kong's stock market.\n(3) Hong Kong's direct investment in the Mainland is insignificant.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (2) only",
      D: "(2) and (3) only"
    },
    answer: "B",
    explanation: "(1) is incorrect. HK is not the largest trading partner of China (it was the second largest in 2014). (2) is correct. HK acts as a funding centre for China. (3) is incorrect. HK occupies a large proportion of foreign direct investment in China."
  },
  {
    questionNumber: 18,
    reference: "BAFS600C1Ch1-18",
    text: "Peter is the owner of a factory which manufactures toys in Guangdong. Which of the following are the economic factors affecting his business?\n(1) the price level\n(2) the tightness of labour laws and environmental regulations\n(3) the salary level in neighbouring provinces",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) is correct. Price level changes affect production costs and selling prices. (2) is incorrect. Labour laws and environmental regulations are legal factors. (3) is correct. Salary levels in neighbouring provinces affect the employment situation and production costs."
  },
  {
    questionNumber: 19,
    reference: "BAFS600C1Ch1-19",
    text: "Which of the following is/are the correct description(s) about the business relationship between Hong Kong and the Mainland?\n(1) Due to the WTO arrangement, there is a closer link between Hong Kong and the Mainland.\n(2) After the adoption of the \"Open Door Policy\" by the Chinese government, the share of tertiary sector of Hong Kong has grown significantly.\n(3) After the signing of CEPA, entrepreneurs from Hong Kong can get subsidies from the Chinese government.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "B",
    explanation: "(1) is incorrect. Link is closer due to CEPA, not primarily WTO. (2) is correct. Tertiary production in HK rose as factories relocated to China. (3) is incorrect. Entrepreneurs do not get subsidies from the Chinese government under CEPA."
  },
  {
    questionNumber: 20,
    reference: "BAFS600C1Ch1-20",
    text: "Which of the following are correct descriptions about globalisation?\n(1) Countries are more interdependent than before.\n(2) There is little capital flow between countries under globalisation.\n(3) There is a growth in multinational trade.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) is correct. World economy is more integrated. (2) is incorrect. Capital flow increases with international trade. (3) is correct. Globalisation results in a growth in international trade."
  },
  {
    questionNumber: 21,
    reference: "BAFS600C1Ch1-21",
    text: "Which of the following impacts of globalisation on business is/are demonstrated by FaFa Limited (sourcing coffee from Brazil, processing in India, 200 branches globally)?\n(1) an increasing popularity of global sourcing and outsourcing\n(2) a fiercer competition among companies\n(3) more international capital flows",
    options: {
      A: "(1) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) is correct. Sourcing from Brazil and processing in India shows global sourcing/outsourcing. (2) is incorrect. The description doesn't provide info on competition. (3) is correct. Setting up 200 branches globally is an international capital investment."
  },
  {
    questionNumber: 22,
    reference: "BAFS600C1Ch1-22",
    text: "Which of the following are cultural factors affecting Fiona's decision on the company's expansion?\n(1) the number of public holidays set by the Chinese government\n(2) whether the majority of the public like drinking latte\n(3) whether drinking coffee is popular among the Chinese elderly",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "C",
    explanation: "Cultural factors refer to lifestyle, tastes, and preferences. (2) and (3) are correct. (1) is incorrect as it is a legal factor (legislation)."
  },
  {
    questionNumber: 23,
    reference: "BAFS600C1Ch1-23",
    text: "Which of the following descriptions about the World Trade Organization is INCORRECT?",
    options: {
      A: "It monitors national trade policies.",
      B: "It acts as a channel for settling international trade disputes.",
      C: "It provides technical assistance and support to the members of less developed countries.",
      D: "It provides financial assistance to exporters from the member countries."
    },
    answer: "D",
    explanation: "The WTO does not provide financial assistance to its member countries. A, B, and C are functions performed by the WTO."
  },
  {
    questionNumber: 24,
    reference: "BAFS600C1Ch1-24",
    text: "Which of the following is NOT a benefit for countries joining the WTO?",
    options: {
      A: "Developing countries can receive technical assistance.",
      B: "International disputes can be settled more easily.",
      C: "The member countries can attract foreign financial institutions to compete with the local ones.",
      D: "The member countries will become less vulnerable to trade wars."
    },
    answer: "C",
    explanation: "Attracting foreign competition is often seen as a drawback for poor countries as local institutions may face keen competition. A, B, and D are benefits."
  },
  {
    questionNumber: 25,
    reference: "BAFS600C1Ch1-25",
    text: "Which of the following are the impacts of globalisation brought to the business sector?\n(1) It increases global sourcing.\n(2) Companies recognise the differences in tastes and preferences of people in different nations.\n(3) It encourages the transfer of technology applied in production to developing countries.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. Globalisation facilitates global sourcing to reduce costs. (2) is correct. Businesses must understand different tastes to enter overseas markets. (3) is correct. Globalisation encourages technology transfer to developing countries."
  },
  {
    questionNumber: 26,
    reference: "BAFS600C1Ch1-26",
    text: "Which of the following are the negative impacts brought by globalisation?\n(1) exhaustion of resources\n(2) deprivation of labour rights\n(3) economic instability",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. Outsourcing leads to resource removal in developing countries. (2) is correct. It can lead to sweatshops and deprivation of labour rights. (3) is correct. Developing countries rely on foreign investment and can face crisis if it is withdrawn."
  },
  {
    questionNumber: 27,
    reference: "BAFS600C1Ch1-27",
    text: "Which of the following are true regarding the importance of the business sector in Hong Kong?\n(1) It generates government revenue.\n(2) It helps obtain foreign exchange to pay for imports.\n(3) It provides employment opportunities.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. Government earns revenue through taxes from the business sector. (2) is correct. HK needs to earn foreign exchange to pay for imports. (3) is correct. The business sector provides many jobs, maintaining quality of life."
  },
  {
    questionNumber: 28,
    reference: "BAFS600C1Ch1-28",
    text: "Which of the following is/are the purpose(s) of the Closer Economic Partnership Arrangement (CEPA)?\n(1) reduce trade barriers between Hong Kong and China\n(2) facilitate free cross-border capital flow between Hong Kong and China\n(3) maintain a free flow of information between Hong Kong and China",
    options: {
      A: "(1) only",
      B: "(3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) is correct. CEPA aims to reduce/eliminate trade barriers. (2) is incorrect. Capital flow is not fully covered/guaranteed. (3) is incorrect. The Mainland still imposes restrictions on information flow."
  },
  {
    questionNumber: 29,
    reference: "BAFS600C1Ch1-29",
    text: "Which of the following is/are correct classification(s) of factors affecting business decisions?\n(1) technological: reliability of transportation system\n(2) economic: cross-border telephone charges\n(3) legal: licensing regulations",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "D",
    explanation: "(1) is incorrect. Reliability of transportation system is a physical factor. (2) is correct. Telephone charges are an expense and thus an economic factor. (3) is correct. Licensing regulations are based on laws and are legal factors."
  },
  {
    questionNumber: 30,
    reference: "BAFS600C1Ch1-30",
    text: "Which of the following are impacts of globalisation?\n(1) It intensifies global competition.\n(2) It encourages technology transfer.\n(3) It reduces production costs of goods.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. Competition intensifies as companies expand into foreign markets. (2) is correct. Technology is transferred from developed to developing countries. (3) is correct. Global sourcing and outsourcing reduce production costs."
  },
  {
    questionNumber: 31,
    reference: "BAFS600C1Ch1-31",
    text: "Religion, traditions and daily habits are ____ to be considered.",
    options: {
      A: "physical factors",
      B: "legal factors",
      C: "cultural factors",
      D: "political factors"
    },
    answer: "C",
    explanation: "Religion, traditions and daily habits affect tastes and preferences of customers, so they are cultural factors."
  },
  {
    questionNumber: 32,
    reference: "BAFS600C1Ch1-32",
    text: "Rules and regulations on foreign goods are ____ to be considered.",
    options: {
      A: "physical factors",
      B: "legal factors",
      C: "cultural factors",
      D: "political factors"
    },
    answer: "B",
    explanation: "Rules and regulations on foreign goods are considered legal factors because they are set by legislation."
  },
  {
    questionNumber: 33,
    reference: "BAFS600C1Ch1-33",
    text: "Which of the following are the examples of economic factors that may affect the operations of the international business in foreign markets?\n(1) the value of currencies in some foreign countries compared with their neighbours\n(2) whether high inflation exists in some foreign countries\n(3) geographical dispersion of the overseas markets",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) and (2) are correct. Currencies and inflation affect consumption and are economic factors. (3) is incorrect. Geographical dispersion is a physical factor."
  },
  {
    questionNumber: 34,
    reference: "BAFS600C1Ch1-34",
    text: "He found out that the growing trend was caused by the increasing concern for the health of students carrying heavy books. In this case, he considered the ____ factor.",
    options: {
      A: "physical",
      B: "legal",
      C: "social",
      D: "economic"
    },
    answer: "C",
    explanation: "Increasing concern for health is a social issue that catches public attention, so it is a social factor."
  },
  {
    questionNumber: 35,
    reference: "BAFS600C1Ch1-35",
    text: "Later, the government announced that it would subsidise the use of e-books in the future. This is a ____ which might affect Jason on making business decisions.",
    options: {
      A: "physical factor",
      B: "legal factor",
      C: "social factor",
      D: "economic factor"
    },
    answer: "B",
    explanation: "The subsidy on e-books is a government policy, which is a legal factor."
  },
  {
    questionNumber: 36,
    reference: "BAFS600C1Ch1-36",
    text: "Besides, Jason conducted a market research on customer buying behaviour. He considered the ____ factor.",
    options: {
      A: "physical factor",
      B: "legal factor",
      C: "social factor",
      D: "economic factor"
    },
    answer: "C",
    explanation: "Customer buying behaviour refers to tastes and preferences, which is a social factor."
  },
  {
    questionNumber: 37,
    reference: "BAFS600C1Ch1-37",
    text: "Which of the following is/are the feature(s) of the Hong Kong economy?\n(1) Companies adopt the laissez-faire leadership style.\n(2) The workforce is attractive due to rising wages.\n(3) The economy is easily affected by global economic conditions.",
    options: {
      A: "(2) only",
      B: "(3) only",
      C: "(1) and (2) only",
      D: "(2) and (3) only"
    },
    answer: "B",
    explanation: "(1) is incorrect. HK adopts laissez-faire policy, but leadership style varies. (2) is incorrect. Rising wages actually decrease attractiveness as costs increase. (3) is correct. HK is an externally oriented economy easily affected by global events."
  },
  {
    questionNumber: 38,
    reference: "BAFS600C1Ch1-38",
    text: "Which of the following is/are the correct description(s) about Asia-Pacific Economic Cooperation (APEC)?\n(1) It establishes obligatory treaty commitment.\n(2) It settles trade disputes among countries in Asia-Pacific region.\n(3) It facilitates trading and investments between members.",
    options: {
      A: "(2) only",
      B: "(3) only",
      C: "(1) and (2) only",
      D: "(2) and (3) only"
    },
    answer: "B",
    explanation: "(1) is incorrect. Commitments are voluntary. (2) is incorrect. APEC does not solve trade disputes. (3) is correct. APEC aims to facilitate trade and investments."
  },
  {
    questionNumber: 39,
    reference: "BAFS600C1Ch1-39",
    text: "Which of the following is/are NOT the contribution(s) of World Trade Organization?\n(1) removing all trade barriers in the world successfully\n(2) offering monetary support to countries developing trade\n(3) developing the infrastructure in developing countries to facilitate their trade",
    options: {
      A: "(2) only",
      B: "(3) only",
      C: "(1) and (2) only",
      D: "(2) and (3) only"
    },
    answer: "C",
    explanation: "(1) is incorrect. WTO removes many but not all barriers. (2) is correct. WTO does not offer monetary support. (3) is correct. WTO does not develop infrastructure; the World Bank does."
  },
  {
    questionNumber: 40,
    reference: "BAFS600C1Ch1-40",
    text: "Which of the following is/are the impact(s) of globalisation?",
    options: {
      A: "provision of high-quality international goods",
      B: "increased international capital flow",
      C: "loss of cultural identity",
      D: "All of the above"
    },
    answer: "D",
    explanation: "(1) is correct. People enjoy quality goods from all over the world. (2) is correct. Globalisation exposes investors to more markets. (3) is correct. Tastes become more homogeneous, diminishing unique cultural characteristics."
  }
];
