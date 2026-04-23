import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const UniquePointsSection = ({ id }) => {
  const dataSource = [
    {
      key: '1',
      feature: 'Recall Stress',
      safethread: 'Low/Supportive',
      traditional: 'High/Anxiety-Inducing',
    },
    {
      key: '2',
      feature: 'Entry Style',
      safethread: 'Fragmented/Non-Linear',
      traditional: 'Sequential/Forced',
    },
    {
      key: '3',
      feature: 'Evidence Integrity',
      safethread: 'Cryptographically Verified',
      traditional: 'Volatile/Editable',
    },
  ];

  return (
    <section id={id} className="py-24 px-6 bg-warm-white bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center text-forest mb-16 font-serif">
          Why SafeThread is Different: Understanding Trauma-Informed Legal Documentation.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-sage/20 p-8 rounded-[24px]">
            <h4 className="text-xl font-bold text-forest mb-3">1. Non-Linear "Brain Dump"</h4>
            <p className="text-forest text-[15px] leading-relaxed opacity-90">
              Recall fragments of memory as they surface, without the pressure of sequential storytelling. Trauma-informed UI reduces anxiety.
            </p>
          </div>
          <div className="bg-sage/20 p-8 rounded-[24px]">
            <h4 className="text-xl font-bold text-forest mb-3">2. Automatic Chronology</h4>
            <p className="text-forest text-[15px] leading-relaxed opacity-90">
              Our logic automatically weaves your disjointed entries into a seamless, legally structured timeline.
            </p>
          </div>
          <div className="bg-sage/20 p-8 rounded-[24px]">
            <h4 className="text-xl font-bold text-forest mb-3">3. Immutable Chain of Custody</h4>
            <p className="text-forest text-[15px] leading-relaxed opacity-90">
              Entries are hashed (SHA-256) and cannot be edited. Corrections require new entries, mathematically proving evidence integrity.
            </p>
          </div>
        </div>

        <div className="bg-sage/20 py-10 px-6 rounded-[24px]">
          <h3 className="text-2xl text-forest mb-8 text-center font-bold">Direct Comparison</h3>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl bg-warm-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-sage/30 text-forest font-bold border-b-2 border-sage/40">
                  <th className="py-4 px-6">Feature</th>
                  <th className="py-4 px-6">SafeThread (Our Edge)</th>
                  <th className="py-4 px-6">Traditional Methods</th>
                </tr>
              </thead>
              <tbody>
                {dataSource.map((item, index) => (
                  <tr key={item.key} className={index !== dataSource.length - 1 ? "border-b border-sage/20" : ""}>
                    <td className="py-4 px-6 text-forest">{item.feature}</td>
                    <td className="py-4 px-6 text-terracotta font-bold">
                      <div className="flex items-center gap-2">
                        {item.safethread} <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </td>
                    <td className="py-4 px-6 text-forest opacity-80">{item.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {dataSource.map((item) => (
              <div key={item.key} className="bg-warm-white p-6 rounded-[20px] border border-sage/30">
                <div className="text-xs font-bold uppercase tracking-widest text-forest/60 mb-3">
                  {item.feature}
                </div>
                <div className="mb-4">
                  <div className="text-[10px] text-forest/60 mb-1">SafeThread (Our Edge)</div>
                  <div className="text-terracotta font-bold text-base flex items-center gap-2">
                    {item.safethread} <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-forest/60 mb-1">Traditional Methods</div>
                  <div className="text-forest text-sm opacity-70">
                    {item.traditional}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
