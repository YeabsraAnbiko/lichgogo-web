export default function inputField(props) {
  return (
       <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">{props.field}</label>
           <input type={props.type} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" required />
       </div>
  );
};
