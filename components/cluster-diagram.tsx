export function ClusterDiagram() {
  return (
    <figure className="diagram">
      <figcaption className="flex items-center justify-between gap-3 border-b border-[#526759] pb-4">
        <span className="diagram-label uppercase tracking-wider">Inside the control plane</span>
        <span className="diagram-label">Fig. 01</span>
      </figcaption>
      <div className="mt-5 text-center">
        <p className="diagram-label">kubectl apply -f deployment.yaml</p>
        <div className="diagram-connector" aria-hidden="true" />
        <div className="diagram-node mx-auto max-w-48">API server <span className="text-[#c0d1b5]">↔ etcd</span></div>
        <div className="diagram-connector" aria-hidden="true" />
        <p className="diagram-label mb-3">watch &amp; reconcile</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="diagram-node">Controllers</div>
          <div className="diagram-node">Scheduler</div>
        </div>
        <div className="diagram-connector" aria-hidden="true" />
        <div className="rounded border border-dashed border-[#6b826c] p-4">
          <p className="diagram-label mb-3 text-left">WORKER NODE / kubelet</p>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((pod) => <div key={pod} className="flex items-center justify-center gap-2 rounded-sm bg-[#bdd2ad] px-2 py-3 font-mono text-[10px] text-[#20352a]"><span className="h-1.5 w-1.5 rounded-full bg-[#285940]" aria-hidden="true" />Pod</div>)}
          </div>
        </div>
      </div>
      <p className="diagram-label mt-4 leading-relaxed">A simplified architecture sketch. Components coordinate through the API server.</p>
    </figure>
  );
}
