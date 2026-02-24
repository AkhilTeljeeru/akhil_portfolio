import { X } from 'lucide-react';
import { useEffect } from 'react';

const ResumeModal = ({ isOpen, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in py-8 px-4">

            {/* Modal Container */}
            <div className="relative w-full max-w-4xl h-[90vh] glass rounded-xl border border-[var(--glass-border)] flex flex-col overflow-hidden shadow-2xl animate-slide-up">

                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-[var(--divider)] bg-[var(--bg-secondary)]">
                    <h3 className="font-mono text-primary font-bold">Resume.pdf</h3>
                    <div className="flex gap-4 items-center">
                        <a
                            href="/resume.pdf"
                            download
                            className="text-sm font-medium text-accent-blue hover:text-white transition-colors"
                        >
                            Download PDF
                        </a>
                        <button
                            onClick={onClose}
                            className="text-secondary hover:text-red-400 transition-colors p-1"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* PDF Viewer Body */}
                <div className="flex-grow bg-[#333] w-full h-full relative">
                    <iframe
                        src="/resume.pdf#toolbar=0"
                        className="w-full h-full border-none"
                        title="Resume Preview"
                    />

                    {/* Fallback for browsers that don't support iframe PDF viewing well */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 md:opacity-100 mix-blend-difference" style={{ zIndex: -1 }}>
                        <p className="text-white text-sm">Loading PDF Viewer...</p>
                    </div>
                </div>

            </div>

            {/* Click outside to close (backdrop) */}
            <div className="absolute inset-0 z-[-1]" onClick={onClose} />

        </div>
    );
};

export default ResumeModal;
