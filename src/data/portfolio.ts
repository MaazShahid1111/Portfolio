export const profile = {
  name: "Maaz Shahid",
  handle: "maaz",
  role: "Offensive Security Engineer · Founder",
  tagline: "I break things carefully, then build the tools that stop the next person.",
  location: "Karachi, PK",
  university: "NED University of Engineering & Technology",
  degree: "BSc Computer Science",
  year: "3rd Year",
  photo: "/images/me.png",
  linkedin: "https://www.linkedin.com/in/maaz-shahid-556193347",
  github: "https://github.com/maazshahid1111",
  email: "sirmaazshahid1111@gmail.com",
};

export const stats = [
  { value: "22,000+", label: "lines in Bug Hunter Machine" },
  { value: "20+", label: "certifications & simulations" },
  { value: "8", label: "shipped security tools" },
  { value: "2", label: "leadership roles" },
];

export const roles = [
  {
    title: "Founder & CEO",
    org: "Pentest App",
    period: "2026 — Present",
    body: "Building an all-in-one offensive security platform: automated recon, vulnerability triage and reporting for teams that cannot afford a full red team.",
    tags: ["Startup", "Product", "AppSec"],
  },
  {
    title: "Director, Cyber Security Module",
    org: "Synteck Society · NEDUET",
    period: "2026 — Present",
    body: "Leading the cyber security module: workshops, CTF nights, and mentoring juniors from Linux fundamentals to live web exploitation.",
    tags: ["Leadership", "CTF", "Training"],
  },
  {
    title: "Cyber Security Intern",
    org: "DevShieldX",
    period: "2026",
    body: "Hands-on vulnerability assessment, SOC workflows and reporting under a live engagement pipeline.",
    tags: ["VAPT", "SOC", "Reporting"],
    proofs: ["/images/internship_devsheildx.jpg", "/images/devshield_offerletter.jpg"],
  },
  {
    title: "BSc Computer Science Student",
    org: "NED University of Engineering & Technology",
    period: "3rd Year",
    body: "Balancing coursework with independent research in exploit development, network forensics and detection engineering.",
    tags: ["NEDUET", "Research"],
  },
];

export const projects = [
  {
    name: "Bug Hunter Machine",
    blurb:
      "A 22,000+ line offensive automation engine — recon chaining, fuzzing, vulnerability correlation and report generation in one pipeline.",
    stack: ["Python", "Automation", "Recon"],
    video: null as string | null,
    featured: true,
  },
  {
    name: "SIEM Detector",
    blurb: "Custom detection rules and correlation engine turning noisy logs into ranked incidents.",
    stack: ["Detection", "Python", "Log Analysis"],
    video: "/videos/siem_detector.mp4",
  },
  {
    name: "CSNE SOC Lab",
    blurb: "A full blue-team lab: simulated attacks, live triage and incident response runbooks.",
    stack: ["SOC", "Blue Team", "Splunk"],
    video: "/videos/csne_soclab.mp4",
  },
  {
    name: "Network Security Scanner",
    blurb: "Host discovery, port and service fingerprinting with risk scored output.",
    stack: ["Python", "Networking", "Nmap"],
    video: "/videos/netwrok_security_scanner.mp4",
  },
  {
    name: "WiFi Scanner",
    blurb: "Wireless recon tool mapping access points, encryption posture and rogue devices.",
    stack: ["Python", "802.11", "Recon"],
    video: "/videos/wifi_scanner_python.mp4",
  },
  {
    name: "Lead Scraper",
    blurb: "OSINT-flavoured scraper that collects, dedupes and enriches structured leads.",
    stack: ["OSINT", "Scraping", "Python"],
    video: "/videos/lead_scraper.mp4",
  },
  {
    name: "Library Enchant GUI",
    blurb: "Desktop library management system with a full C++ GUI and persistent storage.",
    stack: ["C++", "GUI", "OOP"],
    video: "/videos/library_enchant_gui.mp4",
  },
  {
    name: "Hangman C++ GUI",
    blurb: "Classic game rebuilt as a polished C++ graphical application.",
    stack: ["C++", "GUI"],
    video: "/videos/hangman_cpp_gui.mp4",
  },
];

export const startup = {
  name: "Pentest App",
  url: "https://pentestapp.tech",
  video: "/videos/pentestapp_startup.mp4",
  points: [
    "Automated recon and attack-surface mapping",
    "Guided exploitation workflows with safe defaults",
    "Client-ready reports generated from raw findings",
  ],
};

type Credential = { title: string; issuer: string; img: string };

export const badges: Credential[] = [
  { title: "IBM Pentest Badge", issuer: "IBM Credly", img: "/images/ibm_badge_penetration.png" },
  { title: "CAISR Simulation", issuer: "CAISR", img: "/images/CAISR.png" },
  { title: "CCEP Simulation", issuer: "CCEP", img: "/images/CCEP.png" },
  { title: "CTIGA Simulation", issuer: "CTIGA", img: "/images/CTIGA.png" },
  { title: "Cyber Security Job Simulation", issuer: "Mastercard", img: "/images/MASTERCARD.png" },
  { title: "Cyber Security Analyst Simulation", issuer: "TATA", img: "/images/TATA.png" },
  { title: "Shields Up: Cyber Simulation", issuer: "AIG", img: "/images/AIG.png" },
  { title: "Cyber Security Simulation", issuer: "Datafarm", img: "/images/DATAFARM.png" },
];

export const certs: Credential[] = [
  { title: "IBM Penetration Testing", issuer: "IBM", img: "/images/ibm_penetration_testing.jpg" },
  { title: "CAISR Certificate", issuer: "CAISR", img: "/images/CAISR-cert.png" },
  { title: "CCEP Certificate", issuer: "CCEP", img: "/images/CCEP-cert.png" },
  { title: "CTIGA Certificate", issuer: "CTIGA", img: "/images/CTIGA-cert.png" },
  { title: "Splunk Core Certified", issuer: "Coursera", img: "/images/coursera_splunk_cm.jpg" },
  { title: "Wireshark Network Analysis", issuer: "Course", img: "/images/wireshark_network_analysis.jpg" },
  { title: "Incident Response", issuer: "Mindluster", img: "/images/mindluster_incident_response.jpg" },
  { title: "Associate SOC Analyst", issuer: "Mindluster", img: "/images/mindluster_associate_analyst.jpg" },
  { title: "Intro to Cyber Security", issuer: "Simplilearn", img: "/images/simplilearn_intro_cybersecurity.jpg" },
  { title: "C++ Programming", issuer: "Cursa", img: "/images/cursa_cpp.jpg" },
  { title: "MongoDB", issuer: "Cursa", img: "/images/cursa_mongodb.jpg" },
];


export const skills = [
  { group: "Offensive", items: ["Web App Pentesting", "Recon & OSINT", "Exploit Dev", "Burp Suite", "Nmap", "Metasploit"] },
  { group: "Defensive", items: ["SOC Operations", "SIEM / Splunk", "Incident Response", "Wireshark", "Threat Intel"] },
  { group: "Engineering", items: ["Python", "C++", "Bash", "React", "MongoDB", "Linux"] },
  { group: "Design", items: ["Spatial UI", "Neumorphism", "Motion Design", "Design Systems"] },
];