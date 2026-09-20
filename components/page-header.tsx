export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <header className="site-shell pb-14 pt-32 sm:pb-16 sm:pt-40">
      {eyebrow && <p className="eyebrow">{eyebrow} / Sam Bird</p>}
      <h1 className="display-title mt-5 max-w-4xl">{title}</h1>
      {intro && <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </header>
  );
}
