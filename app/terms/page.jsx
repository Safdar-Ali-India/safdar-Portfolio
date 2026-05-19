import Link from "next/link";
import LegalPageLayout, { h2Class, linkClass } from "../../components/legal/LegalPageLayout";
import {
  DATA_CONTROLLER,
  DATA_CONTROLLER_LOCATION,
  LEGAL_CONTACT_EMAIL,
  LEGAL_LAST_UPDATED,
  LEGAL_PAGES,
  SITE_NAME,
  SITE_URL,
} from "../../lib/legal-config";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of use for safdarali.in — rules for using this portfolio website, intellectual property, disclaimers, and governing law.",
  alternates: {
    canonical: LEGAL_PAGES.terms.canonical,
  },
  openGraph: {
    title: "Terms & Conditions | Safdar Ali",
    url: LEGAL_PAGES.terms.canonical,
    description: "Terms of use for the Safdar Ali portfolio website at safdarali.in.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      intro="Please read these terms before using safdarali.in. By accessing the Site, you agree to them."
    >
      <p>
        <strong>Effective date:</strong> {LEGAL_LAST_UPDATED}. These Terms &amp; Conditions (&quot;Terms&quot;) govern
        your use of {SITE_URL} (the &quot;Site&quot;), operated by {DATA_CONTROLLER} (&quot;we&quot;, &quot;us&quot;,
        &quot;our&quot;), {DATA_CONTROLLER_LOCATION}, trading as {SITE_NAME}.
      </p>

      <h2 id="agreement" className={h2Class}>
        1. Agreement
      </h2>
      <p>
        By accessing or using the Site, you agree to these Terms and our{" "}
        <Link href="/privacy-policy" className={linkClass}>
          Privacy Policy
        </Link>
        . If you do not agree, do not use the Site.
      </p>

      <h2 id="about" className={h2Class}>
        2. About the Site
      </h2>
      <p>
        The Site is a personal portfolio showcasing projects, skills, articles, and contact information. Content is
        provided for general information and professional networking. Nothing on the Site constitutes legal, financial,
        or employment advice unless explicitly agreed in a separate written contract.
      </p>

      <h2 id="acceptable-use" className={h2Class}>
        3. Acceptable use
      </h2>
      <p>You agree not to:</p>
      <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
        <li>Use the Site in any unlawful manner or for fraudulent purposes</li>
        <li>Attempt to gain unauthorised access to the Site, servers, or related systems</li>
        <li>Introduce malware, scrape the Site excessively, or interfere with its operation</li>
        <li>Harass, defame, or submit unlawful content through the contact form</li>
        <li>Misrepresent your identity or affiliation when contacting us</li>
        <li>Use automated means to access the Site in a way that burdens infrastructure without permission</li>
      </ul>
      <p>We may restrict or block access if we reasonably believe these Terms are violated.</p>

      <h2 id="ip" className={h2Class}>
        4. Intellectual property
      </h2>
      <p>
        Unless stated otherwise, all content on the Site — including text, layout, graphics, logos, photographs, and code
        displayed as part of the portfolio — is owned by or licensed to {DATA_CONTROLLER} and protected by copyright and
        other intellectual property laws.
      </p>
      <p>
        You may view and share links to pages for personal, non-commercial purposes. You may not copy, modify,
        distribute, sell, or create derivative works from Site content without prior written permission, except where fair
        use / fair dealing applies under your local law.
      </p>
      <p>
        Project case studies may include work done for clients; client names and assets remain their respective owners
        where applicable.
      </p>

      <h2 id="submissions" className={h2Class}>
        5. Contact form and user submissions
      </h2>
      <p>
        When you submit the contact form or email us, you represent that your message is accurate to the best of your
        knowledge and does not infringe third-party rights. You grant us permission to use your submission to respond to
        you and for related business correspondence. Do not submit confidential or proprietary information you cannot share.
      </p>
      <p>
        How we handle personal data in submissions is described in our{" "}
        <Link href="/privacy-policy" className={linkClass}>
          Privacy Policy
        </Link>
        .
      </p>

      <h2 id="third-party" className={h2Class}>
        6. Third-party links and embeds
      </h2>
      <p>
        The Site links to external platforms (e.g. YouTube, GitHub, LinkedIn, Medium, Dev.to). We are not responsible for
        their content, availability, or privacy practices. Your use of those services is subject to their terms.
      </p>

      <h2 id="disclaimer" className={h2Class}>
        7. Disclaimers
      </h2>
      <p>
        The Site is provided on an <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong> basis.
        To the fullest extent permitted by law, we disclaim all warranties, express or implied, including merchantability,
        fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted,
        error-free, or free of harmful components.
      </p>
      <p>
        Technical articles and tutorials reflect opinions and experience at the time of writing; software changes — verify
        before relying on them in production.
      </p>

      <h2 id="liability" className={h2Class}>
        8. Limitation of liability
      </h2>
      <p>
        To the maximum extent permitted by applicable law, {DATA_CONTROLLER} shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or for loss of profits, data, or goodwill, arising from
        your use of the Site.
      </p>
      <p>
        Our total liability for any claim relating to the Site shall not exceed <strong>one hundred US dollars (USD $100)</strong>{" "}
        or the minimum amount required to be enforceable under applicable law, whichever is greater.
      </p>
      <p>
        <strong>EEA / UK consumers:</strong> Nothing in these Terms excludes or limits liability where it would be
        unlawful to do so (including for death or personal injury caused by negligence, or fraud).
      </p>

      <h2 id="indemnity" className={h2Class}>
        9. Indemnity
      </h2>
      <p>
        You agree to indemnify and hold us harmless from claims, damages, and expenses (including reasonable legal fees)
        arising from your misuse of the Site or breach of these Terms, except where caused by our wilful misconduct.
      </p>

      <h2 id="law" className={h2Class}>
        10. Governing law and disputes
      </h2>
      <p>
        These Terms are governed by the laws of <strong>India</strong>, without regard to conflict-of-law principles.
        Courts in <strong>Bengaluru, Karnataka</strong> shall have exclusive jurisdiction for disputes, subject to
        mandatory consumer protections in your country of residence that cannot be waived.
      </p>
      <p>
        If you are a consumer in the EEA or UK, you may also have the right to bring proceedings in your country of
        residence under applicable consumer law.
      </p>

      <h2 id="changes" className={h2Class}>
        11. Changes
      </h2>
      <p>
        We may update these Terms at any time. The effective date will be revised at the top of the page. Your continued
        use of the Site after changes constitutes acceptance of the updated Terms where permitted by law.
      </p>

      <h2 id="severability" className={h2Class}>
        12. Severability
      </h2>
      <p>
        If any provision of these Terms is held invalid or unenforceable, the remaining provisions remain in full force.
      </p>

      <h2 id="contact" className={h2Class}>
        13. Contact
      </h2>
      <p>
        Questions about these Terms:{" "}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className={linkClass}>
          {LEGAL_CONTACT_EMAIL}
        </a>{" "}
        or the{" "}
        <Link href="/contact" className={linkClass}>
          contact page
        </Link>
        .
      </p>
    </LegalPageLayout>
  );
}
