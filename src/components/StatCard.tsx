export type StatCardProps = {
  value: string
  label: string
}

const StatCard = ({ value, label }: StatCardProps): JSX.Element => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg text-center">
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

export default StatCard

