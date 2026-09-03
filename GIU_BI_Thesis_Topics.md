# GIU Bachelor's Thesis Topics — BI Student (mohammed.fathy)

- **Source:** https://portal.giu-uni.de/GIUb/EXTStudent/ChooseThesis_m.aspx
- **Authenticated as:** mohammed.fathy
- **Total topics:** 144
- **Supervisors:** 6
- **Descriptions retrieved:** all 144 (via `GetThesisDescription`)

Topics grouped by supervisor (portal order).

## Maggie Mashaly  (18 topics)

### AI-Based Anomaly Detection for Suspicious Account Activity on Child-Facing Platforms

*Topic ID: 22525*

Unusual account behavior — a sudden change in messaging patterns contact requests from many new accounts in a short window or activity at unusual hours — can be an early indicator of risk This project applies standard anomaly-detection techniques such as Isolation Forest One-Class SVM or simple statistical outlier detection to structured account-activity data such as login times message frequency and contact-request patterns to flag accounts worth a closer look following the same classical-ML CRISP-DM-based workflow

Prerequisites

Basic Python and scikit-learn familiarity at the same level as standard classification and clustering coursework; ML background needed

---

### AI-Based Detection of Misinformation and Fake Content Targeting Children and Families

*Topic ID: 22520*

Children and parents increasingly encounter misleading health claims safety hoaxes and fabricated viral challenge content on platforms aimed at young audiences 
This project builds a textclassification model to flag misinformation in child and family facing content following the CRISP-DM approach used across this research group: source a suitable public misinformation/fakenews dataset clean and label it (adapting labels to the child safety context where needed) and apply standard classification algorithms (Logistic Regression Random Forest SVM and a pretrained transformer classifier such as BERT) to compare performance
The emphasis is on careful data preparation model comparison and a clear well justified writeup rather than novel algorithm design

Prerequisites 
Basic Python (the level covered in the departments introductory programming and data science courses) and familiarity with scikit-learn no deep learning background required pretrained models are used off the shelf via simple library calls not built or trained from scratch

---

### AI-Based Skill Assessment Through Gameplay Data

*Topic ID: 22530*

Traditional tests are a blunt instrument for measuring skills like problem-solving in children This project explores whether simple in-game action logs — number of attempts time-to-solution hint usage — can serve as a signal of skill level following the same feature-engineering-plus-classical-ML pattern used in the existing behavior-mapping theses in this research group such as Random Forest or clustering on engineered features rather than requiring custom game instrumentation or advanced telemetry pipelines A publicly available educational-game dataset such as from Kaggle or an open EdTech research repository can be used in place of building a new game from scratch

Prerequisites

Basic Python scikit-learn at the level of standard classification or clustering coursework; no custom software development required if using an existing public dataset

---

### AI-Driven Age Verification and Estimation for Digital Platforms

*Topic ID: 22522*

Age verification sits at the center of current global regulatory debate (COPPA the EUs DSA UK Online Safety Act) is directly relevant to any product targeting children This project compares three approaches — off-the-shelf facial age-estimation APIs simple behavioral-signal scoring (such as rule-based scoring from account activity patterns) self-declaration with verification friction — evaluating each on accuracy fairness across demographic groups privacy cost The student will use existing pretrained age-estimation APIs rather than building a model focus the bulk of the effort on the comparative research decision framework

Prerequisites

Basic machine learning background required Interest in the policy/regulatory dimension is valuable since the deliverable includes a compliance framework

---

### AI-Generated Personalized Storytelling for Child Engagement and Values Education

*Topic ID: 22532*

This project uses an existing generative AI tool (via simple API calls or a no-code AI writing platform) to produce personalized culturally localized stories that reinforce safety values lessons — for example a story featuring the childs own name interests that embeds a lesson about not sharing personal information online The core contribution is designing a clear content-safety checklist review workflow (prompt constraints a human review step a keyword/topic filter built with simple rule-based logic) rather than any custom model development

Prerequisites

Basic coding skills; comfort using a generative AI API or platform at a basic level; interest in content design child development

---

### Auditing Exploitative Design Patterns Dark Patterns") in Apps Targeting Children

*Topic ID: 22524*

Beyond content risk many child-facing apps embed manipulative design — forced-continuity subscriptions disguised ads reward loops engineered for compulsive engagement This project is structured as a systematic audit rather than a technical build: the student develops a scoring checklist from the published dark-pattern taxonomy literature (eg Mathur et al) manually reviews a sample of 20–30 popular childrens apps against the checklist uses spreadsheet-based scoring visualization (Excel or Power BI) to identify the most common manipulative patterns which app categories are most affected

Prerequisites

No coding required; strong attention to detail structured research skills; experience with Excel/Power BI for organizing visualizing audit findings

---

### Designing Safety Guardrails for AI Tutoring Chatbots for Children

*Topic ID: 22528*

AI chatbots are increasingly used for tutoring but general-purpose safety settings are not designed with children in mind This project is primarily a design and evaluation study rather than a model-building exercise: using an existing chatbot platform or LLM API (eg via simple well-documented API calls or a no-code chatbot builder) the student designs a set of content rules and conversation boundaries appropriate for children then systematically tests the chatbot with a structured set of edge-case questions to see where it needs improvement iterating on the rules based on results

Prerequisites

No advanced coding required; comfort using APIs at a basic level or a no-code chatbot-builder tool; interest in child-safety/communication design is valuable since guardrail wording is a core part of the deliverable

---

### Evaluating AI Tools for Detecting Manipulated Images and Videos on Child-Facing Platforms

*Topic ID: 22521*

As AI image and video generation tools become widely accessible child-facing platforms face growing exposure to manipulated media Rather than building a detection model from scratch — a task requiring specialized computer-vision expertise — this project takes an applied evaluative approach: the student will identify and test several existing freely available deepfake-detection tools and APIs such as open-source detectors and cloud vision APIs against a curated test set of real and manipulated images and videos measuring accuracy ease of integration and cost The output is a practical vendor and tool comparison a real product team could use to choose a detection solution rather than a custom-built detector

Prerequisites 
No computer-vision or deep-learning background required basic Python knowledge is sufficient

---

### Explainable No-Code Parent-Facing Learning Progress Dashboards

*Topic ID: 22531*

