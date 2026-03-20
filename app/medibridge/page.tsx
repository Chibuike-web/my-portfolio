import type { Metadata } from "next";
import { Button } from "@/components/button";
import { CancelIcon } from "@/components/icons";
import { LazyImage } from "@/components/lazy-image";
import heroImage from "@/assets/medibridge/hero.webp";
import firstImage from "@/assets/medibridge/first.webp";
import secondImage from "@/assets/medibridge/second.webp";
import thirdImage from "@/assets/medibridge/third.webp";
import fourthImage from "@/assets/medibridge/fourth.webp";
import fifthImage from "@/assets/medibridge/fifth.webp";
import sixthImage from "@/assets/medibridge/sixth.webp";
import seventhImage from "@/assets/medibridge/seventh.webp";
import eighthImage from "@/assets/medibridge/eighth.webp";
import ninthImage from "@/assets/medibridge/ninth.webp";
import tenthImage from "@/assets/medibridge/tenth.webp";
import eleventhImage from "@/assets/medibridge/eleventh.webp";
import twelfthImage from "@/assets/medibridge/twelfth.webp";
import thirteenthImage from "@/assets/medibridge/thirteenth.webp";

export const metadata: Metadata = {
  title: "Medibridge",
  description: "Case study for an AI-powered EHR and patient record transfer platform.",
};

