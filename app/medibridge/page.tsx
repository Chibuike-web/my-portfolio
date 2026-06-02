import { Tag } from "@/components/tag";
import { ThemeButton } from "@/components/theme-button";
import { ZoomableImage } from "@/components/zoomable-image";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowUpLeft } from "lucide-react";
import Link from "next/link";
import patientOnboardingFirst from "@/assets/medibridge/patient-onboarding-first.webp";
import patientOnboardingSecond from "@/assets/medibridge/patient-onboarding-second.webp";
import patientOnboardingThird from "@/assets/medibridge/patient-onboarding-third.webp";
import patientOnboardingFourth from "@/assets/medibridge/patient-onboarding-fourth.webp";
import patientOnboardingFifth from "@/assets/medibridge/patient-onboarding-fifth.webp";
import patientOnboardingSixth from "@/assets/medibridge/patient-onboarding-sixth.webp";
import patientOnboardingSeventh from "@/assets/medibridge/patient-onboarding-seventh.webp";
import patientManagementFirst from "@/assets/medibridge/patient-management-first.webp";
import patientManagementSecond from "@/assets/medibridge/patient-management-second.webp";
import patientManagementThird from "@/assets/medibridge/patient-management-third.webp";
import patientManagementFourth from "@/assets/medibridge/patient-management-fourth.webp";
import patientManagementFifth from "@/assets/medibridge/patient-management-fifth.webp";
import patientManagementSixth from "@/assets/medibridge/patient-management-sixth.webp";
import patientManagementSeventh from "@/assets/medibridge/patient-management-seventh.webp";
import patientManagementEighth from "@/assets/medibridge/patient-management-eighth.webp";
import patientManagementNinth from "@/assets/medibridge/patient-management-ninth.webp";
import patientManagementTenth from "@/assets/medibridge/patient-management-tenth.webp";
import patientManagementEleventh from "@/assets/medibridge/patient-management-eleventh.webp";
import patientManagementTwelfth from "@/assets/medibridge/patient-management-twelfth.webp";
import patientManagementThirteenth from "@/assets/medibridge/patient-management-thirteenth.webp";
import patientTransferFirst from "@/assets/medibridge/patient-transfers-first.webp";
import patientTransferSecond from "@/assets/medibridge/patient-transfers-second.webp";
import patientTransferThird from "@/assets/medibridge/patient-transfers-third.webp";
import patientTransferFourth from "@/assets/medibridge/patient-transfers-fourth.webp";
import patientTransferFifth from "@/assets/medibridge/patient-transfers-fifth.webp";
import patientTransferSixth from "@/assets/medibridge/patient-transfers-sixth.webp";
import patientTransferSeventh from "@/assets/medibridge/patient-transfers-seventh.webp";

const headingClass = "text-lg font-medium tight text-balance";
const bodyClass = "font-medium leading-[1.4] tight text-muted-foreground text-pretty";
const patientOnboardingGridImages = [
	patientOnboardingSecond,
	patientOnboardingThird,
	patientOnboardingFourth,
	patientOnboardingFifth,
	patientOnboardingSixth,
	patientOnboardingSeventh,
];
const patientManagementGridImages = [
	patientManagementSecond,
	patientManagementThird,
	patientManagementFourth,
	patientManagementFifth,
	patientManagementSixth,
	patientManagementSeventh,
	patientManagementEighth,
	patientManagementNinth,
	patientManagementTenth,
	patientManagementEleventh,
	patientManagementTwelfth,
	patientManagementThirteenth,
];
const patientTransferGridImages = [
	patientTransferSecond,
	patientTransferThird,
	patientTransferFourth,
	patientTransferFifth,
	patientTransferSixth,
	patientTransferSeventh,
];

