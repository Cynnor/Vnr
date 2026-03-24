import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, MessageCircle, Send, ChevronDown, 
  TrendingUp, TrendingDown, ShieldAlert, Award, 
  BookOpen, Users, Landmark, HeartHandshake,
  CheckCircle2, AlertCircle, ArrowRight, LayoutTemplate, BrainCircuit,
  Video, Play, Pause, RotateCcw, Volume2
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- SECTIONS ---

const Presentation = () => {
  return (
    <div className="w-full">
      {/* Mở đầu */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900 border-b-[6px] border-red-600">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/90 to-red-900/40 z-10"></div>
          <img src="/vietnam_history.png" alt="Lịch sử" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white flex flex-col items-center justify-center text-center">
          <FadeIn>
             <span className="px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-bold tracking-widest uppercase mb-8 inline-block shadow-inner">
              Phần 1: Mở Đầu
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              Cương Lĩnh 1991 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
                Sự Phát Triển Tư Duy Lý Luận Của Đảng
              </span>
            </h1>
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto border-l-4 border-yellow-500/70 pl-6 text-slate-300 italic text-left relative">
              <span className="absolute -left-4 -top-6 text-6xl text-slate-700/50">"</span>
              Kính thưa thầy cô và các bạn, hôm nay chúng ta sẽ cùng ngược dòng thời gian về những năm cuối thập niên 80, đầu thập niên 90 – một giai đoạn được ví như 'cửa tử' của hệ thống Xã hội chủ nghĩa toàn cầu. Trong bối cảnh đó, Đảng Cộng sản Việt Nam đã làm thế nào để giữ vững tay chèo? Cương lĩnh 1991 chính là câu trả lời.
            </blockquote>
          </FadeIn>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            {/* <ChevronDown size={40} className="text-red-500 opacity-80" /> */}
          </motion.div>
        </div>
      </section>

      {/* Bối cảnh lịch sử */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-5xl mx-auto text-center mb-16">
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-3 block">Phần 2: Bối Cảnh Lịch Sử</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Khủng hoảng toàn diện <br/> & Dấu hỏi tồn tại</h2>
              <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Trước năm 1986, Việt Nam rơi vào khủng hoảng toàn diện. Lạm phát có lúc lên tới gần <strong className="text-red-600 text-2xl font-black bg-red-50 px-2 py-1 rounded">800%</strong>.
                </p>
                <div className="bg-white p-6 rounded-[2rem] border-l-[6px] border-red-600 shadow-md">
                  <p className="font-semibold text-slate-900 mb-2">Điểm nhấn cốt lõi:</p>
                  <p className="text-slate-600">Đây là <strong className="text-red-600">khủng hoảng về mô hình phát triển</strong>. Đổi mới để tồn tại, nhưng đổi mới thế nào để không đi chệch hướng?</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-red-600/20 rounded-[2.5rem] transform rotate-3 scale-105 transition-transform group-hover:rotate-6 group-hover:scale-110 duration-500 blur-xl"></div>
                <div className="relative p-12 bg-gradient-to-br from-red-600 to-red-800 rounded-[2.5rem] shadow-2xl text-white border border-red-500/30 overflow-hidden text-center flex flex-col items-center justify-center">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <TrendingUp size={160} />
                  </div>
                  <TrendingUp size={64} className="mb-6 opacity-90 text-yellow-400 relative z-10" />
                  <h3 className="text-7xl font-black mb-2 relative z-10">774%</h3>
                  <p className="text-xl opacity-90 relative z-10 font-medium">Lạm phát đỉnh điểm (1986)</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Đại hội VI */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-5xl mx-auto text-center mb-16">
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-3 block">Phần 3: Đại Hội VI</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Bước Ngoặt Tư Duy <br/> <br/> Tiếng Sấm Đầu Tiên</h2>
              <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
            </div>
          </FadeIn>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.2} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 mb-8 shadow-sm border border-slate-100">
                <AlertCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Nhìn Thẳng Sự Thật</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Đại hội VI năm 1986 là <strong>tiếng sấm đầu tiên</strong>. Lần đầu tiên Đảng dũng cảm thừa nhận những sai lầm chủ quan, duy ý chí.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 mb-8 shadow-sm border border-slate-100">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Đột Phá Lý Luận</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Nhận thức lại quy luật: <strong>Không thể ép buộc quan hệ sản xuất lên cao khi lực lượng sản xuất còn yếu kém.</strong>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Cương lĩnh 1991 */}
      <section className="py-24 bg-slate-900 text-white relative border-y-8 border-yellow-500 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-3 block">Phần 4: Cương Lĩnh 1991</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ngọn Đuốc Lý Luận</h2>
              <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                Giữa lúc các nước XHCN khác tan rã, Cương lĩnh 1991 thông qua 6 Đặc trưng cơ bản.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Dân làm chủ", icon: <Users /> },
              { title: "Kinh tế hiện đại", icon: <TrendingUp /> },
              { title: "Văn hóa bản sắc", icon: <Landmark /> },
              { title: "Giải phóng con người", icon: <Award /> },
              { title: "Dân tộc đoàn kết", icon: <HeartHandshake /> },
              { title: "Hòa bình quốc tế", icon: <ShieldAlert /> }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-[2rem] hover:bg-slate-800 transition-all group h-full">
                  <div className="w-16 h-16 bg-slate-900/50 rounded-2xl flex items-center justify-center text-yellow-400 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 mb-6 shadow-md border border-slate-700/50">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-100 flex items-center gap-2">
                    <span className="text-red-500 font-black">{idx + 1}.</span> {item.title}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Thực tiễn */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <FadeIn>
             <div className="text-center mb-20 max-w-4xl mx-auto">
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-3 block">Phần 5: Chứng Minh Bằng Thực Tiễn</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Lý Luận Đúng Đắn <br/> 🌟 Tạo Kết Quả Thật</h2>
              <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
            </div>
          </FadeIn>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.2} className="order-2 md:order-1 space-y-8">
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg"><TrendingDown size={24} /></div>
                  Chinh phục Lạm phát
                </h3>
                <div className="space-y-6 mt-8">
                  <div>
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span className="text-slate-500">Năm 1986</span>
                      <span className="text-red-600">774%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-5 border border-slate-200 shadow-inner">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} className="bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full"></motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span className="text-slate-500">Năm 1991</span>
                      <span className="text-green-600">67%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-5 border border-slate-200 shadow-inner">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '15%' }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full"></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} className="order-1 md:order-2">
               <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-center">
                 <img src="/vietnam_rice.png" alt="Cánh đồng lúa" className="w-full h-48 rounded-2xl object-cover mb-6 border border-slate-100" />
                 <h3 className="text-2xl font-bold text-slate-800 mb-3 text-center">Câu Chuyện Xuất Khẩu Gạo</h3>
                 <p className="text-slate-600 text-center leading-relaxed">Từ chỗ thiếu ăn, nhờ <strong>'Khoán 10'</strong>, chúng ta vươn lên <strong>TOP 3 THẾ GIỚI</strong> về xuất khẩu gạo.</p>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Kết Luận */}
      <section className="py-24 bg-gradient-to-br from-red-700 to-red-900 text-white relative">
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <FadeIn>
            <h2 className="text-4xl font-extrabold mb-6 text-yellow-400">Giá Trị Trường Tồn</h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              Cương lĩnh 1991 không chỉ cứu nguy cho dân tộc mà còn đặt nền móng vững chắc. Hơn 30 năm qua, những giá trị cốt lõi đó vẫn tiếp tục soi đường cho đất nước phát triển phồn vinh. 
            </p>
            <p className="font-bold text-2xl italic tracking-wide text-white border-y border-red-500/50 py-6">
              "Xin trân trọng cảm ơn thầy cô và các bạn đã lắng nghe!"
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

