export const SkeletonMemoryCard = () => (
  <div className="p-6 bg-silver-sage/10 rounded-[2rem] border border-silver-sage/20 animate-pulse timeline-breath">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-24 h-6 bg-silver-sage/30 rounded-full" />
      <div className="w-2 h-2 rounded-full bg-silver-sage/30" />
    </div>
    <div className="space-y-3 mb-6 pt-2">
      <div className="w-full h-5 bg-silver-sage/30 rounded-full" />
      <div className="w-5/6 h-5 bg-silver-sage/30 rounded-full" />
      <div className="w-3/4 h-5 bg-silver-sage/30 rounded-full" />
    </div>
    <div className="pt-4 border-t border-silver-sage/20 flex items-center justify-between mt-8">
      <div className="w-32 h-4 bg-silver-sage/30 rounded-md" />
      <div className="w-20 h-4 bg-silver-sage/30 rounded-md" />
    </div>
  </div>
);

export const SkeletonTimelineNode = ({ isLast }) => (
  <div className="relative pl-12 pb-16">
    {!isLast && (
      <div className="absolute left-[19px] top-8 bottom-0 w-px bg-silver-sage/30" />
    )}
    <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-warm-white border border-silver-sage/50 flex items-center justify-center z-10 animate-pulse">
      <div className="w-2 h-2 rounded-full bg-silver-sage/30" />
    </div>
    <div className="max-w-3xl space-y-5 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-20 h-4 bg-silver-sage/30 rounded-full" />
        <div className="h-px flex-1 bg-silver-sage/10" />
        <div className="w-16 h-4 bg-silver-sage/30 rounded-full" />
      </div>
      <div className="space-y-3 py-2">
        <div className="w-full h-8 bg-silver-sage/30 rounded-md" />
        <div className="w-2/3 h-8 bg-silver-sage/30 rounded-md" />
      </div>
      <div className="pt-2">
        <div className="w-40 h-3 bg-silver-sage/30 rounded-full" />
      </div>
    </div>
  </div>
);
