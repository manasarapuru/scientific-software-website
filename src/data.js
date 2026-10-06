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
  // The About popup's timeline, newest first, as chapters. Things that ran at the same time share a
  // chapter and are listed together on its card, with any certificates (`certs`) earned then beneath.
  // `current` marks the chapter still under way; `summary` is an optional line under the chapter's name.
  timeline: [
    {
      period: '2026',
      label: 'Solidifying an interdisciplinary skill set',
      summary: 'Intentionally seeking out opportunities and coursework that pushed me to learn how to connect biology, design, and technology principles.',
      color: '#0E7490',
      current: true,
      certs: [
        { name: 'Artificial Intelligence in Pharma and Biotech', issuer: 'MIT Sloan School of Management', dates: 'Aug 2026' },
        { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', dates: 'Expected Oct 2026' },
        { name: 'Cancer Biology Specialization', issuer: 'Coursera', dates: 'Jul 2026' },
        { name: 'IBM AI Developer', issuer: 'Coursera', dates: 'Jan 2026' },
      ],
      roles: [
        {
          role: 'UX Critic & Designer Volunteer',
          org: 'California Academy of Life Sciences',
          detail: 'Scientific Computing Department',
          dates: 'Aug 2026 – Present',
        },
        {
          role: 'Member',
          org: 'US Research Software Engineering Association',
          detail: 'User Experience Working Group',
          dates: 'Aug 2026 – Present',
        },
        {
          role: 'Applied learning projects',
          org: 'UCSC Genome Browser Reimagined · AI-Powered Poster Companion',
          detail: 'Applying what I’m learning across biology, design and technology, as I hone in on an interdisciplinary skill set.',
          dates: 'Spring 2026',
        },
      ],
    },
    {
      period: '2024 – 2025',
      label: 'Industry',
      color: '#1D4ED8',
      certs: [{ name: 'IBM Full Stack Software Developer Specialization', issuer: 'Coursera', dates: 'Apr 2024' }],
      roles: [
        {
          role: 'Bioinformatics Scientist',
          org: 'Thermo Fisher Scientific',
          detail: 'qPCR/dPCR TaqMan Assays',
          dates: 'Apr 2024 – Nov 2025',
        },
      ],
    },
    {
      period: '2021 – 2023',
      label: 'Graduate school & research',
      color: '#6D28D9',
      roles: [
        {
          role: 'Bioinformatics Specialist',
          org: 'Massachusetts General Hospital',
          detail: 'Huntington’s Transcriptomics/Genomics',
          dates: 'Mar 2021 – Aug 2023',
        },
        {
          role: 'Bioinformatics Master’s Student',
          org: 'Boston University',
          detail: 'Bioinformatics',
          dates: 'Sept 2021 – May 2023',
        },
      ],
    },
    {
      period: '2016 – 2020',
      label: 'Undergraduate',
      summary: 'Grounded in microbiology and chemistry, then drawn into bioinformatics through undergraduate research and a national lab internship.',
      color: '#BE185D',
      roles: [
        {
          role: 'B.S. Microbiology, Chemistry Minor',
          org: 'San Jose State University',
          dates: 'Aug 2016 – Dec 2020',
        },
        {
          role: 'Undergraduate Bioinformatics Research Student',
          org: 'San Jose State University',
          detail: 'Phylogenetics & Protein Modelling',
          dates: 'Jan 2019 – Dec 2020',
        },
        {
          role: 'Bioinformatics Intern',
          org: 'Sandia National Laboratories',
          detail: 'Bioinformatics Research / Phage Therapy',
          dates: 'Jun 2020 – Aug 2020',
        },
      ],
    },
  ],
  bio:
    'I sit between the bench and the codebase. My background spans molecular diagnostics, neurodegenerative disease research and microbiology, and I now build the tools that make that science faster: pipelines, analysis apps and AI-assisted workflows designed around how scientists actually work.',
  facts: [
    { label: 'Focus', value: 'Bioinformatics tools, AI-assisted workflows, scientist-facing UX' },
    { label: 'Experience', value: 'Molecular diagnostics, neurodegenerative disease, microbiology' },
    { label: 'Builds with', value: 'Python, React, Snakemake, AWS, LLM agents' },  ],
};

