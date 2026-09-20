export function ClusterDiagram() {
  return (
    <figure className="diagram">
      <figcaption className="flex items-center justify-between gap-3 border-b border-border pb-3">
        <span className="diagram-label">Inside the control plane</span>
        <span className="diagram-label">Simplified view</span>
      </figcaption>
      <div className="mt-4 text-center">
        <p className="diagram-label">kubectl apply -f deployment.yaml</p>
        <div className="diagram-connector" aria-hidden="true" />
        <div className="diagram-node mx-auto max-w-48">API server <span className="text-muted-foreground">↔ etcd</span></div>
        <div className="diagram-connector" aria-hidden="true" />
        <p className="diagram-label mb-3">watch and reconcile</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="diagram-node">Controllers</div>
          <div className="diagram-node">Scheduler</div>
        </div>
        <div className="diagram-connector" aria-hidden="true" />
        <div className="border border-border p-4">
          <p className="diagram-label mb-3 text-left">Worker node · kubelet</p>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((pod) => (
              <div key={pod} className="border border-border bg-surface px-2 py-3 text-sm">Pod {pod}</div>
            ))}
          </div>
        </div>
      </div>
      <p className="diagram-label mt-4 leading-relaxed">Components coordinate through the API server.</p>
    </figure>
  );
}
