import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 py-12 px-4 md:px-20 border-t border-slate-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-4 font-sora">Nimbus IT</h3>
                    <p className="text-slate-400 mb-6 max-w-sm">
                        Empowering businesses with reliable, secure, and scalable IT solutions. Your success is our priority.
                    </p>
                    <div className="flex gap-4">
                        {/* Social placeholders */}
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">𝕏</div>
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">in</div>
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">fb</div>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6 font-sora">Services</h4>
                    <ul className="space-y-3">
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">Cloud Solutions</Link></li>
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">Network Security</Link></li>
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">IT Support</Link></li>
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">Data Backup</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6 font-sora">Company</h4>
                    <ul className="space-y-3">
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                        <li><Link to="#" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Nimbus IT Solutions. All rights reserved.
            </div>
        </footer>
    );
}
