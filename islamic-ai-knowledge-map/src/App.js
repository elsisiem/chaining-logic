import React from 'react';
import ReactFlow, { 
  MiniMap, 
  Controls, 
  Background,
  Handle,
  Position,
  ReactFlowProvider 
} from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';

const elements = [
  // Main node
  {
    id: 'main',
    type: 'special',
    data: { 
      label: 'Islamic Knowledge Map',
      details: 'Comprehensive Knowledge Classification & Chaining System'
    },
    position: { x: 800, y: 0 }, // Adjusted position
    className: 'main-node'
  },

  // Level 1: Process Nodes
  {
    id: 'categorization',
    type: 'process',
    data: { 
      label: 'Categorization Engine',
      details: 'Step 1: Primary Category Determination\n- NLP/NER Processing\n- Topic Identification\n- Pattern Matching\n- Multi-category Analysis'
    },
    position: { x: 400, y: 200 }, // Adjusted position for better spacing
    className: 'process-node'
  },
  {
    id: 'prioritization',
    type: 'process',
    data: { 
      label: 'Source Prioritization',
      details: 'Step 2: Source Hierarchy\n1. Quran\n2. Authentic Hadith\n3. Scholar Consensus\n4. Individual Rulings\n5. Contemporary Analysis'
    },
    position: { x: 1200, y: 200 }, // Adjusted position for better spacing
    className: 'process-node'
  },

  // Level 2: Knowledge Domains
  {
    id: 'tafseer',
    type: 'category',
    data: { 
      label: 'Tafseer',
      details: 'Quranic Interpretation Sciences\n\n' +
        'Core Functions:\n' +
        '• Verse-by-verse explanation\n' +
        '• Historical context analysis\n' +
        '• Linguistic interpretation\n' +
        '• Thematic connections\n' +
        '• Legal implications study\n\n' +
        'Key Components:\n' +
        '• Textual analysis\n' +
        '• Contextual understanding\n' +
        '• Cross-reference verification\n' +
        '• Scholarly interpretations'
    },
    position: { x: 100, y: 450 },
    className: 'domain-node'
  },
  {
    id: 'fiqh',
    type: 'category',
    data: { 
      label: 'Fiqh',
      details: 'Islamic Jurisprudence\n\n' +
        'Core Functions:\n' +
        '• Legal ruling derivation\n' +
        '• Practice implementation\n' +
        '• Case-based analysis\n' +
        '• Contemporary application\n' +
        '• Comparative study\n\n' +
        'Key Components:\n' +
        '• Source examination\n' +
        '• Methodological analysis\n' +
        '• School comparisons\n' +
        '• Modern adaptations'
    },
    position: { x: 400, y: 450 },
    className: 'domain-node'
  },
  {
    id: 'aqeedah',
    type: 'category',
    data: { 
      label: 'Aqeedah',
      details: 'Islamic Theology & Creed\n\n' +
        'Core Functions:\n' +
        '• Belief system analysis\n' +
        '• Doctrinal verification\n' +
        '• Theological framework\n' +
        '• Conceptual clarification\n' +
        '• Deviation assessment\n\n' +
        'Key Components:\n' +
        '• Scriptural foundations\n' +
        '• Logical arguments\n' +
        '• Historical positions\n' +
        '• Contemporary challenges'
    },
    position: { x: 700, y: 450 },
    className: 'domain-node'
  },
  {
    id: 'hadith',
    type: 'category',
    data: { 
      label: 'Hadith',
      details: 'Prophetic Traditions Science\n\n' +
        'Core Functions:\n' +
        '• Narration verification\n' +
        '• Chain authentication\n' +
        '• Text validation\n' +
        '• Content analysis\n' +
        '• Application guidance\n\n' +
        'Key Components:\n' +
        '• Narrator evaluation\n' +
        '• Transmission study\n' +
        '• Text examination\n' +
        '• Context analysis'
    },
    position: { x: 1000, y: 450 },
    className: 'domain-node'
  },
  {
    id: 'seerah',
    type: 'category',
    data: { 
      label: 'Seerah',
      details: 'Prophetic Biography Study\n\n' +
        'Core Functions:\n' +
        '• Life events analysis\n' +
        '• Historical verification\n' +
        '• Context understanding\n' +
        '• Pattern recognition\n' +
        '• Lesson extraction\n\n' +
        'Key Components:\n' +
        '• Event chronology\n' +
        '• Source authentication\n' +
        '• Contextual study\n' +
        '• Modern application'
    },
    position: { x: 1300, y: 450 },
    className: 'domain-node'
  },
  {
    id: 'history',
    type: 'category',
    data: { 
      label: 'History',
      details: 'Islamic Historical Analysis\n\n' +
        'Core Functions:\n' +
        '• Event documentation\n' +
        '• Source verification\n' +
        '• Pattern analysis\n' +
        '• Impact assessment\n' +
        '• Lesson derivation\n\n' +
        'Key Components:\n' +
        '• Primary sources\n' +
        '• Critical evaluation\n' +
        '• Contextual study\n' +
        '• Modern implications'
    },
    position: { x: 1600, y: 450 },
    className: 'domain-node'
  },
  {
    id: 'quran',
    type: 'category',
    data: { 
      label: 'Quran Sciences',
      details: 'Quranic Studies & Analysis\n\n' +
        'Core Functions:\n' +
        '• Textual preservation\n' +
        '• Revelation study\n' +
        '• Literary analysis\n' +
        '• Structural examination\n' +
        '• Scientific validation\n\n' +
        'Key Components:\n' +
        '• Compilation history\n' +
        '• Variant readings\n' +
        '• Stylistic features\n' +
        '• Preservation methods'
    },
    position: { x: 1900, y: 450 },
    className: 'domain-node'
  },

  // Level 3: Chaining Nodes for each domain
  // Tafseer Chain
  {
    id: 'tafseer-chain-1',
    type: 'chain',
    data: { 
      label: 'Ayah Metadata',
      details: '• Extract text\n• Surah/Ayah numbers\n• Makki/Madani classification\n• Verse context and period'
    },
    position: { x: 100, y: 700 }, // Aligned under 'tafseer' node
    className: 'chain-node'
  },
  {
    id: 'tafseer-chain-2',
    type: 'chain',
    data: { 
      label: 'Classical Sources',
      details: 'Methodological Interpretation Framework:\n\n' +
        '1. Primary Tafsir Analysis\n' +
        '   - Ibn Kathir methodology review\n' +
        '   - Al-Qurtubi legal implications\n' +
        '   - At-Tabari historical context\n' +
        '   - Linguistic analysis depth\n\n' +
        '2. Contextual Integration\n' +
        '   - Asbab Al-Nuzul verification\n' +
        '   - Historical circumstance analysis\n' +
        '   - Societal context examination\n' +
        '   - Progressive revelation mapping\n\n' +
        '3. Interpretative Validation\n' +
        '   - Aqeedah principle alignment\n' +
        '   - Hadith corroboration process\n' +
        '   - Consensus consideration\n' +
        '   - Contemporary relevance assessment\n\n' +
        'Essential Validation Rules:\n' +
        '• Must align with established Aqeedah\n' +
        '• Requires authentic hadith support\n' +
        '• Considers scholarly consensus\n' +
        '• Maintains linguistic accuracy'
    },
    position: { x: 100, y: 900 }, // Increased vertical spacing
    className: 'chain-node'
  },
  {
    id: 'tafseer-chain-3',
    type: 'chain',
    data: { 
      label: 'Modern Analysis',
      details: '• Contemporary context\n• Linguistic analysis\n• Thematic correlation\n• Cross-reference verification'
    },
    position: { x: 100, y: 1100 },
    className: 'chain-node'
  },

  // Fiqh Chain
  {
    id: 'fiqh-chain-1',
    type: 'chain',
    data: { 
      label: 'Source Analysis',
      details: 'Primary Source Validation Process:\n\n' +
        '1. Quranic Foundation\n' +
        '   - Direct verse identification\n' +
        '   - Context analysis\n' +
        '   - Related verses mapping\n' +
        '   - Linguistic interpretation verification\n\n' +
        '2. Hadith Evidence Framework\n' +
        '   - Authentication grade assessment\n' +
        '   - Chain of narration validation\n' +
        '   - Multiple hadith cross-referencing\n' +
        '   - Context alignment verification\n\n' +
        '3. Scholarly Consensus Review\n' +
        '   - Historical ijma documentation\n' +
        '   - Scope of agreement analysis\n' +
        '   - Dissenting opinions examination\n' +
        '   - Contemporary relevance assessment\n\n' +
        'Validation Rules:\n' +
        '• Must have clear Quranic basis\n' +
        '• Requires authenticated hadith support\n' +
        '• Aligns with established principles'
    },
    position: { x: 400, y: 700 }, // Aligned under 'fiqh' node
    className: 'chain-node'
  },
  {
    id: 'fiqh-chain-2',
    type: 'chain',
    data: { 
      label: 'Madhab Comparison',
      details: '• Hanafi perspective\n• Maliki approach\n• Shafi\'i position\n• Hanbali view'
    },
    position: { x: 400, y: 900 },
    className: 'chain-node'
  },
  {
    id: 'fiqh-chain-3',
    type: 'chain',
    data: { 
      label: 'Modern Application',
      details: '• Contemporary scholars\n• Fatwa councils\n• New circumstances\n• Practical implementation'
    },
    position: { x: 400, y: 1100 },
    className: 'chain-node'
  },

  // Aqeedah Chain
  {
    id: 'aqeedah-chain-1',
    type: 'chain',
    data: { 
      label: 'Textual Evidence',
      details: '• Quranic verses\n• Authentic hadith\n• Scholarly consensus\n• Clear proofs'
    },
    position: { x: 700, y: 700 }, // Aligned under 'aqeedah' node
    className: 'chain-node'
  },
  {
    id: 'aqeedah-chain-2',
    type: 'chain',
    data: { 
      label: 'Theological Analysis',
      details: '• Attribute classification\n• Understanding limits\n• Historical positions\n• Consensus points'
    },
    position: { x: 700, y: 900 },
    className: 'chain-node'
  },
  {
    id: 'aqeedah-chain-3',
    type: 'chain',
    data: { 
      label: 'Deviation Assessment',
      details: '• Identify innovations\n• Historical context\n• Impact analysis\n• Correction method'
    },
    position: { x: 700, y: 1100 },
    className: 'chain-node'
  },

  // Hadith Chain
  {
    id: 'hadith-chain-1',
    type: 'chain',
    data: { 
      label: 'Sanad Analysis',
      details: 'Comprehensive Authentication Protocol:\n\n' +
        '1. Narrator Verification Process\n' +
        '   - Biographical authentication\n' +
        '   - Historical timeline verification\n' +
        '   - Character assessment criteria\n' +
        '   - Memory and accuracy evaluation\n\n' +
        '2. Chain Continuity Analysis\n' +
        '   - Meeting verification between narrators\n' +
        '   - Historical period alignment\n' +
        '   - Geographic possibility assessment\n' +
        '   - Documentation of transmission\n\n' +
        '3. Cross-Reference Methodology\n' +
        '   - Multiple chain comparison\n' +
        '   - Supporting evidence analysis\n' +
        '   - Contradiction assessment\n' +
        '   - Corroborating reports evaluation\n\n' +
        'Critical Validation Checkpoints:\n' +
        '• Quran compliance verification\n' +
        '• Historical accuracy confirmation\n' +
        '• Logical consistency assessment\n' +
        '• Language and terminology authentication'
    },
    position: { x: 1000, y: 700 }, // Aligned under 'hadith' node
    className: 'chain-node'
  },
  {
    id: 'hadith-chain-2',
    type: 'chain',
    data: { 
      label: 'Matn Study',
      details: '• Text authentication\n• Meaning analysis\n• Context review\n• Cross-reference'
    },
    position: { x: 1000, y: 900 },
    className: 'chain-node'
  },
  {
    id: 'hadith-chain-3',
    type: 'chain',
    data: { 
      label: 'Grading & Application',
      details: '• Scholar grading\n• Practical ruling\n• Usage scope\n• Implementation'
    },
    position: { x: 1000, y: 1100 },
    className: 'chain-node'
  },

  // Seerah Chain
  {
    id: 'seerah-chain-1',
    type: 'chain',
    data: { 
      label: 'Source Validation',
      details: '• Primary sources\n• Authentication\n• Multiple narratives\n• Context verification\n\nValidation Rules:\n• Verify Hadith sources\n• Check Quran references\n• Corroborate historically\n• Multiple source confirmation'
    },
    position: { x: 1300, y: 700 }, // Aligned under 'seerah' node
    className: 'chain-node'
  },
  {
    id: 'seerah-chain-2',
    type: 'chain',
    data: { 
      label: 'Event Analysis',
      details: '• Historical context\n• Social conditions\n• Political factors\n• Economic aspects'
    },
    position: { x: 1300, y: 900 },
    className: 'chain-node'
  },
  {
    id: 'seerah-chain-3',
    type: 'chain',
    data: { 
      label: 'Lesson Extraction',
      details: '• Principles derived\n• Modern application\n• Universal values\n• Implementation'
    },
    position: { x: 1300, y: 1100 },
    className: 'chain-node'
  },

  // History Chain
  {
    id: 'history-chain-1',
    type: 'chain',
    data: { 
      label: 'Source Review',
      details: '• Primary documents\n• Contemporary accounts\n• Archaeological evidence\n• Multiple perspectives'
    },
    position: { x: 1600, y: 700 }, // Aligned under 'history' node
    className: 'chain-node'
  },
  {
    id: 'history-chain-2',
    type: 'chain',
    data: { 
      label: 'Critical Analysis',
      details: '• Event verification\n• Cause assessment\n• Impact evaluation\n• Pattern recognition'
    },
    position: { x: 1600, y: 900 },
    className: 'chain-node'
  },
  {
    id: 'history-chain-3',
    type: 'chain',
    data: { 
      label: 'Modern Relevance',
      details: '• Contemporary lessons\n• Pattern analysis\n• Future implications\n• Applied learning'
    },
    position: { x: 1600, y: 1100 },
    className: 'chain-node'
  },

  // Quran Sciences Chain
  {
    id: 'quran-chain-1',
    type: 'chain',
    data: { 
      label: 'Textual History',
      details: '• Revelation process\n• Compilation history\n• Preservation methods\n• Transmission chains'
    },
    position: { x: 1900, y: 700 }, // Aligned under 'quran' node
    className: 'chain-node'
  },
  {
    id: 'quran-chain-2',
    type: 'chain',
    data: { 
      label: 'Scriptural Analysis',
      details: '• Variant readings\n• Orthography\n• Pronunciation rules\n• Writing styles'
    },
    position: { x: 1900, y: 900 },
    className: 'chain-node'
  },
  {
    id: 'quran-chain-3',
    type: 'chain',
    data: { 
      label: 'Scientific Validation',
      details: '• Authentication methods\n• Historical evidence\n• Manuscript study\n• Modern verification'
    },
    position: { x: 1900, y: 1100 },
    className: 'chain-node'
  },

  // Edges
  // Main to Process
  { id: 'e-main-cat', source: 'main', target: 'categorization', animated: true },
  { id: 'e-main-pri', source: 'main', target: 'prioritization', animated: true },
  
  // Process to Domains
  { id: 'e-cat-tafseer', source: 'categorization', target: 'tafseer' },
  { id: 'e-cat-fiqh', source: 'categorization', target: 'fiqh' },
  { id: 'e-cat-aqeedah', source: 'categorization', target: 'aqeedah' },
  { id: 'e-cat-hadith', source: 'categorization', target: 'hadith' },
  { id: 'e-cat-seerah', source: 'categorization', target: 'seerah' },
  { id: 'e-cat-history', source: 'categorization', target: 'history' },
  { id: 'e-cat-quran', source: 'categorization', target: 'quran' },
  
  // Domain to Chain
  { id: 'e-tafseer-chain1', source: 'tafseer', target: 'tafseer-chain-1' },
  { id: 'e-tafseer-chain2', source: 'tafseer-chain-1', target: 'tafseer-chain-2' },
  { id: 'e-tafseer-chain3', source: 'tafseer-chain-2', target: 'tafseer-chain-3' },

  { id: 'e-fiqh-c1', source: 'fiqh', target: 'fiqh-chain-1' },
  { id: 'e-fiqh-c2', source: 'fiqh-chain-1', target: 'fiqh-chain-2' },
  { id: 'e-fiqh-c3', source: 'fiqh-chain-2', target: 'fiqh-chain-3' },

  { id: 'e-aqeedah-c1', source: 'aqeedah', target: 'aqeedah-chain-1' },
  { id: 'e-aqeedah-c2', source: 'aqeedah-chain-1', target: 'aqeedah-chain-2' },
  { id: 'e-aqeedah-c3', source: 'aqeedah-chain-2', target: 'aqeedah-chain-3' },

  { id: 'e-hadith-c1', source: 'hadith', target: 'hadith-chain-1' },
  { id: 'e-hadith-c2', source: 'hadith-chain-1', target: 'hadith-chain-2' },
  { id: 'e-hadith-c3', source: 'hadith-chain-2', target: 'hadith-chain-3' },

  { id: 'e-seerah-c1', source: 'seerah', target: 'seerah-chain-1' },
  { id: 'e-seerah-c2', source: 'seerah-chain-1', target: 'seerah-chain-2' },
  { id: 'e-seerah-c3', source: 'seerah-chain-2', target: 'seerah-chain-3' },

  { id: 'e-history-c1', source: 'history', target: 'history-chain-1' },
  { id: 'e-history-c2', source: 'history-chain-1', target: 'history-chain-2' },
  { id: 'e-history-c3', source: 'history-chain-2', target: 'history-chain-3' },

  { id: 'e-quran-c1', source: 'quran', target: 'quran-chain-1' },
  { id: 'e-quran-c2', source: 'quran-chain-1', target: 'quran-chain-2' },
  { id: 'e-quran-c3', source: 'quran-chain-2', target: 'quran-chain-3' },

  // Cross-referencing validation edges
  // Tafseer validation paths
  { 
    id: 'v-tafseer-aqeedah', 
    source: 'tafseer-chain-2', 
    target: 'aqeedah-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Validate Interpretation'
  },
  { 
    id: 'v-tafseer-hadith-enhanced', 
    source: 'tafseer-chain-2', 
    target: 'hadith-chain-1',
    type: 'validation',
    animated: true,
    style: { 
      stroke: '#ff9800', 
      strokeWidth: 2.5, 
      strokeDasharray: '5,5' 
    },
    label: 'Multi-level Hadith Validation',
    data: {
      validationSteps: [
        'Authenticity verification',
        'Context alignment',
        'Interpretation compatibility',
        'Chain strength assessment'
      ]
    }
  },
  { 
    id: 'v-tafseer-quran', 
    source: 'tafseer-chain-2', 
    target: 'quran-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Linguistic Principles'
  },
  { 
    id: 'v-tafseer-seerah', 
    source: 'tafseer-chain-2', 
    target: 'seerah-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Historical Context'
  },
  { 
    id: 'v-tafseer-history', 
    source: 'tafseer-chain-2', 
    target: 'history-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Historical Verification'
  },

  // Fiqh validation paths
  { 
    id: 'v-fiqh-hadith', 
    source: 'fiqh-chain-1', 
    target: 'hadith-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Evidence Check'
  },
  { 
    id: 'v-fiqh-tafseer', 
    source: 'fiqh-chain-1', 
    target: 'tafseer-chain-2',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Quranic Basis'
  },
  { 
    id: 'v-fiqh-seerah', 
    source: 'fiqh-chain-1', 
    target: 'seerah-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Historical Practice'
  },
  { 
    id: 'v-fiqh-history', 
    source: 'fiqh-chain-2', 
    target: 'history-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Scholar Precedent'
  },
  { 
    id: 'v-fiqh-aqeedah', 
    source: 'fiqh-chain-1', 
    target: 'aqeedah-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Theological Consistency'
  },

  // Aqeedah validation paths
  { 
    id: 'v-aqeedah-quran', 
    source: 'aqeedah-chain-1', 
    target: 'quran-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Scriptural Foundation'
  },
  { 
    id: 'v-aqeedah-hadith', 
    source: 'aqeedah-chain-1', 
    target: 'hadith-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Prophetic Validation'
  },
  { 
    id: 'v-aqeedah-history', 
    source: 'aqeedah-chain-1', 
    target: 'history-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Historical Context'
  },

  // Historical validation paths
  { 
    id: 'v-history-seerah', 
    source: 'history-chain-1', 
    target: 'seerah-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Timeline Verification'
  },
  { 
    id: 'v-history-hadith', 
    source: 'history-chain-1', 
    target: 'hadith-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Source Authentication'
  },
  { 
    id: 'v-history-quran', 
    source: 'history-chain-1', 
    target: 'quran-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Quranic Compliance'
  },
  { 
    id: 'v-history-tafseer', 
    source: 'history-chain-1', 
    target: 'tafseer-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Interpretation Check'
  },

  // Hadith validation paths
  { 
    id: 'v-hadith-quran', 
    source: 'hadith-chain-1', 
    target: 'quran-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Quranic Compliance'
  },
  { 
    id: 'v-hadith-history', 
    source: 'hadith-chain-1', 
    target: 'history-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Historical Verification'
  },
  { 
    id: 'v-hadith-seerah', 
    source: 'hadith-chain-1', 
    target: 'seerah-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Seerah Context'
  },

  // Seerah validation paths
  { 
    id: 'v-seerah-quran', 
    source: 'seerah-chain-1', 
    target: 'quran-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Quranic Reference'
  },
  { 
    id: 'v-seerah-history', 
    source: 'seerah-chain-1', 
    target: 'history-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'External Sources'
  },
  { 
    id: 'v-seerah-hadith', 
    source: 'seerah-chain-1', 
    target: 'hadith-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Hadith Corroboration'
  },

  // Quran Sciences validation paths
  { 
    id: 'v-quran-hadith', 
    source: 'quran-chain-1', 
    target: 'hadith-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Hadith Support'
  },
  { 
    id: 'v-quran-history', 
    source: 'quran-chain-1', 
    target: 'history-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Historical Context'
  },
  { 
    id: 'v-quran-seerah', 
    source: 'quran-chain-1', 
    target: 'seerah-chain-1',
    type: 'validation',
    animated: true,
    style: { stroke: '#ff9800', strokeWidth: 2, strokeDasharray: '5,5' },
    label: 'Seerah Context'
  },
];

