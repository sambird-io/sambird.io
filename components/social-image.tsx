import { site } from "@/lib/content";

export function SocialImage({ title, category, subtitle }: { title: string; category: string; subtitle?: string }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px 72px", background: "#f7f7f0", color: "#202b25", fontFamily: "sans-serif", borderTop: "12px solid #285940" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #ccd3c7", paddingBottom: 26 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, background: "#285940", borderRadius: 5, color: "#f7f7f0", fontSize: 28 }}>sb.</span>
          <span style={{ fontSize: 24 }}>{site.name}</span>
        </div>
        <span style={{ fontSize: 18, letterSpacing: 3, textTransform: "uppercase", color: "#285940" }}>{category}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ fontSize: title.length > 52 ? 60 : 76, fontWeight: 600, lineHeight: 1.08, letterSpacing: -3, maxWidth: 1000 }}>{title}</div>
        {subtitle && <div style={{ fontSize: 25, color: "#59635c", lineHeight: 1.4, maxWidth: 950 }}>{subtitle}</div>}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "#59635c" }}><span>sambird.io</span><span>Cloud / Platforms / Field notes</span></div>
    </div>
  );
}
