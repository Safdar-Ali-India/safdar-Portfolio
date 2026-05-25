import type { Metadata } from "next";
import Link from "next/link";
import PageBackHeader from "../../../components/PageBackHeader"
import { blogArticleTitleClass } from "../../../lib/ui-classes";
import PageStructuredData from "../../../components/seo/PageStructuredData";
import DeferredSparkles from "../../../components/ui/DeferredSparkles";
import ArticleSupportCTA from "../../../components/blog/ArticleSupportCTA"
import RelatedPosts from "../../../components/blog/RelatedPosts";
import { buildBlogPostingGraph } from "../../../lib/structured-data";
import { requirePublishedBlogPost } from "../../../lib/require-published-blog-post";
import { getPostByHref } from "../../../data/blog-posts";

const SITE = "https://safdarali.in";
const POST_HREF = "/blog/git-commands-cheatsheet-developers-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Git Commands Every Developer Uses Daily — My Cheatsheet",
  description:
    "Git commands cheatsheet 2026 — 20 daily commands with examples from Safdar Ali's React and Next.js workflow in Bengaluru.",
  keywords: [
    "git commands cheatsheet",
    "git daily workflow",
    "git branch commands",
    "Safdar Ali",
    "developer git guide",
    "git for React projects",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Git Commands Every Developer Uses Daily — My Cheatsheet",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-08T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "20 git commands I actually run — branching, fixes, and production React workflow.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — git cheatsheet" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Git Commands Every Developer Uses Daily — My Cheatsheet",
    description: "Not a 100-line poster — 20 git commands with real examples from daily production work.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose =
  "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";
const h2Class =
  "mt-14 scroll-mt-24 font-InterBold text-2xl font-extrabold text-neutral-950 dark:text-ink lg:text-3xl";
const preClass =
  "my-6 overflow-x-auto rounded-xl border border-neutral-200/90 bg-neutral-950 p-4 text-[0.8125rem] leading-relaxed text-neutral-100 dark:border-white/10";
const codeClass = "font-mono text-[0.8125rem]";
const tableClass = "my-6 w-full border-collapse text-sm text-neutral-800 dark:text-ink";
const thClass =
  "border border-neutral-300 bg-neutral-100 px-3 py-2 text-left font-bold dark:border-white/15 dark:bg-white/[0.06]";
const tdClass = "border border-neutral-300 px-3 py-2 dark:border-white/15";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Git Commands Every Developer Uses Daily — My Cheatsheet",
  description: "Git commands cheatsheet — 20 daily commands with examples.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-08",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-08",
  image: OG_IMAGE,
});

export default function GitCommandsCheatsheetDevelopers2026Page() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesbloggit"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full min-h-screen"
          particleColor="#777"
        />
      </div>

      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
