// All site content lives here. Edit freely — components read from these objects.

export const profile = {
  name: 'Manasa Rapuru',
  fullName: 'Manasa Rapuru', // shown on the curved text around the hero avatar
  initials: 'MR',
  title: 'Scientific software engineer',
  role: 'Scientific software engineer',
  email: 'manu.rapuru@gmail.com',
  // Hero statement: the first entry is the headline; each of the rest is a smaller line beneath it.
  // The headline also plays word by word in the intro. Phrases in **double asterisks** are highlighted.
  statement: [
    'Scientific Software Built with **Science**, **Technology** and **Design** at Its Core.',
    'Examining where systems and their audiences fall out of sync.',
    'Developing solutions that make complex interactions more intuitive, accessible, and effective.',
  ],
  bio:
    'I sit between the bench and the codebase. My background spans molecular diagnostics, neurodegenerative disease research and microbiology, and I now build the tools that make that science faster: pipelines, analysis apps and AI-assisted workflows designed around how scientists actually work.',
  facts: [
    { label: 'Focus', value: 'Bioinformatics tools, AI-assisted workflows, scientist-facing UX' },
    { label: 'Experience', value: 'Molecular diagnostics, neurodegenerative disease, microbiology' },
    { label: 'Builds with', value: 'Python, React, Snakemake, AWS, LLM agents' },  ],
};

// Shown on the contact page, in the About popup and in the footer. Entries without a `url` are hidden.
// TODO: the Spotify entry is still a placeholder. Replace its `handle` and `url` with the podcast's.
export const socials = [
  { id: 'linkedin', label: 'LinkedIn', handle: 'Manasa Rapuru', url: 'https://www.linkedin.com/in/manasa-rapuru-b10914126' },
  { id: 'spotify', label: 'Spotify', handle: '@yourpodcast', url: 'https://open.spotify.com/' },
  { id: 'tiktok', label: 'TikTok', handle: '@taughtillustrated', url: 'https://www.tiktok.com/@taughtillustrated' },
];

// The story carousel between the hero and the explorer: the problem → why it's hard → how I work → beyond software.
// `pose` sets what the guide avatar holds: question | scale | bulb | orbit | wave.
// `caption` is what the guide "says" while that slide is showing.
// `examples` name the projects (by id) that show the point in practice; each links to its case study.
export const story = [
  {
    id: 'problem',
    label: 'The problem',
    pose: 'question',
    caption: 'Here’s a gap I keep seeing.',
    title: 'Lost in translation.',
    body: [
      'Scientific software often has what its users need, but not in a form that matches how they think. The capability exists and still stays out of reach.',
    ],
    examples: [
      {
        project: 'alzheimers',
        text: 'The data sat in individual files with no way to draw insight across them. The platform was built to connect them.',
      },
    ],
  },
  {
    id: 'challenge',
    label: 'Why it’s hard',
    pose: 'scale',
    caption: 'Closing it isn’t simple.',
    title: 'A careful balance.',
    body: [
      'Closing that gap means balancing how researchers work and think against what is technically feasible, scalable, and maintainable. Simplify too far and the depth they rely on is lost.',
    ],
    examples: [
      {
        project: 'data-access',
        text: 'I turned a recurring bioinformatics request into a self-service workflow: simple enough for the team to use in their own terms, without giving up the accuracy and reliability of the analysis behind it.',
      },
    ],
  },
  {
    id: 'approach',
    label: 'How I work',
    pose: 'orbit',
    caption: 'So here’s how I work.',
    title: 'My breadth allows me to weigh different principles and adapt my judgment.',
    body: [
      'Drawing from biological science, computer science, artificial intelligence and human-computer interaction, I weigh the principles of each and adapt my approach when designing solutions.',
    ],
    examples: [
      { project: 'rag-metadata', text: 'Brings the context a dataset needs into a conversation.' },
      { project: 'academy-volunteer', text: 'Interface testing and curated descriptions for a natural history archive.' },
      { project: 'posters', text: 'A plain-language AI companion for scientific posters.' },
    ],
  },
  {
    id: 'beyond',
    label: 'Beyond software',
    pose: 'wave',
    caption: 'And it doesn’t stop at software.',
    title: 'The same lens, other mediums.',
    body: [
      'The gap between a subject and its audience isn’t unique to software. I apply the same thinking wherever science needs to reach people: in conversation, and in pictures.',
    ],
    examples: [
      { project: 'podcast', text: 'Combining practices from psychology, public health, and biotech to make communication more accessible.' },
      { project: 'art', text: 'Animations that illustrate biological concepts.' },
    ],
  },
];

// The disconnects the projects address. Order = clockwise from the top of the orbit.
// Each project names one of these in its `theme`, or several as an array.
export const themes = [
  { id: 'access', label: 'Access', line: 'Expertise → people who need it', color: '#0E7490' },
  { id: 'context', label: 'Context', line: 'Data → the information needed to understand it', color: '#1D4ED8' },
  { id: 'interpretation', label: 'Interpretation', line: 'Questions → analyses that answer them', color: '#6D28D9' },
  { id: 'navigation', label: 'Navigation', line: 'Complexity → structures that make it manageable', color: '#B45309' },
  { id: 'communication', label: 'Communication', line: 'Research → the audience it needs to reach', color: '#BE185D' },
];

// How far along a piece of work is; each project names one in its `status`.
// Concept means a thought exercise that was never built.
export const statuses = [
  { id: 'live', label: 'Live', color: '#15803D' },
  { id: 'staging', label: 'Staging', color: '#B45309' },
  { id: 'concept', label: 'Concept', color: '#64748B' },
];

