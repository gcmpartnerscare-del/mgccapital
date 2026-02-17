const countriesDB = [
  {
    id: "austria",
    slug: "austria",
    category: "Citizenship",
    name: "Austria",
    region: "Europe",

    flag: "/flags/austria.svg",
    imgSrc:
      "https://img.freepik.com/premium-photo/high-angle-view-townscape-against-sky_1048944-21718032.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80",
    // imgSrc: "/countries/austria.jpg",
    bgImgSrc: [
      "/countries/austria-bg.jpg",
      "/countries/austriabg.jpg",
      "/countries/austria-bgc.jpg",
    ],

    sectionTitle: "Citizenship Programs",
    sectionDescription:
      "We've curated a list of Countries offering Top-Tier Citizenship Programs",

    investmentStatement: "Invest At Least €5,000,000",

    description:
      "Austria’s Citizenship program offers one of the most prestigious European citizenships with top-tier healthcare, education, and visa-free travel to over 190 countries. No residency is required, and applicants can include family members.",

    realEstate: null, // Not available for Citizenship
    immigration: {
      timeToCitizenship: "24–36 months",
      visaFreeAccess:
        "190+ countries including the US, UK, Canada, Schengen Area",
      dualCitizenshipAllowed: "Allowed in exceptional cases",
    },

    pricing: {
      donation: null,
      realEstate: null,
      directInvestment: "€5,000,000 – €10,000,000 depending on impact",
      legalFees: "Varies per case",
      governmentFees: "Apply",
    },

    benefits: [
      "Visa-free or visa-on-arrival access to 190+ countries including Canada and the Schengen Area.",
      "EU citizenship extends to spouse and dependent children under 18.",
      "No wealth, inheritance, or gift taxes.",
      "Application processed in 24 to 36 months.",
      "No requirement to relocate or reside in Austria.",
      "Access to EU rights: live, work, study anywhere in the EU.",
      "High quality of life with top-notch education and healthcare.",
      "Dual citizenship permitted under special conditions.",
    ],

    eligibility: [
      "Must be over 18 years old.",
      "Eligible to include spouse and dependent children under 18.",
      "Clean criminal record and police clearance required.",
      "Must pass health checks and be free from contagious diseases.",
      "Due diligence checks required.",
      "Must provide proof of legitimate source of investment funds.",
    ],

    highlights: [
      "Prestigious European citizenship.",
      "No relocation requirement.",
      "Efficient 2–3 year processing timeline.",
      "Dual citizenship considered under Article 10(6).",
      "Includes access to EU benefits and privileges.",
    ],

    whyChoose: [
      "20+ years of experience handling Austria Citizenship applications.",
      "Strong diplomatic ties for faster approvals.",
      "100% approval-focused client prioritization process.",
      "Government-level advisory and investment consultation.",
      "Offices and legal networks in key international cities.",
    ],

    investmentOptions: [
      {
        title: "Investment in Austrian Economy",
        type: "Business or Government Contribution",
        minAmount: "€5,000,000 – €10,000,000",
        details:
          "Direct investment into Austria’s economy via joint ventures, job creation or export expansion.",
        benefits: [
          "Gain EU citizenship and retain original nationality in certain cases.",
          "Contribute to Austrian economic development.",
          "No language or residency requirement.",
        ],
        image: "/countries/austria-flagmountain.jpg",
      },
      {
        title: "Austria Private Residence Program",
        type: "Liquid Funds (Non-refundable)",
        minAmount: "€40,000+",
        details:
          "Strict quota-based residency program for approximately 300 people annually. Must have liquid funds, private real estate, health insurance, and basic German proficiency.",
        benefits: [
          "Limited to 300 applicants per year — highly exclusive.",
          "Must show financial self-sufficiency and A1 German skills.",
          "Ideal for individuals not seeking full citizenship yet.",
        ],
        image: "/countries/austria-monument.jpg",
      },
    ],
  },
  {
    id: "portugal",
    slug: "portugal",
    category: "Residency",
    name: "Portugal",
    region: "Europe",

    flag: "/flags/portugal.svg",
    imgSrc:
      "https://img.freepik.com/free-photo/aerial-drone-view-zagreb-croatia-historical-city-centre-with-multiple-old-buildings_1268-23580.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80",
    // imgSrc: "/countries/portugal.jpg",
    bgImgSrc: ["/countries/portugal-bg.jpg", "/countries/portugal-city.jpg"],

    sectionTitle: "Global Residency Programs",
    sectionDescription:
      "We’ve curated Europe’s top Global Residency programs offering a pathway to citizenship and high-quality living.",

    investmentStatement: "Invest in real estate starting from €280,000",

    description:
      "Portugal’s Golden Visa offers a pathway to EU residency and citizenship through flexible real estate and fund investment options. Applicants benefit from family inclusion, minimal stay requirements, and a high standard of living.",

    realEstate: {
      minInvestment: "€280,000",
      type: "Low-Density or Renovation Area Real Estate",
    },

    immigration: {
      timeToResidency: "4–6 months",
      visaFreeAccess: "EU Schengen Zone",
      dualCitizenshipAllowed: "Yes after 5 years of residency",
    },

    pricing: {
      realEstate: "€280,000 – €500,000",
      legalFees: "Starting at €5,000",
      governmentFees: "€5,000+ depending on family size",
    },

    benefits: [
      "EU residency with right to live, work and study.",
      "Pathway to full citizenship after 5 years.",
      "Include spouse, children, and parents.",
      "Low stay requirement (7 days per year).",
      "Visa-free travel across EU Schengen zone.",
      "High rental yield and property appreciation.",
      "Favorable tax options via NHR regime.",
      "Access to world-class healthcare and education.",
    ],

    eligibility: [
      "18+ years old with valid passport.",
      "Clean criminal record and background check.",
      "Valid medical insurance.",
      "Proof of investment funds and source.",
      "Minimum stay: 7 days/year in Portugal.",
      "Property must be held for 5 years.",
    ],

    highlights: [
      "Flexible low-stay residency path.",
      "Real estate in high-return zones.",
      "Smooth path to EU citizenship.",
    ],

    whyChoose: [
      "Portugal is one of the safest countries globally.",
      "Fast processing & family-friendly policies.",
      "Diverse investment options with long-term ROI.",
      "Easy integration, English widely spoken.",
      "Approved properties and legal guidance available.",
    ],

    investmentOptions: [
      {
        title: "Low-Density Area Real Estate",
        type: "Residential/Commercial Property",
        minAmount: "€280,000",
        details:
          "Invest in underdeveloped or renovation zones with reduced capital thresholds and high return potential.",
        benefits: [
          "Discounted rate for key regions.",
          "Property can generate rental income.",
          "Still eligible for full residency rights.",
        ],
        image: "/countries/portugal-lowdensity.jpg",
      },
      {
        title: "Capital Transfer to Fund",
        type: "Venture Capital or Innovation Fund",
        minAmount: "€500,000",
        details:
          "Invest in regulated investment funds supporting innovation, tech, or infrastructure projects in Portugal.",
        benefits: [
          "No need to manage physical property.",
          "Higher government support for fund investors.",
          "Ideal for passive long-term investors.",
        ],
        image: "/countries/portugal-vcfund.jpg",
      },
    ],
  },
  {
    id: "dominica",
    slug: "dominica",
    category: "Citizenship",
    name: "Dominica",
    region: "Caribbean",
    flag: "/flags/dominica.svg",
    imgSrc:
      "https://img.freepik.com/premium-photo/view-resort-area-mui-ne-vietnam-from-top-roof-hotel_118086-2411.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80",
    bgImgSrc: ["/countries/dominica-bg1.jpg"],
    sectionTitle: "Citizenship Program",
    sectionDescription:
      "Fast-track second passports via economic contribution or approved real estate.",
    investmentStatement: "Donation from US $100,000 or real estate ≥ $200,000",
    description:
      "Dominica’s Citizenship offers economic citizenship in ~4‑6 months via fund donation or property. Includes main applicant and dependents, no residence requirement, visa‑free to ~140 countries.",
    realEstate: {
      minInvestment: "US $200,000",
      type: "Approved resort real estate",
    },
    immigration: {
      timeToCitizenship: "4–6 months",
      visaFreeAccess: "140+ countries including UK and Schengen",
      dualCitizenshipAllowed: "Yes",
    },
    pricing: {
      donation: "US $100,000",
      realEstate: "US $200,000+",
      legalFees: "Variable",
      governmentFees: "Included",
    },
    benefits: [
      "No travel or residence requirement.",
      "Family included under standard terms.",
      "Strong visa‑free global mobility.",
      "Affordable Citizenship option.",
    ],
    eligibility: [
      "Applicants aged 18+.",
      "Clean criminal record & due diligence.",
      "Proof of legitimate source of funds.",
      "Include spouse and dependents.",
    ],
    highlights: [
      "One of the fastest Caribbean Citizenship routes.",
      "Low minimum donation.",
      "Simple and transparent legal framework.",
    ],
    whyChoose: [
      "Proven program since 1993.",
      "Strong approval reputation.",
      "Minimal bureaucracy.",
    ],
    investmentOptions: [
      {
        title: "Economic Diversification Fund",
        type: "Donation",
        minAmount: "US $100,000",
        details:
          "Direct non‑refundable contribution to the national economic fund.",
        benefits: ["Fast processing", "No real estate required"],
        image: "/countries/dominica-fund.jpg",
      },
      {
        title: "Approved Real Estate Investment",
        type: "Real Estate",
        minAmount: "US $200,000",
        details:
          "Must be property approved by government in hospitality/resort sector.",
        benefits: ["Potential rental income", "Physical asset ownership"],
        image: "/countries/dominica-property.jpg",
      },
    ],
  },
  {
    id: "stKitts",
    slug: "st-kitts-and-nevis",
    category: "Citizenship",
    name: "St. Kitts & Nevis",
    region: "Caribbean",
    flag: "/flags/stkitts.svg",
    imgSrc:
      "https://img.freepik.com/free-photo/st-john-bay-panorama-with-buildings-boats-virgin-islands_649448-1866.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80",
    bgImgSrc: ["/countries/stkitts-bg.jpg"],
    sectionTitle: "Citizenship Program",
    sectionDescription:
      "Classic Caribbean Citizenship: estate or donation, no residency requirement.",
    investmentStatement: "Donation from US $250,000 or real estate ≥ $400,000",
    description:
      "St. Kitts’ program is the first of its kind (1984). Choose donation or real estate to qualify for citizenship in ~3‑4 months. No residency needed; visa‑free access to ~157+ countries.",
    realEstate: {
      minInvestment: "US $400,000",
      type: "Government‑approved property",
    },
    immigration: {
      timeToCitizenship: "3–4 months",
      visaFreeAccess: "157+ countries",
      dualCitizenshipAllowed: "Yes",
    },
    pricing: {
      donation: "US $250,000",
      realEstate: "US $400,000+",
      legalFees: "Case‑by‑case",
      governmentFees: "Included",
    },
    benefits: [
      "Shortest processing time in Caribbean.",
      "Generous visa‑free access.",
      "No physical presence required.",
    ],
    eligibility: [
      "Applicants 18+.",
      "Dependents included.",
      "Clean record and due diligence process.",
      "Proof of funds.",
    ],
    highlights: [
      "Pioneering Citizenship program.",
      "Strong global mobility.",
      "Efficient and reputable.",
    ],
    whyChoose: [
      "First mover advantage with decades of history.",
      "Well‑structured legal framework.",
      "Low risk, high return for investors.",
    ],
    investmentOptions: [
      {
        title: "Sustainable Growth Fund Donation",
        type: "Donation",
        minAmount: "US $250,000",
        details:
          "Non‑refundable donation to government fund supporting national projects.",
        benefits: ["Simple", "Quick approval"],
        image: "/countries/stkitts-fund.jpg",
      },
      {
        title: "Approved Real Estate Purchase",
        type: "Real Estate",
        minAmount: "US $400,000",
        details:
          "Invest in government‑certified real estate (stay‑oriented developments).",
        benefits: ["Tangible asset", "Rental potential"],
        image: "/countries/stkitts-property.jpg",
      },
    ],
  },
  {
    id: "usa",
    slug: "united-states",
    category: "Residency",
    name: "United States",
    region: "North America",
    flag: "/flags/usa.svg",
    imgSrc:
      "https://img.freepik.com/free-photo/new-york-city-manhattan-aerial-view_649448-1215.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80",
    bgImgSrc: ["/countries/usa-bg.jpg"],
    sectionTitle: "EB‑5 Residency Program",
    sectionDescription:
      "Permanent Green Card through business or regional center investment.",
    investmentStatement: "Invest US $800,000–1,050,000 depending on region",
    description:
      "EB‑5 grants conditional green card within ~18–24 months to investors who inject capital into qualifying U.S. business projects and create at least 10 jobs.",
    realEstate: null,
    immigration: {
      timeToResidency: "12–24 months",
      visaFreeAccess: "US green card benefits",
      dualCitizenshipAllowed: "Yes",
    },
    pricing: {
      realEstate: null,
      directInvestment: "US $800,000 (Targeted Employment Area) or $1,050,000",
      legalFees: "Typically US $25,000+",
      governmentFees: "US $3,675 per applicant",
    },
    benefits: [
      "Permanent U.S. resident status.",
      "Work, live, study anywhere in U.S.",
      "Long‑term path to citizenship.",
      "Include spouse and children under 21.",
    ],
    eligibility: [
      "Investor aged 21+.",
      "Invest in USCIS‑approved project.",
      "Create 10 full‑time U.S. jobs.",
      "Clean record & source of funds.",
    ],
    highlights: [
      "Solid long-term U.S. residency path.",
      "High global mobility and stability.",
      "No daily life disruption.",
    ],
    whyChoose: [
      "Security and brand value of U.S. residency.",
      "Wide economic and educational opportunities.",
      "Clear path to U.S. citizenship.",
    ],
    investmentOptions: [
      {
        title: "TEA Investment",
        type: "Regional Center Project",
        minAmount: "US $800,000",
        details: "Pooled investment in job‑creating regional center projects.",
        benefits: ["Lower threshold", "Hands‑off investment"],
        image: "/countries/usa-regionalcenter.jpg",
      },
      {
        title: "Direct EB‑5 Business",
        type: "Direct Job Business",
        minAmount: "US $1,050,000",
        details: "Start or buy a business in U.S. creating 10 jobs directly.",
        benefits: ["Full control", "Flexible model"],
        image: "/countries/usa-direct.jpg",
      },
    ],
  },
  {
    id: "turkey",
    slug: "turkey",
    category: "Citizenship",
    name: "Turkey",
    region: "Europe/Asia",
    flag: "/flags/turkey.svg",
    imgSrc:
      "https://img.freepik.com/free-photo/multiple-buildings-aegean-sea-cost-with-port-kavala-greece_1268-15779.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80",
    bgImgSrc: ["/countries/turkey-bg.jpg"],
    sectionTitle: "Citizenship Program",
    sectionDescription:
      "Fast-track Turkish citizenship via real estate or capital/investment fund.",
    investmentStatement: "Real estate ≥ US $400,000 or capital ≥ US $500,000",
    description:
      "Turkey grants citizenship within ~6–9 months for investors meeting criteria: property purchase or fixed capital deposit/investment in bonds or business. No residence needed during processing.",
    realEstate: {
      minInvestment: "US $400,000",
      type: "Residential property held 3 years",
    },
    immigration: {
      timeToCitizenship: "6–9 months",
      visaFreeAccess: "110+ countries",
      dualCitizenshipAllowed: "Yes",
    },
    pricing: {
      donation: null,
      realEstate: "US $400,000",
      directInvestment: "US $500,000",
      legalFees: "Case‑specific",
      governmentFees: null,
    },
    benefits: [
      "Dual Europe‑Asia access.",
      "No language or residency requirement.",
      "Family included.",
      "Work and study rights.",
    ],
    eligibility: [
      "Applicant aged 18+.",
      "Clean criminal background.",
      "Funds source documentation.",
      "Property or capital investment held 3 years.",
    ],
    highlights: [
      "Affordable compared to European Citizenship.",
      "Flexible investment routes.",
      "Economic and geopolitical proximity benefits.",
    ],
    whyChoose: [
      "High value asset investment.",
      "Strategic geographic location.",
      "Robust legal protections.",
    ],
    investmentOptions: [
      {
        title: "Certified Real Estate Purchase",
        type: "Real Estate",
        minAmount: "US $400,000",
        details: "Government‑approved property with 3‑year hold requirement.",
        benefits: ["Asset ownership", "Family included"],
        image: "/countries/turkey-property.jpg",
      },
      {
        title: "Fixed Capital or Funds Investment",
        type: "Capital / Bonds",
        minAmount: "US $500,000",
        details:
          "Deposit in Turkish bank, government bonds, or VC fund for 3 years.",
        benefits: ["No real estate needed", "Passively held"],
        image: "/countries/turkey-fund.jpg",
      },
    ],
  },
  {
    id: "uae",
    slug: "united-arab-emirates",
    category: "Residency",
    name: "United Arab Emirates",
    region: "Middle East",
    flag: "/flags/uae.svg",
    imgSrc:
      "https://img.freepik.com/free-photo/aerial-view-dubai-city-from-top-tower_268835-1058.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80",
    bgImgSrc: ["/countries/uae-bg.jpg"],
    sectionTitle: "Residency Programs (Golden Visa)",
    sectionDescription:
      "Long‑term UAE residence via property or business investment, with zero income tax.",
    investmentStatement: "Property from AED 2 million (≈US $550,000)",
    description:
      "UAE Golden Visa grants 5‑ to 10‑year renewable residency via property purchase or business setup. Includes access to tax benefits, family inclusion, and Emirati lifestyle.",
    realEstate: { minInvestment: "AED 2,000,000", type: "Property ownership" },
    immigration: {
      timeToResidency: "2–4 months",
      visaFreeAccess: "UAE residency benefits",
      dualCitizenshipAllowed: "No (residency only)",
    },
    pricing: {
      realEstate: "AED 2M+",
      businessInvestment: "Varies",
      legalFees: "Typically AED 20,000+",
      governmentFees: "Visa & application fees apply",
    },
    benefits: [
      "Long‑term tax‑free residency.",
      "Family members included.",
      "Modern business and life infrastructure.",
      "No personal income tax.",
    ],
    eligibility: [
      "Valid passport.",
      "Invest property or register business.",
      "Clean background.",
      "Health insurance requirement.",
    ],
    highlights: [
      "Zero income tax on personal earnings.",
      "Stable, modern living environment.",
      "Anglo‑friendly business ecosystem.",
    ],
    whyChoose: [
      "Superior Middle East hub.",
      "Ideal for business nomads.",
      "Straightforward application.",
    ],
    investmentOptions: [
      {
        title: "Property Purchase",
        type: "Real Estate",
        minAmount: "AED 2,000,000",
        details: "Freehold property in approved zones.",
        benefits: ["Tax-free lifestyle", "Family eligible"],
        image: "/countries/uae-property.jpg",
      },
      {
        title: "Business or Entrepreneurship",
        type: "Business Investment",
        minAmount: "Varies",
        details: "Start a regulated business or innovation entity in UAE.",
        benefits: ["Active economic contributor", "Visa support"],
        image: "/countries/uae-business.jpg",
      },
    ],
  },
  {
    id: "greece",
    slug: "greece",
    category: "Residency",
    name: "Greece",
    region: "Europe",
    flag: "/flags/greece.svg",
    imgSrc:
      "https://img.freepik.com/free-photo/view-ancient-greek-architecture-with-temple-structure_23-2151664803.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80",
    bgImgSrc: ["/countries/greece-bg.jpg"],
    sectionTitle: "Golden Visa Residency Program",
    sectionDescription:
      "EU residency via property investment; pathway to citizenship available.",
    investmentStatement: "Real estate investment from €250,000",
    description:
      "Greece’s Golden Visa grants residency within months for property investments, with travel rights across EU Schengen and eligibility for citizenship after 7 years.",
    realEstate: {
      minInvestment: "€250,000",
      type: "Residential or commercial property",
    },
    immigration: {
      timeToResidency: "2–3 months",
      visaFreeAccess: "Schengen Area",
      dualCitizenshipAllowed: "Yes after naturalization",
    },
    pricing: {
      realEstate: "€250,000+",
      legalFees: "from €3,000",
      governmentFees: "Administrative fees apply",
    },
    benefits: [
      "Low minimum threshold for EU residency.",
      "Renewable every 5 years.",
      "Full family inclusion.",
      "Access Schengen and EU lifestyle.",
    ],
    eligibility: [
      "No minimum stay requirement.",
      "Invest in real estate meeting criteria.",
      "Clean criminal background.",
      "Funds source documentation.",
    ],
    highlights: [
      "One of the most accessible EU Golden Visas.",
      "Great rental returns in Athens and islands.",
      "Naturalization path overtime.",
    ],
    whyChoose: [
      "Affordable entry to EU residency.",
      "Property market with upside potential.",
      "Scenic, stable lifestyle.",
    ],
    investmentOptions: [
      {
        title: "Residential/Commercial Property",
        type: "Real Estate",
        minAmount: "€250,000",
        details: "Eligible property in Athens or designated zones.",
        benefits: ["Economic yield", "EU residency rights"],
        image: "/countries/greece-property.jpg",
      },
    ],
  },
  {
    id: "italy",
    slug: "italy",
    category: "Citizenship",
    name: "Italy",
    region: "Europe",
    flag: "/flags/italy.svg",
    imgSrc: "/countries/italy.jpg",
    bgImgSrc: ["/countries/italy-bg.jpg"],
    sectionTitle: "Investor Visa with Path to Citizenship",
    sectionDescription:
      "Italy offers investor visa options in exchange for capital contributions, leading eventually to naturalization after residence period.",
    investmentStatement:
      "€250,000 in innovative startups or €500,000 in approved funds",
    description:
      "Italy’s investor visa grants a 2‑year renewable residence permit for non‑EU nationals investing in government‑approved ventures. After 5+ years of legal residence applicants may naturalize.",
    realEstate: null,
    immigration: {
      timeToResidency: "2 months",
      timeToCitizenship: "5+ years of residency",
      visaFreeAccess: "Schengen/EU",
      dualCitizenshipAllowed: "Yes",
    },
    pricing: {
      directInvestment: "€250k–€500k",
      legalFees: "€5,000+",
      governmentFees: "Included",
    },
    benefits: [
      "Residency across Schengen area",
      "Family inclusion",
      "Low stay requirements initially",
    ],
    eligibility: [
      "Clean criminal record",
      "Proof of investment",
      "Health insurance",
      "Proof of funds",
    ],
    highlights: [
      "Affordable European investor visa",
      "Flexible fund or startup options",
      "Clear path to citizenship",
    ],
    whyChoose: [
      "Cultural and economic appeal",
      "Stable EU residence",
      "Lower thresholds than many Citizenship programs",
    ],
    investmentOptions: [
      {
        title: "Innovative Startup Investment",
        type: "Equity",
        minAmount: "€250,000",
        details: "Investment in certified innovative SME/startup in Italy.",
        benefits: ["Supports innovation", "Residency rights"],
        image: "/countries/italy-startup.jpg",
      },
      {
        title: "Approved Fund Investment",
        type: "Investment Fund",
        minAmount: "€500,000",
        details:
          "Investment into government-recognized venture equity or funds.",
        benefits: ["Hands-off investment", "Qualifies for visa"],
        image: "/countries/italy-fund.jpg",
      },
    ],
  },
  {
    id: "spain",
    slug: "spain",
    category: "Citizenship",
    name: "Spain",
    region: "Europe",
    flag: "/flags/spain.svg",
    imgSrc: "/countries/spain.jpg",
    bgImgSrc: ["/countries/spain-bg.jpg"],
    sectionTitle: "Citizenship‑style Program",
    sectionDescription:
      "Spain formerly offered a Golden Visa (ended April 2025) with pathway to citizenship after residency.",
    investmentStatement:
      "Invest €500,000+ in real estate, €1M+ in stocks/bonds, or €2M+ in gov’t bonds",
    description:
      "Spain’s investor visa allowed residence leading to permanent residency after 5 years and citizenship after 10 years (2 for select nationalities). Although the Golden Visa ended April 3, 2025, pending applications still retain status.",
    realEstate: {
      minInvestment: "€500,000",
      type: "Residential/commercial property",
    },
    immigration: {
      timeToResidency: "1–2 months",
      timeToPermanentResidency: "5 years",
      timeToCitizenship:
        "10 years (2 years for Latin Americans, Sephardi Jews, etc.)",
      visaFreeAccess: "Schengen/EU",
      dualCitizenshipAllowed: "Only select countries per law",
    },
    pricing: {
      realEstate: "€500,000+",
      directInvestment: "€1M+ stocks/bonds",
      governmentFees: "Dependent",
      legalFees: "Quoted",
    },
    benefits: [
      "Path to EU citizenship via Spain",
      "Family included",
      "Access to Spanish healthcare & education",
      "Visa‑free Schengen travel",
    ],
    eligibility: [
      "Must invest qualifying amount",
      "Clean criminal record",
      "Health insurance",
      "Visit Spain once first year",
    ],
    highlights: [
      "Fast residency issuance (~60 days)",
      "Low stay requirement",
      "Citizenship in 10 years (2 for select nationalities)",
    ],
    whyChoose: [
      "Strong visa-free mobility",
      "EU citizenship route",
      "Warm lifestyle and infrastructure",
    ],
    investmentOptions: [
      {
        title: "Real Estate Purchase",
        type: "Property",
        minAmount: "€500,000",
        details: "Residential or commercial property across Spain.",
        benefits: ["Residency rights", "Rental income potential"],
        image: "/countries/spain-property.jpg",
      },
      {
        title: "Bank Deposit / Stocks",
        type: "Financial Investment",
        minAmount: "€1,000,000",
        details: "Investment in Spanish business shares or bank deposit.",
        benefits: ["No real estate needed"],
        image: "/countries/spain-finance.jpg",
      },
      {
        title: "Government Bonds",
        type: "Public Debt",
        minAmount: "€2,000,000",
        details: "Purchase of government bonds held for required duration.",
        benefits: ["Passive strategy"],
        image: "/countries/spain-bonds.jpg",
      },
    ],
  },
  {
    id: "ireland",
    slug: "ireland",
    category: "Citizenship",
    name: "Ireland",
    region: "Europe",
    flag: "/flags/ireland.svg",
    imgSrc: "/countries/ireland.jpg",
    bgImgSrc: ["/countries/ireland-bg.jpg"],
    sectionTitle: "Investor Residency Program (Closed)",
    sectionDescription:
      "Ireland’s Immigrant Investor Program (IIP) offered residency for investment but closed in early 2023.",
    investmentStatement: "€1M+ into enterprises, funds or donations",
    description:
      "Ireland’s IIP (2012–2023) granted residency to investors placing €1M in qualifying investments. No new applications accepted.",
    realEstate: null,
    immigration: {
      timeToResidency: "2–3 months",
      timeToCitizenship: "5+ years legal residency",
      visaFreeAccess: "EU/Schengen after citizenship",
      dualCitizenshipAllowed: "Yes",
    },
    pricing: {
      directInvestment: "€1,000,000",
      legalFees: "€5,000+",
      governmentFees: "Nominal",
    },
    benefits: [
      "Residency for investor and family",
      "Later path to citizenship",
      "Qualifying investments in multiple categories",
    ],
    eligibility: [
      "Clean background",
      "Proven funds",
      "Investment per guidelines",
    ],
    highlights: ["No longer open since 2023."],
    whyChoose: [],
    investmentOptions: [
      {
        title: "Enterprise Investment",
        type: "Business",
        minAmount: "€1,000,000",
        details: "Investment in Irish enterprise creating jobs.",
        benefits: ["Residency rights"],
        image: "/countries/ireland-biz.jpg",
      },
    ],
  },
  {
    id: "portugal-d7",
    slug: "portugal-d7",
    category: "Residency",
    name: "Portugal (D7 Visa)",
    region: "Europe",
    flag: "/flags/portugal.svg",
    imgSrc: "https://img.freepik.com/free-photo/aerial-drone-view-zagreb-croatia-historical-city-centre-with-multiple-old-buildings_1268-23580.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80",
    bgImgSrc: ["/countries/portugal-bg.jpg"],
    sectionTitle: "D7 Passive Income Residency Visa",
    sectionDescription:
      "Residency via passive income rather than capital investment.",
    investmentStatement:
      "Proof passive income ~€8,460/year for single applicant",
    description:
      "Portugal’s D7 visa allows non-EU citizens with passive income (rental, pension, dividends) to reside in Portugal, bring family, and apply for citizenship after 5 years.",
    realEstate: null,
    immigration: {
      timeToResidency: "2–3 months",
      timeToCitizenship: "5 years",
      visaFreeAccess: "Schengen/EU",
      dualCitizenshipAllowed: "Yes",
    },
    pricing: {
      legalFees: "€3,000+",
      governmentFees: "Nominal",
      incomeProof: "At least €870/month",
    },
    benefits: [
      "No capital investment required",
      "Family inclusion",
      "Tax benefits via NHR",
      "Path to citizenship",
    ],
    eligibility: [
      "Stable passive income",
      "Clean record",
      "Health insurance",
      "Proof of accommodation",
    ],
    highlights: ["Flexible income-based option"],
    whyChoose: ["Cost-effective", "Ideal for retirees or remote workers"],
    investmentOptions: [
      {
        title: "Passive Income Visa",
        type: "Income-based",
        minAmount: "Income ≥ €8,460/year",
        details:
          "Demonstrate continuous passive income; no actual capital investment required.",
        benefits: ["Residency rights", "Passive lifestyle"],
        image: "/countries/portugal-d7.jpg",
      },
    ],
  },
  {
    id: "spain-nlv",
    slug: "spain-non-lucrative",
    category: "Residency",
    name: "Spain (Non‑Lucrative Visa)",
    region: "Europe",
    flag: "/flags/spain.svg",
    imgSrc: "https://img.freepik.com/premium-photo/barcelona_1150964-46883.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80",
    bgImgSrc: ["/countries/spain-bg2.jpg"],
    sectionTitle: "Non‑Lucrative Residency Visa",
    sectionDescription:
      "Residency without employment for financially independent applicants.",
    investmentStatement: "Proof of savings ≈ €28,000+ annually",
    description:
      "Spain’s non‑lucrative visa allows residency for those with independent means. No employment allowed; after 5 years permanent residency, 10 years for citizenship (2 years for certain nationals).",
    realEstate: null,
    immigration: {
      timeToResidency: "2–3 months",
      timeToPermanentResidency: "5 years",
      timeToCitizenship: "10 years (2 for certain nationalities)",
      visaFreeAccess: "Schengen/EU",
      dualCitizenshipAllowed: "Select cases",
    },
    pricing: {
      proofOfFunds: "≈€30k+/yr",
      legalFees: "€2k+",
      governmentFees: "Nominal",
    },
    benefits: [
      "No investment required",
      "Family included",
      "Access to Spanish healthcare",
    ],
    eligibility: [
      "Show sufficient means",
      "Private health insurance",
      "Maintain residence for 183+ days/year",
      "Clean record",
    ],
    highlights: ["Ideal for retirement or independent living"],
    whyChoose: ["Affordable path to residency", "EU living without investment"],
    investmentOptions: [
      {
        title: "Independent Means Visa",
        type: "Savings/Income",
        minAmount: "≈ €28,000+",
        details:
          "Show passive income or savings covering living expenses without working.",
        benefits: ["Residency rights", "No capital lock‑in"],
        image: "/countries/spain-nlv.jpg",
      },
    ],
  },
  {
    id: "mexico-tr",
    slug: "mexico-temporary-residency",
    category: "Residency",
    name: "Mexico (Temporary Residency)",
    region: "Latin America",
    flag: "/flags/mexico.svg",
    imgSrc: "https://img.freepik.com/free-photo/cultural-tourism_23-2147641193.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_incoming&w=740&q=80",
    bgImgSrc: ["/countries/mexico-bg.jpg"],
    sectionTitle: "Temporary Residency Visa",
    sectionDescription:
      "Temporary residency for 1‑4 years based on income or bank balances, renewable and convertible to PR.",
    investmentStatement:
      "Proof monthly income or bank balance (approx US $2,000/month)",
    description:
      "Mexico’s TR visa grants residency for 1‑4 years to financially independent applicants. After permanent residency via income or marriage, citizenship possible later.",
    realEstate: null,
    immigration: {
      timeToResidency: "1 month",
      timeToPermanentResidency: "4 years",
      timeToCitizenship: "After residency",
      visaFreeAccess: "Mexico residency benefits",
      dualCitizenshipAllowed: "Yes",
    },
    pricing: {
      incomeRequirement: "US $2,000+/mo or savings US $27,000+",
      legalFees: "Nominal",
      governmentFees: "Visa stamp, residency card",
    },
    benefits: [
      "Low‑cost path to residency",
      "Family inclusion",
      "Convert to PR, then citizenship possible",
    ],
    eligibility: [
      "Sufficient monthly income/savings",
      "No criminal record",
      "Health insurance optional",
    ],
    highlights: ["Affordable Latin‑America residency route"],
    whyChoose: ["Cost-efficient", "Fertile lifestyle option"],
    investmentOptions: [
      {
        title: "Income‑based Residency",
        type: "Financial",
        minAmount: "US $2,000/month or US $27,000 savings",
        details:
          "Show stable foreign income or savings to support living costs.",
        benefits: ["Residency rights", "Family included"],
        image: "/countries/mexico-tr.jpg",
      },
    ],
  },
];

export default countriesDB;
