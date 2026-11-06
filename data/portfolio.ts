export const profile = {
  name:'Zymur C. Quisado', email:'quisadozymur@gmail.com', location:'Southern Leyte, Philippines',
  summary:'I build practical web and mobile applications, turning ideas into reliable software through thoughtful design, development, and testing.',
  availability:'Open to internships and technology opportunities',
  education:'BS Information Technology, Major in Programming — Southern Leyte State University, expected 2027',
  achievements:['1st Place — HUTECH–SLSU Innovation Showcase / Start-up Arena (2026)','Consistent Dean’s Lister','Vice President, Computer Society (AY 2023–2024)','Senator, Supreme Student Council (AY 2024–2025)','HUTECH Academic Exchange & Cultural Immersion Programme (2026)']
};
export const skills = [
  {group:'Languages', items:['Python','PHP','JavaScript','Dart','SQL']},
  {group:'Web development',items:['HTML','CSS','Laravel','REST APIs']},
  {group:'Mobile & tools',items:['Flutter','Unity']},
  {group:'Backend & data',items:['MySQL','Firestore','Firebase Authentication','Cloud Functions']},
  {group:'AI tools',items:['ChatGPT','Claude','Gemini']}
];
export const experience = [
  {role:'Independent Web & Application Developer',date:'2024 — Present',desc:'Delivered four paid client projects, handling requirements, UI/UX design, frontend development, deployment and maintenance. Also developed a Unity-based Bisaja dictionary application for an approved academic thesis.'},
  {role:'English Instructor Assistant',date:'Aug — Oct 2025',desc:'Assisted an English instructor with academic and administrative tasks.'},
  {role:'Pharmacy Operations & Database Support',date:'2023 — 2024',desc:'Processed POS transactions and reconciled database records across two pharmacy branches.'}
];
export type Project={title:string;year:string;description:string;stack:string[];url?:string;image?:string;featured?:boolean;label?:string};
export const projects:Project[]=[
  {title:'ATLAS',year:'2026',description:'Attendance management application. As Project Manager and Lead Developer, I coordinated a seven-member team and worked on Flutter/Firebase architecture, Firestore data models, role-based security, facial verification, offline attendance, and a 50-user pilot.',stack:['Flutter','Firebase','Firestore','Security'],featured:true,label:'Capstone / team leadership'},
  {title:'BananaWorks',year:'2026',description:'Independently developed and deployed a PHP/MySQL e-commerce and supplier-partnership website for an award-winning IT–BSBA collaboration.',stack:['PHP','MySQL','JavaScript'],featured:true,label:'Award-winning collaboration',url:'https://bananaworks.infinityfree.me/home/main.php',image:'https://res.cloudinary.com/dhdzmnocf/image/upload/v1782276859/Untitled_design_1_q7k3av.png'},
  {title:'Pharmacy POS',year:'2025',description:'Developed a pharmacy point-of-sale system with transaction workflows and Excel exports for record tracking.',stack:['PHP','JavaScript','MySQL'],url:'https://pharmacypos.infinityfree.me',image:'https://res.cloudinary.com/dhdzmnocf/image/upload/v1782360325/Untitled_design_5_jb302e.png'},
  {title:'TindaTrack',year:'2026',description:'Flutter-based retail mobile application with inventory tracking, point-of-sale calculations, and customer credit management.',stack:['Flutter','Retail','Inventory'],featured:true},
  {title:'CoCoBuild',year:'2026',description:'Rocket AI-generated website customized for a BSBA project, with changes to its layout, content, and presentation.',stack:['Web'],url:'https://cocobuild-qct7916.public.builtwithrocket.new/',image:'https://res.cloudinary.com/dhdzmnocf/image/upload/v1782277401/Untitled_design_3_muu5zj.png'},
  {title:'Southern Leyte Bisaja Dictionary',year:'2025',description:'Unity-based Southern Leyte Bisaja dictionary application developed for an approved academic thesis.',stack:['Unity','Application Development'],featured:true,url:'https://drive.google.com/drive/folders/1JvndK0XUYF1husQyZ2A9j_YWaPp4ki-2?usp=sharing',image:'https://res.cloudinary.com/dhdzmnocf/image/upload/v1782278222/Untitled_design_4_kgvqd4.png'},
  {title:'SOYMPH Website',year:'2025',description:'Wix website created for nursing students as part of their academic project about Salvacion Oppus Yñiguez Memorial Provincial Hospital.',stack:['Web Development'],url:'https://soymphunofficial.wixsite.com/soymphunofficial',image:'https://res.cloudinary.com/dhdzmnocf/image/upload/v1782361142/Untitled_design_6_tifadj.png'}
];
export const certificates=[
  {name:'Introduction to Web Development with HTML, CSS, JavaScript',issuer:'IBM',url:'https://coursera.org/verify/0076KYDMKOYN'},
  {name:'Introduction to Data Analytics',issuer:'IBM',url:'https://coursera.org/verify/IB5H440OR2O7'},
  {name:'Google AI Essentials',issuer:'Google',url:'https://coursera.org/verify/specialization/57K7SW7UIPCS'},
  {name:'Analysis for Business Systems',issuer:'University of Minnesota',url:'https://coursera.org/verify/O6K17UYVGIUM'},
  {name:'Guided Website Development Project',issuer:'University of Washington',url:'https://coursera.org/verify/4S3QQNOAKFRP'},
  {name:'Foundations of Digital Marketing and E-commerce',issuer:'Coursera',url:'https://coursera.org/verify/6DFO52G54SL4'},
  {name:'Ethical Hacking Essentials',issuer:'Coursera',url:'https://coursera.org/verify/ZC0JHXMUBDYP'},
  {name:'Computing, Ethics, and Society Foundations',issuer:'Coursera',url:'https://coursera.org/verify/V253GK0C5LHI'},
  {name:'The Arduino Platform and C Programming',issuer:'Coursera',url:'https://coursera.org/verify/2REFN1I4Z6MC'},
  {name:'Interfacing with the Arduino',issuer:'Coursera',url:'https://coursera.org/verify/HEUJ8FBY1R3F'},
  {name:'Discover the Art of Prompting',issuer:'Coursera',url:'https://coursera.org/verify/276L92KJMKG3'},
  {name:'Maximize Productivity With AI Tools',issuer:'Coursera',url:'https://coursera.org/verify/YMBRPRGSK3IE'}
];
