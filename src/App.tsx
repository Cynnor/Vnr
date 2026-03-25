import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, MessageCircle, Send,
  TrendingUp, ShieldAlert, Award,
  BookOpen, Users, Landmark, HeartHandshake,
  CheckCircle2, AlertCircle, ArrowRight, LayoutTemplate, BrainCircuit,
  Video
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

const SectionHeader = ({ part, title, subtitle, light = false }: { part: string, title: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 max-w-4xl mx-auto">
    <span className={`font-bold tracking-wider uppercase text-sm mb-4 block ${light ? 'text-yellow-400' : 'text-red-600'}`}>{part}</span>
    <h2 className={`text-4xl md:text-5xl font-extrabold mb-5 leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    {subtitle && <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${light ? 'text-slate-300' : 'text-slate-500'}`}>{subtitle}</p>}
    <div className={`w-24 h-1.5 mx-auto rounded-full mt-6 ${light ? 'bg-yellow-400' : 'bg-red-600'}`}></div>
  </div>
);

// --- PRESENTATION ---

const Presentation = () => {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900 border-b-[6px] border-red-600">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/90 to-red-900/40 z-10"></div>
          <img src="/vietnam_history.png" alt="Lịch sử" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white flex flex-col items-center justify-center text-center">
          <FadeIn>
            {/* <span className="px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-bold tracking-widest uppercase mb-8 inline-block">
              Kịch Bản Thuyết Trình
            </span> */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              Cương Lĩnh 1991 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
                & Sự Phát Triển Tư Duy Lý Luận 
              </span>
              <br></br>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
                của Đảng về Chủ Nghĩa Xã Hội
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Hành trình từ khủng hoảng đến đột phá — bản Cương lĩnh định hình con đường đi lên CNXH của Việt Nam.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {['6 Đặc trưng CNXH', '5 Bài học lớn', 'Kinh tế thị trường XHCN', 'Tư tưởng Hồ Chí Minh'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-full border border-white/20">{tag}</span>
              ))}
            </div>
          </FadeIn>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
            {/* <ChevronDown size={40} className="text-red-500 opacity-80" /> */}
          </motion.div>
        </div>
      </section>

      {/* PHẦN 1: BỐI CẢNH */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionHeader
              part="Phần 1"
              title={<>Bối Cảnh Đòi Hỏi <span className="text-red-600">Đột Phá Tư Duy</span></>}
              subtitle="Áp lực từ trong nước và quốc tế tạo ra nhu cầu cấp bách phải đổi mới toàn diện."
            />
          </FadeIn>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <TrendingUp size={26}/>, title: "Khủng hoảng trong nước", desc: "Lạm phát vọt lên 774,7% (1986). Lương thực, hàng hóa khan hiếm, đời sống cực kỳ khó khăn." },
              { icon: <ShieldAlert size={26}/>, title: "Áp lực quốc tế", desc: "Liên Xô và Đông Âu sụp đổ (1989–1991). Mỹ tăng cường bao vây, cấm vận." },
              { icon: <AlertCircle size={26}/>, title: "Khủng hoảng mô hình", desc: "Mô hình tập trung, quan liêu, bao cấp không còn phù hợp với thực tiễn." },
              { icon: <BookOpen size={26}/>, title: "Đột phá tại Đại hội VI", desc: 'Đảng dũng cảm "nhìn thẳng vào sự thật", tự phê bình và quyết định Đổi mới toàn diện (1986).' },
              { icon: <BrainCircuit size={26}/>, title: "Khoảng trống lý luận", desc: "Thực tiễn Đổi mới đi trước, cần hệ thống lý luận hoàn chỉnh vạch rõ hình thù CNXH Việt Nam." },
              { icon: <CheckCircle2 size={26}/>, title: "Nguy cơ chệch hướng", desc: "Đổi mới toàn diện nhưng phải kiên định mục tiêu độc lập dân tộc và CNXH — yêu cầu sống còn." },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.08} className="h-full">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Ảnh lịch sử minh họa khủng hoảng */}
          <FadeIn delay={0.3} className="max-w-6xl mx-auto mt-16 px-0">
            <div className="text-center mb-8">
              <span className="bg-red-600/10 text-red-600 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-red-200">
                Tư liệu thực tế
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/50 bg-white p-2">
                <div className="overflow-hidden rounded-[2rem] aspect-[16/10]">
                  <img
                    src="/img_chen_mua_hang.jpg"
                    alt="Người dân chen mua hàng thời bao cấp"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-sm font-bold leading-relaxed shadow-sm">
                    Người dân chen nhau mua hàng tại quầy mậu dịch — cảnh tượng quen thuộc thời kỳ bao cấp
                  </p>
                  <p className="text-slate-300 text-[11px] mt-2 font-medium">Hà Nội, thập niên 1980</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/50 bg-white p-2">
                <div className="overflow-hidden rounded-[2rem] aspect-[16/10]">
                  <img
                    src="/img_xep_hang.jpg"
                    alt="Người dân xếp hàng chờ mua lương thực"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-sm font-bold leading-relaxed shadow-sm">
                    Người dân xếp hàng dài chờ mua lương thực — hình ảnh tiêu biểu của những năm tháng gian khó
                  </p>
                  <p className="text-slate-300 text-[11px] mt-2 font-medium">Của hàng lương thực, 1980s</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PHẦN 2: NỀN TẢNG TƯ TƯỞNG */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-800/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              part="Phần 2"
              title={<>Bước Tiến Vĩ Đại về <span className="text-yellow-400">Nền Tảng Tư Tưởng</span></>}
              subtitle="Lần đầu tiên, Đảng chính thức khẳng định Tư tưởng Hồ Chí Minh là kim chỉ nam cho hành động."
              light
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
              {/* Tờ báo gốc */}
              <div className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-700/50 bg-slate-800 flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <img
                    src="/img_cuong_linh_bao.jpg"
                    alt="Tờ báo đăng Cương Lĩnh Xây Dựng CNXH Trong Thời Kỳ Quá Độ năm 1991"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 px-8 py-6">
                  <span className="bg-yellow-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Tài liệu quan trọng</span>
                  <p className="text-white text-base font-bold mt-2 leading-tight">Dự thảo Cương lĩnh được công bố rộng rãi trên báo chí cuối năm 1990</p>
                </div>
              </div>
              {/* Nội dung trích dẫn */}
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-center text-center">
                <div className="text-6xl mb-8">📜</div>
                <blockquote className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-8 italic">
                  "Đảng lấy chủ nghĩa Mác - Lênin và <span className="text-yellow-400">tư tưởng Hồ Chí Minh</span> làm nền tảng tư tưởng, kim chỉ nam cho hành động."
                </blockquote>
                <p className="text-slate-400 text-sm font-medium border-t border-slate-700/50 pt-6 inline-block w-fit mx-auto">
                  Văn kiện Đại hội đại biểu toàn quốc lần thứ VII
                </p>
                <div className="mt-10 grid gap-6 text-left">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-yellow-400"></span> Ý nghĩa lý luận
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">Bước nhảy vọt về nhận thức — khắc phục triệt để tư duy mòn cũ, giáo điều.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-yellow-400"></span> Tính thực tiễn
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">Phản ánh nguyện vọng nhân dân và quy luật tất yếu của CM Việt Nam.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PHẦN 3: MÔ HÌNH CNXH */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionHeader
              part="Phần 3"
              title={<>Cụ Thể Hóa <span className="text-red-600">Mô Hình CNXH</span> tại Việt Nam</>}
              subtitle="5 bài học lớn và 6 đặc trưng cơ bản — lần đầu phác họa hoàn chỉnh diện mạo CNXH Việt Nam."
            />
          </FadeIn>

          <div className="max-w-3xl mx-auto mb-16">
            <FadeIn><h3 className="text-2xl font-extrabold text-slate-900 text-center mb-8">5 Bài Học Lớn</h3></FadeIn>
            <div className="flex flex-col gap-4">
              {[
                "Nắm vững ngọn cờ độc lập dân tộc và CNXH",
                "Sự nghiệp cách mạng là của nhân dân, do nhân dân và vì nhân dân",
                "Củng cố, tăng cường đoàn kết toàn Đảng, đoàn kết toàn dân",
                "Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
                "Sự lãnh đạo đúng đắn của Đảng là nhân tố hàng đầu bảo đảm thắng lợi",
              ].map((lesson, i) => (
                <FadeIn key={i} delay={0.08 * i}>
                  <div className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-red-200 hover:bg-red-50/50 transition-colors">
                    <span className="w-8 h-8 min-w-8 bg-red-600 text-white text-sm font-black rounded-full flex items-center justify-center">{i + 1}</span>
                    <p className="text-slate-700 font-semibold leading-relaxed">{lesson}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <FadeIn><h3 className="text-2xl font-extrabold text-slate-900 text-center mb-12">6 Đặc Trưng Cơ Bản của CNXH</h3></FadeIn>
            <div className="flex flex-col lg:flex-row gap-12 items-start">

              {/* Infographic Đại hội VII — Thu gọn tối đa, bám nội dung */}
              <FadeIn delay={0.15} className="lg:w-80 shrink-0 lg:sticky lg:top-28">
                <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-4 shadow-xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 text-center">Thông qua tại Đại Hội VII</p>
                    <div className="group overflow-hidden rounded-[2rem] shadow-inner border border-slate-200 bg-white">
                    <img
                        src="/img_dai_hoi_vii.jpg"
                        alt="Infographic Đại hội lần thứ VII của Đảng (24-27/6/1991)"
                        className="w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-5 bg-red-700">
                        <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
                            <span className="text-red-700 font-black text-xs">★</span>
                        </div>
                        <span className="text-white font-bold text-xs uppercase tracking-wider">Lịch sử Đảng</span>
                        </div>
                        <p className="text-red-50 text-[11px] font-medium leading-relaxed italic border-t border-red-500/30 pt-3">
                        "Cương lĩnh 1991 không chỉ là một văn bản, đó là trí tuệ của toàn dân..."
                        </p>
                    </div>
                </div>
                </div>
              </FadeIn>

              {/* 6 đặc trưng — Grid 2 cột sắc nét */}
              <div className="flex-1 grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Users size={22}/>, title: "Nhân dân làm chủ", desc: "Tất cả quyền lực thuộc về nhân dân lao động, do dân vì dân." },
                  { icon: <TrendingUp size={22}/>, title: "Kinh tế hiện đại", desc: "Lực lượng sản xuất phát triển cao trên cơ sở QHSX phù hợp." },
                  { icon: <Landmark size={22}/>, title: "Văn hóa dân tộc", desc: "Tiên tiến, đậm đà bản sắc, nâng tầm tâm hồn người Việt." },
                  { icon: <Award size={22}/>, title: "Đời sống ấm no", desc: "Không còn áp bức, mọi người làm theo năng lực hưởng theo lao động." },
                  { icon: <HeartHandshake size={22}/>, title: "Các dân tộc bình đẳng", desc: "Bình đẳng, đoàn kết và giúp đỡ lẫn nhau cùng tiến bộ." },
                  { icon: <ShieldAlert size={22}/>, title: "Hòa bình quốc tế", desc: "Quan hệ hữu nghị và hợp tác với nhân dân tất cả các nước." },
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.08 * i}>
                    <div className="group relative bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-red-100 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col gap-5 overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-[4rem] -mr-10 -mt-10 group-hover:bg-red-600 transition-colors duration-500"></div>
                      <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 relative z-10">{item.icon}</div>
                      <div className="relative z-10">
                        <h4 className="font-extrabold text-lg text-slate-900 mb-2 flex items-center gap-3">
                            <span className="text-red-600 group-hover:text-red-500">{i + 1}.</span> {item.title}
                        </h4>
                        <p className="text-slate-500 group-hover:text-slate-700 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PHẦN 4: THỜI KỲ QUÁ ĐỘ */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionHeader
              part="Phần 4"
              title={<>Nhận Thức Mới về <span className="text-yellow-400">Thời Kỳ Quá Độ</span></>}
              subtitle="Chấm dứt tư duy nôn nóng — khẳng định quá độ là quá trình lâu dài, nhiều chặng đường."
              light
            />
          </FadeIn>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              { emoji: "⏳", title: "Tính chất quá độ", items: ["Quá trình lịch sử lâu dài, trải qua nhiều chặng", "Đan xen đấu tranh giữa cái cũ và cái mới", "Chấm dứt hoàn toàn tư duy \"đốt cháy giai đoạn\""] },
              { emoji: "🔄", title: '"Bỏ qua" chế độ TBCN', items: ["Bỏ qua vị trí thống trị của QHSX và kiến trúc thượng tầng TBCN", "Tiếp thu, kế thừa thành tựu KH-CN của nhân loại", "Nền móng để Đại hội IX (2001) làm rõ toàn diện"] },
            ].map((block, i) => (
              <FadeIn key={i} delay={0.2 + i * 0.1}>
                <div className="bg-slate-700/50 border border-slate-600/30 rounded-3xl p-10 h-full">
                  <div className="text-4xl mb-6">{block.emoji}</div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-5">{block.title}</h3>
                  <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-3"><span className="text-yellow-400 font-bold mt-0.5 shrink-0">→</span> {item}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PHẦN 5: ĐỔI MỚI KINH TẾ & CHÍNH TRỊ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionHeader
              part="Phần 5"
              title={<>Đổi Mới Tư Duy về <span className="text-red-600">Kinh Tế & Chính Trị</span></>}
              subtitle="Từ bỏ cơ chế bao cấp, xây dựng kinh tế thị trường định hướng XHCN và nhà nước pháp quyền."
            />
          </FadeIn>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <TrendingUp size={26}/>, color: "bg-green-50 text-green-600", title: "Về Kinh Tế",
                items: ["Từ bỏ cơ chế tập trung, quan liêu, bao cấp", "Kinh tế hàng hoá nhiều thành phần theo cơ chế thị trường có quản lý", "Thừa nhận sự tồn tại lâu dài của các thành phần kinh tế", "Nền móng cho khái niệm \"Kinh tế thị trường định hướng XHCN\" (Đại hội IX-2001)"],
              },
              {
                icon: <Landmark size={26}/>, color: "bg-red-50 text-red-600", title: "Về Hệ Thống Chính Trị",
                items: ["Xây dựng Nhà nước pháp quyền XHCN của dân, do dân, vì dân", "Kiên định ĐCS Việt Nam là lực lượng lãnh đạo duy nhất", "Trực diện bác bỏ đa nguyên chính trị, đa đảng đối lập", "Đảm bảo ổn định chính trị để tập trung phát triển"],
              },
            ].map((col, i) => (
              <FadeIn key={i} delay={0.2 + i * 0.1}>
                <div className="bg-white border border-slate-100 shadow-lg rounded-3xl p-10 h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 ${col.color} rounded-2xl flex items-center justify-center`}>{col.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900">{col.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-slate-600 text-sm">
                        <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Ảnh minh họa cửa hàng hợp tác XH — Full Width Banner chuyên nghiệp */}
          <FadeIn delay={0.4} className="w-full mt-24 mb-12">
            <div className="max-w-6xl mx-auto px-0">
                <div className="group relative overflow-hidden rounded-[3rem] shadow-2xl border border-white/50 bg-slate-100">
                    <div className="aspect-[21/9] md:aspect-[3/1]">
                        <img
                            src="/img_cua_hang_hop_tac.jpg"
                            alt="Cửa hàng Hợp Tác Kinh Doanh Ngành Quốc Dép Nhựa - Hoàn Kiếm"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-in-out"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-center p-8 md:p-16">
                        <div className="max-w-xl">
                            <span className="bg-green-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full w-fit mb-6 block uppercase tracking-[0.2em] shadow-lg">
                                Bước chuyển lịch sử
                            </span>
                            <h4 className="text-white font-black text-3xl md:text-4xl leading-tight mb-4 drop-shadow-md">
                                Hợp Tác Xã Kiểu Mới
                            </h4>
                            <p className="text-slate-200 text-lg leading-relaxed drop-shadow-sm font-medium">
                                Những mô hình kinh tế hợp tác đầu tiên tại Hoàn Kiếm, Hà Nội, đánh dấu sự xóa bỏ cơ chế bao cấp, chuyển mình sang nền kinh tế hàng hóa nhiều thành phần.
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-8 right-8 text-white/20 font-black text-6xl select-none group-hover:text-white/30 transition-colors">1991</div>
                </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PHẦN 6: GIÁ TRỊ LỊCH SỬ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionHeader
              part="Phần 6"
              title={<>Giá Trị Lịch Sử & <span className="text-red-600">Liên Hệ Thực Tiễn</span></>}
              subtitle="Hơn 30 năm chứng minh: lý luận đúng đắn tạo ra những kết quả thật."
            />
          </FadeIn>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <div className="bg-slate-900 text-white rounded-3xl p-10 h-full">
                <h3 className="text-xl font-bold text-yellow-400 mb-8 flex items-center gap-3"><span>📚</span> Giá Trị Lịch Sử</h3>
                <div className="space-y-6">
                  <div className="border-b border-slate-700/50 pb-6">
                    <h4 className="font-bold text-white mb-2">Ngọn cờ tập hợp lực lượng</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Giải quyết "khủng hoảng đường lối", ổn định tư tưởng cho toàn Đảng, toàn dân trong thời khắc cam go nhất.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Nền móng cho Cương lĩnh 2011</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Viên gạch nền tảng để phát triển thành Cương lĩnh 2011, bổ sung từ <strong className="text-yellow-400">6 lên 8 đặc trưng</strong> của CNXH.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="space-y-5">
                {[
                  { emoji: "📈", title: "Kinh tế cất cánh", desc: "Lạm phát từ 67,1% (1991) → 12,7% (1995). Từ nhập khẩu gạo → Top 3 xuất khẩu gạo thế giới (1989)." },
                  { emoji: "🛡️", title: "Ổn định chính trị", desc: "Không chệch hướng, giữ vững vai trò lãnh đạo của Đảng trước cơn địa chấn khi Liên Xô sụp đổ." },
                  { emoji: "🌏", title: "Nâng tầm vị thế quốc tế", desc: "Bình thường hóa với Trung Quốc (1991), Hoa Kỳ (1995), gia nhập ASEAN (1995). Phá thế bao vây cấm vận." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-red-200 transition-colors">
                    <span className="text-3xl shrink-0">{item.emoji}</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* KẾT LUẬN */}
      <section className="py-24 bg-gradient-to-br from-red-700 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 text-[18rem] font-black leading-none">★</div>
        </div>
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <FadeIn>
            <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-4 block">Kết Luận</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-yellow-400">Giá Trị Trường Tồn</h2>
            <p className="text-xl leading-relaxed mb-6 opacity-90">
              Cương lĩnh 1991 không chỉ cứu nguy cho dân tộc trong thời điểm cam go mà còn đặt nền móng lý luận vững chắc. Hơn 30 năm qua, những giá trị cốt lõi đó vẫn tiếp tục soi đường cho đất nước phát triển phồn vinh.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PHỤ LỤC AI */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2 block">Công cụ hỗ trợ</span>
              <h3 className="text-3xl font-extrabold text-slate-900">Phụ Lục AI</h3>
              <div className="w-12 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
              {[
                { name: "Gamma", desc: "Thiết kế slide & cấu trúc", icon: "🎨" },
                { name: "Gemini", desc: "Hỗ trợ nội dung & AI Chat", icon: "✨" },
                { name: "NotebookLM", desc: "Phân tích tài liệu nguồn", icon: "📑" },
                { name: "ChatGPT", desc: "Tối ưu hóa ngôn ngữ", icon: "💬" },
                { name: "Heyzine", desc: "Nền tảng sách lật tương tác", icon: "📖" },
              ].map((ai, i) => (
                <div key={i} className="bg-white px-8 py-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center min-w-[200px] flex-1 hover:shadow-md transition-shadow">
                  <span className="text-3xl mb-3">{ai.icon}</span>
                  <h4 className="font-bold text-slate-900 mb-1">{ai.name}</h4>
                  <p className="text-slate-500 text-xs text-center leading-relaxed">{ai.desc}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center text-slate-400 text-sm mt-12 font-medium italic">
              "Kết hợp trí tuệ nhân tạo để lan tỏa tri thức lịch sử Đảng một cách sinh động và hiện đại."
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

// --- CREATIVE VIDEO ---

const CreativeView = () => {
  return (
    <div className="min-h-screen pt-28 pb-12 bg-slate-100 flex flex-col items-center">
      {/* HEADER */}
      <div className="container mx-auto px-6 max-w-4xl text-center mb-16">
        <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-3 block">Góc Sáng Tạo</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Sản Phẩm Sáng Tạo</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Tài liệu đa phương tiện tóm tắt những giá trị cốt lõi của Cương lĩnh 1991 dưới dạng sách lật tương tác.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* PRODUCT: HEYZINE FLIPBOOK */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
              <BookOpen size={28} />
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900">Flipbook Tương Tác</h3>
              <p className="text-slate-500 font-medium">Cương lĩnh 1991 - Dấu ấn đổi mới & Bản lĩnh lý luận của Đảng</p>
            </div>
          </div>

          <div className="w-full bg-white transition-all duration-700">
            <div className="relative aspect-[16/10] md:h-[800px]">
              <iframe 
                src="https://heyzine.com/flip-book/a2ced1412a.html" 
                className="w-full h-full border-none shadow-sm"
                allowFullScreen 
                allow="clipboard-write"
                title="Cương lĩnh 1991 Flipbook"
              ></iframe>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4">
                <ShieldAlert size={20} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Bản lĩnh lý luận</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Khẳng định nền tảng tư tưởng và định hướng đi lên CNXH của dân tộc.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center mb-4">
                <BrainCircuit size={20} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Đột phá tư duy</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Tóm lược các bài học kinh nghiệm và đặc trưng cốt lõi của mô hình mới.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp size={20} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Giá trị thực tiễn</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Phản ánh thành tựu đổi mới và vị thế của Việt Nam trên trường quốc tế.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// --- QUIZ ---

const Quiz = () => {
  const questions = [
    { q: "Lạm phát ở Việt Nam năm 1986 đỉnh điểm lên tới bao nhiêu phần trăm?", options: ["Khoảng 100%", "Khoảng 500%", "Khoảng 774%", "Hơn 1000%"], ans: 2 },
    { q: "Văn kiện nào được đánh giá là 'Ngọn đuốc lý luận'?", options: ["Đại hội VI (1986)", "Cương lĩnh 1991", "Nghị quyết Trung ương 4", "Hiến pháp 1992"], ans: 1 },
    { q: "Nhờ chính sách Khoán 10, Việt Nam vươn lên đạt vị trí nào về xuất khẩu gạo?", options: ["Tự cung tự cấp", "Top 10 thế giới", "Top 3 thế giới", "Đứng số 1"], ans: 2 },
    { q: "Cương lĩnh 1991 xác định bao nhiêu đặc trưng cơ bản của CNXH?", options: ["4 đặc trưng", "5 đặc trưng", "6 đặc trưng", "8 đặc trưng"], ans: 2 },
    { q: "Năm nào Việt Nam bình thường hóa quan hệ với Hoa Kỳ?", options: ["1991", "1993", "1995", "1997"], ans: 2 },
  ];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState<number | null>(null);

  const handleSelected = (idx: number) => {
    if (idx === questions[current].ans) {
      if (current < questions.length - 1) setCurrent(c => c + 1);
      else setScore(questions.length);
    } else setScore(-1);
  };
  const reset = () => { setCurrent(0); setScore(null); };

  return (
    <div className="min-h-screen pt-28 pb-12 bg-slate-50 flex flex-col items-center">
      <div className="container mx-auto px-6 max-w-3xl flex-1 flex flex-col justify-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-3 block">Mini Game</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Tổng Kết Kiến Thức</h2>
          <div className="w-16 h-1.5 bg-amber-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-500">{questions.length} câu hỏi · Chọn đáp án đúng để tiếp tục</p>
        </motion.div>
        <AnimatePresence mode="wait">
          {score === questions.length ? (
            <motion.div key="win" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-green-100 text-center">
              <CheckCircle2 className="text-green-500 mx-auto mb-6" size={64} />
              <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Hoàn Hảo! 🎉</h3>
              <p className="text-slate-500 mb-6">Bạn đã trả lời đúng tất cả {questions.length} câu hỏi!</p>
              <button onClick={reset} className="px-10 py-4 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-colors">Trải nghiệm lại</button>
            </motion.div>
          ) : score === -1 ? (
            <motion.div key="lose" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-red-100 text-center">
              <AlertCircle className="text-red-500 mx-auto mb-6" size={64} />
              <h3 className="text-4xl font-extrabold text-red-600 mb-4">Rất tiếc!</h3>
              <p className="text-slate-500 mb-6">Đáp án chưa đúng, hãy thử lại nhé!</p>
              <button onClick={() => setScore(null)} className="px-10 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-700 transition-colors">Làm lại câu vừa rồi</button>
            </motion.div>
          ) : (
            <motion.div key={current} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-slate-100">
              <div className="flex justify-between items-center mb-8 text-sm text-slate-400 font-medium">
                <span>Câu {current + 1} / {questions.length}</span>
                <div className="flex gap-1">{questions.map((_, i) => <div key={i} className={`w-8 h-1.5 rounded-full ${i < current ? 'bg-green-400' : i === current ? 'bg-amber-400' : 'bg-slate-200'}`}></div>)}</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-10 leading-tight">{questions[current].q}</h3>
              <div className="grid gap-4">
                {questions[current].options.map((opt, i) => (
                  <button key={i} onClick={() => handleSelected(i)} className="text-left px-8 py-5 rounded-2xl border-2 border-slate-100 hover:border-amber-400 hover:bg-amber-50 font-semibold flex justify-between items-center transition-colors">
                    {opt} <ArrowRight size={20} className="text-amber-500 shrink-0" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- CHAT WIDGET ---

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
      const history = messages.filter(m => m.role !== 'ai' || !m.text.startsWith('Chào bạn')).map(m => ({
        role: m.role === 'ai' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));
      const contextPrompt = "Bạn là trợ lý AI tên VNR hỗ trợ học tập về Lịch sử Đảng, đặc biệt Cương lĩnh 1991. Hãy trả lời ngắn gọn, lịch sự, chính xác.";
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: contextPrompt }] },
            { role: 'model', parts: [{ text: "Tôi đã hiểu. Tôi sẽ trả lời với tư cách chuyên gia về Cương lĩnh 1991." }] },
            ...history,
            { role: 'user', parts: [{ text: userText }] }
          ]
        })
      });
      const data = await response.json();
      if (data.error) {
        setMessages(prev => [...prev, { role: 'ai', text: `Lỗi API: ${data.error.message}` }]);
      } else {
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Xin lỗi, không thể trả lời lúc này.";
        setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
      }
    } catch {
      setMessages(prev => [...prev, { role: 'ai', text: "Lỗi kết nối mạng, vui lòng thử lại." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 w-16 h-16 bg-red-600 rounded-full flex justify-center items-center text-white shadow-xl z-50 border-4 border-white hover:scale-110 transition-transform">
          <MessageCircle size={28} />
        </button>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col border border-slate-200 h-[500px] max-h-[80vh] overflow-hidden">
            <div className="bg-slate-900 p-4 flex justify-between items-center text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg"><BrainCircuit className="text-amber-400" size={20} /></div>
                <div>
                  <div className="font-bold">Trợ lý Lịch Sử Đảng</div>
                  <div className="text-xs text-green-400 flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-slate-800 p-2 rounded-full transition-colors"><X size={20} /></button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col">
              {messages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 max-w-[85%] text-sm rounded-2xl p-3 shadow-sm ${m.role === 'user' ? 'bg-red-600 text-white ml-auto rounded-tr-sm' : 'bg-white border text-slate-700 rounded-tl-sm'}`}>
                  {m.role === 'ai' ? (
                    <div dangerouslySetInnerHTML={{ __html: m.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />
                  ) : m.text}
                </motion.div>
              ))}
              {isLoading && (
                <div className="mb-4 bg-white border p-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-2 w-16">
                  {[0, 150, 300].map(d => <div key={d} className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }}></div>)}
                </div>
              )}
              <div ref={endRef} />
            </div>
            <div className="p-3 bg-white border-t shrink-0">
              <div className="flex gap-2 relative">
                <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} disabled={isLoading}
                  className="flex-1 bg-slate-100 pl-4 pr-12 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 disabled:opacity-50"
                  placeholder="Hỏi về Cương lĩnh 1991..." />
                <button onClick={handleSend} disabled={isLoading || !input.trim()}
                  className="absolute right-1 top-1 w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center hover:bg-red-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors">
                  <Send size={18} />
                </button>
              </div>
              <div className="text-[10px] text-center text-slate-400 mt-2">Kết nối API Gemini</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- APP ---

function App() {
  const [activeView, setActiveView] = useState<'presentation' | 'quiz' | 'creative'>('presentation');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="font-sans antialiased text-slate-900 bg-slate-50 selection:bg-red-500/30">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveView('presentation')}>
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg border border-red-500/20">
              <span className="text-yellow-400 font-black text-xl">★</span>
            </div>
            <div className="hidden lg:block">
              <h1 className="font-extrabold text-slate-900 tracking-tight">Cương lĩnh 1991</h1>
              <p className="text-xs text-slate-500 font-medium">Tư duy lý luận của Đảng</p>
            </div>
          </div>
          <div className="hidden md:flex bg-slate-100 rounded-full p-1">
            <button onClick={() => setActiveView('presentation')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeView === 'presentation' ? 'bg-white text-red-600 shadow-md' : 'text-slate-500 hover:text-slate-800'}`}>
              <LayoutTemplate size={18} /> Nội Dung
            </button>
            <button onClick={() => setActiveView('creative')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeView === 'creative' ? 'bg-red-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}>
              <Video size={18} /> Sản Phẩm
            </button>
            <button onClick={() => setActiveView('quiz')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeView === 'quiz' ? 'bg-amber-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}>
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
