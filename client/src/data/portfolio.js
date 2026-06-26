export const profile = {
  name: 'RISAF-MDH',
  logo: 'DO NOT',
  title: 'Offensive Security Specialist',
  roles: ['Red Team Operator', 'Bug Bounty Hunter', 'Ethical Hacker'],
  location: 'Still broken',
  email: 'yourmail@protonmail.com',
  github: 'https://github.com/yourname',
  linkedin: 'https://linkedin.com/in/yourname',
  image: '/images/hacker.png',
  status: 'Available for Authorized Work',
  signature: 'I break systems legally to help make them stronger.'
};

export const stats = [
  { value: '3+', label: 'Years Hands-on' },
  { value: '50+', label: 'Reports Written' },
  { value: '100+', label: 'Labs & CTFs' },
  { value: '24/7', label: 'Learning Mode' }
];

export const skills = [
  { title: 'Reconnaissance', score: 94, icon: '◎', items: ['OSINT', 'Asset mapping', 'Subdomain discovery', 'Technology fingerprinting'] },
  { title: 'Web Exploitation', score: 92, icon: '</>', items: ['OWASP Top 10', 'XSS', 'SQLi testing', 'File upload flaws'] },
  { title: 'API Security', score: 90, icon: 'API', items: ['BOLA / IDOR', 'JWT review', 'Rate limit testing', 'Mass assignment'] },
  { title: 'Red Team Ops', score: 86, icon: '⌁', items: ['Attack paths', 'Adversary simulation', 'Initial access concepts', 'Objective-driven testing'] },
  { title: 'Privilege Escalation', score: 84, icon: '⇧', items: ['Linux privesc', 'Windows basics', 'Misconfigurations', 'GTFOBins'] },
  { title: 'Reporting', score: 96, icon: '☷', items: ['CVSS', 'Impact analysis', 'Risk rating', 'Remediation guidance'] }
];

export const tools = [
  'Burp Suite', 'Nmap', 'Nuclei', 'FFUF', 'Gobuster', 'Amass', 'Subfinder', 'Httpx',
  'Katana', 'Waybackurls', 'GAU', 'SQLMap', 'Wireshark', 'Kali Linux', 'Docker', 'Postman'
];

export const projects = [
  {
    title: 'External Attack Surface Recon Framework',
    tag: 'Recon Automation',
    level: 'Advanced',
    description: 'A structured workflow for authorized targets to discover subdomains, live hosts, exposed services, technologies, and attack entry points.',
    tech: ['Python', 'Bash', 'Nmap', 'Subfinder', 'Httpx']
  },
  {
    title: 'API Security Testing Methodology',
    tag: 'API Security',
    level: 'Professional',
    description: 'A testing process for broken object-level authorization, broken authentication, JWT issues, rate-limit bypass, and excessive data exposure.',
    tech: ['Postman', 'Burp Suite', 'JWT', 'REST API']
  },
  {
    title: 'Bug Bounty Report Portfolio',
    tag: 'Reporting',
    level: 'Client Ready',
    description: 'Professional sample reports with executive summary, proof of concept, business impact, severity, evidence, and remediation guidance.',
    tech: ['CVSS', 'OWASP', 'Markdown']
  },
  {
    title: 'Red Team Lab Attack Chain',
    tag: 'Adversary Simulation',
    level: 'Lab',
    description: 'Documented a legal lab attack chain from reconnaissance to exploitation, privilege escalation, internal enumeration, and final reporting.',
    tech: ['Kali', 'Burp', 'Nmap', 'Linux']
  }
];

export const reports = [
  { title: 'IDOR in User Profile Download', severity: 'High', cvss: '8.1', impact: 'Unauthorized access to another user’s sensitive records through broken access control.' },
  { title: 'Stored XSS in Admin Notes', severity: 'Medium', cvss: '6.1', impact: 'Stored script execution risk in a privileged panel within authorized lab scope.' },
  { title: 'JWT Misconfiguration', severity: 'High', cvss: '8.8', impact: 'Weak token signing configuration could allow unauthorized session abuse in a test environment.' }
];

export const methodology = [
  'Scope confirmation', 'Passive recon', 'Active enumeration', 'Attack surface mapping',
  'Vulnerability validation', 'Impact proof', 'Report writing', 'Remediation retest'
];