// Shown on the contact page, in the About popup and in the footer. Entries without a `url` are hidden.
export const socials = [
  { id: 'linkedin', label: 'LinkedIn', handle: 'Manasa Rapuru', url: 'https://www.linkedin.com/in/manasa-rapuru-b10914126' },
  { id: 'spotify', label: 'Spotify', handle: '', url: '' }, // hidden until the podcast is released: fill in its `url`
  { id: 'tiktok', label: 'TikTok', handle: '@taughtillustrated', url: 'https://www.tiktok.com/@taughtillustrated' },
];

// The story carousel between the hero and the explorer: the problem → why it's hard → how I work → beyond software.
// `pose` sets what the guide avatar holds: question | scale | bulb | orbit | wave.
// `caption` is what the guide "says" while that slide is showing.
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
  },
  {
    id: 'beyond',
    label: 'Beyond software',
    pose: 'wave',
    caption: 'And it doesn’t stop at software.',
    title: 'The same lens, other mediums.',
    body: [
      'The gap between a subject and its audience isn’t unique to software. I apply the same thinking wherever science needs to reach people.',
    ],
  },
];

// The disconnects the projects address. Order = clockwise from the top of the orbit.
// Each project names one of these in its `theme`, or several as an array.
export const themes = [
  { id: 'access', label: 'Access', line: 'Putting specialist capability directly in the hands of the people who need it.', color: '#0E7490' },
  { id: 'understanding', label: 'Understanding', line: 'Bringing data together with its context to make it more applicable.', color: '#1D4ED8' },
  { id: 'navigation', label: 'Navigation', line: 'Designing cleaner paths that align with people’s mental models.', color: '#B45309' },
  { id: 'communication', label: 'Communication', line: 'Turning research into something its audience can take in.', color: '#BE185D' },
];

// How far a piece of work got; each project names one in its `status`, or leaves it out where it doesn't apply.
export const statuses = [
  { id: 'delivered', label: 'Delivered', color: '#15803D' },
  { id: 'testing', label: 'In testing', color: '#B45309' },
  { id: 'concept', label: 'Proof of concept', color: '#6D28D9' },
  { id: 'soon', label: 'Coming soon', color: '#64748B' },
];