// Update edge style in elements array
elements.forEach(el => {
  if (el.source) {
    // Determine edge type
    const type = el.type || 'default';
    const isProcess = el.source === 'main';
    const isDomain = el.source.includes('process');
    const isChain = el.source.includes('chain');
    
    el.animated = true; // Make all edges animated
    el.style = {
      stroke: type === 'validation' ? '#333333' : 
              isProcess ? '#666666' :
              isDomain ? '#555555' : 
              isChain ? '#444444' : '#666666',
      strokeWidth: type === 'validation' ? 2.5 : 2,
      strokeDasharray: '5,5',
    };
  }
});

const CustomMainNode = ({ data }) => {
  return (
    <div
      className="custom-node main-node"
      style={{ fontFamily: 'Verdana, sans-serif', backgroundColor: '#4caf50', color: '#fff' }}
    >
      <Handle type="source" position={Position.Bottom} />
      <h3>{data.label}</h3>
      <div className="node-details">{data.details}</div>
    </div>
  );
};

const CustomProcessNode = ({ data }) => {
  return (
    <div
      className="custom-node process-node"
      style={{ fontFamily: 'Verdana, sans-serif', backgroundColor: '#2196f3', color: '#fff' }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <h4>{data.label}</h4>
      <div className="node-details">{data.details}</div>
    </div>
  );
};

const CustomCategoryNode = ({ data }) => {
  return (
    <div
      className="custom-node domain-node"
      style={{ fontFamily: 'Verdana, sans-serif', backgroundColor: '#ff9800', color: '#fff' }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <h4>{data.label}</h4>
      <div className="node-details">{data.details}</div>
    </div>
  );
};

// Add new node type for chain items
const CustomChainNode = ({ data }) => {
  return (
    <div
      className="custom-node chain-node"
      style={{ fontFamily: 'Verdana, sans-serif', backgroundColor: '#9c27b0', color: '#fff' }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <h4>{data.label}</h4>
      <div className="node-details">{data.details}</div>
    </div>
  );
};

// Add custom edge with label
const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  label,
  style = {}
}) => {
  const edgePath = `M ${sourceX} ${sourceY} L ${sourceX} ${targetY} L ${targetX} ${targetY}`;
  return (
    <g className="custom-edge">
      <path id={id} style={style} className="react-flow__edge-path" d={edgePath} />
      {label && (
        <text>
          <textPath href={`#${id}`} style={{ fontSize: '12px' }} startOffset="50%" textAnchor="middle">
            {label}
          </textPath>
        </text>
      )}
    </g>
  );
};

const nodeTypes = {
  special: CustomMainNode,
  process: CustomProcessNode,
  category: CustomCategoryNode,
  chain: CustomChainNode,
};

const edgeTypes = {
  validation: CustomEdge,
};

function App() {
  const flowProps = {
    nodes: elements.filter(el => !el.source),
    edges: elements.filter(el => el.source),
    nodeTypes,
    edgeTypes,
    nodesDraggable: true,
    nodesConnectable: false,
    fitView: true,
    minZoom: 0.15,
    maxZoom: 1.5,
    defaultViewport: { x: 0, y: 0, zoom: 0.35 },
    defaultEdgeOptions: {
      type: 'step',
      animated: true,
      style: { stroke: '#444444', strokeWidth: 2 },
      pathOptions: {
        offset: 15, // Space between nodes and edges
        borderRadius: 8 // Rounded corners for edges
      }
    },
    edgeOptions: {
      interactionWidth: 10 // Wider area for edge interaction
    },
    elementsSelectable: true,
    selectNodesOnDrag: false,
    preventScrolling: true,
    snapToGrid: true,
    snapGrid: [15, 15]
  };

  return (
    <ReactFlowProvider>
      <div style={{ width: '100vw', height: '100vh', background: '#faf9f6' }}>
        <ReactFlow {...flowProps}>
          <MiniMap 
            style={{ background: '#fff' }} 
            nodeColor="#e0e0e0"
            nodeStrokeWidth={2}
            maskColor="rgba(250, 249, 246, 0.7)"
          />
          <Controls style={{ 
            button: { 
              background: '#fff', 
              color: '#666',
              border: '1px solid #e0e0e0',
              borderRadius: '4px'
            } 
          }} />
          <Background 
            color="#e0e0e0"
            gap={24} 
            size={1} 
            variant="dots"
          />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}

export default App;