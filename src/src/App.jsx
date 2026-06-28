import { useState } from "react";

const ytLink = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q + " nasıl yapılır spor")}`;

const DAYS = [
  {
    id: "pzt", label: "PAZ", full: "PAZARTESİ",
    focus: "PUSH — Göğüs · Omuz · Triceps", color: "#c084fc",
    exercises: [
      { name: "Incline Chest Press Machine", sets: "4", reps: "6-8", target: "Üst Göğüs", machine: "Plaka/Pin Yüklemeli Üst Göğüs Makinesi", tip: "Kalçayı koltuğa sabitle, yukarı iterken göğsünü sıkıştır.", yt: ytLink("incline chest press makinesi") },
      { name: "Machine Chest Press", sets: "4", reps: "8-10", target: "Orta Göğüs", machine: "Oturarak Göğüs Pres Makinesi", tip: "Dirseklerini omuz hizasının altında (45 derece) tut.", yt: ytLink("göğüs pres makinesi") },
      { name: "Cable Fly", sets: "3", reps: "10-12", target: "İç / Dış Göğüs", machine: "Kablo İstasyonu (Arkadan Çekiş)", tip: "Uzatılmış pozisyonda göğüs kasını 1 saniye esnet.", yt: ytLink("kablo göğüs fly") },
      { name: "Machine Shoulder Press", sets: "3", reps: "8-10", target: "Ön Omuz", machine: "Omuz Pres Makinesi", tip: "Koltuk yüksekliğini, tutamaklar çene hizana gelecek şekilde ayarla.", yt: ytLink("omuz pres makinesi") },
      { name: "Cable Lateral Raise", sets: "4", reps: "12-15", target: "Yan Omuz", machine: "Alçak Makara Kablo İstasyonu", tip: "Kabloyu vücudunun arkasından çekerek sürekli gerilim sağla.", yt: ytLink("kablo lateral raise yan omuz") },
      { name: "Rope Pushdown", sets: "3", reps: "10-12", target: "Triceps (Dış Baş)", machine: "Üst Makara Halat", tip: "Dirsekleri gövdene kilitle, sadece ön kolların hareket etsin.", yt: ytLink("rope pushdown triceps halat") },
      { name: "Overhead Cable Extension", sets: "3", reps: "10-12", target: "Triceps (Uzun Baş)", machine: "Baş Üstü Kablo İstasyonu", tip: "Negatif fazı yavaş ve kontrollü yap.", yt: ytLink("overhead cable triceps extension") },
    ]
  },
  {
    id: "sal", label: "SAL", full: "SALI",
    focus: "PULL — Sırt · Biceps · Arka Omuz", color: "#34d399",
    exercises: [
      { name: "Chest Supported Row", sets: "4", reps: "6-8", target: "Orta Sırt / Lat", machine: "PureStrength Sarı Makine", tip: "Göğsünü pede kilitle, ağırlığı tamamen dirseklerinle arkaya çek.", yt: ytLink("chest supported row göğüs destekli kürek") },
      { name: "Plate-Loaded T-Bar Row", sets: "3", reps: "8-10", target: "Tüm Sırt (Kalınlık)", machine: "Göğüs Destekli T-Bar Makinesi", tip: "Göğüs destekli makinede beli tamamen koru.", yt: ytLink("t bar row sırt egzersizi") },
      { name: "Seated Cable Row", sets: "3", reps: "10-12", target: "Orta Sırt / Alt Lat", machine: "Kablo Kürek (V-Bar Tutuş)", tip: "Çekiş yaparken omuzlarını yukarı kaldırma, aşağı bastır.", yt: ytLink("oturarak kablo kürek seated cable row") },
      { name: "Face Pull", sets: "3", reps: "15", target: "Arka Omuz / Trapez", machine: "Üst Makara Halat", tip: "Halatı alnına doğru çekerken ellerini dışarı doğru iki yana aç.", yt: ytLink("face pull arka omuz halat") },
      { name: "Machine Rear Delt Fly", sets: "3", reps: "15", target: "Arka Omuz", machine: "Ters Pec Deck Makinesi", tip: "Dirseklerini hafif bükülü tut ve hareket boyunca o açıyı bozma.", yt: ytLink("ters pec deck arka omuz makinesi") },
      { name: "Machine Biceps Curl", sets: "3", reps: "8-10", target: "Biceps (Genel)", machine: "Oturarak Pazı Makinesi", tip: "Dirseklerini pedden kaldırmadan tepe noktada pazını sıkıştır.", yt: ytLink("biceps curl makinesi pazı") },
      { name: "Cable Hammer Curl", sets: "3", reps: "10-12", target: "Brachialis / Ön Kol", machine: "Alçak Makara Halat", tip: "Başparmakların yukarıyı gösterecek şekilde halatı yukarı sürükle.", yt: ytLink("cable hammer curl ön kol") },
    ]
  },
  {
    id: "car", label: "ÇAR", full: "ÇARŞAMBA",
    focus: "LEGS — Quad · Hamstring · Glute · Calf", color: "#fbbf24",
    exercises: [
      { name: "Leg Press", sets: "4", reps: "8-10", target: "Ön Bacak / Kalça", machine: "Açılı Bacak Pres Makinesi", tip: "Dizlerini göğsüne doğru kontrollü indir, tepede eklemleri kilitleme.", yt: ytLink("leg press bacak presi doğru form") },
      { name: "Smith Machine Split Squat", sets: "3", reps: "10", target: "Ön Bacak / Kalça", machine: "Smith Machine Raylı Sistem", tip: "Dambıl dengesiyle uğraşmadan, ray üzerinde tamamen bacağa odaklan.", yt: ytLink("smith machine split squat bulgarian") },
      { name: "Lying Leg Curl", sets: "4", reps: "10-12", target: "Hamstrings", machine: "Arka Bacak Makinesi", tip: "Kalçanın yukarı kalkmasını engellemek için tutamakları sıkıca kavra.", yt: ytLink("lying leg curl hamstring makinesi") },
      { name: "Smith Machine RDL", sets: "3", reps: "8-10", target: "Arka Bacak / Kalça", machine: "Smith Machine", tip: "Bar rayda düz indiği için bel riski sıfırlanır, kalçayı arkaya it.", yt: ytLink("smith machine romanian deadlift rdl") },
      { name: "Leg Extension", sets: "3", reps: "12-15", target: "Quadriceps", machine: "Ön Bacak Bükme Makinesi", tip: "Tepe noktada 1 saniye bekle.", yt: ytLink("leg extension quadriceps makinesi") },
      { name: "Standing Calf Raise", sets: "4", reps: "12-15", target: "Baldır (Gastrocnemius)", machine: "Ayakta Kalf Makinesi", tip: "Topuklarını olabildiğince aşağı indirip yukarıda parmak ucuna çık.", yt: ytLink("ayakta kalf raise baldır egzersizi") },
      { name: "Seated Calf Raise", sets: "3", reps: "15-20", target: "Baldır (Soleus)", machine: "Oturarak Kalf Makinesi", tip: "Dizler bükülü olduğu için kalf kasının derin liflerini hedefler.", yt: ytLink("oturarak kalf raise seated calf") },
      { name: "Machine Crunch", sets: "3", reps: "12-15", target: "Karın (Abs)", machine: "Karın Makinesi veya Kablo Karın", tip: "Kaburgalarını kalçana yaklaştırarak sıkıştır.", yt: ytLink("karın makinesi cable crunch abs") },
    ]
  },
  {
    id: "per", label: "PER", full: "PERŞEMBE",
    focus: "PUSH 2 — Omuz Ağırlıklı", color: "#f97316",
    exercises: [
      { name: "Flat Chest Press Machine", sets: "4", reps: "8-10", target: "Orta Göğüs", machine: "Düz Göğüs Pres Makinesi", tip: "Makinede göğüs liflerini çok daha ağır yükleyebilirsin.", yt: ytLink("düz göğüs pres makinesi flat chest press") },
      { name: "Incline Smith Machine Press", sets: "3", reps: "10-12", target: "Üst Göğüs", machine: "Smith Machine", tip: "Sehpa açısını 30 dereceye ayarla, barı üst göğse yavaşça indir.", yt: ytLink("incline smith machine bench press üst göğüs") },
      { name: "High-to-Low Cable Fly", sets: "3", reps: "12-15", target: "Alt Göğüs Lifleri", machine: "Üst Makara Kablo İstasyonu", tip: "Kabloları aşağıda ve önde birleştirirken göğsün altını sık.", yt: ytLink("high to low cable fly alt göğüs") },
      { name: "Pec Deck Fly", sets: "3", reps: "10-12", target: "Göğsün Genel Genişliği", machine: "Göğüs Kelebek Makinesi", tip: "Kolları arkaya açtığında göğüs kasının tamamen esnediğinden emin ol.", yt: ytLink("pec deck fly kelebek makinesi göğüs") },
      { name: "Machine Shoulder Press", sets: "2", reps: "10-12", target: "Ön Omuz", machine: "Omuz Pres (Dar veya Paralel Tutuş)", tip: "İtme esnasında omuzlarının yukarı doğru kulaklarına yaklaşmasına izin verme.", yt: ytLink("omuz pres makinesi shoulder press") },
      { name: "Cable Lateral Raise", sets: "4", reps: "12-15", target: "Yan Omuz", machine: "Kablo İstasyonu (Önden Çekiş)", tip: "Bu sefer kabloyu önden alarak lifleri farklı açıdan uyar.", yt: ytLink("kablo lateral raise yan omuz") },
      { name: "Rope Pushdown", sets: "3", reps: "12", target: "Triceps", machine: "Üst Makara Halat", tip: "Set aralarını kısa tutarak arka kollara maksimum kanı pompala.", yt: ytLink("rope pushdown triceps halat") },
      { name: "Overhead Cable Extension", sets: "3", reps: "12", target: "Triceps (Uzun Baş)", machine: "Baş Üstü Kablo İstasyonu", tip: "Dirseklerinin dışarıya doğru çok fazla açılmasına izin verme.", yt: ytLink("overhead cable triceps extension uzun baş") },
    ]
  },
  {
    id: "cum", label: "CUM", full: "CUMA",
    focus: "PULL 2 — Sırt Kalınlık · Biceps Zirve", color: "#60a5fa",
    exercises: [
      { name: "Wide Grip Lat Pulldown", sets: "4", reps: "8-10", target: "Üst Kanat (Genişlik)", machine: "Geniş Tutuş Lat Pulldown Makinesi", tip: "Barı çekerken göğsünü yukarı kaldır, kürek kemiklerini aşağı bastır.", yt: ytLink("geniş tutuş lat pulldown sırt genişlik") },
      { name: "Close Grip Lat Pulldown", sets: "3", reps: "10-12", target: "Alt Kanat Lifleri", machine: "Dar Tutuş Lat Pulldown (Nötr Tutuş)", tip: "Dirseklerini vücuduna mümkün olduğunca yakın tutarak çekiş yap.", yt: ytLink("dar tutuş lat pulldown close grip") },
      { name: "Straight Arm Pulldown", sets: "3", reps: "12-15", target: "İzole Kanat (Lat)", machine: "Kablo Düz Kol Çekiş (Düz Bar)", tip: "Dirsekleri hafif bükülü kilitle, barı bacaklarına doğru presle.", yt: ytLink("straight arm pulldown kablo lat izolasyon") },
      { name: "One Arm Machine Row", sets: "3", reps: "10-12", target: "Sırt Simetrisi / Lat", machine: "Tek Kol Plaka Yüklemeli Row Makinesi", tip: "Vücudunu döndürmeden, sadece sırt kasının gücüyle çekişi tamamla.", yt: ytLink("tek kol makine row sırt") },
      { name: "Face Pull", sets: "3", reps: "15", target: "Arka Omuz / Üst Sırt", machine: "Üst Makara Halat", tip: "Omuz kuşağının arkasını doldurmak için kontrollü ve yüksek tekrarlı odaklan.", yt: ytLink("face pull arka omuz halat") },
      { name: "Machine Rear Delt Fly", sets: "3", reps: "15", target: "Arka Omuz", machine: "Ters Kelebek Makinesi", tip: "Ağırlığı arkaya açarken kürek kemiklerini birbirine çok fazla çarpma.", yt: ytLink("ters kelebek makinesi arka omuz") },
      { name: "Machine Preacher Curl", sets: "3", reps: "10-12", target: "Biceps (Kısa Baş)", machine: "Scott / Preacher Curl Makinesi", tip: "Makinede tepe noktasındaki gerilimi kaçırmazsın.", yt: ytLink("preacher curl scott makinesi biceps") },
      { name: "Cable Hammer Curl", sets: "3", reps: "10-12", target: "Brachialis / Ön Kol", machine: "Alçak Makara Halat", tip: "Ön kollar tamamen yanana kadar tempo kontrollü devam et.", yt: ytLink("cable hammer curl ön kol") },
    ]
  },
];

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [weights, setWeights] = useState({});
  const [completed, setCompleted] = useState({});
  const [expandedEx, setExpandedEx] = useState(null);
  const [savedToast, setSavedToast] = useState(false);

  const day = DAYS[activeDay];

  const setWeight = (exIdx, value) => {
    setWeights(prev => ({ ...prev, [`${day.id}-${exIdx}`]: value }));
  };

  const toggleComplete = (exIdx) => {
    const key = `${day.id}-${exIdx}`;
    setCompleted(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleExpand = (exIdx) => {
    setExpandedEx(expandedEx === exIdx ? null : exIdx);
  };

  const completedCount = day.exercises.filter((_, i) => completed[`${day.id}-${i}`]).length;
  const progress = Math.round((completedCount / day.exercises.length) * 100);

  const handleSave = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#08080f",
      color: "#e2e2e8",
      fontFamily: "'Inter', system-ui, sans-serif",
      paddingBottom: 60,
    }}>

      {/* Toast */}
      {savedToast && (
        <div style={{
          position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)",
          background: day.color, color: "#000", padding: "10px 20px",
          borderRadius: 30, fontSize: 13, fontWeight: 700, zIndex: 999,
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}>
          ✓ Kaydedildi
        </div>
      )}

      {/* Header */}
      <div style={{ background: "#0c0c16", borderBottom: "1px solid #1a1a28", padding: "20px 16px 0" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: 3, color: "#444", textTransform: "uppercase", marginBottom: 4 }}>
            Antrenman Takip
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: -0.5, marginBottom: 16 }}>
            5 Günlük Program
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {DAYS.map((d, i) => (
              <button key={d.id} onClick={() => { setActiveDay(i); setExpandedEx(null); }} style={{
                flex: 1, background: "none", border: "none", cursor: "pointer",
                padding: "8px 4px 10px",
                borderBottom: activeDay === i ? `2px solid ${d.color}` : "2px solid transparent",
                color: activeDay === i ? "#fff" : "#444",
                fontSize: 11, fontWeight: 700, letterSpacing: 1,
                transition: "all 0.15s",
              }}>
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "16px 16px 0" }}>

        {/* Day info + progress */}
        <div style={{
          background: "#0f0f1c",
          border: `1px solid ${day.color}30`,
          borderLeft: `3px solid ${day.color}`,
          borderRadius: 12, padding: "14px 16px", marginBottom: 12,
        }}>
          <div style={{ fontSize: 10, color: day.color, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 3 }}>
            {day.full}
          </div>
          <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 10 }}>
            {day.focus}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ flex: 1, height: 4, background: "#1e1e2e", borderRadius: 2 }}>
              <div style={{ height: "100%", borderRadius: 2, background: day.color, width: `${progress}%`, transition: "width 0.3s ease" }} />
            </div>
            <div style={{ fontSize: 11, color: "#666", whiteSpace: "nowrap" }}>
              {completedCount}/{day.exercises.length}
            </div>
          </div>
        </div>

        {/* Exercises */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {day.exercises.map((ex, i) => {
            const key = `${day.id}-${i}`;
            const isDone = completed[key];
            const w = weights[key] || "";
            const isOpen = expandedEx === i;

            return (
              <div key={i} style={{
                background: isDone ? "#0c0c18" : "#0f0f1c",
                border: `1px solid ${isDone ? day.color + "40" : "#1a1a28"}`,
                borderRadius: 12, overflow: "hidden",
                opacity: isDone ? 0.7 : 1,
                transition: "all 0.2s",
              }}>

                {/* Main row */}
                <div style={{ padding: "13px 14px", display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Checkbox */}
                  <div onClick={() => toggleComplete(i)} style={{
                    width: 22, height: 22, borderRadius: 7,
                    border: `2px solid ${isDone ? day.color : "#2a2a3a"}`,
                    background: isDone ? day.color : "transparent",
                    flexShrink: 0, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, color: "#000", fontWeight: 800,
                    transition: "all 0.15s",
                  }}>
                    {isDone && "✓"}
                  </div>

                  {/* Name & badges */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 13, fontWeight: 700,
                      color: isDone ? "#555" : "#e2e2e8",
                      textDecoration: isDone ? "line-through" : "none",
                      marginBottom: 5,
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {ex.name}
                    </div>
                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                      <span style={{ background: day.color + "20", color: day.color, borderRadius: 5, padding: "2px 7px", fontSize: 10, fontWeight: 700 }}>
                        {ex.sets} SET
                      </span>
                      <span style={{ background: "#1e1e2e", color: "#aaa", borderRadius: 5, padding: "2px 7px", fontSize: 10, fontWeight: 600 }}>
                        {ex.reps} TK
                      </span>
                      <span style={{ background: "#1e1e2e", color: "#666", borderRadius: 5, padding: "2px 7px", fontSize: 10 }}>
                        {ex.target}
                      </span>
                    </div>
                  </div>

                  {/* Weight input */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, flexShrink: 0 }}>
                    <div style={{ fontSize: 9, color: "#444", textTransform: "uppercase", letterSpacing: 1 }}>KG</div>
                    <input
                      type="number"
                      value={w}
                      onChange={e => setWeight(i, e.target.value)}
                      placeholder="—"
                      style={{
                        width: 52, height: 36,
                        background: "#16161f",
                        border: `1px solid ${w ? day.color + "60" : "#2a2a3a"}`,
                        borderRadius: 8,
                        color: w ? day.color : "#555",
                        fontSize: 15, fontWeight: 800,
                        textAlign: "center",
                        outline: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "textfield",
                      }}
                    />
                  </div>
                </div>

                {/* Expand toggle */}
                <div onClick={() => toggleExpand(i)} style={{
                  padding: "8px 14px",
                  borderTop: "1px solid #141420",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 8,
                  background: isOpen ? "#0c0c18" : "transparent",
                  userSelect: "none",
                }}>
                  <span style={{ fontSize: 10, color: "#444" }}>🔧</span>
                  <span style={{ fontSize: 10, color: "#444", flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {ex.machine}
                  </span>
                  <span style={{
                    fontSize: 10, color: "#333",
                    transform: isOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                    flexShrink: 0,
                  }}>▼</span>
                </div>

                {/* Expanded: tip + video */}
                {isOpen && (
                  <div style={{ background: "#0c0c18", borderTop: "1px solid #141420" }}>

                    {/* Tip */}
                    <div style={{ padding: "12px 14px 10px" }}>
                      <div style={{ fontSize: 10, color: "#444", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                        💡 Teknik İpucu
                      </div>
                      <div style={{ fontSize: 12, color: "#888", lineHeight: 1.7 }}>
                        {ex.tip}
                      </div>
                    </div>

                    {/* Video button */}
                    <div style={{ padding: "0 14px 14px" }}>
                      <a
                        href={ex.yt}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex", alignItems: "center", gap: 10,
                          background: "#ff000015",
                          border: "1px solid #ff000040",
                          borderRadius: 10,
                          padding: "11px 14px",
                          textDecoration: "none",
                          cursor: "pointer",
                          transition: "background 0.15s",
                        }}
                      >
                        {/* YouTube icon */}
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                          <rect width="22" height="16" rx="3.5" fill="#FF0000"/>
                          <path d="M9 4.5L15 8L9 11.5V4.5Z" fill="white"/>
                        </svg>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: "#ff4444", marginBottom: 1 }}>
                            Nasıl Yapılır?
                          </div>
                          <div style={{ fontSize: 10, color: "#555" }}>
                            YouTube'da Türkçe video ara
                          </div>
                        </div>
                        <span style={{ fontSize: 12, color: "#333" }}>↗</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Save button */}
        <button onClick={handleSave} style={{
          width: "100%", marginTop: 16,
          background: day.color, border: "none", borderRadius: 12,
          padding: "14px", cursor: "pointer",
          fontSize: 13, fontWeight: 800, color: "#000",
          letterSpacing: 1,
        }}>
          KAYDET
        </button>

        {/* Weekly overview */}
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: "#333", textTransform: "uppercase", marginBottom: 10, fontWeight: 700 }}>
            Haftalık Özet
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {DAYS.map((d, i) => {
              const dayCompleted = d.exercises.filter((_, j) => completed[`${d.id}-${j}`]).length;
              const dayProgress = Math.round((dayCompleted / d.exercises.length) * 100);
              return (
                <div key={d.id} onClick={() => { setActiveDay(i); setExpandedEx(null); }} style={{
                  flex: 1, cursor: "pointer",
                  background: "#0f0f1c",
                  border: `1px solid ${activeDay === i ? d.color + "60" : "#1a1a28"}`,
                  borderRadius: 10, padding: "10px 6px", textAlign: "center",
                }}>
                  <div style={{ fontSize: 9, color: activeDay === i ? d.color : "#444", fontWeight: 700, marginBottom: 6 }}>
                    {d.label}
                  </div>
                  <div style={{ height: 3, background: "#1a1a28", borderRadius: 2, margin: "0 2px" }}>
                    <div style={{ height: "100%", borderRadius: 2, background: d.color, width: `${dayProgress}%` }} />
                  </div>
                  <div style={{ fontSize: 9, color: "#333", marginTop: 5 }}>
                    {dayCompleted}/{d.exercises.length}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 16, fontSize: 11, color: "#2a2a3a", textAlign: "center" }}>
          Kilo bilgileri bu oturumda saklanır
        </div>
      </div>
    </div>
  );
}