<p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            Dec 2026 · Cheatsheet · ~10 min read
          </p>
          <h1 className={blogArticleTitleClass}>
            Git Commands Every Developer Uses Daily — My Cheatsheet
          </h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>{" "}
            — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>

        <div className={`${prose} space-y-6`}>
          <p>
            I&apos;m{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>
            , a frontend engineer in Bengaluru. Posters listing 100 git commands help nobody. This cheatsheet is the{" "}
            <strong>20 commands I run weekly</strong> on React and Next.js repos — with examples, not alphabet soup. If
            you search &quot;git commands cheatsheet,&quot; you want something you can pin next to your terminal, not a
            Wikipedia page.
          </p>
          <p>
            Git is version control for fear — fear of losing work, fear of breaking main, fear of code review. These twenty
            commands cover ninety percent of my terminal history on React and Next.js repos. The rest is git help and Stack
            Overflow for edge cases. If you are interviewing for frontend roles in India, expect a live question about
            branching or fixing a bad commit; this cheatsheet is your rehearsal script.
          </p>

          <h2 id="table" className={h2Class}>
            20 git commands — cheatsheet table
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Command</th>
                  <th className={thClass}>What it does</th>
                  <th className={thClass}>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={tdClass}>git status</td><td className={tdClass}>Working tree state</td><td className={tdClass}>git status -sb</td></tr>
                <tr><td className={tdClass}>git add</td><td className={tdClass}>Stage changes</td><td className={tdClass}>git add src/components/Hero.tsx</td></tr>
                <tr><td className={tdClass}>git commit</td><td className={tdClass}>Record snapshot</td><td className={tdClass}>git commit -m &quot;fix: hero LCP image sizes&quot;</td></tr>
                <tr><td className={tdClass}>git push</td><td className={tdClass}>Upload branch</td><td className={tdClass}>git push -u origin feat/perf-hero</td></tr>
                <tr><td className={tdClass}>git pull</td><td className={tdClass}>Fetch + merge remote</td><td className={tdClass}>git pull --rebase origin main</td></tr>
                <tr><td className={tdClass}>git fetch</td><td className={tdClass}>Download refs only</td><td className={tdClass}>git fetch origin</td></tr>
                <tr><td className={tdClass}>git branch</td><td className={tdClass}>List/create branches</td><td className={tdClass}>git branch -a</td></tr>
                <tr><td className={tdClass}>git checkout / switch</td><td className={tdClass}>Change branch</td><td className={tdClass}>git switch main</td></tr>
                <tr><td className={tdClass}>git merge</td><td className={tdClass}>Combine branches</td><td className={tdClass}>git merge origin/main</td></tr>
                <tr><td className={tdClass}>git rebase</td><td className={tdClass}>Replay commits</td><td className={tdClass}>git rebase main</td></tr>
                <tr><td className={tdClass}>git log</td><td className={tdClass}>History</td><td className={tdClass}>git log --oneline -15</td></tr>
                <tr><td className={tdClass}>git diff</td><td className={tdClass}>Compare changes</td><td className={tdClass}>git diff --staged</td></tr>
                <tr><td className={tdClass}>git stash</td><td className={tdClass}>Shelf WIP</td><td className={tdClass}>git stash push -m &quot;wip modal&quot;</td></tr>
                <tr><td className={tdClass}>git restore</td><td className={tdClass}>Discard / unstage</td><td className={tdClass}>git restore --staged .</td></tr>
                <tr><td className={tdClass}>git reset</td><td className={tdClass}>Move HEAD</td><td className={tdClass}>git reset --soft HEAD~1</td></tr>
                <tr><td className={tdClass}>git cherry-pick</td><td className={tdClass}>Apply one commit</td><td className={tdClass}>git cherry-pick abc1234</td></tr>
                <tr><td className={tdClass}>git revert</td><td className={tdClass}>Safe undo on main</td><td className={tdClass}>git revert HEAD</td></tr>
                <tr><td className={tdClass}>git remote</td><td className={tdClass}>Manage remotes</td><td className={tdClass}>git remote -v</td></tr>
                <tr><td className={tdClass}>git clone</td><td className={tdClass}>Copy repo</td><td className={tdClass}>git clone git@github.com:org/app.git</td></tr>
                <tr><td className={tdClass}>git tag</td><td className={tdClass}>Mark releases</td><td className={tdClass}>git tag v1.4.0 && git push origin v1.4.0</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Pin this table next to your monitor or save as a PDF. The Example column is copy-paste ready — replace branch
            names and file paths with yours. Commands like cherry-pick and bisect appear monthly, not daily; they are here
            because production fires do not wait until you remember syntax.
          </p>

          <h2 id="setup" className={h2Class}>
            One-time setup — identity and default branch
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`git config --global user.name "Safdar Ali"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --global pull.rebase true   # cleaner history on pull`}</code>
          </pre>
          <p>
            SSH keys for GitHub save password prompts — generate with ssh-keygen, add to GitHub settings, clone with
            git@github.com URLs. HTTPS with credential manager works too; pick one per machine.
          </p>

          <h2 id="daily-flow" className={h2Class}>
            Daily flow — morning to PR
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`git switch main
git pull --rebase origin main
git switch -c feat/blog-performance-checklist
# ... edit files ...
git status -sb
git add app/blog/web-performance-checklist-2026/page.tsx
git commit -m "feat(blog): add web performance checklist 2026"
git push -u origin feat/blog-performance-checklist`}</code>
          </pre>
          <p>
            I use conventional commits on team repos — scopes like <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">feat(blog)</code>{" "}
            make changelogs readable. Solo portfolio commits can be simpler; consistency matters more than the exact prefix.
          </p>
          <p>
            Pull with rebase before starting work — your feature branch stays on top of main without merge commits that
            clutter history. Push with -u on first push so future git push works without arguments. Small commits make bisect
            and revert possible; one giant commit titled &quot;fixes&quot; helps nobody when production breaks at 11 PM IST.
          </p>

          <h2 id="before-after" className={h2Class}>
            BEFORE / AFTER — fixing the wrong commit message
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`# BEFORE — panic amend after push (rewrites history on shared branch)
git commit --amend
git push --force   # hurts teammates

# AFTER — not pushed yet: soft reset one commit
git reset --soft HEAD~1
git commit -m "fix(blog): correct performance checklist date"

# AFTER — already on main: revert (safe, auditable)
git revert abc1234
git push origin main`}</code>
          </pre>

          <h2 id="rebase" className={h2Class}>
            Rebase vs merge — what I use on Next.js teams
          </h2>
          <p>
            Feature branches: rebase onto main before PR for a linear history. Long-lived branches or open PRs with many
            reviewers: merge main in to avoid force-push churn. Never rebase commits other people already pulled.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`git fetch origin
git rebase origin/main
# conflict in page.tsx — fix file, then:
git add app/blog/some-post/page.tsx
git rebase --continue`}</code>
          </pre>

          <h2 id="stash" className={h2Class}>
            stash — context switching without junk commits
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`git stash push -m "half-done framer motion"
git switch main
git pull --rebase
git switch feat/animations
git stash list
git stash pop   # apply latest — resolve conflicts if any`}</code>
          </pre>
          <p>
            Production hotfix while mid-feature? Stash, branch from main, fix, push, then return. Cleaner than WIP
            commits titled &quot;temp&quot;.
          </p>

          <h2 id="react-nextjs" className={h2Class}>
            Git + React/Next.js — files you touch every day
          </h2>
          <p>
            On Next.js projects I commit page.tsx files per route, shared components, and lib/ utilities separately. Lockfile
            changes get their own commit so bisect can isolate dependency regressions. Never commit .env — add to
            .gitignore on day one; rotate keys if accidentally pushed.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`# See what changed in App Router only
git diff --stat app/

# Discard local experiment in one component
git checkout origin/main -- components/Hero.tsx

# Stage only performance-related hunks
git add -p app/blog/web-performance-checklist-2026/page.tsx`}</code>
          </pre>

          <h2 id="undo" className={h2Class}>
            Undo mistakes — restore, reset, revert
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`# Unstage everything, keep file edits
git restore --staged .

# Throw away local edits in one file (careful)
git restore components/Header.tsx

# Undo last commit, keep changes staged
git reset --soft HEAD~1`}</code>
          </pre>

          <h2 id="aliases" className={h2Class}>
            Aliases that save keystrokes
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st "status -sb"
git config --global alias.lg "log --oneline --graph -20"`}</code>
          </pre>
          <p>
            Pair git with{" "}
            <Link href="/blog/cursor-claude-react-workflow-2026" className={linkClass}>
              Cursor + Claude workflow
            </Link>{" "}
            — AI generates diffs, you still own commit messages and branch hygiene.
          </p>

          <h2 id="pr-workflow" className={h2Class}>
            Pull request workflow — log and diff before review
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`# See what you are about to push
git log origin/main..HEAD --oneline
git diff origin/main...HEAD --stat

