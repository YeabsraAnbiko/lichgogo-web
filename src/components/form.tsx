export default function LoginForm() {
  return (
   <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="md:col-span-2">
           <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
           <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" required></textarea>
       </div>
       <div className="md:col-span-2 text-center">
           <button type="submit" className="px-8 py-3 bg-primary text-white !rounded-button hover:bg-primary/90">
               Send Message
           </button>
       </div>
   </form>
  );
}