Parents are frequently handed opaque progress scores from EdTech platforms with no explanation of what drives them This project takes an existing simple classification/regression model (built with standard scikit-learn tools and applies a beginner-friendly interpretability library (SHAP which has a simple well-documented plotting interface) to translate model outputs into plain-language insights then builds the parent-facing dashboard using a no-code/low-code BI tool (Power BI) rather than custom front-end development

Prerequisites

Basic Python/scikit-learn for the underlying model; Power BI proficiency for the dashboard (in line with the no-code tools already emphasized in this groups business-education work)

---

### Gamified Cyber Education: Measuring Behavior Change

*Topic ID: 22529*

Digital-literacy curricula often teach safety rules that dont translate into changed behavior This project designs a short gamified cyber-awareness module (password hygiene phishing recognition oversharing awareness) — which can be built using a no-code quiz/game platform rather than custom software — measures whether in-game learning transfers to real behavioral change using a simple pre-test/post-test experimental design standard statistical comparison (t-tests in Excel or SPSS)

Prerequisites

Basic coding & ML knowledge required; a no-code quiz/game-builder tool (eg Kahoot-style platforms Google Forms-based interactive modules) is used for a start; basic statistics helps with the pre/post comparison analysis

---

### Multilingual (Arabic-English) NLP for Children's Reading Level Assessment

*Topic ID: 22527*

No description available for this topic.

---

### Predicting Problematic Screen-Time Patterns from Usage Data

*Topic ID: 22534*

Most screen-time tools simply track cap usage after the fact This project instead predicts problematic usage trends using standard classification techniques (Logistic Regression Random Forest) applied to simple usage-summary features (average daily session count time-of-day patterns week-over-week trend) rather than complex time-series modeling keeping the technical approach consistent with the classical-ML work already completed across this research group The student will work with simulated or publicly available app-usage datasets

Prerequisites

Basic Python scikit-learn; no time-series-specific modeling background required since usage patterns are converted into simple summary features before modeling

---

### Predictive Risk Scoring for Livestream and Short-Video Chat Comments

*Topic ID: 22523*

Livestream short-video platforms present a moderation challenge because chat comments arrive faster than moderators can read them This project builds a text-based risk-scoring model — using standard classification techniques (Logistic Regression Random Forest or a pretrained NLP classifier) applied to publicly available livestream/comment chat-log datasets — that flags messages showing harassment coordinated abuse or spam/scam patterns The model is kept interpretable (using simple feature importance not black-box deep learning) so that a non-technical moderator can understand why a message was flagged

Prerequisites

Basic Python familiarity with scikit-learn; no audio processing or multimodal ML required

---

### Recommendation Engines for Age-Appropriate Content Curation

*Topic ID: 22533*

Standard recommendation engines optimize for engagement which in adult contexts drives the well-documented rabbit-hole effect — an outcome actively undesirable in a childrens product This project builds a simple collaborative-filtering or content-based recommender (using standard well-documented Python libraries such as Surprise or scikit-learn) that adds basic diversity session-length constraints compares it against a standard engagement-maximizing baseline on relevance healthy usage metrics

Prerequisites

Basic Python; recommender-systems concepts covered in standard coursework (collaborative filtering content-based filtering)

---

### Regulatory Compliance Benchmarking COPPA GDPR-K and Egypts Data Protection Law for Child-Focused Platforms

*Topic ID: 22537*

This project produces a comparative legal-technical analysis of what compliant by design architecture actually requires across three regimes relevant to localizing Play Learn & Protect: the US COPPA framework the EUs GDPR provisions for childrens data (GDPR-K) Egypts Personal Data Protection Law 151/2020 Rather than a purely legal review the deliverable translates each regimes requirements into concrete technical/architectural implications (eg consent-flow design data-minimization requirements retention limits cross-border transfer restrictions) so the analysis is directly usable by an engineering team building the actual product

Prerequisites

No coding requirement; strong research legal-document analysis skills; Business Informatics or IT-governance coursework helpful

---

### Rule-Based and Predictive Adaptive Difficulty Engines for Educational Games Description

*Topic ID: 22526*

Educational games succeed or fail on pacing: too easy children disengage too hard they quit in frustration This project designs a difficulty-adjustment system driven by a simple predictive model (eg Logistic Regression or Decision Tree trained on player performance data — accuracy response time retry rate) that recommends the next difficulty level compared against a static-difficulty baseline a simple rule-based baseline (eg increase difficulty after 3 correct answers in a row) This keeps the modeling approach within standard classification/prediction methods already used successfully across this research group rather than requiring reinforcement learning

Prerequisites

Basic Python scikit-learn; a simple existing game template or a no-code/low-code game-builder tool (eg Construct Scratch-level web tools) can be used for the testbed game since the focus of the project is the difficulty-prediction model not game engineering

---

### Sustainable Business Models for Family Digital-Safety Platforms

*Topic ID: 22536*

This project analyzes viable monetization strategies for a child-safety EdTech platform — freemium B2B2C partnerships with schools or telecom providers subscription models — benchmarked against comparable EdTech business-model theses already completed in this research group Rather than a purely technical build the deliverable centers on a data-informed business model canvas: the student will gather comparable-company data (public financials pricing pages market reports) build a simple financial projection model to stress-test each option under different adoption-rate assumptions

Prerequisites

Business modeling/strategy; modeling skills; basic coding requirement

---

### Text-Based Safety Moderation for Child-Directed Voice Assistant Transcripts

*Topic ID: 22535*

Voice-enabled toys smart speakers marketed to children raise moderation questions once their spoken interactions are converted to text This project uses an existing off-the-shelf speech-to-text API (eg Google Speech-to-Text or a similar well-documented service) to transcribe sample voice interactions then applies standard text-classification techniques to the transcripts to flag inappropriate content — keeping the project scoped to text classification

Prerequisites

Basic Python; comfort calling a speech-to-text API (a simple well-documented request/response pattern); the underlying text classification uses the same scikit-learn/pretrained-classifier approach as other NLP topics in this set

---

## Mona Ali Ekram Elsayed Ali  (12 topics)

### AI-Based Credit Risk Assessment for Supply Chain Finance Platforms

*Topic ID: 22510*

This project develops a machine learning credit scoring model for suppliers and evaluates financing decisions using simulation The objective is to reduce default risk while maximizing financing profitability

---

### AI-Based Quality Inspection and Production Line Optimization

*Topic ID: 22518*

This project predicts product defects using machine learning and integrates the predictions into a manufacturing simulation to optimize inspection policies reduce waste and improve production quality

---

### AI-Driven Production Planning and Scheduling Simulator

*Topic ID: 22515*

This project forecasts production demand and evaluates production scheduling policies using simulation The objective is to improve machine utilization reduce delays and optimize production planning

---

### AI-Driven Working Capital Optimization for Manufacturing SMEs

*Topic ID: 22512*

The project predicts working capital requirements using AI and evaluates different inventory payment and financing policies through simulation to improve financial performance

---

### Digital Twin for Warehouse Robot Coordination Using Reinforcement Learning

*Topic ID: 22516*

This project develops a digital twin of an automated warehouse where reinforcement learning is used to optimize robot coordination task allocation and traffic management to improve warehouse efficiency

---

### Digital Twin of Manufacturing Supply Chain Resilience Using AI Forecasting

*Topic ID: 22519*

This project develops a digital twin of a manufacturing supply chain that predicts supply disruptions using machine learning The simulation will evaluate resilience strategies such as inventory buffering supplier diversification and production reconfiguration under different disruption scenarios

---

### Digital Twin of Supplier Financing Decisions Using Machine Learning

*Topic ID: 22513*

This project develops a digital twin of supplier financing decisions that combines supplier risk prediction with financial simulation Alternative financing strategies will be evaluated under varying market conditions

---

### Dynamic Discounting Optimization for SME Suppliers

*Topic ID: 22509*

The project evaluates early payment discount strategies using predictive analytics and simulation Different buyer-supplier agreements will be compared to improve supplier liquidity while maintaining buyer profitability

---

### Invoice Payment Delay Prediction for Supply Chain Finance

*Topic ID: 22511*

This project predicts invoice payment delays using machine learning and simulates their impact on supplier cash flow and financing needs Various financing strategies will be compared under different payment behaviors

---

### Machine Learning-Based Energy Consumption Optimization in Smart Factories

*Topic ID: 22517*

The project predicts factory energy consumption and evaluates energy-saving strategies using simulation Different production schedules and operating conditions will be analyzed to improve sustainability and reduce operational costs

---

### Predictive Maintenance Scheduling for Smart Manufacturing Systems

*Topic ID: 22514*

This project predicts equipment failures using machine learning and integrates the predictions into a production simulation to optimize maintenance schedules reduce downtime and improve factory productivity

---

### Startup Cash Flow Survival Simulator Using Invoice Factoring

*Topic ID: 22508*

This project models startup cash flow under different invoice payment scenarios Machine learning predicts payment delays while simulation evaluates invoice factoring strategies and financing decisions that improve liquidity and business survival

---

## Nadeen Emadeldin Mohamed Omar  (12 topics)

### Co-supervised by Dr Ahmed Sameeh - A Business Intelligence Tool for Egyptian Football Club Benchmarking

*Topic ID: 22276*

Benchmarking football clubs by creating three normalized scores: on-pitch performance - squad market value - and fan engagement 
The main insight is value for money: identifying which clubs outperform or underperform relative to the squad value and resources they have Keywords: club benchmarking- composite index- sports business intelligence- dashboard- data visualization

---

### Co-supervised by Dr Ahmed Sameeh - Moneyball: A Statistical Scouting Tool for Egyptian Football Clubs

*Topic ID: 22275*

Developing a statistical scouting tool that estimates Egyptian Premier League players market value using performance and bio data
It helps clubs identify statistically similar but cheaper alternatives; turning player recruitment into a data-driven decision support problem
Keywords: player valuation - scouting analytics - sports business intelligence - Egyptian Premier League - market value modeling

---

### Co-supervised by Dr Amal Aboulhassan- Detecting Hawkish and Dovish Tone in FOMC Press Conferences: A Text and Vocal Analysis and its impact on Financial Markets

*Topic ID: 22277*

Builds a hawkish/dovish/neutral text classifier and a vocal arousal extraction pipeline for Federal Reserve post-meeting press conferences to test how tone and delivery jointly move financial markets
Keywords: FOMC - Federal Reserve - hawkish-dovish classification - NLP - speech emotion recognition -monetary policy communication

---

### Co-supervised by Dr Iman Awad - Campus Mobility Demand Forecasting: An Operations Research Approach for GIU

*Topic ID: 22273*

Develops a dashboard to facilitate the creation of a dataset to be used to forecast the demand for buses on given routes based on time of day day of the week and season
Keywords: operations research - demand forecasting - resource allocation - transportation logistics

---

### Co-supervised by Dr Iman Awad - Digital Government & an Intelligent Future: AI Readiness in the Egyptian Public Sector

*Topic ID: 22272*

Evaluates AI readiness across the Egyptian public sector; institutional capacity and citizen-facing digital services and students present their collected data in an interactive AI readiness dashboard for the government sector
Keywords: e-government - digital government - AI policy - public-sector digital transformation - government AI readiness index - institutional analysis - dashboard

---

### Co-supervised by Dr Iman Awad - From Awareness to Adoption: Measuring AI Readiness in the Egyptian Private Sector

*Topic ID: 22269*

Assesses private-sector AI readiness; leadership; infrastructure; skills; data maturity; and budget across Egyptian businesses of varying size and sector 
Students present their collected data in an interactive AI readiness dashboard for the business sector
Keywords: AI readiness - digital transformation - technology adoption - enterprise AI - survey research - business intelligence - dashboard

---

### Co-supervised by Dr Iman Awad - From Digital Divide to AI Divide: Assessing Public Readiness for AI in Egypt

*Topic ID: 22271*

Assesses AI readiness at the societal level; public awareness; digital literacy; trust; willingness to adopt AI-enabled services
Students present their collected data in an interactive AI readiness dashboard for the general population
Keywords: AI awareness - AI readiness - digital literacy - cybersecurity - public perception of AI - dashboard

---

### Co-supervised by Dr Iman Awad - GIU on the Move: A Real-Time Transportation Tracking App

*Topic ID: 22274*

Builds a real-time bus tracking app for GIU students and staff piloted on one route with a documented path to scale to the rest of the fleet
Keywords: mobile application development - real-time GPS tracking - location-based services - transportation app - MVP development

---

### Co-supervised by Dr Nourhan Hamdi -  Simulating Stable Matching for the Egyptian Tansiq University Placement System

*Topic ID: 22278*

Analyzes the Egyptian Tansiq university placement system through the lens of matching theory; building and validating a synthetic student population calibrated against real data and published Tansiq cutoffs and the Survey of Young People in Egypt (SYPE) to quantify how the current mechanism outcomes compare to a Gale-Shapley deferred acceptance mechanism
Keywords: matching theory - Gale-Shapley algorithm - stable matching - strategy-proofness - school choice - college admissions - mechanism design - Tansiq - synthetic data calibration

---

### Measuring Hawkish and Dovish Tone in Central Bank of Egypt Communication: A Text Classification Approach

*Topic ID: 22281*

Builds and validates a Arabic-language hawkish/dovish/neutral classifier for Central Bank of Egypt communication
Keywords: Arabic NLP - hawkish-dovish classification - central bank communication - AraBERT

---

### News-Based Economic Uncertainty in Egypt: A Text-Mining Comparison of Crisis Periods

*Topic ID: 22280*

Builds a Baker-Bloom-Davis-style Economic Uncertainty Index for Egypt from Egyptian newspaper coverage then use it to compare how uncertainty spiked and how the surrounding narrative shifted across (or one of) Egypt's major economic episodes; such as: the 2011 revolution- the 2016 EGP flotation- COVID-19- and the 2022–2023 currency crisis and IMF program
Keywords: economic policy uncertainty - text mining - news-based index - crisis comparison - topic modeling - sentiment analysis

---

### Tracking the Egyptian Economy in Real Time: A Nowcasting Approach

*Topic ID: 22279*

Builds a model that estimates Egypt current-quarter economic activity in real time using high-frequency proxy indicators including satellite-derived data to bridge the lag before official figures are released
Keywords: nowcasting - mixed-frequency data - dynamic factor model - high-frequency indicators - alternative data - satellite remote sensing

---

## Nourhan Abdelsalam Elsayed Hamdi  (5 topics)

### GovAI: Designing an AI Governance Toolkit for Small Businesses

*Topic ID: 22403*

Enterprises can adopt Artificial Intelligence responsibly through effective governance practices that promote transparency accountability security regulatory compliance and human oversight The research explores AI governance frameworks ethical AI principles risk management data governance Explainable AI and emerging regulatory standards while evaluating how technologies such as Large Language Models Machine Learning Knowledge Graphs semantic reasoning and other suitable Artificial Intelligence techniques can support risk assessment policy recommendation compliance monitoring and organizational decision making The practical component involves developing GovAI an intelligent AI governance platform that assists organizations in evaluating AI readiness identifying governance risks establishing policies and monitoring compliance throughout the AI lifecycle The platform will provide AI maturity assessments automated policy recommendations governance checklists risk evaluation dashboards compliance reporting conversational guidance explainability support and continuous monitoring capabilities demonstrating how Small and Medium Enterprises can adopt AI responsibly while improving transparency trustworthiness accountability and governance maturity

---

### MeshFlow: A Data Mesh Platform for Decentralized Enterprise Data Management

*Topic ID: 22404*

This thesis investigates Data Mesh as a decentralized enterprise data architecture that enables domain oriented ownership data as a product federated governance and self service data infrastructure while comparing it with traditional centralized data management approaches The research evaluates how technologies such as semantic search Knowledge Graphs metadata intelligence recommendation systems automated data discovery and other suitable Artificial Intelligence techniques can improve data accessibility interoperability governance and analytical capabilities across organizational domains The practical component involves developing MeshFlow a web based Data Mesh platform that enables business domains to publish manage govern and consume data products within a shared enterprise ecosystem The platform will include a centralized data product catalog metadata management domain ownership access control governance policies lineage visualization self service data discovery semantic search AI powered recommendations metadata classification conversational data discovery and interactive dashboards demonstrating how Data Mesh can improve organizational agility cross domain collaboration enterprise analytics and AI driven decision making

---

### ProcessPilot: An Agentic AI System for Autonomous Business Process Optimization in Small and Medium Enterprises

*Topic ID: 22406*

This thesis investigates how Agentic Artificial Intelligence can transform Business Process Management by enabling autonomous AI agents to continuously monitor analyze optimize and improve organizational processes while exploring concepts such as Multi Agent Systems Business Process Intelligence Process Mining predictive process monitoring process performance measurement and continuous improvement Relevant technologies including Machine Learning Process Mining predictive analytics Large Language Models Explainable AI reinforcement learning and AI planning will be evaluated to determine how intelligent agent collaboration and human oversight can improve operational efficiency organizational agility and process resilience The practical component involves developing ProcessPilot an agentic business process optimization platform where specialized AI agents collaborate to discover process behavior monitor performance predict process outcomes identify bottlenecks recommend process improvements simulate alternative workflows and support governance through human in the loop decision making The platform will include process visualization agent orchestration performance dashboards explainable recommendations and interactive management capabilities demonstrating how Agentic AI can enable continuous intelligent business process optimization for Small and Medium Enterprises

---

### SmartBPM: Designing an AI-Augmented Business Process Management Platform

*Topic ID: 22407*

This thesis investigates the evolution of Business Process Management through the integration of Artificial Intelligence to create intelligent adaptive and data driven process management systems while exploring the complete BPM lifecycle including process discovery modeling analysis execution monitoring optimization and governance The research evaluates how technologies such as Process Mining Machine Learning predictive analytics simulation models Large Language Models and other suitable AI techniques can enhance process design continuous improvement organizational decision making and digital transformation The practical component involves developing SmartBPM an AI augmented Business Process Management platform that enables organizations to design BPMN models simulate process execution monitor performance analyze process data and receive intelligent recommendations for process improvement The platform will incorporate capabilities such as automated BPMN generation from textual descriptions AI assisted process redesign Process Mining predictive performance monitoring conversational assistance optimization recommendations and interactive management dashboards demonstrating how Artificial Intelligence can transform traditional BPM platforms into intelligent enterprise systems for continuous process improvement and operational excellence

---

### VaultInsight Building an AI-Driven Business Intelligence Platform on Data Vault Architecture

*Topic ID: 22405*

This thesis investigates how modern enterprise data architectures can support intelligent decision making by combining Data Vault 2 0 with Artificial Intelligence and Business Intelligence technologies while exploring scalable data integration historical data management enterprise analytics and intelligent decision support The research evaluates technologies such as Machine Learning predictive analytics anomaly detection forecasting clustering Explainable AI Large Language Models and other suitable AI techniques to determine how they can enhance reporting generate business insights and improve strategic decision making The practical component involves developing VaultInsight an AI driven Business Intelligence platform built on a Data Vault 2 0 architecture that integrates enterprise data from multiple operational systems into a unified analytics environment The platform will provide interactive dashboards executive reporting KPI monitoring sales forecasting customer segmentation anomaly detection automated insight generation conversational analytics and context aware recommendations demonstrating how a modern enterprise data platform can enable intelligent analytics self service business intelligence and AI driven organizational decision support

---

## Raghda  Mohamed Mamdouh Elebrashi  (86 topics)

### Supervised by Dr Ahmed Okasha Dashboard & BI	Blockchain transaction explorer dashboard

*Topic ID: 22465*

On-chain activity metrics: TPS gas fees wallet growth and smart contract interactions
Grafana The Graph API Python SQL

---

### Supervised by Dr Ahmed Okasha Dashboard & BI	Chronic disease prevalence dashboard by governorate

*Topic ID: 22467*

Diabetes hypertension and obesity prevalence mapped against demographic and lifestyle factors
Power BI Python GeoPandas DAX

---

### Supervised by Dr Ahmed Okasha Dashboard & BI	Tax compliance gap analysis dashboard

*Topic ID: 22463*

Estimated vs collected tax by sector and region with audit yield and risk tier distribution
Power BI SQL Python DAX

---

### Supervised by Dr Ahmed Okasha Data Science & Analytics	Accounts receivable ageing prediction

*Topic ID: 22468*

Regression model predicts payment delay by invoice enabling proactive collections outreach
Python XGBoost SQL Excel

---

### Supervised by Dr Ahmed Okasha Data Science & Analytics	Carbon footprint estimation from supply chain data

*Topic ID: 22478*

Scope 1-3 emission model trained on industry benchmarks and procurement records
Python Pandas Scikit-learn Plotly

---

### Supervised by Dr Ahmed Okasha Data Science & Analytics	ESG rating prediction from annual reports

*Topic ID: 22471*

NLP extracts ESG signals from 10-K text to predict rating agency scores without manual review
Python FinBERT spaCy Scikit-learn

---

### Supervised by Dr Ahmed Okasha Data Science & Analytics	Fake news detection for Arabic news portals

*Topic ID: 22475*

A fine-tuned transformer classifies Arabic news articles as credible or misleading with explainability layer
Python CAMeL-Tools BERT Streamlit

---

### Supervised by Dr Ahmed Okasha Data Science & Analytics	Insurance claims fraud scoring

*Topic ID: 22476*

Gradient boosting model trained on claim attributes flags suspicious submissions for adjuster review
Python XGBoost SHAP SQL

---

### Supervised by Dr Ahmed Okasha Data Science & Analytics	Loan default prediction for microfinance

*Topic ID: 22474*

Gradient boosting model trained on alternative data improves default detection beyond traditional scoring
Python XGBoost SHAP Streamlit

---

### Supervised by Dr Ahmed Okasha Data Science & Analytics	Market basket analysis for cross-sell

*Topic ID: 22477*

Apriori and FP-Growth identify frequently co-purchased items to optimise product bundling
Python mlxtend Pandas Seaborn

---

### Supervised by Dr Ahmed Okasha Data Science & Analytics	Purchase order anomaly detection

*Topic ID: 22473*

Unsupervised model flags unusual procurement patterns indicating fraud or policy violations
Python Isolation Forest SQL Power BI

---

### Supervised by Dr Ahmed Okasha Data Science & Analytics	Real estate valuation with explainability

*Topic ID: 22469*

Gradient boosting AVMs with SHAP values make pricing transparent for buyers and appraisers
Python LightGBM SHAP Streamlit

---

### Supervised by Dr Ahmed Okasha Data Science & Analytics	Social media misinformation spread modelling

*Topic ID: 22470*

Network diffusion model tracks how false content propagates and identifies superspreader accounts
Python NetworkX Graph-tool Gephi

---

### Supervised by Dr Hatem al Attar Chat with Your ERP Database

*Topic ID: 22479*

Problem: Employees need ERP data on inventory orders and financials but lack SQL skills creating bottlenecks on IT and reporting teams

Proposed approach: Build a natural language to SQL agent that translates plain language questions into safe schema aware permission respecting ERP queries and returns results as tables or summaries

Data & systems: ERP relational database (eg SAP Odoo Dynamics) — sales inventory and finance tables

Expected outcome: A prototype demonstrating query accuracy access control and measurable time savings versus manual reporting requests

---

### Supervised by Dr Hatem al Attar Chat with Your Knowledge Base

*Topic ID: 22480*

Problem: Sales support and operations staff struggle to find answers buried in SOPs product manuals and policy documents

Proposed approach: A retrieval augmented generation RAG agent that indexes internal documents and answers employee questions with cited sources

Data & systems: Company SOPs CPQ configuration rules product documentation CRM knowledge articles

Expected outcome: A chatbot with measured answer accuracy and reduced resolution time compared to manual document search

---

### Supervised by Dr Hatem al attar CPQ Configuration Assistant

*Topic ID: 22490*

Problem: Sales reps configuring complex products often select incompatible options causing quote errors and delays

Proposed approach: An agent that guides reps through configuration steps in real time validating compatibility rules and suggesting optimal bundles

Data & systems: CPQ product configuration rule engine pricing catalog

Expected outcome: A working assistant that reduces configuration errors and quote turnaround time in test scenarios

---

### Supervised by Dr Hatem al Attar Customer Sentiment & Churn-Risk Agent

*Topic ID: 22481*

Problem: Companies often detect dissatisfaction only after a customer has already churned

Proposed approach: An agent that continuously analyzes CRM interactions emails call transcripts support tickets with NLP sentiment models to score accounts and flag rising churn risk

Data & systems: CRM communication logs support ticket history renewal and contract dates

Expected outcome: A churn risk dashboard with early warning alerts validated against historical churn outcomes

---

### Supervised by Dr Hatem al attar Deal Desk Orchestrator (Multi-Agent System)

*Topic ID: 22495*

Problem: Assembling a complete deal pricing inventory availability credit risk approvals requires manual coordination across CRM CPQ and ERP

Proposed approach: A multi agent system where specialized sub agents pricing inventory credit collaborate under an orchestrator to assemble a complete approval ready deal package

Data & systems: CRM opportunities CPQ pricing ERP inventory and credit data full cross system integration

Expected outcome: An end to end demo assembling a deal package that would otherwise need multiple manual handoffs the strongest capstone candidate given the integration scope

---

### Supervised by Dr Hatem al attar Dynamic Reporting & Charting Agent

*Topic ID: 22486*

Problem: Business users wait on analysts for ad hoc reports and dashboards slowing decision making

Proposed approach: An agent that interprets natural language reporting requests pulls data from ERP CRM sources and auto generates charts and narrative summaries

Data & systems: ERP financial and operations tables CRM pipeline data

Expected outcome: A self service reporting tool that generates accurate correctly labeled visualizations from plain language prompts

---

### Supervised by Dr Hatem al attar Inventory Management Agentent

*Topic ID: 22488*

Problem: Stockouts and overstocking result from reactive manually triggered replenishment decisions

Proposed approach: An agent that monitors stock levels and demand signals in real time and autonomously generates purchase requisitions within preset approval limits

Data & systems: ERP inventory and procurement modules

Expected outcome: A simulation or live pilot showing reduced stockout rate and carrying costs

---

### Supervised by Dr Hatem al attar Lead Qualification & Routing Agent

*Topic ID: 22491*

Problem: Sales teams waste time manually triaging inbound leads delaying follow up on high value prospects

Proposed approach: An agent that scores leads against ideal customer profile criteria routes them to the right rep and drafts a personalized first touch email

Data & systems: CRM lead and opportunity records historical conversion data

Expected outcome: A scoring and routing model with a measured lift in response time and conversion rate versus manual triage

---

### Supervised by Dr Hatem al attar Master Data Quality Agent

*Topic ID: 22493*

Problem: Duplicate and inconsistent customer vendor and product records across ERP and CRM systems degrade reporting and automation accuracy

Proposed approach: An agent that scans records across systems detects likely duplicates and inconsistencies using matching algorithms and proposes merges for human approval

Data & systems: ERP and CRM master data customers vendors products

Expected outcome: A data quality tool with measured precision and recall on duplicate detection against a labeled test set

---

### Supervised by Dr Hatem al attar Order-to-Cash Automation Agent

*Topic ID: 22492*

Problem: Orders can stall between fulfillment billing and payment collection without anyone noticing until it is overdue

Proposed approach: An agent that monitors the order lifecycle end to end flags stuck or anomalous orders auto generates invoices and drafts payment reminder communications

Data & systems: ERP order management billing and accounts receivable modules

Expected outcome: A monitoring agent that demonstrably shortens average days sales outstanding in simulation

---

### Supervised by Dr Hatem al attar Quote & Contract Compliance Checker

*Topic ID: 22494*

Problem: Sales quotes sometimes violate pricing policy or margin thresholds before reaching approval creating downstream risk

Proposed approach: An agent that reviews CPQ generated quotes against policy rules discount limits margin floors approval workflows and flags exceptions automatically

Data & systems: CPQ quotes pricing policy documents approval workflow data

Expected outcome: A compliance checking agent that catches a defined share of policy violations in test quotes

---

### Supervised by Dr Hatem al attar Supply Chain & Demand Forecasting Agent

*Topic ID: 22487*

Problem: Manual demand forecasts are slow to update and often miss shifts in seasonality or market conditions

Proposed approach: An agent combining time series forecasting with external signal ingestion promotions seasonality market trends that autonomously updates forecasts and flags supply risks

Data & systems: ERP sales history procurement lead times inventory levels

Expected outcome: A forecasting model with measured accuracy improvement over the current baseline plus automated risk alerts

---

### Supervised by Dr Minar El Aasser  Interactive Data Visualization for Executive Decision-Making

*Topic ID: 22422*

Track 2: Applications of AI and Machine Learning for Enhanced Business Development

---

### Supervised by Dr Minar El Aasser  Machine Learning for Insider Threat Detection

*Topic ID: 22417*

Track 1: Cybersecurity in the Business World

---

### Supervised by Dr Minar El Aasser  Trustworthy AI for Organizations: Balancing Innovation Security and Compliance

*Topic ID: 22420*

Track 2: Applications of AI and Machine Learning for Enhanced Business Development

---

### Supervised by Dr Minar El Aasser 	Privacy-Preserving Business Intelligence

*Topic ID: 22416*

Track 1: Cybersecurity in the Business World

---

### Supervised by Dr Minar El Aasser 	Secure Role-Based Access in Cloud Data Warehouses

*Topic ID: 22418*

Track 1: Cybersecurity in the Business World

---

### Supervised by Dr Minar El Aasser 	Security threats in digital transformation

*Topic ID: 22414*

Track 1: Cybersecurity in the Business World

---

### Supervised by Dr Minar El Aasser Artificial Intelligence and Machine Learning for Digital Marketing

*Topic ID: 22700*

Track 2: Applications of AI and Machine Learning for Enhanced Business Development

---

### Supervised by Dr Minar El Aasser Cybersecurity in Digital Marketing

*Topic ID: 22412*

Track 1: Cybersecurity in the Business World

---

### Supervised By Dr Minar El Aasser Cybersecurity in Financial Services Importance Threats Challenges

*Topic ID: 22413*

Track 1: Cybersecurity in the Business World

---

### Supervised by Dr Minar El Aasser Human vs AI Decision-Making in Enterprise Management

*Topic ID: 22421*

Track 2: Applications of AI and Machine Learning for Enhanced Business Development

---

### Supervised by Dr Minar El Aasser Private vs Public Generative AI Models A Business and Security Perspective

*Topic ID: 22419*

Track 2: Applications of AI and Machine Learning for Enhanced Business Development

---

### Supervised by Dr Minar El Aasser Using Machine Learning to Predict Business Growth and Risk

*Topic ID: 22423*

Track 2: Applications of AI and Machine Learning for Enhanced Business Development

---

### Supervised by Dr Mohamed Kamel AI Driven Digital Twin for Emergency Department Patient Flow Optimization

*Topic ID: 22496*

This project develops a digital twin of a hospital Emergency Department (ED) to improve patient flow and reduce overcrowding Machine learning models will predict patient Length of Stay (LOS) while an AnyLogic discrete event simulation will evaluate different staffing triage and resource allocation strategies The objective is to identify operational improvements that reduce waiting times while maintaining service quality.

Keywords:
Emergency Department - Digital Twin - Patient Flow - Length of Stay - Prediction - Healthcare Simulation -  AnyLogic - Machine Learning -  Hospital Operations -   Queue Management

---

### Supervised by Dr Mohamed Kamel AI-Assisted Operating Room Scheduling Optimization Using AnyLogic

*Topic ID: 22499*

This project aims to improve operating room utilization by predicting surgery durations using machine learning  The predictions will be incorporated into an AnyLogic simulation to (optimize operating room schedules) (minimize delays) and (increase utilization)

Keywords:
Operating Room Scheduling - Surgery Prediction - Hospital Simulation - Healthcare Operations - Resource Scheduling - AnyLogic - Machine Learning

---

### Supervised by Dr Mohamed Kamel AI-Based Cold Chain Logistics Optimization for Perishable Products

*Topic ID: 22507*

This project predicts spoilage risks during cold-chain transportation and integrates these predictions into a logistics simulation to evaluate (transportation policies) (temperature control strategies) and (inventory decisions).

Keywords:
Cold Chain - Perishable Products - Food Logistics - Temperature Monitoring - Predictive Analytics - AnyLogic

---

### Supervised by Dr Mohamed Kamel AI-Based Warehouse Workforce Planning During Promotional Campaigns

*Topic ID: 22503*

The project predicts workload increases caused by promotional campaigns and develops an AnyLogic warehouse simulation to optimize (workforce allocation) (shift planning) and (order fulfillment performance).

Keywords:
Warehouse Management - Workforce Planning - Promotion Forecasting - Order Fulfillment - AnyLogic - Logistics Analytics

---

### Supervised by Dr Mohamed Kamel AI-Driven Delivery Fleet Scheduling for FMCG Distribution

*Topic ID: 22505*

This project combines demand forecasting with transportation simulation to optimize delivery fleet scheduling. Various routing and scheduling strategies will be evaluated to improve vehicle utilization and reduce logistics costs.

Keywords:
Fleet Scheduling - Transportation Logistics - FMCG Distribution - Vehicle Routing - Demand Forecasting - AnyLogic

---

### Supervised by Dr Mohamed Kamel AI-Driven Outpatient Clinic Appointment Scheduling Simulator

*Topic ID: 22501*

This project predicts patient no-shows using machine learning and integrates the predictions into an appointment scheduling simulation. Different scheduling policies such as overbooking and dynamic appointments will be evaluated to improve clinic utilization and patient satisfaction. 

Keywords:
Appointment Scheduling - No-show Prediction - Outpatient Clinics - Healthcare Analytics - AnyLogic - Scheduling Optimization

---

### Supervised by Dr Mohamed Kamel Dynamic Shelf Replenishment Optimization Using AI and Simulation

*Topic ID: 22506*

The project develops machine learning models to forecast shelf-level demand and uses simulation to (optimize replenishment frequency) (reduce stockouts) and (improve product availability in retail stores).

Keywords:
Shelf Replenishment - Retail Analytics - Inventory Management - Machine Learning - Store Operations - AnyLogic

---

### Supervised by Dr Mohamed Kamel Fresh Food Supply Chain Digital Twin Using Demand Forecasting

*Topic ID: 22502*

This project develops a digital twin of a fresh food supply chain linking (production) (warehousing) and (retail). Machine learning demand forecasts will drive the simulation to evaluate (inventory policies) (transportation strategies) and (spoilage reduction).

Keywords:
Fresh Food Supply Chain - Digital Twin - Demand Forecasting - Food Logistics - Inventory Optimization - AnyLogic - Retail Analytics

---

### Supervised by Dr Mohamed Kamel Machine Learning for Retail Inventory Replenishment Optimization

*Topic ID: 22504*

This project predicts retail product demand and evaluates inventory replenishment policies using simulation. The objective is to minimize stockouts while reducing excess inventory and replenishment costs.

Keywords:
Retail Inventory - Replenishment - Demand Forecasting - Inventory Optimization - AnyLogic - Supply Chain Analytics

---

### Supervised by Dr Mohamed Kamel Machine Learning-Based ICU Bed Allocation Optimization

*Topic ID: 22500*

The project develops predictive models for ICU demand and integrates them into a hospital simulation to evaluate bed allocation strategies The objective is to improve ICU occupancy while reducing patient waiting times during peak demand

Keywords
ICU Management - Bed Allocation - Healthcare Capacity - Predictive Analytics - Hospital Simulation - AnyLogic - Resource Optimization

---

### Supervised by Dr Mohamed Kamel Machine Learning-Based Prediction of Emergency Department Admission Surges

*Topic ID: 22497*

This project focuses on forecasting patient arrivals and admission surges using historical emergency department data    AI models will predict hourly or daily patient demand and the predictions will be integrated into an AnyLogic simulation to evaluate adaptive staffing policies and/or resource planning strategies.

Keywords
Demand Forecasting - Emergency Department- Hospital Capacity- Healthcare Analytics- Time Series Forecasting- AnyLogic- XGBoost- Resource Planning

---

### Supervised by Dr Mohamed Kamel Predictive Inventory Management for Hospital Medical Supplies

*Topic ID: 22498*

The project develops an intelligent inventory management system for hospital medical supplies  Machine learning models will forecast demand for essential items while simulation will evaluate reorder policies and safety stock levels under uncertain demand conditions

Keywords:
Hospital Inventory - Medical Supplies- Inventory Optimization - Demand Forecasting - Supply Chain - Healthcare Logistics -  AnyLogic -Predictive Analytics

---

### Supervised by Dr Wassim Alexan Medical Services Appointment Booking – Android development

*Topic ID: 22461*

This project aims at building an online platform (Web iOS Android) that helps patients in booking appointments at a medical complex where a large number of clinics medical doctors service providers are available A number of constraints would have to be accommodated

---

### Supervised by Dr Wassim Alexan Medical Services Appointment Booking – Back end development

*Topic ID: 22458*

This project aims at building an online platform (Web iOS Android) that helps patients in booking appointments at a medical complex where a large number of clinics medical doctors service providers are available A number of constraints would have to be accommodated

---

### Supervised by Dr Wassim Alexan Medical Services Appointment Booking – Data Security

*Topic ID: 22459*

This project aims at building an online platform (Web iOS Android) that helps patients in booking appointments at a medical complex where a large number of clinics medical doctors service providers are available A number of constraints would have to be accommodated

---

### Supervised by Dr Wassim Alexan Medical Services Appointment Booking – Front end development

*Topic ID: 22457*

This project aims at building an online platform (Web iOS Android) that helps patients in booking appointments at a medical complex where a large number of clinics medical doctors service providers are available A number of constraints would have to be accommodated

---

### Supervised by Dr Wassim Alexan Medical Services Appointment Booking – iOS development

*Topic ID: 22460*

This project aims at building an online platform (Web iOS Android) that helps patients in booking appointments at a medical complex where a large number of clinics medical doctors service providers are available A number of constraints would have to be accommodated

---

### Supervised by Dr Wassim Alexan Medical Services Appointment Booking – Team leadership

*Topic ID: 22462*

This project aims at building an online platform (Web iOS Android) that helps patients in booking appointments at a medical complex where a large number of clinics medical doctors service providers are available A number of constraints would have to be accommodated

---

### Supervised by Dr Wassim Alexan TripleG1D Course Material – Back end development

*Topic ID: 22454*

This project aims at building an online platform (Web iOS Android) that aids the TripleG1D students in finding various course materials of past years This includes lecture slides assignments etc The material on the platform will be supplied by students of the TripleG1D community

---

### Supervised by Dr Wassim Alexan TripleG1D Course Material – Front end development

*Topic ID: 22453*

This project aims at building an online platform (Web iOS Android) that aids the TripleG1D students in finding various course materials of past years This includes lecture slides assignments etc The material on the platform will be supplied by students of the TripleG1D community

---

### supervised by Dr Wassim Alexan TripleG1D Course Material – Study material curation and tech aid

*Topic ID: 22455*

This project aims at building an online platform (Web iOS Android) that aids the TripleG1D students in finding various course materials of past years This includes lecture slides assignments etc The material on the platform will be supplied by students of the TripleG1D community

---

### Supervised by Dr Wassim Alexan TripleG1D Course Material – Team leadership

*Topic ID: 22456*

This project aims at building an online platform (Web iOS Android) that aids the TripleG1D students in finding various course materials of past years This includes lecture slides assignments etc The material on the platform will be supplied by students of the TripleG1D community

---

### Supervised by Dr Wassim Alexan TripleG1D Engineering Journal – Back end development

*Topic ID: 22445*

This project aims at building a website that acts as an engineering journal supported by the TripleG1D engineering community The journal is meant to be an interdisciplinary one covering everything related to engineering from information communication technologies all the way to engineering education It should feature a landing page journal metrics scope latest published articles as well as other information

---

### Supervised by Dr Wassim Alexan TripleG1D Engineering Journal – Front end development

*Topic ID: 22444*

This project aims at building a website that acts as an engineering journal supported by the TripleG1D engineering community The journal is meant to be an interdisciplinary one covering everything related to engineering from information communication technologies all the way to engineering education It should feature a landing page journal metrics scope latest published articles as well as other information

---

### Supervised by Dr Wassim Alexan TripleG1D Engineering Journal – Material curation and tech aid

*Topic ID: 22446*

This project aims at building a website that acts as an engineering journal supported by the TripleG1D engineering community The journal is meant to be an interdisciplinary one covering everything related to engineering from information communication technologies all the way to engineering education It should feature a landing page journal metrics scope latest published articles as well as other information

---

### Supervised by Dr Wassim Alexan TripleG1D Engineering Journal – Team leadership

*Topic ID: 22447*

This project aims at building a website that acts as an engineering journal supported by the TripleG1D engineering community The journal is meant to be an interdisciplinary one covering everything related to engineering from information communication technologies all the way to engineering education It should feature a landing page journal metrics scope latest published articles as well as other information

---

### Supervised by Dr Wassim Alexan TripleG1D Spaces – Android development

*Topic ID: 22451*

This project aims to build an online platform (Web iOS Android) that primarily aids the TripleG1D community in booking any of the available sports courts green areas labs (CS Biology Chemistry etc) as well as printing services Furthermore upon referral by a member of the TripleG1D community external guests could also make use of such a platform

---

### Supervised by Dr Wassim Alexan TripleG1D Spaces – Back end development

*Topic ID: 22449*

This project aims to build an online platform (Web iOS Android) that primarily aids the TripleG1D community in booking any of the available sports courts green areas labs (CS Biology Chemistry etc) as well as printing services Furthermore upon referral by a member of the TripleG1D community external guests could also make use of such a platform

---

### Supervised by Dr Wassim Alexan TripleG1D Spaces – Front end development

*Topic ID: 22448*

This project aims to build an online platform (Web iOS Android) that primarily aids the TripleG1D community in booking any of the available sports courts green areas labs (CS Biology Chemistry etc) as well as printing services Furthermore upon referral by a member of the TripleG1D community external guests could also make use of such a platform

---

### Supervised by Dr Wassim Alexan TripleG1D Spaces – iOS development

*Topic ID: 22450*

This project aims to build an online platform (Web iOS Android) that primarily aids the TripleG1D community in booking any of the available sports courts green areas labs (CS Biology Chemistry etc) as well as printing services Furthermore upon referral by a member of the TripleG1D community external guests could also make use of such a platform

---

### Supervised by Dr Wassim Alexan Wir Lesen – We Read – Android development

*Topic ID: 22440*

This project aims at building an online platform (Web iOS Android) that aids the TripleG1D community to improve their German language abilities The idea is to build something similar to LingQcom or ReadLangcom

The main pillars relate to the websites front end back end German material curation iOS Android development as well as the payment system

---

### Supervised by Dr Wassim Alexan Wir Lesen – We Read – Back end development

*Topic ID: 22435*

This project aims at building an online platform (Web iOS Android) that aids the TripleG1D community to improve their German language abilities The idea is to build something similar to LingQcom or ReadLangcom

The main pillars relate to the websites front end back end German material curation iOS Android development as well as the payment system

---

### Supervised by Dr Wassim Alexan Wir Lesen  We Read — Front end development

*Topic ID: 22443*

This project aims at building an online platform (Web iOS Android) that aids the TripleG1D community to improve their German language abilities The idea is to build something similar to LingQcom or ReadLangcom

The main pillars relate to the websites front end back end German material curation iOS Android development as well as the payment system

---

### Supervised by Dr Wassim Alexan Wir Lesen – We Read – German material curation and tech aid

*Topic ID: 22437*

This project aims at building an online platform (Web iOS Android) that aids the TripleG1D community to improve their German language abilities The idea is to build something similar to LingQcom or ReadLangcom

The main pillars relate to the websites front end back end German material curation iOS Android development as well as the payment system

---

### Supervised by Dr Wassim Alexan Wir Lesen – We Read – iOS development

*Topic ID: 22438*

This project aims at building an online platform (Web iOS Android) that aids the TripleG1D community to improve their German language abilities The idea is to build something similar to LingQcom or ReadLangcom

The main pillars relate to the websites front end back end German material curation iOS Android development as well as the payment system

Six students would work on this project

---

### Supervised by Dr Wassim Alexan Wirr  Lesen – We Read – Team leadership

*Topic ID: 22442*

This project aims at building an online platform (Web iOS Android) that aids the TripleG1D community to improve their German language abilities The idea is to build something similar to LingQcom or ReadLangcom

The main pillars relate to the websites front end back end German material curation iOS Android development as well as the payment system

Six students would work on this project

---

### Supervised by Dr Wassim AlexanTripleG1D Spaces – Team leadership

*Topic ID: 22452*

This project aims to build an online platform (Web iOS Android) that primarily aids the TripleG1D community in booking any of the available sports courts green areas labs (CS Biology Chemistry etc) as well as printing services Furthermore upon referral by a member of the TripleG1D community external guests could also make use of such a platform

---

### Supervised by Dr. Yomna Hassan Intelligent Project Management Toolkit BI Analytics Dashboard

*Topic ID: 22430*

No description available for this topic.

---

### Supervised by Dr. Yomna Hassan Intelligent Project Management Toolkit LLM Project Assistant

*Topic ID: 22429*

No description available for this topic.

---

### Supervised by Dr. Yomna Hassan Intelligent Project Management Toolkit Parallel Scheduling Engine

*Topic ID: 22426*

No description available for this topic.

---

### Supervised by Dr. Yomna Hassan Intelligent Project Management Toolkit Project Risk Prediction Tool

*Topic ID: 22428*

No description available for this topic.

---

### Supervised by Dr. Yomna Hassan Intelligent Project Management Toolkit Resource Allocation Advisor

*Topic ID: 22425*

No description available for this topic.

---

### Supervised by Dr. Yomna Hassan Intelligent Project Management Toolkit Scenario Simulation & Optimization

*Topic ID: 22432*

No description available for this topic.

---

### Supervised by Prof Tallal Shabrawy Agentic AI for Smart Campus Decision Support

*Topic ID: 22684*

Recent advances in Agentic AI enable intelligent software agents that can reason over data plan multi-step tasks support decision-making Building on the existing LoRaWAN Smart Campus testbed this project focuses on developing an AI assistant that integrates with the campus sensor platform to analyse environmental conditions answer natural language queries generate reports recommend actions for campus management Rather than developing new AI models the emphasis is on designing an intelligent decision-support application that combines large language models with real-time IoT data business processes

The student will investigate Agentic AI frameworks integrate the agent with the Smart Campus database sensor platform implement tool-enabled reasoning evaluate the usefulness of the assistant through realistic campus management scenarios

Expected deliverables include an Agentic AI prototype natural language interface integration with the existing LoRaWAN data platform automated reporting capabilities recommendation engine evaluation using real campus sensor data

---

### Supervised by Prof Tallal Shabrawy Data Governance Framework for LoRaWAN-Based Smart Cities

*Topic ID: 22683*

As Smart City platforms evolve ensuring that IoT data is trustworthy secure well managed becomes essential This project investigates the governance aspects of the existing LoRaWAN Smart Campus platform The student will analyse the current data lifecycle propose a governance framework covering data ownership quality metadata privacy security access control retention sharing policies Relevant standards best practices should be reviewed adapted to the Smart Campus environment The proposed framework should support sustainable management of IoT data facilitate future expansion of the platform

Expected deliverables include a data governance framework lifecycle model governance policies security privacy recommendations validation using the existing Smart Campus deployment

---

### Supervised by Prof Tallal Shabrawy Intelligent Padel Performance Analytics and Agentic AI Decision-Support System

*Topic ID: 22687*

This project focuses on designing and implementing a web-based analytics and decision-support platform that transforms the outputs of the existing data collection framework and machine-learning models into actionable coaching insights The system will present player KPIs dashboards heat maps movement analysis and historical trends while integrating an Agentic AI assistant powered by Large Language Models (LLMs) Rather than developing the machine-learning models the project will consume their outputs through a shared database or API

The Agentic AI assistant should answer natural-language questions generate automated session reports explain performance indicators compare training sessions identify strengths and weaknesses and recommend training priorities based on player data The emphasis is on combining Business Intelligence analytics LLMs and decision support to assist coaches and players in evidence-based decision making

Expected deliverables include an analytics dashboard player and coach interfaces KPI framework court visualizations AI coaching assistant automated reporting capabilities natural-language query interface integration with the machine-learning outputs and an evaluation with end users

---

### Supervised by Prof Tallal Shabrawy Machine-Learning-Based Padel Shot Classification and BLE Player Localization

*Topic ID: 22686*

This project focuses on developing machine-learning models that analyse smartwatch sensor data BLE signals to automatically detect classify padel shots estimate player positions on the court Rather than developing new machine-learning algorithms from scratch the emphasis is on designing training evaluating comparing suitable models using the existing wearable platform The system should classify shots such as forehands backhands smashes estimate court zones using BLE localization generate structured outputs that can be consumed by other applications

Expected deliverables include a labelled dataset preprocessing pipeline shot detection classification models BLE localization model model evaluation API or database interface validation using real training sessions

---

### Supervised by Prof Tallal Shabrawy Smart Campus Sustainability Reporting Assistant Using Large Language Models (LLMs)

*Topic ID: 22685*

Universities are increasingly expected to monitor and report on sustainability indicators that support institutional strategies and the United Nations Sustainable Development Goals (SDGs) Building on the existing LoRaWAN Smart Campus testbed this project focuses on developing an intelligent sustainability reporting assistant powered by a Large Language Model (LLM) The assistant will combine environmental sensor data with other relevant campus information such as energy and water consumption classroom occupancy maintenance records weather information or user feedback where available to generate meaningful sustainability reports and decision-support insights

The student will investigate Retrieval-Augmented Generation (RAG) and natural language generation techniques to develop an assistant capable of interpreting Smart Campus data producing executive summaries explaining sustainability KPIs identifying trends and anomalies and responding to natural language queries The project emphasises business reporting and communication rather than AI model development demonstrating how LLMs can support evidence-based sustainability management
Expected deliverables include an LLM-based sustainability reporting assistant integration with Smart Campus data sources automated sustainability reports KPI explanations executive summaries and an evaluation of the assistant using real campus data

---

### Supervised by Prof Tallal Shabrawy Smart City Dashboard and Data Analytics

*Topic ID: 22682*

Smart cities generate large volumes of sensor data that must be transformed into actionable information for campus managers This project focuses on designing implementing a web-based dashboard that integrates data from the existing LoRaWAN testbed stores measurements in a database visualizes real-time historical information provides analytics to support operational decision-making The student will define relevant Smart Campus KPIs perform trend anomaly analysis implement reporting alert mechanisms The outcome should be a decision-support platform demonstrating how environmental sensing can improve sustainability resource management campus operations
Expected deliverables include a functional dashboard database analytics engine KPI reports alerting functions a case study using live campus data

---

## Shaimaa Masry Hussein Masry  (11 topics)

### Campus Pulse: An Explainable AI Dashboard for University Social Media Intelligence

*Topic ID: 22701*

Thesis Question
Can a university identify the real questions confusion and frustrations of prospective students from its own social media comments and does presenting the evidence behind AI generated recommendations increase staff trust and willingness to act on them
Methodology
Collect social media comments and engagement data then use embedding based clustering and keyword extraction to identify recurring topics questions and pain points raised by prospective students A retrieval augmented generation RAG framework generates content recommendations by retrieving the original comments that support each recommendation ensuring every suggestion is grounded in real evidence rather than abstract topic summaries
Application
A dashboard for university marketing and admissions teams that displays recurring student concerns together with AI generated content recommendations linked directly to the supporting social media comments

---

### Co-supervised by Dr Amal Aboulhassan-  SahmAqar A Gamified AI Companion for Fractional Real-Estate Investment Literacy

*Topic ID: 22555*

Thesis Question
Does gamification conversational AI or their combination improve financial literacy for novice investors in Egypts fractional real estate market

Methodology
Develop a mobile learning companion with six gamified modules badge progression and a mock portfolio capstone Conduct a between subjects experiment comparing three versions a gamified AI companion a plain chatbot and a gamified static app using a shared codebase with configurable features Measure financial literacy gains and user engagement across all groups

Application
A mobile prototype that randomly assigns participants to one of the three learning experiences while completing the same educational modules The prototype can also serve as a standalone investor education companion alongside fractional real estate platforms such as Nawy Shares

---

### Co-supervised by Dr Amira Mirghani-  Rubric-Agnostic Grading: A Retrieval-Based Approach to AI Course Evaluation

*Topic ID: 22556*

Thesis Question:
Can a single AI grading system evaluate multiple course rubrics without retraining and does retrieval architecture improve grading beyond using a strong language model alone
Methodology:
Parse each course rubric into retrievable criteria and store them with lecture materials model answers and grading guidelines in a vector database Retrieve the most relevant criteria for each submission and use an open source language model to generate structured scores and justifications Compare results with instructor grades across two university courses with different rubrics and evaluate retrieval against prompt based grading using the same model
Application:
A web based grading assistant that automatically grades student submissions using different course rubrics without retraining and produces structured scores and justifications while demonstrating generalization across courses

---

### Co-supervised by Dr John Zaki- Intern-Hub: Track 1: GitLab-Based Search Continuity & Attribution

*Topic ID: 22566*

Platform Overview
Intern Hub is a GitLab based platform that enables professors and students to search explore and continue Software House intern projects by providing access to project deliverables technology stack contributors documentation and continuity information through semantic search automated onboarding and project attribution
Thesis Question
How can a structured layer built on a self hosted GitLab instance enable efficient search continuity and contributor attribution for Software House intern projects without developing a custom backend
Methodology
Build the platform on self hosted GitLab using labels and custom fields to represent project continuity Automate project intake with n8n workflows including optional AI extraction of technology stack contributors and deliverables Synchronize GitHub projects through scheduled imports and provide faceted search and contributor attribution using GitLab APIs
Application
A web platform that allows staff and students to search filter and continue Software House intern projects while supporting automated onboarding semantic search and contributor attribution without requiring a custom database or backend

---

### Co-supervised by Dr John Zaki- Intern-Hub: Track 2: Self-Hosted Semantic Search (RAG) over GitLab Content

*Topic ID: 22565*

Platform Overview:
Intern Hub is a GitLab based platform that enables professors and students to search explore and continue Software House intern projects by providing access to project deliverables technology stack contributors documentation and continuity information through semantic search automated onboarding and project attribution
Thesis Question:
How can a natural language search layer over Software House intern project documentation enable staff and students to ask questions in plain language instead of relying on keyword searches and filters
Methodology:
Retrieve GitLab wiki pages issues and merge requests through the API then chunk and embed the content using locally hosted embedding models Store embeddings in a local Chroma vector database and combine top k retrieval with a locally hosted language model to generate answers supported by citations to the original GitLab sources Integrate natural language search with structured project filters
Application
A self hosted natural language search system that answers questions about previous Software House intern projects using evidence from GitLab documentation while supporting semantic search project filtering and source grounded responses

---

### IdeaBridge Genesis: Track 1:  A Gamified Guide to Business Entrepreneurship

*Topic ID: 22567*

Platform Overview
IdeaBridge Genesis is an integrated platform that guides GUC and GIU students from entrepreneurship training through AI supported pitch refinement to industry funding or hosting opportunities using three connected components that share one data model Every stage is transparent auditable and based on rubric grounded evaluation with readiness predictions supported by explainable AI
Thesis Question
Does structured gamified entrepreneurship training produce greater knowledge gains than a static guide covering the same content for students with no prior business background
Methodology
Develop gamified learning modules covering idea validation business models market sizing unit economics and business registration with badges and progression Compare them with a content matched static guide in a between subjects experiment using identical pre and post assessments Store completion status and assessment results in the shared IdeaBridge Genesis data model
Application
A self paced entrepreneurship training system where students complete lessons quizzes and assessments while their progress is tracked and shared with the platforms AI pitch coaching and startup showcase components

---

### IdeaBridge Genesis: Track2: PitchCraft :AI-Coached Rubric-Based Pitch Training

*Topic ID: 22568*

Platform Overview:
IdeaBridge Genesis is an integrated platform that guides GUC and GIU students from entrepreneurship training through AI supported pitch refinement to industry funding or hosting opportunities using three connected components that share one data model Every stage is transparent auditable and based on rubric grounded evaluation with readiness predictions supported by explainable AI

Thesis Question:
Can iterative, rubric-grounded AI feedback on a transcribed spoken pitch measurably improve pitch quality beyond independent, self-guided practice using the same rubric?
Methodology:
A pitch evaluation system uses a rubric covering problem clarity market sizing ask clarity and objection readiness
Recorded pitches are transcribed using an open source model and an open source LLM generates structured feedback for each rubric criterion
Open source tools are chosen to protect confidential student ideas and reduce recurring costs
Student attempts and scores are tracked to provide feedback based on progress over time
Students who reach the required quality level across all criteria become eligible for Track 3Application
A startup showcase platform where industry partners discover and express interest in high quality student pitches while staff monitor training outcomes pitch quality engagement analytics and explainable adoption predictions through a unified dashboard
Application
The pitch-coaching part of the platform where a student records a pitch receives structured per-criterion AI feedback and iterates until the pitch clears the quality threshold -at which point it becomes automatically visible in Track 3 partner showcase

---

### IdeaBridge Genesis: Track3: Podium - A Quality-Gated Explainable Showcase and Adoption-Analytics Layer for Student Pitches

*Topic ID: 23284*

Platform Overview:
IdeaBridge Genesis is an integrated platform that guides GUC and GIU students from entrepreneurship training through AI supported pitch refinement to industry funding or hosting opportunities using three connected components that share one data model Every stage is transparent auditable and based on rubric grounded evaluation with readiness predictions supported by explainable AI

Thesis Question:
Does a quality gated showcase of AI scored startup pitches increase industry partner engagement and can explainable AI identify the pitch characteristics that predict adoption using a clearly labelled synthetic dataset

Methodology:
Develop a shared web platform where business partners browse quality approved pitches and express interest while staff monitor training progress pitch scores engagement metrics and adoption predictions Track partner interactions to measure the engagement funnel Train a classifier on a synthetic adoption dataset using rubric scores and pitch features and apply SHAP to explain adoption predictions Evaluate the platform through system testing explainable AI validation and partner feedback

Application
A startup showcase platform where industry partners discover and express interest in high quality student pitches while staff monitor training outcomes pitch quality engagement analytics and explainable adoption predictions through a unified dashboard

---

### Inclusive Support Platform- Track1: Agentic Coordination for Inclusive Learning: Cross-System Disability Support Coordinated by AI

*Topic ID: 22562*

Platform Overview:
The Inclusive Support Platform combines two independent theses that share a common student record Track 1 supports accommodation request coordination across university offices while Track 2 generates accessible learning materials for students with verified special needs creating an integrated support platform
Thesis Question:
Can an AI agent simplify accommodation requests for students with disabilities or personal circumstances by coordinating across disconnected university systems while ensuring all actions require human approval
Methodology:
Develop an n8n orchestrated multi agent workflow that classifies accommodation requests using deterministic rules identifies the relevant university offices prepares coordination messages and keeps all actions in draft form until approved by staff Evaluate the system by measuring task completion time user satisfaction and accessibility compliance against the current manual process
Application:
An accessible mobile application that allows students to submit and track accommodation requests through a single interface while providing staff with a unified dashboard to review approve and coordinate all required actions

---

### Inclusive Support Platform: Track 2: AdaptEd -Adaptive Workflow Automation for Personalized Learning Support

*Topic ID: 22563*

Platform Overview:
The Inclusive Support Platform combines two independent theses that share a common student record Track 1 supports accommodation request coordination across university offices while Track 2 generates accessible learning materials for students with verified special needs creating an integrated support platform
Thesis Question:
Does dynamically generating accessibility adapted learning materials for students with verified special needs improve accessibility engagement and perceived usefulness
Methodology:
Automatically detect new learning materials posted to a simulated LMS for students with verified special needs Use deterministic rules to match each students needs with appropriate accessibility services following accessibility and Universal Design for Learning guidelines An open source language model generates summaries simplified text and quizzes while dedicated tools create accessible formats Students receive notifications when adapted materials are available
Application:
A web based system that automatically creates personalized accessibility adapted learning materials for eligible students including summaries flashcards quizzes and accessible document formats storing them in a personal library with downloadable outputs compatible with external accessibility tools

---

### Predicting Financial Distress in EGX-Listed Firms: An Explainable Early-Warning Tool

*Topic ID: 22559*

Thesis Question:
Can a financial distress model that accounts for EGP devaluation shocks detect early warning signs missed by traditional models while explaining why a firm is classified as distressed
Methodology:
Build a composite financial distress label by combining multiple warning indicators including sustained losses declining cash position and falling earnings Train a time aware machine learning model using accounting fundamentals market behavior and EGX historical data while explicitly identifying EGP devaluation periods Evaluate performance during both devaluation and stable periods and use SHAP explainability to identify the key factors behind each prediction
Application:
An early warning dashboard for analysts and investors displaying the distress risk score trend and SHAP based explanations for each EGX listed firm enabling informed investigation and decision making

---
