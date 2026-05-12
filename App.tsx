import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  ArrowRight, 
  Zap, 
  Target, 
  Users, 
  Play, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  FileText,
  Calendar,
  MessageSquare,
  Lock,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handlePurchase = () => {
    const businessEmail = 'raufacts777@gmail.com';
    const itemName = 'Land Your First Video Editing Client in 7 Days (20 DM System)';
    const amount = '9.00';
    const currency = 'USD';
    
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${encodeURIComponent(businessEmail)}&item_name=${encodeURIComponent(itemName)}&amount=${amount}&currency_code=${currency}&no_shipping=1&no_note=1`;
    
    window.open(paypalUrl, '_blank');
  };

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#F27D26] selection:text-white">
      <div className="grain-overlay" />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#F27D26] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 border-b border-white/5 backdrop-blur-md bg-black/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#F27D26] to-[#FF4D00] rounded-xl flex items-center justify-center shadow-lg shadow-[#F27D26]/20 group-hover:rotate-12 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-display font-black tracking-tighter uppercase">20 DM<span className="text-[#F27D26]"> SYSTEM</span></span>
          </motion.div>
          
          <div className="hidden lg:flex items-center gap-10 text-xs font-mono tracking-[0.2em] uppercase text-white/40">
            <a href="#about" className="hover:text-white transition-colors uppercase tracking-widest">Problem</a>
            <a href="#inside" className="hover:text-white transition-colors uppercase tracking-widest">Manifesto</a>
            <a href="#system" className="hover:text-white transition-colors uppercase tracking-widest">Process</a>
            <a href="#pricing" className="hover:text-white transition-colors uppercase tracking-widest">Forge</a>
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handlePurchase}
            className="group px-6 py-3 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all duration-500 shadow-xl shadow-white/5 active:scale-95"
          >
            Forge Your Path — $9
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden premium-gradient">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#F27D26]/5 blur-[200px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-[#F27D26] mb-12"
          >
            <Sparkles className="w-3 h-3 animate-pulse" />
            Limited: 25 Licenses Remaining at Introductory Price
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-12 text-glow"
            >
              LAND YOUR <br />
              <span className="text-white/10 italic">FIRST CLIENT</span> <br />
              <span className="text-[#F27D26]">IN 7 DAYS.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="max-w-2xl mx-auto text-lg md:text-2xl text-white/40 mb-16 leading-relaxed font-light italic"
            >
              The definitive 20-DM daily Notion engine built to eliminate overthinking and start the high-ticket revenue machine.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <button 
              onClick={handlePurchase}
              className="group relative px-10 py-6 bg-[#F27D26] text-white rounded-2xl font-black text-xl uppercase tracking-wider overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_-5px_rgba(242,125,38,0.6)] hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Deploy System Now <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-2 text-white font-bold tracking-tight">
                <ShieldCheck className="w-5 h-5 text-green-500" /> No-Risk Investment
              </div>
              <p className="text-xs text-white/20 uppercase tracking-widest font-mono">30-Day Money Back Guarantee</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Idea Ticker */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01] overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center text-3xl md:text-5xl font-display font-black text-white/5 uppercase italic tracking-tighter"
        >
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex gap-20 shrink-0">
               <span>Land your first client</span>
               <span className="text-[#F27D26]">20 DMs daily</span>
               <span>No more overthinking</span>
               <span className="text-[#F27D26]">Proven Notion System</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Origin Story Section */}
      <section id="about" className="py-40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-12 h-1 bg-[#F27D26]" />
            <h2 className="text-5xl md:text-7xl font-display font-black leading-none uppercase tracking-tighter">
              I WAS <br />
              <span className="text-white/20 underline decoration-[#F27D26]">STUCK AT ZERO.</span>
            </h2>
            <div className="space-y-6 text-xl text-white/50 font-light leading-relaxed">
              <p>I knew video editing… But I had 0 clients and no idea what to do daily.</p>
              <p>I tried random things, watched YouTube, wasted time. I was caught in the 
                "Portfolio Trap" — editing for nobody while the bills piled up.</p>
              <p className="text-white font-bold italic border-l-4 border-[#F27D26] pl-6 py-2 bg-white/5 rounded-r-xl">
                I simplified everything into one high-velocity system. 20 DMs. No excuses.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:h-[600px] flex items-center justify-center p-8 lg:p-0"
          >
            <div className="absolute inset-0 bg-[#F27D26]/10 blur-[120px] rounded-full" />
            <div className="glass-card w-full max-w-md p-10 rounded-[3rem] relative z-10 border-[#F27D26]/20 shadow-2xl">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#F27D26] rounded-full flex items-center justify-center rotate-12 shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-8">THE MANIFESTO</h3>
              <ul className="space-y-6">
                {[
                  "Send 20 DMs Daily",
                  "Track Every Reply",
                  "Follow Up x3",
                  "Close. Refine. Scale."
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-white group cursor-default">
                    <span className="flex-none w-8 h-8 rounded-full border border-[#F27D26]/30 flex items-center justify-center text-[10px] font-mono group-hover:bg-[#F27D26] group-hover:border-transparent transition-all">0{i+1}</span>
                    <span className="text-lg font-medium opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-tight">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inside the Box - Features */}
      <section id="system" className="py-40 bg-white/[0.02] relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter mb-8 uppercase">
              FORGED IN <br />
              <span className="text-[#F27D26]">NOTION.</span>
            </h2>
            <p className="text-white/40 text-lg uppercase tracking-[0.3em] font-mono">Instant Download. Infinite ROI.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "7-Day Sprint",
                desc: "A day-by-day battle plan. From zero presence to your first retainer."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Velocity Tracker",
                desc: "Real-time metrics for your outreach. Know exactly where your leaks are."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Lead Pipeline",
                desc: "A high-performance CRM built specifically for solo editors."
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Script Vault",
                desc: "Proven conversation flows that bridge the gap from cold DM to invoice."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-[#F27D26]/10 hover:border-[#F27D26]/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F27D26]/5 rounded-full blur-2xl group-hover:bg-[#F27D26]/20 transition-all duration-500" />
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center mb-8 text-[#F27D26] group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border-[#F27D26]/20">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-white/40 text-base leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Constraints / Truth Section */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] glass-card border-green-500/10 flex flex-col items-center text-center shadow-2xl"
          >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-10 text-green-500">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-3xl font-display font-black mb-8 uppercase tracking-tight italic">Who This Is For</h4>
            <div className="space-y-6 text-white/50 text-xl font-light">
              <p>👉 You know the craft of video editing</p>
              <p>👉 You are tired of being the "ghost editor"</p>
              <p>👉 You need a repeatable daily logic</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] glass-card border-red-500/10 flex flex-col items-center text-center shadow-2xl opacity-40 hover:opacity-100 transition-opacity duration-700"
          >
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-10 text-red-500">
              <Lock className="w-10 h-10" />
            </div>
            <h4 className="text-3xl font-display font-black mb-8 uppercase tracking-tight italic">Not For You If</h4>
            <div className="space-y-6 text-white/50 text-xl font-light">
              <p>❌ You want "easy money" zero-work magic</p>
              <p>❌ You won't press "send" 20 times a day</p>
              <p>❌ You think quantity is the enemy of quality</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Offer Tier */}
      <section id="pricing" className="py-48 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[#F27D26]/5 blur-[200px] rounded-full translate-y-1/2" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center p-16 md:p-24 rounded-[4rem] bg-gradient-to-br from-[#121212] to-[#050505] border border-[#F27D26]/50 shadow-2xl relative"
          >
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-8 py-3 bg-[#F27D26] text-white text-xs font-black uppercase tracking-[0.4em] rounded-full shadow-2xl border-4 border-[#050505]">
              BETA ACCESS
            </div>
            
            <h2 className="text-6xl md:text-8xl font-display font-black mb-6 uppercase tracking-tighter italic">START <span className="text-[#F27D26]">FORGING.</span></h2>
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="text-white/20 text-4xl line-through font-display font-black">$47</span>
              <span className="text-8xl font-display font-black text-glow">$9</span>
            </div>
            
            <p className="text-white/40 text-xl mb-16 max-w-xl mx-auto leading-relaxed">
              Early access special. Will increase once the beta group is full. Duplicate the Notion template to your workspace and start sending immediately.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePurchase}
              className="w-full sm:w-auto px-16 py-8 rounded-[2rem] bg-[#F27D26] text-white font-black text-2xl uppercase tracking-widest transition-all shadow-[0_0_60px_-15px_rgba(242,125,38,0.5)] flex items-center justify-center gap-4 mx-auto group"
            >
              Get Instant Access <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            
            <div className="mt-16 pt-12 border-t border-white/5 flex flex-col items-center gap-8">
              <span className="text-white/20 text-[10px] font-mono uppercase tracking-[0.5em]">Global Transaction Secured by PayPal</span>
              <div className="flex gap-10 opacity-10">
                <ShieldCheck className="w-12 h-12" />
                <Sparkles className="w-12 h-12" />
                <CheckCircle2 className="w-12 h-12" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-[#F27D26] to-[#FF4D00] rounded-lg flex items-center justify-center shadow-lg shadow-[#F27D26]/20">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-sm font-display font-black tracking-tighter uppercase">20 DM<span className="text-[#F27D26]"> SYSTEM</span></span>
          </div>
          <div className="text-white/10 text-[9px] font-mono uppercase tracking-[0.6em]">
            © 2026 CLIENT FORGE PROTOCOL. THE TOOLS TO FORGE YOUR OWN DESTINY.
          </div>
        </div>
      </footer>
    </div>
  );
}
