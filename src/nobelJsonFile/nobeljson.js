const nobelPrice = [
    {
        name: "Jacques Dubochet",
        priceCategory: "Chemistry",
        year: 2017,
        country: "Switzerland",
        priceShare: "1/3",
        key: 1620,
        priceMotivation: "Developing cryo-electron microscopy",
        monetaryAward: 100000,
        img: "https://www.nobelprize.org/images/dubochet-15235-portrait-mini-2x.jpg"
    },
    {
        name: "Dorothy Crowfoot Hodgkin",
        priceCategory: "Chemistry",
        year: 1964,
        country: "Cairo, Egypt",
        priceShare: "1/1",
        key: 1621,
        priceMotivation: "X-ray techniques of important biochemical substances",
        monetaryAward: 95000,
        img: "https://www.nobelprize.org/images/hodgkin-13170-portrait-mini-2x.jpg"
    },
    {
        name: "Ernest Rutherford",
        priceCategory: "Chemistry",
        year: 1908,
        country: "New Zealand",
        priceShare: "1/1",
        key: 1622,
        priceMotivation: "Chemistry of radioactive substances",
        monetaryAward: 98500,
        img: "https://www.nobelprize.org/images/rutherford-12860-portrait-mini-2x.jpg"
    },
    {
        name: "Albert Einstein",
        priceCategory: "Physics",
        year: 1921,
        country: "Germany",
        priceShare: "1/1",
        key: 1623,
        priceMotivation: "Discovery of the law of the photoelectric effect",
        monetaryAward: 110000,
        img: "https://www.nobelprize.org/images/einstein-12923-portrait-mini-2x.jpg"
    },
    {
        name: "Joseph John Thomson",
        priceCategory: "Physics",
        year: 1906,
        country: "United Kingdom",
        priceShare: "1/1",
        key: 1624,
        priceMotivation: "Theoretical and experimental of electricity by gases",
        monetaryAward: 125050,
        img: "https://www.nobelprize.org/images/thomson-12853-portrait-mini-2x.jpg"
    },
    {
        name: "James Chadwick",
        priceCategory: "Physics",
        year: 1935,
        country: "United Kingdom",
        priceShare: "1/1",
        key: 1625,
        priceMotivation: "Discovery of the neutron",
        monetaryAward: 1050500,
        img: "https://www.nobelprize.org/images/chadwick-12999-portrait-mini-2x.jpg"
    },
    {
        name: "Barbara McClintock",
        priceCategory: "Medicine",
        year: 1983,
        country: "Hartford, CT, USA",
        priceShare: "1/1",
        key: 1626,
        priceMotivation: "Discovery of mobile genetic elements",
        monetaryAward: 190000,
        img: "https://www.nobelprize.org/images/mcclintock-13355-portrait-mini-2x.jpg"
    },
    {
        name: "Gertrude B. Elion",
        priceCategory: "Medicine",
        year: 1988,
        country: "New York, USA",
        priceShare: "1/3",
        key: 1627,
        priceMotivation: "Discoveries principles for drug treatment",
        monetaryAward: 1050500,
        img: "https://www.nobelprize.org/images/elion-13403-portrait-mini-2x.jpg"
    },
    {
        name: "Elizabeth H. Blackburn",
        priceCategory: "Medicine",
        year: 2009,
        country: "Australia",
        priceShare: "1/3",
        key: 1628,
        priceMotivation: "Discovery of how chromosomes are protected",
        monetaryAward: 1025500,
        img: "https://www.nobelprize.org/images/blackburn-15146-portrait-mini-2x.jpg"
    },
    {
        name: "Rabindranath Tagore",
        priceCategory: "Literature",
        year: 1913,
        country: "Calcutta, India",
        priceShare: "1/1",
        key: 1629,
        priceMotivation: "Because of his profoundly sensitive verse",
        monetaryAward: 1300500,
        img: "https://www.nobelprize.org/images/tagore-12892-portrait-mini-2x.jpg"
    },
    {
        name: "Bob Dylan",
        priceCategory: "Literature",
        year: 2016,
        country: "Duluth, USA",
        priceShare: "1/1",
        key: 1630,
        priceMotivation: "Created new poetic expressions",
        monetaryAward: 1820500,
        img: "https://www.nobelprize.org/images/dylan-13656-portrait-mini-2x.jpg"
    },
    {
        name: "Wislawa Szymborska",
        priceCategory: "Literature",
        year: 1996,
        country: "Poland",
        priceShare: "1/1",
        key: 1631,
        priceMotivation: "Ironic precision poetry with historical context",
        monetaryAward: 1540500,
        img: "https://www.nobelprize.org/images/szymborska-13484-portrait-mini-2x.jpg"
    },
    {
        name: "Mother Teresa",
        priceCategory: "Peace Prize",
        year: 1979,
        country: "Calcutta, India",
        priceShare: "1/1",
        key: 1632,
        priceMotivation: "Work for bringing help to suffering humanity",
        monetaryAward: 180500,
        img: "https://www.nobelprize.org/images/teresa-13873-portrait-mini-2x.jpg"
    },
    {
        name: "Nelson Mandela",
        priceCategory: "Peace Prize",
        year: 1993,
        country: "South Africa",
        priceShare: "1/2",
        key: 1633,
        priceMotivation: "For peaceful termination of the apartheid regime",
        monetaryAward: 1600500,
        img: "https://www.nobelprize.org/images/mandela-13452-portrait-mini-2x.jpg"
    },
    {
        name: "Malala Yousafzai",
        priceCategory: "Peace Prize",
        year: 2014,
        country: "Mingora, Pakistan",
        priceShare: "1/2",
        key: 1634,
        priceMotivation: "Struggle against the suppression of children and young",
        monetaryAward: 1050500,
        img: "https://www.nobelprize.org/images/yousafzai-15198-portrait-mini-2x.jpg"
    },
    {
        name: "Elinor Ostrom",
        priceCategory: "Economic Sciences",
        year: 2009,
        country: "Los Angeles, USA",
        priceShare: "1/2",
        key: 1635,
        priceMotivation: "For her analysis of economic governance",
        monetaryAward: 1750500,
        img: "https://www.nobelprize.org/images/ostrom-15149-portrait-mini-2x.jpg"
    },
    {
        name: "Amartya Sen",
        priceCategory: "Economic Sciences",
        year: 1998,
        country: "Santiniketan, India",
        priceShare: "1/1",
        key: 1636,
        priceMotivation: "Contributions to welfare economics",
        monetaryAward: 1050500,
        img: "https://www.nobelprize.org/images/sen-13506-portrait-mini-2x.jpg"
    },
    {
        name: "Richard H. Thaler",
        priceCategory: "Economic Sciences",
        year: 2017,
        country: "NJ, USA",
        priceShare: "1/1",
        key: 1637,
        priceMotivation: "Contributions to behavioural economics",
        monetaryAward: 100000,
        img: "https://www.nobelprize.org/images/thaler-15229-portrait-mini-2x.jpg"
    }
]