export default function MedibridgePage() {
	return (
		<main className="mx-auto w-full max-w-[48.875rem] px-4 py-22">
			<nav className="flex items-center justify-between">
				<Link
					href="/"
					aria-label="Back to home"
					className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full bg-surface-muted px-4 py-2 transition-colors duration-150 ease-out hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
				>
					<ArrowLeft className="size-5" />
					<span className="sr-only">Back to home</span>
				</Link>
				<ThemeButton />
			</nav>
			<div className="my-22">
				<div className="flex items-center justify-between">
					<div className="flex flex-col gap-3">
						<h1 className="text-[18px] font-semibold tight">Medibridge</h1>
						<div className="flex items-center gap-1.5">
							<p className="font-medium text-[1rem] text-muted-foreground tight no-line-height">
								AI-powered healthcare management system
							</p>
							<span className="size-0.5 bg-muted-foreground rounded-full" />
							<p className="font-medium text-[1rem] text-muted-foreground tight no-line-height">
								2025
							</p>
						</div>
					</div>
					<div className="flex gap-2">
						{tags.map((tag) => (
							<Tag key={tag.label} label={tag.label} color={tag.color} bgColor={tag.bgColor} />
						))}
					</div>
				</div>
			</div>
			<section id="overview" className="my-22 ">
				<div className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
					<div className="flex flex-col gap-2 w-full">
						<p className="font-secondary font-semibold text-foreground">PROBLEM STATEMENT</p>
						<p className="font-medium text-muted-foreground tight leading-[1.4] text-pretty">
							Medical records are still commonly stored as paper files, scanned documents, PDFs, or
							images. This makes it difficult for hospitals and clinics to quickly access, organize,
							and transfer accurate patient information, especially during inter-facility transfers.
							Healthcare staff often spend time manually reviewing documents, extracting
							information, and handling fragmented records across different systems. The lack of
							structured and interoperable medical data slows down workflows and affects continuity
							of care.
						</p>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<p className="font-secondary font-semibold text-foreground">OBJECTIVE</p>
						<p className="font-medium text-muted-foreground tight leading-[1.4] text-pretty">
							Design a platform that helps hospitals and clinics digitize medical records, extract
							structured patient information from unstructured files, and streamline patient record
							transfers between healthcare facilities. The goal is to reduce administrative
							workload, improve accessibility of patient records, and create a faster and more
							reliable transfer process with review and patient approval workflows.ople.
						</p>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<p className="font-secondary font-semibold text-foreground">SOLUTION OVERVIEW</p>
						<p className="font-medium text-muted-foreground tight leading-[1.4] text-pretty">
							MediBridge is an AI-powered healthcare platform designed to convert physical and
							unstructured medical records into structured digital patient data. The platform allows
							healthcare staff to upload scanned documents, PDFs, and images, automatically extract
							patient information using AI, review the extracted data, and manage patient transfers
							between hospitals through a centralized workflow. The system also includes transfer
							approval flows, record sharing, and structured patient profiles to improve record
							management and continuity of care.
						</p>
					</div>
					<div className="flex items-cemter justify-between">
						<div className="flex flex-col gap-2 w-full">
							<p className="font-secondary font-semibold text-foreground">ROLE</p>
							<div>
								<p className="font-medium text-muted-foreground tight">Product Designer</p>
								<p className="font-medium text-muted-foreground tight">Product Manager</p>
								<p className="font-medium text-muted-foreground tight">Product Engineer</p>
							</div>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<p className="font-secondary font-semibold text-foreground">DURATION</p>
							<p className="font-medium text-muted-foreground tight">Ongoing</p>
						</div>
					</div>
				</div>
				<div className="mt-22 text-muted-foreground font-medium text-pretty flex flex-col gap-2 leading-[1.3]">
					<p>
						Picture this: a patient is rushed from a clinic in Surulere to a specialist hospital in
						Victoria Island. She’s unconscious. Her family does not know her medication history. The
						only record that travels with her is a folded piece of paper, handwritten and partially
						smudged, tucked inside a Ghana-must-go bag. The receiving doctor has maybe ten minutes
						to make decisions that matter. She’s starting with almost nothing. This is not
						hypothetical. This happens every day.
					</p>
					<p>
						I started paying closer attention to how patient records move between hospitals. Files
						stacked in cardboard boxes. Discharge summaries photographed on someone’s Tecno phone
						and sent over WhatsApp. Lab results saved as scanned images that doctors have to zoom
						into just to read clearly.
					</p>
					<p>
						I looked at platforms like Epic Systems and Oracle Health. They are powerful systems,
						but they were built for hospitals with strong IT infrastructure, large budgets, and
						fully digital workflows already in place. That is not the reality for many hospitals in
						Nigeria. Even then, a lot of medical data still has to be typed in manually. The
						challenge is not just storing records. It is the amount of human effort needed to
						organize them in the first place.
					</p>
					<p>
						That is where MediBridge begins. With a simple question: what if we worked with the
						records hospitals already have? The PDFs. The scanned handwritten notes. The
						photographed lab results. The discharge summaries written in different formats across
						different clinics. What if AI could read those records, understand them, and turn them
						into something doctors can quickly search, review, and transfer? MediBridge is designed
						to fit into the way hospitals already work instead of asking them to start over. The
						goal is simple: help the next doctor see the full picture before making critical
						decisions. Because somewhere right now, a doctor is treating a patient without the
						information they need. That gap can be closed.
					</p>
				</div>
			</section>
			<section id="patient-onboarding">
				<h2 className={cn(headingClass, "mb-3")}>Patient Onboarding</h2>
				<p className={cn(bodyClass, "mb-6")}>
					One of the first problems I tried to solve was reducing the amount of manual work involved
					in adding patients into the system. Many hospitals already have patient information stored
					as printed documents, scanned files, PDFs, or images. Re-entering this information
					manually can be repetitive and time-consuming, especially when handling large numbers of
					records. I wanted the onboarding process to feel faster and more structured, so I built an
					AI-assisted flow that allows healthcare staff to upload existing medical documents and
					extract patient’s personal information automatically. The flow supports different file
					formats and guides staff through reviewing extracted information before saving it into the
					patient profile.
				</p>
				<ZoomableImage src={patientOnboardingFirst} width={3000} height={1800} alt="" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
					{patientOnboardingGridImages.map((image, index) => (
						<ZoomableImage
							key={`patient-onboarding-grid-${index + 1}`}
							src={image}
							width={3000}
							height={1800}
							alt=""
							className="md:rounded-[8px]"
						/>
					))}
				</div>

				<div className="mt-6 text-muted-foreground font-medium text-pretty flex flex-col gap-2 leading-[1.3]">
					<p>
						Patient onboarding is usually the first point where hospital staff interact with a new
						record, so I designed the experience to feel simple, reliable, and easy to validate.
						Instead of trying to extract everything at once, I limited the onboarding flow to
						personal patient information like name, age, gender, contact details, and identifiers.
						Keeping the scope smaller at this stage made the extraction process more accurate and
						easier to review before anything is saved. I also made sure AI-generated information is
						never added directly into the system without verification. Extracted fields remain
						editable so staff can confirm, correct, or complete missing details before creating the
						patient record. This helps reduce the chances of incorrect information becoming part of
						a patient’s history.
					</p>
					<p>
						Once the patient has been created digitally in the platform, additional medical
						information can be added gradually from the patient profile over time. Staff can enter
						information manually, or upload documents for AI-assisted extraction when needed. This
						creates a more flexible workflow without making onboarding feel heavy or overwhelming. I
						grouped the extracted information into structured sections to make the review process
						easier and reduce cognitive load. Organizing details clearly helps staff scan records
						faster and spot missing or incorrect information more easily.
					</p>
					<p>
						Hospitals already work with different document types and varying file quality, so I
						designed the upload flow to support PDFs, scanned documents, and images instead of
						relying on a strict template. This makes the experience fit more naturally into existing
						hospital workflows and documentation processes.
					</p>
				</div>
				<div className="my-6 rounded-xl bg-surface-muted p-4">
					<p>Video recording coming soon</p>
				</div>
			</section>
			<section id="patient-management" className="mt-22">
				<h2 className={cn(headingClass, "mb-3")}>Patient Management</h2>
				<div className="mt-3 text-muted-foreground font-medium text-pretty flex flex-col gap-2 leading-[1.3] mb-6">
					<p>
						After onboarding patients into the system, I designed the day-to-day experience of
						managing patient records inside the hospital workflow. Medical information changes
						frequently during treatment, so the interface needed to support quick updates while
						keeping records easy to review during consultations, admissions, transfers, and
						follow-up care.
					</p>
					<p>
						Healthcare staff can manage patient information directly from a centralized patient
						profile with dedicated sections for medications, allergies, diagnoses, procedures,
						immunizations, laboratory results, and medical history. Grouping information into
						sections helps staff quickly locate relevant details, review patient history, and update
						records without moving through multiple pages or relying heavily on uploaded documents.
					</p>
					<p>
						I also designed the system to support ongoing updates as patient care continues. New
						medications can be added, diagnoses reviewed, allergies updated, and laboratory results
						recorded directly within the patient profile. Uploaded files and attachments remain
						available when needed, while extracted and manually entered information becomes easier
						to maintain as part of the patient record over time.
					</p>
					<p>
						The goal was to create a record management experience that feels practical during real
						hospital workflows where information needs to be reviewed quickly, updated regularly,
						and carried across different stages of patient care.
					</p>
				</div>
				<ZoomableImage src={patientManagementFirst} width={3000} height={1800} alt="" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
					{patientManagementGridImages.map((image, index) => (
						<ZoomableImage
							key={`patient-management-grid-${index + 1}`}
							src={image}
							width={3000}
							height={1800}
							alt=""
							className="md:rounded-[8px]"
						/>
					))}
				</div>
				<div className="mt-6 text-muted-foreground font-medium text-pretty flex flex-col gap-2 leading-[1.3]">
					<p>
						Managing patient information in MediBridge goes beyond storing uploaded medical
						documents. The record system is built around editable healthcare data that can grow and
						change as a patient’s condition, treatment, and medical history evolve. Instead of
						making healthcare staff dig through long PDFs, scanned forms, or scattered notes,
						information is organized into sections like medications, allergies, diagnoses,
						procedures, immunizations, laboratory results, and medical history. This makes records
						easier to scan, review, and update during busy clinical workflows where quick access to
						information matters.
					</p>
					<p>
						The system also supports ongoing record management directly from the patient profile.
						Since healthcare information changes regularly, staff can add, edit, or update details
						without replacing entire documents or creating duplicate records. New medications can be
						prescribed, allergies updated, diagnoses reviewed, and procedures recorded as treatment
						continues. This helps keep patient records current instead of turning them into a
						collection of outdated files.
					</p>
					<p>
						While MediBridge still supports document uploads and attachments, extracted and manually
						entered information becomes part of a central patient record that is easier to manage,
						review, and share across hospitals. This creates a more connected and scalable approach
						than relying solely on paper records or uploaded files that become difficult to search
						and maintain over time.
					</p>
					<p>
						To improve accountability, every change made to a patient record is captured in a
						dedicated activity log. Healthcare staff can see what information was updated, when the
						change was made, and how the record has changed over time. This provides better
						visibility across facilities, reduces confusion around record updates, and helps create
						a clearer picture of a patient's care journey.
					</p>
				</div>
				<div className="my-6 rounded-xl bg-surface-muted p-4">
					<p>Video recording coming soon</p>
				</div>
			</section>

			<section id="patient-transfer" className="mt-22">
				<h2 className={cn(headingClass, "mb-3")}>Patient Transfer</h2>
				<div className="mt-3 text-muted-foreground font-medium text-pretty flex flex-col gap-2 leading-[1.3]">
					<p>
						Another area I focused on was improving how patient records are transferred between
						hospitals. In many cases, transfers still involve manually sending files through email,
						printed documents, messaging apps, or other disconnected channels. This can make records
						difficult to track, review, and verify during patient movement between healthcare
						facilities. I wanted the process to feel more structured and transparent, so I designed
						a transfer system that starts directly from an existing patient record inside
						MediBridge.
					</p>
					<p>
						Once the patient approves the request, the system generates a structured PDF document
						containing the patient’s records and securely sends it to the destination hospital.
					</p>
				</div>

				<div className="mt-3 text-muted-foreground font-medium text-pretty flex flex-col gap-2 leading-[1.3] mb-6">
					<p>
						Transfers begin from an existing patient profile to ensure records are already verified
						and organized before being shared with another hospital. During the transfer flow,
						healthcare staff can select the receiving hospital, choose the record types to include,
						and provide additional context like transfer notes or special instructions. Starting
						from an existing patient record helps reduce missing information and makes the process
						easier to manage, especially during urgent referrals where doctors need quick access to
						reliable patient history.
					</p>
					<p>
						Once the patient approves the request, the system generates a structured PDF document
						containing the patient’s records and securely sends it to the destination hospital.
					</p>
				</div>
				<ZoomableImage src={patientTransferFirst} width={3000} height={1800} alt="" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
					{patientTransferGridImages.map((image, index) => (
						<ZoomableImage
							key={`patient-transfer-grid-${index + 1}`}
							src={image}
							width={3000}
							height={1800}
							alt=""
							className="md:rounded-[8px]"
						/>
					))}
				</div>
				<div className="text-muted-foreground font-medium text-pretty flex flex-col gap-2 leading-[1.3] mt-6">
					<p>
						Transfers begin from an existing patient profile to ensure records are already verified
						and organized before being shared with another hospital. During the transfer flow,
						healthcare staff can select the receiving hospital, choose the record types to include,
						and provide additional context like transfer notes or special instructions. Starting
						from an existing patient record helps reduce missing information and makes the process
						easier to manage, especially during urgent referrals where doctors need quick access to
						reliable patient history.
					</p>
					<p>
						I also wanted patients to have visibility and control over how their records are shared.
						Before any transfer is completed, the patient receives an approval request link through
						their registered email. The link opens a browser-based approval page where they can
						review the request details and confirm whether they want to proceed with the transfer.
						To make the approval process clearer and more trustworthy, the confirmation screen
						explains what records are being shared, who the receiving hospital is, and why patient
						approval is required before records can be released.
					</p>
					<p>
						Instead of transferring raw files individually, the system generates a structured PDF
						document containing the patient’s records in a more organized and easier-to-review
						format for the receiving hospital. I also included clear transfer status states so
						healthcare staff can track whether a request is pending, approved, declined, or
						completed. This creates better visibility across the transfer process and reduces
						uncertainty when patients move between healthcare facilities.
					</p>
				</div>
				<div className="my-6 rounded-xl bg-surface-muted p-4">
					<p>Video recording coming soon</p>
				</div>
			</section>
			<Link
				href="/nomba"
				className="mt-22 flex items-end justify-between rounded-[12px] bg-surface-muted p-5 transition-colors duration-150 ease-out hover:bg-surface-hover"
			>
				<ArrowUpLeft className="size-6" />

				<div className="flex flex-col items-end gap-3">
					<p className="text-muted-foreground font-medium no-line-height">Previous</p>
					<p className="text-foreground font-medium no-line-height">Nomba</p>
				</div>
			</Link>
		</main>
	);
}

const tags = [
	{
		label: "Design",
		color: "var(--blue)",
		bgColor: "var(--blue-muted)",
	},
	{
		label: "Dev",
		color: "var(--red)",
		bgColor: "var(--red-muted)",
	},
	{
		label: "Web App",
		color: "var(--green)",
		bgColor: "var(--green-muted)",
	},
];