// The broad skill areas, shown in the About popup; each opens a popup of its own.
export const skills = [
  {
    id: 'domain',
    label: 'Domain',
    name: 'Domain science',
    color: '#0E7490',
    summary:
      'Hands-on lab experience in molecular diagnostics, neurodegeneration and microbiology. I can read the protocol, talk to the bench scientist, and know which number actually matters.',
    tools: ['Assay development', 'CRISPR screens', 'qPCR & NGS', 'Plate-based assays'],
  },
  {
    id: 'bioinfo',
    label: 'Bioinfo',
    name: 'Bioinformatics',
    color: '#BE185D',
    summary:
      'Reproducible pipelines and analyses for sequencing data, from raw reads to a ranked list a biologist can act on.',
    tools: ['Snakemake', 'samtools', 'IGV', 'MAGeCK', 'Biopython'],
  },
  {
    id: 'data',
    label: 'Data',
    name: 'Data & analysis',
    color: '#1D4ED8',
    summary:
      'Clean data models, sound statistics and QC metrics that hold up when a result is questioned.',
    tools: ['pandas', 'SQL', 'Statistics', 'QC metrics'],
  },
  {
    id: 'computing',
    label: 'Computing',
    name: 'Scientific computing',
    color: '#475569',
    summary:
      'Running heavy workloads reliably on shared clusters and in containers, without the scientist needing to know how.',
    tools: ['Linux', 'SLURM', 'Docker', 'Bash'],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    name: 'Cloud infrastructure',
    color: '#B45309',
    summary:
      'Serverless and batch infrastructure on AWS that scales with the lab and stays cheap when it is idle.',
    tools: ['AWS S3', 'AWS Batch', 'Lambda', 'Infrastructure as code'],
  },
  {
    id: 'software',
    label: 'Software',
    name: 'Software engineering',
    color: '#15803D',
    summary:
      'Production-quality Python services and React front ends, with the tests and reviews that keep them that way.',
    tools: ['Python', 'React', 'TypeScript', 'REST APIs', 'Testing'],
  },
  {
    id: 'ai',
    label: 'AI & ML',
    name: 'AI & machine learning',
    color: '#6D28D9',
    summary:
      'LLM agents and ML models applied where they genuinely save a scientist time, with evaluation so you know when to trust them.',
    tools: ['LLM agents', 'Retrieval (RAG)', 'Evaluation', 'scikit-learn'],
  },
  {
    id: 'product',
    label: 'Product',
    name: 'Product & UX',
    color: '#0F172A',
    summary:
      'User research with scientists, fast prototypes, and interfaces that turn a complex workflow into an obvious one.',
    tools: ['User interviews', 'Prototyping', 'Figma', 'Information architecture'],
  },
];

