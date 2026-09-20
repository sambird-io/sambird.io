import { site } from "@/lib/content";

export function SocialImage({ title, category, subtitle }: { title: string; category: string; subtitle?: string }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 76px", background: "#fafaf8", color: "#252722", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #dedfd8", paddingBottom: 20, fontSize: 23 }}>
        <span>{site.name}</span>
        <span style={{ color: "#62655d", fontSize: 18 }}>{category}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: title.length > 52 ? 58 : 72, fontWeight: 500, lineHeight: 1.08, letterSpacing: -2.5, maxWidth: 1000 }}>{title}</div>
        {subtitle && <div style={{ fontSize: 24, color: "#62655d", lineHeight: 1.4, maxWidth: 950 }}>{subtitle}</div>}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #dedfd8", paddingTop: 20, fontSize: 17, color: "#62655d" }}>
        <span>sambird.io</span><span>Cloud · Platforms · Writing</span>
      </div>
    </div>
  );
}
