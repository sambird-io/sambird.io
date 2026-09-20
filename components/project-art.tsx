// Decorative, abstract schematics give each project a visual identity.
// These are illustrations, not product screenshots or live telemetry.
export function ProjectArt({ slug }: { slug: string }) {
  const kind = slug === "eval-first-rag" ? "retrieval" : slug === "gcp-platform-terraform" ? "infrastructure" : slug === "bootstrap-mac" ? "terminal" : slug === "webgoat-cicd" ? "pipeline" : "cluster";
  return (
    <div className="project-art grid-paper" aria-hidden="true">
      <svg viewBox="0 0 360 190" fill="none">
        {kind === "retrieval" ? <>
          {[0, 1, 2].map((i) => <g key={i} transform={`translate(${72 + i * 9} ${45 - i * 6})`}><rect width="54" height="70" rx="3" fill="var(--background)" stroke="currentColor" strokeOpacity=".65" /><path d="M12 19h28M12 28h24M12 37h28M12 46h16" stroke="currentColor" strokeOpacity=".4" /></g>)}
          <path d="M145 76h40m-6-5 6 5-6 5M224 76h31m-6-5 6 5-6 5" stroke="currentColor" />
          <circle cx="205" cy="76" r="21" fill="var(--background)" stroke="currentColor" />
          <path d="m194 76 8 8 14-16" stroke="currentColor" />
          <rect x="262" y="55" width="35" height="42" rx="3" fill="var(--background)" stroke="currentColor" />
          <text x="180" y="134" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace">retrieve → generate → evaluate</text>
        </> : kind === "terminal" ? <>
          <rect x="51" y="28" width="258" height="122" rx="5" fill="var(--background)" stroke="currentColor" strokeOpacity=".55" />
          <path d="M51 49h258" stroke="currentColor" strokeOpacity=".35" />
          {[64, 76, 88].map((x) => <circle key={x} cx={x} cy="39" r="2.5" fill="currentColor" fillOpacity=".5" />)}
          <text x="68" y="78" fill="currentColor" fontSize="11" fontFamily="monospace">$ ./bootstrap.sh</text>
          <text x="68" y="101" fill="currentColor" fontSize="10" fontFamily="monospace">✓ tools   ✓ cloud   ✓ ready</text>
          <path d="M68 119h8" stroke="currentColor" strokeWidth="2" />
        </> : <>
          <path d="M180 61v27M93 88h174M93 88v20m87-20v20m87-20v20" stroke="currentColor" strokeOpacity=".6" strokeDasharray={kind === "pipeline" ? "4 3" : undefined} />
          <rect x="135" y="30" width="90" height="34" rx="4" fill="var(--background)" stroke="currentColor" />
          <text x="180" y="51" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace">{kind === "cluster" ? "control plane" : kind === "pipeline" ? "git push" : "terraform"}</text>
          {["dev", "stage", "prod"].map((label, i) => <g key={label}><rect x={59 + i * 87} y="107" width="68" height="32" rx="4" fill="var(--background)" stroke="currentColor" strokeOpacity=".7" /><text x={93 + i * 87} y="127" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace">{kind === "cluster" ? `node ${i + 1}` : kind === "pipeline" ? ["build", "test", "deploy"][i] : label}</text></g>)}
        </>}
      </svg>
      <span className="project-art-label">{kind} / sketch</span>
    </div>
  );
}
