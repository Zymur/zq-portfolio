export const profile = {
  name:'Zymur C. Quisado', email:'quisadozymur@gmail.com', location:'Ponong, Tomas Oppus, Southern Leyte, Philippines',
  summary:'I am a BS Information Technology student majoring in Programming, with hands-on experience in full-stack development, database design, software testing, and mobile application development. I have delivered four paid client projects, led a seven-member ATLAS development team, and independently developed the BananaWorks website for an award-winning IT–BSBA collaboration.',
  availability:'Open to internships and technology opportunities',
  education:'BS Information Technology, Major in Programming — Southern Leyte State University, expected June 2027',
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
  {title:'ATLAS',year:'2026',description:'As Project Manager and Lead Developer, I led a seven-member team developing a Flutter/Firebase attendance application for a university student organization. I worked on architecture, Firestore models, role-based security, facial verification, geofencing, offline attendance, excuse letters, and AI-assisted analytics. I also helped address issues from a 50-user pilot and moved appropriate processing on-device to reduce server CPU usage.',stack:['Flutter','Firestore','Firebase Authentication','Cloud Functions'],featured:true,label:'Project Manager & Lead Developer'},
  {title:'BananaWorks',year:'2026',description:'I independently developed and deployed a PHP/MySQL e-commerce and supplier-partnership website featuring product browsing, purchasing workflows, and supplier inquiries. The associated IT–BSBA collaboration won 1st Place at the HUTECH–SLSU Innovation Showcase / Start-up Arena in Vietnam in May 2026.',stack:['PHP','MySQL','JavaScript'],featured:true,label:'Sole Web Developer',url:'https://bananaworks.infinityfree.me/home/main.php',image:'https://res.cloudinary.com/dhdzmnocf/image/upload/v1782276859/Untitled_design_1_q7k3av.png'},
  {title:'TindaTrack',year:'2026',description:'I developed a Flutter-based sari-sari store management app with inventory tracking, point-of-sale calculations, and customer credit management to help small retailers manage day-to-day operations.',stack:['Flutter','Dart'],featured:true,label:'Retail mobile application'},
  {title:'Southern Leyte Bisaja Dictionary',year:'2025',description:'I was the sole developer of a Unity-based dictionary application for an approved academic thesis. I converted raw dictionary entries into rich-text formatting for display in Unity and developed the application.',stack:['Unity'],featured:true,label:'Sole Application Developer',url:'https://drive.google.com/drive/folders/1JvndK0XUYF1husQyZ2A9j_YWaPp4ki-2?usp=sharing',image:'https://res.cloudinary.com/dhdzmnocf/image/upload/v1782278222/Untitled_design_4_kgvqd4.png'},
  {title:'Pharmacy Point-of-Sale System',year:'2025',description:'I independently improved an existing pharmacy POS system as an academic project using PHP, JavaScript, HTML, CSS, and MySQL. I redesigned its interface, implemented transaction workflows, and added Excel export for records and reporting.',stack:['PHP','JavaScript','HTML','CSS','MySQL'],featured:false,label:'Sole Developer',url:'https://pharmacypos.infinityfree.me',image:'https://res.cloudinary.com/dhdzmnocf/image/upload/v1782360325/Untitled_design_5_jb302e.png'},
  {title:'CoCoBuild',year:'2026',description:'For a BSBA academic project, I customized an existing Rocket AI-generated website by adding custom images, creating pages, and making minor functionality improvements. I did not build the initial site from scratch.',stack:['Website Customization'],featured:false,label:'Customization & Enhancement',url:'https://cocobuild-qct7916.public.builtwithrocket.new/',image:'https://res.cloudinary.com/dhdzmnocf/image/upload/v1782277401/Untitled_design_3_muu5zj.png'},
  {title:'SOYMPH',year:'2025',description:'I independently created an informational Wix website for a nursing students’ academic project about Salvacion Oppus Yñiguez Memorial Provincial Hospital. It presents hospital information and does not include advanced application features.',stack:['Wix'],featured:false,label:'Sole Website Developer',url:'https://soymphunofficial.wixsite.com/soymphunofficial',image:'https://res.cloudinary.com/dhdzmnocf/image/upload/v1782361142/Untitled_design_6_tifadj.png'}
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