// How the Skills filter is laid out: the main skills lead each group. A skill used on a project
// but not listed here is shown under "Other".
export const skillGroups = [
  { label: 'Code', skills: ['Python', 'React.js', 'HTML', 'CSS', 'JavaScript', 'SQL', 'FastAPI', 'Streamlit', 'Plotly.js', 'Linux'] },
  { label: 'AI', skills: ['LLMs', 'Claude', 'RAG'] },
  {
    label: 'Design & HCI',
    skills: [
      'Figma', 'Heuristic evaluation', 'UX critique', 'User flow design', 'Flow diagram', 'Interaction testing',
      'User feedback', 'Interviews', 'Survey design', 'Bug reporting',
    ],
  },
  { label: 'Science', skills: ['Bioinformatics', 'Neurodegenerative disease research'] },
  { label: 'Communication', skills: ['Storytelling', 'Podcast production', 'Product management', 'Social media', 'Procreate', 'Procreate Dreams'] },
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

// `year` is optional: when the work was done, shown on the card and in the popup.
// `skills` lists the tools and methods used, by name; they show as tags in the popup and as filter options.
// `stat` is optional: a before/after figure shown at the top of the project popup.
// `meta` is optional: a short line of context shown under the tagline in the project popup.
// `details` is optional: the blocks shown in the project popup, in order.
// A block is either `{ group }` (starts a new tab; blocks before the first group go under "Overview") or a section
// with an optional `heading` plus any of:
//   `text` (a string or an array of paragraphs; wrap a phrase in **double asterisks** to bold it),
//   `list` (numbered), `bullets`, `chips`, `table` (label/value rows; a row may have `items` instead of `value`), `after` (closing paragraph or paragraphs),
//   `quotes` (shown after `after`), `closing` (paragraphs after the quotes), `socials` (ids of social links),
//   `chat` (an animated chat: people, timed messages and a caption),
//   `files` (a looping scene of a researcher puzzling over separate data files),
//   `explorer` (a walkthrough of the finished tool: a query built up, then its chart and table),
//   `dense` (a looping scene of a crowded interface and the questions it raises),
//   `embed` (a live site shown in a frame: url, title and caption),
//   `poster` (a looping scene of an attendee puzzling over a dense scientific poster),
//   `companion` (a looping scene of the poster's QR code opening the companion on a phone),
//   `jargon` (a looping scene of a concept being explained to a general audience in technical terms),
//   `videos` (a carousel of videos from src/media: file, title and optionally text),
//   `stages` (numbered steps; each has a `title`, the same content fields as a section, and optionally
//   `practices`, of which only the disciplines are shown, and `personas`).
// `callout: true` sets a section apart.
// Entries marked `hidden: true` are kept here but left off the site.
const allProjects = [
  {
    id: 'data-access',
    year: '2025',
    status: 'delivered',
    theme: 'access',
    kind: 'Project',
    title: 'Self-Service Tool for Cross-Team Data Access',
    tagline: 'Turning a bioinformatics request into a tool the team can run without bioinformatics',
    skills: ['Bioinformatics', 'SQL', 'Linux', 'Python', 'Streamlit', 'FastAPI', 'Flow diagram', 'Interviews'],
    stat: { from: 'Up to 2 days', to: 'Under 1 minute', label: 'Turnaround for a data request' },
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
        // plays out in the popup as an animated chat
        chat: {
          caption: 'A typical data request could take up to two days, depending on the supporting team’s workload.',
          people: {
            alex: { name: 'Alex M.', role: 'Customer-facing team', color: '#1D4ED8' },
            sam: { name: 'Sam R.', role: 'Bioinformatics', color: '#6D28D9' },
          },
          messages: [
            { who: 'alex', time: '11:14 AM', text: 'Hi Sam! Could you send me the information for this request, please?', file: 'data_request.xlsx', elapsed: '0 min' },
            { who: 'sam', time: '2:42 PM', gap: '3 h 28 min later', text: 'I don’t have that on hand, so I’ll need to run the bioinformatics pipeline to get it. I’ll send it over as soon as I have it.', elapsed: '3 h 28 min' },
            { who: 'sam', time: '10:12 AM', gap: 'Next morning', text: 'Hi Alex, here is the information you requested.', file: 'data_results.xlsx', elapsed: '22 h 58 min' },
            { who: 'alex', time: '11:01 AM', gap: '49 min later', text: 'Hey Sam, I have a few more to add to this request. Sorry for the trouble!', file: 'data_request_updated.xlsx', elapsed: '23 h 47 min' },
            { who: 'sam', time: '3:17 PM', gap: '4 h 16 min later', text: 'Here’s the corrected file.', file: 'data_results_updated.xlsx', elapsed: '28 h 3 min' },
          ],
        },
      },
      {
        heading: 'Intervention',
        text: [
          'I turned a bioinformatics request into a self-service workflow, bringing the technical capability closer to the people who needed it.',
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
          'Reduce handoffs between teams',
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
        after: 'The broader stakeholder feedback also surfaced potential use for other internal workflows, suggesting that the intervention could function as more than a solution to a single request.',
      },
      {
        heading: 'Result',
        text: [
          'The application reduced the turnaround for a data request from up to two days to under one minute, while enabling the customer-facing team to access the data independently.',
          'The result was not simply a faster workflow. It shifted where the capability lived: from a request fulfilled by a specialized team to a capability that the requesting team could access directly.',
        ],
      },
    ],
  },
  {
    id: 'rag-metadata',
    year: '2025',
    status: 'testing',
    theme: 'understanding',
    kind: 'Project',
    title: 'RAG Chatbot for Exploring Datasets and Generating Metadata',
    tagline: 'Bringing context to raw datasets through conversation, so they can be understood and put to use',
    skills: ['RAG', 'LLMs', 'Python', 'SQL', 'FastAPI', 'React.js', 'User feedback', 'Flow diagram'],
    details: [
      {
        heading: 'Product',
        text: 'A context-aware RAG chatbot that generates metadata and enables users to query and understand datasets through conversations tailored to their use case.',
      },
      {
        heading: 'Challenge',
        text: [
          'Raw datasets alone are often difficult for users to interpret or act on. Without proper context, descriptions, or structured organization, the data’s value remains inaccessible.',
          'Users struggled to make sense of the datasets because no platform organized the information in a way that was understandable and actionable. The lack of metadata, structure, and exploration tools left the data underutilized.',
          'That left an opportunity to design a system that does more than store data: one that presents it in a way that aligns with user needs, making datasets more comprehensible, navigable, and actionable.',
        ],
        // shown in the popup as a looping scene; the windows are left untitled (the names only tell them apart here)
        files: {
          showNames: false,
          files: [
            { name: 'dataset_01.csv', jargon: 'what is this?' },
            { name: 'expression_matrix.tsv', jargon: 'a gene?' },
            { name: 'sample_sheet.xlsx' },
            { name: 'cohort_B_results.csv', jargon: 'a disease?' },
            { name: 'assay_readout.csv' },
            { name: 'variants_table.tsv', jargon: 'which study?' },
            { name: 'metadata_v2.txt', jargon: 'what units?' },
            { name: 'dataset_07.csv' },
            { name: 'study_export.xlsx', jargon: 'cited where?' },
            { name: 'results_final.csv' },
          ],
          question: [
            'What does this information signify?',
            'Is it related to a gene?',
            'A disease?',
            'How has it been studied in the literature?',
          ],
          caption: 'Datasets without their context: nothing to say what each one represents, what it relates to, or how it has been studied.',
        },
      },
      {
        heading: 'Intervention',
        text: [
          'I used a RAG-based conversational interface to bring contextual information closer to the data, generating metadata and allowing users to ask questions in terms of their own use case.',
          'Rather than requiring users to navigate raw datasets or locate documentation separately, the system connected the underlying information with contextual explanations through conversation.',
        ],
        // plays out in the popup as a simulated conversation with the chatbot; answers are placeholders
        chat: {
          header: 'bot',
          caption: 'Questions in the user’s own words, answered from the data and its sources.',
          note: 'This is a simulation of the interaction at a high level, not the tool itself. The answers are placeholders.',
          people: {
            user: { name: 'Researcher', role: 'Exploring a dataset', color: '#1D4ED8' },
            bot: { name: 'Dataset assistant', role: 'Answers from the data and its sources', color: '#0d7a66' },
          },
          messages: [
            { who: 'user', text: 'What does this information signify?' },
            {
              who: 'bot',
              text: 'Here is a plain-language description, generated from the dataset and its documentation.',
              card: ['Description', 'What each column means', 'How it was collected'],
              sources: ['Dataset', 'Documentation'],
              verified: true,
            },
            { who: 'user', text: 'Is it related to a gene? A disease?' },
            {
              who: 'bot',
              text: 'Yes. Both are named in the linked records.',
              card: ['Gene', 'Disease'],
              sources: ['Dataset', 'Linked records'],
              verified: true,
            },
            { who: 'user', text: 'How has it been studied in the literature?' },
            {
              who: 'bot',
              text: 'These are the most relevant published studies, with where each one connects to this dataset.',
              card: ['Study 1', 'Study 2', 'Study 3'],
              sources: ['Literature'],
              verified: true,
            },
          ],
        },
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
        text: 'How might we build an application with a complex backend architecture and an additional layer of AI verification, while delivering a simple, intuitive front-end experience?',
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
    year: '2023',
    status: 'delivered',
    theme: 'understanding',
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
        text: [
          'The lab was investigating gene expression in relation to Alzheimer’s disease. They had collected multi-dimensional datasets for their research, but had difficulty translating the data into actionable insights.',
          'Those insights stayed out of reach because the data was stored in fragments across separate files, with no interactive system for exploring it. The lab’s researchers needed a way to efficiently access, navigate, and interpret complex experimental datasets, and the existing storage lacked structure, interactivity, and contextual clarity.',
        ],
        // shown in the popup as a looping scene; the file names and terms are illustrative
        files: {
          files: [
            { name: 'APOE4_vs_APOE3_DEG.tsv', jargon: 'log2FC? padj?' },
            { name: 'hippocampus_cpm.csv', jargon: 'CPM?' },
            { name: 'AD_vs_control_DEG.tsv' },
            { name: 'gsea_APOE4_pathways.csv', jargon: 'NES? FDR?' },
            { name: 'cortex_cpm.csv' },
            { name: 'leading_edge_genes.xlsx', jargon: 'which genes?' },
            { name: 'sample_metadata.txt', jargon: 'which donor?' },
            { name: 'gsea_AD_pathways.csv' },
            { name: 'APOE4_AD_interaction.tsv', jargon: 'which contrast?' },
            { name: 'cerebellum_cpm.csv' },
          ],
          question: 'How do I make sense of all this?',
          caption: 'Many separate result files, split by analysis, genotype and brain region, with nothing to say how they fit together.',
        },
      },
      {
        heading: 'Front-end challenge',
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
        // plays out in the popup as a walkthrough of the finished tool; the values are illustrative
        explorer: {
          title: 'Gene Expression Explorer',
          gene: 'HOMER3',
          analyses: [
            { name: 'Differential expression', description: 'Where is my gene differentially expressed?' },
            { name: 'Gene expression', description: 'What is this gene’s level of expression?' },
            { name: 'Pathway enrichment', description: 'Which pathways are associated with these changes?' },
          ],
          dataset: 'APOE genotype',
          option: 'E4/E4 vs E3/E3',
          chart: {
            title: 'Expression by condition',
            legend: ['E4/E4', 'E3/E3'],
            bars: [42, 76, 56, 92, 36, 66, 84, 50, 72, 62],
          },
          table: {
            title: 'Differential expression table',
            columns: ['Gene', 'E4/E4', 'E3/E3', 'Fold'],
            rows: [
              ['HOMER3', '2.31', '1.04', '+2.2×'],
              ['APOE', '4.87', '1.92', '+2.5×'],
              ['TREM2', '1.56', '1.48', '+1.1×'],
              ['CLU', '3.12', '1.71', '+1.8×'],
              ['BIN1', '0.89', '1.03', '−0.9×'],
            ],
          },
          caption: 'One place to ask the question: choose a gene and an analysis, and the chart and table come back together.',
          note: 'This is a simulation of the interaction at a high level, not the tool itself. The labels and values are illustrative.',
        },
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
    year: '2026',
    status: 'concept',
    theme: 'navigation',
    kind: 'Project',
    title: 'UCSC Genome Browser Reimagined',
    tagline: 'A self-initiated redesign exploring density and hierarchy in scientific tooling',
    skills: ['Claude', 'Figma', 'React.js', 'Heuristic evaluation', 'Survey design'],
    meta: 'Independent · 2026 · Bioinformatics Tooling · Design exploration, tested concept · Live front-end prototype, no backend',
    details: [
      {
        heading: 'Product',
        text: 'A self-initiated redesign of the UCSC Genome Browser that explores how a tool used daily by researchers could be made less cognitively demanding while preserving the depth users rely on.',
      },
      {
        heading: 'Challenge',
        text: [
          'The UCSC Genome Browser is a highly powerful tool that often presents a steep learning curve. While it contains extensive functionality, it can be difficult to navigate without prior expertise, effectively adding cognitive load on top of the research itself.',
          'This raised a question for me: **is this friction an inherent limitation of the system, or a solvable design problem?**',
          'The current interface can be overwhelming, causing cognitive overload, inefficient navigation, and missed insights due to poor hierarchy and a lack of context-aware guidance.',
        ],
        // shown in the popup as a looping scene of a crowded interface
        dense: {
          questions: [
            'Which of these are switched on?',
            'What does this track show?',
            'Did that change anything?',
            'Where do I even start?',
          ],
          caption: 'Row upon row of near-identical controls, with no hierarchy, no clear active state and no guidance.',
        },
      },
      {
        heading: 'Intervention',
        text: [
          'I redesigned the interface around the idea that **complexity does not necessarily need to be removed; it needs to be structured.**',
          'The opportunity was to improve navigation, reduce cognitive load, and enhance comprehension by introducing context-aware interactions, better hierarchy, and guided workflows.',
        ],
        chips: [
          'Progressive disclosure',
          'Expand/collapse panels',
          'Optional AI-assisted search',
          'Auto-refresh with visible state',
          'Section descriptions',
        ],
        after: [
          'Rather than removing the depth that makes the Genome Browser valuable, I focused on making the existing functionality easier to navigate and understand.',
          'I then built the redesign as a React prototype, so that the interaction model could be experienced rather than evaluated only as static mockups.',
        ],
        // the live prototype, shown in a frame inside the popup
        embed: {
          url: 'https://genomebrowserdesign.netlify.app/',
          title: 'UCSC Genome Browser Reimagined, live prototype',
          caption: 'The live prototype. Interact with it here, or open it full size.',
        },
      },
      {
        heading: 'What it revealed',
        text: [
          'This exploration revealed that the core problem in the UCSC Browser is not missing features. It is **density without hierarchy.**',
          'Small structural changes (progressive disclosure, visible active state, contextual labels) had an outsized effect on how navigable the interface felt.',
          'It also reinforced something I had begun noticing in scientific software more broadly: **A tool can contain everything a researcher needs and still create friction if the interface does not help users understand where they are, what they can do, and what is relevant at that moment.**',
        ],
      },
      { group: 'How I approached it' },
      {
        heading: 'Design question',
        text: 'How can the interface help users explore genomic data efficiently while keeping flexibility and depth intact?',
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
            title: 'Heuristic evaluation',
            text: 'I evaluated the existing interface against usability heuristics and rated each finding by severity.',
            table: [
              { label: 'Feedback · High', value: 'Selected tracks do not refresh upon selection, leaving users unsure whether their action registered.' },
              { label: 'Recognition · High', value: 'Hundreds of tool names are displayed simultaneously, with no way to understand which to use without prior knowledge.' },
              { label: 'Minimalism · High', value: 'Too many competing calls to action are visible at once, with no visual hierarchy between primary and secondary actions.' },
              { label: 'Visibility · Medium', value: 'There is no clear indication of which tracks are currently active; open and closed states are not visually distinguishable.' },
              { label: 'User control · Medium', value: 'The toggle system is inconsistent and hard to parse; users cannot easily reverse or compare track selections.' },
              { label: 'Help & context · Medium', value: 'Sections have no labels or explanations; users with less domain knowledge have no anchor point for navigation.' },
            ],
          },
          {
            title: 'Design decisions',
            text: 'This was a redesign of an existing expert tool, constrained by user familiarity and existing mental models.',
            table: [
              {
                label: 'Design strategy',
                items: [
                  'Familiarity over novelty: muscle memory matters for expert tools',
                  'Density is the core UX problem, not missing features',
                  'Every change earns its place by addressing a specific heuristic finding',
                ],
              },
              {
                label: 'Interaction patterns',
                items: [
                  'Progressive disclosure: reduce visible complexity without removing depth',
                  'Optional AI acceleration: power users keep manual control, new users get guided help',
                ],
              },
              {
                label: 'Components',
                items: [
                  'Expand/collapse panels for progressive disclosure',
                  'AI-assisted search as an optional overlay',
                  'Auto-refresh toggle with visible state indicators',
                ],
              },
              {
                label: 'Foundations',
                items: [
                  'Original color identity preserved: expert users navigate by color recognition',
                  'Track-based layout retained as the primary mental model',
                ],
              },
            ],
            after: 'The outcome is a redesign that feels immediately familiar to expert users while being meaningfully easier to navigate for newcomers.',
          },
          {
            title: 'Vibe coding',
            text: 'I built the redesign in React.js, using the browser directly as the prototyping environment. Vibe coding let the interface decisions stay grounded in real interaction behavior rather than static mockups, making it faster to validate layout density, toggle responsiveness, and the AI search integration.',
          },
          {
            title: 'Concept testing',
            text: 'I shared the live prototype with 3 users at varying familiarity levels, from active users to those familiar but not regular, and asked them to explore freely before completing a short survey. The goal was directional signal, not statistical proof.',
          },
          {
            title: 'Feedback',
            text: 'All 3 users rated the redesign more efficient than the original. The auto-refresh on track selection and the section descriptions were called out specifically as the most impactful changes.',
            table: [
              { label: 'Interface clarity', value: '**4.7 / 5**' },
              { label: 'Task confidence', value: '**4.3 / 5**' },
              { label: 'Layout guidance', value: '**4.7 / 5**' },
              { label: 'Preferred over the original', value: '**100%**' },
            ],
            after: 'Prototype review: 3 users, a 5-point scale, collected with Google Forms.',
            quotes: [
              'Less crowded — I didn’t have to refresh the page to show tracks.',
              'Updated interface, and responsive.',
              'Descriptions for each section help novices and serve as a refresher for familiar users. It updates automatically when you adjust a track.',
            ],
          },
        ],
      },
      { group: 'Outcome' },
      {
        heading: 'Result',
        text: [
          '**Reduced cognitive load during use of annotation tracks.**',
          'All 3 users rated the redesign more efficient than the original. The 3-user review was directional, not conclusive, but consistent enough to validate the approach as worth pursuing further.',
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
    ],
  },
  {
    id: 'posters',
    year: '2026',
    status: 'concept',
    theme: 'communication',
    kind: 'Project',
    title: 'AI-Powered Short-Form Companion for Scientific Posters',
    tagline: 'Making dense research easier to take in at a glance',
    skills: ['React.js', 'LLMs', 'User flow design'],
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
        // shown in the popup as a looping scene at a poster session
        poster: {
          questions: ['What is this actually about?', 'What does this figure show?', 'Is this relevant to me?'],
          caption: 'Minutes at a single poster, and still unsure what it says or whether it matters to them.',
        },
      },
      {
        heading: 'Intervention',
        text: [
          'I explored a digital companion that sits alongside the existing poster rather than changing the poster itself.',
          'Researchers submit existing research content and review an AI-generated companion before publishing it. Attendees scan a QR code on the poster to access a mobile experience containing a plain-language summary, key findings, defined terms, figures, and links to the underlying research.',
          'The product was designed around a key constraint: **the author experience needed to be low-effort enough to encourage adoption, while the attendee experience needed to provide enough value to justify the additional interaction.**',
        ],
        // shown in the popup as a looping scene of the companion being opened from the poster
        companion: {
          verdict: ['Now I get it.', 'This is relevant to me.'],
          caption: 'One scan, and a short plain-language companion sits alongside the poster: a summary, key findings, defined terms, a figure and a link to the research.',
          note: 'This is a simulation of the interaction at a high level, not the tool itself. The content is shown as placeholders.',
        },
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
    hidden: true, // not released yet
    year: '2026',
    status: 'soon',
    theme: 'communication',
    kind: 'Hobby',
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
    year: '2026',
    theme: 'communication',
    kind: 'Hobby',
    title: 'Animated Biology Illustrations',
    tagline: 'Animations illustrating biological concepts',
    skills: ['Storytelling', 'Procreate', 'Procreate Dreams', 'Social media'],
    details: [
      { heading: 'About', text: 'Animations illustrating biological concepts.' },
      {
        heading: 'Challenge',
        text: [
          'Biology is usually explained in its own vocabulary. An explanation can be entirely accurate and still leave a general audience unable to picture what is actually happening.',
          'These animations swap the vocabulary for something familiar: gene editing as a pencil erasing part of a gene, or PCR as a copy machine.',
        ],
        // shown in the popup as a looping scene of a concept being explained to a general audience
        jargon: {
          pages: [
            {
              title: 'CRISPR-Cas9',
              terms: ['RNA-guided endonuclease', 'protospacer adjacent motif', 'double-strand break', 'non-homologous end joining'],
              question: 'But what does it actually do?',
            },
            {
              title: 'Polymerase chain reaction',
              terms: ['thermostable polymerase', 'denaturation', 'primer annealing', 'exponential amplification'],
              question: 'Can someone just show me?',
            },
          ],
          caption: 'Accurate, and impossible to picture: for a general audience, the terms pile up faster than the idea comes through.',
        },
      },
      {
        heading: 'Intervention',
        text: 'Each animation takes one concept and replaces its vocabulary with a single familiar picture.',
        // the files live in src/media
        videos: [
          { file: 'CRISPR.mp4', title: 'CRISPR', text: 'Gene editing as a pencil erasing part of a gene.' },
          { file: 'PCR.mp4', title: 'PCR', text: 'Copying DNA as a copy machine.' },
          { file: 'IsItThere.mp4', title: 'Is it there?' },
        ],
      },
      { heading: 'Where to see it', socials: ['tiktok'] },
    ],
  },
  {
    id: 'academy-volunteer',
    year: '2026',
    status: 'testing',
    theme: 'navigation',
    kind: 'Volunteer',
    title: 'UX Critic & Designer',
    tagline: 'California Academy of Life Sciences · Scientific Computing Department',
    skills: ['UX critique', 'User flow design', 'Flow diagram', 'Interaction testing', 'Bug reporting'],
    details: [
      {
        heading: 'Role',
        text: 'Volunteer UX critic and designer with the Scientific Computing Department at the California Academy of Life Sciences, reviewing an existing interface and designing how people move through it.',
      },
      {
        heading: 'Challenge',
        text: [
          'I joined a project where the data had already been integrated into the system. What had not been worked out was how people would move through it: the user flows still needed defining and designing.',
          'So the work runs from the data outward. Starting from what is already stored, I work out how each piece should map to a step a user takes, and design the flow around that.',
        ],
        // shown in the popup as a looping scene; the windows are left untitled (the names only tell them apart here)
        files: {
          showNames: false,
          files: [
            { name: 'specimens', jargon: 'maps to?' },
            { name: 'taxa', jargon: 'links to?' },
            { name: 'localities' },
            { name: 'collectors', jargon: 'shown where?' },
            { name: 'images' },
            { name: 'collecting_events', jargon: 'which step?' },
            { name: 'collections', jargon: 'starts here?' },
            { name: 'references' },
            { name: 'determinations', jargon: 'who needs it?' },
            { name: 'media' },
          ],
          question: [
            'How do we map this to that?',
            'Which record leads to which screen?',
            'Where does a user start?',
            'What should they be able to do next?',
          ],
          caption: 'The data was already in the system. What was missing was the path a user takes through it.',
        },
      },
      {
        heading: 'What I do',
        bullets: [
          'Critiquing the interface: evaluating it through interaction testing and reporting the bugs and usability problems found',
          'Designing the user flows: defining how the data already in the system maps to the steps a user takes',
        ],
      },
    ],
  },
];

export const projects = allProjects.filter((p) => !p.hidden);

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