# Interactive staging — split hunks when one file has two fixes
git add -p lib/api.ts`}</code>
          </pre>
          <p>
            Reviewers in Bengaluru product teams often work async. A clean commit history with one logical change per
            commit makes revert and bisect possible when production breaks at 11 PM IST.
          </p>

          <h2 id="bisect" className={h2Class}>
            git bisect — find the commit that broke the build
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`git bisect start
git bisect bad                    # current main is broken
git bisect good v1.3.0            # last known good tag
# test, then mark each step:
git bisect good   # or: git bisect bad
git bisect reset  # when done`}</code>
          </pre>
          <p>
            I used bisect twice in 2025 on Next.js upgrades — a dependency bump broke SSR. Faster than reading fifty
            commits manually.
          </p>
          <p>
            Tag releases on client projects — v1.4.0 gives support a reference when users report bugs. Pair tags with GitHub
            Releases notes listing Lighthouse scores or migration steps. Future you will thank present you when comparing
            bundle size between v1.3.0 and v1.4.0.
          </p>

          <h2 id="conflicts" className={h2Class}>
            Merge conflicts — keep calm, re-read the diff
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`# After conflict markers appear in file:
git status                    # lists unmerged paths
# edit file — remove <<<<<<< ======= >>>>>>>
git add path/to/resolved.tsx
git rebase --continue         # or git merge --continue`}</code>
          </pre>
          <p>
            Conflicts in package-lock.json or pnpm-lock.yaml: often easier to regenerate lockfile than merge by hand.
            Delete lock, install fresh, commit — document in PR why.
          </p>

          <h2 id="closing" className={h2Class}>
            Learn git by shipping, not memorising
          </h2>
          <p>
            Run this cheatsheet on your next feature branch. Break something in a throwaway repo — reset, restore, rebase
            until it feels boring. That boredom is seniority.
          </p>
          <p>
            Pin this article in your team Slack when onboarding juniors. Git is the safety net under every React deploy —
            Vercel rollback fixes production, but git history explains why the bug shipped.
          </p>
          <p>
            I keep this cheatsheet open during code review. When a PR has twelve commits titled &quot;fix,&quot; I ask the
            author to squash with interactive rebase before merge — readable history is a gift to the next engineer on call.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`# Squash last 5 commits into one before merge (unpushed branch)
git rebase -i HEAD~5
# mark pick on first, squash on rest, write one message`}</code>
          </pre>
          <p>
            Related:{" "}
            <Link href="/blog/javascript-promises-vs-async-await-guide" className={linkClass}>
              Promises vs async/await
            </Link>
            . Contact:{" "}
            <Link href="/contact" className={linkClass}>
              safdarali.in/contact
            </Link>
            .
          </p>
          <p>
            GitHub CLI complements terminal git: gh pr create, gh pr checkout, gh run watch for CI. On client repos I never
            merge red CI — Lighthouse budget failures are merge blockers same as failing tests. Attach checklist screenshots
            from the performance article in PR bodies so reviewers see evidence, not claims.
          </p>
          <p>
            Fork workflow for open source: fork, clone your fork, add upstream remote, branch, push to origin, open PR to
            upstream main. git remote -v should show both origin and upstream. Sync fork with upstream main before new feature
            branches — fewer surprise conflicts on long-lived OSS contributions.
          </p>
          <p>
            Security: never commit API keys, .env.local, or service account JSON. git filter-repo or BFG cleans history if you
            leaked secrets — rotate keys immediately. Pre-commit hooks with gitleaks run in two minutes to install and save
            careers. Indian startups have lost production databases to committed credentials; git is not only logistics, it is
            risk management.
          </p>
          <p>
            Monorepos add git complexity — learn git sparse-checkout if you only touch apps/web. Turborepo and Nx do not replace
            git fundamentals; they orchestrate tasks on top of branches you still manage with pull and rebase. One bad force-push
            on shared main still ruins everyone&apos;s afternoon regardless of monorepo tooling.
          </p>
          <p>
            On-call playbooks should list git revert before hotfix branch when main is broken — revert is fast and auditable.
            Hotfix branches from tags work when you need a patch on an older release line. git tag -l and git checkout v1.3.0 -b
            hotfix/1.3.1 are commands you want muscle memory for before the incident, not during it.
          </p>
          <p>
            Teaching git to juniors: pair on one feature branch end-to-end — branch, commit, push, PR, address review, merge.
            Cheatsheet on second monitor. Forbidden until week two: force push, rebase on shared branches, commit --no-verify.
            Week three introduces stash and cherry-pick.             Competence is reps, not flashcards.
          </p>
          <p>
            .gitignore templates for Next.js should include .next, node_modules, .env*, and OS junk. Commit .gitignore before first
            real file — history is cleaner. git check-ignore -v path/to/file explains why something is ignored when uploads fail.
          </p>
          <p>
            Release tags pair with changelogs: git log v1.3.0..v1.4.0 --oneline gives marketing bullet points. Automate with
            release-please or semantic-release when team size justifies it; solo portfolios can stay manual with disciplined tags.
          </p>
          <p>
            The git commands cheatsheet is not glamourous — neither is brushing teeth. Daily hygiene prevents emergencies. Run
            status before lunch and before standup; know your branch; push WIP to remote backup branches if you fear laptop failure.
            Bengaluru traffic is unpredictable; so are laptops left in auto-rickshaws.
          </p>
          <p>
            git worktree add ../hotfix main creates a second checkout folder — useful when you must patch production while a messy
            feature WIP sits in your primary directory. Remove with git worktree remove when done. Advanced, but worth knowing
            before the incident.
          </p>
          <p>
            Blame is archaeology, not punishment: git blame -L 40,60 path/to/file.tsx shows who last touched lines — context for
            refactors, not scorekeeping. Pair blame with git log -p for the full story when debugging a regression introduced three
            months ago on a marketing page you now maintain.
          </p>
          <p>
            Print the twenty-row table, tape it above your monitor, and delete bookmarks to hundred-command posters. Depth on
            twenty beats anxiety about five hundred you will never run. Git competence compounds like compound interest on career
            safety — boring until you need it, then priceless.
          </p>
          <p>
            Every command in the table above earned its row by appearing in my shell history at least twice in one month — not by
            filling space. Add commands to your personal fork of this cheatsheet when you use them repeatedly; prune rows you never
            run. A cheatsheet is a living document, not a poster. Update yours quarterly from git reflog exports if you want data-driven
            rows.
          </p>
          <p>
            Git commands cheatsheet users ask me about most in DMs: how to undo last commit, how to sync fork, how to fix wrong branch.
            Those three flows are covered above in before-after, daily flow, and revert sections — start there before searching
            hundred-command posters online.             Run git status now — know your branch before you read the next article on this blog.
          </p>
          <p>
            Twenty commands, daily habit, fewer production scares — the git commands cheatsheet promise in three clauses. Keep it
            open next to your terminal until status and pull feel automatic every single day.
          </p>

          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
