const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
    {icon}
    <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
)

export default FeatureCard