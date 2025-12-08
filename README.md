# Saddar

**Course:** Electronic Business Development (BINF 503)  
**Semester:** Winter 2025  
**Instructor:** Dr. Nourhan Hamdi  
**Teaching Assistants:** Mr. Nour Gaser, Mr. Omar Alaa

---

## 1. Team Members

_List all team members (5-6 students) below._

| Name             | Student ID | Tutorial Group | GitHub Username |
| :--------------- | :--------- | :------------- | :-------------- |
| Ali Alnaggar        | 13006984       | T4      | @alialnaggar     |
| Youssef Hassan      | 14002686       | T2      | @YoussefAbdelhafez12  |
| Abdelrahman Khattib | 13002667       | T4      | @Overking102 |
| Saif Shoman         | 13006530       | T5      | @saifshoman24-hash  |


---

## 2. Project Description

SADDAR is a FinTech-enabled digital credibility, verification, and micro-guarantee platform designed to help Egyptian micro-exporters (e.g., carpet weavers, pottery makers, leather artisans) sell globally without needing a bank account, Letter of Credit (LC), or Letter of Guarantee (LG).

- **Concept:
Micro-exporters struggle because they lack:
	•	Bank accounts
	•	Past export history
	•	Formal documents
	•	Proof of credibility

Foreign buyers therefore do not trust them, and export deals collapse.

SADDAR solves this through:
	1.	Micro-evidence verification (photos, receipts, reviews, past shipments)
	2.	Digital Exporter Trust Score
	3.	Risk-scoring engine
	4.	Escrow-based payments
	5.	Micro Guarantee Pool for order protection

This enables micro-orders (≤$1,000) to happen safely without heavy banking requirements.
- **Link to Fin-Tech Course Document:** 

---

## 3. Feature Breakdown

### 3.1 Full Scope

Future Features / User Stories
	•	User Authentication (Email/Phone login)
	•	Exporter Dashboard (profile, trust score, analytics)
	•	Evidence Upload System (photos, receipts, reviews)
	•	Automated Verification Engine
	•	Image metadata checks
	•	Courier API validation
	•	Buyer SMS confirmation
	•	Digital Trust Score Calculation
	•	Escrow System Integration
	•	Micro Guarantee Pool
	•	Order Workflow
	•	Create order
	•	Track shipment
	•	Confirm delivery
	•	Buyer Portal (search exporters, check credibility)
	•	Admin Panel
	•	Notification System (SMS & email)
	•	Risk-based fees and limits
	•	API for banks, logistics, and marketplaces (future)

### 3.2 Selected MVP Use Cases (Course Scope)

1.  **User Authentication** (Registration/Login)
2.	Exporter Profile Creation (name, region, product category)
3.	Evidence Upload (upload photos, receipts, reviews)
4.	Trust Score Calculation (simple algorithm for MVP)
5.	Create Micro-Order (buyer places order ≤$1,000)



---

## 4. Feature Assignments (Accountability)


| Team Member | Assigned Use Case       | Brief Description of Responsibility              |
| :---------- | :---------------------- | :----------------------------------------------- |
| Ali Alnaggar | **User Authentication** | Register, Login, JWT handling, Password Hashing. |
| Ali Alnaggar | Exporter Profile Creation	| CRUD profile, validation
| Saif Shoman  | Evidence Upload	| File upload, storage, linking to user
| Youssef Hassan| Trust Score Calculation | Implement scoring logic & API endpoint
| Abdelrahman Khattib | Create Micro-Order |	Order schema, API endpoints

           

---

## 5. Data Model (Initial Schemas)

User Schema

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["exporter", "buyer"], default: "exporter" },
  region: String,
  productType: String,
  trustScore: { type: Number, default: 0 }
});


⸻

Evidence Schema

const EvidenceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["photo", "receipt", "review"], required: true },
  fileUrl: String,
  meta: Object,
  verified: { type: Boolean, default: false }
});


⸻

Order Schema

const OrderSchema = new mongoose.Schema({
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  exporterId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true, max: 1000 }, 
  status: { 
    type: String, 
    enum: ["pending", "shipped", "delivered", "released"], 
    default: "pending" 
  },
  escrowStatus: {
    type: String,
    enum: ["held", "released"],
    default: "held"
  }
});


⸻

Escrow Schema (optional but useful)

const EscrowSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  amount: Number,
  status: { type: String, enum: ["held", "released"], default: "held" }
});
