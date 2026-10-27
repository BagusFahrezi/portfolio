# Regenerate PDFs: pip install reportlab && python scripts/make_pdfs.py  (edit CONTENT below to match src/*.js)
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
ss=getSampleStyleSheet()
H1=ParagraphStyle('h1',parent=ss['Title'],textColor=colors.HexColor('#031B33'),fontSize=24,alignment=0)
H2=ParagraphStyle('h2',parent=ss['Heading2'],textColor=colors.HexColor('#0A4268'),spaceBefore=12)
B=ParagraphStyle('b',parent=ss['BodyText'],fontSize=10,leading=14)
def P(t,s=B): return Paragraph(t,s)
def bl(items): return [P('• '+i) for i in items]
EMAIL='bagusfahrezi09@gmail.com'
SUM='Informatics Engineering student (7th semester, Universitas Dian Nusantara) with hands-on experience in operational coordination and team leadership, interested in web applications, data management, and technology-driven business solutions.'
SK=[('Programming & Web','PHP, JavaScript, HTML5, CSS3'),('Frameworks','Laravel, ReactJS, React Native, Expo'),('Database','MySQL, SQL, phpMyAdmin, Firebase/Firestore'),('Data & BI','Microsoft Excel, data processing, data visualization, dashboard development, business analysis'),('Tools','Git, GitHub, VS Code, XAMPP, Laragon'),('Professional','Team leadership, operational coordination, problem solving, requirements analysis, communication, performance monitoring')]
EXP=[('Supervisor — PT Semesta Angkasa Indoboga','April 2023 – Present',['Supervised cashier and kitchen operations','Ensured SOP compliance and operational targets','Managed schedules and task distribution','Controlled stock and raw materials','Monitored performance and mentored team members','Handled customer complaints and operational issues','Prepared operational reports']),('Senior Business Consultant — PT Rifan Financindo','December 2023 – March 2025',[]),('Staff — PT Industri Timah','September 2022 – November 2023',[]),('Waiter — Bebek Pak Ndut','August 2021 – July 2022',[])]
PR=[('Sai Ramen Digital Queue System','PHP Native, MySQL, JavaScript, AJAX, Bootstrap 5','Digital queue system: queue numbers (SR001 format), customer name and party size, waiting/called/done status, queue history, mobile-first UI.'),('RamenBray Ordering System','React Native, Expo, Firebase/Firestore','Food ordering project: customer/admin login, menu, ordering, order status management.'),('OWS TPST Bantargebang','PHP Native, MySQL, JavaScript, AJAX, XAMPP','Team project (frontend focus). Web-based vehicle weighing management: admin/operator roles, weighing records, dashboard, history, Excel export. Documentation reports 15 Black Box scenarios, all valid (reported functional test result).'),('AI Career Compass','React Native, Expo, TypeScript, AsyncStorage','Career exploration app: 48-question Likert assessment, RIASEC and Multiple Intelligences approach, radar chart, local storage.')]
def head(): return [P('Bagus Fahrezi',H1),P(f'Technology, Data & Business Operations · {EMAIL}'),Spacer(1,6),P(SUM)]
def skills(): return [P('Skills',H2)]+[P(f'<b>{a}:</b> {b}') for a,b in SK]
def exp(): return [P('Experience',H2)]+sum([[P(f'<b>{a}</b> — {b}')]+bl(c) for a,b,c in EXP],[])
def edu(): return [P('Education',H2),P('Informatics Engineering — Universitas Dian Nusantara (currently 7th semester, September 2026)')]
def build(path,story): SimpleDocTemplate(path,pagesize=A4,leftMargin=50,rightMargin=50,topMargin=50,bottomMargin=50,title='Bagus Fahrezi',author='Bagus Fahrezi').build(story)
build('public/documents/CV_Bagus_Fahrezi.pdf',head()+skills()+exp()+edu()+[P('Contact',H2),P(EMAIL)])
cover=[Spacer(1,220),P('Bagus Fahrezi',H1),P('Portfolio — Technology, Data & Business Operations'),Spacer(1,10),P(EMAIL),PageBreak()]
proj=[P('Featured Projects',H2)]+sum([[P(f'<b>{n}</b>'),P(f'<i>{t}</i>'),P(d),Spacer(1,6)] for n,t,d in PR],[])
case=[P('Case Study: OWS & SAW Research (draft)',H2),P('Research draft in progress: applying Simple Additive Weighting (SAW) to rank regions by vehicle count, total tonnage, and average tonnage per vehicle, then comparing results with manual calculation. Criteria, weights, and results will be finalized; not published.')]
build('public/documents/Portfolio_Bagus_Fahrezi.pdf',cover+head()+skills()+proj+case+exp()+edu()+[P('Contact',H2),P(EMAIL)])
