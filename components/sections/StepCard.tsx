const StepCard = ({ number, title, description }: { number: number, title: string, description: string }) => (
  <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-lg">
    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
      {number}
    </div>
    <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
)

export default StepCard