export default function MedibridgePage() {
  return (
    <main className="mx-auto w-full max-w-[81rem] px-6 xl:px-0">
      <nav className="flex w-full items-center justify-between py-8 text-sm md:text-base">
        <header className="flex flex-col gap-2.5">
          <p className="font-secondary font-semibold text-gray-700">AI-POWERED EHR</p>
          <p className="font-secondary font-semibold text-gray-500">ONE PLATFORM, EVERY PATIENT</p>
        </header>
        <Button as="link" href="/" fullWidth={false} aria-label="Back to home">
          <CancelIcon />
        </Button>
      </nav>

      <h1 className="text-[2rem] font-semibold tracking-[-0.02em] text-balance md:text-[4rem]">
        Streamlining How Records Are Captured and Shared Across Hospitals
      </h1>
      <figure className="mt-11 mb-[3.25rem] w-full xl:h-[52.5rem] md:mt-[5.5rem] md:mb-[6.5rem]">
        <LazyImage
          src={heroImage}
          alt="Image showing a MacBook laptop on a concrete surface displaying the dashboard screen"
          className="h-full rounded-[1rem] object-cover ring-1 ring-black/5 md:rounded-[2rem]"
          sizes="(max-width: 1280px) 100vw, 1296px"
        />
      </figure>

      <section className="flex flex-col gap-6 md:flex-row">
        <div className="row-span-3 w-full max-w-[26rem] font-secondary text-xl font-bold text-gray-700 md:text-2xl">
          MEDIBRIDGE
        </div>
        <div className="grid max-w-[53.5rem] grid-cols-1 gap-6 sm:grid-cols-2">
          <p className="w-full text-sm leading-[1.6] font-medium text-pretty text-gray-500 md:text-base">
            MediBridge started as a hackathon project focused on a healthcare gap: extracting usable
            data from paper records and enabling secure digital transfer between providers.
          </p>
          <p className="w-full text-sm leading-[1.6] font-medium text-pretty text-gray-500 md:text-base">
            The platform uses AI to convert scanned documents into structured patient data and
            supports record sharing with patient approval.
          </p>
          <div className="flex w-full flex-col gap-1">
            <h2 className="font-secondary text-sm font-semibold text-gray-700 md:text-base">
              PROBLEM STATEMENT
            </h2>
            <p className="w-full text-sm leading-[1.6] font-medium text-pretty text-gray-500 md:text-base">
              Medical records are still stored in paper form or unstructured digital formats like
              scanned PDFs or images. This creates friction for hospitals and clinics trying to
              access accurate patient history, especially during inter-facility transfers.
            </p>
          </div>
          <div className="flex w-full flex-col gap-1">
            <h2 className="font-secondary text-sm font-semibold text-gray-700 md:text-base">
              SOLUTION OVERVIEW
            </h2>
            <p className="w-full text-sm leading-[1.6] font-medium text-pretty text-gray-500 md:text-base">
              I am designing and building an AI-powered platform that extracts structured medical
              data from physical documents so hospitals and clinics can digitize records and manage
              transfers with review and patient approval.
            </p>
          </div>
          <div className="flex w-full items-start gap-4">
            <div className="flex w-full flex-col gap-1">
              <h2 className="font-secondary text-sm font-semibold text-gray-700 md:text-base">ROLE</h2>
              <ul className="flex list-none flex-col">
                <li className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
                  Product Designer
                </li>
                <li className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
                  Product Manager
                </li>
                <li className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
                  Product Engineer
                </li>
              </ul>
            </div>
            <div className="flex w-full flex-col gap-1">
              <h2 className="font-secondary text-sm font-semibold text-gray-700 md:text-base">
                DURATION
              </h2>
              <p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">Ongoing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[3.25rem] flex flex-col gap-6 md:mt-[6.5rem] md:gap-12">
        <p className="w-full max-w-[53.4375rem] text-sm leading-[1.6] font-medium text-pretty text-gray-500 md:text-base">
          I wanted onboarding to feel seamless since the product is built for non-technical users,
          mainly clinicians. I chose a simple registration flow for new users, where the first
          person to sign up becomes the owner and can invite an admin after the hospital details are
          verified.
        </p>
        <LazyImage src={firstImage} alt="Image showing onboarding screen" className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]" />
        <LazyImage
          src={secondImage}
          alt="Image showing two screens side by side, owner account setup form and hospital details form"
          className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]"
        />
        <LazyImage
          src={thirdImage}
          alt="Image showing invite admin form and complete account setup form"
          className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]"
        />
      </section>

      <section className="mt-[3.25rem] flex flex-col gap-6 md:mt-[6.5rem] md:gap-12">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-balance text-gray-700 md:text-5xl">
            Add new patients
          </h2>
          <p className="w-full max-w-[53.4375rem] text-sm leading-[1.6] font-medium text-pretty text-gray-500 md:text-base">
            Adding a new patient is streamlined for bulk onboarding. Clinicians upload individual
            documents, each representing a single patient. The system extracts key personal and
            clinical details from each file to generate separate digital patient profiles.
          </p>
        </div>
        <LazyImage src={fourthImage} alt="Image showing an empty dashboard screen" className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]" />
        <LazyImage src={fifthImage} alt="Image showing uploaded patient document states" className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]" />
        <LazyImage src={sixthImage} alt="Image showing extracted patient data for review" className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]" />
        <LazyImage src={seventhImage} alt="Image showing patient profile confirmation flow" className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]" />
      </section>

      <section className="mt-[3.25rem] flex flex-col gap-6 md:mt-[6.5rem] md:gap-12">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-balance text-gray-700 md:text-5xl">
            Transfer patient record
          </h2>
          <p className="w-full max-w-[53.4375rem] text-sm leading-[1.6] font-medium text-pretty text-gray-500 md:text-base">
            To transfer records, the patient must already exist in the system with their records. A
            clinician selects the patient, chooses the receiving hospital, and picks the format for
            sharing. Instead of sending the records immediately, the platform sends a transfer
            request to the patient for approval.
          </p>
        </div>
        <LazyImage src={eighthImage} alt="Image showing a filled dashboard screen with Patient Records active" className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]" />
        <LazyImage src={ninthImage} alt="Image showing a filled dashboard screen with Transfers active" className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]" />
        <LazyImage src={tenthImage} alt="Image showing two transfer modals with patient selection states" className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]" />
      </section>

      <section className="mt-[3.25rem] flex flex-col gap-6 md:mt-[6.5rem] md:gap-12">
        <div className="mt-6 md:mt-12">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-balance text-gray-700 md:text-5xl">
            Overview
          </h2>
          <LazyImage
            src={eleventhImage}
            alt="Image showing hospital target fields in empty and filled states"
            className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
          />
        </div>
        <div className="mt-6 md:mt-12">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-balance text-gray-700 md:text-5xl">
            Patient Records
          </h2>
          <LazyImage
            src={twelfthImage}
            alt="Image showing empty and filled states for clinical document sharing fields"
            className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
          />
        </div>
        <div className="mt-6 mb-[3.25rem] md:mt-12 md:mb-[6.5rem]">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-balance text-gray-700 md:text-5xl">
            Transfers
          </h2>
          <LazyImage
            src={thirteenthImage}
            alt="Image showing transfer review confirmation states"
            className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
          />
        </div>
      </section>
    </main>
  );
}
