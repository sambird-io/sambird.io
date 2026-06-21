export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="px-6 pt-32 pb-12">
      <div className="mx-auto max-w-5xl">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
