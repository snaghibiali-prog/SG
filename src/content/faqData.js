export const FAQ_ITEMS = [
  {
    question: 'What equipment does Genprima support?',
    answer:
      'Genprima is currently configured for CAT (Caterpillar) gas and diesel gensets and CHP units, and INNIO Jenbacher gas engine CHP systems. Support for additional equipment brands is under development. Operators running other equipment types should contact us to discuss configuration options.',
  },
  {
    question: 'Is Genprima affiliated with CAT or INNIO Jenbacher?',
    answer:
      'No. Genprima is an independent software platform with no commercial affiliation with Caterpillar Inc. or INNIO Group. CAT and Jenbacher are referenced as supported equipment brands. The platform does not direct operators toward OEM service channels or OEM parts procurement.',
  },
  {
    question: 'How does the platform receive operating hour data?',
    answer:
      'Genprima accepts operating hour data via RTU connection or live API feed from your existing data infrastructure. Where a live feed is not available, manual hour entry is supported. The maintenance interval logic operates identically regardless of how operating hours are submitted.',
  },
  {
    question: 'What happens if I have a mixed fleet — both CAT and Jenbacher units?',
    answer:
      'Mixed fleets are supported. Each generator is configured individually on the platform with its own service template, inspection parameters, and parts catalogue. CAT and Jenbacher units are managed within separate template structures reflecting their different maintenance requirements. Both appear in the same fleet dashboard.',
  },
  {
    question: 'Is the platform subscription per generator or per company?',
    answer:
      'Pricing is based on the number of active generators on the platform. Contact us for current pricing and options for larger fleet sizes or multi-site operations.',
  },
  {
    question: 'What is included in the platform subscription?',
    answer:
      'The platform subscription includes access to the full maintenance management system — interval tracking, live data integration, inspection logging, part change recording, fleet dashboard, and all standard platform features. Parts procurement and advisory services are separate and priced independently.',
  },
  {
    question: 'Does Genprima replace my existing CMMS?',
    answer:
      'Genprima is purpose-built for CHP and genset maintenance management and is not a general-purpose CMMS. Operators using a general CMMS for broader facility maintenance may choose to run Genprima in parallel for their generating equipment, given its specific configuration for this equipment category.',
  },
  {
    question: 'How is the platform deployed? Is it cloud-based?',
    answer:
      'Genprima is a cloud-based SaaS platform. There is no on-premise installation required. Access is via web browser. No client-side software installation is needed.',
  },
  {
    question: 'How does parts procurement work?',
    answer:
      'When the platform identifies a component approaching its replacement interval, the operator can request procurement support directly through the platform. Genprima sources OEM and quality aftermarket options, advises on the appropriate choice, and manages the order through to delivery. Procurement is a separate transactional service, not included in the platform subscription.',
  },
  {
    question: 'What are the advisory services and how are they priced?',
    answer:
      'Advisory services cover plant and system design, engine selection, performance optimisation, and troubleshooting and diagnostics. Each engagement is scoped and priced individually based on the work required. Advisory services are not subscription-based. Contact us with your requirements to receive a scope and fee proposal.',
  },
  {
    question: 'How does the distributor model work?',
    answer:
      'Genprima appoints one exclusive distributor per country. The distributor operates as the sole licensed channel for the Genprima platform in their territory. Genprima does not sell directly to operators in active distributor territories. Interested organisations should submit an enquiry through the Distribution Partners page.',
  },
  {
    question: 'What data do I need to provide to onboard a generator?',
    answer:
      'Generator onboarding requires the equipment datasheet for the specific model. The platform administrator uses this to configure the service template, inspection parameters, and parts catalogue for the unit. This is a one-time process per generator. Ongoing data input comes from RTU or API feeds and operator-submitted log entries.',
  },
  {
    question: 'Is my operational data secure?',
    answer:
      "All data is stored on secure cloud infrastructure. Operators retain ownership of their operational data. Data is not shared with equipment manufacturers, OEM service networks, or third parties without the operator's explicit consent.",
  },
];
