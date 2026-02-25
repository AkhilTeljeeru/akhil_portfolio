import { Briefcase, Code, BrainCircuit, Layout } from 'lucide-react';

const Opportunities = () => {
    return (
        <section id="opportunities" className="section relative flex items-center justify-center">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans flex items-center justify-center gap-3">
                        <Briefcase className="text-primary" size={32} />
                        <span className="text-primary">Seeking <span className="text-gradient">Opportunities</span> As:</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center mb-6 group-hover:bg-green-400/10 transition-colors">
                            <BrainCircuit size={28} className="text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">AI Engineer</h3>
                        <p className="text-sm text-secondary">
                            Designing intelligent models, NLP systems, and scalable predictive analytics infrastructure.
                        </p>
                    </div>

                    <div className="card flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center mb-6 group-hover:bg-red-400/10 transition-colors">
                            <Code size={28} className="text-red-400" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">Cybersecurity Engineer</h3>
                        <p className="text-sm text-secondary">
                            Securing networks, ethical hacking, OS hardening, and implementing robust access controls.
                        </p>
                    </div>

                    <div className="card flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center mb-6 group-hover:bg-accent-main/10 transition-colors">
                            <Layout size={28} className="text-accent-main" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">Software Developer</h3>
                        <p className="text-sm text-secondary">
                            Building scalable applications, backend services, and efficient problem-solving solutions using modern programming languages and data structures.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Opportunities;