// `skills` lists the tools and methods used, by name; they show as tags in the popup and as filter options.
// `stat` is optional: a before/after figure shown at the top of the project popup.
// `meta` is optional: a short line of context shown under the tagline in the project popup.
// `details` is optional: the blocks shown in the project popup, in order.
// A block is either `{ group }` (starts a new tab; blocks before the first group go under "Overview") or a section
// with an optional `heading` plus any of:
//   `text` (a string or an array of paragraphs; wrap a phrase in **double asterisks** to bold it),
//   `list` (numbered), `bullets`, `chips`, `table` (label/value rows; a row may have `items` instead of `value`), `after` (closing paragraph or paragraphs),
//   `quotes` (shown after `after`), `closing` (paragraphs after the quotes), `socials` (ids of social links),
//   `stages` (numbered steps; each has a `title`, the same content fields as a section, and optionally
//   `practices`, of which only the disciplines are shown, and `personas`).
// `callout: true` sets a section apart.
export const projects = [
  {
    id: 'data-access',
    status: 'live',
    theme: 'access',
    kind: 'Project',
    title: 'Self-Service Tool to Enable Cross-Team Data Access',
    tagline: 'Removing the handoff between the people who hold data and the people who need it',
    skills: ['Bioinformatics', 'SQL', 'Linux', 'Python', 'Streamlit', 'FastAPI', 'Flow diagram', 'Personal interview'],
    stat: { from: 'Up to 2 days', to: 'Under 1 minute', label: 'Turnaround for a recurring data request' },
    details: [
      {
        heading: 'Product',
        text: 'A self-service application that enables a customer-facing team to access the data they need without relying on bioinformatics to retrieve it.',
      },
      {
        heading: 'Challenge',
        text: [
          'When specialized expertise is separated from the people who need it, cross-functional dependencies can turn capabilities into support requests.',
          'In this case, the customer-facing team knew what data they needed but depended on bioinformatics to generate it. Even straightforward requests could take days to complete, creating a one-directional dependency between the teams.',
        ],
      },
      {
        heading: 'Intervention',
        text: [
          'I turned a recurring bioinformatics request into a self-service workflow, bringing the technical capability closer to the people who needed it.',
          'Rather than requiring the customer-facing team to understand how the underlying workflow worked, I translated that complexity into an interface built around how they already thought about their requests.',
        ],
      },
      {
        heading: 'What it revealed',
        text: [
          'Not every cross-functional dependency needs another handoff. Sometimes the better intervention is to make specialized capabilities accessible enough that teams can use them directly.',
          'The project also revealed that reducing a dependency does not necessarily mean removing the expertise behind it. The bioinformatics knowledge remained embedded in the workflow while the need for bioinformatics to manually fulfill each request was reduced.',
        ],
      },
      { group: 'How I approached it' },
      {
        heading: 'Design question',
        text: 'How might we make an existing technical capability accessible to the people who need it, without requiring them to become experts in how it works?',
        callout: true,
      },
      {
        heading: 'Design goals',
        list: [
          'Enable the customer-facing team to generate the data independently',
          'Reduce recurring handoffs between teams',
          'Translate the existing technical workflow into terms users already understand',
          'Preserve the accuracy and reliability of the underlying analysis',
          'Create a workflow that could adapt to related internal use cases',
        ],
      },
      {
        heading: 'Hybrid workflow',
        text: [
          'I owned every stage of the work, from understanding stakeholders to evaluating the outcome. Rather than treating the user’s mental model, the science and data, and the technical implementation as separate stages, I moved between them throughout.',
          'That meant understanding what users were trying to accomplish, identifying the bioinformatics workflow behind it, deciding what to expose or abstract, and shaping that capability into a workflow users could operate themselves.',
        ],
        stages: [
          {
            title: 'Understand stakeholders',
            text: 'I interviewed people on both sides of the request and mapped who owned, used and supported the workflow. Two personas captured how differently each team experienced the same handoff.',
            practices: [
              { name: 'Stakeholder interviews / conversations', discipline: 'UX / Product', helps: 'Who is affected, what they need, what constraints exist' },
              { name: 'Personas / user profiles', discipline: 'UX', helps: 'Different needs, goals, expertise, and mental models' },
              { name: 'Stakeholder mapping', discipline: 'Product / UX', helps: 'Who owns, uses, supports, or is affected by the workflow' },
            ],
            personas: [
              {
                name: 'Alex M.',
                role: 'The Requester',
                team: 'Customer-facing team',
                color: '#1D4ED8',
                goals: [
                  'Get data in time to answer clients',
                  'Work without depending on another team',
                  'Trust that the data is accurate and current',
                ],
                pains: [
                  'Waits 1–3 days for each request',
                  'Re-explains the context every time',
                  'Gets the wrong data when a request is misread',
                  'Feels like a burden raising tickets',
                ],
              },
              {
                name: 'Sam R.',
                role: 'The Responder',
                team: 'Bioinformatics team',
                color: '#6D28D9',
                goals: [
                  'Protect time for high-value scientific work',
                  'Cut repetitive manual data pulls',
                  'Deliver results without ambiguity',
                ],
                pains: [
                  'Spends 40% of their time on routine retrieval',
                  'Reworks requests when requirements are unclear',
                  'Loses deep-analysis time to interruptions',
                  'Has no single source of truth for requests',
                ],
              },
            ],
          },
          {
            title: 'Understand the existing system',
            text: 'I charted the current request workflow to see where decisions and handoffs occurred, then traced how the data moved through the bioinformatics pipeline. Observing the work in practice surfaced the transformations, assumptions and validation steps the analysis depended on.',
            practices: [
              { name: 'Current-state workflow / flowchart', discipline: 'UX / Engineering', helps: 'Where information, decisions, and handoffs occur' },
              { name: 'Data-flow diagram', discipline: 'Engineering / Bioinformatics', helps: 'How data moves technically through the system' },
              { name: 'Workflow observation / contextual inquiry', discipline: 'UX / Science', helps: 'How the work actually happens versus how people describe it' },
              { name: 'Scientific workflow analysis', discipline: 'Bioinformatics / Science', helps: 'What transformations, assumptions, and validation steps are required' },
            ],
          },
          {
            title: 'Define the intervention',
            text: 'I framed the problem around what requesters were ultimately trying to accomplish, gathered what the system had to do, and prioritized what belonged in the first version.',
            practices: [
              { name: 'Problem framing', discipline: 'Product / UX', helps: 'What problem are you actually solving?' },
              { name: 'Jobs-to-be-done / user goals', discipline: 'Product / UX', helps: 'What is the user ultimately trying to accomplish?' },
              { name: 'Requirements gathering', discipline: 'Product / Engineering', helps: 'What must the system actually do?' },
              { name: 'Prioritization', discipline: 'Product', helps: 'What belongs in the first version versus later?' },
            ],
          },
          {
            title: 'Translate into experience',
            text: 'I designed the path a requester would take and prototyped it before building. Technical options were expressed in the team’s own language, and complexity stayed hidden until it was needed.',
            practices: [
              { name: 'User flow', discipline: 'UX', helps: 'What path should the user take?' },
              { name: 'Information architecture', discipline: 'UX', helps: 'How should functionality be organized?' },
              { name: 'Wireframes / prototypes', discipline: 'UX / Design', helps: 'Can the idea be understood before implementation?' },
              { name: 'Progressive disclosure', discipline: 'UI/UX', helps: 'What complexity can be hidden until it is needed?' },
              { name: 'Plain-language / domain-language design', discipline: 'UX / Science', helps: 'How do you expose technical functionality in familiar terms?' },
            ],
          },
          {
            title: 'Build',
            text: 'I built the workflow in modular pieces, kept the technical complexity behind the interface, and validated that it produced the correct results.',
            practices: [
              { name: 'Modular development', discipline: 'Engineering', helps: 'How can the workflow be implemented reliably?' },
              { name: 'API/function abstraction', discipline: 'Engineering', helps: 'What technical complexity should sit behind the interface?' },
              { name: 'Validation / testing', discipline: 'Science / Engineering', helps: 'Does the implementation produce the correct result?' },
            ],
          },
          {
            title: 'Iterate',
            text: 'I ran demonstrations and usability sessions with users. Technical and stakeholder reviews confirmed the tool was scientifically sound and met the broader organizational need.',
            practices: [
              { name: 'Usability testing', discipline: 'UX', helps: 'Can people actually use it?' },
              { name: 'Demonstrations / feedback sessions', discipline: 'Product / UX', helps: 'Does the workflow match expectations?' },
              { name: 'Technical review', discipline: 'Engineering / Science', helps: 'Is the implementation scientifically and technically sound?' },
              { name: 'Stakeholder review', discipline: 'Product', helps: 'Does it satisfy the broader organizational need?' },
            ],
          },
          {
            title: 'Evaluate',
            text: 'I compared the workflow before and after the tool, measuring the change in turnaround and whether the team adopted it.',
            practices: [
              { name: 'Outcome measurement', discipline: 'Product / Science', helps: 'Did the intervention actually improve the workflow?' },
              { name: 'Adoption / usage', discipline: 'Product', helps: 'Did people actually use it?' },
              { name: 'Comparative before/after analysis', discipline: 'Product / Science', helps: 'What changed because of the intervention?' },
            ],
          },
        ],
      },
      { group: 'Outcome' },
      {
        heading: 'Stakeholder feedback',
        text: 'Feedback was gathered across the groups involved in or affected by the project.',
        table: [
          { label: 'Customer-facing team', value: 'Increased efficiency, useful, tailored to their needs, and easy to learn' },
          { label: 'Bioinformatics', value: 'Streamlined their work and addressed a necessary workflow' },
          { label: 'Subject matter experts', value: 'Useful and incorporated their considerations' },
          { label: 'PM, R&D & stakeholders', value: 'Met business requirements, added operational value, and had potential beyond the original scope' },
        ],
        after: 'The broader stakeholder feedback also surfaced potential use for other internal workflows, suggesting that the intervention could function as more than a solution to a single recurring request.',
      },
      {
        heading: 'Result',
        text: [
          'The application reduced the turnaround for a recurring data request from up to two days to under one minute, while enabling the customer-facing team to access the data independently.',
          'The result was not simply a faster workflow. It shifted where the capability lived: from a recurring request fulfilled by a specialized team to a capability that the requesting team could access directly.',
        ],
      },
    ],
  },
  {
    id: 'rag-metadata',
    status: 'staging',
    theme: 'context',
    kind: 'Project',
    title: 'RAG-Powered Chatbot for Metadata Generation and Dataset Exploration',
    tagline: 'Letting researchers ask about data in their own words, not the system’s',
    skills: ['RAG', 'LLM', 'Python', 'FastAPI', 'React.js', 'User feedback', 'Flow diagram'],
    details: [
      {
        heading: 'Product',
        text: 'A context-aware RAG chatbot that generates metadata and enables users to query and understand datasets through conversations tailored to their use case.',
      },
      {
        heading: 'Challenge',
        text: [
          'Data can exist without being meaningfully accessible. Raw datasets often contain valuable information, but without sufficient context, descriptions, structure, or guidance, users may struggle to understand what the data represents, how it should be interpreted, or how to use it.',
          'In this case, the information needed to make the datasets useful was distributed across the data itself and the knowledge required to interpret it, making users dependent on manual interpretation and existing subject-matter knowledge.',
        ],
      },
      {
        heading: 'Intervention',
        text: [
          'I used a RAG-based conversational interface to bring contextual information closer to the data, generating metadata and allowing users to ask questions in terms of their own use case.',
          'Rather than requiring users to navigate raw datasets or locate documentation separately, the system connected the underlying information with contextual explanations through conversation.',
        ],
      },
      {
        heading: 'What it revealed',
        text: [
          'Making data accessible is not only about making it available. The context surrounding data can be just as important as the data itself.',
          'When context, metadata, and interpretation are separated from the dataset, users have to reconstruct that context themselves. Embedding it into the experience can make existing data easier to understand, navigate, and act on.',
        ],
      },
      { group: 'How I approached it' },
      {
        heading: 'Design question',
        text: 'How might we make datasets understandable and actionable by bringing the context users need into the experience itself?',
        callout: true,
      },
      {
        heading: 'Design goals',
        list: [
          'Make datasets easier to understand without requiring users to inspect raw data or documentation independently',
          'Generate useful metadata and contextual descriptions',
          'Allow users to ask questions using language relevant to their specific use case',
          'Connect conversational responses back to the underlying data and source context',
          'Reduce the manual effort required to interpret and explore datasets',
          'Preserve the reliability and traceability of the information provided',
        ],
      },
      {
        heading: 'Hybrid workflow',
        text: 'Understand → Structure → Retrieve → Converse → Validate → Iterate',
        stages: [
          {
            title: 'Understand',
            text: 'I talked with users and subject matter experts to identify what information was needed to interpret and use the datasets.',
          },
          {
            title: 'Structure',
            text: 'I examined the datasets, existing documentation, terminology, and metadata to understand what context existed and where the gaps were.',
          },
          {
            title: 'Retrieve',
            text: 'I designed the RAG workflow to retrieve relevant contextual information rather than relying on the model to generate answers from memory.',
          },
          {
            title: 'Converse',
            text: 'I shaped the chatbot around users’ questions and use cases, allowing them to explore the dataset through natural-language interaction.',
          },
          {
            title: 'Validate',
            text: 'I evaluated whether responses were useful, contextually appropriate, and grounded in the underlying information.',
          },
          {
            title: 'Iterate',
            text: 'I refined the metadata, retrieval strategy, prompts, and conversational experience based on user and subject-matter feedback.',
          },
        ],
      },
      { group: 'Outcome' },
      {
        heading: 'Result',
        text: 'The chatbot improved data comprehension and usability by bringing contextual information into the user’s interaction with the dataset. It reduced the need for users to manually piece together metadata and documentation and created a more accessible path from raw data to understanding and downstream use.',
      },
    ],
  },
  {
    id: 'alzheimers',
    status: 'live',
    theme: 'interpretation',
    kind: 'Project',
    title: 'Visualization Platform for Alzheimer’s Disease Research',
    tagline: 'Organizing complex disease data around the questions researchers actually ask',
    skills: ['Neurodegenerative disease research', 'HTML', 'CSS', 'JavaScript', 'Plotly.js', 'Python'],
    details: [
      {
        heading: 'Product',
        text: [
          'A visualization platform for exploring human postmortem brain RNA-seq data related to APOE4 and Alzheimer’s disease.',
          'The broader project was a collaborative effort, with team members working across different parts of the data analysis and platform. **My contribution focused on designing and implementing the front end of the visualization platform**, including how the different analysis types were organized, presented, and made interactive for researchers without programming backgrounds.',
          'The platform brought together gene expression, differential expression, and pathway-level analyses into a single exploratory environment.',
        ],
      },
      {
        heading: 'Challenge',
        text: 'The project incorporated several types of analyses, each answering a different scientific question.',
        table: [
          { label: 'CPM', value: 'What is the level of expression of this gene?' },
          { label: 'Differential expression', value: 'In which phenotypes or genotypes is my gene differentially expressed?' },
          { label: 'Pathway enrichment', value: 'Which biological pathways are associated with these changes?' },
          { label: 'Leading-edge analysis', value: 'Which genes are contributing most strongly to the enrichment of a pathway?' },
        ],
        after: [
          'Because different team members were responsible for different parts of the analysis, the resulting data also differed in structure, inputs, outputs, and appropriate visualizations.',
          'From a front-end perspective, this created a challenge: **how could these different analyses be brought together into one interface without making users understand the technical structure behind them?** The intended users included lab members without programming backgrounds who needed to explore the results independently.',
        ],
      },
      {
        heading: 'Intervention',
        text: [
          '**I designed and coded the front end around the scientific questions each analysis was intended to answer.** My role was to understand what each analysis represented and translate that understanding into an interactive interface.',
          'Rather than exposing the underlying datasets and analysis structure directly, I organized the experience around the questions a researcher might have.',
          'Because each analysis required different inputs and produced different outputs, I implemented **dynamic dropdowns and controls** that changed according to the selected analysis or inquiry. This allowed users to interact with the appropriate data without having to understand how the underlying analysis had been generated.',
          'The interaction model followed: **Research question → Analysis → Relevant controls → Visualization → Exploration**',
        ],
      },
      {
        heading: 'What it revealed',
        text: [
          'Working on the front end showed me that scientific visualization is not simply about choosing the right chart. The interface has to account for **what the analysis means, what question it answers, and how a researcher expects to interact with that information.**',
          'In this project, different analyses represented different ways of examining the same biological system. My role was to connect those analytical differences to the user’s experience.',
          'It reinforced an important principle in my work: **The structure of the interface should reflect the way people use the information, not simply the way the data happens to be stored.**',
        ],
      },
      { group: 'How I approached it' },
      {
        heading: 'Design question',
        text: 'How might we organize different types of genomic analyses around the questions researchers actually want to answer?',
        callout: true,
      },
      {
        heading: 'Design goals',
        list: [
          'Make complex analysis results accessible to researchers without programming backgrounds',
          'Bring multiple analysis types into a coherent exploration experience',
          'Make the purpose of each analysis understandable',
          'Present only the controls relevant to the selected inquiry',
          'Connect each scientific question to the appropriate data and visualization',
          'Allow users to explore results without needing to understand the underlying code or data structure',
        ],
      },
      {
        stages: [
          {
            title: 'Understanding the analyses',
            text: 'Although the project was divided among multiple team members, I needed to understand the purpose and output of the analyses I was integrating into the front end. I mapped each analysis to the question it could answer:',
            table: [
              { label: 'What is the gene’s level of expression?', value: '**CPM** · Gene expression' },
              { label: 'Where is my gene differentially expressed?', value: '**DEG** · Differences across phenotypes or genotypes' },
              { label: 'Which pathways are associated with these changes?', value: '**GSEA** · Pathway enrichment' },
              { label: 'Which genes contribute most to the pathway signal?', value: '**Leading edge** · Genes driving enrichment' },
            ],
            after: 'This became the basis for how I structured the user experience.',
          },
          {
            title: 'Translating analysis into interaction',
            text: 'Each analysis had different data and comparison dimensions, so I designed the controls around the specific inquiry.',
            table: [
              { label: 'Gene expression', value: 'Select a gene → select the relevant context → view expression' },
              { label: 'Differential expression', value: 'Select a gene → select phenotype or genotype comparison → view differential expression' },
              { label: 'Pathway analysis', value: 'Select a pathway or gene set → explore enrichment → investigate contributing genes' },
            ],
            after: 'The interface therefore guided users toward the information relevant to their current question instead of presenting every possible dataset and control simultaneously.',
          },
          {
            title: 'Dynamic interface design',
            text: [
              'One of the main front-end challenges was that the appropriate controls differed depending on the analysis being explored. I implemented dynamic dropdowns and interface elements so that the available options changed according to the selected inquiry.',
              'This allowed one platform to support multiple analysis types while keeping the individual workflows focused. The goal was to make the complexity of the underlying data **conditional rather than constantly visible**.',
            ],
          },
          {
            title: 'Visualization',
            text: 'Different analyses also required different visual representations, including:',
            chips: ['Box plots', 'Line graphs', 'Heat maps', 'Gene expression views', 'Pathway-level visualizations'],
            after: 'My focus was not simply on displaying these plots, but on determining **where they belonged in the user’s exploration flow and what interaction should lead to them.** The visualization became the output of a question-driven interaction rather than the starting point.',
          },
          {
            title: 'Front-end implementation',
            text: 'I translated the information architecture and interaction model into the working front end. This involved:',
            bullets: [
              'Structuring the analysis-specific views',
              'Implementing dynamic controls',
              'Connecting user selections to the appropriate data views',
              'Building the interaction flow between analysis types',
              'Integrating the visualizations into the interface',
              'Iterating on the front end as the underlying analysis and data structures evolved',
            ],
            after: 'Because the project was collaborative, this also required coordinating with team members responsible for the underlying analyses and data.',
          },
          {
            title: 'Iteration and feedback',
            text: 'I demonstrated the interface and iterated based on feedback from the team and intended users. This helped refine:',
            bullets: [
              'How analyses were grouped',
              'Which controls appeared for each inquiry',
              'How terminology was presented',
              'How users moved between different analytical perspectives',
              'How much information was displayed at each stage',
            ],
            after: 'The front end evolved alongside the analysis, rather than being treated as a final layer added after the scientific work was complete.',
          },
        ],
      },
      { group: 'Outcome' },
      {
        heading: 'Result',
        text: [
          'My contribution turned multiple types of analysis into a **coherent front-end exploration experience**.',
          'Lab members without programming backgrounds could interact with the available RNA-seq analyses through a unified interface rather than working directly with fragmented analysis outputs.',
          'The project demonstrated my ability to work at the intersection of **scientific understanding, information architecture, interaction design, visualization, and front-end development**.',
        ],
      },
      {
        heading: 'My role',
        text: [
          '**Front-end Developer · Scientific UX**',
          'I worked with the broader project team to understand the purpose and structure of different genomic analyses, then designed and implemented the front-end experience that connected those analyses to the questions users were trying to answer.',
        ],
      },
    ],
  },
  {
    id: 'ucsc',
    status: 'live',
    theme: 'navigation',
    kind: 'Project',
    title: 'UCSC Genome Browser Reimagined',
    tagline: 'Surfacing powerful features that already exist but are hard to find',
    skills: ['Claude', 'Figma', 'React.js', 'Heuristic evaluation', 'Survey design'],
    meta: 'Independent · Live front-end prototype for trying the interactions; no backend',
    details: [
      {
        heading: 'Product',
        text: [
          'A self-initiated redesign of the UCSC Genome Browser exploring how a tool used daily by researchers could be made less cognitively demanding while preserving the depth and functionality users rely on.',
          'I independently identified the design challenge, evaluated the existing interface, redesigned the experience, built the prototype in React, and tested the concept with users.',
        ],
      },
      {
        heading: 'Challenge',
        text: [
          'The UCSC Genome Browser is a powerful scientific tool containing extensive genomic information and functionality. However, its density and complexity can create a steep learning curve, particularly for users who are not already familiar with how the interface is organized.',
          'The challenge raised a question for me: **Is this friction an inherent consequence of a complex scientific tool, or could some of it be addressed through design?**',
          'My evaluation suggested that the issue was not a lack of functionality, but **how that functionality was presented**. Dense information, limited visual hierarchy, unclear active states, and a lack of contextual guidance could increase the cognitive effort required to navigate the tool.',
          'This meant that users could end up spending mental effort understanding the interface on top of the scientific task they were trying to accomplish.',
        ],
      },
      {
        heading: 'Intervention',
        text: [
          'I redesigned the interface around the idea that **complexity does not necessarily need to be removed; it needs to be structured.**',
          'I explored changes to:',
        ],
        chips: [
          'Information hierarchy',
          'Progressive disclosure',
          'Active states',
          'Contextual labels and descriptions',
          'Track organization',
          'Navigation',
          'Context-aware guidance',
          'Responsive behavior',
        ],
        after: [
          'Rather than removing the depth that makes the Genome Browser valuable, I focused on making the existing functionality easier to navigate and understand.',
          'I then implemented the redesigned experience as a React prototype so that the interaction model could be experienced rather than evaluated only as static mockups.',
        ],
      },
      {
        heading: 'What it revealed',
        text: [
          'This exploration suggested that the core usability challenge was not necessarily **too much functionality, but density without sufficient hierarchy.** Small structural changes had an outsized effect on how navigable the interface felt.',
          'Progressive disclosure reduced the amount of information users had to process at once. Visible active states helped users understand where they were. Contextual descriptions helped explain unfamiliar sections without removing functionality for experienced users.',
          'The project also reinforced something I had begun noticing in scientific software more broadly: **A tool can contain everything a researcher needs and still create friction if the interface does not help users understand where they are, what they can do, and what is relevant at that moment.**',
        ],
      },
      { group: 'How I approached it' },
      {
        heading: 'Design question',
        text: 'How might we reduce the cognitive load of navigating a complex scientific tool without reducing the depth that makes it useful?',
        callout: true,
      },
      {
        heading: 'Design goals',
        list: [
          'Reduce unnecessary cognitive load',
          'Improve navigation and information hierarchy',
          'Make the current state of the interface more apparent',
          'Provide context without overwhelming the user',
          'Help less experienced users understand the interface',
          'Preserve functionality and depth for experienced researchers',
          'Explore whether small structural changes could meaningfully improve usability',
        ],
      },
      {
        stages: [
          {
            title: 'Independent problem framing',
            text: [
              'Unlike my collaborative scientific software projects, this exploration began with a problem I identified independently.',
              'I used my familiarity with bioinformatics workflows and the Genome Browser to question whether the friction I experienced was an unavoidable consequence of scientific complexity or a design problem that could be addressed.',
              'Rather than beginning with a predefined product requirement, I framed the problem myself and used the existing interface as the starting point for investigation.',
            ],
          },
          {
            title: 'Heuristic evaluation',
            text: 'I conducted a heuristic evaluation of the existing interface to identify sources of friction in areas such as:',
            chips: [
              'Hierarchy',
              'Navigation',
              'Visibility of system state',
              'Information density',
              'Context and guidance',
              'Consistency',
              'Discoverability',
            ],
            after: [
              'This helped turn a general sense that the interface felt overwhelming into specific design opportunities.',
              'The evaluation led me to focus on **how information was structured and revealed**, rather than attempting to redesign the tool by simply making it visually simpler.',
            ],
          },
          {
            title: 'Redesign',
            text: 'I translated the findings from the evaluation into a redesigned interaction model.',
            table: [
              { label: 'Progressive disclosure', value: 'Rather than presenting all available information and controls simultaneously, I explored ways to reveal information when it became relevant.' },
              { label: 'Active state', value: 'I made the user’s current selections and active tracks more visually apparent so that users could more easily understand the state of the browser.' },
              { label: 'Contextual guidance', value: 'I introduced descriptions that changed with the user’s interaction, providing additional context without requiring users to leave the workflow or consult external documentation.' },
              { label: 'Hierarchy', value: 'I reorganized the interface so that primary actions, selected tracks, supporting information, and secondary controls had clearer visual relationships.' },
            ],
          },
          {
            title: 'Front-end implementation',
            text: [
              'I built the redesigned concept in **React**. Implementing the design allowed me to test the interaction model as a working interface rather than relying solely on static screens.',
              'It also allowed me to explore how the design principles translated into actual states and interactions, including dynamic track information, active selections, responsive behavior, and contextual guidance.',
            ],
          },
          {
            title: 'Prototype review',
            text: 'I conducted a directional user review with **3 users** using a 5-point scale and Google Forms.',
            table: [
              { label: 'Interface clarity', value: '**4.7 / 5**' },
              { label: 'Task confidence', value: '**4.3 / 5**' },
              { label: 'Layout guidance', value: '**4.7 / 5**' },
              { label: 'Users preferring the redesign over the original', value: '**100%**' },
            ],
            after: 'Users also highlighted specific changes that affected their experience:',
            quotes: [
              'Less crowded — I didn’t have to refresh the page to show tracks.',
              'Updated interface, and responsive.',
              'Descriptions for each section help novices and serve as a refresher for familiar users. It updates automatically when you adjust a track.',
            ],
            closing: 'These comments were particularly useful because they connected the quantitative feedback to specific design decisions.',
          },
        ],
      },
      { group: 'Outcome' },
      {
        heading: 'Result',
        text: [
          'The prototype review provided directional evidence that the redesigned hierarchy and contextual interactions made the interface feel easier to navigate.',
          'The results were not intended to be a conclusive usability study. With three users, the sample was too small to generalize broadly. Instead, the review helped validate the direction and identify which changes were worth pursuing further.',
          'The exploration ultimately shifted my understanding of the problem: **The goal was not to make a complex scientific tool simple. It was to make its complexity easier to navigate.**',
        ],
      },
      {
        heading: 'What changed',
        bullets: [
          'Dense interface → clearer hierarchy',
          'Static information → contextual guidance',
          'Hidden state → visible state',
          'Feature density → progressive disclosure',
          'Self-identified problem → independently tested intervention',
        ],
      },
      {
        heading: 'My role',
        text: [
          '**Independent Product / UX / Front-End Exploration**',
          'I independently identified and framed the problem, conducted the heuristic evaluation, designed the interaction model, implemented the prototype in React, and conducted a directional user review.',
          'This project represents my ability to take a loosely defined problem from **observation → investigation → design → implementation → evaluation** without a predefined product brief.',
        ],
      },
    ],
  },
  {
    id: 'posters',
    status: 'staging',
    theme: 'communication',
    kind: 'Project',
    title: 'AI-Powered Short-Form Companion for Scientific Posters',
    tagline: 'Making dense research easier to take in at a glance',
    skills: ['AI & machine learning', 'Product & UX', 'Software engineering'],
    meta: 'Independent · 2026 · Research Communication · Design exploration, untested concept',
    details: [
      {
        heading: 'Product',
        text: 'A two-sided product concept that uses AI to create short, plain-language digital companions for scientific posters. Researchers generate and review the companion before a conference, while attendees access it through a QR code to quickly understand the research and decide whether to engage more deeply.',
      },
      {
        heading: 'Challenge',
        text: [
          'Scientific posters are designed for depth, but conference sessions are navigated at speed. Attendees move between dozens of posters, conversations, and unfamiliar topics, often without enough time or context to determine what is relevant to them.',
          'At the same time, presenters have limited ways to communicate the core of their work without repeatedly explaining the same information throughout a session.',
          'The challenge was therefore two-sided: **how could a companion make research faster to understand without creating another burden for the researcher who has to create it?**',
        ],
      },
      {
        heading: 'Intervention',
        text: [
          'I explored a digital companion that sits alongside the existing poster rather than changing the poster itself.',
          'Researchers submit existing research content and review an AI-generated companion before publishing it. Attendees scan a QR code on the poster to access a mobile experience containing a plain-language summary, key findings, defined terms, figures, and links to the underlying research.',
          'The product was designed around a key constraint: **the author experience needed to be low-effort enough to encourage adoption, while the attendee experience needed to provide enough value to justify the additional interaction.**',
        ],
      },
      {
        heading: 'What it revealed',
        text: [
          'The core product challenge was not simply how to summarize scientific research with AI. It was how to design a communication layer that works across **two different contexts of use**.',
          'For researchers, the value depends on minimizing preparation effort and maintaining control over how their work is represented. For attendees, the value depends on reducing the effort required to understand enough of the research to decide whether to engage further.',
          'This shifted the design focus from **“How can AI summarize a poster?”** to **“What information does each side need, and how should the system connect them?”**',
        ],
      },
      { group: 'How I approached it' },
      {
        heading: 'Design question',
        text: 'How might we create a low-effort way for researchers to communicate their work beyond the poster, while giving attendees a faster way to understand and navigate research?',
        callout: true,
      },
      {
        heading: 'Design goals',
        table: [
          {
            label: 'For researchers',
            items: [
              'Minimize preparation effort',
              'Preserve control over the generated content',
              'Extend communication beyond repeated explanations during the session',
            ],
          },
          {
            label: 'For attendees',
            items: [
              'Access information within seconds',
              'Establish an entry point into unfamiliar research',
              'Quickly assess whether a poster is relevant',
              'Revisit the research after the session',
            ],
          },
          {
            label: 'For the product',
            items: [
              'Preserve the depth and structure of the original research',
              'Add a layer of accessibility without replacing the poster',
              'Make the experience scalable without requiring design expertise',
            ],
          },
        ],
      },
      {
        stages: [
          {
            title: 'Exploring the intervention',
            text: 'Before committing to a digital format, I explored three ways a companion artifact could fit into the existing poster experience:',
            table: [
              { label: 'Take-home plain-language handout', value: 'A printed summary of the poster that attendees could take with them.' },
              { label: 'Laminated viewing aid', value: 'A reusable card placed beside the poster containing key terminology and guidance.' },
              { label: 'AI-generated digital artifact', value: 'A poster-specific companion accessed through a QR code.' },
            ],
            after: [
              'The digital artifact was selected because it could remain connected to the original research, extend beyond the physical session, and scale without printing or physical management.',
              'The tradeoff was presenter effort. This became an explicit product constraint: **setup should take less than five minutes and require no technical or design expertise.**',
            ],
          },
          {
            title: 'Two-sided product flow',
            table: [
              { label: 'Author', value: 'Research content → Submit → AI structures content → Review → Publish → QR code added to poster' },
              { label: 'Attendee', value: 'Spot poster → Scan QR code → Read summary → Explore terms / figures → Assess relevance → Engage or revisit' },
            ],
          },
          {
            title: 'Author interface',
            text: [
              'A lightweight web experience for pre-conference setup.',
              'Researchers provide their existing research content, including the title, abstract, methods, and key findings. AI structures this information into the companion, which the researcher can review and adjust before publishing.',
            ],
          },
          {
            title: 'Attendee artifact',
            text: ['A mobile-first experience accessed directly from the poster.', 'The artifact presents:'],
            bullets: [
              'Plain-language summary',
              'Key findings',
              'Inline terminology definitions',
              'Supporting figures',
              'Link to the full research',
            ],
            after: 'The interaction was intentionally linear, allowing attendees to move through the core story without navigating a complex interface.',
          },
          {
            title: 'Prototype',
            text: [
              'I prototyped the author interface, attendee artifact, and AI summarization workflow in React to explore whether the proposed experience could work as a connected product rather than as an isolated AI feature.',
              'The prototype focused on testing the **interaction model and product concept**, rather than treating the AI output as a validated measure of comprehension.',
            ],
          },
          {
            title: 'Design decisions',
            table: [
              { label: 'Zero-friction entry', value: 'QR code → content in seconds, without an app download.' },
              { label: 'Scientific rigor + plain language', value: 'Simplify the entry point without removing the underlying research.' },
              { label: 'Structured storytelling', value: 'Organize information around the way an attendee might progressively understand unfamiliar research.' },
              { label: 'Progressive detail', value: 'Keep the initial experience concise while allowing deeper exploration of terms and figures.' },
              { label: 'Human review', value: 'Keep the researcher in control of the AI-generated representation of their work.' },
            ],
          },
        ],
      },
      { group: 'Outcome' },
      {
        heading: 'Result',
        text: [
          '**Working prototype · Untested concept**',
          'The prototype demonstrates a two-sided product model connecting researcher input, AI-generated content, and attendee access through a QR-linked mobile experience.',
          'No formal user testing has been conducted yet. The most important assumptions to validate are whether the companion actually improves **comprehension speed**, whether it helps attendees make better decisions about which research to engage with, and whether the author setup is sufficiently low-effort to encourage adoption.',
          'The next step would be testing both sides of the product with researchers and conference attendees to determine whether the proposed communication layer solves a meaningful problem or simply adds another layer to the poster experience.',
        ],
      },
    ],
  },
  // Work outside software. `socials` lists the ids (from `socials` above) where each one lives.
  // TODO: the titles are placeholders. Replace them with the podcast's and the art account's names.
  {
    id: 'podcast',
    status: 'staging',
    theme: 'communication',
    kind: 'Podcast',
    title: 'Podcast on Accessible Science Communication',
    tagline: 'Combining practices from psychology, public health, and biotech',
    skills: ['Podcast production', 'Product management'],
    details: [
      {
        heading: 'About',
        text: 'Conversations on how we can combine practices from psychology, public health, and biotech to make communication more accessible in our fields.',
      },
      { heading: 'Where to listen', socials: ['spotify'] },
    ],
  },
  {
    id: 'art',
    status: 'live',
    theme: 'communication',
    kind: 'Art',
    title: 'Animated Biology Illustrations',
    tagline: 'Animations illustrating biological concepts',
    skills: ['Storytelling', 'Procreate', 'Procreate Dreams', 'Social media'],
    details: [
      { heading: 'About', text: 'Animations illustrating biological concepts.' },
      { heading: 'Where to see it', socials: ['tiktok'] },
    ],
  },
  {
    id: 'academy-volunteer',
    status: 'staging',
    theme: ['access', 'context', 'interpretation', 'navigation', 'communication'],
    kind: 'Volunteer',
    title: 'UX Critic / Digital Storyteller',
    tagline: 'California Academy of Life Sciences · Scientific Computing Department',
    skills: [],
    details: [
      {
        heading: 'Role',
        text: 'Volunteer UX critic and digital storyteller with the Scientific Computing Department at the California Academy of Life Sciences.',
      },
      {
        heading: 'What I do',
        bullets: [
          'Using publicly available natural history archive databases to curate descriptions for the academy’s data',
          'Evaluating the user interface through interaction testing and reporting bugs',
        ],
      },
    ],
  },
];

export const skillById = Object.fromEntries(skills.map((s) => [s.id, s]));
export const themeById = Object.fromEntries(themes.map((t) => [t.id, t]));
export const statusById = Object.fromEntries(statuses.map((st) => [st.id, st]));

// A project's themes as a list, and how to label them in one line.
export const themesOf = (project) => [].concat(project.theme);
export const themeTag = (project) => {
  const own = themesOf(project).map((id) => themeById[id]);
  if (own.length === themes.length) return { label: 'All themes', color: 'var(--navy)' };
  return { label: own.map((t) => t.label).join(' · '), color: own[0].color };
};
