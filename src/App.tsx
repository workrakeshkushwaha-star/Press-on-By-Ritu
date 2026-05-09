/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronDown, 
  Heart,
  Truck,
  ShieldCheck,
  Zap,
  Sparkles,
  MessageCircle,
  Clock,
  Search
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Types ---
interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
  isNew?: boolean;
}

// --- Data ---
const PRODUCTS: Product[] = [
  { id: 1, name: "Rosé Royale", price: 799, rating: 4.9, reviews: 124, image: "https://images.unsplash.com/photo-1604654894610-df4906c27105?auto=format&fit=crop&q=80&w=600", category: "Bridal", badge: "🔥 Best Seller" },
  { id: 2, name: "Midnight Marble", price: 899, rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1632345031435-072740924345?auto=format&fit=crop&q=80&w=600", category: "Party", isNew: true },
  { id: 3, name: "Desert Sand", price: 699, rating: 4.7, reviews: 56, image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600", category: "Everyday" },
  { id: 4, name: "Emerald Glaze", price: 749, rating: 5.0, reviews: 42, image: "https://images.unsplash.com/photo-1600050857218-a63969ef6ff9?auto=format&fit=crop&q=80&w=600", category: "Party" },
];

const REVIEWS = [
  { name: "Ananya S.", rating: 5, comment: "Absolutely loved these for my sister's wedding. Lasted 2 full weeks with zero lifting!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
  { name: "Priya K.", rating: 5, comment: "The quality is exactly like a salon finish. Got so many compliments at work.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100" },
  { name: "Sneh L.", rating: 4, comment: "Easy to apply and removal was truly damage-free. Will never go back to acrylics.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" },
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-[32px] left-0 right-0 z-50 transition-all duration-300 border-b border-brand-plum/10 ${scrolled ? "bg-white/95 backdrop-blur-md py-4" : "bg-brand-cream/80 py-6"}`}>
      <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
        <nav className="hidden lg:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase">
          <a href="#shop" className="hover:text-brand-berry transition-colors">Shop All</a>
          <a href="#how" className="hover:text-brand-berry transition-colors">How it works</a>
          <a href="#about" className="hover:text-brand-berry transition-colors">About</a>
        </nav>
        
        <a href="#" className="absolute left-1/2 -translate-x-1/2 text-3xl font-serif tracking-tighter">
          RITU<span className="italic font-light text-brand-berry">nails</span>
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase cursor-pointer hover:text-brand-berry transition-colors">
            <Search size={14} />
            Search
          </div>
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase bg-brand-plum text-white px-5 py-2 rounded-full cursor-pointer hover:bg-brand-berry transition-colors flex items-center gap-2">
            Cart <span className="opacity-60">(0)</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row border-b border-brand-plum/10 pt-[32px]">
      {/* Left Content */}
      <div className="w-full md:w-7/12 p-10 md:p-20 flex flex-col justify-center border-r border-brand-plum/10 bg-brand-cream">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[10px] font-bold tracking-[0.4em] text-brand-berry mb-6 uppercase">
            Press on Nails by Ritu
          </div>
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.05] mb-8 text-brand-plum">
            Wear <span className="italic font-light">Art</span> on Your <br/>Fingertips.
          </h1>
          <p className="text-lg md:text-xl text-brand-plum/80 max-w-md mb-10 leading-relaxed font-sans font-light">
            Salon-perfect nails. Zero appointments. Hand-designed sets that last up to 3 weeks and apply in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <button className="w-full sm:w-auto bg-brand-berry text-white px-12 py-5 text-[11px] font-bold tracking-[0.3em] uppercase rounded-sm hover:opacity-90 shadow-xl shadow-brand-berry/20 transition-all active:scale-95">
              Shop the Collection
            </button>
            <div className="flex flex-col">
              <div className="flex gap-1 text-brand-berry mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-[13px] font-bold text-brand-plum ml-1">4.9/5</span>
              </div>
              <span className="text-[10px] text-brand-plum/50 uppercase font-bold tracking-tighter">2,400+ Happy Customers</span>
            </div>
          </div>

          {/* Metric Strip */}
          <div className="mt-20 grid grid-cols-3 gap-8 pt-10 border-t border-brand-plum/10">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest text-brand-plum/40 uppercase">Longevity</span>
              <span className="text-sm italic font-serif text-brand-plum">Lasts 1–3 Weeks</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest text-brand-plum/40 uppercase">Shipping</span>
              <span className="text-sm italic font-serif text-brand-plum">Free over ₹499</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest text-brand-plum/40 uppercase">Quality</span>
              <span className="text-sm italic font-serif text-brand-plum">Salon-Perfect</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Visual */}
      <div className="w-full md:w-5/12 bg-white/40 p-10 flex flex-col relative overflow-hidden group">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex-1 relative rounded-lg overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1604654894610-df4906c27105?auto=format&fit=crop&q=80&w=800" 
            alt="Editorial Nail Art" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-plum/10 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-5 rounded-sm shadow-2xl border border-brand-berry/10 max-w-[180px]"
          >
            <p className="text-[10px] font-bold text-brand-berry uppercase tracking-[0.2em] mb-1">Featured Set</p>
            <p className="text-base font-serif italic text-brand-plum leading-tight">'Rosé Royale' Stiletto</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm font-bold text-brand-plum">₹899</span>
              <button className="text-[10px] font-black uppercase tracking-widest text-brand-berry border-b border-brand-berry/30 hover:border-brand-berry pb-0.5 transition-all">
                Quick view
              </button>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Category Quick Filter */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-plum/60">Browse by Shape</h3>
            <a href="#shop" className="text-[10px] font-bold text-brand-berry uppercase underline underline-offset-4 tracking-[0.1em]">See All</a>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            {["Almond", "Coffin", "Stiletto", "Square"].map((shape, i) => (
              <button 
                key={shape} 
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all ${i === 1 ? "bg-brand-plum text-white" : "bg-white text-brand-plum border border-brand-plum/10 hover:border-brand-berry"}`}
              >
                {shape}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-24 bg-brand-cream border-y border-brand-plum/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold text-brand-berry tracking-[0.3em] uppercase mb-4">
            Trusted by Beauty Enthusiasts
          </div>
          <h2 className="text-5xl font-serif text-brand-plum italic">
            Real People, <span className="not-italic">Stunning Results.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-0 border border-brand-plum/10 divide-x divide-brand-plum/10 rounded-sm overflow-hidden bg-white shadow-sm">
          {REVIEWS.map((review, i) => (
            <div 
              key={i}
              className="p-10 flex flex-col justify-between hover:bg-brand-pink/5 transition-colors"
            >
              <div>
                <div className="flex gap-1 mb-6 text-brand-berry">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-brand-plum text-lg font-serif italic leading-relaxed mb-10">
                  "{review.comment}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover grayscale hover:grayscale-0 transition-all border border-brand-plum/10" referrerPolicy="no-referrer" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-brand-plum/60">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Bridal", "Everyday", "Party"];
  
  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="text-[10px] font-bold text-brand-berry tracking-[0.3em] uppercase mb-4">
              Curated Collections
            </div>
            <h2 className="text-5xl font-serif text-brand-plum">
              Shop the <span className="italic">Collection</span>
            </h2>
            <div className="flex flex-wrap gap-3 mt-8">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all ${activeCategory === cat ? "bg-brand-plum text-white" : "bg-white text-brand-plum/40 border border-brand-plum/10 hover:border-brand-berry"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-brand-berry group pb-2 border-b-2 border-brand-berry/10 hover:border-brand-berry transition-all">
            View All Sets <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={product.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-brand-pink/5 border border-brand-plum/5 rounded-sm">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" 
                    referrerPolicy="no-referrer"
                  />
                  {product.badge && (
                    <span className="absolute top-5 left-5 bg-white px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-brand-berry shadow-sm border border-brand-berry/10">
                      {product.badge}
                    </span>
                  )}
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-md border-t border-brand-plum/10 text-center">
                    <button className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-plum hover:text-brand-berry transition-colors">
                      Quick Add — ₹{product.price}
                    </button>
                  </div>
                  
                  <button className="absolute top-5 right-5 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-brand-plum hover:text-brand-berry">
                    <Heart size={16} />
                  </button>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-serif text-brand-plum mb-1 leading-tight">{product.name}</h3>
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-brand-berry opacity-50">
                        <Star size={10} fill="currentColor" />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest text-brand-plum/40 uppercase">{product.rating} / 5.0</span>
                    </div>
                  </div>
                  <span className="text-base font-serif italic text-brand-plum">₹{product.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Bundle Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-brand-cream border border-brand-plum/10 p-12 md:p-20 relative overflow-hidden text-center"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="text-[10px] font-bold tracking-[0.4em] text-brand-berry mb-6 uppercase">The Curated Bundle</div>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-brand-plum">Buy any 3 Sets, <br/><span className="italic">Get 1 Completely Free.</span></h2>
            <button className="bg-brand-berry text-white px-12 py-5 text-[11px] font-bold tracking-[0.3em] uppercase rounded-sm hover:opacity-90 shadow-xl shadow-brand-berry/20 transition-all active:scale-95">
              Build Your Bundle
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 border-r border-t border-brand-plum/5 -mr-32 -mt-32 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border-l border-b border-brand-plum/5 -ml-32 -mb-32 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Prep", desc: "Clean & gently file your natural nails for maximum adhesion.", icon: <Sparkles size={20} /> },
    { title: "Select", desc: "Choose sizes from your kit that perfectly fit your unique nail beds.", icon: <CheckCircle2 size={20} /> },
    { title: "Press", desc: "Apply adhesive, press and hold for 30 seconds. Done!", icon: <Zap size={20} /> },
  ];

  return (
    <section id="how" className="py-24 bg-brand-cream border-t border-brand-plum/10">
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="text-[11px] font-bold text-brand-berry tracking-[0.4em] uppercase mb-6">
            Flawless in Minutes
          </div>
          <h2 className="text-5xl font-serif text-brand-plum mb-12">
            So simple, <span className="italic">it feels like magic.</span>
          </h2>
          
          <div className="space-y-0 border border-brand-plum/10 divide-y divide-brand-plum/10 rounded-sm">
            {steps.map((step, i) => (
              <div key={i} className="p-8 flex gap-8 items-start group hover:bg-white transition-colors">
                <span className="text-3xl font-serif italic text-brand-plum/20 group-hover:text-brand-berry transition-colors">0{i+1}</span>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-brand-plum uppercase tracking-widest">{step.title}</h3>
                  <p className="text-sm text-brand-plum/60 font-sans leading-relaxed tracking-tight">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex items-center gap-6 p-6 bg-white border border-brand-plum/10 rounded-sm">
            <div className="p-3 bg-brand-berry/10 rounded-full text-brand-berry">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-brand-plum tracking-widest uppercase">Safe Removal Guarantee</p>
              <p className="text-[11px] text-brand-plum/40 mt-1 font-sans italic">Remove in 10 minutes with zero damage to your natural nails.</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl relative group cursor-pointer border border-brand-plum/5">
            <img 
              src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800" 
              alt="Video Tutorial" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-plum/20 group-hover:bg-brand-plum/40 transition-all flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play fill="white" className="text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Watch Tutorial</p>
              <p className="text-2xl font-serif italic leading-tight">Master the application <br/>with Ritu in 60 seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueProps = () => {
  return (
    <section className="py-24 bg-white border-y border-brand-pink/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
          <div className="space-y-4">
            <div className="w-14 h-14 bg-brand-pink/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
               <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-bold text-brand-plum">Hand-Designed</h3>
            <p className="text-xs text-brand-plum/60 font-sans leading-relaxed italic">Every set is a piece of art, exclusively designed in our studio by Ritu.</p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 bg-brand-pink/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
               <span className="text-2xl">💅</span>
            </div>
            <h3 className="font-bold text-brand-plum">Salon Finish</h3>
            <p className="text-xs text-brand-plum/60 font-sans leading-relaxed italic">Double-coated UV finish for that high-gloss, professional look that lasts.</p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 bg-brand-pink/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
               <span className="text-2xl">🌱</span>
            </div>
            <h3 className="font-bold text-brand-plum">Skin-Safe</h3>
            <p className="text-xs text-brand-plum/60 font-sans leading-relaxed italic">Non-toxic, cruelty-free materials that are gentle on your hands.</p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 bg-brand-pink/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
               <span className="text-2xl">📦</span>
            </div>
            <h3 className="font-bold text-brand-plum">Swift Shipping</h3>
            <p className="text-xs text-brand-plum/60 font-sans leading-relaxed italic">Dispatched within 24 hours from our Delhi studio to your doorstep.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const faqs = [
    { q: "How long do they last?", a: "With proper prep using our glue, they last 2-3 weeks! If using glue tabs for occasional wear, they're perfect for 1-3 days." },
    { q: "Can I reuse them?", a: "Yes! Ritu's Nails are designed for multiple uses. Simply clean the back of the nails after removal and they're ready for your next event." },
    { q: "How do I find my size?", a: "We include a free size guide with every order, or check our visual size chart to measure at home using a simple measuring tape." },
    { q: "Will they damage my nails?", a: "Absolutely not! Unlike salon acrylics, our press-ons sit on top of your natural nail and are removed safely with warm water and oil." },
  ];

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-10">
        <div className="text-center mb-20">
          <div className="text-[11px] font-bold text-brand-berry tracking-[0.4em] uppercase mb-4">Concierge</div>
          <h2 className="text-5xl font-serif text-brand-plum italic">Every <span className="not-italic">Question</span> Answered</h2>
          <p className="text-[13px] text-brand-plum/40 font-sans italic mt-4 tracking-tight">Everything you need to know about your new favorite nails.</p>
        </div>
        
        <div className="space-y-0 border-t border-brand-plum/10">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-brand-plum/10 group">
              <button 
                onClick={() => setActiveTab(activeTab === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left"
              >
                <span className="text-lg font-serif italic text-brand-plum group-hover:text-brand-berry transition-colors">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full border border-brand-plum/10 flex items-center justify-center transition-all ${activeTab === i ? "bg-brand-plum text-white rotate-180" : "group-hover:border-brand-berry"}`}>
                  <ChevronDown size={14} />
                </div>
              </button>
              <AnimatePresence>
                {activeTab === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="pb-8 text-sm text-brand-plum/60 font-sans font-light leading-relaxed tracking-tight">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="bg-brand-cream border border-brand-plum/10 p-10 rounded-sm">
            <p className="text-sm font-serif italic text-brand-plum mb-6 italic opacity-60">Still have questions? Ritu is here to help.</p>
            <button className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase text-brand-berry hover:gap-4 transition-all pb-1 border-b border-brand-berry/20">
              Chat on WhatsApp <MessageCircle size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-plum text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-10">
        {/* Editorial Press Strip in Footer */}
        <div className="border-t border-b border-white/10 py-6 mb-20 flex flex-wrap justify-between items-center gap-8 text-[11px] font-bold tracking-[0.3em] uppercase text-white/50">
          <span className="text-white">AS SEEN ON:</span>
          {["Vogue India", "Cosmopolitan", "Femina", "Grazia", "Elle"].map(name => (
            <span key={name} className="hover:text-white transition-colors cursor-default">{name}</span>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1 space-y-8">
            <h2 className="text-4xl font-serif tracking-tighter italic">RITU<span className="text-brand-pink not-italic font-light">nails</span></h2>
            <p className="text-sm text-white/50 leading-relaxed font-sans font-light italic">
              Premium, hand-designed press-on nails that bring the luxury salon experience straight to your home. Crafting beauty, one set at a time.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="#" className="hover:text-brand-pink transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-pink transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-pink transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-pink">Shop Collections</h4>
            <ul className="space-y-3 text-sm text-white/50 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Bridal Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seasonal Drops</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bestsellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-pink">Information</h4>
            <ul className="space-y-3 text-sm text-white/50 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Care & Application Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-pink">Journal</h4>
            <p className="text-sm text-white/40 italic">Be part of the exclusive list for secret drops.</p>
            <div className="flex border border-white/20 p-1 rounded-sm overflow-hidden">
              <input type="email" placeholder="Email Address" className="bg-transparent border-none focus:ring-0 text-xs px-4 flex-grow outline-none text-white italic" />
              <button className="bg-brand-berry text-white px-5 py-2 font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-brand-plum transition-all">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em]">© 2024 Ritu's Nails — Handmade with love in India</p>
          <div className="flex gap-8 items-center text-[10px] font-bold tracking-widest text-white/30">
             <div className="hover:text-white cursor-pointer transition-colors">SECURE CHECKOUT</div>
             <div className="hover:text-white cursor-pointer transition-colors">SUPPORT & CHAT</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowOffer(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Urgency Banner */}
      <div className="fixed top-0 left-0 right-0 bg-brand-berry text-brand-pink text-[11px] font-bold tracking-[0.2em] py-2 px-8 text-center uppercase z-[60]">
        Limited Drops Every Friday — Shop the New Collection in 02d 14h 32m
      </div>
      
      <Navbar />
      <Hero />
      <SocialProof />
      <ProductShowcase />
      <HowItWorks />
      <ValueProps />
      
      {/* Newsletter / CTA Section */}
      <section className="py-24 bg-brand-pink text-brand-plum px-6 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl mb-8 leading-tight italic">
            Your dream nails are <br /> <span className="not-italic font-bold">one click away.</span>
          </h2>
          <button className="bg-brand-plum text-white px-12 py-6 rounded-full font-bold text-sm tracking-[0.3em] uppercase hover:scale-110 active:scale-95 transition-all shadow-2xl">
            Shop the Collection
          </button>
        </motion.div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-berry/10 rounded-full blur-[100px]" />
      </section>

      <FAQ />
      <Footer />

      {/* Cart Button Floating? Not needed if in nav, but can add a permanent one */}
      <div className="fixed bottom-8 right-8 z-40 lg:hidden">
        <button className="w-14 h-14 bg-brand-plum text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-berry transition-colors relative">
          <ShoppingBag size={24} />
          <span className="absolute top-2 right-2 bg-brand-pink text-brand-plum text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center">0</span>
        </button>
      </div>

      {/* Exit Intent / Delayed Popup Overlay */}
      <AnimatePresence>
        {showOffer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-plum/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[40px] p-10 max-w-lg w-full relative overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setShowOffer(false)}
                className="absolute top-6 right-6 text-brand-plum/40 hover:text-brand-plum transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center">
                <div className="text-[10px] font-bold text-brand-berry tracking-[0.3em] uppercase mb-4 italic">Welcome Gift</div>
                <h3 className="text-4xl text-brand-plum mb-6">Get <span className="italic text-brand-berry">10% OFF</span> your first set.</h3>
                <p className="font-sans text-brand-plum/60 mb-8 italic">Join 5,000+ others getting salon-quality nails at home. We'll send the code to your inbox!</p>
                
                <div className="space-y-4">
                  <input type="email" placeholder="Your best email" className="w-full bg-brand-cream border border-brand-pink/30 rounded-2xl p-4 text-center focus:outline-none focus:border-brand-berry transition-colors font-medium" />
                  <button className="w-full bg-brand-plum text-white py-5 rounded-2xl font-bold text-xs tracking-widest uppercase hover:bg-brand-berry transition-colors shadow-xl">
                    Reveal My Code
                  </button>
                  <button onClick={() => setShowOffer(false)} className="text-[10px] text-brand-plum/40 font-bold uppercase tracking-widest hover:text-brand-plum transition-colors">
                    No thanks, I prefer paying full price
                  </button>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-pink/30 rounded-full blur-3xl -z-10" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
