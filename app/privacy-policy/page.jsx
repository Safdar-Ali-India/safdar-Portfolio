import Link from "next/link";
import LegalPageLayout, { h2Class, linkClass } from "../../components/legal/LegalPageLayout";
import PageStructuredData from "../../components/seo/PageStructuredData";
import {
  DATA_CONTROLLER,
  DATA_CONTROLLER_LOCATION,
  LEGAL_CONTACT_EMAIL,
  LEGAL_LAST_UPDATED,
  LEGAL_PAGES,
  SITE_NAME,
  SITE_URL,
} from "../../lib/legal-config";
import { buildLegalPageGraph } from "../../lib/structured-data";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Safdar Ali (safdarali.in) collects, uses, and protects personal data — including rights for visitors in the EU, UK, and United States.",
  alternates: {
    canonical: LEGAL_PAGES.privacy.canonical,
  },
  openGraph: {
    title: "Privacy Policy | Safdar Ali",
    url: LEGAL_PAGES.privacy.canonical,
    description: "Privacy notice for safdarali.in — data collection, cookies, analytics, and your rights.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageStructuredData
        graph={buildLegalPageGraph({
          canonical: LEGAL_PAGES.privacy.canonical,
          title: "Privacy Policy",
          description:
            "How Safdar Ali (safdarali.in) collects, uses, and protects personal data — including rights for visitors in the EU, UK, and United States.",
        })}
      />
    <LegalPageLayout
      title="Privacy Policy"
      intro="This notice explains how personal data is handled when you visit safdarali.in. It is written for visitors in India, the European Economic Area (EEA), the United Kingdom, and the United States."
    >
      <p>
        <strong>Effective date:</strong> {LEGAL_LAST_UPDATED}. This policy applies to {SITE_URL} (the
        &quot;Site&quot;), operated by {DATA_CONTROLLER} ({SITE_NAME}), based in {DATA_CONTROLLER_LOCATION}.
      </p>

      <h2 id="controller" className={h2Class}>
        1. Who is responsible for your data?
      </h2>
      <p>
        The data controller for this Site is <strong>{DATA_CONTROLLER}</strong>, {DATA_CONTROLLER_LOCATION}. For
        privacy-related requests, contact{" "}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className={linkClass}>
          {LEGAL_CONTACT_EMAIL}
        </a>{" "}
        or use the{" "}
        <Link href="/contact" className={linkClass}>
          contact page
        </Link>
        .
      </p>

      <h2 id="scope" className={h2Class}>
        2. Scope
      </h2>
      <p>
        This is a personal portfolio website. It provides information about my work, articles, and ways to get in touch.
        The Site does not offer user accounts, e-commerce checkout, or paid subscriptions. If you follow links to
        third-party sites (YouTube, LinkedIn, Medium, Dev.to, etc.), their privacy policies apply instead.
      </p>

      <h2 id="data-collected" className={h2Class}>
        3. What data we collect
      </h2>
      <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
        <li>
          <strong>Contact form:</strong> name, email address, and message content when you submit the form on{" "}
          <Link href="/contact" className={linkClass}>
            /contact
          </Link>
          . Submissions are processed by Getform (third-party form handler) and delivered to me by email.
        </li>
        <li>
          <strong>Email:</strong> if you email me directly, I receive whatever you choose to send (typically name, email,
          and message).
        </li>
        <li>
          <strong>Usage and technical data:</strong> IP address (often truncated or anonymised by analytics tools), browser
          type, device type, referring URL, pages viewed, and approximate region — collected through hosting and analytics
          services described below.
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> small files or identifiers stored on your device for
          analytics and site performance, as described in Section 5.
        </li>
      </ul>
      <p>We do not knowingly collect sensitive categories of data (health, biometrics, etc.) through this Site.</p>

      <h2 id="purposes" className={h2Class}>
        4. How we use data and legal bases (EEA / UK)
      </h2>
      <p>We use personal data for the following purposes:</p>
      <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
        <li>
          <strong>Respond to enquiries</strong> — to read and reply to messages you send via the contact form or email.
          <br />
          <em>Legal basis (GDPR):</em> performance of steps at your request before a contract; legitimate interests in
          responding to professional enquiries.
        </li>
        <li>
          <strong>Operate and secure the Site</strong> — hosting, debugging, abuse prevention, and understanding how the
          Site is used.
          <br />
          <em>Legal basis (GDPR):</em> legitimate interests in running and improving a professional portfolio; where
          required, consent for non-essential cookies/analytics.
        </li>
        <li>
          <strong>Comply with law</strong> — where we must retain or disclose information to meet legal obligations.
          <br />
          <em>Legal basis (GDPR):</em> legal obligation.
        </li>
      </ul>
      <p>
        You may withdraw consent for analytics cookies at any time by blocking cookies in your browser or using a
        consent tool if we add one later. Withdrawal does not affect processing already carried out.
      </p>

      <h2 id="cookies" className={h2Class}>
        5. Cookies and analytics
      </h2>
      <p>The Site may use:</p>
      <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
        <li>
          <strong>Vercel Analytics</strong> — privacy-oriented, aggregated usage metrics (
          <a
            href="https://vercel.com/docs/analytics/privacy-policy"
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel privacy documentation
          </a>
          ).
        </li>
        <li>
          <strong>Vercel Speed Insights</strong> — performance metrics to improve load times.
        </li>
        <li>
          <strong>Strictly necessary cookies</strong> — required for basic site delivery and security (e.g. via the
          hosting provider).
        </li>
      </ul>
      <p>
        In the EEA and UK, non-essential cookies generally require consent. By continuing to use the Site after being
        informed via this policy, you may be deemed to have accepted analytics where local law allows; you can still
        refuse or delete cookies through your browser settings. We do not use advertising or cross-site tracking cookies
        on this Site.
      </p>

      <h2 id="sharing" className={h2Class}>
        6. Third parties and processors
      </h2>
      <p>We share data only as needed with service providers who process it on our behalf:</p>
      <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
        <li>
          <strong>Vercel, Inc.</strong> — website hosting, analytics, and performance (servers may be in the United
          States or other regions).
        </li>
        <li>
          <strong>Getform</strong> — contact form submission handling (
          <a href="https://getform.io" className={linkClass} target="_blank" rel="noopener noreferrer">
            getform.io
          </a>
          ).
        </li>
        <li>
          <strong>Email provider</strong> — to receive messages you send to us.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> sell your personal information. We do not share data for cross-context behavioural
        advertising.
      </p>

      <h2 id="transfers" className={h2Class}>
        7. International transfers
      </h2>
      <p>
        If you access the Site from outside India, your data may be processed in India, the United States, or other
        countries where our providers operate. For transfers from the EEA/UK to countries without an adequacy decision,
        we rely on appropriate safeguards where required (such as Standard Contractual Clauses offered by major
        providers) or other lawful transfer mechanisms.
      </p>

      <h2 id="retention" className={h2Class}>
        8. How long we keep data
      </h2>
      <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
        <li>
          <strong>Contact messages:</strong> kept for as long as needed to handle your enquiry and for a reasonable period
          afterward (typically up to 24 months) unless you ask for earlier deletion or we must keep them longer for legal
          reasons.
        </li>
        <li>
          <strong>Analytics:</strong> retained according to Vercel&apos;s retention settings (aggregated; often shorter
          than raw logs).
        </li>
        <li>
          <strong>Server logs:</strong> retained by the host for security and operations, usually for a limited period.
        </li>
      </ul>

      <h2 id="rights" className={h2Class}>
        9. Your rights
      </h2>
      <p>Depending on where you live, you may have the right to:</p>
      <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate data</li>
        <li>Delete your data (&quot;right to be forgotten&quot;)</li>
        <li>Restrict or object to certain processing</li>
        <li>Data portability (receive data in a structured, machine-readable format)</li>
        <li>Withdraw consent where processing is based on consent</li>
        <li>Lodge a complaint with a supervisory authority (EEA/UK)</li>
      </ul>
      <p>
        <strong>California residents (CCPA/CPRA):</strong> You have the right to know what categories of personal
        information we collect and how we use them, to request deletion, and to opt out of the <em>sale</em> or{" "}
        <em>sharing</em> of personal information. We do not sell or share personal information for cross-context
        behavioural advertising. To exercise rights, email{" "}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className={linkClass}>
          {LEGAL_CONTACT_EMAIL}
        </a>
        . We will not discriminate against you for exercising these rights.
      </p>
      <p>
        To make a request, contact us at{" "}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className={linkClass}>
          {LEGAL_CONTACT_EMAIL}
        </a>
        . We may need to verify your identity before responding. We aim to respond within one month (EEA/UK) or the
        timeframe required by applicable US state law.
      </p>

      <h2 id="children" className={h2Class}>
        10. Children
      </h2>
      <p>
        The Site is not directed at children under 16 (or 13 where applicable law sets a lower age with parental consent).
        We do not knowingly collect personal data from children. If you believe a child has provided data, contact us and
        we will delete it.
      </p>

      <h2 id="security" className={h2Class}>
        11. Security
      </h2>
      <p>
        We use HTTPS, reputable hosting, and sensible access controls. No method of transmission over the Internet is
        100% secure; we cannot guarantee absolute security.
      </p>

      <h2 id="changes" className={h2Class}>
        12. Changes to this policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will change.
        Material changes may be noted on the Site. Continued use after changes constitutes acceptance where permitted by
        law.
      </p>

      <h2 id="contact" className={h2Class}>
        13. Contact
      </h2>
      <p>
        Questions about this policy or your data:{" "}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className={linkClass}>
          {LEGAL_CONTACT_EMAIL}
        </a>
        . See also our{" "}
        <Link href="/terms" className={linkClass}>
          Terms &amp; Conditions
        </Link>
        .
      </p>
    </LegalPageLayout>
    </>
  );
}
