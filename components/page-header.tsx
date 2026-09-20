export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <header className="site-shell pb-10 pt-14 sm:pb-12 sm:pt-16">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="display-title mt-5 max-w-3xl">{title}</h1>
      {intro && <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{intro}</p>}
    </header>
  );
}
