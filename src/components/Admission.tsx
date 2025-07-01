import { admissionsInfo } from "@/lib/contents/admissions";

const Admissions = () => {
    return (
        <section
            id="admissions"
            className="py-20 bg-gray-50"
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Begin Your Journey</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Take the first step towards your future at Lichogogo Boarding School of Excellence. Our admissions team is here to guide you through the process.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {admissionsInfo.map(({ icon, title, items }) => (
                        <div key={title} className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                                <i className={`${icon} text-2xl text-primary`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                {items.map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <i className="ri-checkbox-circle-line text-primary mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Admissions;