// --- CREATIVE VIDEO SECTION ---

const CreativeView = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const DURATION = 90; // 1 min 30 sec

  useEffect(() => {
    let interval: number;
    if (isPlaying && time < DURATION) {
      interval = window.setInterval(() => {
        setTime(prev => {
          if (prev >= DURATION - 1) {
            setIsPlaying(false);
            return DURATION;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, time]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const reset = () => { setIsPlaying(true); setTime(0); };

  // Calculate progress %
  const progress = (time / DURATION) * 100;

  // Scene logic
  let sceneContent;
  let sceneClass = "";
  if (time < 15) {
    sceneClass = "bg-slate-900";
    sceneContent = (
      <motion.div key="1" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center">
        <h2 className="text-6xl font-black text-rose-600 mb-6 drop-shadow-2xl uppercase tracking-widest">Đêm trước Đổi Mới</h2>
        <p className="text-3xl text-slate-300 max-w-2xl mx-auto leading-relaxed">"Những năm 1980, Việt Nam chìm trong khủng hoảng... Lạm phát vọt lên <strong className="text-red-500">gần 800%</strong>."</p>
        <p className="mt-8 text-xl text-slate-500 italic">0:00 - 0:15</p>
      </motion.div>
    );
  } else if (time < 40) {
    sceneClass = "bg-red-950";
    sceneContent = (
      <motion.div key="2" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="text-center">
         <h2 className="text-6xl font-black text-yellow-500 mb-6 uppercase tracking-widest">Cơn Sóng Gió</h2>
         <p className="text-3xl text-red-200 max-w-3xl mx-auto leading-relaxed">"1991: Liên Xô và Đông Âu sụp đổ. Liệu con thuyền XHCN Việt Nam có lật? Cần một ngọn hải đăng soi sáng!"</p>
         <p className="mt-8 text-xl text-red-500/50 italic">0:15 - 0:40</p>
      </motion.div>
    );
  } else if (time < 65) {
    sceneClass = "bg-red-700";
    sceneContent = (
      <motion.div key="3" initial={{ opacity: 0, scale: 1.2 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center relative">
         <div className="absolute inset-0 bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>
         <h2 className="text-6xl font-black text-white mb-6 uppercase tracking-widest relative z-10">Cương Lĩnh 1991</h2>
         <p className="text-3xl text-yellow-300 font-bold max-w-3xl mx-auto leading-relaxed relative z-10">Bản Tuyên Ngôn Của Đổi Mới!</p>
         <ul className="mt-8 text-2xl text-white/90 grid grid-cols-2 gap-4 max-w-2xl mx-auto relative z-10">
           <li className="bg-red-800 p-3 rounded-lg border border-red-500 text-left px-6 text-xl">Dân làm chủ</li>
           <li className="bg-red-800 p-3 rounded-lg border border-red-500 text-left px-6 text-xl">Phát triển Kinh tế</li>
           <li className="bg-red-800 p-3 rounded-lg border border-red-500 text-left px-6 text-xl">Văn hóa đậm đà</li>
           <li className="bg-red-800 p-3 rounded-lg border border-red-500 text-left px-6 text-xl">Đoàn kết dân tộc</li>
         </ul>
         <p className="mt-8 text-xl text-yellow-300/50 italic">0:40 - 1:05</p>
      </motion.div>
    );
  } else if (time < 80) {
    sceneClass = "bg-slate-50 text-slate-900";
    sceneContent = (
      <motion.div key="4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center">
         <h2 className="text-6xl font-black text-green-600 mb-6 uppercase tracking-widest">Kỳ Tích Thành Hình</h2>
         <div className="flex justify-center items-center gap-8 mt-10">
            <div className="p-8 bg-white shadow-xl rounded-2xl border border-slate-200">
               <p className="text-2xl text-slate-500 mb-2">Lạm phát giảm còn</p>
               <p className="text-5xl font-black text-green-500">67%</p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-2xl border border-slate-200">
               <p className="text-2xl text-slate-500 mb-2">Xuất khẩu Gạo</p>
               <p className="text-5xl font-black text-amber-500">Top 3<span className="text-lg text-slate-400 ml-2">TG</span></p>
            </div>
         </div>
         <p className="mt-12 text-xl text-slate-400 italic">1:05 - 1:20</p>
      </motion.div>
    );
  } else {
    sceneClass = "bg-slate-900 text-white";
    sceneContent = (
      <motion.div key="5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
         <h2 className="text-7xl font-black text-yellow-500 mb-8 uppercase tracking-widest leading-tight">Đổi Mới<br/>& Phát Triển</h2>
         <p className="text-2xl text-slate-300 max-w-2xl mx-auto">Giá trị của Cương Lĩnh 1991 vẫn mãi là kim chỉ nam cho cách mạng Việt Nam.</p>
         <p className="mt-12 text-xl text-slate-500 italic">1:20 - 1:30</p>
      </motion.div>
    );
  }

  // Formatting time MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining.toString().padStart(2, '0')}`;
  }

  return (
    <div className="min-h-screen pt-28 pb-12 bg-slate-100 flex flex-col items-center justify-center">
       <div className="container mx-auto px-6 max-w-4xl text-center mb-10">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-3 block">Video Ngắn (1p30s)</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Sản Phẩm Sáng Tạo</h2>
          <p className="text-slate-600 text-lg">Đoạn video Animation Code trực tiếp tóm tắt Cương lĩnh 1991</p>
       </div>

       {/* Video Player Wrapper */}
       <div className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative border-4 border-slate-800 bg-black flex flex-col">
          
          {/* Main Stage */}
          <div className={`flex-1 flex items-center justify-center relative overflow-hidden transition-colors duration-1000 ${sceneClass}`}>
             <AnimatePresence mode="wait">
                {!isPlaying && time === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-cover bg-center"
                    style={{ backgroundImage: `url('/vietnam_history.png')` }}
                  >
                     <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
                     <button onClick={togglePlay} className="relative z-10 w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 hover:scale-110 transition-all border-4 border-white/20">
                        <Play size={40} className="ml-2" />
                     </button>
                     <h2 className="relative z-10 mt-8 text-3xl font-black text-white tracking-wider drop-shadow-lg">BẤM ĐỂ PHÁT VIDEO</h2>
                     <p className="relative z-10 text-yellow-400 font-medium">Thời lượng: 01:30</p>
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                     {sceneContent}
                  </div>
                )}
             </AnimatePresence>

             {/* Watermark / Channel Name */}
             <div className="absolute top-6 left-6 flex items-center gap-2 opacity-50 text-white z-50 mix-blend-difference">
               <div className="w-8 h-8 rounded-full bg-red-600 flex justify-center items-center font-bold text-xs">VN</div>
               <span className="font-semibold text-sm tracking-wider">Lịch Sử Đảng</span>
             </div>
          </div>

          {/* Controls Bar */}
          <div className="h-16 bg-slate-900 flex items-center px-6 gap-4 text-white z-30 shrink-0">
             <button onClick={time >= DURATION ? reset : togglePlay} className="hover:text-red-400 transition-colors">
               {time >= DURATION ? <RotateCcw size={22} /> : isPlaying ? <Pause size={22} /> : <Play size={22} />}
             </button>
             
             <div className="text-sm font-medium w-12 text-slate-300">
               {formatTime(time)}
             </div>

             <div className="flex-1 relative h-1.5 bg-slate-700 rounded-full overflow-hidden cursor-pointer">
                <div 
                  className="absolute top-0 left-0 h-full bg-red-600 transition-all duration-1000 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
             </div>

             <div className="text-sm font-medium w-12 text-slate-400 text-right">
               01:30
             </div>

             <button className="hover:text-red-400 transition-colors ml-2 hidden sm:block">
               <Volume2 size={20} />
             </button>
          </div>
       </div>

       <div className="container mx-auto px-6 max-w-4xl text-left mt-10">
         <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
           <p className="text-sm text-slate-500 font-bold uppercase mb-2">Lời bình cho kịch bản (Script)</p>
           <p className="text-slate-700 italic">"Đêm trước Đổi Mới, Việt Nam chìm trong lạm phát... nhưng với bản lĩnh kiên cường, Đại hội VI là tiếng sấm vang lên mở ra kỷ nguyên mới. Cương lĩnh 1991 chính là bản thiết kế vĩ đại, kim chỉ nam đưa đất nước vượt sóng dữ, vươn lên thành cường quốc nông nghiệp, giữ vững nền tảng tư tưởng Mác Lênin... Đây là dấu son chói lọi trong phát triển lý luận."</p>
         </div>
       </div>
    </div>
  )
}

// --- QUIZ AND CHAT COMPONENTS (Simplified for length if needed, keeping fully unchanged) ---

const Quiz = () => {
    const questions = [
    { q: "Lạm phát ở Việt Nam năm 1986 đỉnh điểm lên tới bao nhiêu phần trăm?", options: ["Khoảng 100%", "Khoảng 500%", "Khoảng 774%", "Hơn 1000%"], ans: 2 },
    { q: "Văn kiện nào được đánh giá là 'Ngọn đuốc lý luận'?", options: ["Đại hội VI (1986)", "Cương lĩnh 1991", "Nghị quyết Trung ương 4", "Hiến pháp 1992"], ans: 1 },
    { q: "Nhờ chính sách Khoán 10, Việt Nam đã sớm vươn lên đạt vị trí gì về xuất khẩu gạo?", options: ["Tự cung tự cấp", "Top 10 thế giới", "Top 3 thế giới", "Đứng số 1"], ans: 2 },
  ];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState<number | null>(null);

  const handleSelected = (idx: number) => {
    if (idx === questions[current].ans) {
      if (current < questions.length - 1) setCurrent(c => c + 1);
      else setScore(questions.length);
    } else setScore(-1);
  };
  const reset = () => { setCurrent(0); setScore(null); }

  return (
    <div className="min-h-screen pt-28 pb-12 bg-slate-50 flex flex-col items-center">
      <div className="container mx-auto px-6 max-w-3xl flex-1 flex flex-col justify-center relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-3 block">Mini Game</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Tổng Kết Kiến Thức</h2>
          <div className="w-16 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
        </motion.div>

        <AnimatePresence mode="wait">
          {score === questions.length ? (
            <motion.div key="win" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-green-100 text-center">
              <CheckCircle2 className="text-green-500 mx-auto mb-6" size={64} />
              <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Hoàn Hảo!</h3>
              <button onClick={reset} className="px-10 py-4 bg-amber-500 text-white font-bold rounded-full mt-4">Trải nghiệm lại</button>
            </motion.div>
          ) : score === -1 ? (
             <motion.div key="lose" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-red-100 text-center">
              <AlertCircle className="text-red-500 mx-auto mb-6" size={64} />
              <h3 className="text-4xl font-extrabold text-red-600 mb-4">Rất tiếc!</h3>
              <button onClick={() => setScore(null)} className="px-10 py-4 bg-slate-900 text-white font-bold rounded-full mt-4">Làm lại câu vừa rồi</button>
            </motion.div>
          ) : (
            <motion.div key="q" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-slate-100">
               <h3 className="text-2xl font-bold text-slate-900 mb-10 leading-tight">{questions[current].q}</h3>
               <div className="grid gap-4">
                 {questions[current].options.map((opt, i) => (
                   <button key={i} onClick={() => handleSelected(i)} className="text-left px-8 py-5 rounded-2xl border-2 border-slate-100 hover:border-amber-400 font-semibold flex justify-between">
                     {opt} <ArrowRight size={20} className="text-amber-500" />
                   </button>
                 ))}
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user', text: string }[]>([
    { role: 'ai', text: 'Chào bạn! Mình là AI hỗ trợ ôn tập về tài liệu Cương lĩnh 1991. Bạn có câu hỏi nào không?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        setMessages(prev => [...prev, { role: 'ai', text: "Vui lòng cấu hình VITE_GEMINI_API_KEY trong file .env để AI có thể hoạt động thật." }]);
        setIsLoading(false);
        return;
      }

      // Format previous messages for Gemini format
      const history = messages.filter(m => m.text !== 'Chào bạn! Mình là AI hỗ trợ ôn tập về tài liệu Cương lĩnh 1991. Bạn có câu hỏi nào không?').map(m => ({
        role: m.role === 'ai' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      const contextPrompt = "Bạn là một trợ lý AI tên VNR hỗ trợ học tập về môn Lịch sử Đảng, đặc biệt là tài liệu Cương lĩnh 1991. Hãy trả lời ngắn gọn, lịch sự, chính xác và bám sát bối cảnh Đại hội VI và Cương lĩnh 1991 của Việt Nam.";

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: contextPrompt }] },
            { role: 'model', parts: [{ text: "Tôi đã hiểu nhiệm vụ của mình. Tôi sẽ trả lời tư cách chuyên gia về Cương lĩnh 1991." }] },
            ...history,
            { role: 'user', parts: [{ text: userText }] }
          ]
        })
      });

      const data = await response.json();
      
      if (data.error) {
        setMessages(prev => [...prev, { role: 'ai', text: `Lỗi từ API: ${data.error.message}` }]);
      } else {
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Xin lỗi, tôi không thể trả lời lúc này.";
        setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Ops! Lỗi kết nối mạng, vui lòng thử lại sau." }]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 w-16 h-16 bg-red-600 rounded-full flex justify-center items-center text-white shadow-xl z-50 border-4 border-white hover:scale-110 transition-transform">
          <MessageCircle size={28} />
        </button>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col border border-slate-200 h-[500px] max-h-[80vh] overflow-hidden"
          >
             <div className="bg-slate-900 p-4 flex justify-between items-center text-white shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-800 rounded-lg"><BrainCircuit className="text-amber-400" size={20}/></div>
                  <div>
                    <div className="font-bold">Trợ lý Lịch Sử Đảng</div>
                    <div className="text-xs text-green-400 flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online</div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-slate-800 p-2 rounded-full transition-colors"><X size={20}/></button>
             </div>
             <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col scroll-smooth">
               {messages.map((m, i) => (
                 <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`mb-4 max-w-[85%] text-sm rounded-2xl p-3 shadow-sm ${m.role === 'user' ? 'bg-red-600 text-white ml-auto rounded-tr-sm' : 'bg-white border text-slate-700 rounded-tl-sm'}`}>
                   {/* Handle simple markdown for AI response */}
                   {m.role === 'ai' ? (
                      <div className="prose prose-sm prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: m.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />
                   ) : m.text}
                 </motion.div>
               ))}
               {isLoading && (
                 <div className="mb-4 max-w-[85%] bg-white border text-slate-700 p-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-2 w-16">
                   <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                   <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                   <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                 </div>
               )}
               <div ref={endRef} />
             </div>
             <div className="p-3 bg-white border-t shrink-0">
                <div className="flex gap-2 relative">
                  <input 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    onKeyDown={e=>e.key==='Enter'&&handleSend()} 
                    disabled={isLoading}
                    className="flex-1 bg-slate-100 pl-4 pr-12 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-shadow disabled:opacity-50" 
                    placeholder="Hỏi về Cương lĩnh 1991..."
                  />
                  <button 
                    onClick={handleSend} 
                    disabled={isLoading || !input.trim()}
                    className="absolute right-1 top-1 w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center hover:bg-red-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send size={18}/>
                  </button>
                </div>
                <div className="text-[10px] text-center text-slate-400 mt-2 font-medium">Bản Demo kết nối API Gemini</div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function App() {
  const [activeView, setActiveView] = useState<'presentation' | 'quiz' | 'creative'>('presentation');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="font-sans antialiased text-slate-900 bg-slate-50 selection:bg-red-500/30">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveView('presentation')}>
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg border border-red-500/20">
              <span className="text-yellow-400 font-black text-xl">7</span>
            </div>
            <div className="hidden lg:block">
              <h1 className="font-extrabold text-slate-900 tracking-tight">Cương lĩnh 1991</h1>
              <p className="text-xs text-slate-500 font-medium">Group 7</p>
            </div>
          </div>
          
          <div className="hidden md:flex bg-slate-100 rounded-full p-1 auto-cols-auto">
            <button onClick={() => setActiveView('presentation')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold ${activeView === 'presentation' ? 'bg-white text-red-600 shadow-md' : 'text-slate-500'}`}>
              <LayoutTemplate size={18} /> Nội Dung
            </button>
            <button onClick={() => setActiveView('creative')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold ${activeView === 'creative' ? 'bg-red-600 text-white shadow-md' : 'text-slate-500'}`}>
              <Video size={18} /> Sản Phẩm
            </button>
            <button onClick={() => setActiveView('quiz')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold ${activeView === 'quiz' ? 'bg-amber-500 text-white shadow-md' : 'text-slate-500'}`}>
              <Award size={18} /> Kiểm Tra
            </button>
          </div>
        </div>
      </nav>

      <main>
        {activeView === 'presentation' && <Presentation />}
        {activeView === 'quiz' && <Quiz />}
        {activeView === 'creative' && <CreativeView />}
      </main>

      <ChatWidget />
    </div>
  );
}

export default App;
