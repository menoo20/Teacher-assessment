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
                        status: "concern",
                        badge: "Needs Linguistic Development Plan",
                        score: 65,
                        summary: "Very charismatic and likable personality. Linguistic level needs boosting (IELTS 5.5), but his ability to win over students is excellent.",
                        details: {
                            behavior: "High flexibility and friendliness are major strengths; he will quickly gain students' trust, enhancing retention. Just needs to balance fun with seriousness.",
                            language: "Current level (B2) is very suitable for foundational levels and general conversation. With professional development, his academic performance will improve quickly.",
                            vocational: "Ideal for roles requiring interaction and energy. Can teach early levels effectively where encouragement matters more than linguistic complexity.",
                            adminSuggestion: "Can be hired for foundational levels, leveraging his energy in student activities."
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
            case 'average': return { border: 'border-l-4 border-l-blue-400', bg: 'bg-white', badge: 'bg-blue-100 text-blue-800', bar: 'bg-blue-400' };
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
