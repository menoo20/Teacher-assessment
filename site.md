import React, { useState } from 'react';
import { Globe, Video, FileText, CheckCircle, AlertTriangle, User, ChevronDown, ChevronUp, BarChart3, Brain, Mic, Briefcase } from 'lucide-react';

const CandidateReport = () => {
  const [lang, setLang] = useState('ar'); 
  const [expandedId, setExpandedId] = useState(null);
  const [imgError, setImgError] = useState(false);

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const content = {
    ar: {
      instituteName: "معهد الذهب الأسود العالي للتدريب",
      instituteAbbr: "BGTI",
      reportTitle: "لوحة تحليل كفاءة المدربين - التقرير الفني والسلوكي",
      disclaimer: "تنويه: يستند هذا التحليل إلى رصد دقيق لمقابلات فيديو موثقة، تحليل لغة الجسد، والتدقيق اللغوي. التقييمات المقدمة هي مؤشرات فنية لدعم اتخاذ القرار، ويبقى القرار النهائي للتوظيف خاضعاً لرؤية إدارة المعهد واحتياجاته.",
      switchBtn: "English",
      sections: {
        comparison: "مؤشرات الأداء المقارنة",
        details: "التحليل العميق (فني وسلوكي)",
        videoSource: "تم التحليل بناءً على تسجيلات مرئية"
      },
      labels: {
        expand: "عرض التحليل العميق",
        collapse: "إخفاء التفاصيل",
        score: "مؤشر التوافق العام",
        deepDive: "التحليل النوعي للمرشح",
        psychometrics: "التحليل السلوكي والنفسي",
        linguistics: "التدقيق اللغوي والأخطاء",
        vocational: "الملاءمة لبيئة التدريب (كبار)",
        adminNote: "توصية للموارد البشرية"
      },
      candidates: [
        {
          id: 1,
          name: "د. شرف الدين عثمان",
          role: "مدرب لغة إنجليزية (دكتوراه)",
          status: "high",
          badge: "توافق عالي مع المعايير",
          score: 96,
          summary: "يمثل قيمة أكاديمية مضافة للمعهد. يجمع بين التمكن العلمي (دكتوراه) والمرونة النفسية في التعامل مع مستويات الطلاب المختلفة.",
          details: {
            behavior: "أظهر 'تطابقاً نفسياً' (Congruence) عالياً؛ لغة جسده هادئة ومتزنة تعكس ثقة بالنفس وتواضعاً. تعامله مع التحديات التقنية أثناء المقابلة عكس صبراً وذكاءً عاطفياً، وهي سمات حيوية لمدرب يتعامل مع فوارق فردية.",
            language: "لغة إنجليزية معيارية خالية من الأخطاء القواعدية. يستخدم مصطلحات دقيقة. اللكنة واضحة جداً (International Intelligibility) مما يسهل الفهم على المبتدئين.",
            vocational: "ذكر صراحة استمتاعه بتدريس 'الطلاب الضعاف' ورؤية تقدمهم (الدقيقة 11:00)، وهذا مؤشر ممتاز لمدرب مهني. التحدي الوحيد هو التأكد من عدم استخدامه أسلوباً أكاديمياً جافاً.",
            adminSuggestion: "مرشح قوي لقيادة الفريق الأكاديمي أو تدريس المستويات التأسيسية التي تتطلب صبراً وخبرة."
          }
        },
        {
          id: 2,
          name: "إسماعيل أحمد سراري",
          role: "معلم لغة إنجليزية",
          status: "concern",
          badge: "ملاحظات إدارية وفنية جوهرية",
          score: 45,
          summary: "لديه خبرة ميدانية، لكن المؤشرات السلوكية واللغوية تظهر تبايناً مع متطلبات 'المعهد العالي'. يحتاج قرار التوظيف لمراجعة دقيقة للمخاطر.",
          details: {
            behavior: "بيئة المقابلة (بوفية صاخبة) تعكس ضعفاً في الحكم المهني (Professional Judgment). قضى وقتاً طويلاً (03:30 - 05:15) في سرد مظالم ضد كفيله الحالي؛ نفسياً، هذا يشير لشخصية تميل للعب دور الضحية وقد تنقل هذه الروح السلبية لبيئة العمل في المعهد.",
            language: "رصد أخطاء لغوية لا يجب أن تصدر من معلم، مثل: 'we was' بدلاً من 'we were'. هذه الأخطاء يصعب تصحيحها لأنها أصبحت جزءاً من تكوينه اللغوي.",
            vocational: "استخدم مصطلح 'أطفال' لوصف المتدربين، مما قد يشير لذهنية 'معلم مدرسة' وليس 'مدرب كبار'. هذا قد يسبب حساسية للمتدربين الكبار في المعهد.",
            adminSuggestion: "يُنصح بإجراء مقابلة ثانية (Behavioral Interview) للتحقق من مرونته وقدرته على الالتزام دون شكوى مستمرة."
          }
        },
        {
          id: 3,
          name: "أحمد المرحوم",
          role: "معلم لغة إنجليزية",
          status: "low",
          badge: "مستوى الكفاءة يحتاج تقييم",
          score: 30,
          summary: "يتمتع بشخصية محبوبة ومرنة، لكن الفجوة اللغوية (IELTS 5.5) قد تشكل عائقاً أمام تقديم تدريب نوعي يليق باسم المعهد.",
          details: {
            behavior: "المرونة العالية والود هي سلاح ذو حدين؛ قد يكسب حب الطلاب بسرعة، لكن في بيئة التدريب المهني، قد يتحول ذلك إلى تساهل في المعايير التعليمية للحفاظ على الشعبية.",
            language: "درجة 5.5 تعادل مستوى B2 (فوق المتوسط). المدرب يحتاج عادة لمستوى C1 (متقدم) على الأقل ليكون قادراً على شرح تعقيدات اللغة وتصحيح الأخطاء بدقة وثقة.",
            vocational: "مناسب للأدوار الإدارية أو التنسيقية أكثر من التدريس المباشر، حيث أن فاقد الشيء لا يعطيه في التأسيس اللغوي الصحيح.",
            adminSuggestion: "يمكن النظر في توظيفه في أدوار مساندة أو علاقات عامة نظراً لشخصيته، ولكن ليس كمدرب رئيسي."
          }
        }
      ]
    },
    en: {
      instituteName: "Black Gold Higher Training Institute",
      instituteAbbr: "BGTI",
      reportTitle: "Instructors Competency Dashboard - Technical & Behavioral Analysis",
      disclaimer: "Disclaimer: This analysis is based on documented video interviews, body language interpretation, and linguistic audits. These technical insights are provided to support decision-making. The final hiring decision rests solely with the Institute Administration.",
      switchBtn: "العربية",
      sections: {
        comparison: "Comparative Performance Indicators",
        details: "Deep Dive Analysis (Technical & Behavioral)",
        videoSource: "Analyzed from Video Recordings"
      },
      labels: {
        expand: "View Deep Dive",
        collapse: "Hide Details",
        score: "Alignment Score",
        deepDive: "Qualitative Candidate Analysis",
        psychometrics: "Behavioral & Psychological Profiling",
        linguistics: "Linguistic Audit & Errors",
        vocational: "Adult Vocational Suitability",
        adminNote: "Recommendation for HR"
      },
      candidates: [
        {
          id: 1,
          name: "Dr. Sharaf Eldin Osman",
          role: "Vocational Instructor (PhD)",
          status: "high",
          badge: "High Alignment with Standards",
          score: 96,
          summary: "Adds academic prestige to the institute. Combines scientific mastery (PhD) with psychological resilience suitable for diverse learner levels.",
          details: {
            behavior: "Demonstrated high psychological congruence; calm, balanced body language reflecting confidence and humility. His patience with technical lags indicates emotional intelligence, crucial for handling individual differences.",
            language: "Standard, error-free English. Uses precise terminology. Accent is highly intelligible internationally, facilitating understanding for beginners.",
            vocational: "Explicitly mentioned enjoying teaching 'weak students' and seeing their progress (11:00). This is a prime indicator of a vocational instructor. The only challenge is ensuring he avoids dry academic lecturing.",
            adminSuggestion: "Strong candidate for Academic Lead or foundational levels requiring patience and expertise."
          }
        },
        {
          id: 2,
          name: "Ismail Ahmed Sarary",
          role: "English Teacher",
          status: "concern",
          badge: "Significant Operational Observations",
          score: 45,
          summary: "Has field experience, but behavioral and linguistic indicators show divergence from 'Higher Institute' requirements. Hiring decision requires careful risk assessment.",
          details: {
            behavior: "Interview environment (noisy garage) suggests poor Professional Judgment. Spent significant time (03:30 - 05:15) airing grievances against current sponsor; psychologically, this suggests a 'victim mentality' that could negatively impact institute culture.",
            language: "Fossilized errors detected (e.g., 'we was' instead of 'we were'). Such ingrained errors are unacceptable in an instructor modeling the language.",
            vocational: "Referred to trainees as 'children,' indicating a 'school-teacher' mindset rather than an andragogical (adult learning) approach. This may cause friction with adult trainees.",
            adminSuggestion: "A second 'Behavioral Interview' is advised to test resilience and ability to commit without constant complaint."
          }
        },
        {
          id: 3,
          name: "Ahmed Al Marhoom",
          role: "English Teacher",
          status: "low",
          badge: "Proficiency Level Under Threshold",
          score: 30,
          summary: "Very flexible and charismatic personality, but the linguistic gap (IELTS 5.5) poses a barrier to delivering quality training befitting the institute's name.",
          details: {
            behavior: "High flexibility and friendliness are double-edged; he may win students' affection quickly, but in vocational training, this risks compromising standards to maintain popularity.",
            language: "A 5.5 score is Upper-Intermediate (B2). An instructor typically needs at least Advanced (C1) to explain language mechanics and correct errors with authority.",
            vocational: "More suitable for administrative or coordination roles than direct instruction, as one cannot effectively teach what one has not mastered foundationally.",
            adminSuggestion: "Consider for support or PR roles due to his personality, but not recommended as a lead instructor."
          }
        }
      ]
    }
  };

  const t = content[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const getStatusStyle = (status) => {
    switch (status) {
      case 'high': return { border: 'border-l-4 border-l-yellow-500', bg: 'bg-white', badge: 'bg-green-100 text-green-800', bar: 'bg-yellow-500' };
      case 'concern': return { border: 'border-l-4 border-l-orange-400', bg: 'bg-white', badge: 'bg-orange-100 text-orange-800', bar: 'bg-orange-400' };
      case 'low': return { border: 'border-l-4 border-l-gray-400', bg: 'bg-white', badge: 'bg-gray-100 text-gray-800', bar: 'bg-gray-400' };
      default: return {};
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 font-sans ${dir}`} dir={dir}>
      {/* Header */}
      <header className="bg-black text-white shadow-md border-b-4 border-yellow-500 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-lg p-1 flex items-center justify-center overflow-hidden">
               {/* Logo with Fallback */}
               {!imgError ? (
                 <img 
                   src="black-gold-sold-1.png" 
                   alt="BGTI Logo" 
                   className="w-full h-full object-contain"
                   onError={() => setImgError(true)}
                 />
               ) : (
                 <span className="text-xl font-black text-slate-800 tracking-tighter">BGTI</span>
               )}
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-yellow-500 uppercase tracking-wider">{t.instituteAbbr}</h1>
              <p className="text-xs md:text-sm text-gray-300">{t.instituteName}</p>
            </div>
          </div>
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-sm font-medium transition-colors border border-gray-600"
          >
            <Globe size={16} />
            {t.switchBtn}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        
        {/* Report Title & Disclaimer */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="text-yellow-600" />
            {t.reportTitle}
          </h2>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-md text-sm text-blue-800 flex gap-3">
            <Video className="shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold mb-1">{t.sections.videoSource}</p>
              <p className="opacity-90">{t.disclaimer}</p>
            </div>
          </div>
        </div>

        {/* Candidates List */}
        <div className="space-y-8">
          {t.candidates.map((candidate) => {
            const styles = getStatusStyle(candidate.status);
            const isExpanded = expandedId === candidate.id;

            return (
              <div key={candidate.id} className={`rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ${styles.border} ${styles.bg}`}>
                
                {/* Main Card */}
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                  {/* Avatar & Score */}
                  <div className="flex flex-col items-center justify-center gap-3 md:w-1/5 shrink-0 border-b md:border-b-0 md:border-r md:rtl:border-r-0 md:rtl:border-l border-gray-100 pb-6 md:pb-0">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                      <User size={40} />
                    </div>
                    <div className="text-center w-full">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.labels.score}</span>
                      <div className="text-3xl font-black text-gray-800 mt-1">{candidate.score}<span className="text-sm text-gray-400 font-normal">%</span></div>
                      <div className="w-full bg-gray-200 h-2 rounded-full mt-2 overflow-hidden">
                        <div className={`h-full ${styles.bar}`} style={{ width: `${candidate.score}%` }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{candidate.name}</h3>
                        <p className="text-gray-500 text-sm font-medium">{candidate.role}</p>
                      </div>
                      <span className={`px-3 py-1 rounded text-xs font-bold w-fit ${styles.badge}`}>
                        {candidate.badge}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {candidate.summary}
                    </p>

                    <button 
                      onClick={() => toggleExpand(candidate.id)}
                      className="flex items-center gap-2 text-sm font-bold text-yellow-700 hover:text-yellow-800 transition-colors"
                    >
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      {isExpanded ? t.labels.collapse : t.labels.expand}
                    </button>
                  </div>
                </div>

                {/* Deep Dive Section */}
                {isExpanded && (
                  <div className="bg-gray-50 border-t border-gray-200 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
                      <BarChart3 className="text-yellow-600" />
                      {t.labels.deepDive}
                    </h4>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Psychometrics */}
                      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                        <h5 className="text-sm font-bold text-blue-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                          <Brain size={16} className="text-blue-500" />
                          {t.labels.psychometrics}
                        </h5>
                        <p className="text-sm text-gray-700 leading-7">
                          {candidate.details.behavior}
                        </p>
                      </div>

                      {/* Linguistics */}
                      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                        <h5 className="text-sm font-bold text-purple-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                          <Mic size={16} className="text-purple-500" />
                          {t.labels.linguistics}
                        </h5>
                        <p className="text-sm text-gray-700 leading-7">
                          {candidate.details.language}
                        </p>
                      </div>

                      {/* Vocational Fit */}
                      <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm md:col-span-2">
                        <h5 className="text-sm font-bold text-emerald-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                          <Briefcase size={16} className="text-emerald-500" />
                          {t.labels.vocational}
                        </h5>
                        <p className="text-sm text-gray-700 leading-7">
                          {candidate.details.vocational}
                        </p>
                      </div>

                      {/* Admin Note */}
                      <div className={`p-4 rounded-lg md:col-span-2 border ${candidate.status === 'high' ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'}`}>
                        <span className="font-bold text-sm block mb-1 text-gray-900">{t.labels.adminNote}:</span>
                        <p className="text-sm text-gray-800">
                          {candidate.details.adminSuggestion}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-10 mt-12 text-center text-xs">
        <p className="mb-2 text-yellow-600 font-bold">{t.instituteName}</p>
        <p>Internal Evaluation Report | Confidential | 2025</p>
      </footer>
    </div>
  );
};

export default CandidateReport;