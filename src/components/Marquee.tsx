import { motion } from 'motion/react';

export function Marquee() {
  return (
    <div className="bg-amber-900 text-amber-50 py-2 overflow-hidden flex whitespace-nowrap" dir="ltr">
      <motion.div
        className="flex gap-8 text-sm font-medium tracking-wide"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        <span>🌟 عرض خاص: توصيل مجاني للطلبات فوق 500 ريال 🌟</span>
        <span>✨ اكتشف تشكيلتنا الجديدة من العطور الصيفية ✨</span>
        <span>🌟 خصم 20% على جميع عطور المسك 🌟</span>
        <span>✨ تسوق الآن وادفع لاحقاً مع تابي وتمارا ✨</span>
        <span>🌟 عرض خاص: توصيل مجاني للطلبات فوق 500 ريال 🌟</span>
        <span>✨ اكتشف تشكيلتنا الجديدة من العطور الصيفية ✨</span>
      </motion.div>
    </div>
  );
}
